---
title: Information architecture — AI Playbook
date: 2026-11-10
status: active
---

# Information architecture — AI Playbook

## goal

Map every public section and its first pages for the VitePress site. Progressive depth on guides: **Starter → Everyday → Advanced → Complex**.

## site chrome

| Page | Path | Status |
|------|------|--------|
| Home | `/` | Full |
| Favorites | `/favorites` | Full (IndexedDB UI) |
| About | `/about` | Full |

## 1 · Work with AI (`docs/work-with-ai/`)

| Page | Path | Status | Notes |
|------|------|--------|-------|
| Overview | `/work-with-ai/` | **Full** | Levels + map |
| Prompting that ships | `/work-with-ai/prompting` | **Full** | First solid guide |
| Coding agents | `/work-with-ai/coding-agents` | **Full** | Claude Code, Cursor, Codex, Grok Build |
| Workflows | `/work-with-ai/workflows` | **Full** | Plan → review → ship |
| Guardrails | `/work-with-ai/guardrails` | **Full** | Secrets, review, sandbox, spend |

## 2 · Run agents (`docs/run-agents/`)

| Page | Path | Status | Notes |
|------|------|--------|-------|
| Overview | `/run-agents/` | **Full** | |
| n8n vs custom code | `/run-agents/n8n-vs-custom` | **Full** | First solid guide |
| Hosting | `/run-agents/hosting` | **Full** | Hetzner / IONOS / Coolify |
| Evals & monitoring | `/run-agents/evals-monitoring` | **Full** | |
| Costs | `/run-agents/costs` | **Full** | Formulas, no vendor prices |

## 3 · Offer clients (`docs/offer-clients/`)

| Page | Path | Status | Notes |
|------|------|--------|-------|
| Overview | `/offer-clients/` | **Full** | |
| Three standard agents | `/offer-clients/three-standard-agents` | **Full** | Website & support, lead qualifier & booker, back-office inbox |
| Tiers & pricing | `/offer-clients/tiers` | **Full** | Starter ~€2,900 · Pro ~€5–7k · Care ~€300–600/mo |
| Discovery & scoping | `/offer-clients/discovery` | **Full** | Questions and scope sheet |
| Delivery checklist | `/offer-clients/delivery-checklist` | **Full** | Handover and kill switch |

## 4 · What to buy (`docs/what-to-buy/`)

| Page | Path | Status | Notes |
|------|------|--------|-------|
| Overview | `/what-to-buy/` | **Full** | |
| Tools & plans | `/what-to-buy/tools-and-plans` | **Full** | First solid guide |
| Hardware | `/what-to-buy/hardware` | **Full** | Laptop vs local inference |
| API vs consumer plans | `/what-to-buy/api-vs-consumer` | **Full** | Why consumer chat is not for client data |

## 5 · Legal DE/EU (`docs/legal/`) — chapter 1 priority

| Page | Path | Status | Notes |
|------|------|--------|-------|
| Overview | `/legal/` | Outline | Always link compliance checklist |
| Germany/EU compliance checklist | `/legal/germany-eu-compliance` | **Full (chapter 1)** | EU LLM providers, AVV/DPA, OpenRouter caution, retention, Art. 50 disclosure EN/DE, Art. 4 literacy, Annex III high-risk avoid, not-legal-advice |
| AVV / DPA deep dive | `/legal/avv-checklist` | Stub | Extends checklist |
| Retention defaults | `/legal/retention` | Stub | 30–90 day defaults |

## levels convention

Every guide that is more than a stub should label depth with `<LevelBadge level="…" />` and, where useful, structure sections as Starter / Everyday / Advanced / Complex.

## out of scope for public pages

- Employer code or internal material
- Secrets, machine-absolute paths, client PII, private catalogs
