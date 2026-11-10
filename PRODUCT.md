# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are freelancers, consultants, and small agencies (especially in Germany / the EU) who deliver AI agents to clients — website & support agents, lead qualifiers, back-office inbox agents — and need practical operating notes: prompting, tooling, hosting, pricing tiers, and DE/EU compliance checklists.

Secondary audience: public visitors who want a clean, searchable reference without accounts.

## Product Purpose

**AI Playbook** is a public, static documentation site. It captures how to work with AI day-to-day, run agents in production, package standard offers for clients, choose tools and plans, and stay on the right side of GDPR/DSGVO and the EU AI Act for limited-risk client agents.

Success means: find the right checklist or workflow fast, star what you reuse, export favorites when switching machines, and ship the whole site as static HTML.

## Positioning

Not a SaaS product and not legal advice. Progressive operator notes shaped for the public web: **starter → everyday → advanced → complex**, full-text local search, and browser-only favorites (IndexedDB) with export/import JSON. Companion site to Helpers (CLI notes); this site is about AI agent delivery.

## Operating Context

- Read on desktop primarily (docs density, tables, checklists); usable on tablet/phone.
- Built with VitePress; deploy target Cloudflare Pages (`docs/.vitepress/dist`).
- Favorites DB name: `apsolut-ai-playbook` (per browser profile, no server).
- Content authored as Markdown under `docs/`; theme and chrome in `docs/.vitepress/theme/`.
- Intended repo: `apsolut/ai-playbook` (public MIT reference material).

## Capabilities and Constraints

**In product:**

- Topic guides and progressive depth levels
- Local full-text search (VitePress)
- Star/unstar pages; favorites list with export/import
- Level badges (`starter` | `everyday` | `advanced` | `complex`)
- Light/dark appearance
- Edit-on-GitHub links (once the public repo exists)

**Out of scope / constraints:**

- No user accounts, no backend, no analytics requirement for favorites
- No employer code or internal material, internal catalogs, secrets, machine paths, or client PII
- Static-only deploy
- Do not invent testimonials, customer counts, legal conclusions, or citations
- Legal pages always carry a clear **not legal advice** banner

## Brand Commitments

- **Name:** AI Playbook
- **Tagline voice:** “Ship client AI agents with clear playbooks” — practical, short, operator-facing
- **Identity owner:** apsolut / AP ([github.com/apsolut](https://github.com/apsolut/))
- **Visual brand surface (locked):** apsolut Ghibli tokens — cornflower `#3a6ea5`, wash `#f0f5f9`, Figtree + IBM Plex Mono; no purple SaaS gradient defaults; no Inter-only stack
- **Voice:** clear, first-person practical notes; prefer real delivery paths over academic completeness

## Evidence on Hand

- Home hero + feature cards: `docs/index.md`
- Site chrome and tokens: `docs/.vitepress/theme/custom.css`
- Components: `LevelBadge`, `FavoriteButton`, `FavoritesList`, home band in `Layout.vue`
- About / stack: `docs/about.md`, root `README.md`
- Logo: `docs/public/logo.svg`
- Information architecture: `.apsolut/02-plan/001-information-architecture.md`
- Do not fabricate case studies or social proof

## Product Principles

1. **Findability over freemium chrome** — search and structure beat marketing flourish.
2. **Depth is progressive** — label difficulty; don’t dump expert flags on day-one pages.
3. **Local-first trust** — favorites and search stay on the device; static deploy stays simple.
4. **Brand is quiet and specific** — cornflower/wash Ghibli identity, not generic purple SaaS.
5. **Ship public, keep honest** — MIT personal notes; legal pages disclaim advice; no invented stats.
6. **EU-first delivery** — prefer EU-hosted LLM options for client personal data; document AVV/DPA hygiene.

## Accessibility & Inclusion

- Keyboard-usable nav, search, and favorite controls; visible `:focus-visible` rings.
- Respect `prefers-reduced-motion`.
- Maintain readable contrast on wash backgrounds and dark slate theme.
- Target WCAG AA for text and interactive controls where theme CSS is under our control.
