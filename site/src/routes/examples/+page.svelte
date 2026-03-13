<script>
  import SiteShell from '$lib/SiteShell.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import {
    exampleIncludedSlices,
    releaseDashboardCards,
    settingsFeedbackAlerts,
    launchChecklistSteps,
    exampleMenuItems
  } from '$lib/examplesContent.js';
</script>

<SiteShell title="VeloraCSS Examples" footerCopy="The examples route now exercises real release, form, flow, and overlay patterns inside the Svelte app.">
  <div class="site-examples-page vel-stack-lg">
    <PageHero
      current="Examples"
      eyebrow="Examples"
      title="Assembled screens built from the shipped starter set."
      description="These examples use the same public vel-* surface that ships in the package. They are meant to show composition, not one-off marketing markup."
    >
      <aside slot="aside" class="vel-card vel-stack-sm">
        <p class="vel-card-eyebrow">Included slices</p>
        <div class="site-chip-row">
          {#each exampleIncludedSlices as slice}
            <span class="vel-chip vel-bg-elevated vel-border">{slice}</span>
          {/each}
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
          {#each releaseDashboardCards as card}
            <article class="vel-card vel-stack-sm">
              <p class="vel-card-eyebrow">{card.eyebrow}</p>
              <p class="vel-headline">{card.title}</p>
              <p class="vel-body vel-text-muted">{card.copy}</p>
            </article>
          {/each}
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
          {#each settingsFeedbackAlerts as alert}
            <section class={`vel-alert vel-alert-${alert.variant}`}>
              <p class="vel-alert-title">{alert.title}</p>
              <p class="vel-alert-copy">{alert.copy}</p>
            </section>
          {/each}
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
            {#each launchChecklistSteps as step}
              <section class={`vel-step is-${step.state}`}>
                <div class="vel-step-marker">{step.marker}</div>
                <div class="vel-step-body">
                  <p class="vel-step-title">{step.title}</p>
                  <p class="vel-step-copy">{step.copy}</p>
                </div>
              </section>
            {/each}
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
                {#each exampleMenuItems as item}
                  <button class="vel-dropdown-item" type="button">{item.label}<span class="vel-dropdown-hint">{item.hint}</span></button>
                {/each}
              </div>
            </div>
            <button class="vel-button vel-button-ghost" type="button" data-vel-offcanvas-open="examples-offcanvas" data-vel-offcanvas-placement="start" aria-expanded="false">Open side tray</button>
            <button class="vel-button vel-button-primary" type="button" data-vel-toggle="examples-toast" aria-expanded="false">Toggle status toast</button>
          </div>
          <div class="vel-toolbar">
            <button class="vel-icon-button" type="button" aria-label="Launch note" data-vel-tooltip="examples-tooltip-launch" data-vel-tooltip-placement="top">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16" /><path d="m5 11 7-7 7 7" /></svg>
            </button>
            <div class="vel-tooltip" id="examples-tooltip-launch" hidden>
              <div class="vel-tooltip-content">Pin the release note before opening the public launch checklist.</div>
            </div>
            <button class="vel-icon-button" type="button" aria-label="Quality gate" data-vel-tooltip="examples-tooltip-quality" data-vel-tooltip-placement="bottom">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5 9.5 17 19 7.5" /></svg>
            </button>
            <div class="vel-tooltip" id="examples-tooltip-quality" hidden>
              <div class="vel-tooltip-content">Keep release verification green before changing the framework surface.</div>
            </div>
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

    <div class="vel-offcanvas vel-offcanvas-start" id="examples-offcanvas" hidden>
      <button class="vel-offcanvas-backdrop" type="button" data-vel-offcanvas-close aria-label="Close side tray"></button>

      <div class="vel-offcanvas-panel vel-stack-md" role="dialog" aria-modal="true" aria-labelledby="examples-offcanvas-title">
        <div class="vel-offcanvas-header">
          <div class="vel-stack-xs">
            <p class="vel-card-eyebrow">Offcanvas</p>
            <h2 class="vel-title" id="examples-offcanvas-title">Launch queue tray</h2>
          </div>

          <button class="vel-icon-button" type="button" data-vel-offcanvas-close aria-label="Close side tray">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18" /><path d="M18 6 6 18" /></svg>
          </button>
        </div>

        <div class="vel-offcanvas-body">
          <p class="vel-body vel-text-muted">This tray keeps the release queue, proof links, and status notes available without forcing the user into a blocking dialog.</p>

          <div class="vel-stack-sm">
            <a class="vel-button vel-button-secondary vel-justify-start" href="/proof">Open proof route</a>
            <a class="vel-button vel-button-ghost vel-justify-start" href="/docs#optional-runtime">Review runtime hooks</a>
          </div>
        </div>

        <div class="vel-offcanvas-actions">
          <button class="vel-button vel-button-ghost" type="button" data-vel-offcanvas-close>Close</button>
          <button class="vel-button vel-button-primary" type="button" data-vel-offcanvas-close>Keep working</button>
        </div>
      </div>
    </div>
  </div>
</SiteShell>