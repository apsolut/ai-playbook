---
name: AI Playbook
description: Public AI agent playbook — apsolut Ghibli tokens on VitePress
colors:
  brand: "#1f6f5c"
  brand-hover: "#185748"
  brand-light: "#e7f4ef"
  brand-muted: "#6ea99a"
  brand-sky: "#6bc9ab"
  dark-brand: "#4fb39a"
  teal: "#7bb3a8"
  teal-light: "#e6f3f1"
  teal-ink: "#3d8f82"
  coral: "#e08e6d"
  coral-light: "#fdf0eb"
  coral-ink: "#c45c3e"
  gold: "#f9c270"
  gold-light: "#fef7e8"
  gold-ink: "#a67c2d"
  warning: "#c5922c"
  wash: "#f0f5f9"
  wash-alt: "#e8eef5"
  card: "#ffffff"
  border: "#e2e8f0"
  border-brand: "#d3e6e0"
  text: "#1e293b"
  text-2: "#475569"
  text-3: "#94a3b8"
  mute-2: "#cbd5e1"
  code-bg: "#1e293b"
  dark-wash: "#0f172a"
  dark-wash-deep: "#0b1220"
  dark-card: "#1e293b"
  dark-border: "#2a3a52"
  dark-border-brand: "#334155"
  dark-text: "#f1f5f9"
  dark-brand-deep: "#14352c"
typography:
  display:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  title-home:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  title-empty:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 650
    lineHeight: 1.3
  body:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body-sm-plus:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.55
  body-detail:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 400
    lineHeight: 1.5
  nav:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.2
  site-title:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    letterSpacing: "-0.02em"
  label:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.06em"
  label-sm:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  label-table:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    letterSpacing: "0.04em"
  label-chip:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
  label-badge:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    letterSpacing: "0.05em"
  label-link:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
  label-footer:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
  label-fav:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
  mono:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.84rem"
    fontWeight: 500
    lineHeight: 1.65
  mono-step:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.72rem"
    fontWeight: 700
rounded:
  xs: "6px"
  sm: "7px"
  md: "8px"
  control: "10px"
  lg: "12px"
  xl: "14px"
  pill: "999px"
  card: "0.75rem"
spacing:
  xs: "0.35rem"
  sm: "0.65rem"
  md: "1rem"
  lg: "1.35rem"
  xl: "1.5rem"
  section: "2.25rem"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0.65rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
    textColor: "#ffffff"
  button-alt:
    backgroundColor: "{colors.card}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "0.65rem 1.25rem"
  card-feature:
    backgroundColor: "{colors.card}"
    textColor: "{colors.text-2}"
    rounded: "{rounded.xl}"
    padding: "1.35rem 1.4rem"
  chip:
    backgroundColor: "{colors.brand-light}"
    textColor: "{colors.brand-hover}"
    rounded: "{rounded.pill}"
    padding: "0.28rem 0.7rem"
  level-badge:
    backgroundColor: "{colors.brand-light}"
    textColor: "{colors.brand-hover}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.65rem"
  nav-favorites:
    backgroundColor: "{colors.brand-light}"
    textColor: "{colors.brand}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.75rem"
---

# Design System: AI Playbook

## Overview

**Creative North Star: "The Forest Workshop"**

A calm operator desk for AI agent delivery: slate paper wash, white cards with soft slate shadows, and forest-green accents that read as craft tools rather than startup marketing. Density favors readable docs — long code, tables, and progressive guides — with just enough lift on interactive cards that the home and index pages feel intentional, not bare.

Typography is Figtree for UI and prose, IBM Plex Mono for commands and step numbers. Color stays in the apsolut Ghibli family (forest, teal, coral, gold). Hero name treatment may use a restrained brand→teal gradient; the rest of the product UI does not.

**Key Characteristics:**

- Slate wash canvas + white elevated cards
- Forest brand, never purple SaaS defaults
- Figtree + IBM Plex Mono only for brand faces
- Soft ambient shadows; hover lifts ~1–2px
- Progressive level chips (teal / brand / gold / coral)
- VitePress shell fully remapped via `--gh-*` → `--vp-c-*` tokens

## Colors

Cool slate neutrals with a single forest brand voice and three semantic accents for status and level.

### Primary

- **Forest** (`#1f6f5c` / `--gh-brand`, light): links, active nav, primary buttons, h2 accent, focus rings. White text on this fill is 6.02:1. The same hex on `#0f172a` is only 2.96:1, so it is not dark-mode text.
- **Forest deep** (`#185748` / `--gh-brand-hover`, light): hover/active brand, table header text (light). 8.41:1 on white, 7.45:1 on mist.
- **Forest mist** (`#e7f4ef` / `--gh-brand-light`, light): soft fills, active sidebar, tip blocks, chips.
- **Forest mid** (`#6ea99a` / `--gh-brand-muted`, light): gradient and border mix only, not small text.
- **Forest light** (`#4fb39a` / `--gh-brand` and `--vp-c-brand-1`, dark): links and focus. 7.01:1 on `#0f172a`, 5.74:1 on `#1e293b`, 5.24:1 on `#14352c`.
- **Forest bright** (`#6bc9ab` / `--gh-brand-muted`, dark): headings, badges, link hover. 8.98:1 on `#0f172a`, 7.36:1 on `#1e293b`, 6.71:1 on `#14352c`.
- **Forest night** (`#14352c` / `--gh-brand-light`, dark): soft fills behind that bright text.

### Secondary

- **Workshop teal** (`#7bb3a8` / `--gh-teal`): success tint, starter level, home chips.
- **Teal wash** (`#e6f3f1` / `--gh-teal-light`): soft success/starter surfaces.

### Tertiary

- **Clay coral** (`#e08e6d` / `--gh-coral`): danger / complex level; ink `#c45c3e`.
- **Warm gold** (`#f9c270` / `--gh-gold`): warning / advanced level, favorite star accent; ink `#a67c2d` / warning `#c5922c`.

### Neutral

- **Paper wash** (`#f0f5f9` / `--gh-wash`): page background (light).
- **Card white** (`#ffffff` / `--gh-card`): elevated surfaces.
- **Slate ink** (`#1e293b` / `--gh-text`): primary text; also code block canvas.
- **Slate body** (`#475569` / `--gh-text-2`): secondary copy.
- **Slate mute** (`#94a3b8` / `--gh-text-3`): labels, outline titles.
- **Hairline** (`#e2e8f0` / `--gh-border`): default borders (light).
- **Night wash** (`#0f172a`): dark page bg; **Night card** (`#1e293b`); **Night border** (`#2a3a52`).

### Named Rules

**The Forest Only Rule.** Brand interactive color is forest green and its tints. Do not introduce violet/purple brand gradients or indigo-as-primary defaults. Workshop teal stays a semantic accent, not a second primary.

**The Soft Fill Rule.** Large surfaces use wash or brand-light tints; solid brand is for small accents (buttons, active states, left card rails) — roughly ≤10–15% of a view.

## Typography

**Display / Body Font:** Figtree (Google Fonts variable 300–700; fallbacks `ui-sans-serif, system-ui, Segoe UI, …`)  
**Mono Font:** IBM Plex Mono 400/500/600 (fallbacks `ui-monospace, SFMono-Regular, Menlo, Consolas`)

**Character:** Friendly technical — slightly rounded sans for long reading, true mono for commands you copy.

### Hierarchy

- **Display** (700, ~2.25–3.25rem, lh 1.05, tracking −0.035em): home hero `.name` / gradient wordmark.
- **Headline** (700, h1, tracking −0.03em): page titles.
- **Title** (650, h2/h3 and feature titles): section heads; h2 uses brand color + hairline bottom border in docs.
- **Body** (400, 1rem, lh 1.7): prose and list items.
- **Label** (700, ~0.7–0.75rem, uppercase, tracking 0.04–0.06em): sidebar group titles, outline title, table headers, level badges.
- **Mono** (500, ~0.84rem in blocks): fenced code, kbd, step index pills.

### Named Rules

**The No-Inter Rule.** Do not default the UI to Inter, Roboto-only, or system-only as the brand face. Figtree stays primary.

**The Command Face Rule.** Shell commands and CLI tokens use IBM Plex Mono; never re-skin code in a display serif.

## Layout

- VitePress doc shell: nav height `64px`, sidebar `272px`, content with comfortable top padding (~28px).
- Home features: 1 col → 2 col (640px) → 3 col (960px); card gap ~1rem.
- Level grids (topic indexes): 1 col → 2 col at 640px.
- Home band under features: max-width `1152px`, 1 col → 2 col at 768px (1.2fr / 1fr).
- Prose max measure on home markdown ~720px; docs follow VitePress default content column.
- Spacing rhythm: card padding ~1.15–1.4rem; section h2 margin-top ~2.25rem; prefer 8/4px multiples via rem.

**The Flat Structure Rule.** One card layer at a time. Do not nest cards inside cards or stack multiple bordered boxes for a single idea.

## Elevation & Depth

Hybrid: flat wash canvas + soft slate-tinted shadows on cards, tables, code, custom blocks, and pager links. Hover adds slightly stronger shadow and `translateY(-1px)` / `(-2px)` on interactive cards — never bounce or large 3D tilt.

### Shadow Vocabulary

- **Rest** (`0 1px 2px rgba(30, 41, 59, 0.05), 0 1px 3px rgba(30, 41, 59, 0.06)` / `--gh-shadow`): default cards, tables, alt buttons.
- **Lift** (`0 4px 12px rgba(30, 41, 59, 0.08)` / `--gh-shadow-md`): hover cards, stronger chrome.
- **Modal** (`0 12px 32px rgba(30, 41, 59, 0.12)` / `--vp-shadow-3`): search shell.
- **Brand CTA** (`0 1px 2px rgba(24, 87, 72, 0.2), 0 4px 12px rgba(31, 111, 92, 0.25)`): primary hero button only.

Nav uses translucent wash + `backdrop-filter: blur(12px)` rather than heavy drop shadow.

### Named Rules

**The Quiet Lift Rule.** Motion is short (~0.15–0.18s), opacity/border/shadow only; honor `prefers-reduced-motion`.

## Shapes

- Global radius token `--gh-radius` / `--vp-radius`: **0.75rem (12px)**.
- Buttons & inputs: **10px** (`control`); code/custom blocks: **12px** (`lg`); feature/level/home cards: **14px** (`xl`).
- Sidebar active / menu hover hit areas: **8px** (`md`); logo mark: **7px** (`sm`); kbd/inline code: **6px** (`xs`).
- Chips, level badges, favorites nav pill: **full pill (999px)**.
- Level cards: 3px solid brand left rail via `::before`.
- Borders: 1px hairline; active/hover borders mix brand into border color rather than thick outlines.
- Focus: 2px solid brand, offset 2px (`:focus-visible`).

## Components

### Buttons

- **Shape:** 10px radius; weight 600; modest padding.
- **Primary:** solid forest, white text; brand-tinted shadow on hero. Dark mode keeps the `#1f6f5c` fill (white text, 6.02:1) and hovers to `#4fb39a` with `#0f172a` text (7.01:1).
- **Alt:** white/card fill, hairline border; hover brand border + brand text.
- **Favorite control:** full-width aside button; gold fill when active.

### Chips

- Pill meta tags on home: brand / teal / gold / coral soft fills with matching ink.
- Use for stack labels, not as primary CTAs.

### Cards / Containers

- Feature cards, level cards, home panels: white card, hairline border, rest shadow, 14px radius.
- Hover: brand-mixed border, lift shadow, 2px rise.
- Tables: card surface, rounded 12px, brand-light header row, zebra soft brand tint.

### Inputs / Fields

- Search trigger: card bg, 10px radius, hairline + rest shadow; hover brand-muted border.
- Local search modal shell: 14px radius, modal shadow.
- kbd: mono, 6px radius, bottom-weighted border.

### Navigation

- Frosted top bar; title weight 700; menu links 0.875rem medium.
- Sidebar: slight brand-tinted wash (light); active item brand-light fill + brand text, 8px radius.
- Outline: uppercase mute title; active link brand.
- Favorites nav pill after nav content (star + label; label SR-clipped on small screens).

### Level badge (signature)

- Pill uppercase labels: starter=teal, everyday=brand, advanced=gold, complex=coral.
- Pair with progressive guide structure; one badge near the page title.

### Custom blocks

- Tip → brand-light; warning → gold-light; danger → coral-light; shared 12px radius + rest shadow.

## Do's and Don'ts

### Do:

- **Do** map new UI through `--gh-*` tokens (and VitePress `--vp-c-*` bridges) in `docs/.vitepress/theme/custom.css`.
- **Do** keep forest `#1f6f5c` and wash `#f0f5f9` as the light-mode identity anchors. Dark-mode brand text is `#4fb39a`, not the light-mode base.
- **Do** use Figtree + IBM Plex Mono for brand typography.
- **Do** reserve teal / gold / coral for semantic levels and accents, not random decoration.
- **Do** preserve one-layer cards, soft shadows, and short hover lifts.
- **Do** support light and dark; dark borders use `#2a3a52`, not the same value as the card fill.

### Don't:

- **Don't** use Inter-only, generic system-only, or trendy display fonts as the primary UI face.
- **Don't** introduce purple/violet SaaS gradients or neon multi-stop mesh backgrounds.
- **Don't** nest cards inside cards or build “card soup” index pages.
- **Don't** use heavy glassmorphism, skeuomorphism, or bounce/elastic motion on docs chrome.
- **Don't** invent a second brand primary (blue-as-brand, pink CTAs, etc.) alongside forest.
- **Don't** flatten dark mode by setting border equal to card (`#1e293b` on `#1e293b`).
