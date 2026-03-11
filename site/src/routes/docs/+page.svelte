<script>
  import SiteShell from '$lib/SiteShell.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import { familyCards } from '$lib/content.js';
</script>

<SiteShell title="VeloraCSS Docs" footerCopy="The docs route now carries the practical install, usage, runtime, and release guidance for the live VeloraCSS package.">
  <PageHero
    current="Docs"
    eyebrow="Documentation"
    title="Install the package, learn the rules, and stay inside the shipped 0.1 surface."
    description="VeloraCSS ships as compiled CSS, optional runtime helpers, and a manifest-backed API contract. This route carries the public guidance without coupling the framework build to the site app."
  >
    <aside slot="aside" class="vel-card vel-stack-sm">
      <p class="vel-card-eyebrow">Install</p>
      <div class="site-command">npm install veloracss</div>
      <div class="site-command">import "veloracss/css";</div>
      <div class="site-command">import &#123; initVelora &#125; from "veloracss/js";</div>
    </aside>
  </PageHero>

  <section class="site-section" id="rules">
    <SectionHeader eyebrow="Rules" title="Public rules" />
    <div class="site-doc-grid">
      <article class="site-doc-rule vel-stack-xs">
        <p class="site-card-title">Prefixes are strict</p>
        <p class="vel-body vel-text-muted">Selectors use <span class="site-inline-code">vel-</span>, tokens use <span class="site-inline-code">--vel-</span>, and runtime hooks use explicit <span class="site-inline-code">data-vel-*</span> attributes.</p>
      </article>
      <article class="site-doc-rule vel-stack-xs">
        <p class="site-card-title">Geometry stays sharper</p>
        <p class="vel-body vel-text-muted">Pill-heavy chrome is not the default. Rounded pills are opt-in rather than the baseline framework look.</p>
      </article>
      <article class="site-doc-rule vel-stack-xs">
        <p class="site-card-title">The manifest is authority</p>
        <p class="vel-body vel-text-muted">The full public selector and token surface is generated into <span class="site-inline-code">dist/velora.manifest.json</span> during build.</p>
      </article>
    </div>
  </section>

  <section class="site-section" id="quick-start">
    <SectionHeader eyebrow="Quick start" title="Get a real page on screen in three moves" />
    <div class="site-step-grid">
      <article class="site-step-card vel-stack-sm">
        <span class="site-step-number">1</span>
        <p class="site-card-title">Install the package</p>
        <p class="site-card-copy">Bring in the compiled CSS first. Add the runtime only if you need overlays or simple open and close behavior.</p>
        <div class="site-artifact-stack">
          <div class="site-command">npm install veloracss</div>
          <div class="site-command">import "veloracss/css";</div>
        </div>
      </article>
      <article class="site-step-card vel-stack-sm">
        <span class="site-step-number">2</span>
        <p class="site-card-title">Start with layout, then add components</p>
        <p class="site-card-copy">Use the shell, stacks, grids, and readable widths to frame the page before dropping in cards, buttons, or forms.</p>
        <div class="site-chip-row">
          <span class="site-code-chip">vel-shell</span>
          <span class="site-code-chip">vel-stack-lg</span>
          <span class="site-code-chip">vel-grid-two</span>
          <span class="site-code-chip">vel-max-w-copy</span>
        </div>
      </article>
      <article class="site-step-card vel-stack-sm">
        <span class="site-step-number">3</span>
        <p class="site-card-title">Opt into runtime helpers only when needed</p>
        <p class="site-card-copy">Menus, modal shells, and toast stacks can stay declarative by using the shipped runtime hooks instead of custom glue code.</p>
        <div class="site-chip-row">
          <span class="site-code-chip">data-vel-toggle</span>
          <span class="site-code-chip">data-vel-open</span>
          <span class="site-code-chip">data-vel-close</span>
        </div>
      </article>
    </div>
  </section>

  <section class="site-section" id="first-page">
    <SectionHeader eyebrow="First page" title="A minimal Velora page should look like this" />
    <div class="vel-grid-two">
      <article class="vel-card vel-stack-sm">
        <p class="vel-card-eyebrow">Markup</p>
        <p class="site-card-title">Compose utilities and starters together</p>
        <pre class="site-code-block">&lt;main class="vel-shell vel-stack-lg"&gt;
  &lt;section class="vel-stack-sm vel-max-w-copy"&gt;
    &lt;p class="vel-eyebrow"&gt;Project&lt;/p&gt;
    &lt;h1 class="vel-display"&gt;Ship a sharper UI.&lt;/h1&gt;
    &lt;p class="vel-body-lg vel-text-muted"&gt;
      Start with layout and type, then add components where they help.
    &lt;/p&gt;
    &lt;div class="vel-cluster"&gt;
      &lt;a class="vel-button vel-button-primary" href="#"&gt;Primary action&lt;/a&gt;
      &lt;a class="vel-button vel-button-secondary" href="#"&gt;Secondary action&lt;/a&gt;
    &lt;/div&gt;
  &lt;/section&gt;

  &lt;section class="vel-grid-two"&gt;
    &lt;article class="vel-card vel-stack-sm"&gt;...&lt;/article&gt;
    &lt;article class="vel-card vel-stack-sm"&gt;...&lt;/article&gt;
  &lt;/section&gt;
&lt;/main&gt;</pre>
      </article>
      <article class="site-callout vel-stack-sm">
        <p class="vel-card-eyebrow">How to think about it</p>
        <p class="site-card-title">Velora is not utility soup</p>
        <ul class="site-detail-list">
          <li>Use layout primitives first so the page structure is obvious.</li>
          <li>Use typography roles to establish hierarchy before adding visual effects.</li>
          <li>Use starter components where they save time, not as mandatory wrappers around everything.</li>
          <li>Keep custom site chrome outside the framework API if it is product-specific.</li>
        </ul>
        <a class="vel-button vel-button-secondary" href="/examples">See assembled examples</a>
      </article>
    </div>
  </section>

  <section class="site-section" id="families">
    <SectionHeader eyebrow="Families" title="Stable 0.1 selector families" />
    <div class="site-feature-grid">
      {#each familyCards as card}
        <article class="vel-card vel-stack-sm">
          <p class="vel-card-eyebrow">{card.eyebrow}</p>
          <p class="site-card-title">{card.title}</p>
          <p class="site-card-copy">{card.copy}</p>
          <div class="site-chip-row">
            {#each card.chips as chip}
              <span class="site-code-chip">{chip}</span>
            {/each}
          </div>
          <p class="site-note">{card.note}</p>
        </article>
      {/each}
    </div>
  </section>

  <section class="site-section" id="forms-patterns">
    <SectionHeader eyebrow="Forms" title="Use forms for structured input, not decorative chrome" />
    <div class="vel-grid-two">
      <article class="site-preview-panel vel-stack-md">
        <div class="vel-stack-xs">
          <p class="vel-card-eyebrow">Preview</p>
          <p class="site-card-title">Account settings form</p>
        </div>
        <form class="vel-form vel-stack-md">
          <div class="vel-grid-two">
            <div class="vel-field">
              <label class="vel-label" for="docs-first-name">First name</label>
              <input class="vel-input" id="docs-first-name" placeholder="Avery" />
            </div>
            <div class="vel-field">
              <label class="vel-label" for="docs-team">Team</label>
              <select class="vel-select" id="docs-team">
                <option>Platform</option>
                <option>Design</option>
                <option>Ops</option>
              </select>
            </div>
          </div>
          <div class="vel-field">
            <label class="vel-label" for="docs-summary">Profile summary</label>
            <textarea class="vel-textarea" id="docs-summary" rows="4">Building the first public release surface for VeloraCSS.</textarea>
            <p class="vel-help">Keep helper copy short and specific to the user action.</p>
          </div>
          <label class="vel-check">
            <input class="vel-check-input" type="checkbox" checked />
            <span class="vel-check-copy">Email me when release verification succeeds.</span>
          </label>
          <div class="vel-control-group">
            <button class="vel-button vel-button-primary" type="button">Save changes</button>
            <button class="vel-button vel-button-ghost" type="button">Cancel</button>
          </div>
        </form>
      </article>
      <article class="vel-card vel-stack-sm">
        <p class="vel-card-eyebrow">Guidance</p>
        <p class="site-card-title">What a good Velora form should do</p>
        <ul class="site-detail-list">
          <li>Group related fields with layout helpers before adding visual separators.</li>
          <li>Use helper text only when it reduces ambiguity or prevents mistakes.</li>
          <li>Keep validation tone direct by pairing <span class="site-inline-code">vel-input-danger</span> with matching help copy.</li>
          <li>Use <span class="site-inline-code">vel-control-group</span> for action rows instead of hand-rolled spacing.</li>
        </ul>
        <div class="site-chip-row">
          <span class="site-code-chip">vel-form</span>
          <span class="site-code-chip">vel-field</span>
          <span class="site-code-chip">vel-input</span>
          <span class="site-code-chip">vel-select</span>
          <span class="site-code-chip">vel-help</span>
        </div>
      </article>
    </div>
  </section>

  <section class="site-section" id="navigation-patterns">
    <SectionHeader eyebrow="Navigation" title="Build orientation first, then movement" />
    <div class="vel-grid-two">
      <article class="site-preview-panel vel-stack-md">
        <div class="vel-stack-xs">
          <p class="vel-card-eyebrow">Preview</p>
          <p class="site-card-title">Docs shell navigation</p>
        </div>
        <nav class="vel-navbar" aria-label="Navigation preview">
          <a class="vel-navbar-brand" href="#navigation-patterns">
            <span class="vel-navbar-mark">V</span>
            <span>VeloraCSS</span>
          </a>
          <div class="vel-navbar-nav">
            <a class="vel-navbar-link" href="#forms-patterns">Forms</a>
            <a class="vel-navbar-link" href="#navigation-patterns" aria-current="page">Navigation</a>
            <a class="vel-navbar-link" href="#overlay-patterns">Overlay</a>
          </div>
        </nav>
        <div class="vel-breadcrumb" aria-label="Breadcrumb preview">
          <a class="vel-breadcrumb-link" href="/">Home</a>
          <span class="vel-breadcrumb-separator">/</span>
          <a class="vel-breadcrumb-link" href="/docs">Docs</a>
          <span class="vel-breadcrumb-separator">/</span>
          <span class="vel-breadcrumb-current">Navigation</span>
        </div>
        <div class="vel-tabs">
          <div class="vel-tab-list" role="tablist" aria-label="Navigation preview tabs">
            <button class="vel-tab is-active" type="button" role="tab" aria-selected="true">Overview</button>
            <button class="vel-tab" type="button" role="tab" aria-selected="false">Patterns</button>
            <button class="vel-tab" type="button" role="tab" aria-selected="false">Tokens</button>
          </div>
        </div>
        <div class="vel-pagination" aria-label="Pagination preview">
          <a class="vel-page-link" href="#families">Prev</a>
          <a class="vel-page-link" href="#quick-start">1</a>
          <a class="vel-page-link" href="#forms-patterns" aria-current="page">2</a>
          <a class="vel-page-link" href="#overlay-patterns">3</a>
          <a class="vel-page-link" href="#release">Next</a>
        </div>
      </article>
      <article class="vel-card vel-stack-sm">
        <p class="vel-card-eyebrow">Guidance</p>
        <p class="site-card-title">What each pattern is for</p>
        <ul class="site-detail-list">
          <li>Use <span class="site-inline-code">vel-navbar*</span> for the top-level shell and high-value routes.</li>
          <li>Use <span class="site-inline-code">vel-breadcrumb*</span> when the user needs location context inside deeper content.</li>
          <li>Use tabs for peer views, not for primary site architecture.</li>
          <li>Use pagination when users move through ordered sets rather than jumping between product areas.</li>
        </ul>
        <div class="site-chip-row">
          <span class="site-code-chip">vel-navbar*</span>
          <span class="site-code-chip">vel-breadcrumb*</span>
          <span class="site-code-chip">vel-tabs</span>
          <span class="site-code-chip">vel-pagination</span>
        </div>
      </article>
    </div>
  </section>

  <section class="site-section" id="overlay-patterns">
    <SectionHeader eyebrow="Actions and overlay" title="Keep interaction surfaces narrow and explicit" />
    <div class="vel-grid-two">
      <article class="site-preview-panel vel-stack-md">
        <div class="vel-stack-xs">
          <p class="vel-card-eyebrow">Preview</p>
          <p class="site-card-title">Toolbar, menu, and toast</p>
        </div>
        <div class="vel-action-bar">
          <div class="vel-action-meta">
            <p class="vel-action-title">Release controls</p>
            <p class="vel-action-copy">Keep common actions grouped and visible.</p>
          </div>
          <div class="site-preview-toolbar">
            <button class="vel-icon-button" type="button" aria-label="Filter preview">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M7 12h10M10 17h4" /></svg>
            </button>
            <button class="vel-icon-button" type="button" aria-label="Search preview">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="5.5" /><path d="m16 16 4 4" /></svg>
            </button>
          </div>
        </div>
        <div class="vel-dropdown">
          <button class="vel-button vel-button-secondary" type="button" data-vel-toggle="docs-menu" aria-expanded="false">Open menu</button>
          <div class="vel-dropdown-menu vel-stack-xs" id="docs-menu" hidden>
            <button class="vel-dropdown-item" type="button">Open docs<span class="vel-dropdown-hint">/docs</span></button>
            <button class="vel-dropdown-item" type="button">View manifest<span class="vel-dropdown-hint">JSON</span></button>
          </div>
        </div>
        <div class="site-preview-toast vel-toast-stack" id="docs-toast">
          <section class="vel-toast vel-stack-xs">
            <p class="vel-toast-title">Verification passed</p>
            <p class="vel-toast-copy">Use toast feedback for lightweight status, not for critical blocking actions.</p>
          </section>
        </div>
      </article>
      <article class="vel-card vel-stack-sm">
        <p class="vel-card-eyebrow">Guidance</p>
        <p class="site-card-title">Where the helper layer should stop</p>
        <ul class="site-detail-list">
          <li>Use action bars for clustered task controls and dense page tools.</li>
          <li>Use dropdowns for short action lists, not deep navigation trees.</li>
          <li>Use toasts for non-blocking confirmation or status changes.</li>
          <li>Reach for your app layer when interaction needs outside-click logic, viewport-aware positioning, or complex state.</li>
        </ul>
        <div class="site-chip-row">
          <span class="site-code-chip">vel-action-bar</span>
          <span class="site-code-chip">vel-icon-button</span>
          <span class="site-code-chip">vel-dropdown*</span>
          <span class="site-code-chip">vel-toast*</span>
        </div>
      </article>
    </div>
  </section>

  <section class="site-section" id="runtime">
    <SectionHeader eyebrow="Runtime" title="When to use the helper layer" />
    <div class="site-callout-grid">
      <article class="site-callout vel-stack-sm">
        <p class="vel-card-eyebrow">Use it for</p>
        <ul class="site-detail-list">
          <li>Opening and closing dropdown menus.</li>
          <li>Showing and dismissing modal shells.</li>
          <li>Toggling toast stacks or lightweight status surfaces.</li>
        </ul>
      </article>
      <article class="site-callout vel-stack-sm">
        <p class="vel-card-eyebrow">Do not use it for</p>
        <ul class="site-detail-list">
          <li>Complex application state or data fetching.</li>
          <li>Viewport-aware positioning logic beyond the shipped basics.</li>
          <li>Rebuilding component behavior that should live in your app layer.</li>
        </ul>
      </article>
      <article class="site-callout vel-stack-sm">
        <p class="vel-card-eyebrow">Import</p>
        <pre class="site-code-block">import &#123; initVelora &#125; from "veloracss/js";

initVelora();</pre>
      </article>
    </div>
  </section>

  <section class="site-section" id="artifacts">
    <SectionHeader eyebrow="Artifacts" title="Package outputs" />
    <div class="site-doc-grid">
      <article class="vel-card vel-stack-sm">
        <p class="vel-card-eyebrow">CSS</p>
        <p class="site-card-title">Stylesheet bundles</p>
        <p class="site-card-copy">Ship the readable bundle for development and the minified bundle for distribution.</p>
        <div class="site-artifact-stack">
          <div class="site-command">dist/velora.css</div>
          <div class="site-command">dist/velora.min.css</div>
        </div>
      </article>
      <article class="vel-card vel-stack-sm">
        <p class="vel-card-eyebrow">Runtime</p>
        <p class="site-card-title">Optional helper runtime</p>
        <p class="site-card-copy">Use this only when you need the small progressive-enhancement layer for menus, modals, and toasts.</p>
        <div class="site-artifact-stack">
          <div class="site-command">dist/velora.js</div>
          <div class="site-command">dist/velora.min.js</div>
        </div>
      </article>
      <article class="vel-card vel-stack-sm">
        <p class="vel-card-eyebrow">Manifest</p>
        <p class="site-card-title">Machine-readable API contract</p>
        <p class="site-card-copy">This file is the exact shipped record of public classes, tokens, and runtime attributes.</p>
        <div class="site-artifact-stack">
          <div class="site-command">dist/velora.manifest.json</div>
        </div>
        <a class="vel-button vel-button-secondary" href="https://github.com/VeloraX/veloracss/blob/main/dist/velora.manifest.json">Open manifest</a>
      </article>
    </div>
  </section>

  <section class="site-section" id="release">
    <SectionHeader eyebrow="Release" title="The package is live and the release path is repeatable" />
    <div class="site-doc-grid">
      <article class="vel-card vel-stack-sm">
        <p class="vel-card-eyebrow">Verify</p>
        <div class="site-command">npm run release:verify</div>
        <p class="vel-body vel-text-muted">This runs the build, audits public docs references against the manifest, and performs a dry-run package check.</p>
      </article>
      <article class="vel-card vel-stack-sm">
        <p class="vel-card-eyebrow">Publish</p>
        <p class="site-card-title">veloracss@0.1.1 is live</p>
        <p class="vel-body vel-text-muted">The first public publish has already succeeded, and the GitHub workflow is wired for verified follow-up releases.</p>
        <a class="vel-button vel-button-secondary" href="https://www.npmjs.com/package/veloracss">Open npm package</a>
      </article>
      <article class="vel-card vel-stack-sm">
        <p class="vel-card-eyebrow">Access</p>
        <p class="site-card-title">Org package visibility is resolved</p>
        <p class="vel-body vel-text-muted">The veloracss developers team now has read-write access, and the npm org package view reflects the live package correctly.</p>
      </article>
    </div>
  </section>
</SiteShell>