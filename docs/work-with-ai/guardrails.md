---
title: Guardrails
description: Secrets, human review, sandboxing, and spend caps for coding agents and client-facing bots
---

# Guardrails

<LevelBadge level="advanced" /> Guardrails are the defaults that still hold when you are tired. They are not a prompt that says “be careful.”

The delivery loop is [Workflows](/work-with-ai/workflows). This page is what you refuse to turn off.

## Starter — four defaults

<LevelBadge level="starter" />

| Default | Meaning |
|---------|---------|
| No secrets in text | Keys, tokens, and `.env` contents never go in a chat, rule file, ticket, or commit |
| Draft, then a human | Nothing customer-visible sends itself on day one |
| Least privilege | The agent’s credentials can do the task and not the rest of the account |
| A spend ceiling | You will notice a runaway loop before the month ends |

If a tool offers an “approve everything” switch, leave it off for client work. Grok Build’s `--always-approve` and any vendor equivalent belong on a toy repo, not on a customer tree. Grok’s sandbox is off unless you set a profile; see [Coding agents](/work-with-ai/coding-agents).

## Everyday — secrets and review

<LevelBadge level="everyday" />

### Secrets

```text
[ ] .env is gitignored and not pasted into prompts
[ ] AGENTS.md / CLAUDE.md name the variable, never the value
[ ] Production keys are not in the coding-agent cloud environment
[ ] n8n credentials stay in the n8n credential store, not in exported JSON you email
[ ] Shared screenshots are cropped. Browser tabs leak keys.
[ ] Rotation is written down for the day someone leaves
```

Coding-agent cloud products have their own secret stores (Cursor documents a Secrets tab and prefers short-lived credentials over long-lived keys). Use that store. Do not “just export the key into the setup script” in the repository.

Separate keys per environment and, where the vendor allows it, per client. One key for every customer means one leak is every customer.

### Review

Review is a person looking at the thing that will ship.

| Surface | Review this | Not enough |
|---------|-------------|------------|
| Code | The diff and a command you ran | The agent’s summary |
| Prompt | The new text next to the eval set | “It sounded better” |
| n8n | Nodes that call a model or send a message | A zoomed-out screenshot of the canvas |
| Inbox agent | The draft, recipients, and whether send is armed | A green test run on fake mail |

Require a second look for the first production week even if you are the only operator. That can be “next morning you,” not a committee.

## Advanced — sandbox and allow / deny

<LevelBadge level="advanced" />

Give the agent a place where mistakes are cheap.

| Control | Practical version |
|---------|-------------------|
| Branch | No direct commits to the default branch |
| Environment | Staging URL, staging mailbox, staging CRM sandbox |
| Network | Codex cloud: leave agent internet off unless the task needs it ([docs](https://learn.chatgpt.com/docs/environments/cloud-environment.md)). Cursor: restrict egress to hosts you meant ([best practices](https://cursor.com/docs/cloud-agent/best-practices)) |
| Filesystem | Grok: `workspace` or `strict` sandbox, plus a deny for `.env` and key files ([sandbox](https://docs.x.ai/build/features/sandbox)). Remember macOS does not enforce child-network limits the way Linux does |
| Tools | Name allowed side effects. “Send email” is not allowed because “draft email” is |
| Data | Redact before the prompt leaves your machine. Retrieval returns fields, not the whole record |

**Allow / deny for a client agent** (support, lead, inbox):

| Allow | Deny |
|-------|------|
| Answer from approved pages | Invent policy, price, or legal claims |
| Create a ticket with a fixed field list | Refund, delete an account, change a password |
| Draft a reply | Send, until an allowlist of templates exists and a human has enabled it |
| Book on a named calendar | Scrape the web for the person’s data |
| Read the fields the task needs | Dump the CRM “for context” |

Write the deny list into the system prompt **and** into the tool permissions. A sentence in the prompt will not stop a tool that is still connected.

## Complex — cost caps and client boundaries

<LevelBadge level="complex" />

### Spend

Token math is on [Costs](/run-agents/costs). The guardrail is operational:

- A monthly budget alert on each LLM project, at a number **you** choose from the vendor’s current price page.
- A hard cap or a separate key with a low quota for experiments.
- A max token parameter on classification calls so a loop cannot request a huge completion.
- No unbounded agent loop (“keep going until it is perfect”) on a paid API.
- One bill per client project, so you can see which agent ran away.

Vendor consoles move the button. Look for budget, usage limit, or spend alert in the account that owns the key. Confirm the alert email is a mailbox a human reads.

Also cap **your** time. An agent that retries all night is a cost even when the API bill is small.

### Client boundaries

- Do not point your coding agent at client production data to “see how the prompt behaves.” Use the redacted eval set.
- Do not reuse one cloud-agent environment across clients if secrets or repos would be visible together.
- Logging stores metadata (time, model, token counts, error class, a request id). It does not store raw prompts that contain personal data unless the [retention](/legal/retention) decision says so and the store is covered by the AVV.
- High-risk uses (hiring decisions and the rest of Annex III) are out of scope for these guardrails. They need a different program. See the [compliance checklist](/legal/germany-eu-compliance).

### Incident card (fill in before go-live)

```text
Kill switch:
Who may use it:
Where alerts go:
Key owner:
How to rotate the LLM key:
Where transcripts live and when they delete:
Counsel / DPO contact (client):
```

## Next

- [Workflows](/work-with-ai/workflows)
- [Costs](/run-agents/costs)
- [AVV / DPA](/legal/avv-checklist)
