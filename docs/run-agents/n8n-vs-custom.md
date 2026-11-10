---
title: n8n vs custom code
description: When to orchestrate client agents in n8n versus a small typed service
---

# n8n vs custom code

<LevelBadge level="everyday" /> Choose the smallest runtime that you can still secure, observe, and hand over.

## Starter — decision table

| Prefer **n8n** when… | Prefer **custom code** when… |
|----------------------|------------------------------|
| Many SaaS connectors (CRM, mail, calendars) | Heavy business logic or complex state machines |
| Client wants visible, editable flows | Strict typing, unit tests, CI are non-negotiable |
| Throughput is modest | You need package versioning and code review as the main change path |
| You are the operator and speed-to-demo matters | Multi-tenant isolation or custom auth is central |

Hybrid is normal: **n8n for glue**, small **services** for the LLM tool calls that need careful validation.

## Everyday — architecture sketch

```text
Trigger (webhook / cron / mailbox)
  → sanitize + redact
  → retrieve allowed context (RAG / CRM fields)
  → LLM (EU endpoint)
  → validate schema
  → side effects (ticket reply, booking hold)
  → log metadata (not raw secrets)
```

In n8n, map each arrow to a node; in code, map each arrow to a function with tests.

## Advanced — trade-offs that bite

| Topic | n8n | Custom |
|-------|-----|--------|
| Secrets | Use credential store; never in node JSON exports shared loosely | Use env / secret manager; never commit |
| Review | Export workflow JSON in git; diff is noisy but possible | Normal PR review |
| Eval harness | External scripts calling webhook | In-repo test suite |
| Client handover | Train them on the canvas **or** keep operated by you (Care tier) | Needs engineering handover |

## Complex — when not to use either alone

- Regulated high-risk Annex III systems — stop; see [compliance checklist](/legal/germany-eu-compliance)
- Unbounded “agent can run shell on prod” — deny by default
- Storing full prompts with PII in the workflow history — set retention and scrubbing

## Practical default for the three standard offers

For [website & support](/offer-clients/three-standard-agents), **lead qualifier**, and **inbox** agents: start with **n8n + EU LLM API** if integrations dominate; move hot paths to **custom** when validation and tests become the product.

## Next

- [Hosting](/run-agents/hosting) — Hetzner, IONOS, Coolify
- [Evals & monitoring](/run-agents/evals-monitoring)
- [Costs](/run-agents/costs)
