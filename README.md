# AI Playbook

<p align="center">
  <strong>Ship client AI agents — practical public docs</strong>
</p>

Searchable static docs for freelancers and small agencies: **Work with AI**, **Run agents**, **Offer clients**, **What to buy**, **Legal DE/EU**.

- Full-text **search** (VitePress local search)
- **Favorites** via browser **IndexedDB** (export/import JSON)
- Progressive guides: **starter → everyday → advanced → complex**
- Deploy: **Cloudflare Pages** static output
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

## Connecting Cloudflare Pages

This repo is a static VitePress site. Connect it in the Cloudflare dashboard; do not commit API tokens, account IDs, or Wrangler credentials.

1. In Cloudflare, open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorize GitHub and select **apsolut/ai-playbook**.
3. Production branch: `main`. Root directory: repository root (`/`).
4. Framework preset: **None**. The built-in VitePress preset assumes the docs live at the repo root and writes `.vitepress/dist`. This site keeps sources in `docs/`, so set the build yourself:

   | Setting | Value |
   |---------|--------|
   | Build command | `npm run build` |
   | Build output directory | `docs/.vitepress/dist` |
   | Node.js | 20+ (`NODE_VERSION=20`) |

5. Save and deploy. Pushes to `main` rebuild the site.

`wrangler.toml` names the Pages project `apsolut-ai-playbook` and sets `pages_build_output_dir` to the same output folder. It does not store secrets. A manual upload from a machine that is already logged in to Wrangler:

```bash
npm run build
npx wrangler pages deploy docs/.vitepress/dist --project-name=apsolut-ai-playbook
```

## Legal disclaimer

Pages under `docs/legal/` are **operator checklists**, not legal advice. Confirm with qualified counsel for client work.

## License

MIT — personal reference material.
