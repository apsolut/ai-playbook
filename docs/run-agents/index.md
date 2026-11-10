---
title: Run agents
description: How to go from a working prompt to a webhook or schedule a client can rely on — runtime, host, evals, and cost
---

# Run agents

From a working prompt to something that runs on a schedule or webhook for a client. “Run” means you can turn it off, see that it failed, and explain the bill.

<LevelBadge level="starter" /> Start with one trigger, one environment, and a manual way to start it.

## Pick the runtime before the host

| Question | If yes | If no |
|----------|--------|-------|
| Is the job mostly “when this SaaS event happens, call a model, write back”? | [n8n](/run-agents/n8n-vs-custom) | A small service |
| Will the process sit in the EU because it sees personal data? | [Hosting](/run-agents/hosting) on an EU location, EU LLM | Do not invent a region. Read the [compliance checklist](/legal/germany-eu-compliance) |
| Can you tell a good answer from a bad one on 20 fixed questions? | [Evals](/run-agents/evals-monitoring) | You are not ready to change prompts in production |
| Can you compute the bill from tokens and a price page? | [Costs](/run-agents/costs) | Put a low cap on the key until you can |

## Starter

<LevelBadge level="starter" />

- One workflow, one environment (your staging).
- Trigger it by hand or with a test webhook. No customer traffic.
- Log a request id, the model name, and whether the side effect was skipped.
- The LLM key is a staging key.

## Everyday

<LevelBadge level="everyday" />

- Choose n8n **or** a small service using the decision table on [n8n vs custom code](/run-agents/n8n-vs-custom). Hybrid is normal: n8n for SaaS glue, code for the strict validation.
- Put it on a host you can name the country of. See [Hosting](/run-agents/hosting).
- Errors show up in a mailbox you read. You do not need a full observability suite on day one.

## Advanced

<LevelBadge level="advanced" />

- A fixed eval set runs before you change the prompt or the model.
- Alerts exist for error spikes and for tool calls you did not expect (sends, CRM writes).
- You can estimate a month of tokens with the formulas on [Costs](/run-agents/costs), using the vendor’s **current** price page. This playbook does not publish prices.

## Complex

<LevelBadge level="complex" />

- One client’s data, keys, and logs are not readable by the next client’s workflow.
- Backups restore. You have tried it.
- A change to production is a reviewed diff or an exported workflow in git, plus the eval result.
- Annex III uses (hiring selection and the rest) are out of this loop. Stop and read the [compliance checklist](/legal/germany-eu-compliance).

## Pages

| Page | What you leave with |
|------|---------------------|
| [n8n vs custom code](/run-agents/n8n-vs-custom) | Which runtime, and the shape both share |
| [Hosting](/run-agents/hosting) | Hetzner, IONOS, Coolify — location, TLS, backups |
| [Evals & monitoring](/run-agents/evals-monitoring) | A question set, what to alert on, what not to log |
| [Costs](/run-agents/costs) | Token formulas, caching, model tiering, official price links |

## A minimum production shape

```text
Trigger
  → redact
  → retrieve only the fields you named
  → EU LLM
  → schema check
  → side effect if a human or an allowlist says so
  → log metadata
  → delete on the retention clock
```

If a box is missing, you have a demo.
