---
title: Discovery and scoping
description: Questions and a scope template for a client agent project — enough to price, not a data dump
---

# Discovery and scoping

<LevelBadge level="everyday" /> Discovery is how you learn the job without collecting a pile of personal data you do not need yet.

Do this before you quote a [tier](/offer-clients/tiers). One or two conversations is normal. A month of workshops is a different product.

## Starter — can we even do this?

<LevelBadge level="starter" />

Five questions. If any answer is “hiring,” “credit,” “medical diagnosis,” or “let it send everything,” stop or narrow the scope.

| # | Question | Why |
|---|----------|-----|
| 1 | Which **one** agent from the [menu](/offer-clients/three-standard-agents)? | Two agents are two projects |
| 2 | Who is the user (site visitor, lead, or internal staff)? | Disclosure and access differ |
| 3 | What must it never do? | Refunds, legal advice, silent send, CV ranking |
| 4 | Which systems exist today (site, mailbox, calendar, CRM)? | No system, no integration promise |
| 5 | Is there a human who will own it after launch? | Otherwise Care is imaginary |

Write answers in your own words. Do not ask the client to export the CRM “so the model can learn.”

## Everyday — the scope sheet

<LevelBadge level="everyday" />

Fill this in the call. Unknowns stay unknown.

```text
Client (legal name):
Controller (usually the client):
Your role (processor / sub-processor):
Agent:
Users:
Language:
Channels (site widget / shared inbox / other):

Knowledge sources (URLs or folder names, not a dump):
Systems to read:
Systems to write:
Send policy: draft-only / allowlisted templates / not applicable

Personal data types (names, emails, message text, …):
Special-category data expected? yes/no  — if yes, stop and ask counsel
Retention the client can accept (30–90 days is this playbook’s default, not a statute):

Success in 30 days (observable):
  example: "FAQ answers cite a page; unknown questions become tickets"
Volume guess (client’s words, as a range):

Out of scope (read it back to them):
Open questions:
```

**Volume** is their estimate. Do not replace it with a statistic you found online.

**Success** has to be checkable with the [eval set](/run-agents/evals-monitoring). “Users love it” is not a success line.

### What not to collect yet

| Leave it | Until |
|----------|--------|
| Production API keys | Staging exists and an AVV covers you |
| A full mailbox export | You have agreed fields and retention |
| Customer lists | You need a redacted sample of questions, not the list |
| Their lawyer’s entire file | You need the AVV path, not a fishing trip |

Redacted samples: ten real questions with names removed are more useful than a database.

## Advanced — integrations and owners

<LevelBadge level="advanced" />

For each system:

```text
System:
Owner on the client side (a person):
Test account available? 
API or official connector? yes/no
Writes allowed:
Failure behavior (queue, hand off, stop):
```

If there is no owner, the integration is not in the quote. “IT will figure it out” is how Pro projects stall.

Read [n8n vs custom code](/run-agents/n8n-vs-custom) with them if they want to edit flows themselves. A client who will not look at n8n needs Care, or they need you to keep the canvas.

EU model path: name the option you expect (Azure EU, Bedrock Frankfurt, Vertex EU, Mistral, IONOS, or another you have checked). “We’ll pick a model later” is fine only if the proposal says personal data waits until the path is chosen. Table: [compliance checklist](/legal/germany-eu-compliance).

## Complex — multi-brand, politics, and the no

<LevelBadge level="complex" />

- **Two brands** mean two knowledge sets and a rule for which one answers. That is Pro or a second project, not a checkbox.
- **Works council or HR** in the room often means the inbox agent is sliding toward employee monitoring. Performance evaluation from mailbox content is out of scope. Say so in the notes.
- **Conflicting stakeholders** (“sales wants auto-send, support wants drafts”). The scope records one send policy. Do not average them.
- **You are not their counsel.** If they ask “is this GDPR-compliant if we do X,” write the question down and point them to counsel and the [not-legal-advice](/legal/) banner. You can still refuse X when it is Annex III or when you have no AVV.

### Read-back email

Send this after the call. It is the scope until the contract replaces it.

```text
Thanks for the time. Here is what I think we agreed.
Please correct anything wrong.

Agent and tier:
In:
Out:
Send policy:
Data types and retention:
Your owner for each system:
What I still need from you:
What I will not do:

I will not start on production data until the AVV and the model path are set.
```

## Next

- [Tiers & pricing](/offer-clients/tiers)
- [AVV / DPA](/legal/avv-checklist)
- [Delivery checklist](/offer-clients/delivery-checklist)
