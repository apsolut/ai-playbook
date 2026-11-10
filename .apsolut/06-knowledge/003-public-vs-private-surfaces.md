---
title: Public vs private surfaces
date: 2026-11-10
---

# Public vs private surfaces

| Surface | Visibility | Job |
|---------|------------|-----|
| **AI Playbook site** | Public | Operator playbooks for client AI agents | `docs/` → Cloudflare Pages |
| **AI Playbook vault** | Repo-tracked text; local binaries ignored | Project notebook | `.apsolut/` |
| **Helpers** | Public | CLI how-tos (companion site) |
| **Client / app repos** | Varies | Product code — never bulk-indexed here |

## rules of thumb

1. **Public docs (`docs/`)** — portable workflows, tool names, generic checklists. No machine-absolute paths, no private client identifiers, no secrets, no employer code or internal material.
2. **Vault (`.apsolut/`)** — operator thinking about this product. Prefer generic wording. Never store keys.
3. **Legal pages** — practical checklists with official links; always **not legal advice**.
