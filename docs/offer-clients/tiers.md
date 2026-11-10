---
title: Tiers and pricing
description: Orientation prices for Starter, Pro, and Care client agents — what is included, what is not, and SLA language you can keep
---

# Tiers and pricing

<LevelBadge level="everyday" /> These numbers are **orientation** for scoping conversations in this playbook. They are not a public price list, not a survey of what agencies charge, and not a quote.

Confirm currency, VAT, payment terms, and the written scope for each engagement. A client in Germany will often expect VAT to be handled explicitly. This page does not tell you how.

| Tier | Orientation | Intent |
|------|-------------|--------|
| Starter | about **€2,900** once | One [standard agent](/offer-clients/three-standard-agents), a short integration list, staging, handover |
| Pro | about **€5,000–€7,000** once | The same agent with more channels, CRM depth, or an eval harness |
| Care | about **€300–€600** per month | You operate it: monitor, small prompt and copy edits, a monthly review |

Use the low or high end of Pro and Care because of scope, not because a round number looks serious. Write the chosen number into the proposal. Do not leave “about €5–7k” in the contract.

## Starter — one agent, fixed edges

<LevelBadge level="starter" />

**Included**

- One of the three agents
- One language the client already uses
- Retrieval over pages or a mailbox folder you both list
- One staging environment and a production cutover
- AI disclosure text placed in the UI ([compliance checklist](/legal/germany-eu-compliance))
- A kill switch and a short handover ([delivery checklist](/offer-clients/delivery-checklist))
- Draft-only on anything that emails or messages a customer

**Not included**

- A second channel you discover later (“also WhatsApp”)
- Custom authentication against the client’s account database
- Overnight or weekend coverage
- Writing their privacy policy or AVV from scratch (you still need a signed AVV; counsel or their template, not an improvised one)
- Annex III work (hiring selection and similar)

**Boundary sentence you can paste**

```text
Starter covers the agent and systems named in the scope.
A new system, a new language, or a new side effect (sending, refunds, deletes)
is a change request, not part of this fee.
```

## Everyday — Pro

<LevelBadge level="everyday" />

Pro is Starter plus depth you can point at. Pick what is actually in the fee:

| Often in Pro | Still out |
|--------------|-----------|
| A second channel that uses the same knowledge | A new agent (that is another Starter or Pro) |
| CRM fields you listed, with validation | “Sync the whole CRM” |
| Eval set of 20–50 redacted questions and one regression run | A permanent labeling team |
| Authenticated answers **if** the client already has an API and a test account | Building their identity platform |
| Handover workshop (agenda in the delivery checklist) | Training their whole company |

If the second channel needs a different privacy notice, a different retention rule, or a different model region, say so in the scope. Do not hide it inside “Pro.”

## Advanced — Care and an SLA you can keep

<LevelBadge level="advanced" />

Care is a retainer for **operation**, not an unlimited build.

**Included in a typical Care month**

- The agent stays up; you look at alerts ([evals & monitoring](/run-agents/evals-monitoring))
- Small prompt, retrieval, and template edits that do not add a system
- A monthly review: what ran, what failed, what the token bill did ([costs](/run-agents/costs))
- Key rotation help and a tested restore note if you host
- Applying the retention job you already designed ([retention](/legal/retention))

**Not included**

- New agents, new brands, new countries
- Feature work that belongs in a Starter/Pro change request
- Being the client’s helpdesk for their whole IT
- Legal opinions

**SLA template.** Fill the blanks. Delete any line you will not keep. Do not copy a “99.9%” from another industry.

```text
Service hours: weekdays ____–____, timezone ____. Not a 24/7 desk.
Incident (agent down or sending unwanted messages):
  we acknowledge within ____ hours during service hours
  and disable side effects if we cannot fix in that window.
Ordinary change (prompt/copy, no new system): within ____ business days.
Monthly review: one meeting or a written note, ____ minutes.
Exclusions: client hosting outages, upstream model outages,
  and requests outside the written scope.
Uptime percentage: "not promised" unless you have measured it.
```

Upstream model outages are the vendor’s status page, not something you privately guarantee. Link the status page in the runbook when you pick the model.

Who holds the contract with the host and the LLM (you or the client) must match who the SLA talks about. If the client owns the Hetzner account, you cannot promise their disk.

## Complex — changes, VAT, and refusing work

<LevelBadge level="complex" />

- **Change requests** have a size: “under half a day, inside Care” vs “new system, new quote.” Write the cutoff down.
- **Pass-through token cost** or “included up to the worksheet cap.” The worksheet is on [Costs](/run-agents/costs). A Care fee that silently includes unlimited tokens will hurt in a busy month.
- **VAT and invoicing** go through your accountant. Do not invent a VAT rate on this page.
- **Refusal.** If the client wants CV ranking, performance scores from the inbox, or credit decisions, stop. That is Annex III territory. Offer to introduce counsel or decline. Do not “just do a pilot.”

### Proposal skeleton

```text
Client:
Agent:
Tier and fee (number, currency, VAT called out or "VAT extra"):
Care: yes/no, monthly fee, hours covered:
In scope (systems):
Out of scope:
Send policy:
Model path (EU) and who pays the API:
Retention:
SLA (filled template):
Term and how to end (and deletion):
```

## Next

- [Discovery & scoping](/offer-clients/discovery)
- [Delivery checklist](/offer-clients/delivery-checklist)
- [Three standard agents](/offer-clients/three-standard-agents)
