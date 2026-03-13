export const exampleIncludedSlices = ['Forms', 'Feedback', 'Navigation', 'Flow', 'Overlay'];

export const releaseDashboardCards = [
  {
    eyebrow: 'API',
    title: 'Frozen',
    copy: 'Selector families and runtime hooks are backed by the build manifest.'
  },
  {
    eyebrow: 'Package',
    title: 'Live',
    copy: 'veloracss@0.1.1 is published and only the intended public files are shipped.'
  },
  {
    eyebrow: 'Site',
    title: 'Consolidated',
    copy: 'Docs, examples, and proof now run from the Svelte app with shared route content modules.'
  }
];

export const settingsFeedbackAlerts = [
  {
    variant: 'success',
    title: 'Published',
    copy: 'veloracss@0.1.1 is live and npm release verification is working end to end.'
  },
  {
    variant: 'info',
    title: 'Org access',
    copy: 'The npm org package view is wired correctly through the developers team.'
  },
  {
    variant: 'warning',
    title: 'Next',
    copy: 'Phase 9 now shifts toward Discord server integration, GitHub Projects writeback, and sync-broker implementation.'
  }
];

export const launchChecklistSteps = [
  {
    state: 'complete',
    marker: '1',
    title: 'Utilities and components validated',
    copy: 'The starter surface is proofed in forms, feedback, navigation, flow, overlay, and actions.'
  },
  {
    state: 'complete',
    marker: '2',
    title: 'API frozen and manifest generated',
    copy: 'The public surface is documented and emitted during build.'
  },
  {
    state: 'complete',
    marker: '3',
    title: 'Public site consolidated',
    copy: 'The public docs, examples, and proof surfaces now live in the Svelte app without changing the package API.'
  },
  {
    state: 'current',
    marker: '4',
    title: 'Discord integration starting',
    copy: 'Issue #1 is the next active phase: configure Discord server integration around GitHub Projects sync, structured commands, and loop-safe writeback.'
  }
];

export const exampleMenuItems = [
  {
    label: 'Open docs',
    hint: '/docs'
  },
  {
    label: 'Read manifest',
    hint: 'JSON'
  },
  {
    label: 'Open Phase 9',
    hint: 'Issue #1'
  }
];