<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import FavoriteButton from './components/FavoriteButton.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <a class="nav-fav-link" href="/favorites" title="Your favorites (this browser)">
        <span class="nav-fav-icon" aria-hidden="true">★</span>
        <span class="nav-fav-text">Favorites</span>
      </a>
    </template>

    <template #aside-outline-before>
      <FavoriteButton v-if="frontmatter.layout !== 'home' && frontmatter.favorites !== false" />
    </template>

    <template #home-features-after>
      <section class="home-band" aria-label="How to use AI Playbook">
        <div class="home-band-grid">
          <div class="home-panel">
            <h2>How people use this</h2>
            <ul class="home-steps">
              <li>
                <span class="n">1</span>
                <span
                  ><strong>Search</strong> with <kbd>/</kbd> — full-text, stays on your machine</span
                >
              </li>
              <li>
                <span class="n">2</span>
                <span
                  ><strong>Star</strong> guides you revisit (IndexedDB in this browser)</span
                >
              </li>
              <li>
                <span class="n">3</span>
                <span
                  ><strong>Follow depth</strong> — starter → everyday → advanced → complex</span
                >
              </li>
              <li>
                <span class="n">4</span>
                <span
                  ><strong>Export favorites</strong> as JSON when you switch machines</span
                >
              </li>
            </ul>
          </div>
          <div class="home-panel">
            <h2>Built for public sharing</h2>
            <p>
              Static HTML for Cloudflare Pages. No accounts, no tracking for favorites — only what
              your browser keeps.
            </p>
            <p>
              Written for freelancers and small agencies shipping client AI agents in Germany and the EU —
              practical notes, not a law firm memo.
            </p>
            <div class="home-meta-row">
              <span class="home-chip">VitePress</span>
              <span class="home-chip teal">IndexedDB favorites</span>
              <span class="home-chip gold">Local search</span>
              <span class="home-chip coral">Cloudflare static</span>
            </div>
          </div>
        </div>
      </section>
    </template>
  </Layout>
</template>

<style scoped>
.nav-fav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-left: 0.5rem;
  margin-right: 0.15rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--gh-brand, #1f6f5c);
  text-decoration: none;
  background: var(--gh-brand-light, #e7f4ef);
  border: 1px solid color-mix(in srgb, var(--gh-brand, #1f6f5c) 18%, var(--gh-border, #e2e8f0));
  transition: background 0.15s, border-color 0.15s, transform 0.15s, box-shadow 0.15s;
  box-shadow: 0 1px 2px rgba(30, 41, 59, 0.04);
}

.nav-fav-link:hover {
  background: color-mix(in srgb, var(--gh-brand-light, #e7f4ef) 70%, white);
  border-color: var(--gh-brand, #1f6f5c);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(31, 111, 92, 0.15);
}

.nav-fav-icon {
  font-size: 0.85rem;
  line-height: 1;
  color: var(--gh-gold, #f9c270);
  filter: drop-shadow(0 0 0.5px #c5922c);
}

.dark .nav-fav-link {
  color: var(--gh-brand-muted, #6bc9ab);
}

@media (max-width: 768px) {
  .nav-fav-text {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .nav-fav-link {
    padding: 0.4rem 0.55rem;
  }
}
</style>
