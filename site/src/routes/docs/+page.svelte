<script>
  import { onMount } from 'svelte';

  import CodeWindow from '$lib/components/CodeWindow.svelte';
  import CopyableCommand from '$lib/components/CopyableCommand.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { docsCards, familyCards } from '$lib/content.js';
  import {
    docsArtifacts,
    docsCodeLessons,
    docsFirstPagePrinciples,
    docsOnThisPage,
    docsReleaseCards,
    docsRules,
    docsRuntimeCallouts,
    docsSidebarGroups
  } from '$lib/docsContent.js';

  const githubHref = 'https://github.com/VeloraX/veloracss';
  const docsFooterCopy = 'Setup, contract rules, examples, and proof now live in a docs shell that behaves more like a framework manual than a marketing page.';
  const docsRouteCards = docsCards.filter((card) => card.href !== '/docs');
  const docsSetupSections = [
    {
      id: 'install-package',
      step: '01',
      title: docsCodeLessons.installPackage.title,
      copy: docsCodeLessons.installPackage.copy,
      summary: 'Add the published package first so the docs and the shipped surface stay aligned.',
      note: 'Start from npm. Do not copy generated files into your app or build docs against an unpublished local snapshot.',
      points: [
        'Install the same package your users will actually consume.',
        'Keep the framework surface authoritative instead of forking its built output into product code.',
        'Treat this as the boundary between the package and your application, not as a copy-paste starter kit.'
      ],
      commands: ['npm install veloracss'],
      codeWindow: docsCodeLessons.installPackage
    },
    {
      id: 'import-styles',
      step: '02',
      title: docsCodeLessons.importStyles.title,
      copy: docsCodeLessons.importStyles.copy,
      summary: 'Import the shipped stylesheet from the package entry instead of rebuilding framework styles locally.',
      note: 'VeloraCSS is CSS-first. Bring in the compiled stylesheet from the package entry and let your app code stay focused on product-specific work.',
      points: [
        'Import the framework once in your application entry file.',
        'Avoid mirroring tokens or selectors into app CSS just to recreate what the package already ships.',
        'Move to runtime only if the page truly needs the shipped interactive helpers.'
      ],
      commands: ['import "veloracss/css";'],
      codeWindow: docsCodeLessons.importStyles
    },
    {
      id: 'optional-runtime',
      step: '03',
      title: docsCodeLessons.runtime.title,
      copy: docsCodeLessons.runtime.copy,
      summary: 'Keep JavaScript optional and limit it to the small helper surface Velora actually publishes.',
      note: 'Most pages should ship with CSS only. Add the runtime when the page needs dropdowns, modal shells, or toast helpers, and keep it explicit.',
      points: [
        'Import and initialize the runtime once.',
        'Drive behavior through the published data-vel hooks instead of custom glue code by default.',
        'Stop at the helper surface when interaction starts looking like application state.'
      ],
      commands: ['import { initVelora } from "veloracss/js";', 'initVelora();'],
      callouts: docsRuntimeCallouts,
      codeWindow: docsCodeLessons.runtime
    },
    {
      id: 'first-page',
      step: '04',
      title: docsCodeLessons.firstPage.title,
      copy: docsCodeLessons.firstPage.copy,
      summary: 'Build the first page from layout and type first, then layer in actions and support content.',
      note: 'Use the smallest page that still proves the framework feels right. Start with structure, establish readable type, then add actions and supporting content.',
      points: docsFirstPagePrinciples,
      codeWindow: docsCodeLessons.firstPage
    }
  ];
  const docsGuideLinks = docsSetupSections.map(({ id, step, title, summary }) => ({
    href: `#${id}`,
    step,
    title,
    summary
  }));

  let activeSectionId = 'overview';

  function getSectionId(href) {
    return href.startsWith('#') ? href.slice(1) : '';
  }

  function isActiveSectionLink(href) {
    const sectionId = getSectionId(href);
    return sectionId !== '' && sectionId === activeSectionId;
  }

  function setActiveSectionFromHash() {
    const hash = window.location.hash.replace('#', '');

    if (hash && docsOnThisPage.some((item) => item.href === `#${hash}`)) {
      activeSectionId = hash;
      return;
    }

    if (!hash) {
      activeSectionId = 'overview';
    }
  }

  function handleSectionLinkClick(href) {
    const sectionId = getSectionId(href);

    if (sectionId) {
      activeSectionId = sectionId;
    }
  }

  onMount(() => {
    const observedSections = docsOnThisPage
      .map((item) => document.getElementById(getSectionId(item.href)))
      .filter(Boolean);

    const sectionVisibility = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          sectionVisibility.set(entry.target.id, entry);
        }

        const visibleSection = Array.from(sectionVisibility.values())
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => Math.abs(left.boundingClientRect.top) - Math.abs(right.boundingClientRect.top))[0];

        if (visibleSection?.target?.id) {
          activeSectionId = visibleSection.target.id;
        }
      },
      {
        rootMargin: '-18% 0px -64% 0px',
        threshold: [0, 0.15, 0.35, 0.65]
      }
    );

    setActiveSectionFromHash();

    for (const section of observedSections) {
      observer.observe(section);
    }

    window.addEventListener('hashchange', setActiveSectionFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', setActiveSectionFromHash);
    };
  });
</script>

<svelte:head>
  <title>VeloraCSS Docs</title>
</svelte:head>

<div class="site-body site-body-docs site-root">
  <div class="docs-app">
    <SiteHeader />

    <div class="docs-shell docs-shell-reference">
      <aside class="docs-sidebar" aria-label="Documentation navigation">
        <div class="docs-sidebar-inner">
          {#each docsSidebarGroups as group}
            <section class="docs-sidebar-group">
              <h2 class="docs-sidebar-heading">{group.title}</h2>
              <div class="docs-sidebar-links">
                {#each group.links as link}
                  <a
                    class:docs-sidebar-link-current={isActiveSectionLink(link.href)}
                    class="docs-sidebar-link"
                    href={link.href}
                    aria-current={isActiveSectionLink(link.href) ? 'location' : undefined}
                    on:click={() => handleSectionLinkClick(link.href)}
                  >
                    {link.label}
                  </a>
                {/each}
              </div>
            </section>
          {/each}
        </div>
      </aside>

      <main class="docs-main">
        <article class="docs-article">
          <div class="docs-breadcrumb" aria-label="Breadcrumb">
            <a class="docs-breadcrumb-link" href="/docs">Documentation</a>
            <span class="docs-breadcrumb-separator">/</span>
            <span class="docs-breadcrumb-current">Installation</span>
          </div>

          <header class="docs-guide-header" id="overview">
            <p class="docs-overline">Installation</p>
            <h1 class="docs-title">Install VeloraCSS</h1>
            <p class="docs-lead">VeloraCSS is a CSS-first framework for sharper structure, readable type, restrained components, and a deliberately small runtime surface.</p>
            <p class="docs-guide-intro">Install the package, import the stylesheet, add the runtime only when the page actually needs shipped interactive hooks, then build the first page from layout and type first.</p>
          </header>

          <section class="docs-section docs-section-intro" id="quick-start">
            <div class="docs-section-head">
              <p class="docs-overline">Guide</p>
              <h2 class="docs-section-title">Follow the setup path in order.</h2>
              <p class="docs-section-copy">This page is written like a framework guide instead of a product tour. Start at the package and move straight through to the first page.</p>
            </div>

            <div class="docs-guide-links" aria-label="Installation guide links">
              {#each docsGuideLinks as guide}
                <a
                  class:docs-guide-link-current={isActiveSectionLink(guide.href)}
                  class="docs-guide-link"
                  href={guide.href}
                  aria-current={isActiveSectionLink(guide.href) ? 'location' : undefined}
                  on:click={() => handleSectionLinkClick(guide.href)}
                >
                  <span class="docs-guide-link-step">{guide.step}</span>
                  <span class="docs-guide-link-copy">
                    <span class="docs-guide-link-title">{guide.title}</span>
                    <span class="docs-guide-link-summary">{guide.summary}</span>
                  </span>
                </a>
              {/each}
            </div>
          </section>

          <section class="docs-article-tools" aria-label="On this page">
            <div class="docs-on-this-page-inline" aria-label="On this page">
              {#each docsOnThisPage as item}
                <a
                  class:docs-on-this-page-link-current={isActiveSectionLink(item.href)}
                  class="docs-on-this-page-link"
                  href={item.href}
                  aria-current={isActiveSectionLink(item.href) ? 'location' : undefined}
                  on:click={() => handleSectionLinkClick(item.href)}
                >
                  {item.label}
                </a>
              {/each}
            </div>
          </section>

          {#each docsSetupSections as section}
            <section class="docs-section docs-section-step" id={section.id}>
              <div class="docs-step-head">
                <div class="docs-step-meta">
                  <div class="docs-step-badge">
                    <span class="docs-step-label">Step</span>
                    <span class="docs-step-number">{section.step}</span>
                  </div>
                </div>

                <div class="docs-step-copy">
                  <h2 class="docs-section-title">{section.title}</h2>
                  <p class="docs-section-copy">{section.copy}</p>
                </div>
              </div>

              <div class:docs-step-body-compact={section.id !== 'first-page'} class="docs-step-body">
                <div class="docs-step-prose">
                  <p class="docs-step-note">{section.note}</p>

                  {#if section.points}
                    <ul class="docs-list docs-step-points">
                      {#each section.points as point}
                        <li>{@html point}</li>
                      {/each}
                    </ul>
                  {/if}

                  {#if section.callouts}
                    <div class="docs-callout-grid">
                      {#each section.callouts as callout}
                        <article class="docs-callout">
                          <p class="docs-callout-title">{callout.eyebrow}</p>
                          <ul class="docs-list">
                            {#each callout.items as item}
                              <li>{item}</li>
                            {/each}
                          </ul>
                        </article>
                      {/each}
                    </div>
                  {/if}

                  {#if section.commands}
                    <div class="docs-output-commands">
                      {#each section.commands as command}
                        <CopyableCommand command={command} ariaLabel={`Copy ${command}`} />
                      {/each}
                    </div>
                  {/if}
                </div>

                <div class="docs-step-code">
                  <CodeWindow
                    title={section.codeWindow.filename}
                    language={section.codeWindow.language}
                    code={section.codeWindow.code}
                    compact={section.id !== 'first-page'}
                  />
                </div>
              </div>
            </section>
          {/each}

          <section class="docs-section" id="rules">
            <div class="docs-section-head">
              <p class="docs-overline">Reference</p>
              <h2 class="docs-section-title">Respect the public contract.</h2>
              <p class="docs-section-copy">The docs should keep repeating the boundary conditions that make VeloraCSS usable: predictable prefixes, sharper geometry, and a generated manifest as the final authority.</p>
            </div>

            <div class="docs-definition-list">
              {#each docsRules as rule}
                <article class="docs-definition-item">
                  <h3 class="docs-definition-title">{rule.title}</h3>
                  <p class="docs-definition-copy">{@html rule.copy}</p>
                </article>
              {/each}
            </div>
          </section>

          <section class="docs-section" id="families">
            <div class="docs-section-head">
              <p class="docs-overline">API surface</p>
              <h2 class="docs-section-title">Start with the shipped selector families.</h2>
              <p class="docs-section-copy">Velora is easier to work with when layout, type, forms, navigation, and overlays are adopted as families instead of improvised one-off wrappers.</p>
            </div>

            <div class="docs-family-list">
              {#each familyCards as card}
                <article class="docs-family-item">
                  <div class="docs-family-copy">
                    <p class="docs-family-eyebrow">{card.eyebrow}</p>
                    <h3 class="docs-family-title">{card.title}</h3>
                    <p class="docs-family-description">{card.copy}</p>
                  </div>
                  <div class="site-chip-row">
                    {#each card.chips as chip}
                      <span class="site-code-chip">{chip}</span>
                    {/each}
                  </div>
                  <p class="docs-family-note">{card.note}</p>
                </article>
              {/each}
            </div>
          </section>

          <section class="docs-section" id="artifacts">
            <div class="docs-section-head">
              <p class="docs-overline">Package surface</p>
              <h2 class="docs-section-title">Know what the package actually ships.</h2>
              <p class="docs-section-copy">The framework output stays intentionally small: development CSS, minified CSS, an optional runtime, and the manifest that records the public surface machine-readably.</p>
            </div>

            <div class="docs-output-list">
              {#each docsArtifacts as artifact}
                <article class="docs-output-item">
                  <div class="docs-output-copy">
                    <p class="docs-family-eyebrow">{artifact.eyebrow}</p>
                    <h3 class="docs-family-title">{artifact.title}</h3>
                    <p class="docs-family-description">{artifact.copy}</p>
                  </div>

                  <div class="docs-output-commands">
                    {#each artifact.commands as command}
                      <CopyableCommand command={command} ariaLabel={`Copy ${command}`} />
                    {/each}
                  </div>

                  {#if artifact.href}
                    <a class="docs-inline-link" href={artifact.href} rel="noreferrer" target="_blank">{artifact.hrefLabel}</a>
                  {/if}
                </article>
              {/each}
            </div>
          </section>

          <section class="docs-section" id="release">
            <div class="docs-section-head">
              <p class="docs-overline">Shipping</p>
              <h2 class="docs-section-title">Keep the release path repeatable.</h2>
              <p class="docs-section-copy">A framework release is only complete when the package, the manifest, and the public docs all agree. This section stays focused on that handoff.</p>
            </div>

            <div class="docs-definition-list">
              {#each docsReleaseCards as card}
                <article class="docs-definition-item">
                  <p class="docs-family-eyebrow">{card.eyebrow}</p>
                  {#if card.title}
                    <h3 class="docs-definition-title">{card.title}</h3>
                  {/if}
                  {#if card.command}
                    <CopyableCommand command={card.command} ariaLabel={`Copy ${card.command}`} />
                  {/if}
                  <p class="docs-definition-copy">{card.copy}</p>
                  {#if card.href}
                    <a class="docs-inline-link" href={card.href} rel="noreferrer" target="_blank">{card.hrefLabel}</a>
                  {/if}
                </article>
              {/each}
            </div>
          </section>

          <section class="docs-section" id="next-routes">
            <div class="docs-section-head">
              <p class="docs-overline">Continue</p>
              <h2 class="docs-section-title">Branch into the route that answers the next question.</h2>
              <p class="docs-section-copy">Examples are for assembled product screens. Proof is for the raw surface and helper behavior. They should feel like adjacent parts of the same system, not separate sites.</p>
            </div>

            <div class="docs-definition-list">
              {#each docsRouteCards as card}
                <article class="docs-definition-item">
                  <p class="docs-family-eyebrow">{card.eyebrow}</p>
                  <h3 class="docs-definition-title">{card.title}</h3>
                  <p class="docs-definition-copy">{card.copy}</p>
                  <a class="docs-inline-link" href={card.href}>{card.href === '/examples' ? 'Open examples route' : 'Open proof route'}</a>
                </article>
              {/each}
            </div>
          </section>

          <nav class="docs-next-nav" aria-label="Documentation pagination">
            <a class="docs-next-link" href="/examples">
              <span class="docs-next-label">Next</span>
              <span class="docs-next-title">Browse examples</span>
            </a>
            <a class="docs-next-link" href="/proof">
              <span class="docs-next-label">Reference surface</span>
              <span class="docs-next-title">Inspect proof harness</span>
            </a>
          </nav>
        </article>
      </main>
    </div>

    <div class="docs-footer-wrap">
      <SiteFooter footerCopy={docsFooterCopy} />
    </div>
  </div>
</div>