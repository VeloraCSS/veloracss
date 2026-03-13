export const proofSnapshot = [
  { value: '0.1.1', label: 'live package' },
  { value: '5', label: 'runtime hooks', centered: true },
  { value: '1', label: 'npm package live', centered: true }
];

export const proofSurfaceCards = [
  {
    eyebrow: 'Surfaces',
    title: 'Token-led backgrounds and borders',
    chips: [
      'vel-chip vel-bg-primary vel-text-on-primary::Primary',
      'vel-chip vel-bg-primary-soft vel-text-primary vel-border-primary::Soft',
      'vel-chip vel-bg-elevated vel-border::Elevated'
    ]
  },
  {
    eyebrow: 'Layout',
    title: 'Grid, rows, stacks, and auto-fit',
    swatches: [
      'vel-swatch vel-bg-soft vel-border vel-radius-md',
      'vel-swatch vel-bg-elevated vel-border vel-radius-md',
      'vel-swatch vel-bg-primary-soft vel-border-primary vel-radius-md'
    ]
  },
  {
    eyebrow: 'Typography',
    title: 'Roles, tone, and readable defaults',
    copy: 'The public grammar now has display, headline, title, body, small text, mono, and tone utilities.'
  }
];

export const proofCompositionPanels = [
  {
    title: 'Sizing',
    copy: 'Width and readable max-width helpers are in place.'
  },
  {
    title: 'Spacing',
    copy: 'Padding, block rhythm, gaps, and top spacing utilities now exist.'
  },
  {
    title: 'Effects',
    copy: 'Shadows and ring primitives give the base visual depth.'
  },
  {
    title: 'Navigation',
    copy: 'Nav bars, tabs, breadcrumbs, and pagination now share the same grammar.'
  },
  {
    title: 'Overlay',
    copy: 'Menus, modals, offcanvas panels, and toasts inherit the same tighter corners and control rhythm.'
  }
];

export const proofFeedbackAlerts = [
  {
    variant: 'info',
    title: 'Info',
    copy: 'The utility grammar is stable enough to support the site migration without changing the public API.'
  },
  {
    variant: 'success',
    title: 'Success',
    copy: 'The package is live on npm and the org package view is reconciled.'
  },
  {
    variant: 'warning',
    title: 'Warning',
    copy: 'The Svelte site still needs the remaining route-by-route content migration.'
  },
  {
    variant: 'danger',
    title: 'Blocked',
    copy: 'Do not expand the public API casually while the proof and docs are being consolidated.'
  }
];

export const proofFlowSteps = [
  {
    state: 'complete',
    marker: '1',
    title: 'Utility base established',
    copy: 'Layout, spacing, flex, surfaces, effects, sizing, and typography give the framework a reusable composition layer.',
    meta: [
      'vel-chip vel-bg-elevated vel-border::Complete',
      'vel-chip vel-bg-primary-soft vel-border-primary vel-text-primary::Core'
    ]
  },
  {
    state: 'complete',
    marker: '2',
    title: 'Release path and npm access finished',
    copy: 'The package is published, tagged, and wired into the npm org view.',
    meta: [
      'vel-chip vel-bg-elevated vel-border::Complete',
      'vel-chip vel-bg-primary-soft vel-border-primary vel-text-primary::Release'
    ]
  },
  {
    state: 'current',
    marker: '3',
    title: 'Public site routes are being consolidated',
    copy: 'Docs, examples, and proof are moving into the Svelte app without changing the package API.',
    meta: [
      'vel-chip vel-bg-primary vel-text-on-primary::Current',
      'vel-chip vel-bg-elevated vel-border::Migration'
    ]
  }
];

export const proofOverlayMenuItems = [
  'Duplicate layout::Ctrl+D',
  'Save preset::Ctrl+S',
  'Export proof::JSON'
];