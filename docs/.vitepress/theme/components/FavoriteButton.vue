<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useData, useRoute } from 'vitepress'
import {
  isFavorite,
  toggleFavorite,
  sectionFromPath,
  normalizePath,
  onFavoritesChange,
} from '../lib/favorites'

const { page, frontmatter } = useData()
const route = useRoute()

const active = ref(false)
const busy = ref(false)

async function refresh() {
  active.value = await isFavorite(normalizePath(route.path))
}

async function onToggle() {
  if (busy.value) return
  busy.value = true
  try {
    const path = normalizePath(route.path)
    const title =
      (frontmatter.value.title as string) ||
      page.value.title ||
      document.title.replace(/ \| .*$/, '') ||
      path
    active.value = await toggleFavorite({
      path,
      title,
      section: sectionFromPath(path),
    })
  } finally {
    busy.value = false
  }
}

let unsub: (() => void) | undefined

onMounted(() => {
  refresh()
  unsub = onFavoritesChange(refresh)
})

onUnmounted(() => unsub?.())

watch(() => route.path, refresh)
</script>

<template>
  <button
    type="button"
    class="fav-btn"
    :class="{ 'is-active': active }"
    :disabled="busy"
    :title="active ? 'Remove from favorites' : 'Add to favorites'"
    :aria-pressed="active"
    @click="onToggle"
  >
    <span class="fav-icon" aria-hidden="true">{{ active ? '★' : '☆' }}</span>
    <span class="fav-label">{{ active ? 'Favorited' : 'Favorite' }}</span>
  </button>
</template>

<style scoped>
.fav-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 100%;
  margin: 0 0 1rem;
  padding: 0.5rem 0.85rem;
  border-radius: 10px;
  border: 1px solid var(--gh-border, var(--vp-c-divider));
  background: var(--gh-card, var(--vp-c-bg-elv));
  color: var(--gh-text-2, var(--vp-c-text-2));
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--gh-shadow, 0 1px 2px rgba(0, 0, 0, 0.04));
  transition: border-color 0.15s, color 0.15s, background 0.15s, box-shadow 0.15s,
    transform 0.15s;
}

.fav-btn:hover {
  border-color: color-mix(in srgb, var(--gh-brand, var(--vp-c-brand-1)) 40%, var(--gh-border, #e2e8f0));
  color: var(--gh-brand, var(--vp-c-brand-1));
  transform: translateY(-1px);
}

.fav-btn.is-active {
  border-color: color-mix(in srgb, var(--gh-gold, #f9c270) 55%, var(--gh-border, #e2e8f0));
  color: #a67c2d;
  background: var(--gh-gold-light, #fef7e8);
}

.dark .fav-btn.is-active {
  color: var(--gh-gold, #f9c270);
}

.fav-icon {
  font-size: 0.95rem;
  line-height: 1;
}

.fav-btn:disabled {
  opacity: 0.6;
  cursor: wait;
  transform: none;
}
</style>
