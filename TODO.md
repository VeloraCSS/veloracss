# VeloraCSS — Project Roadmap & Todo

## Phase 1 — Foundation ✅ DONE
- [x] Design tokens (`--vel-*` CSS custom properties)
- [x] Modern CSS reset
- [x] Layout utilities (display, position, overflow, z-index, etc.)
- [x] Flexbox utilities (direction, wrap, align, justify, gap, order)
- [x] Grid utilities (cols, rows, span, flow)
- [x] Spacing utilities (padding, margin, space-between)
- [x] Sizing utilities (width, height, min/max)
- [x] Typography utilities (font, size, weight, leading, tracking, align, transform)
- [x] Color utilities (text, background, border colors)
- [x] Border utilities (width, style, radius, outline, ring)
- [x] Effects utilities (shadow, opacity, filters, backdrop-blur)
- [x] Transitions & animations (duration, easing, keyframes)
- [x] Interactivity utilities (cursor, pointer-events, select, scroll-snap)
- [x] Button component (all variants, sizes, outline, ghost, link, icon, block)
- [x] Card component (default, flat, elevated, filled, primary, hover)
- [x] Playground — Vite + React + Monaco Editor + live preview
- [x] Playground — Welcome screen, Examples dropdown, Share via URL, device toggle
- [x] Next.js demo integration (App Router + static export)
- [x] Build script (PostCSS, autoprefixer, cssnano)

---

## Phase 2 — Premium Color System & 10 New Components ✅ DONE

### New color system
- [x] Full Velora brand palette (Violet, Emerald, Rose, Amber, Sky) with 50–950 ramps
- [x] Gradient token system (`--vel-gradient-*`)
- [x] Glow token system (`--vel-glow-*`)
- [x] Fixed `--vel-color-text` / `--vel-color-muted` naming

### New utilities
- [x] Gradient utilities (`vel-bg-gradient-*`, text gradients, directional composer)
- [x] Animation utilities (13 keyframes, `vel-animate-*`, shimmer skeleton)
- [x] Glow & ring utilities

### Upgraded components
- [x] Button — gradient fills, glow variants, `vel-btn-loading`, spring hover
- [x] Card — glass, gradient-border, brand-tinted, glow variants

### 10 new components
- [x] Badge
- [x] Alert
- [x] Input / Form (text, textarea, select, checkbox, radio, switch/toggle, input-group)
- [x] Navbar
- [x] Progress bar
- [x] Spinner / Loader
- [x] Table
- [x] Tabs
- [x] Avatar
- [x] Tooltip

### Consistency pass
- [x] Home demo (page.tsx) — v0.2.0, dark code snippets, docs link, new sections
- [x] Playground (App.tsx) — v0.2.0, correct colors, docs link, accurate feature list
- [x] README.md — correct URLs, accurate features, no false claims

---

## Phase 3 — Framework Expansion ✅ DONE (this session)

### Bug fixes
- [x] Glow bug — solid buttons no longer glow at rest (hover-only)
- [x] Keyframe duplication — removed 6 duplicate `@keyframes` + 5 `vel-animate-*` from transitions.css
- [x] Ring duplication — consolidated all ring classes in borders.css, removed from effects.css, added missing `vel-ring-info`

### Utility expansion
- [x] `layout.css` — full inset scale with negative values (~155 new classes)
- [x] `spacing.css` — negative margins, scroll-margin, scroll-padding (~89 new classes)
- [x] `effects.css` — contrast, saturate, hue-rotate, drop-shadow, backdrop-* filters (~62 new classes)
- [x] `divide.css` — NEW: divide-x/y, divide styles, divide colors
- [x] `ring.css` — NEW: composable CSS-variable ring system
- [x] `svg.css` — NEW: fill, stroke, stroke-width utilities

### 10 new components
- [x] Modal (backdrop, box, header/body/footer, sizes)
- [x] Dropdown (menu, items, dividers, headers)
- [x] Pagination (prev/next, page numbers, sizes, disabled)
- [x] Toast (positioned notifications, color variants, dismiss)
- [x] Skeleton (shimmer loading placeholders)
- [x] Breadcrumb (separator-based nav)
- [x] Menu (vertical/horizontal, active, disabled, icons)
- [x] Steps (horizontal/vertical, completed/active states)
- [x] Divider (horizontal/vertical with optional label)
- [x] Kbd (keyboard key badges)

### Build
- [x] Updated `src/velora.css` with all new imports (35 total)
- [x] `npm run build` — 443.9KB full / 363.9KB min — 5,979 `vel-` class definitions

---

## Phase 3.5 — Deploy v0.3.0 to GitHub Pages 🔴 NEXT

- [ ] Update `nextjs-demo/app/page.tsx` — add new Phase 3 components to demo
- [ ] `cd nextjs-demo && npm run build` — generate static export to `out/`
- [ ] Copy `nextjs-demo/out/` → `docs/` (replace current static files)
- [ ] `git add docs/ && git commit -m "deploy: v0.3.0"` — commit and push
- [ ] Verify live at https://velorax.github.io/veloracss/

---

## Phase 4 — Documentation Site ✅ PARTIAL

### Done
- [x] Docs infrastructure (sidebar, DocPage component, layout, routing)
- [x] Getting Started page
- [x] Layout — 20 reference pages
- [x] Flexbox & Grid — 23 reference pages
- [x] Spacing — 2 pages
- [x] Sizing — 6 pages
- [x] Typography — 9 pages
- [x] Deployed to GitHub Pages at `/veloracss/docs`

### Still needed
- [ ] Backgrounds reference pages
- [ ] Borders reference pages
- [ ] Effects reference pages (shadow, opacity, blur, filters)
- [ ] Animations reference pages
- [ ] Interactivity reference pages
- [ ] Divide / Ring / SVG reference pages (new in Phase 3)
- [ ] Components — all 22 (button, card, badge, alert, input, navbar, progress, spinner, table, tabs, avatar, tooltip, modal, dropdown, pagination, toast, skeleton, breadcrumb, menu, steps, divider, kbd)
- [ ] Docs search
- [ ] Dark/light mode toggle on docs

---

## Phase 5 — Responsive & State Variants 🔴 HIGH PRIORITY

Without these, users can't do hover effects or responsive layouts.

- [ ] Responsive prefixes: `vel-sm:`, `vel-md:`, `vel-lg:`, `vel-xl:`, `vel-2xl:`
- [ ] Hover state: `vel-hover:bg-primary`, `vel-hover:shadow-lg`
- [ ] Focus state: `vel-focus:ring`, `vel-focus:outline-none`
- [ ] Active state: `vel-active:scale-95`
- [ ] Dark mode: `vel-dark:bg-neutral-900` (via `.dark` class or `prefers-color-scheme`)
- [ ] Group hover: `vel-group`, `vel-group-hover:opacity-100`

---

## Phase 6 — Additional Blocks and Components 🔴 MEDIUM PRIORITY

Beautify and add custom designed components and blocks that you users customize, extend, and build on — not just utilities.

- [ ] Components — Accordion, Carousel, Calendar, File Upload, Comment, Chat Bubble, Code Block, etc.
- [ ] Blocks — Hero, Feature List, Pricing Table, Testimonial, Newsletter Signup, etc.
- [ ] Charts — Bar, Line, Pie, etc. (built with SVG + `vel-svg-*` utilities)
- [ ] Directions for building custom components (e.g. form controls, interactive widgets) with Velora utilities
- [ ] Other ideas? Open to suggestions for high-impact additions that show off Velora's capabilities and fill common UI needs.
---


## Phase 7 — npm Package

- [ ] Restructure as proper npm package (`veloracss`)
- [ ] `index.css` entry point for `import 'veloracss'`
- [ ] `package.json` exports map (full / min / components-only / utilities-only)
- [ ] Publish to npm
- [ ] CDN links via jsDelivr / unpkg
- [ ] CHANGELOG.md
- [ ] MIT LICENSE file

---

## Phase 8 — Customization System

- [ ] `velora.config.js` — override colors, spacing, breakpoints
- [ ] Build-time purging (strip unused classes for production)
- [ ] Themes — light / dark / custom brand

---

## Phase 9 — Developer Experience

- [ ] VS Code extension — autocomplete for `vel-` classes
- [ ] CLI — `npx veloracss init`, `velora build`, `velora watch`
- [ ] JetBrains plugin

---

## Phase 10 — Community & Launch

- [ ] Contributing guide
- [ ] Issue + PR templates
- [ ] Discord / community
- [ ] Product Hunt launch
- [ ] Social media presence (@veloracss)
