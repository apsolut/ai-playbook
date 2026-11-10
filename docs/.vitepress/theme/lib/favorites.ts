/**
 * Favorites / bookmarks via IndexedDB (browser-only).
 * Survives reloads; no account required.
 */

export type Favorite = {
  path: string
  title: string
  section: string
  addedAt: number
}

const DB_NAME = 'apsolut-ai-playbook'
const DB_VERSION = 1
const STORE = 'favorites'

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof indexedDB !== 'undefined'
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onerror = () => reject(req.error)
    req.onsuccess = () => resolve(req.result)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: 'path' })
        store.createIndex('addedAt', 'addedAt', { unique: false })
        store.createIndex('section', 'section', { unique: false })
      }
    }
  })
}

export async function listFavorites(): Promise<Favorite[]> {
  if (!isBrowser()) return []
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly')
    const req = tx.objectStore(STORE).getAll()
    req.onsuccess = () => {
      const items = (req.result as Favorite[]).sort((a, b) => b.addedAt - a.addedAt)
      resolve(items)
    }
    req.onerror = () => reject(req.error)
  })
}

export async function isFavorite(path: string): Promise<boolean> {
  if (!isBrowser()) return false
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly')
    const req = tx.objectStore(STORE).get(normalizePath(path))
    req.onsuccess = () => resolve(Boolean(req.result))
    req.onerror = () => reject(req.error)
  })
}

export async function addFavorite(fav: Omit<Favorite, 'addedAt'>): Promise<void> {
  if (!isBrowser()) return
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite')
    tx.objectStore(STORE).put({
      ...fav,
      path: normalizePath(fav.path),
      addedAt: Date.now(),
    })
    tx.oncomplete = () => {
      emitChange()
      resolve()
    }
    tx.onerror = () => reject(tx.error)
  })
}

export async function removeFavorite(path: string): Promise<void> {
  if (!isBrowser()) return
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite')
    tx.objectStore(STORE).delete(normalizePath(path))
    tx.oncomplete = () => {
      emitChange()
      resolve()
    }
    tx.onerror = () => reject(tx.error)
  })
}

export async function toggleFavorite(
  fav: Omit<Favorite, 'addedAt'>,
): Promise<boolean> {
  const path = normalizePath(fav.path)
  if (await isFavorite(path)) {
    await removeFavorite(path)
    return false
  }
  await addFavorite({ ...fav, path })
  return true
}

export async function clearFavorites(): Promise<void> {
  if (!isBrowser()) return
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite')
    tx.objectStore(STORE).clear()
    tx.oncomplete = () => {
      emitChange()
      resolve()
    }
    tx.onerror = () => reject(tx.error)
  })
}

/** Export as JSON for backup / another browser */
export async function exportFavoritesJson(): Promise<string> {
  const items = await listFavorites()
  return JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), items }, null, 2)
}

export async function importFavoritesJson(json: string): Promise<number> {
  const data = JSON.parse(json) as { items?: Favorite[] }
  const items = data.items ?? []
  let n = 0
  for (const item of items) {
    if (item?.path && item?.title) {
      await addFavorite({
        path: item.path,
        title: item.title,
        section: item.section || sectionFromPath(item.path),
      })
      n++
    }
  }
  return n
}

export function normalizePath(path: string): string {
  if (!path) return '/'
  let p = path.split('?')[0].split('#')[0]
  if (!p.startsWith('/')) p = `/${p}`
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1)
  // strip .html for cleanUrls consistency
  if (p.endsWith('.html')) p = p.slice(0, -5) || '/'
  return p || '/'
}

export function sectionFromPath(path: string): string {
  const parts = normalizePath(path).split('/').filter(Boolean)
  if (!parts.length) return 'Home'
  const map: Record<string, string> = {
    'work-with-ai': 'Work with AI',
    'run-agents': 'Run agents',
    'offer-clients': 'Offer clients',
    'what-to-buy': 'What to buy',
    legal: 'Legal DE/EU',
    favorites: 'Favorites',
    about: 'About',
  }
  return map[parts[0]] ?? parts[0]
}

const listeners = new Set<() => void>()

export function onFavoritesChange(cb: () => void): () => void {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

function emitChange() {
  listeners.forEach((cb) => cb())
}
