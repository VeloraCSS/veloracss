<script>
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { docsCards } from './content.js';

  export let title = 'VeloraCSS';
  export let footerCopy = 'Sharper default geometry, frozen 0.1 surface, and public docs now started.';
  export let shellVariant = 'default';
  export let showFooter = true;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class:site-body-docs={shellVariant === 'docs'} class="site-body site-root">
  <SiteHeader />

  <div class:site-shell-docs={shellVariant === 'docs'} class="site-shell">
    <div class:site-frame-docs={shellVariant === 'docs'} class="site-frame vel-shell vel-stack-lg">
      <main class="site-layout-main vel-stack-lg">
        <slot />
      </main>

      {#if showFooter}
        <footer class="site-footer">
          <div class="site-footer-panel">
            <div class="vel-stack-xs">
              <img class="site-footer-lockup" src="/brand/velora_text_and_logo.png" alt="VeloraCSS" />
              <p class="vel-body vel-text-muted">{footerCopy}</p>
            </div>
            <div class="site-link-row">
              {#each docsCards as card}
                <a class="vel-button vel-button-ghost" href={card.href}>{card.eyebrow}</a>
              {/each}
            </div>
          </div>
        </footer>
      {/if}
    </div>
  </div>
</div>