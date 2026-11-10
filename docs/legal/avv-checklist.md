---
title: AVV and DPA checklist
description: How to contract client processing and each vendor under GDPR Article 28 — roles, clauses, sub-processors, evidence — not legal advice
---

# AVV and DPA checklist

::: danger Not legal advice
Operator notes for Art. 28 paperwork. Not legal advice. The binding text is the GDPR and the contract you actually sign. Have counsel or the client’s DPO review anything you are unsure about.
:::

<LevelBadge level="advanced" /> In German projects the Art. 28 contract is usually called an **AVV** (*Auftragsverarbeitungsvertrag*). Vendors often call the same idea a **DPA** (data processing addendum). One job, two names.

This is not the same document as **standard contractual clauses** for transfers outside the EEA. You can need an AVV **and** a transfer tool. Do not let a vendor’s “we have SCCs” answer replace the processor contract.

The short gates and the EU vendor table live on the [compliance checklist](/legal/germany-eu-compliance). This page is the clause-by-clause pass.

## Starter — when you need one at all

<LevelBadge level="starter" />

GDPR Article 28 says that where processing is carried out by a processor, it is governed by a contract or other legal act that is binding on the processor. Read [Article 28 in the GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679) (the article is in Chapter IV).

You need that paper when someone processes personal data **for** someone else.

| Situation | Usual shape for these projects | Paper |
|-----------|--------------------------------|-------|
| Client decides why the agent exists and whose customers they are | Client is **controller**. You build and run it for them | AVV between client and you |
| You hire Hetzner, IONOS, Azure, AWS, Google, Mistral, or an email API | You are their customer; they process on your instructions (or the client’s, if the contract is direct) | That vendor’s DPA / AVV, accepted and dated |
| Client contracts the LLM vendor themselves | You may be a processor who never sees the key, or a separate processor for hosting only | Write it down. Do not assume |
| You only advise and never touch personal data | You might not be a processor | Still do not collect a mailbox “for the proposal” |

If you cannot name the controller in a sentence, stop [discovery](/offer-clients/discovery) and fix that before build.

**Not an AVV:** an NDA, a privacy policy on the website, or “we take privacy seriously” in a proposal. Those can exist beside the AVV. They do not replace it.

## Everyday — what Article 28 asks the contract to say

<LevelBadge level="everyday" />

Use this as a review list against the client’s template or yours. Wording must match the deal. Do not treat the list as clauses you can paste into a contract without counsel.

Article 28 requires the contract to set out the **subject-matter and duration**, the **nature and purpose**, the **type of personal data**, the **categories of data subjects**, and the **obligations and rights of the controller**. It also requires, in particular, that the processor:

| Topic | What you are looking for |
|-------|--------------------------|
| Instructions | Processes personal data only on documented instructions, including on transfers |
| Confidentiality | People who touch the data are under a confidentiality duty |
| Security | Measures under Article 32 (appropriate to the risk — not a logo wall of certifications) |
| Sub-processors | The rules in Art. 28(2) and (4). See Advanced |
| Data-subject rights | Helps the controller respond (access, deletion, and the rest) |
| DPIA and consultation | Helps the controller if Article 32–36 duties require it |
| Breach | Assists the controller so they can meet their notification duties |
| End of contract | Deletes or returns personal data at the end, at the controller’s choice, and deletes copies unless the law requires storage |
| Audits | Makes available the information needed to demonstrate compliance and allows for audits the contract describes |

**With the client, also write the boring facts:**

```text
Subject: operate the named agent
Duration: the statement of work, plus deletion time after it ends
Data types: (from discovery — not "all CRM data")
People: site visitors / leads / staff who email the shared inbox
Instructions: the scope sheet. A new channel is a new instruction, not a silent one.
```

Certifications (ISO 27001, SOC 2, C5) can support the security story. They are not the contract.

IONOS documents that for AI Model Hub the cloud AVV applies as part of the cloud contract. Still read the [Datenschutzpaket](https://cloud.ionos.de/terms-gtc/avv/) for the entity you sign with ([data handling](https://docs.ionos.com/cloud/ai/ai-model-hub/governance-and-compliance/data-handling)).

## Advanced — the chain of sub-processors

<LevelBadge level="advanced" />

A typical chain:

```text
Client (controller)
  → you (processor)          AVV
      → host (Hetzner / IONOS / …)     their DPA
      → LLM (Azure / Bedrock / Vertex / Mistral / IONOS)    their DPA
      → mailbox or CRM, if you connected it    their DPA
```

Article 28(2) says the processor does not engage another processor without the controller’s **prior specific or general written authorisation**. If the authorisation is general, the processor must inform the controller of intended changes so the controller can object.

Practical version:

```text
[ ] Client AVV says whether you may use sub-processors
[ ] If general: how you will tell them about a change (email to a named person is fine if the contract says so)
[ ] List today: host, region, LLM vendor, region, any logger, any email API
[ ] Each name on that list has a DPA you accepted, with a date
[ ] You did not add OpenRouter "temporarily" ([why](/legal/germany-eu-compliance#avoid-openrouter-for-client-personal-data))
[ ] Flow-down: your sub-processor terms are not weaker than what you promised the client
```

Keep the list in the client folder. Update it when you change model or host. A stale list is how a pilot on Azure becomes a personal API key six months later.

**Evidence, without secrets in git**

| Keep | Do not commit |
|------|----------------|
| Signed AVV PDF or the vendor’s acceptance screenshot (date visible) | API keys, tokens, connection strings |
| Sub-processor list | Customer exports used as “samples” |
| Link to the DPA and the region screenshot | Your password manager export |
| Deletion confirmation when the project ends | Full server logs |

A private drive or the client’s own room is enough. This public repo is not the evidence room.

## Complex — templates that fight each other

<LevelBadge level="complex" />

Clients often send a 30-page AVV. Vendors offer a click-through DPA you cannot edit. You sit in the middle.

| Conflict | What to do |
|----------|------------|
| Client AVV forbids sub-processors you need | Ask for written authorisation **before** you connect the LLM. Do not connect and “fix the paper later” |
| Client demands a 24-hour breach notice and the vendor promises a longer window | You cannot promise faster than your vendor informs you, unless you detect the incident yourself. Say so. Amend the client draft or decline the sentence |
| Client wants EU-only and the vendor DPA allows global support access | Pick a deployment the vendor’s docs call EU, and record residual transfers (the checklist links Microsoft’s EU Data Boundary note). If you cannot explain the residual, do not say “100% EU” |
| Client asks you to sign that **you** are the controller of their customers | Only if that is actually your product. For the standard agents, it is usually wrong. Do not sign it to be nice |
| Two clients, one n8n | The AVVs will not save a shared credential store. Separate the [host](/run-agents/hosting) |

Click-through is still a contract if you were authorised to accept it and you can prove the version and date. “I think I clicked yes in 2024” is not a file.

### Acceptance log

```text
Client AVV: file name, date signed, who signed
Sub-processor authorisation: specific or general
Host DPA: vendor, date accepted, region
LLM DPA: vendor, date accepted, deployment name
Other:
Next review date (when the vendor emails a DPA update):
```

## Next

- [Retention defaults](/legal/retention)
- [Germany/EU compliance checklist](/legal/germany-eu-compliance)
- [Discovery & scoping](/offer-clients/discovery)
