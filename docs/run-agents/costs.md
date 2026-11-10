---
title: Costs
description: Token math, caching, and model tiering for client agents — formulas and official price pages, no fixed vendor prices
---

# Costs

<LevelBadge level="everyday" /> Prices change. This page has formulas and links. It does not have a price table, because a copied number would be wrong next month.

Offer money (what you charge the client) is separate. Orientation figures for Starter, Pro, and Care are on [Tiers & pricing](/offer-clients/tiers). Those are this playbook’s scoping numbers, not model prices.

## Starter — read the price page, then estimate

<LevelBadge level="starter" />

Vendors publish prices per million tokens, or per request, or as a host hourly rate. Open the page on the day you estimate.

| Bill | Official page to open |
|------|------------------------|
| OpenAI API | [OpenAI API pricing](https://openai.com/api/pricing/) |
| Anthropic API | [Claude pricing](https://www.anthropic.com/pricing) |
| Gemini Developer API | [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) |
| Vertex AI | [Vertex generative AI pricing](https://cloud.google.com/vertex-ai/generative-ai/pricing) |
| Mistral | [Mistral pricing](https://mistral.ai/pricing) |
| xAI API | [xAI API pricing](https://docs.x.ai/developers/pricing) |
| Amazon Bedrock | [Bedrock pricing](https://aws.amazon.com/bedrock/pricing/) |
| Azure OpenAI | [Azure OpenAI pricing](https://azure.microsoft.com/pricing/details/cognitive-services/openai-service/) |
| Hetzner Cloud | [Hetzner Cloud](https://www.hetzner.com/cloud) |
| IONOS Cloud | [IONOS Cloud](https://cloud.ionos.com/) |

If a URL moves, use the vendor’s documentation home and search “pricing.” Do not trust a screenshot in a slide.

**Rough size, not a law.** Many tokenizers are on the order of a few characters per token for English, and a different rate for German or for code. Use the vendor’s tokenizer or a count from a real API response (`usage` fields). Do not put a guessed token count into a client quote as if it were measured.

## Everyday — the formulas

<LevelBadge level="everyday" />

For a priced chat model that bills input and output separately:

```text
input_cost  = (input_tokens  / 1_000_000) * price_per_million_input
output_cost = (output_tokens / 1_000_000) * price_per_million_output
call_cost   = input_cost + output_cost
```

If the vendor also bills cached input, tool use, or audio at their own rates, add those lines from the same price page. Do not assume cache is free.

One request a user sees may be several calls (rewrite, retrieve, answer, classify). Count all of them.

```text
per_conversation = calls_per_conversation * average_call_cost
per_month        = conversations_per_month * per_conversation
```

`conversations_per_month` is the client’s number or a range you both agree (“about 300–800”). It is not a benchmark from this site.

**Worked shape with placeholders.** Substitute numbers you just read:

```text
price_per_million_input  = P_in     # from the price page today
price_per_million_output = P_out
typical input tokens     = T_in     # from a real staging call
typical output tokens    = T_out
calls per conversation   = N
conversations / month    = C

monthly_model ≈ C * N * ((T_in/1e6)*P_in + (T_out/1e6)*P_out)
monthly_host  ≈ the VM price on the host’s page
monthly_total ≈ monthly_model + monthly_host + other SaaS you actually pay
```

Output is often priced higher than input. Confirm on the page; do not bake the ratio into the formula.

### What else is on the bill

| Line | Notes |
|------|--------|
| Host | VM, disk, backups. Snapshots are not always included in the VM price |
| Database | Managed Postgres if you are not on the same VM |
| Email / CRM | Usually the client’s existing subscription. Do not double-count it in your margin unless you resell it |
| Observability | Zero if logs stay on the VM. A third-party log vendor is a new processor and a new line |
| Your time | Care tier. The API bill can be small while the work is not |
| Tax | VAT handling is between you, the client, and your accountant. This page does not advise on it |

## Advanced — caching and smaller models

<LevelBadge level="advanced" />

**Caching.** Several APIs can reuse a repeated prompt prefix (system prompt, big policy text) and bill that prefix differently. The discount and the minimum prefix length are on the vendor’s docs, and they change. Read them rather than this page:

- OpenAI: prompt caching section on the [API pricing](https://openai.com/api/pricing/) page and the current caching guide linked from the API docs
- Anthropic: prompt caching on [Claude pricing](https://www.anthropic.com/pricing) and the caching page in Claude docs

Caching helps when many requests share a long, stable prefix. It does little for a unique email body and a short system prompt. Measure a staging day before you promise the client a lower bill.

**Model tiering.** Use a smaller, cheaper model where the task is narrow, and a stronger model where the words go to a customer.

| Step | Usually enough | Send to the stronger model when |
|------|----------------|----------------------------------|
| Route / classify intent | Small model, short output, strict schema | The schema fails |
| Retrieve pages | No model, or a small one to rewrite the query | Search misses and the question is in scope |
| Draft the customer answer | The model you eval’d | — |
| Embeddings | The embedding model’s own price line | Do not use a chat model to embed |

Cap `max_output_tokens` on the router. A classifier does not need a long completion.

**Retries.** Retry timeouts with a limit and a backoff. Do not retry schema failures into the same expensive model without a change; you will pay twice for the same mistake.

## Complex — caps, margin, and multi-client

<LevelBadge level="complex" />

- One API project or key per client so the invoice splits without a spreadsheet mystery.
- A budget alert at a figure you pick. [Guardrails](/work-with-ai/guardrails) covers the operational side.
- Re-read the price page when you change model. A “small” rename can be a different SKU.
- EU regional endpoints and global endpoints are not always the same price. Residency wins over the cheaper region when personal data is involved. Check both the price page and the [EU path table](/legal/germany-eu-compliance).
- Your Care price has to cover a bad month of tokens **or** you pass token cost through with a written cap. Decide that in the [tier](/offer-clients/tiers) conversation. Do not discover it on the invoice.
- Batch and asynchronous APIs, when the vendor offers them, are for eval runs and backfill, not for a chat widget that a person is staring at. Read that vendor’s batch price line before you use it.

### Quote worksheet

```text
Date of price pages:
Model + region:
P_in / P_out (per million):
Measured T_in / T_out (staging):
Calls per conversation:
Conversations / month (range):
monthly_model range:
monthly_host:
Who pays overage:
Alert threshold:
```

Attach the worksheet to the scope. When prices change, update the worksheet. Do not leave last year’s screenshot as the contract’s only number unless the contract froze it on purpose.

## Next

- [Hosting](/run-agents/hosting)
- [Tiers & pricing](/offer-clients/tiers)
- [API vs consumer plans](/what-to-buy/api-vs-consumer)
