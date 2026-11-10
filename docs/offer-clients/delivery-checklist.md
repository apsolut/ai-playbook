---
title: Delivery checklist
description: A handover list for a client agent — staging, disclosure, retention, kill switch, and what the client receives
---

# Delivery checklist

<LevelBadge level="everyday" /> Delivery is the moment the client can run the agent without your chat history. If only you know how to turn it off, you are not done.

Use this with the [three standard agents](/offer-clients/three-standard-agents) and the [tier](/offer-clients/tiers) you sold. Check the boxes in the project folder. Do not paste secrets into the checklist file.

## Starter — staging before anyone real

<LevelBadge level="starter" />

```text
[ ] Scope sheet from discovery matches what you built
[ ] Staging uses staging keys and a staging mailbox or site
[ ] Sample questions are redacted
[ ] The agent refuses questions outside the sources (you tried)
[ ] Send, book, or CRM write is OFF or pointed at a sandbox
[ ] You can click the kill switch and side effects stop
[ ] A human path exists (form, address, or phone the client provided)
```

Show staging to the named owner. Their “yes” is an email or a ticket, not a nod on a call you will forget.

## Everyday — production gates

<LevelBadge level="everyday" />

These match the pre-flight list on the [compliance checklist](/legal/germany-eu-compliance). Do not skip them because the demo looked good.

```text
[ ] Not-legal-advice line is in the proposal or handover (they own controller decisions)
[ ] Client AVV signed (or their paper, reviewed)
[ ] Provider DPAs accepted for LLM, host, and any mail/CRM tool you added
[ ] EU deployment type verified for personal data
[ ] OpenRouter and similar routers are not in the production path
[ ] Retention days written down, deletion job exists ([retention](/legal/retention))
[ ] Art. 50 disclosure visible on any public chat (EN and/or DE), screenshot filed
[ ] Eval set run on staging, failures fixed or accepted in writing
[ ] Alerts go to a mailbox a person reads ([monitoring](/run-agents/evals-monitoring))
[ ] Production keys are not the keys that were in a chat
```

### What you hand over

| Artifact | Where it lives |
|----------|----------------|
| Scope and out-of-scope | Contract or the read-back email |
| How to disable side effects | One page, no jargon |
| Where transcripts are and when they go | Retention note |
| Who to email when it misbehaves | Named people on both sides |
| Model and region | The worksheet, not “the latest model” |
| Eval snapshot | Date, pass/fail, private file |
| Admin URL | On a password manager item, not in git |

A screen recording of the kill switch is worth more than a diagram.

## Advanced — the workshop

<LevelBadge level="advanced" />

Forty-five to ninety minutes is enough. Agenda:

1. What the agent is allowed to say and do (10 minutes).
2. Watch one good answer and one handoff (10 minutes).
3. Disable and re-enable side effects themselves (10 minutes).
4. Where a correction goes (source page vs prompt) (10 minutes).
5. What Care will and will not do this month (10 minutes).

They leave with the one-page disable note. You leave with the date and the names, which is also the start of an [AI literacy](/legal/germany-eu-compliance#ai-literacy-duty-article-4) record. It does not need to be a certificate.

If they will edit n8n themselves, schedule a second session. Do not teach the canvas and the legal gates in the same half hour.

## Complex — after go-live

<LevelBadge level="complex" />

First week:

```text
[ ] Side effects still match the send policy (spot-check)
[ ] No tool-call spike you cannot explain
[ ] Token use is inside the worksheet range, or you told them
[ ] Corrections became source or eval updates, not only chat replies
[ ] Backup restore is still a date you remember, not a rumor
```

End of contract, or when they ask you to stop:

```text
[ ] Disable production
[ ] Revoke your keys and their keys that you held
[ ] Delete or return data as the AVV says
[ ] Say which backups expire on which day
[ ] Remove their repo from your coding-agent cloud environments
```

Deletion is not finished while a snapshot still has the database. See [Retention](/legal/retention) and [Hosting](/run-agents/hosting).

### Handover note (copy)

```text
Agent:
Environment URLs (no passwords in this note):
Disable side effects:
Human contact for customers:
Transcripts location and retention:
Alert mailbox:
Model and region:
Last eval date:
Care window:
Out of scope reminder:
```

Store passwords in a shared vault the contract allows. The note points at the vault. It does not contain the password.

## Next

- [Discovery & scoping](/offer-clients/discovery)
- [Guardrails](/work-with-ai/guardrails)
- [Germany/EU compliance checklist](/legal/germany-eu-compliance)
