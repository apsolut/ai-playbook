---
title: Prompting that ships
description: Practical prompting for client delivery — structure, context, review, and what not to paste
---

# Prompting that ships

<LevelBadge level="starter" /> A working pattern for freelancers: enough structure to be reliable, not a research paper.

## Starter — one job per prompt

<LevelBadge level="starter" />

Bad prompts ask for everything. Good prompts name:

1. **Role** — who the model should act as (narrow)
2. **Goal** — one deliverable
3. **Context** — only what is needed (paste files / excerpts)
4. **Constraints** — format, tone, must / must-not
5. **Check** — how you will judge success

```text
You are helping me draft a client-facing FAQ answer for a website support agent.

Goal: 120–180 words, plain language, DE locale formal "Sie".

Context: {paste product facts only — no customer PII}

Constraints:
- Do not invent prices, SLAs, or legal claims
- If unknown, say what a human should confirm
- End with one clarifying question the agent can ask

Check: I will reject any sentence that adds facts not in Context.
```

## Everyday — reusable blocks

<LevelBadge level="everyday" />

Keep a small library (private notes, not secrets):

| Block | Use |
|-------|-----|
| Redaction reminder | “Treat any email/phone/IBAN as already removed; ask me if you see one.” |
| No-invention rule | “Do not invent URLs, prices, statute citations, or customer history.” |
| Output contract | JSON / Markdown template the downstream agent expects |
| Locale | `de-DE` formal, or `en-GB`, etc. |

Paste **current** product facts each time. Stale “memory” is how agents hallucinate policy.

## Advanced — tool-shaped prompts

<LevelBadge level="advanced" />

When the model can call tools (search, tickets, CRM):

- Name **allowed tools** and **forbidden** ones
- Require a **plan** before irreversible actions (send email, update CRM)
- Ask for **citations** to tool output IDs, not free-floating claims

```text
Before sending any email:
1) Draft
2) List recipients and purpose
3) Wait for my explicit OK
Never send in the same turn you draft.
```

## Complex — client-safe hygiene

<LevelBadge level="complex" />

- Strip personal data before prompts leave the client environment when possible
- Prefer EU-hosted APIs for personal data ([compliance checklist](/legal/germany-eu-compliance))
- Do not paste API keys, `.env`, or private catalogs into chats
- Keep a human review on anything customer-visible until evals say otherwise

## Review checklist (copy)

Run this before a customer sees the text. Reject the draft if any line fails.

```text
[ ] Every factual claim appears in the context I pasted
[ ] No prices, SLAs, legal conclusions, or URLs were invented
[ ] No names, emails, phone numbers, or ticket IDs that I did not mean to include
[ ] Output matches the format the next step expects
[ ] Unknowns are written as unknowns, not as confident guesses
[ ] I can explain the draft to the client without opening the chat
```

## Anti-patterns

| Anti-pattern | Do instead |
|--------------|------------|
| “Write a complete GDPR policy” | Point to counsel; use checklists only |
| Dumping entire CRM exports | Sample + redact |
| One mega-prompt for a whole product | Split by artifact |
| Trusting first draft in production | Review loop + eval spot-checks |

## Next

- [Coding agents](/work-with-ai/coding-agents) — which tool, and the repo instructions they share
- [Workflows](/work-with-ai/workflows) — where the prompt sits in the delivery loop
- [Guardrails](/work-with-ai/guardrails) — what never goes into the prompt
