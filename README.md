# AI Playbook

<p align="center">
  <strong>Ship client AI agents — practical public docs</strong>
</p>

Searchable static docs for freelancers and small agencies: **Work with AI**, **Run agents**, **Offer clients**, **What to buy**, **Legal DE/EU**.

- Full-text **search** (VitePress local search)
- **Favorites** via browser **IndexedDB** (export/import JSON)
- Progressive guides: **starter → everyday → advanced → complex**
- Deploy: **Cloudflare Workers** static assets (`npx wrangler deploy`)
- Intended repo: [apsolut/ai-playbook](https://github.com/apsolut/ai-playbook)

## Local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # docs/.vitepress/dist
npm run preview
```

## Content map

```text
docs/
  work-with-ai/   # prompting, coding agents, workflows
  run-agents/     # n8n vs code, hosting, evals, costs
  offer-clients/  # three standard agents, tiers
  what-to-buy/    # tools, hardware, API vs consumer
  legal/          # DE/EU compliance checklist (chapter 1)
  favorites.md    # IndexedDB UI
  .vitepress/     # config + theme (favorites)
```

Information architecture: `.apsolut/02-plan/001-information-architecture.md`.

## Public-repo hygiene

This repository is **public**. Do not commit:

| Keep out | Examples |
|----------|----------|
| Secrets | API keys, tokens, `.env`, SSH private keys |
| Machine paths | Absolute Windows/Linux home paths, private catalogs |
| Client PII | Real client names, internal tickets |
| Internal IP | Employer code or internal material, private operator dumps |

Use placeholders (`YOU`, `org/repo`, `example.com`, `Client GmbH`).

## Favorites (IndexedDB)

On any guide: outline column → **☆ Favorite**.  
Open **★ Favorites** in the nav to list, export, or import.

Database name: `apsolut-ai-playbook` (browser profile local only).

## Deploying on Cloudflare Workers

This repo is connected as a **Workers** project (Workers Builds), not Pages. VitePress builds a static site; `wrangler deploy` publishes that folder as Worker static assets. Do not commit API tokens, account IDs, or Wrangler credentials.

Workers Builds runs two commands. Set them under the Worker's **Build** settings:

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Root directory | `/` (repository root) |
| Node.js | 20+ |

`wrangler.toml` names the Worker `apsolut-ai-playbook` and points `[assets] directory` at `./docs/.vitepress/dist`. There is no Worker script entry point and no `pages_build_output_dir` (that field makes `wrangler deploy` refuse the project as Pages).

HTML routing matches VitePress `cleanUrls`: `html_handling = "auto-trailing-slash"` serves `page.html` at `/page` and `section/index.html` at `/section/`. `not_found_handling = "404-page"` returns VitePress's `404.html` with status 404.

Check the config locally, then deploy only from a machine that is already logged in:

```bash
npm run build
npx wrangler deploy --dry-run
npx wrangler deploy
```

## Legal disclaimer

Pages under `docs/legal/` are **operator checklists**, not legal advice. Confirm with qualified counsel for client work.

## License

MIT — personal reference material.
