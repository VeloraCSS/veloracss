<script>
  import { page } from '$app/state';
  import { siteNavigation } from '$lib/content.js';

  const docsSearchTarget = '/docs#install-package';
  const githubHref = 'https://github.com/VeloraX/veloracss';
  const headerLinks = siteNavigation.filter((item) => item.href !== '/');

  function isCurrent(href) {
    return page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
  }

  $: searchHref = page.url.pathname === '/docs' ? '#install-package' : docsSearchTarget;
</script>

<header class="docs-header">
  <div class="docs-header-inner">
    <div class="docs-brand-cluster">
      <a class="docs-brand-link" href="/" aria-label="VeloraCSS home">
        <img class="docs-brand-lockup" src="/brand/velora_text_and_logo.png" alt="VeloraCSS" />
      </a>
      <span class="docs-version">v0.1</span>
    </div>

    <nav class="docs-header-nav" aria-label="Primary">
      <a class="docs-search-control" href={searchHref}>
        <span>Search docs</span>
        <span class="docs-search-key">Ctrl K</span>
      </a>

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