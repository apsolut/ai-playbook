---
title: Workflows
description: Plan, implement, review, eval, and ship — with a human gate before anything a client or customer can see
---

# Workflows

<LevelBadge level="everyday" /> A workflow is the loop you can repeat next week without remembering the chat. Guardrails (secrets, sandbox, spend) live on their [own page](/work-with-ai/guardrails).

## Starter — one loop, one artifact

<LevelBadge level="starter" />

```text
1. Name the artifact (FAQ answer, PR, workflow node, offer paragraph)
2. List inputs you are allowed to use
3. Do the work (prompt or coding agent)
4. Check against the inputs
5. Stop. Do not send, merge, or deploy in the same step.
```

If you cannot point at the artifact, the task is still a wish. Split it.

Write the check **before** you generate. “I will reject any price not in the source page” beats “looks fine” after the fact.

## Everyday — plan, implement, review, ship

<LevelBadge level="everyday" />

| Step | Who | Done when |
|------|-----|-----------|
| Plan | You, optionally an agent in read-only / plan mode | A short list of files or nodes, and what will not be touched |
| Implement | Agent or you | A branch or a draft, not the live system |
| Review | You | Diff or draft read; tests or preview actually run |
| Eval | You, on a fixed question list | No new failure on questions that passed last time |
| Ship | You | Merge, send, or enable the flag. The agent does not ship |

For code, “review” means the pull request. For an n8n flow, export the workflow and read the nodes that call the model and the nodes that send mail. For a client-facing answer, review is the checklist on [Prompting that ships](/work-with-ai/prompting).

### Human gates

These actions wait for an explicit yes **after** the draft exists:

- Send email or chat to a customer
- Write to a CRM as if a human did
- Book or cancel a meeting
- Merge to the default branch
- Rotate a key, open a firewall, or change DNS
- Turn on unattended runs

A reliable instruction, in the prompt and in `AGENTS.md`:

```text
Draft only. Do not send, merge, deploy, or delete.
Stop after the draft and list what you changed.
```

## Advanced — several tools, one owner

<LevelBadge level="advanced" />

Use more than one tool only when each has a job:

| Piece | Typical tool | Handoff |
|-------|----------------|---------|
| Spec or FAQ | Chat model | Markdown in the repo or ticket |
| Code change | One coding agent | Pull request |
| Glue (mail, CRM, calendar) | n8n or a small service | Workflow export or PR |
| Customer-facing model | EU LLM API | Separate from your coding-agent account |

Map that to the sketch in [n8n vs custom code](/run-agents/n8n-vs-custom): trigger, redact, retrieve, model, validate, side effect, log metadata.

**Change control for prompts.** A prompt that customers hit is production config.

- Keep it in git or in the workflow export, not only in a chat.
- Note the model name in the same change.
- Run the eval set before you replace the prompt. See [Evals & monitoring](/run-agents/evals-monitoring).

**Parallel agents.** Two cloud sessions on one branch will overwrite each other. One branch per session. You merge.

## Complex — client delivery workflow

<LevelBadge level="complex" />

For a [standard agent](/offer-clients/three-standard-agents), the loop above sits inside a longer path:

```text
Discovery notes (no dumps)
  → scope in / out
  → staging with fake or redacted data
  → eval set from real questions, redacted
  → disclosure and retention configured
  → client accepts staging
  → production flag
  → Care: monitor, small edits, monthly review
```

Staging uses staging keys. Production keys are not on your laptop “just for a test.”

The client sees a handover, not your chat history: how to disable the agent, where transcripts live, who gets alerts. Use the [delivery checklist](/offer-clients/delivery-checklist).

### Kill switch

Document one switch the client can use without you:

- A feature flag or n8n workflow toggle that stops side effects
- A path that still shows the [AI disclosure](/legal/germany-eu-compliance) and a human contact
- Who is allowed to flip it, and how you hear that they did

Practice the switch on staging before go-live. An untested kill switch is a paragraph in a doc.

## Copy-paste: task ticket

```text
Artifact:
Allowed inputs:
Out of scope:
Model / agent:
Branch or draft location:
Check (how we reject a bad result):
Human gate before:
Eval set (or "n/a — internal only"):
```

## Next

- [Guardrails](/work-with-ai/guardrails)
- [Evals & monitoring](/run-agents/evals-monitoring)
- [Three standard agents](/offer-clients/three-standard-agents)
