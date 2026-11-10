<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  listFavorites,
  removeFavorite,
  clearFavorites,
  exportFavoritesJson,
  importFavoritesJson,
  onFavoritesChange,
  type Favorite,
} from '../lib/favorites'

const items = ref<Favorite[]>([])
const status = ref('')
const fileInput = ref<HTMLInputElement | null>(null)

async function refresh() {
  items.value = await listFavorites()
}

async function remove(path: string) {
  await removeFavorite(path)
  await refresh()
}

async function clearAll() {
  if (!items.value.length) return
  if (!confirm('Clear all favorites on this browser?')) return
  await clearFavorites()
  await refresh()
  status.value = 'Cleared.'
}

async function doExport() {
  const json = await exportFavoritesJson()
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `ai-playbook-favorites-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
  status.value = 'Exported JSON.'
}

function triggerImport() {
  fileInput.value?.click()
}

async function onImportFile(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  try {
    const text = await file.text()
    const n = await importFavoritesJson(text)
    await refresh()
    status.value = `Imported ${n} favorite(s).`
  } catch {
    status.value = 'Import failed — invalid JSON.'
  }
  input.value = ''
}

function formatDate(ts: number) {
  return new Date(ts).toLocaleString()
}

let unsub: (() => void) | undefined

onMounted(() => {
  refresh()
  unsub = onFavoritesChange(refresh)
})

onUnmounted(() => unsub?.())
</script>

<template>
  <div class="fav-panel">
    <div class="fav-toolbar">
      <button type="button" class="btn" @click="doExport">Export JSON</button>
      <button type="button" class="btn" @click="triggerImport">Import JSON</button>
      <button type="button" class="btn danger" @click="clearAll">Clear all</button>
      <input
        ref="fileInput"
        type="file"
        accept="application/json,.json"
        class="hidden"
        @change="onImportFile"
      />
    </div>

    <p v-if="status" class="status" role="status">{{ status }}</p>

    <div v-if="!items.length" class="empty">
      <div class="empty-icon" aria-hidden="true">☆</div>
      <p>
        No favorites yet. Open any guide and use <strong>Favorite</strong> in the outline column.
        Stored only in this browser (IndexedDB).
      </p>
    </div>

    <ul v-else class="fav-list">
      <li v-for="item in items" :key="item.path" class="fav-item">
        <div class="meta">
          <span class="section">{{ item.section }}</span>
          <a class="title" :href="item.path">{{ item.title }}</a>
          <span class="date">{{ formatDate(item.addedAt) }}</span>
        </div>
        <button type="button" class="btn ghost" title="Remove" @click="remove(item.path)">
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.fav-panel {
  margin: 0.5rem 0 2rem;
}

.fav-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.15rem;
}

.btn {
  padding: 0.45rem 0.9rem;
  border-radius: 10px;
  border: 1px solid var(--gh-border, var(--vp-c-divider));
  background: var(--gh-card, var(--vp-c-bg-elv));
  color: var(--gh-text, var(--vp-c-text-1));
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--gh-shadow, none);
  transition: border-color 0.15s, color 0.15s, background 0.15s, transform 0.15s;
}

.btn:hover {
  border-color: var(--gh-brand, var(--vp-c-brand-1));
  color: var(--gh-brand, var(--vp-c-brand-1));
  transform: translateY(-1px);
}

.btn.danger:hover {
  border-color: var(--gh-coral, #e08e6d);
  color: #c45c3e;
}

.btn.ghost {
  background: transparent;
  box-shadow: none;
  font-size: 0.8rem;
  color: var(--gh-text-2, var(--vp-c-text-2));
  font-weight: 500;
}

.hidden {
  display: none;
}

.status {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--gh-brand, var(--vp-c-brand-1));
  margin: 0 0 1rem;
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1.5rem 1.35rem;
  border: 1px dashed color-mix(in srgb, var(--gh-brand, #3a6ea5) 30%, var(--gh-border, #e2e8f0));
  border-radius: 14px;
  background: var(--gh-brand-light, var(--vp-c-bg-soft));
  color: var(--gh-text-2, var(--vp-c-text-2));
  font-size: 0.92rem;
  line-height: 1.55;
}

.empty-icon {
  font-size: 1.5rem;
  color: var(--gh-gold, #f9c270);
  line-height: 1;
}

.empty p {
  margin: 0;
}

.fav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.fav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.15rem;
  border: 1px solid var(--gh-border, var(--vp-c-divider));
  border-radius: 14px;
  background: var(--gh-card, var(--vp-c-bg-elv));
  box-shadow: var(--gh-shadow, none);
  transition: border-color 0.15s, box-shadow 0.15s;
}

.fav-item:hover {
  border-color: color-mix(in srgb, var(--gh-brand, #3a6ea5) 35%, var(--gh-border, #e2e8f0));
  box-shadow: var(--gh-shadow-md, none);
}

.meta {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.section {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gh-text-3, var(--vp-c-text-3));
}

.title {
  font-weight: 650;
  letter-spacing: -0.015em;
  color: var(--gh-brand, var(--vp-c-brand-1));
  text-decoration: none;
}

.title:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.date {
  font-size: 0.75rem;
  color: var(--gh-text-3, var(--vp-c-text-3));
  font-variant-numeric: tabular-nums;
}
</style>
