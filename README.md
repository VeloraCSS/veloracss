# VeloraCSS

A fully original utility-first CSS framework with rich components and zero dependencies on Tailwind, Bootstrap, or Bulma.

---

## What is VeloraCSS?

VeloraCSS gives you a low-level set of composable utility classes and production-ready components that let you build any design directly in your HTML — no configuration required to get started, and fully customizable when you need it.

Every class, custom property, and token is prefixed with `vel-` / `--vel-` to keep your codebase clean and collision-free.

---

## Features

- **Utility-first** — hundreds of single-purpose classes covering layout, spacing, typography, color, flexbox, grid, and more
- **Rich components** — `vel-btn`, `vel-card`, `vel-badge`, `vel-alert`, `vel-navbar`, `vel-input`, `vel-spinner`, `vel-progress`, `vel-tabs`, `vel-table`, `vel-avatar`, `vel-tooltip` ship ready to use
- **Gradients & glows** — `vel-bg-gradient-aurora`, `vel-btn-glow-primary`, `vel-glow-sm`, and the full gradient token system
- **Animation utilities** — `vel-animate-fade-in`, `vel-animate-slide-up`, `vel-animate-pulse`, shimmer skeletons, and more
- **Design tokens** — consistent spacing scale, color palette, and typography via CSS custom properties (`--vel-color-primary`, `--vel-space-4`, etc.)
- **No build step required** — drop in the prebuilt `velora.css` and start writing classes
- **Zero dependencies** — no JavaScript runtime, no framework lock-in

---

## Getting Started

### CDN (quickest)

```html
<link rel="stylesheet" href="https://unpkg.com/veloracss/dist/velora.min.css">
```

### npm

```bash
npm install veloracss
```

```js
import 'veloracss/dist/velora.css'
```

---

## Basic Usage

```html
<!-- Button -->
<button class="vel-btn vel-btn-primary">Get Started</button>

<!-- Glow button -->
<button class="vel-btn vel-btn-primary vel-btn-glow-primary">Glow Button</button>

<!-- Card -->
<div class="vel-card">
  <div class="vel-card-header">Card Title</div>
  <div class="vel-card-body">Card content goes here.</div>
</div>

<!-- Glass card -->
<div class="vel-card vel-card-glass">
  <div class="vel-card-body">Glassmorphism card.</div>
</div>

<!-- Badge -->
<span class="vel-badge vel-badge-primary">New</span>

<!-- Alert -->
<div class="vel-alert vel-alert-success">Changes saved successfully.</div>

<!-- Flex layout -->
<div class="vel-flex vel-items-center vel-gap-4 vel-p-6">
  <span class="vel-text-lg vel-font-bold vel-text-primary">VeloraCSS</span>
</div>

<!-- Gradient background -->
<div class="vel-bg-gradient-aurora vel-p-8 vel-rounded-xl">
  Aurora gradient
</div>
```

---

## Live Demo & Playground

**Next.js demo:** [https://velorax.github.io/veloracss](https://velorax.github.io/veloracss)

**Docs:** [https://velorax.github.io/veloracss/docs](https://velorax.github.io/veloracss/docs)

**Playground:** [https://velorax.github.io/veloracss/playground](https://velorax.github.io/veloracss/playground)

Write HTML using `vel-*` classes and see the result instantly. Load built-in examples, toggle between device sizes, and share your work via URL.

---

## Project Structure

```
src/
  tokens.css          # CSS custom properties (--vel-*)
  reset.css           # Modern CSS reset
  utilities/          # All utility classes (vel- prefix)
    layout.css
    flexbox.css
    grid.css
    spacing.css
    sizing.css
    typography.css
    colors.css
    borders.css
    effects.css
    gradients.css
    animations.css
  components/         # Component classes
    button.css
    card.css
    badge.css
    alert.css
    input.css
    navbar.css
    progress.css
    spinner.css
    table.css
    tabs.css
    avatar.css
    tooltip.css
  velora.css          # @import entry point
dist/
  velora.css          # Full build
  velora.min.css      # Minified build
playground/           # Live demo app (Vite + React + Monaco)
nextjs-demo/          # Next.js App Router demo + docs site
build.mjs             # PostCSS build script
```

---

## Building from Source

```bash
npm install
npm run build
```

This runs PostCSS through `build.mjs`, which processes `src/velora.css` via `postcss-import` → `autoprefixer` → `cssnano` and writes `dist/velora.css` and `dist/velora.min.css`.

### Running the Playground

```bash
cd playground
npm install
npm run dev
```

### Running the Next.js Demo & Docs

```bash
cd nextjs-demo
npm install
npm run dev
```

---

## Naming Conventions

| Type | Pattern | Example |
|---|---|---|
| Utility class | `vel-{property}-{value}` | `vel-text-lg`, `vel-p-4`, `vel-flex` |
| Component class | `vel-{component}` | `vel-btn`, `vel-card`, `vel-badge` |
| CSS custom property | `--vel-{token}` | `--vel-color-primary`, `--vel-space-4` |

---

## Customization

Override any design token at the `:root` level in your own CSS:

```css
:root {
  --vel-color-primary: #7c5cfc;
  --vel-radius: 0.75rem;
  --vel-font-sans: 'Inter', system-ui, sans-serif;
}
```

---

## License

MIT — free to use in personal and commercial projects.
