<script>
  import CopyButton from '$lib/components/CopyButton.svelte';

  export let command = '';
  export let ariaLabel = 'Copy command';
</script>

<div class="docs-copy-command">
  <div class="site-command">{command}</div>
  <CopyButton
    text={command}
    ariaLabel={ariaLabel}
    buttonClass="docs-copy-button docs-copy-button-command"
  />
</div>