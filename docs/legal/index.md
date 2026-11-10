---
title: Legal DE/EU
description: Operator map for GDPR and the EU AI Act when you ship client agents in Germany or the EU — not legal advice
---

# Legal DE/EU

::: danger Not legal advice
These pages are practical checklists for freelancers and small agencies. They are **not legal advice**, not a law-firm memo, and not a substitute for qualified counsel or your client’s DPO. Laws and vendor terms change. Open the official links before you decide.
:::

Operator hygiene for client AI agents under **GDPR / DSGVO** and the **EU AI Act**. The long checklist is [Germany/EU compliance](/legal/germany-eu-compliance). This page is the map.

<LevelBadge level="starter" /> If you only finish one legal page before a pilot, finish the five gates on that checklist. Do not go live with personal data while a gate is open.

## Starter — five gates

<LevelBadge level="starter" />

| Gate | Where to read |
|------|----------------|
| Who is controller, processor, sub-processor | [AVV / DPA](/legal/avv-checklist) |
| A contract with the client (AVV) and a DPA with each vendor | Same page, plus the provider table on the [checklist](/legal/germany-eu-compliance) |
| Personal data on an EU path you selected, not a casual router | [Avoid OpenRouter](/legal/germany-eu-compliance#avoid-openrouter-for-client-personal-data) |
| People are told they are talking to AI | [Art. 50](/legal/germany-eu-compliance#advanced-ai-act-transparency-article-50) |
| You know how long you keep transcripts | [Retention](/legal/retention) |

## Everyday — EU models and retention

<LevelBadge level="everyday" />

For client personal data, the checklist’s table is the working list: Azure OpenAI in an EU Data Zone or EU region, Amazon Bedrock in Frankfurt with in-region inference, Vertex AI on an EU endpoint, Mistral’s commercial DPA, or IONOS AI Model Hub in Germany. Confirm the **deployment you clicked**, not the marketing page. Each row has official links on the [checklist](/legal/germany-eu-compliance#everyday-pick-an-eu-llm-path).

**OpenRouter** is a poor default for that data. Its privacy policy describes transfers outside the EEA, and its EU routing product does not claim that account and billing data stay in the EU. Details and links: the checklist section above. Use it for demos without personal data, not for production client agents.

Retention is not “whatever the vendor keeps.” Your copies of transcripts and logs need a written period. This playbook’s **operator default** for limited-risk support and lead agents is **30–90 days**, then delete. That number is **not** in the GDPR. The GDPR requires storage limitation. See [Retention defaults](/legal/retention).

## Advanced — transparency and literacy

<LevelBadge level="advanced" />

**Article 50.** The European Commission’s FAQ says the transparency rules apply from **2 August 2026** ([FAQ](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act), [quick facts](https://digital-strategy.ec.europa.eu/en/factpages/quick-facts-transparency-rules-ai-systems)). The AI Act Service Desk’s enforcement FAQ also says providers of systems placed on the market before that date have until **2 December 2026** to comply with the marking and detection duty in Article 50(2) ([When does enforcement start?](https://ai-act-service-desk.ec.europa.eu/en/ai-act/faq/when-does-enforcement-start)). A normal support or lead chat needs the “you are talking to an AI” notice. Ready EN and DE text is on the [checklist](/legal/germany-eu-compliance#advanced-ai-act-transparency-article-50).

**Article 4 (AI literacy).** The Commission’s regulatory-framework page says literacy obligations have applied since **2 February 2025** ([AI Act policy page](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)). After the Digital Omnibus, the Commission’s literacy FAQ says the duty remains and that **no specific literacy level of any individual must be guaranteed** ([FAQ](https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers)). A short onboarding note for the people who can switch the agent off is the operator minimum on the checklist. It is not a certificate.

## Complex — high-risk uses and dates

<LevelBadge level="complex" />

Annex III includes employment tools that recruit, filter applications, or score performance. Do not bolt the standard agents onto hiring. The list is [Annex III](https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3).

**When those high-risk rules apply** (consolidated text after the AI Omnibus, which the Commission says entered into force on 27 July 2026):

| Systems | Application |
|---------|----------------|
| High-risk under Article 6(2) and **Annex III** | **2 December 2027** |
| High-risk under Article 6(1) and **Annex I** (product-safety style) | **2 August 2028** |

Sources: [Article 113 on the Service Desk](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113) (text based on the EUR-Lex consolidation of 27 July 2026), the [Commission news on the Omnibus](https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force), and the [enforcement FAQ](https://ai-act-service-desk.ec.europa.eu/en/ai-act/faq/when-does-enforcement-start). The later date is not permission to ship a hiring bot now. Building one still needs counsel, and transparency and GDPR duties do not wait for 2027.

Consolidated regulation: [EUR-Lex CELEX:02024R1689-20260727](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02024R1689-20260727).

## Pages

| Page | Use it for |
|------|------------|
| [Germany/EU compliance checklist](/legal/germany-eu-compliance) | Gates, EU LLM table, OpenRouter, Art. 50 wording, Annex III |
| [AVV / DPA deep dive](/legal/avv-checklist) | Client contract, vendor DPA, sub-processor chain |
| [Retention defaults](/legal/retention) | 30–90 day working default, deletion jobs, logs, backups |

## Next

- [Offer clients](/offer-clients/) — scope the work before you promise a date
- [API vs consumer plans](/what-to-buy/api-vs-consumer) — personal chat logins are not this legal path
