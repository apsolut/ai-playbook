---
title: Work with AI
description: How operators get reliable work from models and coding agents before automating anything for a client
---

# Work with AI

How you personally get leverage from models and coding agents — before you automate anything for a client. This section is about **your** desk: prompts, coding agents, repeatable workflows, and the guardrails that keep client data and secrets out of the wrong place.

<LevelBadge level="starter" /> If you only do one thing this week, use the prompting pattern and pick a single coding agent.

## What “good” looks like

A useful session has a named deliverable, only the context that deliverable needs, and a check you can apply without re-reading the whole chat. A bad session asks for “the whole feature,” pastes a CRM export, and ships the first draft.

| You are here | Do this | Then read |
|--------------|---------|-----------|
| Drafting text, FAQs, specs | One job per prompt, then a review pass | [Prompting that ships](/work-with-ai/prompting) |
| Changing a repository | One primary coding agent, repo instructions, you read the diff | [Coding agents](/work-with-ai/coding-agents) |
| Repeating the same delivery loop | Plan → implement → review → eval → ship, with a human gate | [Workflows](/work-with-ai/workflows) |
| Touching secrets, production, or client data | Deny by default, sandbox, spend caps | [Guardrails](/work-with-ai/guardrails) |

## Starter

<LevelBadge level="starter" />

- Pick **one** chat model and **one** coding agent. Extra subscriptions do not fix unclear tasks.
- Write the goal in one sentence before you paste context.
- Paste excerpts, not whole exports. If a file has customer emails, redact first.
- Keep the first draft out of production, the client’s inbox, and `main`.

## Everyday

<LevelBadge level="everyday" />

- Save prompt blocks you actually reuse (redaction reminder, no-invention rule, output shape). Store them in private notes, not in a public page.
- Put project rules in the repo (`AGENTS.md`, and the tool’s own file if it has one) so every session starts from the same constraints.
- Review in the same place a colleague would: the diff, the test output, the rendered page. Chat transcripts are not the review.

## Advanced

<LevelBadge level="advanced" />

- Split work that needs tools (search, tickets, CRM) from work that is only writing. Name which tools are allowed.
- Run a small eval set before you change a prompt that customers will see. The set can be 20 questions. It has to be real and redacted.
- When two agents edit the same repo, give them separate branches. Do not let two sessions push to the same branch.

## Complex

<LevelBadge level="complex" />

- Treat every coding agent as a processor of whatever you let it read. Client repositories with personal data need the same AVV / region questions as a production LLM. See the [compliance checklist](/legal/germany-eu-compliance).
- No API keys in prompts, rules files, or tickets. No machine-absolute paths in committed instructions.
- Cost caps and a kill switch exist **before** an unattended run, not after the invoice.

## Pages

| Page | What you leave with |
|------|---------------------|
| [Prompting that ships](/work-with-ai/prompting) | A five-part prompt, reusable blocks, and a reject list |
| [Coding agents](/work-with-ai/coding-agents) | When to use Claude Code, Cursor, Codex, or Grok Build, plus a shared `AGENTS.md` |
| [Workflows](/work-with-ai/workflows) | A delivery loop with human gates |
| [Guardrails](/work-with-ai/guardrails) | Secrets, review, sandboxing, and spend caps |

## Anti-patterns

| Anti-pattern | Do instead |
|--------------|------------|
| “Figure out the client’s whole business” | One artifact, one check |
| Pointing a coding agent at a production database “just to look” | A read-only copy or no access |
| Rules files that contain passwords “so the agent can deploy” | A secret store the agent is allowed to use, with names not values in the prompt |
| Skipping review because the tests the agent wrote all passed | Read the tests. Agents often assert the behavior they just coded |
