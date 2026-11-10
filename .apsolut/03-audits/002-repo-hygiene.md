---
title: Repo hygiene — commit vs ignore
date: 2026-11-10
status: active
---

# Audit: repo hygiene (AI Playbook public)

## commit (tracked)

| Path | Why |
|------|-----|
| `docs/**` | Product content |
| `package.json`, `package-lock.json` | Reproducible builds |
| `README.md`, `CLAUDE.md`, `PRODUCT.md`, `DESIGN.md` | Humans + agents |
| `wrangler.toml` | Deploy config (no secrets) |
| `.gitignore` | Hygiene contract |
| `.apsolut/**/*.md` | Agent vault text + templates |

## ignore (never commit)

Same contract as Helpers: `node_modules/`, VitePress `dist/` + `cache/`, `.ref/`, `graphify-out/`, vault binaries under `07-files/` / `08-screenshots/` (except templates), `.env*`, OS junk, editor noise, impeccable ephemeral files.

## never publish

Secrets, machine paths, client PII, employer code or internal material, private catalogs.
