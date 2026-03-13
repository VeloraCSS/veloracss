export const docsInstallCommands = [
  'npm install veloracss',
  'import "veloracss/css";',
  'import { initVelora } from "veloracss/js";'
];

export const docsOverviewFacts = [
  'Frozen 0.1 public API',
  'Manifest-backed contract',
  'CSS-first with optional runtime'
];

export const docsSidebarGroups = [
  {
    title: 'Getting started',
    links: [
      { href: '#overview', label: 'Overview' },
      { href: '#quick-start', label: 'Quick start' },
      { href: '#install-package', label: 'Installation' },
      { href: '#import-styles', label: 'Import styles' },
      { href: '#optional-runtime', label: 'Optional runtime' },
      { href: '#first-page', label: 'First page' }
    ]
  },
  {
    title: 'Explore',
    links: [
      { href: '#next-routes', label: 'Next routes' },
      { href: '/examples', label: 'Examples route' },
      { href: '/proof', label: 'Proof route' }
    ]
  },
  {
    title: 'Reference',
    links: [
      { href: '#rules', label: 'Public rules' },
      { href: '#families', label: 'Selector families' },
      { href: '#artifacts', label: 'Package artifacts' }
    ]
  },
  {
    title: 'Shipping',
    links: [
      { href: '#release', label: 'Release workflow' }
    ]
  }
];

export const docsOnThisPage = [
  { href: '#overview', label: 'Overview' },
  { href: '#quick-start', label: 'Quick start' },
  { href: '#install-package', label: 'Installation' },
  { href: '#import-styles', label: 'Import styles' },
  { href: '#optional-runtime', label: 'Optional runtime' },
  { href: '#first-page', label: 'First page' },
  { href: '#next-routes', label: 'Next routes' },
  { href: '#rules', label: 'Rules' },
  { href: '#families', label: 'Families' },
  { href: '#artifacts', label: 'Artifacts' },
  { href: '#release', label: 'Release' }
];

export const docsSearchEntries = [
  {
    href: '#overview',
    label: 'Overview',
    summary: 'Start with the docs route overview, install path, and contract framing.',
    keywords: ['start here', 'introduction', 'overview', 'documentation']
  },
  {
    href: '#quick-start',
    label: 'Quick start',
    summary: 'See the setup path before moving into the full installation guide.',
    keywords: ['quick start', 'steps', 'map', 'setup']
  },
  {
    href: '#install-package',
    label: 'Install package',
    summary: 'Install the published package with npm install veloracss',
    keywords: ['npm', 'install', 'package', 'terminal', 'setup']
  },
  {
    href: '#import-styles',
    label: 'Import styles',
    summary: 'Import veloracss/css from your application entry file.',
    keywords: ['css', 'stylesheet', 'import', 'main.js', 'entry file']
  },
  {
    href: '#optional-runtime',
    label: 'Optional runtime',
    summary: 'Use initVelora only for the small helper layer and data-vel hooks.',
    keywords: ['javascript', 'runtime', 'initVelora', 'data-vel', 'helpers']
  },
  {
    href: '#first-page',
    label: 'First page',
    summary: 'Build the first page from shell, type, actions, and supporting content.',
    keywords: ['app.html', 'layout', 'type', 'vel-shell', 'page']
  },
  {
    href: '#next-routes',
    label: 'Next routes',
    summary: 'Continue into the assembled examples route or the proof route.',
    keywords: ['examples', 'proof', 'continue', 'route']
  },
  {
    href: '#rules',
    label: 'Public rules',
    summary: 'Review prefix rules, geometry defaults, and manifest authority.',
    keywords: ['rules', 'prefix', 'geometry', 'manifest', 'contract']
  },
  {
    href: '#families',
    label: 'Selector families',
    summary: 'Start from the shipped selector families before creating wrappers.',
    keywords: ['selectors', 'families', 'api surface', 'reference']
  },
  {
    href: '#artifacts',
    label: 'Package artifacts',
    summary: 'Inspect the CSS, JS, and manifest files the package ships.',
    keywords: ['artifacts', 'dist', 'velora.css', 'velora.js', 'manifest']
  },
  {
    href: '#release',
    label: 'Release workflow',
    summary: 'Verify, publish, and keep docs aligned with the manifest.',
    keywords: ['release', 'publish', 'verify', 'npm', 'shipping']
  },
  {
    href: '/examples',
    label: 'Examples route',
    summary: 'Browse assembled product screens built from the public surface.',
    keywords: ['examples', 'screens', 'assembled', 'route']
  },
  {
    href: '/proof',
    label: 'Proof route',
    summary: 'Inspect the low-level proof harness and helper behavior directly.',
    keywords: ['proof', 'harness', 'reference', 'runtime']
  }
];

export const docsJourneyCards = [
  {
    eyebrow: 'Pass 1',
    title: 'Set up the package cleanly',
    copy: 'Install VeloraCSS, import the stylesheet, and decide whether the optional runtime belongs on this page before moving any deeper.',
    links: [
      { href: '#install-package', label: 'Install package' },
      { href: '#import-styles', label: 'Import styles' },
      { href: '#optional-runtime', label: 'Runtime boundary' }
    ]
  },
  {
    eyebrow: 'Pass 2',
    title: 'Build the first page from system pieces',
    copy: 'Use layout and type first, then move into the worked lesson and assembled examples once the page skeleton feels right.',
    links: [
      { href: '#quick-start', label: 'Quick start map' },
      { href: '#first-page', label: 'First page lesson' },
      { href: '/examples', label: 'Examples route' }
    ]
  },
  {
    eyebrow: 'Pass 3',
    title: 'Check the public contract',
    copy: 'Confirm selector families, public rules, and shipped artifacts before introducing product-specific wrappers or custom glue.',
    links: [
      { href: '#rules', label: 'Public rules' },
      { href: '#families', label: 'Selector families' },
      { href: '#artifacts', label: 'Package artifacts' }
    ]
  },
  {
    eyebrow: 'Pass 4',
    title: 'Validate and ship',
    copy: 'Use the proof route for raw surface verification, then keep the release checklist aligned with the docs and manifest.',
    links: [
      { href: '/proof', label: 'Proof route' },
      { href: '#release', label: 'Release workflow' }
    ]
  }
];

const lessonLine = (html, title, copy) => ({ html, title, copy });

const getLessonCode = (lines) => lines.map((line) => line.html ?? '').join('\n');

const docsInstallPackageLines = [
  lessonLine(
    '<span class="site-syntax-function">npm</span> <span class="site-syntax-string">install</span> <span class="site-syntax-string">veloracss</span>',
    'Install the published package.',
    'This keeps the stylesheet, optional runtime, and manifest on the same shipped version instead of mixing local copies or stale assets.'
  )
];

const docsImportStylesLines = [
  lessonLine(
    '<span class="site-syntax-keyword">import</span> <span class="site-syntax-string">"veloracss/css"</span><span class="site-syntax-punctuation">;</span>',
    'Load the compiled stylesheet from the package.',
    'Import the CSS from your application entry so the framework surface is available before your own product markup renders.'
  )
];

const docsFirstPageLines = [
  lessonLine(
    '<span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">main</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-shell vel-stack-lg"</span><span class="site-syntax-punctuation">&gt;</span>',
    'Open the page shell.',
    'Use <span class="site-inline-code">vel-shell</span> to keep the page width disciplined and <span class="site-inline-code">vel-stack-lg</span> to establish the top-level vertical rhythm.'
  ),
  lessonLine(
    '  <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">section</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-stack-sm vel-max-w-copy"</span><span class="site-syntax-punctuation">&gt;</span>',
    'Start a readable hero block.',
    'The first section stacks its children tightly and limits line length with <span class="site-inline-code">vel-max-w-copy</span> so the intro stays readable.'
  ),
  lessonLine(
    '    <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">p</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-eyebrow"</span><span class="site-syntax-punctuation">&gt;</span>Project<span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">p</span><span class="site-syntax-punctuation">&gt;</span>',
    'Add the context label.',
    '<span class="site-inline-code">vel-eyebrow</span> is the small uppercase kicker that tells the reader what kind of content block they are entering.'
  ),
  lessonLine(
    '    <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">h1</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-display"</span><span class="site-syntax-punctuation">&gt;</span>Ship a sharper UI.<span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">h1</span><span class="site-syntax-punctuation">&gt;</span>',
    'Set the primary headline.',
    '<span class="site-inline-code">vel-display</span> gives the page its highest-contrast type treatment, so the promise of the page is obvious immediately.'
  ),
  lessonLine(
    '    <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">p</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-body-lg vel-text-muted"</span><span class="site-syntax-punctuation">&gt;</span>',
    'Open the supporting copy.',
    'Pair <span class="site-inline-code">vel-body-lg</span> with <span class="site-inline-code">vel-text-muted</span> when the paragraph should stay readable without competing with the headline.'
  ),
  lessonLine(
    '      Start with layout and type, then add components where they help.',
    'Write the rule the page should reinforce.',
    'This sentence teaches the framework workflow directly: structure first, components second.'
  ),
  lessonLine(
    '    <span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">p</span><span class="site-syntax-punctuation">&gt;</span>',
    'Close the intro paragraph.',
    'The intro copy stays contained in one paragraph so the stack spacing remains predictable.'
  ),
  lessonLine(
    '    <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">div</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-cluster"</span><span class="site-syntax-punctuation">&gt;</span>',
    'Create an action row.',
    '<span class="site-inline-code">vel-cluster</span> lays out neighboring actions with consistent horizontal spacing and natural wrapping.'
  ),
  lessonLine(
    '      <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">a</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-button vel-button-primary"</span> <span class="site-syntax-attr">href</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"#"</span><span class="site-syntax-punctuation">&gt;</span>Primary action<span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">a</span><span class="site-syntax-punctuation">&gt;</span>',
    'Add the main call to action.',
    'The primary button signals the default next move without requiring any custom button styling.'
  ),
  lessonLine(
    '      <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">a</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-button vel-button-secondary"</span> <span class="site-syntax-attr">href</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"#"</span><span class="site-syntax-punctuation">&gt;</span>Secondary action<span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">a</span><span class="site-syntax-punctuation">&gt;</span>',
    'Add the lower-emphasis action.',
    'A secondary button keeps the alternate path visible while preserving the primary action hierarchy.'
  ),
  lessonLine(
    '    <span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">div</span><span class="site-syntax-punctuation">&gt;</span>',
    'Close the action cluster.',
    'The action row ends cleanly before the next structural block begins.'
  ),
  lessonLine(
    '  <span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">section</span><span class="site-syntax-punctuation">&gt;</span>',
    'Finish the hero section.',
    'This closes the intro content as one coherent section instead of mixing it into the grid that follows.'
  ),
  lessonLine(
    '',
    'Insert a breathing line.',
    'The blank line is intentional: it separates the hero block from the supporting grid so the source reads in chunks, not as one wall of markup.'
  ),
  lessonLine(
    '  <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">section</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-grid-two"</span><span class="site-syntax-punctuation">&gt;</span>',
    'Open the supporting content grid.',
    '<span class="site-inline-code">vel-grid-two</span> gives the page a balanced two-column follow-up area for secondary information.'
  ),
  lessonLine(
    '    <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">article</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-card vel-stack-sm"</span><span class="site-syntax-punctuation">&gt;</span>',
    'Start the first support card.',
    'Each card uses <span class="site-inline-code">vel-card</span> for surface styling and <span class="site-inline-code">vel-stack-sm</span> for its internal spacing.'
  ),
  lessonLine(
    '      <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">p</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-card-eyebrow"</span><span class="site-syntax-punctuation">&gt;</span>System<span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">p</span><span class="site-syntax-punctuation">&gt;</span>',
    'Label the card theme.',
    '<span class="site-inline-code">vel-card-eyebrow</span> gives supporting surfaces the same disciplined label pattern used across the framework.'
  ),
  lessonLine(
    '      <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">h2</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-title"</span><span class="site-syntax-punctuation">&gt;</span>Build from stable families.<span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">h2</span><span class="site-syntax-punctuation">&gt;</span>',
    'Set the card heading.',
    '<span class="site-inline-code">vel-title</span> is the right scale for section and card headlines that sit below the page display heading.'
  ),
  lessonLine(
    '      <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">p</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-body vel-text-muted"</span><span class="site-syntax-punctuation">&gt;</span>Layout, type, and starter components should compose cleanly.<span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">p</span><span class="site-syntax-punctuation">&gt;</span>',
    'Explain the system rule.',
    'The card body keeps the message practical: use stable families together instead of improvising one-off wrappers.'
  ),
  lessonLine(
    '    <span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">article</span><span class="site-syntax-punctuation">&gt;</span>',
    'Close the first card.',
    'The first support surface ends before the second begins, which keeps the code scan-friendly.'
  ),
  lessonLine(
    '    <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">article</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-card vel-stack-sm"</span><span class="site-syntax-punctuation">&gt;</span>',
    'Start the second support card.',
    'Reusing the same card recipe proves the layout is system-led, not handcrafted for a single block.'
  ),
  lessonLine(
    '      <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">p</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-card-eyebrow"</span><span class="site-syntax-punctuation">&gt;</span>Contract<span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">p</span><span class="site-syntax-punctuation">&gt;</span>',
    'Name the contract-focused card.',
    'This label tells the reader the second card is about usage boundaries, not another feature list.'
  ),
  lessonLine(
    '      <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">h2</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-title"</span><span class="site-syntax-punctuation">&gt;</span>Keep app logic outside the framework.<span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">h2</span><span class="site-syntax-punctuation">&gt;</span>',
    'State the boundary plainly.',
    'The docs should keep repeating this idea: Velora owns presentation structure, not application architecture.'
  ),
  lessonLine(
    '      <span class="site-syntax-punctuation">&lt;</span><span class="site-syntax-tag">p</span> <span class="site-syntax-attr">class</span><span class="site-syntax-operator">=</span><span class="site-syntax-string">"vel-body vel-text-muted"</span><span class="site-syntax-punctuation">&gt;</span>Use Velora for structure and the optional runtime for simple open and close flows.<span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">p</span><span class="site-syntax-punctuation">&gt;</span>',
    'Describe the runtime boundary.',
    'This clarifies where the helper layer stops: simple interaction scaffolding is fine, deeper behavior stays in the app.'
  ),
  lessonLine(
    '    <span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">article</span><span class="site-syntax-punctuation">&gt;</span>',
    'Close the second card.',
    'At this point the two-column support grid is complete.'
  ),
  lessonLine(
    '  <span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">section</span><span class="site-syntax-punctuation">&gt;</span>',
    'Close the grid section.',
    'Keeping each section wrapped cleanly makes the source easy to expand later without breaking the page structure.'
  ),
  lessonLine(
    '<span class="site-syntax-punctuation">&lt;/</span><span class="site-syntax-tag">main</span><span class="site-syntax-punctuation">&gt;</span>',
    'Close the page shell.',
    'The main element ends only after the hero and support grid are both complete, which keeps the document structure correct.'
  )
];

const docsRuntimeLines = [
  lessonLine(
    '<span class="site-syntax-keyword">import</span> <span class="site-syntax-punctuation">{</span> <span class="site-syntax-function">initVelora</span> <span class="site-syntax-punctuation">}</span> <span class="site-syntax-keyword">from</span> <span class="site-syntax-string">"veloracss/js"</span><span class="site-syntax-punctuation">;</span>',
    'Import the helper entry point.',
    'Bring in <span class="site-inline-code">initVelora</span> only when the page needs dropdown, modal, or toast helpers.'
  ),
  lessonLine(
    '',
    'Leave one visual separator.',
    'The blank line separates the dependency from the side effect so the file reads like a small deliberate setup script.'
  ),
  lessonLine(
    '<span class="site-syntax-function">initVelora</span><span class="site-syntax-punctuation">();</span>',
    'Start the helper layer once.',
    'Initialize the runtime after import and let your markup drive behavior through the shipped <span class="site-inline-code">data-vel-*</span> hooks.'
  )
];

export const docsCodeLessons = {
  installPackage: {
    eyebrow: 'Step 1',
    title: 'Install the published package',
    copy: 'Start with the package itself. Do not copy generated CSS into your app or document against an unpublished local build.',
    filename: 'terminal',
    language: 'BASH',
    code: getLessonCode(docsInstallPackageLines),
    lines: docsInstallPackageLines
  },
  importStyles: {
    eyebrow: 'Step 2',
    title: 'Import the stylesheet in your entry file',
    copy: 'VeloraCSS is CSS-first. Pull the compiled stylesheet in from the package instead of re-creating the framework surface inside app CSS.',
    filename: 'main.js',
    language: 'JS',
    code: getLessonCode(docsImportStylesLines),
    lines: docsImportStylesLines
  },
  firstPage: {
    eyebrow: 'Step 4',
    title: 'Build the first page from layout and type first',
    copy: 'This is the smallest page that still shows the Velora workflow clearly: shell first, type second, actions third, and supporting content after that.',
    filename: 'app.html',
    language: 'HTML',
    code: getLessonCode(docsFirstPageLines),
    lines: docsFirstPageLines
  },
  runtime: {
    eyebrow: 'Step 3',
    title: 'Keep the runtime entry boring and explicit',
    copy: 'The helper layer should not turn into an application framework. Import it once, initialize it once, and let the markup opt into the shipped behaviors.',
    filename: 'runtime.js',
    language: 'JS',
    code: getLessonCode(docsRuntimeLines),
    lines: docsRuntimeLines
  }
};

export const docsCodeSamples = {
  firstPage: {
    title: docsCodeLessons.firstPage.filename,
    language: docsCodeLessons.firstPage.language,
    code: getLessonCode(docsCodeLessons.firstPage.lines)
  },
  runtime: {
    title: docsCodeLessons.runtime.filename,
    language: docsCodeLessons.runtime.language,
    code: getLessonCode(docsCodeLessons.runtime.lines)
  }
};

export const docsRules = [
  {
    title: 'Prefixes are strict',
    copy: 'Selectors use <span class="site-inline-code">vel-</span>, tokens use <span class="site-inline-code">--vel-</span>, and runtime hooks use explicit <span class="site-inline-code">data-vel-*</span> attributes.'
  },
  {
    title: 'Geometry stays sharper',
    copy: 'Pill-heavy chrome is not the default. Rounded pills are opt-in rather than the baseline framework look.'
  },
  {
    title: 'The manifest is authority',
    copy: 'The full public selector and token surface is generated into <span class="site-inline-code">dist/velora.manifest.json</span> during build.'
  }
];

export const docsQuickStartSteps = [
  {
    number: '1',
    title: 'Install the package',
    copy: 'Bring in the compiled CSS first. Add the runtime only if you need overlays or simple open and close behavior.',
    commands: ['npm install veloracss', 'import "veloracss/css";'],
    links: [
      { href: '#install-package', label: 'Open install lesson' },
      { href: '#import-styles', label: 'Open import lesson' }
    ]
  },
  {
    number: '2',
    title: 'Start with layout, then add components',
    copy: 'Use the shell, stacks, grids, and readable widths to frame the page before dropping in cards, buttons, or forms.',
    chips: ['vel-shell', 'vel-stack-lg', 'vel-grid-two', 'vel-max-w-copy'],
    links: [
      { href: '#first-page', label: 'Read the first page lesson' },
      { href: '/examples', label: 'Browse assembled examples' }
    ]
  },
  {
    number: '3',
    title: 'Opt into runtime helpers only when needed',
    copy: 'Menus, modal shells, and toast stacks can stay declarative by using the shipped runtime hooks instead of custom glue code.',
    chips: ['data-vel-toggle', 'data-vel-open', 'data-vel-close'],
    links: [
      { href: '#optional-runtime', label: 'Review runtime rules' },
      { href: '/proof', label: 'Inspect the proof route' }
    ]
  }
];

export const docsFirstPagePrinciples = [
  'Use layout primitives first so the page structure is obvious.',
  'Use typography roles to establish hierarchy before adding visual effects.',
  'Use starter components where they save time, not as mandatory wrappers around everything.',
  'Keep custom site chrome outside the framework API if it is product-specific.'
];

export const docsFormGuidance = {
  title: 'What a good Velora form should do',
  items: [
    'Group related fields with layout helpers before adding visual separators.',
    'Use helper text only when it reduces ambiguity or prevents mistakes.',
    'Keep validation tone direct by pairing <span class="site-inline-code">vel-input-danger</span> with matching help copy.',
    'Use <span class="site-inline-code">vel-control-group</span> for action rows instead of hand-rolled spacing.'
  ],
  chips: ['vel-form', 'vel-field', 'vel-input', 'vel-select', 'vel-help']
};

export const docsNavigationGuidance = {
  title: 'What each pattern is for',
  items: [
    'Use <span class="site-inline-code">vel-navbar*</span> for the top-level shell and high-value routes.',
    'Use <span class="site-inline-code">vel-breadcrumb*</span> when the user needs location context inside deeper content.',
    'Use tabs for peer views, not for primary site architecture.',
    'Use pagination when users move through ordered sets rather than jumping between product areas.'
  ],
  chips: ['vel-navbar*', 'vel-breadcrumb*', 'vel-tabs', 'vel-pagination']
};

export const docsOverlayGuidance = {
  title: 'Where the helper layer should stop',
  items: [
    'Use action bars for clustered task controls and dense page tools.',
    'Use dropdowns for short action lists, not deep navigation trees.',
    'Use offcanvas panels for secondary navigation, work trays, or compact contextual workflows.',
    'Use tooltips for short anchored hints, not multi-step teaching or app state.',
    'Use toasts for non-blocking confirmation or status changes.',
    'Reach for your app layer when interaction needs outside-click logic, viewport-aware positioning, or complex state.'
  ],
  chips: ['vel-action-bar', 'vel-icon-button', 'vel-dropdown*', 'vel-offcanvas*', 'vel-tooltip*', 'vel-toast*']
};

export const docsRuntimeCallouts = [
  {
    eyebrow: 'Use it for',
    items: [
      'Opening and closing dropdown menus.',
      'Opening and dismissing offcanvas side panels.',
      'Showing anchored tooltip hints on focus and hover.',
      'Showing and dismissing modal shells.',
      'Toggling toast stacks or lightweight status surfaces.'
    ]
  },
  {
    eyebrow: 'Do not use it for',
    items: [
      'Complex application state or data fetching.',
      'Viewport-aware positioning logic beyond the shipped basics.',
      'Rebuilding component behavior that should live in your app layer.'
    ]
  }
];

export const docsArtifacts = [
  {
    eyebrow: 'CSS',
    title: 'Stylesheet bundles',
    copy: 'Ship the readable bundle for development and the minified bundle for distribution.',
    commands: ['dist/velora.css', 'dist/velora.min.css']
  },
  {
    eyebrow: 'Runtime',
    title: 'Optional helper runtime',
    copy: 'Use this only when you need the small progressive-enhancement layer for menus, modals, and toasts.',
    commands: ['dist/velora.js', 'dist/velora.min.js']
  },
  {
    eyebrow: 'Manifest',
    title: 'Machine-readable API contract',
    copy: 'This file is the exact shipped record of public classes, tokens, and runtime attributes.',
    commands: ['dist/velora.manifest.json'],
    href: 'https://github.com/VeloraX/veloracss/blob/main/dist/velora.manifest.json',
    hrefLabel: 'Open manifest'
  }
];

export const docsReleaseCards = [
  {
    eyebrow: 'Verify',
    command: 'npm run release:verify',
    copy: 'This runs the build, audits public docs references against the manifest, and performs a dry-run package check.'
  },
  {
    eyebrow: 'Publish',
    title: 'veloracss@0.1.1 is live',
    copy: 'The first public publish has already succeeded, and the GitHub workflow is wired for verified follow-up releases.',
    href: 'https://www.npmjs.com/package/veloracss',
    hrefLabel: 'Open npm package'
  },
  {
    eyebrow: 'Access',
    title: 'Org package visibility is resolved',
    copy: 'The veloracss developers team now has read-write access, and the npm org package view reflects the live package correctly.'
  }
];