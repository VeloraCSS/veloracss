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
    commands: ['npm install veloracss', 'import "veloracss/css";']
  },
  {
    number: '2',
    title: 'Start with layout, then add components',
    copy: 'Use the shell, stacks, grids, and readable widths to frame the page before dropping in cards, buttons, or forms.',
    chips: ['vel-shell', 'vel-stack-lg', 'vel-grid-two', 'vel-max-w-copy']
  },
  {
    number: '3',
    title: 'Opt into runtime helpers only when needed',
    copy: 'Menus, modal shells, and toast stacks can stay declarative by using the shipped runtime hooks instead of custom glue code.',
    chips: ['data-vel-toggle', 'data-vel-open', 'data-vel-close']
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
    'Use toasts for non-blocking confirmation or status changes.',
    'Reach for your app layer when interaction needs outside-click logic, viewport-aware positioning, or complex state.'
  ],
  chips: ['vel-action-bar', 'vel-icon-button', 'vel-dropdown*', 'vel-toast*']
};

export const docsRuntimeCallouts = [
  {
    eyebrow: 'Use it for',
    items: [
      'Opening and closing dropdown menus.',
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
  },
  {
    eyebrow: 'Import',
    code: 'import &#123; initVelora &#125; from "veloracss/js";\n\ninitVelora();'
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