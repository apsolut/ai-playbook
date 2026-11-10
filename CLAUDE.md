# AI Playbook

Public AI agent delivery documentation site (VitePress → Cloudflare Pages).

## One-liners

- **What:** Searchable playbooks for working with AI, running agents, client offers, tooling choices, and DE/EU legal hygiene.
- **Goal:** Ship as a static public site; favorites via IndexedDB.

## Stack

VitePress, Figtree + IBM Plex Mono, apsolut Ghibli tokens, Cloudflare Pages (`docs/.vitepress/dist`).

## Pointers (davinci vault)

| Folder | Use |
|--------|-----|
| `.apsolut/01-ideas/` | Capture and exploration |
| `.apsolut/02-plan/` | Committed plans + IA |
| `.apsolut/03-audits/` | Reviews after changes |
| `.apsolut/04-library/` | Excerpts / pasted reference |
| `.apsolut/05-decisions/` | Locked decisions |
| `.apsolut/06-knowledge/` | Glossary / learned |
| `.apsolut/07-files/` | Cold binaries (read `000-template.md` first) |
| `.apsolut/08-screenshots/` | Images (manifest first; never bulk-load folder) |

## Design

- Theme: `docs/.vitepress/theme/`
- Brand: forest `#1f6f5c`, wash `#f0f5f9`, no purple SaaS gradient defaults

## Public-repo hygiene

- No API keys, tokens, `.env`, client credentials, or private absolute paths in `docs/`
- No employer code or internal material, no client PII, no private catalogs
- Placeholders only: `YOU`, `org/repo`, `example.com`, `Client GmbH`
- Legal pages always include a **not legal advice** banner
