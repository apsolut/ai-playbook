---
title: About
description: What AI Playbook is, who it is for, and how the static site is built
---

# About

**AI Playbook** — public operator documentation by [Aleksandar Perisic](https://aleksandarperisic.com/?utm_source=ai-playbook&utm_medium=referral&utm_campaign=about_page&utm_content=author_credit) (apsolut).

## What you get

- Topic-based guides from **starter → complex**
- **Local search** (VitePress)
- **Favorites** via browser **IndexedDB** (export/import JSON)
- Static build for **Cloudflare Pages**
- A Germany/EU-first compliance checklist for client AI agents (**not legal advice**)

## Stack

| Piece | Choice |
|-------|--------|
| Docs engine | VitePress |
| Favorites | IndexedDB (`apsolut-ai-playbook` DB) |
| Deploy | Cloudflare Pages → `docs/.vitepress/dist` |
| Companion CLI notes | [apsolut/helpers](https://github.com/apsolut/helpers) |

## Local

```bash
npm install
npm run dev
npm run build
```

## Honesty

These are personal delivery notes shaped for the public web. Legal pages summarize official sources and common operator practice — they are **not legal advice**. Prefer official EU / provider pages when you decide for a client engagement.
