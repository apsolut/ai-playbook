---
title: API vs consumer plans
description: Why client personal data belongs on an API with a DPA and a chosen region, not in a personal ChatGPT, Claude, or Gemini chat
---

# API vs consumer plans

<LevelBadge level="everyday" /> A consumer plan is for **you** learning and drafting with data that is not a client’s. An API (or a contracted business plan) is for anything that contains a client’s personal data or that answers their customers.

“The model is the same” does not mean the contract is the same.

## Starter — two piles

<LevelBadge level="starter" />

| Pile | Examples | OK for |
|------|----------|--------|
| Consumer chat | ChatGPT for individuals, Claude Free / Pro / Max, the Gemini app, a personal Grok chat | Your own drafts, public docs, synthetic examples |
| Production path | Vendor API or a business plan, region chosen, DPA in place | Client prompts, tickets, inboxes, CRM fields |

If you are unsure which pile a paste belongs in, it belongs in neither until you redact it.

**Never** put a client API key in a consumer account, or a consumer session’s contents into a client repo as if it were approved copy.

## Everyday — what the vendors actually say

<LevelBadge level="everyday" />

Read the current page before you rely on this summary. The control labels move.

### OpenAI

OpenAI’s [data-controls page](https://openai.com/policies/how-your-data-is-used-to-improve-model-performance/) says that for services for individuals, such as ChatGPT, they **may use your content to train models** unless you opt out, and that opt-out applies to new conversations. The same page says that **by default** they do not train on inputs or outputs from ChatGPT business plans (Team, Enterprise, and the names on that page) or the **API**. The API docs repeat that, as of 1 March 2023, API data is not used to train models unless you opt in ([Your data](https://developers.openai.com/api/docs/guides/your-data)).

Opting out of training on a personal ChatGPT account is still not a DPA, not an EU region pin, and not a place to paste a customer export. Use the API or a business agreement, and choose the deployment in the [EU path table](/legal/germany-eu-compliance).

### Anthropic

The [Claude Code data-usage](https://code.claude.com/docs/en/data-usage) page distinguishes consumers and commercial customers:

- **Free, Pro, Max, and Ultra:** you can allow data to be used to improve future models. If that setting is on, Anthropic says they train on that data, **including when you use Claude Code from those accounts**. If you allow training, they describe a 5-year retention; if you do not, 30 days. Settings: the privacy controls they link from that page.
- **Team, Enterprise, API, and other commercial terms:** Anthropic says they do not train generative models on that code or those prompts unless you opt in (for example a partner program). The privacy center says the same for commercial products ([Is my data used for training?](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training)).

A personal Claude Pro login plus a client repository is the consumer column. Do not “just this once” point Claude Code at a client tree full of personal data from a consumer plan.

### Google

Google’s [Gemini API additional terms](https://ai.google.dev/gemini-api/terms) say unpaid services (AI Studio and unpaid Gemini API quota) may be used to **improve Google products and machine learning**, that human reviewers may read that content, and: **do not submit sensitive, confidential, or personal information to the Unpaid Services.** The same terms say you may use **only paid services** when making API clients available to users in the EEA, Switzerland, or the UK.

That is the Gemini **developer** API. It is not the same paperwork as Vertex AI in an EU region, which is the option listed for residency on the [compliance checklist](/legal/germany-eu-compliance). The consumer Gemini app is a third thing. Do not assume the app’s settings match the API terms.

### Everyone else

Mistral, Azure, AWS, IONOS, and xAI each have their own terms. xAI publishes API rates on [their pricing page](https://docs.x.ai/developers/pricing); that page is about price, not a promise that a consumer Grok chat is a processor contract. Use the DPA link in the compliance table when it exists, and do not fill the gap with a personal login.

## Advanced — keys, regions, and seats

<LevelBadge level="advanced" />

| Topic | Practice |
|-------|----------|
| Keys | One key per client project. Staging key ≠ production key |
| Caps | A spend alert on the key. [Guardrails](/work-with-ai/guardrails) |
| Region | The EU deployment you screen-shotted, not the SDK default |
| Seats | IDE and chat seats for your staff. They do not replace the production API |
| Logs | The API may keep abuse-monitoring logs even when it does not train. OpenAI’s data-controls doc describes retention by endpoint. Read the row for the endpoint you call |
| Coding agents | They send repository contents to the vendor. Same pile rules as above |

Business plans (ChatGPT Team / Enterprise, Claude for Work) can be the right pile for **your** staff collaborating on non-production text. They are still the wrong place to upload a raw mailbox “so we can brainstorm.” Production traffic goes through the API path you contracted.

## Complex — what “not for client data” means in practice

<LevelBadge level="complex" />

Client data means anything you would not post on a public site: names, emails, ticket text, invoices, voice notes, CRM rows, even a “harmless” spreadsheet of customers.

```text
[ ] Production agent calls an API or a contracted EU deployment
[ ] DPA / AVV accepted for that vendor ([checklist](/legal/avv-checklist))
[ ] No client export sits in a personal ChatGPT, Claude, or Gemini thread
[ ] Coding-agent account for that repo is a commercial plan, or the repo has no personal data
[ ] Keys are per client and can be revoked without stopping other clients
[ ] You can tell the client, in one sentence, where prompts are processed
```

If the honest sentence is “a personal chat account in another country, and I opted out of training,” do not go live.

OpenRouter and other routers are covered on the [compliance checklist](/legal/germany-eu-compliance#avoid-openrouter-for-client-personal-data). Convenience for model shopping is not a production path for personal data.

## Next

- [Tools & plans](/what-to-buy/tools-and-plans)
- [Costs](/run-agents/costs)
- [Germany/EU compliance checklist](/legal/germany-eu-compliance)
