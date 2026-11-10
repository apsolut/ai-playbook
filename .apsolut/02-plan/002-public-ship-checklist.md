---
title: Public ship checklist — AI Playbook
date: 2026-11-10
status: active
---

# Public ship checklist — AI Playbook

## goal

Ship a clean public static site on **Cloudflare Pages** without leaking private paths, secrets, employer code or internal material, client PII, or operator dumps.

## Cloudflare Pages

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Output directory | `docs/.vitepress/dist` |
| Node | 20+ |
| Project name | `apsolut-ai-playbook` |

## Privacy — never in public docs

- [ ] No machine-absolute paths in `docs/**`
- [ ] No private client names, tickets, or credentials
- [ ] No employer code or internal material
- [ ] No `.env`, tokens, SSH keys, or API secrets
- [ ] No private catalogs

## Content

- [ ] Sidebar matches real pages
- [ ] Legal pages carry **not legal advice** banner
- [ ] Favorites explains IndexedDB is browser-local
- [ ] `npm run build` green

## Repo hygiene

- [ ] Review `.apsolut/03-audits/002-repo-hygiene.md` before commit
- [ ] `git status` shows no `node_modules/`, `dist/`, vault binaries
