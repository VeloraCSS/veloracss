# VeloraCSS — Project Roadmap & Todo

_Last updated: 2026-03-08. Updated at every milestone. Add items here whenever a new task is identified._

---

## ✅ COMPLETE — Phases 1–6 (Framework Core)

- [x] Design tokens (`--vel-*` CSS custom properties) — DNA hue system via oklch()
- [x] Modern CSS reset
- [x] 300+ utility classes (layout, flexbox, grid, spacing, sizing, typography, colors, borders, effects, animations, interactivity, gradients, divide, ring, svg)
- [x] 29 components (button, card, badge, alert, input/form, navbar, progress, spinner, table, tabs, avatar, tooltip, modal, dropdown, pagination, toast, skeleton, breadcrumb, menu, steps, divider, kbd, accordion, code-block, chat-bubble, file-upload, hero, feature-list, pricing)
- [x] Responsive variants (vel-sm: / vel-md: / vel-lg: / vel-xl: / vel-2xl:)
- [x] State variants (vel-hover: / vel-focus: / vel-active:)
- [x] Build script (PostCSS + autoprefixer + cssnano) — 478.5KB / 388.4KB min

---

## ✅ COMPLETE — Framework Innovations

- [x] **Color Genetics** — `--vel-dna-hue` drives ALL colors via oklch(). One number = 50+ colors.
- [x] **Container Intelligence** — `vel-container-type-inline/size/normal` + `vel-@sm/md/lg:` variants
- [x] **CSS State Machine** — `vel-sm-tabs` / `vel-sm-toggle` — zero-JS tabs, toggles via :has()
- [x] **Scope Theming** — `data-vel-theme="ocean/forest/rose/amber/violet/cyan/slate/crimson"` per-subtree
- [x] **Smart Forms** — `vel-field` / `vel-field-input` / `vel-field-error` — :has(:invalid/:valid) CSS validation
- [x] **Fluid Scale** — all spacing/type tokens use clamp() — no breakpoints needed

---

## ✅ COMPLETE — Docs Site (142+ pages)

- [x] Docs infrastructure (sidebar nav, DocPage component, live preview, syntax highlighting)
- [x] macOS terminal style everywhere (red/yellow/green dots, filename center, Copy right)
- [x] Core Concepts (7 pages)
- [x] Base Styles (1 page)
- [x] Layout (20 pages)
- [x] Flexbox & Grid (23 pages)
- [x] Spacing (2 pages)
- [x] Sizing (6 pages)
- [x] Typography (14 pages)
- [x] Backgrounds (6 pages)
- [x] Borders (7 pages)
- [x] Effects (7 pages)
- [x] Animations (5 pages)
- [x] Interactivity (6 pages)
- [x] Components (25 pages)
- [x] Blocks (3 pages)
- [x] **Innovations (6 pages)** — Color Genetics, Container Queries, CSS State Machine, Scope Theming, Smart Forms, Fluid Scale

---

## ✅ COMPLETE — Homepage & Site

- [x] Tailwind-style marketing homepage (hero, DNA slider, innovation demos, showcase, stats, OSS banner)
- [x] Unsplash photo showcase section (real UI cards with photos)
- [x] VeloraCSS logo as browser favicon (`app/icon.png`)
- [x] OpenGraph / SEO metadata
- [x] Live playground at `/veloracss/playground/`
- [x] Deployed to GitHub Pages: https://velorax.github.io/veloracss/

---

## ✅ COMPLETE — npm Package Prep (v1.0.0)

- [x] Version bumped to 1.0.0 across package.json, src/velora.css, homepage
- [x] package.json: exports map, files, main, keywords, license, author, homepage, repository, bugs
- [x] MIT LICENSE file
- [x] .npmignore (excludes nextjs-demo, playground, docs from package)
- [x] package name confirmed: `veloracss` — owned by spiritbocs on npm

---

## 🔴 IMMEDIATE — Monday Launch

- [ ] **npm publish** — run `npm publish` Monday morning (24h cooldown lifts ~6 AM Sun→Mon)
  - Token is set: automation token with 2FA bypass in .npmrc
  - Just run: `npm run build && npm publish`
- [ ] **Git release tag** — `git tag v1.0.0 && git push --tags`
- [ ] **GitHub Release** — draft release from tag v1.0.0 with changelog notes
- [ ] **Deprecate old npm versions** (once cooldown lifts):
  - `npm deprecate veloracss@0.1.0 "Upgrade to v1.0.0 — full rewrite"`
  - `npm deprecate veloracss@0.1.2 "Upgrade to v1.0.0 — full rewrite"`

---

## 🟡 SHORT-TERM — Post-launch v1.x

- [x] **CHANGELOG.md** — document what's new in v1.0.0 vs 0.x
- [x] **velora.config.js docs page** — how to override tokens and customize the framework
- [x] **Docs search** — already built into DocsSidebar (live filter on label + slug)
- [x] **CDN links** — jsDelivr / unpkg install option in Getting Started docs
- [x] QA pass on color-genetics + fluid-scale docs pages — 7 issues fixed (wrong token names, wrong clamp values, redundant classes)
- [ ] Product Hunt launch post (after npm is live)

---

## 🟠 MEDIUM-TERM — v1.x Roadmap

- [ ] **VS Code extension** — autocomplete for `vel-` classes
- [x] **velora.config.js** — build-time token overrides (TOKEN_MAP + loadConfig + :root injection in build.mjs)
- [ ] **Build-time purging** — strip unused classes for production
- [x] **Light mode** — `data-vel-mode="light"` support (src/modes.css — tokens + component overrides)
- [ ] **CLI** — `npx veloracss init`, `velora build`, `velora watch`
- [x] Contributing guide + issue templates — CONTRIBUTING.md + .github/ISSUE_TEMPLATE/ + PR template
- [x] Discord / community — https://discord.gg/RKmSyudqAv added to homepage footer + CONTRIBUTING.md

---

## 🔵 FUTURE — v2 Ideas

- [ ] JetBrains plugin
- [ ] Charts — Bar chart (CSS flex) + Progress Ring (SVG stroke-dasharray) — in progress (architect spec complete)
- [x] Dark/light mode toggle on docs site — ThemeToggle in sidebar, persists via localStorage, full CSS-var theming
- [ ] Create the playground other sites wish they had: https://play.tailwindcss.com/ but with live editing of all 22 components + token sliders + config editor and instant preview and copyable code snippets and exportable sandbox link and more
- [ ] Dark/light mode toggle on playground site
- [ ] Calendar component — in progress (architect spec complete)
- [x] Carousel component — zero-JS :has() + radio inputs, up to 6 slides, dots, captions, arrows
- [ ] Social media presence (@veloracss)
- [ ] Sponsorship / Open Collective
