import { defineConfig } from 'vitepress'

const sidebar = [
  {
    text: 'Start here',
    collapsed: false,
    items: [
      { text: 'Home', link: '/' },
      { text: '★ Favorites', link: '/favorites' },
      { text: 'About', link: '/about' },
    ],
  },
  {
    text: '1 · Work with AI',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/work-with-ai/' },
      { text: 'Prompting that ships', link: '/work-with-ai/prompting' },
      { text: 'Coding agents', link: '/work-with-ai/coding-agents' },
      { text: 'Workflows & guardrails', link: '/work-with-ai/workflows' },
    ],
  },
  {
    text: '2 · Run agents',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/run-agents/' },
      { text: 'n8n vs custom code', link: '/run-agents/n8n-vs-custom' },
      { text: 'Hosting', link: '/run-agents/hosting' },
      { text: 'Evals & monitoring', link: '/run-agents/evals-monitoring' },
      { text: 'Costs', link: '/run-agents/costs' },
    ],
  },
  {
    text: '3 · Offer clients',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/offer-clients/' },
      { text: 'Three standard agents', link: '/offer-clients/three-standard-agents' },
      { text: 'Tiers & pricing', link: '/offer-clients/tiers' },
    ],
  },
  {
    text: '4 · What to buy',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/what-to-buy/' },
      { text: 'Tools & plans', link: '/what-to-buy/tools-and-plans' },
      { text: 'Hardware', link: '/what-to-buy/hardware' },
      { text: 'API vs consumer plans', link: '/what-to-buy/api-vs-consumer' },
    ],
  },
  {
    text: '5 · Legal DE/EU',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/legal/' },
      {
        text: 'Germany/EU compliance checklist',
        link: '/legal/germany-eu-compliance',
      },
      { text: 'AVV / DPA deep dive', link: '/legal/avv-checklist' },
      { text: 'Retention defaults', link: '/legal/retention' },
    ],
  },
]

export default defineConfig({
  title: 'AI Playbook',
  titleTemplate: ':title · AI Playbook',
  description:
    'Public playbooks for shipping client AI agents — prompting, coding agents, n8n vs code, hosting, offers, tooling, and Germany/EU compliance. Searchable, favoritable, static.',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  appearance: {
    initialValue: 'light',
  } as boolean | 'dark' | 'force-dark' | 'force-auto' | { initialValue?: 'dark' },

  markdown: {
    theme: {
      light: 'github-dark',
      dark: 'github-dark',
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..700;1,300..700&family=IBM+Plex+Mono:wght@400;500;600&display=swap',
      },
    ],
    ['meta', { name: 'theme-color', content: '#3a6ea5' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'AI Playbook — ship client AI agents' }],
    [
      'meta',
      {
        name: 'og:description',
        content:
          'Work with AI, run agents, offer clients, choose tools, stay legal in DE/EU — search, favorite, ship as static docs.',
      },
    ],
    ['meta', { name: 'twitter:card', content: 'summary' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'AI Playbook',

    nav: [
      { text: 'Work with AI', link: '/work-with-ai/' },
      { text: 'Run agents', link: '/run-agents/' },
      { text: 'Offer clients', link: '/offer-clients/' },
      { text: 'What to buy', link: '/what-to-buy/' },
      {
        text: 'Legal DE/EU',
        items: [
          { text: 'Overview', link: '/legal/' },
          {
            text: 'Germany/EU compliance checklist',
            link: '/legal/germany-eu-compliance',
          },
          { text: 'AVV / DPA deep dive', link: '/legal/avv-checklist' },
          { text: 'Retention defaults', link: '/legal/retention' },
        ],
      },
      {
        text: 'More',
        items: [
          { text: 'Favorites', link: '/favorites' },
          { text: 'About', link: '/about' },
        ],
      },
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/apsolut/ai-playbook' },
    ],

    search: {
      provider: 'local',
      options: {
        detailedView: true,
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search AI Playbook',
          },
          modal: {
            noResultsText: 'No results for',
            resetButtonTitle: 'Clear',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate',
              closeText: 'to close',
            },
          },
        },
      },
    },

    editLink: {
      pattern: 'https://github.com/apsolut/ai-playbook/edit/main/docs/:path',
      text: 'Improve this page',
    },

    lastUpdated: {
      text: 'Updated',
      formatOptions: {
        dateStyle: 'medium',
      },
    },

    footer: {
      message:
        'Operator notes for client AI agents — search locally, star what you need, deploy static. Not legal advice.',
      copyright:
        'By <a href="https://aleksandarperisic.com/?utm_source=ai-playbook&utm_medium=referral&utm_campaign=site_footer&utm_content=author_credit">Aleksandar Perisic</a> · <a href="https://github.com/apsolut/ai-playbook">apsolut/ai-playbook</a>',
    },

    outline: {
      level: [2, 3],
      label: 'On this page',
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },

    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light',
    darkModeSwitchTitle: 'Switch to dark',
  },
})
