import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import FavoriteButton from './components/FavoriteButton.vue'
import FavoritesList from './components/FavoritesList.vue'
import LevelBadge from './components/LevelBadge.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('FavoriteButton', FavoriteButton)
    app.component('FavoritesList', FavoritesList)
    app.component('LevelBadge', LevelBadge)
  },
} satisfies Theme
