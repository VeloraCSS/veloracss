<script>
  export let kicker = '';
  export let current = '';
  export let eyebrow = '';
  export let title = '';
  export let description = '';
  export let titleClass = 'vel-headline';
</script>

<section class="site-hero">
  <div class="site-hero-copy">
    {#if kicker}
      <span class="site-kicker">{kicker}</span>
    {/if}

    {#if current}
      <div class="vel-breadcrumb" aria-label="Breadcrumb">
        <a class="vel-breadcrumb-link" href="/">Home</a>
        <span class="vel-breadcrumb-separator">/</span>
        <span class="vel-breadcrumb-current">{current}</span>
      </div>
    {/if}

    <div class="vel-stack-sm">
      <p class="vel-eyebrow">{eyebrow}</p>
      <h1 class={titleClass}>{title}</h1>
    </div>

    <p class="vel-body-lg vel-text-muted vel-max-w-copy">{description}</p>

    {#if $$slots.actions}
      <slot name="actions" />
    {/if}

    <slot />
  </div>

  {#if $$slots.aside}
    <slot name="aside" />
  {/if}
</section>