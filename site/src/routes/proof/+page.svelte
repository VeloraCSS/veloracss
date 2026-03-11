<script>
  import SiteShell from '$lib/SiteShell.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
</script>

<SiteShell title="VeloraCSS Proof" footerCopy="The proof route now exercises the framework inside the Svelte app instead of pointing back at a root-level placeholder.">
  <PageHero
    current="Proof"
    eyebrow="Proof"
    title="The validation harness now has a route-level home inside the Svelte app."
    description="This page keeps exercising forms, navigation, flow, actions, and overlays against the same shipped CSS and helper runtime that power the public package."
  >
    <div slot="actions" class="vel-cluster">
      <button class="vel-button vel-button-primary" type="button">Primary action</button>
      <button class="vel-button vel-button-secondary" type="button">Secondary action</button>
      <button class="vel-button vel-button-ghost" type="button" data-vel-toggle="proof-panel" aria-expanded="false">Toggle runtime panel</button>
    </div>

    <aside slot="aside" class="vel-card vel-stack-sm vel-shadow-2">
      <p class="vel-card-eyebrow">Snapshot</p>
      <div class="vel-row-between vel-flex-wrap">
        <div class="vel-stack-xs">
          <p class="vel-headline">0.1.1</p>
          <p class="vel-text-sm vel-text-muted">live package</p>
        </div>
        <div class="vel-stack-xs vel-text-center">
          <p class="vel-headline">3</p>
          <p class="vel-text-sm vel-text-muted">runtime hooks</p>
        </div>
        <div class="vel-stack-xs vel-text-center">
          <p class="vel-headline">1</p>
          <p class="vel-text-sm vel-text-muted">npm package live</p>
        </div>
      </div>
    </aside>
  </PageHero>

  <section class="site-section">
    <div class="vel-grid-three">
      <article class="vel-card vel-stack-sm vel-shadow-1">
        <p class="vel-card-eyebrow">Surfaces</p>
        <h2 class="vel-title">Token-led backgrounds and borders</h2>
        <div class="vel-row vel-flex-wrap">
          <span class="vel-chip vel-bg-primary vel-text-on-primary">Primary</span>
          <span class="vel-chip vel-bg-primary-soft vel-text-primary vel-border-primary">Soft</span>
          <span class="vel-chip vel-bg-elevated vel-border">Elevated</span>
        </div>
      </article>

      <article class="vel-card vel-stack-sm vel-shadow-1">
        <p class="vel-card-eyebrow">Layout</p>
        <h2 class="vel-title">Grid, rows, stacks, and auto-fit</h2>
        <div class="vel-grid-auto">
          <div class="vel-swatch vel-bg-soft vel-border vel-radius-md"></div>
          <div class="vel-swatch vel-bg-elevated vel-border vel-radius-md"></div>
          <div class="vel-swatch vel-bg-primary-soft vel-border-primary vel-radius-md"></div>
        </div>
      </article>

      <article class="vel-card vel-stack-sm vel-shadow-1">
        <p class="vel-card-eyebrow">Typography</p>
        <h2 class="vel-title">Roles, tone, and readable defaults</h2>
        <p class="vel-body vel-text-muted">The public grammar now has display, headline, title, body, small text, mono, and tone utilities.</p>
      </article>
    </div>
  </section>

  <section class="site-section">
    <div class="vel-grid-two">
      <article class="vel-card vel-stack-md">
        <p class="vel-card-eyebrow">Composition</p>
        <h2 class="vel-title">Utilities are ready to assemble components</h2>
        <div class="vel-grid-auto">
          <div class="vel-panel vel-stack-xs vel-shadow-1">
            <p class="vel-text-sm vel-text-primary vel-font-medium">Sizing</p>
            <p class="vel-body vel-text-muted">Width and readable max-width helpers are in place.</p>
          </div>
          <div class="vel-panel vel-stack-xs vel-shadow-1">
            <p class="vel-text-sm vel-text-primary vel-font-medium">Spacing</p>
            <p class="vel-body vel-text-muted">Padding, block rhythm, gaps, and top spacing utilities now exist.</p>
          </div>
          <div class="vel-panel vel-stack-xs vel-shadow-1">
            <p class="vel-text-sm vel-text-primary vel-font-medium">Effects</p>
            <p class="vel-body vel-text-muted">Shadows and ring primitives give the base visual depth.</p>
          </div>
          <div class="vel-panel vel-stack-xs vel-shadow-1">
            <p class="vel-text-sm vel-text-primary vel-font-medium">Navigation</p>
            <p class="vel-body vel-text-muted">Nav bars, tabs, breadcrumbs, and pagination now share the same grammar.</p>
          </div>
          <div class="vel-panel vel-stack-xs vel-shadow-1">
            <p class="vel-text-sm vel-text-primary vel-font-medium">Overlay</p>
            <p class="vel-body vel-text-muted">Menus, modals, and toasts inherit the same tighter corners and control rhythm.</p>
          </div>
        </div>
      </article>

      <article class="vel-card vel-stack-sm" id="proof-panel" hidden>
        <p class="vel-card-eyebrow">Runtime</p>
        <h2 class="vel-title">Optional helper layer stays narrow</h2>
        <p class="vel-body vel-text-muted">The JS layer is still limited to progressive enhancement. This toggle proves the pattern without forcing runtime dependence into the CSS core.</p>
        <div class="vel-panel vel-stack-xs vel-ring-primary">
          <p class="vel-text-sm vel-font-medium">Current helper</p>
          <p class="vel-body vel-text-muted">data-vel-toggle binds declarative panel toggles.</p>
          <p class="vel-text-sm vel-font-mono vel-text-primary">initVelora()</p>
        </div>
      </article>
    </div>
  </section>

  <section class="site-section" id="flow">
    <div class="vel-grid-two">
      <article class="vel-card vel-stack-md">
        <div class="vel-stack-xs">
          <p class="vel-card-eyebrow">Forms</p>
          <h2 class="vel-title">Starter controls on the new utility base</h2>
          <p class="vel-body vel-text-muted vel-max-w-copy">Inputs, selects, textareas, labels, helper text, validation tone, and grouped actions now sit on top of the restart baseline.</p>
        </div>

        <form class="vel-form vel-stack-md">
          <div class="vel-field">
            <label class="vel-label" for="proof-project-name">Project name</label>
            <input class="vel-input" id="proof-project-name" name="project-name" value="VeloraCSS" />
            <p class="vel-help">Public package name and framework identity.</p>
          </div>

          <div class="vel-grid-two">
            <div class="vel-field">
              <label class="vel-label" for="proof-release-channel">Release channel</label>
              <select class="vel-select" id="proof-release-channel" name="release-channel">
                <option>Public 0.1</option>
                <option>Internal beta</option>
                <option>Canary</option>
              </select>
              <p class="vel-help">Keep the shipped surface intentionally small.</p>
            </div>

            <div class="vel-field">
              <label class="vel-label" for="proof-owner-email">Owner email</label>
              <input class="vel-input" id="proof-owner-email" name="owner-email" value="team@velora.dev" />
              <p class="vel-help vel-help-success">Release contact is now wired.</p>
            </div>
          </div>

          <div class="vel-field">
            <label class="vel-label" for="proof-release-notes">Release notes</label>
            <textarea class="vel-textarea" id="proof-release-notes" name="release-notes" rows="5">The public package is live, npm org access is reconciled, and the Svelte site migration is underway.</textarea>
            <p class="vel-help vel-help-success">Control spacing and readable defaults are working.</p>
          </div>

          <label class="vel-check">
            <input class="vel-check-input" type="checkbox" checked />
            <span class="vel-check-copy">Ship optional runtime helpers only where CSS cannot cover the behavior.</span>
          </label>

          <div class="vel-control-group">
            <button class="vel-button vel-button-primary" type="button">Save slice</button>
            <button class="vel-button vel-button-secondary" type="button">Preview docs</button>
          </div>
        </form>
      </article>

      <article class="vel-card vel-stack-md">
        <div class="vel-stack-xs">
          <p class="vel-card-eyebrow">Feedback</p>
          <h2 class="vel-title">Semantic alerts for status and guidance</h2>
          <p class="vel-body vel-text-muted vel-max-w-copy">The feedback primitives stay lightweight and token-led: status bars, strong titles, and readable supporting text.</p>
        </div>

        <div class="vel-stack-sm">
          <section class="vel-alert vel-alert-info">
            <p class="vel-alert-title">Info</p>
            <p class="vel-alert-copy">The utility grammar is stable enough to support the site migration without changing the public API.</p>
          </section>

          <section class="vel-alert vel-alert-success">
            <p class="vel-alert-title">Success</p>
            <p class="vel-alert-copy">The package is live on npm and the org package view is reconciled.</p>
          </section>

          <section class="vel-alert vel-alert-warning">
            <p class="vel-alert-title">Warning</p>
            <p class="vel-alert-copy">The Svelte site still needs the remaining route-by-route content migration.</p>
          </section>

          <section class="vel-alert vel-alert-danger">
            <p class="vel-alert-title">Blocked</p>
            <p class="vel-alert-copy">Do not expand the public API casually while the proof and docs are being consolidated.</p>
          </section>
        </div>
      </article>
    </div>
  </section>

  <section class="site-section">
    <div class="vel-grid-two">
      <article class="vel-card vel-stack-md">
        <div class="vel-stack-xs">
          <p class="vel-card-eyebrow">Navigation</p>
          <h2 class="vel-title">Branding, movement, and orientation primitives</h2>
          <p class="vel-body vel-text-muted vel-max-w-copy">The first navigation set covers the common shell surfaces a public docs and examples site needs without forcing a JS-heavy runtime.</p>
        </div>

        <div class="vel-stack-md">
          <nav class="vel-navbar" aria-label="Primary">
            <a class="vel-navbar-brand" href="/">
              <span class="vel-navbar-mark">V</span>
              <span>VeloraCSS</span>
            </a>

            <div class="vel-navbar-nav">
              <a class="vel-navbar-link" href="/docs">Docs</a>
              <a class="vel-navbar-link" href="/docs#families">Components</a>
              <a class="vel-navbar-link" href="/examples" aria-current="page">Examples</a>
              <a class="vel-navbar-link" href="/docs#runtime">Themes</a>
            </div>

            <div class="vel-navbar-actions">
              <a class="vel-button vel-button-ghost" href="https://github.com/VeloraX/veloracss">GitHub</a>
              <a class="vel-button vel-button-primary" href="/docs">Install</a>
            </div>
          </nav>

          <div class="vel-breadcrumb" aria-label="Breadcrumb">
            <a class="vel-breadcrumb-link" href="/docs">Docs</a>
            <span class="vel-breadcrumb-separator">/</span>
            <a class="vel-breadcrumb-link" href="/docs#navigation-patterns">Patterns</a>
            <span class="vel-breadcrumb-separator">/</span>
            <span class="vel-breadcrumb-current">Navigation</span>
          </div>

          <div class="vel-tabs">
            <div class="vel-tab-list" role="tablist" aria-label="Navigation examples">
              <button class="vel-tab is-active" type="button" role="tab" aria-selected="true">Navbar</button>
              <button class="vel-tab" type="button" role="tab" aria-selected="false">Breadcrumb</button>
              <button class="vel-tab" type="button" role="tab" aria-selected="false">Pagination</button>
            </div>

            <div class="vel-tab-panel vel-stack-xs" role="tabpanel">
              <p class="vel-text-sm vel-text-primary vel-font-medium">Active slice</p>
              <p class="vel-body vel-text-muted">These components give the docs shell a consistent navigation baseline before richer app-layer interactions arrive.</p>
            </div>
          </div>

          <div class="vel-pagination" aria-label="Pagination">
            <a class="vel-page-link" href="/docs#navigation-patterns">Prev</a>
            <a class="vel-page-link" href="/proof">1</a>
            <a class="vel-page-link" href="/proof#flow" aria-current="page">2</a>
            <a class="vel-page-link" href="/proof#release-toast">3</a>
            <a class="vel-page-link" href="/examples">Next</a>
          </div>
        </div>
      </article>

      <article class="vel-card vel-stack-md">
        <div class="vel-stack-xs">
          <p class="vel-card-eyebrow">Flow</p>
          <h2 class="vel-title">Staged progress without a complex runtime</h2>
          <p class="vel-body vel-text-muted vel-max-w-copy">Flow primitives focus on clarity: where work started, what is active now, and what is already complete.</p>
        </div>

        <div class="vel-steps" aria-label="Release flow">
          <section class="vel-step is-complete">
            <div class="vel-step-marker">1</div>
            <div class="vel-step-body">
              <p class="vel-step-title">Utility base established</p>
              <p class="vel-step-copy">Layout, spacing, flex, surfaces, effects, sizing, and typography give the framework a reusable composition layer.</p>
              <div class="vel-step-meta">
                <span class="vel-chip vel-bg-elevated vel-border">Complete</span>
                <span class="vel-chip vel-bg-primary-soft vel-border-primary vel-text-primary">Core</span>
              </div>
            </div>
          </section>

          <section class="vel-step is-complete">
            <div class="vel-step-marker">2</div>
            <div class="vel-step-body">
              <p class="vel-step-title">Release path and npm access finished</p>
              <p class="vel-step-copy">The package is published, tagged, and wired into the npm org view.</p>
              <div class="vel-step-meta">
                <span class="vel-chip vel-bg-elevated vel-border">Complete</span>
                <span class="vel-chip vel-bg-primary-soft vel-border-primary vel-text-primary">Release</span>
              </div>
            </div>
          </section>

          <section class="vel-step is-current">
            <div class="vel-step-marker">3</div>
            <div class="vel-step-body">
              <p class="vel-step-title">Public site routes are being consolidated</p>
              <p class="vel-step-copy">Docs, examples, and proof are moving into the Svelte app without changing the package API.</p>
              <div class="vel-step-meta">
                <span class="vel-chip vel-bg-primary vel-text-on-primary">Current</span>
                <span class="vel-chip vel-bg-elevated vel-border">Migration</span>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  </section>

  <section class="site-section">
    <div class="vel-grid-two">
      <article class="vel-card vel-stack-md">
        <div class="vel-stack-xs">
          <p class="vel-card-eyebrow">Actions</p>
          <h2 class="vel-title">Sharpened controls for everyday tasks</h2>
          <p class="vel-body vel-text-muted vel-max-w-copy">Actions carry the same Velora standard as forms and buttons: tighter corners, cleaner icon placement, and less inflated chrome.</p>
        </div>

        <div class="vel-action-bar">
          <div class="vel-action-meta">
            <p class="vel-action-title">Release checkpoint</p>
            <p class="vel-action-copy">The package is out; the next disciplined move is finishing the route migration without expanding the public surface carelessly.</p>
          </div>

          <div class="vel-toolbar">
            <button class="vel-icon-button" type="button" aria-label="Filter">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M7 12h10M10 17h4" /></svg>
            </button>
            <button class="vel-icon-button" type="button" aria-label="Search">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="5.5" /><path d="m16 16 4 4" /></svg>
            </button>
            <button class="vel-icon-button" type="button" aria-label="Share">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 12v6h10v-6" /><path d="m12 5 4 4" /><path d="m12 5-4 4" /><path d="M12 5v11" /></svg>
            </button>
          </div>
        </div>

        <div class="vel-button-group">
          <button class="vel-button vel-button-primary" type="button">Run audit</button>
          <button class="vel-button vel-button-secondary" type="button">Create snapshot</button>
          <button class="vel-button vel-button-ghost" type="button">Queue publish</button>
        </div>
      </article>

      <article class="vel-card vel-stack-md">
        <div class="vel-stack-xs">
          <p class="vel-card-eyebrow">Overlay</p>
          <h2 class="vel-title">Menus, modal shells, and toast feedback</h2>
          <p class="vel-body vel-text-muted vel-max-w-copy">The helper layer covers the simple open and close interactions these surfaces need without turning the framework into a JS-first system.</p>
        </div>

        <div class="vel-stack-md">
          <div class="vel-dropdown">
            <button class="vel-button vel-button-secondary" type="button" data-vel-toggle="proof-menu" aria-expanded="false">Open menu</button>

            <div class="vel-dropdown-menu vel-stack-xs" id="proof-menu" hidden>
              <button class="vel-dropdown-item" type="button">Duplicate layout<span class="vel-dropdown-hint">Ctrl+D</span></button>
              <button class="vel-dropdown-item" type="button">Save preset<span class="vel-dropdown-hint">Ctrl+S</span></button>
              <button class="vel-dropdown-item" type="button">Export proof<span class="vel-dropdown-hint">JSON</span></button>
            </div>
          </div>

          <div class="vel-row vel-flex-wrap">
            <button class="vel-button vel-button-primary" type="button" data-vel-open="release-modal" aria-expanded="false">Launch modal</button>
            <button class="vel-button vel-button-ghost" type="button" data-vel-toggle="release-toast" aria-expanded="false">Toggle toast</button>
          </div>
        </div>
      </article>
    </div>
  </section>

  <div class="vel-modal" id="release-modal" hidden>
    <button class="vel-modal-backdrop" type="button" data-vel-close="release-modal" aria-label="Close dialog"></button>

    <div class="vel-modal-dialog vel-stack-md" role="dialog" aria-modal="true" aria-labelledby="release-modal-title">
      <div class="vel-modal-header">
        <div class="vel-stack-xs">
          <p class="vel-card-eyebrow">Modal</p>
          <h2 class="vel-title" id="release-modal-title">Prepare the next migration slice</h2>
        </div>

        <button class="vel-icon-button" type="button" data-vel-close="release-modal" aria-label="Close modal">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18" /><path d="M18 6 6 18" /></svg>
        </button>
      </div>

      <p class="vel-body vel-text-muted">The package and npm org wiring are done. The next disciplined move is finishing the route migration and keeping the docs tied to the shipped manifest.</p>

      <div class="vel-modal-actions">
        <button class="vel-button vel-button-ghost" type="button" data-vel-close="release-modal">Close</button>
        <button class="vel-button vel-button-primary" type="button" data-vel-close="release-modal">Continue</button>
      </div>
    </div>
  </div>

  <div class="vel-toast-stack" id="release-toast" hidden>
    <section class="vel-toast vel-stack-xs">
      <div class="vel-row-between">
        <p class="vel-toast-title">Proof route active</p>
        <button class="vel-icon-button" type="button" data-vel-close="release-toast" aria-label="Dismiss toast">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18" /><path d="M18 6 6 18" /></svg>
        </button>
      </div>
      <p class="vel-toast-copy">Dropdowns, modal shells, action bars, and tighter control geometry are now exercised inside the Svelte proof route.</p>
    </section>
  </div>
</SiteShell>