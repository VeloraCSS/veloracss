# VeloraCSS 1.0 Draft API Surface

This document no longer freezes the 0.1 surface. It defines the draft contract for the 1.0 replatform now underway.

## Public rules

- Public classes use the `vel-` prefix.
- Public design tokens use the `--vel-` prefix.
- Runtime hooks use explicit `data-vel-*` attributes.
- Tailwind-style chained variants are part of the public grammar. Example shape: `sm:hover:vel-bg-primary`.
- Variant order is currently `breakpoint -> theme -> state -> utility`.
- Current policy: structural layout and sizing families stay responsive-first, while semantic and interactive visual utilities emit chained responsive, dark, and state variants where those combinations are meaningful.
- Default geometry is sharp-to-moderate, not pill-heavy. Rounded pills remain opt-in.
- New public selectors should be generated or declared intentionally and appear in the build manifest.

## Compatibility direction

- Velora 1.0 is allowed to break the 0.1 selector contract.
- The target is prefix-swapped compatibility with Tailwind and Bootstrap concepts, not source-level compatibility.
- Utilities should keep familiar structural semantics where practical, while components remain Velora-owned implementations.

## Draft 1.0 grammar

- Utility classes: `vel-*`
- Variant prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`, `hover:`, `focus:`, `focus-visible:`, `dark:`
- Combined variant examples: `md:hover:vel-text-primary`, `dark:vel-bg-surface`, `lg:focus:vel-border-primary`
- Theme selectors: `.vel-theme-light`, `.vel-theme-dark`, `[data-vel-theme="light"]`, `[data-vel-theme="dark"]`

## Current 1.0 implementation families

Families already in progress during the replatform:

- Foundation tokens for breakpoints, containers, transitions, and explicit light and dark themes
- Generated layout, typography, border, effects, transforms, interactivity, SVG, and accessibility utilities with shared token backing
- Responsive and chained variant generation in the build pipeline, now audited across semantic and interactive utility families
- Existing 0.1 starter components and an expanded plugin runtime for disclosure, dropdown, collapse, modal, offcanvas, tabs, toast, and tooltip behavior

## Runtime direction

Current runtime hooks shipped during the transition:

- Legacy disclosure hooks: `data-vel-toggle`, `data-vel-open`, `data-vel-close`
- Plugin hooks: `data-vel-dropdown`, `data-vel-modal-open`, `data-vel-modal-close`, `data-vel-offcanvas-open`, `data-vel-offcanvas-close`, `data-vel-offcanvas-placement`, `data-vel-collapse`, `data-vel-tab`, `data-vel-toast`, `data-vel-toast-close`, `data-vel-tooltip`, `data-vel-tooltip-placement`

Legacy hooks remain supported while the runtime expands toward the rest of the Bootstrap-level interaction catalog.

## Manifest authority

The complete machine-readable selector list is generated into `dist/velora.manifest.json` during `npm run build`.

For release work, treat the manifest as the exact build output for the current public surface and treat this document as the human-readable draft contract.