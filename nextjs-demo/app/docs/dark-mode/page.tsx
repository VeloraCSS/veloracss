import DocPage from '../_components/DocPage'

export default function DarkModePage() {
  return (
    <DocPage
      title="Dark Mode"
      description="Apply styles conditionally in dark mode using vel-dark: prefix. Add the vel-dark class to your html or body element to activate dark mode."
      table={[
        { class: 'vel-dark:{class}', properties: '.vel-dark .vel-dark\\:{class} { ... }' },
      ]}
      examples={[
        {
          label: 'Activating dark mode',
          html: `<!-- Add vel-dark to your root element to activate dark mode -->
<html class="vel-dark">
  <body>
    <!-- All vel-dark: variants are now active -->
  </body>
</html>`,
        },
        {
          label: 'Dark mode background and text',
          html: `<div class="vel-bg-white vel-dark:bg-neutral-900 vel-text-neutral-900 vel-dark:text-white vel-p-6 vel-rounded-xl">
  Light background in light mode, dark background in dark mode.
</div>`,
        },
        {
          label: 'Dark mode border and surface colors',
          html: `<div class="vel-border vel-border-neutral-200 vel-dark:border-base vel-bg-white vel-dark:bg-surface-2 vel-p-4 vel-rounded-lg">
  <p class="vel-text-neutral-700 vel-dark:text-muted">Surface adapts to dark mode automatically.</p>
</div>`,
        },
        {
          label: 'Dark mode button variant',
          html: `<button class="vel-bg-neutral-100 vel-dark:bg-surface-3 vel-text-neutral-900 vel-dark:text-white vel-px-4 vel-py-2 vel-rounded-lg vel-transition-colors" style="border:none;cursor:pointer;padding:0.75rem 1.5rem;border-radius:0.5rem">
  Adapts in dark mode
</button>`,
        },
      ]}
    />
  )
}
