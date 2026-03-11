<script>
  import SiteShell from '$lib/SiteShell.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import { docsCards } from '$lib/content.js';

  const slices = ['Tokens', 'Layout', 'Spacing', 'Typography', 'Forms', 'Feedback', 'Navigation', 'Flow', 'Overlay'];
</script>

<SiteShell title="VeloraCSS">
  <PageHero
    kicker="Velora 0.1 Surface"
    eyebrow="Framework"
    title="Sharper utilities. Polished starters. No bloated chrome."
    description="VeloraCSS combines utility density with starter components, token-led theming, and a tighter visual language. This Svelte site consumes the package the same way users would."
    titleClass="vel-display"
  >
    <div slot="actions" class="vel-cluster">
      <a class="vel-button vel-button-primary" href="/docs">Read the docs</a>
      <a class="vel-button vel-button-secondary" href="/examples">See examples</a>
      <a class="vel-button vel-button-ghost" href="/proof">Open proof</a>
    </div>
    <div class="site-command">npm install veloracss</div>

    <aside slot="aside" class="site-stat-grid">
      <article class="site-stat-card vel-stack-xs">
        <p class="vel-text-sm vel-text-primary vel-font-medium">Public API</p>
        <p class="vel-headline">0.1</p>
        <p class="vel-body vel-text-muted">Frozen through the manifest and human-readable API surface.</p>
      </article>
      <article class="site-stat-card vel-stack-xs">
        <p class="vel-text-sm vel-text-primary vel-font-medium">Runtime</p>
        <p class="vel-headline">3</p>
        <p class="vel-body vel-text-muted">Focused helper hooks for toggle, open, and close behavior.</p>
      </article>
      <article class="site-stat-card vel-stack-xs">
        <p class="vel-text-sm vel-text-primary vel-font-medium">Site stack</p>
        <p class="vel-headline">Svelte</p>
        <p class="vel-body vel-text-muted">A clean app layer on top of a framework-agnostic package.</p>
      </article>
    </aside>
  </PageHero>

  <section class="site-section">
    <SectionHeader eyebrow="Slices" title="What is already in the framework" />
    <div class="site-chip-row">
      {#each slices as slice}
        <span class="vel-chip vel-bg-elevated vel-border">{slice}</span>
      {/each}
    </div>
  </section>

  <section class="site-section">
    <SectionHeader eyebrow="Start" title="Pick the right next page" />
    <div class="site-doc-grid">
      {#each docsCards as card}
        <article class="vel-card site-doc-card vel-stack-sm">
          <p class="vel-card-eyebrow">{card.eyebrow}</p>
          <p class="site-card-title">{card.title}</p>
          <p class="vel-body vel-text-muted">{card.copy}</p>
          <a class="vel-button vel-button-secondary" href={card.href}>Open {card.eyebrow.toLowerCase()}</a>
        </article>
      {/each}
    </div>
  </section>
</SiteShell>