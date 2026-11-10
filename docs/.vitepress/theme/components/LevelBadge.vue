<script setup lang="ts">
defineProps<{
  level: 'starter' | 'everyday' | 'advanced' | 'complex'
}>()

const labels = {
  starter: 'Starter',
  everyday: 'Everyday',
  advanced: 'Advanced',
  complex: 'Complex',
}
</script>

<template>
  <span class="level" :data-level="level">{{ labels[level] }}</span>
</template>

<style scoped>
.level {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  vertical-align: middle;
  margin-right: 0.45rem;
  margin-bottom: 0.15rem;
  border: 1px solid transparent;
  position: relative;
  top: -0.12em;
}

.level[data-level='starter'] {
  background: var(--gh-teal-light, #e6f3f1);
  color: #3d8f82;
  border-color: color-mix(in srgb, var(--gh-teal, #7bb3a8) 35%, transparent);
}

.level[data-level='everyday'] {
  background: var(--gh-brand-light, #e8f0f8);
  color: var(--gh-brand-hover, #2d5a8a);
  border-color: color-mix(in srgb, var(--gh-brand, #3a6ea5) 25%, transparent);
}

.level[data-level='advanced'] {
  background: var(--gh-gold-light, #fef7e8);
  color: #a67c2d;
  border-color: color-mix(in srgb, var(--gh-gold, #f9c270) 45%, transparent);
}

.level[data-level='complex'] {
  background: var(--gh-coral-light, #fdf0eb);
  color: #c45c3e;
  border-color: color-mix(in srgb, var(--gh-coral, #e08e6d) 35%, transparent);
}

.dark .level[data-level='starter'] {
  color: var(--gh-teal, #7bb3a8);
}
.dark .level[data-level='everyday'] {
  color: var(--gh-brand-muted, #6b9bc3);
}
.dark .level[data-level='advanced'] {
  color: var(--gh-gold, #f9c270);
}
.dark .level[data-level='complex'] {
  color: var(--gh-coral, #e08e6d);
}
</style>
