---
title: Germany/EU compliance checklist for client AI agents
description: EU LLM hosting, AVV/DPA checklist, retention, AI Act Art. 50 disclosure (EN/DE), Art. 4 literacy, high-risk uses to avoid — operator checklist, not legal advice
---

# Germany/EU compliance checklist for client AI agents

::: danger Not legal advice
This page is an **operator checklist** for freelancers and small agencies. It summarizes publicly available EU rules and provider documentation. It is **not legal advice**, not a law-firm memo, and not a substitute for qualified counsel, your client's DPO, or a formal DPIA where one is required. Laws and provider terms change — verify the linked official sources before you decide.
:::

<LevelBadge level="everyday" /> Practical checklist before you put a client-facing agent into production in Germany or elsewhere in the EU.

## Who this is for

You build or operate **limited-risk** client agents (website & support chat, lead qualifier & booker, back-office inbox helpers) that process personal data under the GDPR / DSGVO. You need:

1. An EU-friendly LLM hosting choice with a real processor contract (AVV / DPA)
2. An AVV with the **client** (you as processor or sub-processor, depending on the deal)
3. Sensible retention (often **30–90 days** for logs / transcripts unless a longer legal basis exists)
4. Ready-to-use **AI disclosure** wording for the AI Act transparency duty
5. A plan for **AI literacy** of people who operate the system
6. A hard stop on **high-risk** Annex III uses you are not set up to certify

## Starter — five gates before go-live

| # | Gate | Pass when |
|---|------|-----------|
| 1 | Roles clear | Written who is controller vs processor vs sub-processor |
| 2 | Client AVV | Signed Art. 28 contract with the client (or their template reviewed) |
| 3 | Provider DPA / AVV | Active DPA with **each** LLM / hosting / mailbox / CRM processor you use |
| 4 | EU processing path | Prompts with personal data stay on an **EU / EEA** (or explicitly contracted) path — not a random multi-provider router |
| 5 | Transparency | Users who chat with the agent are informed they interact with AI (Art. 50) |

If any gate fails, do not go live with personal data.

## Everyday — pick an EU LLM path

For **client personal data** (names, emails, ticket text, CRM notes), prefer providers that publish EU residency / EU Data Zone options and a standard DPA / AVV. Confirm the **deployment type** you actually select (global vs regional vs data-zone) — the wrong SKU can move inference out of the EU.

| Option | What to use for EU work | Official pages to verify |
|--------|-------------------------|--------------------------|
| **Azure OpenAI / Azure AI** | Prefer **EU Data Zone** or **regional** deployments inside the EU; avoid **Global** deployment types when residency matters | [Data, privacy, and security for Azure OpenAI](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy) · [Microsoft Products and Services DPA](https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA) · [EU Data Boundary optional transfers](https://learn.microsoft.com/en-us/privacy/eudb/eu-data-boundary-transfers-for-optional-capabilities) |
| **Amazon Bedrock (Frankfurt)** | Use Bedrock in **`eu-central-1` (Frankfurt)** with **In-Region** inference so requests do not leave the Region | [Bedrock data protection](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html) · [Regional model availability](https://docs.aws.amazon.com/bedrock/latest/userguide/models-region-compatibility.html) · [AWS GDPR center](https://aws.amazon.com/compliance/gdpr-center/) · [AWS GDPR DPA (PDF)](https://d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf) |
| **Google Vertex AI (EU)** | Use an **EU regional** or **EU multi-region** endpoint; avoid global endpoints when you need residency | [Vertex generative AI data residency](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/data-residency) · [Cloud Data Processing Addendum](https://cloud.google.com/terms/data-processing-addendum) |
| **Mistral** | Use Mistral's commercial offering under their DPA when they process personal data as processor | [Where to find Mistral's DPA](https://help.mistral.ai/en/articles/347641-where-can-i-find-your-dpa-data-processing-agreement) · [Mistral legal center](https://legal.mistral.ai/terms/get-started/) · Data Processing Addendum under their Data Policy on [legal.mistral.ai](https://legal.mistral.ai/) |
| **IONOS AI Model Hub** | Inference in IONOS Cloud data centers in **Germany**; AVV as part of the IONOS Cloud contract | [IONOS AI Model Hub data handling](https://docs.ionos.com/cloud/ai/ai-model-hub/governance-and-compliance/data-handling) · [IONOS Cloud AVV / Datenschutzpaket (DE)](https://cloud.ionos.de/terms-gtc/avv/) |

::: tip Operator habit
Screenshot or PDF the **exact** deployment region / data-zone setting and the DPA acceptance date into the client project folder (private — not in this public repo).
:::

## Avoid OpenRouter for client personal data

OpenRouter is convenient for personal experiments and model shopping. For **client personal data** it is a poor default:

- Inputs are transmitted to the **model provider you select** (or automatic routing); provider training / retention practices vary ([OpenRouter Privacy Policy](https://openrouter.ai/privacy)).
- OpenRouter states personal data **may be transferred to servers in the US** or other countries outside the EEA/UK, with SCCs / adequacy relied on for transfers ([Privacy Policy — Data Transfers](https://openrouter.ai/privacy)).
- Even OpenRouter's **EU in-region routing** product focuses on decrypting and forwarding **API payloads** in Europe to EU/EEA/UK/CH provider endpoints; it does **not** claim that account, billing, authentication, and operational data stay in the EU ([OpenRouter EU routing](https://openrouter.ai/business/eu)).

**Rule of thumb:** use a direct EU cloud LLM path (table above) for production client agents that handle personal data. Keep OpenRouter for demos without personal data, or for non-client sandboxes.

## AVV / DPA checklist (per provider)

Under GDPR Art. 28, processing by a processor needs a binding contract. In German practice this is often called an **AVV** (*Auftragsverarbeitungsvertrag*). Do this for **the client** and for **each** sub-processor (LLM, host, email, CRM, logging).

### With the client

- [ ] Roles named (controller = usually the client; processor = you — unless the client only buys a product under your trademark and you become provider under the AI Act)
- [ ] Subject matter, duration, nature, purpose, types of personal data, categories of data subjects
- [ ] Documented instructions; confidentiality; security measures (Art. 32)
- [ ] Sub-processor rules (prior authorization + flow-down)
- [ ] Assistance with data-subject rights, DPIA, breach notice
- [ ] Deletion / return at end of engagement
- [ ] Audit / information rights in a workable form

### With each technical provider

| Check | What “good” looks like |
|-------|-------------------------|
| DPA / AVV exists | Linked from the vendor's official legal / trust page (see table above) |
| You accepted it | Enterprise agreement, click-through, or signed PDF — dated |
| Sub-processors listed | You can name who else touches the data |
| Location / transfer story | EU processing path selected **and** transfer mechanism documented if anything leaves the EEA |
| Training / logging | Provider states whether prompts are used for training; abuse-monitoring retention understood |
| TOMs | Technical and organizational measures available (ISO 27001 / SOC 2 / C5 etc. as supporting evidence, not a substitute for the contract) |

IONOS documents that for AI Model Hub the data processing agreement applies as part of the Cloud contract and does not require a separate signature for that product line — still **read** the [Datenschutzpaket](https://cloud.ionos.de/terms-gtc/avv/) for the contracting entity you use ([data handling](https://docs.ionos.com/cloud/ai/ai-model-hub/governance-and-compliance/data-handling)).

## Retention — 30 to 90 days as a working default

Pick an explicit retention period for:

- Chat / email transcripts that contain personal data
- Application logs that store prompt snippets
- Evaluation datasets copied out of production
- Support exports

**Working default for many limited-risk support / lead agents:** retain identifiable transcripts and prompt logs **30–90 days**, then delete or irreversibly anonymize — unless a longer period is required (e.g. statutory bookkeeping, ongoing dispute) and documented in the client AVV / record of processing.

Shorter is better when the agent only needs ephemeral context. Never “keep forever because storage is cheap.”

## Advanced — AI Act transparency (Article 50)

Article 50 of Regulation (EU) 2024/1689 (AI Act) sets transparency obligations for certain AI systems. According to the European Commission, these transparency rules **apply from 2 August 2026** ([Commission FAQ on Art. 50](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act); [quick facts](https://digital-strategy.ec.europa.eu/en/factpages/quick-facts-transparency-rules-ai-systems)).

For a typical **website chatbot / agent that interacts directly with people**, providers must ensure people are informed they are interacting with an AI system, unless it is obvious from the context ([Art. 50 text overview](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50)).

Also note related duties (deepfakes, emotion recognition, machine-readable marking of synthetic content) if your product does those things — most support / lead agents only need the **interaction disclosure**.

### Ready-to-use disclosure — English

> **AI assistant.** You are chatting with an automated AI assistant operated for [Client name], not a human. Answers can be wrong or incomplete. Do not send passwords, payment card numbers, or sensitive personal data. For urgent or legal matters, contact a human via [human channel]. [Privacy notice: URL]

Short UI chip (first message / header):

> AI assistant · not a human · [Privacy]

### Ready-to-use disclosure — German

> **KI-Assistent.** Sie schreiben mit einem automatisierten KI-Assistenten im Auftrag von [Kundenname], nicht mit einem Menschen. Antworten können falsch oder unvollständig sein. Senden Sie keine Passwörter, Zahlungsdaten oder besondere Kategorien personenbezogener Daten. Bei dringenden oder rechtlichen Anliegen wenden Sie sich an einen Menschen über [Kanal]. [Datenschutzhinweis: URL]

Kurzer UI-Hinweis:

> KI-Assistent · kein Mensch · [Datenschutz]

Place the notice **before or at the first interaction**, in clear language, accessible on mobile. Keep a screenshot in the project evidence pack.

## AI literacy duty (Article 4)

Article 4 requires providers and deployers to take measures to **support the development of AI literacy** of their staff and other persons who operate or use AI systems on their behalf, taking into account knowledge, experience, training, and context. After the 2026 Digital Omnibus update, the Commission’s FAQ states the obligation remains, but **no specific literacy level of any individual must be guaranteed** ([AI literacy Q&A](https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers); consolidated text on [EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02024R1689-20260727)).

**Operator minimum:**

- [ ] Named people who can pause / escalate the agent
- [ ] Short internal note: what the agent does, what data it sees, known failure modes
- [ ] How to turn it off and how to reach a human
- [ ] Record that onboarding happened (date, who attended) — private project file

## Complex — high-risk uses to avoid (Annex III)

Annex III lists high-risk AI use cases. Employment is a clear trap for “just add AI to hiring”:

> **Annex III, point 4** — Employment, workers’ management and access to self-employment: AI systems intended to be used for **recruitment or selection** of natural persons (including targeted job ads, analysing/filtering applications, evaluating candidates), and systems that make decisions affecting work-related relationships, promotion or termination, task allocation based on individual behaviour/traits, or monitoring/evaluating performance ([Annex III](https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3); [employment overview](https://ai-act-service-desk.ec.europa.eu/en/employment-0)).

**Do not** sell or bolt your standard support / lead / inbox agents onto:

- CV ranking, candidate scoring, automated interview grading
- Promotion / termination / performance scoring systems
- Other Annex III domains (e.g. certain biometrics, critical infrastructure, creditworthiness) unless you deliberately run a high-risk compliance program

Stick to **limited-risk** interactive assistants with transparency, or get specialized counsel before touching Annex III.

## Pre-flight checklist (copy into the project)

```text
[ ] Not-legal-advice reviewed with client (they own controller decisions)
[ ] Record of processing / TOMs sketch updated
[ ] Client AVV signed
[ ] Provider DPAs accepted (LLM + host + mail/CRM as applicable)
[ ] EU deployment type verified (not Global if residency required)
[ ] OpenRouter / multi-vendor routers excluded for personal data
[ ] Retention set (____ days) + deletion job exists
[ ] Art. 50 disclosure live (EN and/or DE) + screenshot filed
[ ] Human escalation path tested
[ ] AI literacy onboarding done for operators
[ ] Out of scope: hiring / Annex III high-risk uses
[ ] Abuse / jailbreak basic tests recorded
```

## Sources (official)

| Topic | Link |
|-------|------|
| AI Act consolidated text | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02024R1689-20260727 |
| Art. 50 FAQ (Commission) | https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act |
| Art. 50 service desk | https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50 |
| Transparency quick facts | https://digital-strategy.ec.europa.eu/en/factpages/quick-facts-transparency-rules-ai-systems |
| Art. 4 AI literacy FAQ | https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers |
| Annex III | https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3 |
| GDPR (EU) | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679 |
| Microsoft DPA | https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA |
| Azure OpenAI data privacy | https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy |
| AWS GDPR center | https://aws.amazon.com/compliance/gdpr-center/ |
| AWS GDPR DPA PDF | https://d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf |
| Google Cloud DPA | https://cloud.google.com/terms/data-processing-addendum |
| Vertex data residency | https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/data-residency |
| Mistral DPA help | https://help.mistral.ai/en/articles/347641-where-can-i-find-your-dpa-data-processing-agreement |
| IONOS AI data handling | https://docs.ionos.com/cloud/ai/ai-model-hub/governance-and-compliance/data-handling |
| IONOS AVV | https://cloud.ionos.de/terms-gtc/avv/ |
| OpenRouter privacy | https://openrouter.ai/privacy |

## Next

- [AVV / DPA deep dive](/legal/avv-checklist)
- [Retention defaults](/legal/retention)
- [Legal overview](/legal/) — dates for Art. 50 and Annex III
- Related offer shape: [Three standard agents](/offer-clients/three-standard-agents)
