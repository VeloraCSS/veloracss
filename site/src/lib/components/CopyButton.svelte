<script>
  import { onDestroy } from 'svelte';

  export let text = '';
  export let buttonClass = 'docs-copy-button';
  export let ariaLabel = 'Copy text';
  export let idleLabel = 'Copy';
  export let successLabel = 'Copied';
  export let errorLabel = 'Failed';
  export let resetDelay = 1600;

  let label = idleLabel;
  let resetTimer;

  async function writeText(value) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return;
    }

    const fallback = document.createElement('textarea');
    fallback.value = value;
    fallback.setAttribute('readonly', '');
    fallback.style.position = 'absolute';
    fallback.style.left = '-9999px';
    document.body.appendChild(fallback);
    fallback.select();

    const success = document.execCommand('copy');
    document.body.removeChild(fallback);

    if (!success) {
      throw new Error('Copy failed');
    }
  }

  function resetLabelSoon() {
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      label = idleLabel;
    }, resetDelay);
  }

  async function handleCopy() {
    if (!text) {
      label = errorLabel;
      resetLabelSoon();
      return;
    }

    try {
      await writeText(text);
      label = successLabel;
    } catch {
      label = errorLabel;
    }

    resetLabelSoon();
  }

  $: if (label !== idleLabel && text === '') {
    label = idleLabel;
  }

  onDestroy(() => {
    clearTimeout(resetTimer);
  });
</script>

<button class={buttonClass} type="button" aria-label={ariaLabel} on:click={handleCopy}>
  {label}
</button>