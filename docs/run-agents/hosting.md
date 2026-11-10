---
title: Hosting
description: Where to run n8n or a small agent service — Hetzner, IONOS, and Coolify — with EU location, TLS, and backups
---

# Hosting

<LevelBadge level="everyday" /> The host is where the workflow runs and where logs sit. It is not automatically where the **model** runs. Pin both. Model location is the [compliance checklist](/legal/germany-eu-compliance). This page is the machine.

No client hostnames and no private network diagrams belong in git. Use placeholders (`agent.example.com`).

## Starter — one EU VPS

<LevelBadge level="starter" />

You need a Linux server you can SSH to, in a place you can name.

| Provider | What they document | What you still choose |
|----------|--------------------|------------------------|
| **Hetzner Cloud** | Network zones include `eu-central` locations **Falkenstein (`fsn1`)** and **Nuremberg (`nbg1`)** in Germany, and **Helsinki (`hel1`)** in Finland. Hetzner also lists Ashburn, Hillsboro, and Singapore. Hetzner says it owns and operates the parks in Nuremberg, Falkenstein, and Helsinki, and uses colocation in the US and Singapore. Backups, snapshots, firewalls, private networks, and volumes are listed for the EU locations. | Create the server in `fsn1`, `nbg1`, or `hel1` when the workload is for EU personal data. Do not assume “Hetzner” means Germany if you clicked a US location. [Locations](https://docs.hetzner.com/cloud/general/locations/) |
| **IONOS Cloud** | IONOS documents its own cloud data-center pages and a German-law AVV for IONOS Cloud. The [AI Model Hub data-handling page](https://docs.ionos.com/cloud/ai/ai-model-hub/governance-and-compliance/data-handling) describes inference in IONOS Cloud data centers in Germany. IONOS Cloud Backup describes encrypted backup storage in ISO 27001-certified German data centers. | Read the current [data-center list](https://cloud.ionos.com/data-centers) for the site you actually order. A German company can still sell you a server outside Germany. [AVV](https://cloud.ionos.de/terms-gtc/avv/) |

**Week-one checklist**

```text
[ ] Location is an EU site you wrote down (city or location code)
[ ] SSH keys only; password login off
[ ] Firewall allows 22 from your IP, and 80/443 if you serve HTTPS
[ ] Automatic security updates for the OS, or a calendar reminder you keep
[ ] A non-root user runs the app
[ ] TLS on every public name (see Everyday)
[ ] The LLM calls an EU endpoint, not “whatever the SDK defaults to”
```

Hetzner’s firewall and private networks are in the same locations doc. Use them. Do not leave the database port open to the world.

## Everyday — Coolify or Compose, staging vs prod

<LevelBadge level="everyday" />

**Coolify** is a self-hosted panel. You install it on a server you control. The data sits on **that** server’s disk and in **that** provider’s region. Coolify is not a region.

Official requirements for the Coolify instance itself: 2 CPU cores, 2 GB RAM, 10 GB disk, Linux, amd64 or arm64. Their install guide is [Start with self-hosted](https://coolify.io/docs/start-with-self-hosted). They also document automatic Let’s Encrypt certificates for custom domains ([site](https://coolify.io/), [if certificates fail](https://coolify.io/docs/troubleshoot/dns-and-domains/lets-encrypt-not-working)). HTTP-01 needs port 80 reachable; TLS-ALPN-01 needs 443. A CDN proxy in front can break the challenge unless you use a DNS challenge.

Coolify’s n8n recipes include SQLite for a small instance, PostgreSQL for production, and PostgreSQL plus a worker and Redis when you need a queue ([n8n on Coolify](https://coolify.io/docs/services/n8n)). SQLite is a fine demo. It is a poor place for a client inbox agent you cannot afford to corrupt.

**Staging and production** are two servers, or at least two instances with two databases and two LLM keys. Promoting a change means you move a reviewed workflow or image, not that you edit production nodes by hand.

If you skip Coolify, Docker Compose plus a reverse proxy (Caddy or Traefik) is the same idea: one public port, TLS, containers, backups of the volumes.

### TLS

- Every public URL is `https`.
- Let’s Encrypt certificates are 90 days. Confirm something renews them. Coolify’s troubleshooting page says an existing certificate keeps working until it expires, which is how people discover renewal has been broken for weeks.
- Do not tell clients to click through a browser warning.

### n8n on that host

n8n’s own hosting docs are the reference for environment variables and upgrades: [n8n hosting](https://docs.n8n.io/hosting/). Set the public webhook URL to the HTTPS name, or triggers will sign links to localhost. Turn on execution-data pruning so successful runs do not keep payloads forever; the switch is in current n8n hosting docs and moves between versions — find “execution data” in those docs when you install.

## Advanced — backups you can restore

<LevelBadge level="advanced" />

Hetzner documents **backups** and **snapshots** in each cloud location, including the EU ones ([locations](https://docs.hetzner.com/cloud/general/locations/)). IONOS documents a backup product stored in German certified data centers ([IONOS Cloud Backup](https://cloud.ionos.com/storage/backup)). Enable the product. Then do the part vendors cannot do for you:

| Copy this | Why a disk snapshot is not enough |
|-----------|-------------------------------------|
| n8n encryption key | Without it, restored credentials do not open. Store it in a password manager, not in the repo |
| Workflow export (git) | So you can rebuild if the volume is junk |
| Database dump | Snapshot timing and database consistency are not the same thing |
| A second copy off that server | Provider backups live with the provider. Keep one copy elsewhere you also have a contract for |
| A restore drill | Write the date you last restored onto a blank machine |

Test restore once before go-live and once a year after. A backup you have not restored is a hope.

Also back up **before** an n8n or OS upgrade. Read the release notes. Major n8n upgrades sometimes need a migration step.

### What to monitor on the host

- Disk filling up (execution data and Docker images)
- Certificate expiry
- The process is running
- 5xx on the webhook

Details and what not to log: [Evals & monitoring](/run-agents/evals-monitoring).

## Complex — more than one client

<LevelBadge level="complex" />

| Isolation | Minimum |
|-----------|---------|
| One client per VM | Simplest story for access, backups, and deletion |
| Several clients on one VM | Separate containers, databases, keys, and Linux users. A shared n8n is a shared credential store — do not do that |
| Network | Databases have no public port. Admin UI on a VPN or an allowlisted IP if you can operate that way |
| Deletion | When the contract ends, you have a list: VM, backups, LLM project, log archive. See [Retention](/legal/retention) |
| Admin access | Named people, SSH keys, no shared root password in a chat |

Private networks (Hetzner documents them per location) are for the database and the app to talk. They are not a substitute for passwords.

Do not host the **model** on this VM unless you meant to run local inference and you have read [Hardware](/what-to-buy/hardware). A typical client agent calls an EU API. The VM only orchestrates.

## Decision

| Situation | A reasonable default |
|-----------|----------------------|
| First client, modest traffic | Hetzner or IONOS VM in Germany or Finland + Coolify or Compose + Postgres n8n |
| Client already on IONOS and wants one vendor | IONOS VM in a German site, still verify the site on the order |
| You need the panel more than you need minimalism | Coolify on that EU VM |
| You already run Kubernetes well | Use it. Do not adopt a platform for one webhook |

Prices change. Read [Hetzner Cloud](https://www.hetzner.com/cloud) and [IONOS Cloud](https://cloud.ionos.com/) before you order. This page does not quote them.

## Next

- [Costs](/run-agents/costs)
- [Germany/EU compliance checklist](/legal/germany-eu-compliance)
- [Guardrails](/work-with-ai/guardrails)
