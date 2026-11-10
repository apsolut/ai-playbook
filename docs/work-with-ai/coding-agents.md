---
title: Coding agents
description: When to use Claude Code, Cursor, Codex, or Grok Build — setup, AGENTS.md, cloud sessions, and review discipline
---

# Coding agents

<LevelBadge level="everyday" /> A coding agent edits a repository with you. It is not a production chatbot, and it is not a reason to stop reading diffs.

Use one primary tool until its review loop is boring. The four below are the ones this playbook compares. Features move; the official docs linked here are the source of truth.

## Starter — pick one

<LevelBadge level="starter" />

| Tool | Use it when | Official start |
|------|-------------|----------------|
| **Claude Code** | You want a terminal (or IDE) session that reads a repo `CLAUDE.md`, with cloud sessions that clone that repo | [Overview](https://code.claude.com/docs/en/overview) |
| **Cursor** | You live in the editor and want project rules plus cloud agents on an isolated VM | [Rules](https://cursor.com/docs/rules) · [Cloud Agents](https://cursor.com/docs/cloud-agent) |
| **Codex** | You want OpenAI’s agent in the CLI, IDE, or a cloud task that checks out the repo | [AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md) · [Codex Cloud](https://help.openai.com/en/articles/20001545-using-codex-cloud) |
| **Grok Build** | You want xAI’s terminal agent (`grok`), headless runs, or ACP inside another app | [Overview](https://docs.x.ai/build/overview) |

Match the tool to where you already work. Do not run all four against the same branch.

**Setup that is enough for week one**

1. Install from the vendor’s current instructions. Do not copy an old install command out of a blog.
2. Sign in with a work account you control. Do not borrow a personal login for a client repository.
3. Add a short `AGENTS.md` at the repo root (template below).
4. Ask for a small, reversible change. Read the diff yourself before you commit.

Claude Code also reads `CLAUDE.md`. Its own docs say that if the repo already has an `AGENTS.md`, Claude Code can use that in place of a `CLAUDE.md`. Grok Build loads `AGENTS.md` and, for compatibility, `CLAUDE.md` as well. One committed instruction file is better than four drifting copies. If a tool needs its own file, keep it short and point at `AGENTS.md`.

## Everyday — repo instructions and PR-sized work

<LevelBadge level="everyday" />

### What to put in `AGENTS.md`

Codex documents a practical list: repo layout, how to run the project, test and lint commands, conventions, and what “done” means. Cursor treats `AGENTS.md` as a plain-markdown alternative to `.cursor/rules`. Keep it short. Codex stops adding instruction files once the combined project docs hit its size limit (32 KiB by default).

```markdown
# AGENTS.md

## What this repo is
Static docs site. Change only the files the task names.

## Commands
- Install: `npm install`
- Build: `npm run build`
- Do not deploy from an agent session.

## Done means
- Build passes
- You did not add secrets, tokens, or absolute machine paths
- Diff stays limited to the task

## Never
- Force-push, skip hooks, or commit `.env`
- Invent prices, legal conclusions, or customer names
- Read or print credential files
```

Cursor project rules in `.cursor/rules` are `.mdc` files with frontmatter. A plain `.md` file in that folder is ignored by Cursor’s rules system. Use `AGENTS.md` when you want one readable file.

### Review discipline

| Rule | Why |
|------|-----|
| One task, one branch | Mixed sessions make review impossible |
| You read the diff, not only the summary | Summaries omit the risky line |
| Tests the agent wrote are not proof | They often encode the new behavior |
| No merge to the default branch by the agent | A human merges |
| No force-push, no `--no-verify` | Those hide the failure you needed |

Ask for a plan on anything that touches auth, billing, migrations, or client data. Approve the plan before edits.

## Advanced — cloud and background sessions

<LevelBadge level="advanced" />

Cloud sessions keep working when your laptop sleeps. They also run on **someone else’s computer** with a copy of the repo. Treat that as a subprocessors question.

| Tool | What the vendor documents | What does **not** come along |
|------|---------------------------|------------------------------|
| **Claude Code cloud** | A fresh clone. Committed `CLAUDE.md`, `.claude/rules`, project skills, and (for a single-repo session) `.claude/settings.json` hooks | Your user-level `~/.claude/` instructions and local MCP servers. Commit what the cloud session must see. [Cloud environments](https://code.claude.com/docs/en/cloud-environments) |
| **Cursor Cloud Agents** | Isolated VM, cloned repo, dependencies, secrets you set in the dashboard, startup commands. Formerly called Background Agents. Parallel runs do not need your laptop online | Local-only rules that were never committed. Put project rules and `AGENTS.md` in the repo. [Best practices](https://cursor.com/docs/cloud-agent/best-practices) |
| **Codex cloud** | Container, checkout at a branch or SHA, setup script, then the agent. `AGENTS.md` is how it finds lint and test commands. Tasks can continue from web, mobile, or desktop | Another task’s uncommitted files. Saved VM state is recoverable for up to 7 days after the last turn or resume — that is not a backup of your work. [Using Codex Cloud](https://help.openai.com/en/articles/20001545-using-codex-cloud) |
| **Grok Build** | Interactive TUI, `grok -p` for a single headless prompt, or `grok agent stdio` for ACP. Sessions can resume. Sandbox is **off** unless you turn it on | Do not assume a headless run with `--always-approve` is safe on a client repo. [Sandbox](https://docs.x.ai/build/features/sandbox) |

Codex documents that setup scripts run with internet access, while agent internet access is off by default unless you enable it. Leave it off until a task truly needs a network call.

Cursor’s cloud docs tell you to prefer short-lived credentials (for example OIDC) over long-lived access keys, and to allowlist outbound hosts if you restrict egress. Put secrets in the product’s secret store. Never paste them into `AGENTS.md`.

Claude Code cloud sessions on Anthropic-hosted infrastructure do not take interactive SSO. If a task needs cloud credentials, use the mechanism the current Claude Code docs describe for that environment, not a key checked into the repo.

## Complex — client repos, secrets, sandbox

<LevelBadge level="complex" />

### When not to point an agent at the repo

- The tree contains production dumps, `.env` files, or customer exports.
- You cannot name the vendor’s DPA and whether prompts are used for training. Consumer Claude plans can opt in to training, **including Claude Code used from those plans**. Commercial Anthropic API terms are different. Read [Claude Code data usage](https://code.claude.com/docs/en/data-usage) before a client repo goes through a personal plan.
- The task is “deploy to production” and there is no human gate.

Coding-agent traffic is not the same thing as the EU LLM path you pick for a **client-facing** agent. See [API vs consumer plans](/what-to-buy/api-vs-consumer) and the [compliance checklist](/legal/germany-eu-compliance).

### Sandbox

Grok Build documents sandbox profiles. Default is `off`. For normal work use `workspace` (writes limited to the working directory, `~/.grok/`, and temp). For an untrusted tree use `strict`. Child-process network limits are enforced on Linux; the docs say they are a no-op on macOS for `read-only` and `strict`. A sandbox does not replace permission prompts, and built-in profiles do not permanently hide paths such as SSH keys — add an explicit deny if you need that. See [Grok sandbox](https://docs.x.ai/build/features/sandbox).

On every tool, the equivalent of a sandbox is: a branch, a non-production environment, and approval before push, delete, or secret access. Do not start client work in a mode that auto-approves every command.

### Boundaries checklist

```text
[ ] Work account, not a shared personal login
[ ] AGENTS.md committed; no secrets in it
[ ] Cloud environment secrets live in the vendor dashboard
[ ] Agent cannot push to the default branch
[ ] Production credentials are not on the agent VM
[ ] You can delete the branch and lose nothing you meant to keep
```

## Next

- [Workflows](/work-with-ai/workflows) — the loop around the agent
- [Guardrails](/work-with-ai/guardrails) — secrets, review, spend
- [Tools & plans](/what-to-buy/tools-and-plans) — what to pay for
