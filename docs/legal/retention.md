---
title: Retention defaults
description: How long to keep agent transcripts, logs, eval sets, and backups — a 30–90 day operator default, deletion jobs, not legal advice
---

# Retention defaults

::: danger Not legal advice
How long **you** may keep personal data is the client’s decision as controller, written in the AVV and the record of processing. This page is an operator default, not a statutory period and not legal advice.
:::

<LevelBadge level="everyday" /> GDPR Article 5(1)(e) is storage limitation: personal data is kept no longer than necessary for the purposes. Article 17 is the right to erasure, with exceptions (for example a legal duty to keep something). Both are in the [GDPR text](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679). Neither article says “30 days” or “90 days.”

## Starter — pick a number and write it down

<LevelBadge level="starter" />

**Working default in this playbook,** for identifiable transcripts and prompt logs of a limited-risk support, lead, or inbox agent: **30–90 days**, then delete or irreversibly anonymize.

Use the short end when the agent only needs the last turn. Use the long end when the client reviews complaints inside a quarter. Go outside 30–90 only with a reason you can say out loud:

- a statute (bookkeeping, a tax rule) that actually applies to **that** record
- an open dispute the client’s counsel told you to hold
- the person asked you to keep a transcript

“Storage is cheap” and “the model might need it later” are not reasons.

Write the number in the [scope](/offer-clients/discovery) and in the [AVV](/legal/avv-checklist). A number that exists only in your head will not be what the deletion job does.

## Everyday — one clock per artifact

<LevelBadge level="everyday" />

| Artifact | Default here | Notes |
|----------|--------------|--------|
| Chat or email transcripts with personal data | 30–90 days | The product people mean by “the logs” |
| Application logs that contain prompt text or email addresses | Same clock, or don’t store that text | Prefer metadata only. [Monitoring](/run-agents/evals-monitoring) |
| Metadata (time, model, token counts, error class, request id) | Often fine for longer, if it is not identifiable | If the id joins back to a person, it is still personal data |
| Eval questions | Redacted, kept while the agent exists | Raw tickets used to build the set: delete after redaction |
| n8n execution payloads | Prune. Do not rely on the default forever | See n8n hosting docs from the [hosting](/run-agents/hosting) page |
| Billing records (invoices, not prompts) | Whatever your accountant requires | Do not “solve” this by keeping the prompts attached to the invoice |
| Backups | Short enough that delete means delete | A 90-day database and a one-year snapshot is a one-year database |
| Vendor-side abuse logs | Their schedule, not yours | Example: OpenAI documents abuse-monitoring retention by endpoint on [Your data](https://developers.openai.com/api/docs/guides/your-data). You still delete **your** copies on your clock |

Vendor retention does not extend your right to keep a copy, and your deletion does not wipe the vendor. Say both in the client note.

## Advanced — a deletion job

<LevelBadge level="advanced" />

A calendar reminder is not a job. A job you have run once is.

```text
1. Dry run: count rows older than N days. Log the count, not the contents.
2. Delete or anonymize those rows in the app database.
3. Prune workflow execution data the same way.
4. Confirm backups and snapshots that still contain the rows, and when those backups themselves expire.
5. Write one line: date, count, success or error. No names.
6. Alert a human if the job did not run.
```

Run it on staging first. Deleting the wrong table is worse than a long retention you at least know about.

**Anonymize** only if you know what still identifies someone. A transcript with the email removed and the order story left intact may still be personal data. If you are not sure, delete.

**Access and erasure requests.** The controller answers the person. Your AVV should say you will help. Practically: given an email address, can you find and delete their transcripts before the clock, and say if backups will linger until a date? If the answer is “we’d have to grep a disk,” fix the store before go-live.

Test that path with a fake address in staging. Do not test it by emailing a real customer’s data to yourself.

## Complex — logs, restores, and the end of the contract

<LevelBadge level="complex" />

**Logs.** Production logging for these agents:

| Keep | Drop |
|------|------|
| Timestamp, request id, agent, environment | Full prompt and completion |
| Model name, token counts, latency | Message bodies |
| Tool name, blocked or allowed | Attachments |
| Error class | Keys, cookies, session tokens |

If a debugger needs a body, capture it on staging or under a time-boxed flag that expires the same day, with the client’s instruction. Turn the flag off.

**Restores.** Document this sentence in the runbook: restoring a backup **brings personal data back**. After a restore, run the deletion job so you do not resurrect rows that had already aged out. If you restore over a new client onto an old disk, you have mixed two controllers. Do not do that. [Hosting](/run-agents/hosting).

**End of contract.** Article 28 expects deletion or return unless a law requires storage. The [delivery checklist](/offer-clients/delivery-checklist) has the steps: disable, revoke keys, delete app data, name the backup expiry, remove cloud-agent copies of the repo.

```text
Retention N =
Job schedule =
Last successful run =
Backup product and its own expiry =
Who is mailed if the job fails =
How a deletion request is executed =
```

## Next

- [AVV / DPA](/legal/avv-checklist)
- [Evals & monitoring](/run-agents/evals-monitoring)
- [Germany/EU compliance checklist](/legal/germany-eu-compliance)
