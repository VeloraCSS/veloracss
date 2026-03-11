<script>
  export let eyebrow = '';
  export let title = '';
</script>

<div class="site-section-head">
  <p class="vel-eyebrow">{eyebrow}</p>
  <h2 class="vel-headline">{title}</h2>
  <slot />
</div>