<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { onMount } from 'svelte';

  import { docsSearchEntries } from '$lib/docsContent.js';
  import { siteNavigation } from '$lib/content.js';
  import { setThemePreference, themeOptions, themePreference } from '$lib/theme.js';

  const githubHref = 'https://github.com/VeloraX/veloracss';
  const defaultSearchResultCount = 6;
  const headerLinks = siteNavigation.filter((item) => item.href !== '/');

  let isSearchOpen = false;
  let searchQuery = '';
  let searchInput;

  function isCurrent(href) {
    return page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
  }

  function resolveSearchHref(href) {
    return href.startsWith('#') ? `/docs${href}` : href;
  }

  function isActiveSearchResult(href) {
    if (href.startsWith('#')) {
      return page.url.pathname === '/docs' && page.url.hash === href;
    }

    return page.url.pathname === href;
  }

  function focusSearchInput() {
    isSearchOpen = true;
    searchInput?.focus();
    searchInput?.select();
  }

  async function handleSearchResultSelect(href) {
    const nextHref = resolveSearchHref(href);

    searchQuery = '';
    isSearchOpen = false;
    searchInput?.blur();
    await goto(nextHref);
  }

  function handleSearchFocusOut(event) {
    const nextFocused = event.relatedTarget;

    if (!(nextFocused instanceof HTMLElement) || !event.currentTarget.contains(nextFocused)) {
      isSearchOpen = false;
    }
  }

  function handleSearchEscape(event) {
    if (event.key !== 'Escape') {
      return;
    }

    isSearchOpen = false;
    searchInput?.blur();
  }

  function handleSearchShortcut(event) {
    const pressedShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k';

    if (!pressedShortcut) {
      return;
    }

    event.preventDefault();
    focusSearchInput();
  }

  onMount(() => {
    window.addEventListener('keydown', handleSearchShortcut);

    return () => {
      window.removeEventListener('keydown', handleSearchShortcut);
    };
  });

  $: normalizedSearchQuery = searchQuery.trim().toLowerCase();
  $: filteredSearchEntries = normalizedSearchQuery
    ? docsSearchEntries.filter((entry) => {
        const haystack = [entry.label, entry.summary, ...(entry.keywords ?? [])].join(' ').toLowerCase();
        return haystack.includes(normalizedSearchQuery);
      })
    : docsSearchEntries.slice(0, defaultSearchResultCount);
  $: shouldShowSearchResults = isSearchOpen || normalizedSearchQuery.length > 0;
</script>

<header class="docs-header">
  <div class="docs-header-inner">
    <div class="docs-brand-cluster">
      <a class="docs-brand-link" href="/" aria-label="VeloraCSS home">
        <img class="docs-brand-lockup site-brand-lockup" src="/brand/velora_text_and_logo.png" alt="VeloraCSS" />
      </a>
      <span class="docs-version">v0.1</span>
    </div>

    <nav class="docs-header-nav" aria-label="Primary">
      <div class="docs-header-search" on:focusout={handleSearchFocusOut}>
        <label class="docs-header-search-control" for="docs-header-search-input">
          <input
            bind:this={searchInput}
            bind:value={searchQuery}
            class="docs-search-input docs-header-search-input"
            id="docs-header-search-input"
            type="search"
            placeholder="Search docs"
            autocomplete="off"
            spellcheck="false"
            on:focus={focusSearchInput}
            on:keydown={handleSearchEscape}
          />
          <span class="docs-search-key">Ctrl K</span>
        </label>

        {#if shouldShowSearchResults}
          <div class="docs-search-results docs-header-search-results" role="list" aria-label="Documentation search results">
            {#if filteredSearchEntries.length}
              {#each filteredSearchEntries as entry}
                <a
                  class:docs-search-result-active={isActiveSearchResult(entry.href)}
                  class="docs-search-result"
                  href={resolveSearchHref(entry.href)}
                  on:click|preventDefault={() => handleSearchResultSelect(entry.href)}
                >
                  <span class="docs-search-result-title">{entry.label}</span>
                  <span class="docs-search-result-copy">{entry.summary}</span>
                </a>
              {/each}
            {:else}
              <p class="docs-search-empty">No sections matched that search.</p>
            {/if}
          </div>
        {/if}
      </div>

      <div class="site-theme-toggle" role="group" aria-label="Theme preference">
        {#each themeOptions as option}
          <button
            type="button"
            class:site-theme-button-current={$themePreference === option.value}
            class="site-theme-button"
            aria-pressed={$themePreference === option.value}
            on:click={() => setThemePreference(option.value)}
          >
            {option.label}
          </button>
        {/each}
      </div>

      {#each headerLinks as link}
        <a
          class:docs-header-link-current={isCurrent(link.href)}
          class="docs-header-link"
          href={link.href}
          aria-current={isCurrent(link.href) ? 'page' : undefined}
        >
          {link.label}
        </a>
      {/each}

      <a class="docs-header-link" href={githubHref}>GitHub</a>
    </nav>
  </div>
</header>