<script>
  import SiteShell from '$lib/SiteShell.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<SiteShell title="VeloraCSS Examples" footerCopy="The examples route now exercises real release, form, flow, and overlay patterns inside the Svelte app.">
  <PageHero
    current="Examples"
    eyebrow="Examples"
    title="Assembled screens built from the shipped starter set."
    description="These examples use the same public vel-* surface that ships in the package. They are meant to show composition, not one-off marketing markup."
  >
    <aside slot="aside" class="vel-card vel-stack-sm">
      <p class="vel-card-eyebrow">Included slices</p>
      <div class="site-chip-row">
        <span class="vel-chip vel-bg-elevated vel-border">Forms</span>
        <span class="vel-chip vel-bg-elevated vel-border">Feedback</span>
        <span class="vel-chip vel-bg-elevated vel-border">Navigation</span>
        <span class="vel-chip vel-bg-elevated vel-border">Flow</span>
        <span class="vel-chip vel-bg-elevated vel-border">Overlay</span>
      </div>
    </aside>
  </PageHero>

  <section class="site-section">
    <SectionHeader eyebrow="Example 1" title="Release dashboard" />
    <div class="site-example-surface vel-stack-md">
      <div class="vel-action-bar">
        <div class="vel-action-meta">
          <p class="vel-action-title">Velocity snapshot</p>
          <p class="vel-action-copy">Track the frozen API, package readiness, and docs progress without leaving the same design language.</p>
        </div>
        <div class="vel-button-group">
          <button class="vel-button vel-button-primary" type="button">Run release verify</button>
          <button class="vel-button vel-button-secondary" type="button">Open manifest</button>
        </div>
      </div>

      <div class="vel-grid-three">
        <article class="vel-card vel-stack-sm">
          <p class="vel-card-eyebrow">API</p>
          <p class="vel-headline">Frozen</p>
          <p class="vel-body vel-text-muted">Selector families and runtime hooks are backed by the build manifest.</p>
        </article>
        <article class="vel-card vel-stack-sm">
          <p class="vel-card-eyebrow">Package</p>
          <p class="vel-headline">Live</p>
          <p class="vel-body vel-text-muted">veloracss@0.1.1 is published and only the intended public files are shipped.</p>
        </article>
        <article class="vel-card vel-stack-sm">
          <p class="vel-card-eyebrow">Docs</p>
          <p class="vel-headline">Migrating</p>
          <p class="vel-body vel-text-muted">The public shell exists, and the Svelte route migration is now underway.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="site-section">
    <SectionHeader eyebrow="Example 2" title="Settings panel" />
    <div class="site-example-surface vel-grid-two">
      <article class="vel-card vel-stack-md">
        <div class="vel-stack-xs">
          <p class="vel-card-eyebrow">Settings</p>
          <h3 class="vel-title">Publish readiness</h3>
          <p class="vel-body vel-text-muted">Configure release contact, channel, and notes without stepping outside the starter components.</p>
        </div>

        <form class="vel-form vel-stack-md">
          <div class="vel-field">
            <label class="vel-label" for="package-owner">Maintainer</label>
            <input class="vel-input" id="package-owner" value="VeloraX" />
          </div>
          <div class="vel-grid-two">
            <div class="vel-field">
              <label class="vel-label" for="release-stream">Release stream</label>
              <select class="vel-select" id="release-stream">
                <option>Public 0.1</option>
                <option>Beta</option>
                <option>Internal</option>
              </select>
            </div>
            <div class="vel-field">
              <label class="vel-label" for="support-email">Support email</label>
              <input class="vel-input" id="support-email" value="team@velora.dev" />
            </div>
          </div>
          <div class="vel-field">
            <label class="vel-label" for="release-summary">Summary</label>
            <textarea class="vel-textarea" id="release-summary" rows="4">VeloraCSS now ships a frozen API surface, public examples, and a repeatable npm publish flow.</textarea>
          </div>
          <div class="vel-control-group">
            <button class="vel-button vel-button-primary" type="button">Save config</button>
            <button class="vel-button vel-button-ghost" type="button">Review manifest</button>
          </div>
        </form>
      </article>

      <article class="vel-card vel-stack-sm">
        <p class="vel-card-eyebrow">Feedback</p>
        <section class="vel-alert vel-alert-success">
          <p class="vel-alert-title">Published</p>
          <p class="vel-alert-copy">veloracss@0.1.1 is live and npm release verification is working end to end.</p>
        </section>
        <section class="vel-alert vel-alert-info">
          <p class="vel-alert-title">Org access</p>
          <p class="vel-alert-copy">The npm org package view is wired correctly through the developers team.</p>
        </section>
        <section class="vel-alert vel-alert-warning">
          <p class="vel-alert-title">Next</p>
          <p class="vel-alert-copy">The main repo-facing priority now is finishing the Svelte docs, examples, and proof migration.</p>
        </section>
      </article>
    </div>
  </section>

  <section class="site-section">
    <SectionHeader eyebrow="Example 3" title="Launch queue" />
    <div class="site-example-surface vel-grid-two">
      <article class="vel-card vel-stack-md">
        <div class="vel-stack-xs">
          <p class="vel-card-eyebrow">Flow</p>
          <h3 class="vel-title">Public launch checklist</h3>
        </div>
        <div class="vel-steps">
          <section class="vel-step is-complete">
            <div class="vel-step-marker">1</div>
            <div class="vel-step-body">
              <p class="vel-step-title">Utilities and components validated</p>
              <p class="vel-step-copy">The starter surface is proofed in forms, feedback, navigation, flow, overlay, and actions.</p>
            </div>
          </section>
          <section class="vel-step is-complete">
            <div class="vel-step-marker">2</div>
            <div class="vel-step-body">
              <p class="vel-step-title">API frozen and manifest generated</p>
              <p class="vel-step-copy">The public surface is documented and emitted during build.</p>
            </div>
          </section>
          <section class="vel-step is-current">
            <div class="vel-step-marker">3</div>
            <div class="vel-step-body">
              <p class="vel-step-title">Site migration in progress</p>
              <p class="vel-step-copy">The live package is out. Now the public docs, examples, and proof surfaces are being consolidated into the Svelte app.</p>
            </div>
          </section>
        </div>
      </article>

      <article class="vel-card vel-stack-md">
        <div class="vel-stack-xs">
          <p class="vel-card-eyebrow">Overlay</p>
          <h3 class="vel-title">Quick actions</h3>
        </div>
        <div class="vel-control-group">
          <div class="vel-dropdown">
            <button class="vel-button vel-button-secondary" type="button" data-vel-toggle="examples-menu" aria-expanded="false">Open queue menu</button>
            <div class="vel-dropdown-menu vel-stack-xs" id="examples-menu" hidden>
              <button class="vel-dropdown-item" type="button">Open docs<span class="vel-dropdown-hint">/docs</span></button>
              <button class="vel-dropdown-item" type="button">Read manifest<span class="vel-dropdown-hint">JSON</span></button>
              <button class="vel-dropdown-item" type="button">Review npm page<span class="vel-dropdown-hint">Live</span></button>
            </div>
          </div>
          <button class="vel-button vel-button-primary" type="button" data-vel-toggle="examples-toast" aria-expanded="false">Toggle status toast</button>
        </div>
      </article>
    </div>
  </section>

  <div class="vel-toast-stack" id="examples-toast" hidden>
    <section class="vel-toast vel-stack-xs">
      <p class="vel-toast-title">Examples ready</p>
      <p class="vel-toast-copy">These examples are built from the same public vel-* surface documented in the 0.1 API contract.</p>
    </section>
  </div>
</SiteShell>