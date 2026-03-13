export const homePreviewCard = {
  articleClass: 'vel-card vel-radius-lg site-home-preview-surface',
  imageClass: 'vel-w-full site-home-preview-media',
  bodyClass: 'vel-stack-xs vel-p-4',
  eyebrowClass: 'vel-text-sm vel-text-muted',
  titleClass: 'vel-title',
  copyClass: 'site-home-preview-copy',
  metaClass: 'site-home-preview-meta',
  metaItemClass: 'vel-text-sm vel-text-muted',
  dotClass: 'site-home-preview-dot',
  linkClass: 'site-home-preview-link vel-text-primary',
  eyebrow: 'Launch faster',
  title: 'Velora Journal',
  copy: 'Compose polished cards with media, metadata, and stable utilities.',
  metaPrimary: 'Issue 04',
  metaSecondary: 'UI systems',
  link: 'Read pattern library',
  imageSrc: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80',
  imageAlt: 'Ocean swell'
};

export const homeCodeLines = [
  { prefix: '<article class="', accent: homePreviewCard.articleClass, suffix: '">' },
  { prefix: '  <img class="', accent: homePreviewCard.imageClass, suffix: '" />' },
  { prefix: '  <div class="', accent: homePreviewCard.bodyClass, suffix: '">' },
  { prefix: '    <span class="', accent: homePreviewCard.eyebrowClass, suffix: `">${homePreviewCard.eyebrow}</span>` },
  { prefix: '    <h3 class="', accent: homePreviewCard.titleClass, suffix: `">${homePreviewCard.title}</h3>` },
  { prefix: '    <p class="', accent: homePreviewCard.copyClass, suffix: `">${homePreviewCard.copy}</p>` },
  { prefix: '    <div class="', accent: homePreviewCard.metaClass, suffix: '">' },
  { prefix: '      <span class="', accent: homePreviewCard.metaItemClass, suffix: `">${homePreviewCard.metaPrimary}</span>` },
  { prefix: '      <span class="', accent: homePreviewCard.dotClass, suffix: '">•</span>' },
  { prefix: '      <span class="', accent: homePreviewCard.metaItemClass, suffix: `">${homePreviewCard.metaSecondary}</span>` },
  { prefix: '    </div>', accent: '', suffix: '' },
  { prefix: '    <span class="', accent: homePreviewCard.linkClass, suffix: `">${homePreviewCard.link}</span>` },
  { prefix: '  </div>', accent: '', suffix: '' },
  { prefix: '</article>', accent: '', suffix: '' }
];

export const homeCodeText = homeCodeLines
  .map((line) => `${line.prefix}${line.accent}${line.suffix}`)
  .join('\n');

export const homeFeatureCards = [
  {
    title: 'Token-led design',
    copy: 'Spacing, color, type, and shadow via CSS custom properties so the whole surface stays coordinated.'
  },
  {
    title: 'Utility-first',
    copy: 'Compose layouts directly in markup with classes like vel-stack-md, vel-grid-two, vel-p-4, and vel-text-muted.'
  },
  {
    title: 'Starter components',
    copy: 'Cards, buttons, alerts, modals, and more — ready to drop in and built on the same token layer.'
  },
  {
    title: 'Frozen API surface',
    copy: 'A public 0.1 contract that stays stable and machine-auditable. No surprise class renames.'
  },
  {
    title: 'CSS-first, JS optional',
    copy: 'The runtime only loads when menus, modals, or toasts need toggling behavior.'
  },
  {
    title: 'Manifest-backed API',
    copy: 'The shipped surface is emitted into dist/velora.manifest.json so docs and releases can be checked against the same contract.'
  }
];
