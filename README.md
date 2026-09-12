<div align="center">

# Mohd Sahil — Portfolio

**Full-Stack & Backend Engineer · Personal Portfolio Website**

![Astro](https://img.shields.io/badge/Astro-7-ff5d01?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-deploy-2088ff?logo=githubactions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-222222?logo=github&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

**Live site: [https://mosahel01.github.io](https://mosahel01.github.io)**

</div>

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Architecture](#architecture)
4. [Project Structure](#project-structure)
5. [Local Development](#local-development)
6. [GitHub Pages Deployment](#github-pages-deployment)
7. [Updating Portfolio Content](#updating-portfolio-content)
8. [Accessibility & Performance](#accessibility--performance)
9. [Troubleshooting](#troubleshooting)
10. [Git Workflow](#git-workflow)
11. [License](#license)

---

## Project Overview

This repository contains the personal developer portfolio of **Mohd Sahil**, rebuilt as a modern, static-first
web application with **Astro**.

The site is a single-page, dark-mode-first portfolio that communicates a full-stack & backend engineering focus:
distributed systems, async pipelines, and infrastructure performance. It is intentionally restrained — clean
typography, a consistent design-token system, and no unnecessary client-side JavaScript.

The entire site is generated as **static HTML + CSS** at build time. The only JavaScript on the page is a few
lines that power the accessible mobile navigation menu. There is no React, no state library, and no heavy
framework bundled in the browser — per-page zero JS hydration.

### What migrated from the old site

The previous Vite + React implementation (AI-Studio experiment) was fully replaced. Everything of value was
preserved and migrated:

- Identity and contact details (name, email, GitHub, LinkedIn)
- Skills data, re-organized into **Backend / Databases / Infrastructure / Tools**
- Experience / internship timeline (Codexalabs, SGI Sikar, SEC)
- Projects, expanded with the real pinned repos from the GitHub profile
- The dark, technical visual direction — now rebuilt with a proper design-token system

---

## Tech Stack

| Layer        | Technology                                                                     |
| ------------ | ------------------------------------------------------------------------------ |
| Framework    | [Astro](https://astro.build) 7 (static, zero-JS default)                       |
| Styling      | [Tailwind CSS](https://tailwindcss.com) 4 via the Vite plugin + CSS variables  |
| Language     | [TypeScript](https://www.typescriptlang.org) (strict mode, `astro check`)      |
| Fonts        | Self-hosted Inter Variable & JetBrains Mono Variable (`@fontsource-variable`)  |
| Icons        | Inline SVG icon component (no icon library dependency)                         |
| Deployment   | [GitHub Actions](https://github.com/features/actions)                          |
| Hosting      | [GitHub Pages](https://pages.github.com)                                       |

**Why Astro?** Every section of the portfolio is static content. Astro compiles it into plain HTML/CSS with no
JS payload, which makes the site essentially instant to load. Component-based authoring keeps the code easy to
maintain, and React is deliberately *not* used — there is no interactive state worth hydrating.

---

## Architecture

```
main Branch
   │
   ▼
GitHub Actions (.github/workflows/deploy.yml)
   │  npm ci → npm run build → dist/
   ▼
GitHub Pages (Actions deployment source)
   │
   ▼
https://mosahel01.github.io
```

The site content is **centralized in one data file** (`src/data/portfolio.ts`). Components receive typed data
from that file and render markup. This means updating a project, skill, or link rarely requires touching
component code — content and presentation stay cleanly separated.

Design tokens (colors, surfaces, borders, accent) live as CSS custom properties in
`src/styles/global.css`, mapped into Tailwind's theme. Recoloring the entire site is a matter of editing those
variables — including automatic light/dark variants via `prefers-color-scheme` (dark is the default).

Astro is configured in `astro.config.mjs` with `site: 'https://mosahel01.github.io'`. Because this repository
uses the `<username>.github.io` naming convention, the site is served from the **domain root** and `base` must
remain `'/'` (do not set a project-style `base`).

---

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # Build & deploy to GitHub Pages on push to main
├── public/
│   ├── favicon.svg             # Site favicon (terminal ">_" mark)
│   ├── apple-touch-icon.png    # iOS home-screen icon
│   ├── og.svg / og.png         # Social preview (Open Graph / Twitter card)
├── src/
│   ├── components/
│   │   ├── About.astro         # Intro & technical narrative
│   │   ├── Contact.astro       # Email/GitHub/LinkedIn + availability status
│   │   ├── Experience.astro    # Role / internship timeline
│   │   ├── Footer.astro        # Minimal footer with social links
│   │   ├── Header.astro        # Sticky nav + accessible mobile menu (vanilla JS)
│   │   ├── Hero.astro          # Name, role, tagline, CTAs, status indicator
│   │   ├── Icon.astro          # Inline SVG icon renderer (no icon package)
│   │   ├── Projects.astro      # Featured project + card grid with tags/links
│   │   └── Skills.astro        # Tech stack grid (Backend/Databases/Infrastructure/Tools)
│   ├── data/
│   │   └── portfolio.ts        # ★ Single source of truth for all site content
│   ├── layouts/
│   │   └── Layout.astro        # HTML shell: SEO, Open Graph, fonts, favicon
│   ├── pages/
│   │   └── index.astro         # Single page composing every component
│   ├── styles/
│   │   └── global.css          # Design tokens, base styles, shared component classes
├── .gitignore
├── astro.config.mjs            # Astro + Tailwind config, site/base
├── package.json
├── package-lock.json           # Keep committed — CI installs with npm ci
├── tsconfig.json               # extends astro/tsconfigs/strict
└── README.md
```

---

## Local Development

### Prerequisites

- **Node.js ≥ 22** (20.3+ works; CI uses 22 in `deploy.yml`)
- **npm** (the repo uses `npm` — keep it consistent, don't mix package managers)

**Requirements:**
```text
node >= 22
npm >= 10
```

### Installation

```bash
git clone git@github.com:mosahel01/mosahel01.github.io.git

cd mosahel01.github.io

npm install
```

### npm scripts

| Command            | Action                                                        |
| ------------------ | ------------------------------------------------------------- |
| `npm run dev`      | Start the dev server at `http://localhost:4321` (HMR enabled) |
| `npm run build`    | Build the production site to `dist/`                          |
| `npm run preview`  | Preview `dist/` locally before deploying                      |
| `npm run check`    | Run `astro check` (TypeScript + diagnostics for all `.astro`) |
| `npm run astro ...`| Run any Astro CLI command, e.g. `npm run astro -- --help`     |

### Typical loop

```bash
npm run dev        # develop
npm run check      # type-check as you go
npm run build      # verify production build
npm run preview    # sanity-check the built site
```

---

## GitHub Pages Deployment

Deployment is fully automated with **GitHub Actions** — there is **no** committed build output in the repo.

### Pipeline

```text
push to main
    ↓
workflow starts (.github/workflows/deploy.yml)
    ↓
npm ci            # clean install from lockfile
npm run build     # astro build → dist/
configure-pages   # prepare Pages environment
upload artifact   # upload dist/
deploy-pages      # publish to https://mosahel01.github.io
```

### Workflow file: `.github/workflows/deploy.yml`

- Triggers on pushes to `main` and on manual `workflow_dispatch` (Run workflow button in the Actions tab).
- Uses the official GitHub Actions approach for Pages: `configure-pages` → `upload-pages-artifact` →
  `deploy-pages`.
- Sets `permissions: contents: read, pages: write, id-token: write` and a concurrency guard so concurrent
  runs don't race.
- Uses Node 22 with npm cache for fast installs.

### One-time repository configuration

1. Go to **Settings → Pages** in the repository.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. (Optional) Set **Custom domain** if you ever point a custom domain here.

After that, every push to `main` deploys automatically. You can also trigger a deploy manually from the
**Actions** tab.

### astro.config.mjs notes

```js
export default defineConfig({
  site: 'https://mosahel01.github.io',
  // base stays "/" — <username>.github.io repos are served from the domain root.
});
```

- `site` produces absolute canonical/OG URLs.
- **Do not** set `base: '/mosahel01.github.io'` — that is only for *project* pages repositories
  (`<user>.github.io/<repo>`), not for a `<username>.github.io` user page.

---

## Updating Portfolio Content

All editable content lives in **`src/data/portfolio.ts`**. Each export is typed, and the types are defined in
the same file.

| Export            | Controls                                                            |
| ----------------- | ------------------------------------------------------------------- |
| `profile`         | Name, role, tagline, location, email, GitHub, LinkedIn handles      |
| `navLinks`        | Main navigation items (label + anchor)                              |
| `skillGroups`     | The four skill cards and every chip, with per-skill doc links       |
| `projects`        | Project cards, tags (`stack`), description, and `repoUrl`           |
| `experience`      | The timeline entries (title, org, period, highlights)               |
| `socials`         | Contact cards (email, GitHub, LinkedIn)                             |
| `status`          | The "Available for work" status label and detail                    |

### Adding a new project

1. Open `src/data/portfolio.ts`, find the `projects` array.
2. Append an object:

```ts
{
  title: 'My New Project',
  tagline: 'One-line descriptor',
  description: 'What it does and why it exists.',
  stack: ['Go', 'PostgreSQL'],
  repoUrl: 'https://github.com/mosahel01/my-new-project',
},
```

3. To make it the featured (larger, top) card, add `featured: true`.
4. The card, tags, and links render automatically — no component changes needed.

### Modifying styling

- **Colors / theme:** edit the CSS custom properties at the top of `src/styles/global.css`
  (`--background`, `--surface`, `--accent`, ...). Dark mode is the `:root` default; light mode overrides live
  in the `@media (prefers-color-scheme: light)` block.
- **Shared patterns** (buttons, chips, cards, eyebrows): the `.btn`, `.chip`, `.card`, `.eyebrow` classes in
  `global.css`.
- **Layout/spacing:** components use Tailwind utility classes directly.
- **Fonts:** set in the `@theme` block of `global.css` (Inter + JetBrains Mono via `@fontsource-variable`).

---

## Accessibility & Performance

### Accessibility

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Single `<h1>` (hero name); sections use a consistent `<h2>` → `<h3>` hierarchy.
- Skip-to-content link at the top of the page.
- Visible `:focus-visible` rings on every interactive element.
- Mobile menu is keyboard-operable: toggle button with `aria-expanded`/`aria-controls`, `Escape` closes it,
  links close it on activation.
- `aria-label` on all icon-only links; decorative SVGs are `aria-hidden`.
- Meaningful `alt`-free images: the site uses no raster content images, so nothing needs misleading alt text.
- Contrast: accent/foreground pairings are chosen to meet AA on both themes.

### Performance

- **Zero client-side JS** on initial paint besides the ~1 KB nav menu script. No React, no animation
  libraries, no analytics.
- Self-hosted variable fonts (no Google Fonts requests, no third-party CDN).
- `prefers-reduced-motion` disables all transitions and the status-dot pulse.
- No image content on the page; assets are a favicon and a small social-preview PNG.
- Static-first output: the browser receives plain HTML/CSS from GitHub Pages' CDN.

---

## Troubleshooting

| Problem                                            | Solution                                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------------------- |
| `npm run dev` fails on port 4321                   | Port in use — pass `-- --port 4322` or stop the other server.                   |
| `npm run build` missing styles                     | Ensure `@tailwindcss/vite` is in `astro.config.mjs` `vite.plugins`.              |
| Deploy fails at install step                       | Confirm `package-lock.json` is committed and matches `package.json`.            |
| Site 404s after deploy                             | Settings → Pages → Source must be **GitHub Actions** (not branch/deploy file).  |
| Type errors with Tailwind classes                  | Run `npm run check`; regenerate types with `npx astro sync`.                    |
| Fonts not loading                                  | Run `npm install` to fetch `@fontsource-variable/*`; check `dist/_astro/*.woff2`.|
| OG preview not updating on share                   | Cache the URL, or refresh via the social platform's URL debugger.               |

---

## Git Workflow

- Feature/redesign work happens on feature branches (e.g. `redesign/astro-portfolio`), merged into `main`.
- Production build output (`dist/`, `.astro/`, `node_modules/`) is **gitignored** and never committed.
- `package-lock.json` **is** committed — CI (and your co-developers) install with `npm ci`.
- Suggested commits are small and focused: `feat:`, `fix:`, `chore:`, `docs:`, `style:`.

```bash
git checkout -b my-feature
git add .
git commit -m "feat: add new project card"
git push -u origin my-feature
# open a pull request into main
```

---

## License

[MIT](./LICENSE)

Copyright (c) 2026 Mohd Sahil. This project is licensed under the terms of the MIT License. You may use,
modify, and redistribute it freely, provided the original copyright notice is preserved.