<script>
  import { onMount } from 'svelte';

  import CopyButton from '$lib/components/CopyButton.svelte';

  export let lesson;
  export let headingLevel = 3;

  let codeWindowElement;
  let explainerStyle;

  const fallbackLesson = {
    eyebrow: 'Annotated example',
    title: 'Read the source line by line',
    copy: '',
    filename: 'example.html',
    language: 'TEXT',
    lines: []
  };

  $: resolvedLesson = lesson ?? fallbackLesson;
  $: lessonLines = resolvedLesson.lines ?? [];
  $: lessonCode = resolvedLesson.code ?? '';
  $: normalizedHeadingLevel = Math.max(1, Math.min(6, Number(headingLevel) || 3));
  $: headingTag = `h${normalizedHeadingLevel}`;

  function syncExplainerHeight(mediaQuery) {
    if (!codeWindowElement || !mediaQuery.matches) {
      explainerStyle = undefined;
      return;
    }

    const measuredHeight = Math.round(codeWindowElement.getBoundingClientRect().height);
    explainerStyle = measuredHeight > 0 ? `--site-lesson-explainer-max-height: ${measuredHeight}px;` : undefined;
  }

  onMount(() => {
    const mediaQuery = window.matchMedia('(min-width: 72rem)');
    const resizeObserver = new ResizeObserver(() => {
      syncExplainerHeight(mediaQuery);
    });

    const handleViewportChange = () => {
      syncExplainerHeight(mediaQuery);
    };

    if (codeWindowElement) {
      resizeObserver.observe(codeWindowElement);
    }

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleViewportChange);
    } else {
      mediaQuery.addListener(handleViewportChange);
    }

    syncExplainerHeight(mediaQuery);

    return () => {
      resizeObserver.disconnect();

      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', handleViewportChange);
      } else {
        mediaQuery.removeListener(handleViewportChange);
      }
    };
  });
</script>

<article class="site-lesson vel-stack-md">
  <div class="site-lesson-head vel-stack-xs">
    <p class="vel-card-eyebrow">{resolvedLesson.eyebrow}</p>
    <svelte:element this={headingTag} class="site-card-title site-lesson-title">{resolvedLesson.title}</svelte:element>
    {#if resolvedLesson.copy}
      <p class="site-card-copy">{@html resolvedLesson.copy}</p>
    {/if}
  </div>

  <div class="site-lesson-layout">
    <div bind:this={codeWindowElement} class="site-code-window site-lesson-window">
      <div class="site-code-window-bar">
        <div class="site-code-window-controls" aria-hidden="true">
          <span class="site-code-window-dot is-red"></span>
          <span class="site-code-window-dot is-yellow"></span>
          <span class="site-code-window-dot is-green"></span>
        </div>
        <p class="site-code-window-title">{resolvedLesson.filename}</p>
        <p class="site-code-window-language">{resolvedLesson.language}</p>
        {#if lessonCode}
          <CopyButton
            text={lessonCode}
            ariaLabel={`Copy ${resolvedLesson.filename}`}
            buttonClass="docs-copy-button docs-copy-button-code"
          />
        {/if}
      </div>

      <pre class="site-code-block"><code class="site-code-lines">{#each lessonLines as line, index}<span class:site-code-line-is-blank={!line.html} class="site-code-line"><span class="site-code-line-number">{index + 1}</span><span class="site-code-line-content">{#if line.html}{@html line.html}{:else}&nbsp;{/if}</span></span>{/each}</code></pre>
    </div>

    <ol class="site-lesson-explainer" style={explainerStyle}>
      {#each lessonLines as line, index}
        <li class="site-lesson-step vel-stack-xs">
          <div class="site-lesson-step-head">
            <span class="site-lesson-step-line">Line {index + 1}</span>
            <p class="site-lesson-step-title">{line.title}</p>
          </div>
          <p class="site-lesson-step-copy">{@html line.copy}</p>
        </li>
      {/each}
    </ol>
  </div>
</article>