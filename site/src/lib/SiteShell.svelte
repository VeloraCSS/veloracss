<script>
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';

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
        <SiteFooter {footerCopy} />
      {/if}
    </div>
  </div>
</div>