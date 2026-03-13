<script>
  import { page } from '$app/state';
  import { siteNavigation } from '$lib/content.js';

  export let footerCopy = 'Sharper default geometry, frozen 0.1 surface, and public docs now started.';

  const githubHref = 'https://github.com/VeloraX/veloracss';
  const footerLinks = siteNavigation.filter((item) => item.href !== '/');

  function isCurrent(href) {
    return page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
  }
</script>

<footer class="site-footer">
  <div class="site-footer-chrome">
    <div class="site-footer-brand">
      <div class="docs-brand-cluster">
        <a class="docs-brand-link" href="/" aria-label="VeloraCSS home">
          <img class="docs-brand-lockup site-footer-lockup" src="/brand/velora_text_and_logo.png" alt="VeloraCSS" />
        </a>
        <span class="docs-version">v0.1</span>
      </div>
      <p class="site-footer-copy">{footerCopy}</p>
    </div>

    <nav class="docs-header-nav site-footer-nav" aria-label="Footer">
      {#each footerLinks as link}
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
</footer>