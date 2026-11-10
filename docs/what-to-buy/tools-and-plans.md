---
title: Tools & plans
description: What to pay for when delivering client AI agents — without turning this into an affiliate page
---

# Tools & plans

<LevelBadge level="starter" /> A shopping lens for solo and small-team delivery. Prices change — verify on the vendor site before you renew.

## Starter — minimum viable stack

| Need | Direction |
|------|-----------|
| Coding agent | One paid seat you actually live in (Cursor / Claude / Codex / Grok — pick one primary) |
| Orchestration | n8n (self-host or cloud) **or** a small Node/Python service |
| LLM for client data | **EU** cloud API with DPA ([legal checklist](/legal/germany-eu-compliance)) |
| Hosting | One EU VPS (Hetzner or IONOS are common starting points) + backups |
| Email / calendar | Client’s existing Google / Microsoft tenant via official APIs |
| Tracking work | Whatever issue tracker you already use |

Skip: five overlapping chat subscriptions, “agent marketplaces” you cannot AVV, and routers that spray personal data across providers.

## Everyday — plans worth distinguishing

| Category | Prefer | Avoid for client PII |
|----------|--------|----------------------|
| Model access | Vendor API with EU region + DPA | Consumer ChatGPT/Claude projects dumping customer exports |
| Automation | n8n with credential store | Random Zap templates with opaque subprocessors |
| Observability | Simple metrics + error logs you control | Logging full prompts to a third country “for free analytics” |
| Design / docs | Your static playbooks (this site) | Pasting secrets into public Notion |

## Advanced — seat vs API

- **Seats** shine for interactive build (IDE agents, chat UIs).
- **APIs** shine for production agents (metered, region-pinned, contractual DPA).
- Running production traffic through a consumer UI usually fails residency, logging, and AVV checks.

Details: [API vs consumer plans](/what-to-buy/api-vs-consumer).

## Complex — when to spend more

- Separate staging vs prod keys
- SSO on the orchestration tool if multiple operators join
- Budget alerts on the cloud LLM subscription
- Formal Care-tier time reserved — not “nights and weekends forever”

## Next

- [Hardware](/what-to-buy/hardware)
- [API vs consumer plans](/what-to-buy/api-vs-consumer)
- [Costs when running agents](/run-agents/costs)
