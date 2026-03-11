<script>
  import AnnotatedCodeLesson from '$lib/components/AnnotatedCodeLesson.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { familyCards, siteNavigation } from '$lib/content.js';
  import {
    docsArtifacts,
    docsCodeLessons,
    docsInstallCommands,
    docsReleaseCards,
    docsRules,
    docsRuntimeCallouts,
    docsSidebarGroups
  } from '$lib/docsContent.js';

  const docsProductLinks = siteNavigation.filter((item) => item.href !== '/');
</script>

<svelte:head>
  <title>VeloraCSS Docs</title>
</svelte:head>

<div class="site-body site-body-docs site-root">
  <div class="docs-app">
    <SiteHeader />

    <div class="docs-shell">
      <aside class="docs-sidebar" aria-label="Documentation navigation">
        <div class="docs-sidebar-inner">
          <nav class="docs-product-nav" aria-label="Documentation products">
            {#each docsProductLinks as link}
              <a class:docs-product-link-current={link.href === '/docs'} class="docs-product-link" href={link.href}>
                {link.href === '/docs' ? 'Documentation' : link.label}
              </a>
            {/each}
          </nav>

          {#each docsSidebarGroups as group}
            <section class="docs-sidebar-group">
              <h2 class="docs-sidebar-heading">{group.title}</h2>
              <div class="docs-sidebar-links">
                {#each group.links as link}
                  <a class="docs-sidebar-link" href={link.href}>{link.label}</a>
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

          <header class="docs-hero" id="overview">
            <p class="docs-overline">Getting started</p>
            <h1 class="docs-title">Install VeloraCSS with Vite</h1>
            <p class="docs-lead">VeloraCSS is CSS first. Install the package, import the published stylesheet in the app entry, and only load the optional runtime when the interface needs shipped interaction hooks.</p>
            <p class="docs-lead">This page is the canonical setup path for a Vite project. The selectors, files, and runtime boundaries below are the public contract the package actually ships today.</p>

            <div class="docs-command-strip">
              {#each docsInstallCommands as command}
                <div class="site-command">{command}</div>
              {/each}
            </div>

            <div class="docs-note">
              <p class="docs-note-title">Why this page starts small</p>
              <p class="docs-note-copy">Velora should teach structure, readable type, and a narrow JavaScript surface before it teaches decoration. If the installation page cannot explain the first screen cleanly, the framework surface is too noisy.</p>
            </div>
          </header>

          <section class="docs-section docs-section-lesson" id="install-package">
            <AnnotatedCodeLesson headingLevel={2} lesson={docsCodeLessons.installPackage} />
          </section>

          <section class="docs-section docs-section-lesson" id="import-styles">
            <AnnotatedCodeLesson headingLevel={2} lesson={docsCodeLessons.importStyles} />
          </section>

          <section class="docs-section docs-section-lesson" id="optional-runtime">
            <div class="docs-section-head">
              <p class="docs-overline">Optional runtime</p>
              <h2 class="docs-section-title">Only add JavaScript when the page needs it</h2>
              <p class="docs-section-copy">Most pages do not need framework JavaScript. When they do, keep the setup small and let the markup opt into the shipped hooks.</p>
            </div>

            <div class="docs-callout-grid">
              {#each docsRuntimeCallouts as callout}
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

            <AnnotatedCodeLesson headingLevel={2} lesson={docsCodeLessons.runtime} />
          </section>

          <section class="docs-section docs-section-lesson" id="first-page">
            <AnnotatedCodeLesson headingLevel={2} lesson={docsCodeLessons.firstPage} />
          </section>

          <section class="docs-section" id="rules">
            <div class="docs-section-head">
              <p class="docs-overline">Core concepts</p>
              <h2 class="docs-section-title">Respect the public contract</h2>
              <p class="docs-section-copy">Velora only works as a framework if the published surface stays predictable. These are the rules the docs should keep reinforcing.</p>
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
              <h2 class="docs-section-title">Start with shipped selector families</h2>
              <p class="docs-section-copy">The framework is organized around stable families. Reach for these before inventing product-specific wrappers for the same jobs.</p>
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
              <h2 class="docs-section-title">Know what the package actually ships</h2>
              <p class="docs-section-copy">The output stays intentionally small: readable CSS, minified CSS, the optional runtime, and the manifest that records the contract machine-readably.</p>
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
                      <div class="site-command">{command}</div>
                    {/each}
                  </div>

                  {#if artifact.href}
                    <a class="docs-inline-link" href={artifact.href}>{artifact.hrefLabel}</a>
                  {/if}
                </article>
              {/each}
            </div>
          </section>

          <section class="docs-section" id="release">
            <div class="docs-section-head">
              <p class="docs-overline">Shipping</p>
              <h2 class="docs-section-title">Keep the release path repeatable</h2>
              <p class="docs-section-copy">Shipping the package is only half the job. The docs, manifest, and verification path need to stay aligned every time the package moves.</p>
            </div>

            <div class="docs-definition-list">
              {#each docsReleaseCards as card}
                <article class="docs-definition-item">
                  <p class="docs-family-eyebrow">{card.eyebrow}</p>
                  {#if card.title}
                    <h3 class="docs-definition-title">{card.title}</h3>
                  {/if}
                  {#if card.command}
                    <div class="site-command">{card.command}</div>
                  {/if}
                  <p class="docs-definition-copy">{card.copy}</p>
                  {#if card.href}
                    <a class="docs-inline-link" href={card.href}>{card.hrefLabel}</a>
                  {/if}
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
  </div>
</div>