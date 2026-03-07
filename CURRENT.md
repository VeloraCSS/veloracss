# VeloraCSS — Current Session State

> Read this file at the start of every session to get up to speed instantly.
> Then check TODO.md for the full roadmap.

---

## What VeloraCSS is
A fully original utility-first CSS framework — like Tailwind in scale, like Bootstrap/Bulma in component richness. Zero footprints from any other framework. Every class, variable, and config key uses the `vel` / `velora` brand.

- All utility classes: `vel-{property}-{value}` (e.g. `vel-flex`, `vel-p-4`, `vel-text-lg`)
- All component classes: `vel-{component}` (e.g. `vel-btn`, `vel-btn-primary`, `vel-card`)
- All CSS custom properties: `--vel-{token}` (e.g. `--vel-color-primary`, `--vel-space-4`)

---

## Current version: v0.3.0 (framework expansion — not yet deployed)

Built output: `dist/velora.css` — **443.9 KB** full / **363.9 KB** minified

---

## What was built (Phase 1 — COMPLETE)

### Framework (`src/` → `dist/velora.css`)
- `src/tokens.css` — full `--vel-*` design token system
- `src/reset.css` — modern CSS reset with dark body defaults
- Full utility coverage: layout, flexbox, grid, spacing, sizing, typography, colors, borders, effects, transitions, interactivity
- `vel-btn` component — all color variants, outline, ghost, link, xs/sm/lg/xl, block, icon
- `vel-card` component — default, flat, elevated, filled, primary, hover

### Playground (`cd playground && npm run dev` → http://localhost:5173)
- Vite + React + TypeScript + Monaco Editor
- Live iframe preview with device toggle (full/desktop/tablet/mobile)
- Examples dropdown, Copy HTML, Share via URL
- Docs + Next.js Demo links in header

### Next.js Demo (`cd nextjs-demo && npm run dev` → http://localhost:3000)
- App Router, static export configured for GitHub Pages
- Demo page with buttons, cards, badges, alerts, gradients, glows, colors, typography

---

## What was built (Phase 2 — COMPLETE)

### New color palette (Velora brand)
- Primary: Velora Violet `#7c5cfc`
- Success: Emerald `#0ecb81`
- Danger: Rose `#f0416c`
- Warning: Amber `#ff9d00`
- Info: Sky `#2ebde5`
- Full 50–950 ramps for each brand color

### New token system in `src/tokens.css`
- `--vel-gradient-*` — named gradient tokens (primary, aurora, ocean, sunset, success, danger, etc.)
- `--vel-glow-*` — colored box-shadow glow tokens
- `--vel-ring-*` — focus ring tokens
- Spring/bounce easing tokens
- `--vel-color-text` / `--vel-color-muted` — fixed naming collision

### New utilities
- `src/utilities/gradients.css` — `vel-bg-gradient-*`, directional gradient composer, text gradient utilities
- `src/utilities/animations.css` — 13 keyframes, animation classes, duration/delay modifiers, shimmer skeleton, transform utilities
- `src/utilities/effects.css` — glow utilities, ring utilities

### 10 new components (Phase 2)
- badge, alert, input, navbar, progress, spinner, table, tabs, avatar, tooltip

---

## What was built (Phase 3 — COMPLETE — this session)

### Bug fixes
- **Glow bug fixed**: Solid button variants no longer glow at rest; glow is hover-only
- **Keyframe deduplication**: Removed 6 duplicate `@keyframes` + 5 duplicate `.vel-animate-*` from `transitions.css`
- **Ring deduplication**: Removed ring classes from `effects.css`; consolidated in `borders.css` using `var(--vel-ring-*)` tokens; added missing `.vel-ring-info`

### Utility expansion (~5,979 `vel-` class definitions in dist)
- `src/utilities/layout.css` — full inset scale (all-sides, x, y, t/r/b/l, negative values) — ~155 new classes
- `src/utilities/spacing.css` — negative margins, scroll-margin, scroll-padding — ~89 new classes
- `src/utilities/effects.css` — contrast, saturate, hue-rotate, drop-shadow, backdrop-brightness/contrast/saturate/hue-rotate — ~62 new classes
- `src/utilities/divide.css` — NEW: divide-x/y widths, styles, colors (53 classes)
- `src/utilities/ring.css` — NEW: composable CSS-variable ring system (widths, colors, offsets) (48 classes)
- `src/utilities/svg.css` — NEW: fill, stroke, stroke-width utilities (49 classes)

### 10 new components (Phase 3)
- `src/components/modal.css` — modal backdrop, box, header/body/footer, sizes, animations
- `src/components/dropdown.css` — menu, items, dividers, headers
- `src/components/pagination.css` — prev/next, page numbers, sizes, disabled states
- `src/components/toast.css` — positioned notifications, color variants, dismiss
- `src/components/skeleton.css` — shimmer loading placeholders (text, avatar, card, button)
- `src/components/breadcrumb.css` — separator-based nav
- `src/components/menu.css` — vertical/horizontal menu with active, disabled, icons
- `src/components/steps.css` — step indicators (horizontal/vertical, completed/active states)
- `src/components/divider.css` — horizontal/vertical dividers with optional label
- `src/components/kbd.css` — keyboard key badges

---

## Live URLs (GitHub Pages)
- Demo: https://velorax.github.io/veloracss/
- Docs: https://velorax.github.io/veloracss/docs
- Playground: https://velorax.github.io/veloracss/playground

---

## npm Scripts
```bash
npm run build        # build velora.css → dist/
cd playground && npm run dev    # Vite playground (http://localhost:5173)
cd nextjs-demo && npm run dev   # Next.js demo + docs (http://localhost:3000)
cd nextjs-demo && npm run build # static export → nextjs-demo/out/
```

---

## Key files
```
src/velora.css              ← @import entry point (v0.3.0 — 35 imports)
src/tokens.css              ← all design tokens (brand colors, gradients, glows)
src/utilities/              ← 16 utility files
  layout.css, flexbox.css, grid.css, spacing.css, sizing.css
  typography.css, colors.css, borders.css, effects.css
  gradients.css, animations.css, transitions.css, interactivity.css
  divide.css, ring.css, svg.css
src/components/             ← 22 component files
  button, card, badge, alert, input, navbar, progress, spinner,
  table, tabs, avatar, tooltip, modal, dropdown, pagination, toast,
  skeleton, breadcrumb, menu, steps, divider, kbd
dist/velora.css             ← built output (443.9KB)
dist/velora.min.css         ← minified (363.9KB)
playground/src/App.tsx      ← playground UI
nextjs-demo/app/page.tsx    ← Next.js home/demo page
nextjs-demo/app/docs/       ← full docs site (64 pages)
docs/                       ← committed static output for GitHub Pages
TODO.md                     ← full roadmap
CURRENT.md                  ← this file
.claude/CLAUDE.md           ← project rules for Claude
```

---

## What's next (see TODO.md)
1. **Deploy** — build nextjs-demo + copy `out/` → `docs/` + commit + push for v0.3.0 on GitHub Pages
2. **Demo page update** — add the 10 new Phase 3 components to `nextjs-demo/app/page.tsx`
3. **More docs pages** — Backgrounds, Borders, Effects, Animations, Interactivity, all 22 Components
4. **Responsive variants** — `vel-sm:`, `vel-md:`, `vel-lg:` (not yet implemented — Phase 4)
5. **State variants** — `vel-hover:`, `vel-focus:`, `vel-active:` (not yet implemented — Phase 4)
6. **P3 color system** — expand neutral scale, add semantic alias tokens, build.mjs refactor
