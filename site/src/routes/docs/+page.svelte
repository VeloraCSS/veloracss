<script>
  import SiteShell from '$lib/SiteShell.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import { familyCards } from '$lib/content.js';
  import {
    docsArtifacts,
    docsFirstPagePrinciples,
    docsFormGuidance,
    docsNavigationGuidance,
    docsOverlayGuidance,
    docsQuickStartSteps,
    docsReleaseCards,
    docsRules,
    docsRuntimeCallouts
  } from '$lib/docsContent.js';
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
      {#each docsRules as rule}
        <article class="site-doc-rule vel-stack-xs">
          <p class="site-card-title">{rule.title}</p>
          <p class="vel-body vel-text-muted">{@html rule.copy}</p>
        </article>
      {/each}
    </div>
  </section>

  <section class="site-section" id="quick-start">
    <SectionHeader eyebrow="Quick start" title="Get a real page on screen in three moves" />
    <div class="site-step-grid">
      {#each docsQuickStartSteps as step}
        <article class="site-step-card vel-stack-sm">
          <span class="site-step-number">{step.number}</span>
          <p class="site-card-title">{step.title}</p>
          <p class="site-card-copy">{step.copy}</p>
          {#if step.commands}
            <div class="site-artifact-stack">
              {#each step.commands as command}
                <div class="site-command">{command}</div>
              {/each}
            </div>
          {/if}
          {#if step.chips}
            <div class="site-chip-row">
              {#each step.chips as chip}
                <span class="site-code-chip">{chip}</span>
              {/each}
            </div>
          {/if}
        </article>
      {/each}
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
          {#each docsFirstPagePrinciples as principle}
            <li>{principle}</li>
          {/each}
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
        <p class="site-card-title">{docsFormGuidance.title}</p>
        <ul class="site-detail-list">
          {#each docsFormGuidance.items as item}
            <li>{@html item}</li>
          {/each}
        </ul>
        <div class="site-chip-row">
          {#each docsFormGuidance.chips as chip}
            <span class="site-code-chip">{chip}</span>
          {/each}
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
        <p class="site-card-title">{docsNavigationGuidance.title}</p>
        <ul class="site-detail-list">
          {#each docsNavigationGuidance.items as item}
            <li>{@html item}</li>
          {/each}
        </ul>
        <div class="site-chip-row">
          {#each docsNavigationGuidance.chips as chip}
            <span class="site-code-chip">{chip}</span>
          {/each}
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
        <p class="site-card-title">{docsOverlayGuidance.title}</p>
        <ul class="site-detail-list">
          {#each docsOverlayGuidance.items as item}
            <li>{item}</li>
          {/each}
        </ul>
        <div class="site-chip-row">
          {#each docsOverlayGuidance.chips as chip}
            <span class="site-code-chip">{chip}</span>
          {/each}
        </div>
      </article>
    </div>
  </section>

  <section class="site-section" id="runtime">
    <SectionHeader eyebrow="Runtime" title="When to use the helper layer" />
    <div class="site-callout-grid">
      {#each docsRuntimeCallouts as callout}
        <article class="site-callout vel-stack-sm">
          <p class="vel-card-eyebrow">{callout.eyebrow}</p>
          {#if callout.items}
            <ul class="site-detail-list">
              {#each callout.items as item}
                <li>{item}</li>
              {/each}
            </ul>
          {/if}
          {#if callout.code}
            <pre class="site-code-block">{@html callout.code}</pre>
          {/if}
        </article>
      {/each}
    </div>
  </section>

  <section class="site-section" id="artifacts">
    <SectionHeader eyebrow="Artifacts" title="Package outputs" />
    <div class="site-doc-grid">
      {#each docsArtifacts as artifact}
        <article class="vel-card vel-stack-sm">
          <p class="vel-card-eyebrow">{artifact.eyebrow}</p>
          <p class="site-card-title">{artifact.title}</p>
          <p class="site-card-copy">{artifact.copy}</p>
          <div class="site-artifact-stack">
            {#each artifact.commands as command}
              <div class="site-command">{command}</div>
            {/each}
          </div>
          {#if artifact.href}
            <a class="vel-button vel-button-secondary" href={artifact.href}>{artifact.hrefLabel}</a>
          {/if}
        </article>
      {/each}
    </div>
  </section>

  <section class="site-section" id="release">
    <SectionHeader eyebrow="Release" title="The package is live and the release path is repeatable" />
    <div class="site-doc-grid">
      {#each docsReleaseCards as card}
        <article class="vel-card vel-stack-sm">
          <p class="vel-card-eyebrow">{card.eyebrow}</p>
          {#if card.command}
            <div class="site-command">{card.command}</div>
          {/if}
          {#if card.title}
            <p class="site-card-title">{card.title}</p>
          {/if}
          <p class="vel-body vel-text-muted">{card.copy}</p>
          {#if card.href}
            <a class="vel-button vel-button-secondary" href={card.href}>{card.hrefLabel}</a>
          {/if}
        </article>
      {/each}
    </div>
  </section>
</SiteShell>