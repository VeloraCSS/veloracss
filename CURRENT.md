# CURRENT

VeloraCSS is now in a deliberate 1.0 replatform.

## Immediate target

Build a single framework that combines:

- Tailwind-style utility breadth and variant chaining
- Bootstrap-style component depth and runtime behavior
- Velora-native naming, tokens, and visual language

The product goal is feature and structure parity implemented as Velora-owned surface, not a literal source-level clone of Tailwind or Bootstrap.

## Active phase

Phase 10 is now the active implementation slice.

It focuses on the foundation needed for the full framework merge:

- lock the 1.0 public grammar and compatibility policy
- create a machine-readable coverage map for Tailwind 4.2 and Bootstrap 5.3 scope
- expand the token and theme system to support light and dark color modes
- replace one-off utility growth with a generated utility layer that can scale to full coverage
- keep the proof surface and package build working while the framework surface grows

## Current slice

- The repo still ships VeloraCSS `0.1.1`, but the public contract is being moved to a 1.0 draft surface
- The new authority file for framework scope is `framework-coverage.json`
- Generated utility families are being introduced into the build so responsive and chained variants do not require hand-authored CSS per selector
- Chained variant coverage is now explicit for semantic and interactive generated utilities, while structural layout families remain responsive-first by policy
- Theme tokens are being expanded so the framework can support explicit light and dark modes without abandoning the existing Velora visual direction
- Tooltip and offcanvas are now part of the delegated runtime layer and exercised in the site proof/examples surfaces
- The proof surface, docs app, and package build remain in place as validation layers while docs content is deferred

## Repo state

- Root package: builds the framework, proof surface, manifest, and release verification flow
- `site/`: SvelteKit docs app with home, docs, examples, and proof routes
- `tracker/`: Node 20 service scaffold for GitHub Projects <-> Discord sync work, now paused behind the framework replatform priority

## Next focus

- harden the expanded generated utility engine now that semantic and interactive utilities have audited chained variant coverage
- continue the runtime expansion from disclosure, dropdown, collapse, modal, offcanvas, tabs, toast, and tooltip into the remaining Bootstrap-level interaction plugins
- start rebuilding component coverage on top of the generated utility layer and delegated plugin runtime
- continue auditing build output and manifest claims against the actual shipped surface

## Upcoming queue

- next: extend the runtime from collapse, dropdown, modal, offcanvas, tabs, toast, and tooltip into popover, carousel, and scrollspy
- next after that: rebuild Bootstrap-scale component coverage on top of the generated utility and plugin layers
- later: move the tracker sync work forward again once the framework foundation is stable enough not to thrash the roadmap

## Product requirement

- Velora 1.0 must support Tailwind-style chained variants such as responsive and state prefixes
- Velora 1.0 must ship Bootstrap-level component coverage and interactive behavior
- Velora visual standards remain in force: sharper defaults, restrained shadowing, and token-led theming
- The concrete implementation target is tracked in `framework-coverage.json`
