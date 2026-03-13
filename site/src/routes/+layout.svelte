<script>
  import '../app.css';
  import { afterNavigate } from '$app/navigation';
  import { onMount } from 'svelte';

  import { bindSystemThemeListener, initializeThemePreference } from '$lib/theme.js';

  let initVelora;

  function bindVelora() {
    initVelora?.(document);
  }

  onMount(async () => {
    const disposeThemeListener = bindSystemThemeListener();

    initializeThemePreference();
    ({ initVelora } = await import('../../../dist/velora.js'));
    bindVelora();

    return () => {
      disposeThemeListener();
    };
  });

  afterNavigate(() => {
    bindVelora();
  });
</script>

<svelte:head>
  <link rel="icon" type="image/png" href="/brand/velora-sm-logo.png" />
  <link rel="apple-touch-icon" href="/brand/velora-sm-logo.png" />
</svelte:head>

<slot />