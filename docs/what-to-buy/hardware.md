---
title: Hardware
description: What computer you need for client agents — a normal laptop for API calls, and when a local model is actually the point
---

# Hardware

<LevelBadge level="starter" /> Most client agents in this playbook call an EU API. The model’s GPUs are the vendor’s problem. Your hardware has to run a browser, a terminal, and a coding agent without falling over.

## Starter — the laptop you already use

<LevelBadge level="starter" />

Enough machine:

- A current laptop with enough RAM to run the IDE, a browser, and Docker **if** you try n8n locally. Coolify’s own docs ask for 2 CPU cores, 2 GB RAM, and 10 GB disk **for Coolify on a server**, not for your laptop ([self-hosted requirements](https://coolify.io/docs/start-with-self-hosted)). Your laptop can be the SSH client. The VPS is the server.
- Disk space for repos and Docker images. Full disks cause more failures than slow CPUs.
- A way to lock the screen. Client material does not sit on a shared family login.

Not required for the standard offers:

- A discrete GPU
- A “workstation class” desktop
- A home server in a cupboard, unless you enjoy being the night-shift data center

If the laptop struggles, it is usually too many Electron apps and a local database, not the absence of an AI accelerator. Close things. Or develop against the EU VPS.

## Everyday — local only for convenience

<LevelBadge level="everyday" />

Running a small model on the laptop is reasonable for:

- Drafting **your** code comments or fake FAQ text with no customer data
- Learning a tool
- A demo that never sees personal data

It is a poor default for production client traffic. A laptop sleeps, updates, and walks out of the office. The [hosting](/run-agents/hosting) page is the production path: an EU VM plus an EU API.

Local runners people actually use include [Ollama](https://ollama.com/) and [llama.cpp](https://github.com/ggml-org/llama.cpp). This playbook does not rank them and does not quote tokens per second. Their speed depends on the model, the quantization, and your machine. Measure, or don’t promise.

**Licenses.** Model weights have their own terms (some allow commercial use, some do not, some forbid certain customers). Read the model card on the publisher’s site before you ship a local model to a client. “It downloaded” is not a license.

## Advanced — when local inference is the point

<LevelBadge level="advanced" />

Choose a machine with a GPU, or a server GPU, only if one of these is true:

| Reason | What you take on |
|--------|------------------|
| The client’s policy says prompts must not leave a machine they control | You operate that machine: patches, disk encryption, access, backups |
| Latency or offline use is a real requirement you wrote down | You size RAM and VRAM from **that model’s** card, not from a blog average |
| You are classifying low-risk text with a small model and you measured quality on your eval set | You still need an eval. Local does not mean correct |

The model card states parameter count and, usually, a memory footnote for a given quantization. Use that footnote. This page will not invent “you need 24 GB.” A number that specific goes stale and is wrong for the next model.

Also check power, noise, and where the box sits. A GPU server under a desk in a home office is still a place personal data lives. Disk encryption and who can log in matter as much as VRAM.

Cloud GPUs (a rented accelerator in an EU region) are still a processor. Prefer a region you can name, with a DPA, using the same standard as [API vs consumer](/what-to-buy/api-vs-consumer). Hetzner and IONOS locations are on the [hosting](/run-agents/hosting) page; confirm GPU availability on their current product list. Do not assume every EU location has GPUs.

## Complex — don’t build a private model lab by accident

<LevelBadge level="complex" />

- One client’s documents do not fine-tune a model that later answers another client. If you fine-tune, the dataset, the weights, and the deletion story are in the AVV.
- A local model does not remove the [AI Act transparency](/legal/germany-eu-compliance) duty if people chat with it.
- “We’ll just use my desktop” fails the day you are offline or the disk dies. Production still wants a [backup you restored](/run-agents/hosting).
- Consumer chat apps on the laptop are not a hardware strategy. They are a data-flow decision. Next page.

### Buy / skip

```text
[ ] Laptop is fine for API-backed agents — stop here unless a reason above applies
[ ] If local: model card read, license allows this client, eval run
[ ] Machine owner, disk encryption, and who has the login are written down
[ ] Production is not "whatever is plugged in at my house" unless that is an explicit, backed-up design
```

## Next

- [API vs consumer plans](/what-to-buy/api-vs-consumer)
- [Hosting](/run-agents/hosting)
- [Costs](/run-agents/costs)
