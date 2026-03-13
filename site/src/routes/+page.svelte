<script>
  import { onDestroy } from 'svelte';
  import SiteShell from '$lib/SiteShell.svelte';
  import {
    homeCodeLines,
    homeCodeText,
    homePreviewCard,
    homeFeatureCards
  } from '$lib/homeContent.js';

  let copyLabel = 'Copy';
  let copyResetTimer;

  async function handleCopyCode() {
    try {
      await navigator.clipboard.writeText(homeCodeText);
      copyLabel = 'Copied';
    } catch {
      copyLabel = 'Failed';
    }

    clearTimeout(copyResetTimer);
    copyResetTimer = setTimeout(() => {
      copyLabel = 'Copy';
    }, 1600);
  }

  onDestroy(() => {
    clearTimeout(copyResetTimer);
  });
</script>

<SiteShell title="VeloraCSS">
  <section class="site-home-hero">
    <div class="site-home-hero-section">
      <p class="site-home-class-hint">vel-stack-md vel-grid-two vel-card vel-button vel-text-primary</p>
      <h1 class="site-home-display">Rapidly build modern interfaces without ever leaving your HTML.</h1>
      <p class="site-home-subtitle">Utility-first classes, starter components, and theme tokens that let you build polished UI directly in your markup.</p>
      <div class="site-home-hero-actions">
        <a class="vel-button vel-button-primary" href="/docs">Get started</a>
        <div class="site-home-install-cmd">npm install veloracss</div>
      </div>
    </div>

    <div class="site-home-demo">
      <div class="site-home-code">
        <div class="site-home-code-bar">
          <div class="site-home-code-dots">
            <span></span><span></span><span></span>
          </div>
          <button class="site-home-code-copy" type="button" on:click={handleCopyCode}>
            {copyLabel}
          </button>
        </div>
        <div class="site-home-code-lines">
          {#each homeCodeLines as line, i}
            <div class="site-home-code-line">
              <span class="site-home-code-num">{i + 1}</span>
              <span class="site-home-code-text">
                <span>{line.prefix}</span>
                {#if line.accent}
                  <span class="site-home-code-accent">{line.accent}</span>
                {/if}
                <span>{line.suffix}</span>
              </span>
            </div>
          {/each}
        </div>
      </div>

      <div class="site-home-preview-card">
        <article class={homePreviewCard.articleClass}>
          <img
            class={homePreviewCard.imageClass}
            src={homePreviewCard.imageSrc}
            alt={homePreviewCard.imageAlt}
          />
          <div class={homePreviewCard.bodyClass}>
            <span class={homePreviewCard.eyebrowClass}>{homePreviewCard.eyebrow}</span>
            <h3 class={homePreviewCard.titleClass}>{homePreviewCard.title}</h3>
            <p class={homePreviewCard.copyClass}>{homePreviewCard.copy}</p>
            <div class={homePreviewCard.metaClass}>
              <span class={homePreviewCard.metaItemClass}>{homePreviewCard.metaPrimary}</span>
              <span class={homePreviewCard.dotClass}>•</span>
              <span class={homePreviewCard.metaItemClass}>{homePreviewCard.metaSecondary}</span>
            </div>
            <span class={homePreviewCard.linkClass}>{homePreviewCard.link}</span>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="site-section site-home-features-section">
    <div class="site-home-feature-grid">
      {#each homeFeatureCards as card}
        <article class="site-home-feature">
          <p class="site-home-feature-title">{card.title}</p>
          <p class="site-home-feature-copy">{card.copy}</p>
        </article>
      {/each}
    </div>
  </section>
</SiteShell>