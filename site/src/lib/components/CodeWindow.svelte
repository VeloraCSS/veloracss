<script>
  export let title = 'example';
  export let language = 'TEXT';
  export let code = '';
  export let compact = false;
</script>

<div class:site-code-window-compact={compact} class="site-code-window">
  <div class="site-code-window-bar">
    <div class="site-code-window-controls" aria-hidden="true">
      <span class="site-code-window-dot is-red"></span>
      <span class="site-code-window-dot is-yellow"></span>
      <span class="site-code-window-dot is-green"></span>
    </div>
    <p class="site-code-window-title">{title}</p>
    <p class="site-code-window-language">{language}</p>
  </div>

  <pre class="site-code-block"><code>{@html code}</code></pre>
</div>