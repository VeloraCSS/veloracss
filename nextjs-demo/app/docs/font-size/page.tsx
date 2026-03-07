import DocPage from '../_components/DocPage'

export default function FontSizePage() {
  return (
    <DocPage
      title="Font Size"
      description="Utilities for controlling the font size of an element."
      source="typography.css"
      table={[
        { class: 'vel-text-xs', properties: 'font-size: 0.75rem' },
        { class: 'vel-text-sm', properties: 'font-size: 0.875rem' },
        { class: 'vel-text-base', properties: 'font-size: 1rem' },
        { class: 'vel-text-lg', properties: 'font-size: 1.125rem' },
        { class: 'vel-text-xl', properties: 'font-size: 1.25rem' },
        { class: 'vel-text-2xl', properties: 'font-size: 1.5rem' },
        { class: 'vel-text-3xl', properties: 'font-size: 1.875rem' },
        { class: 'vel-text-4xl', properties: 'font-size: 2.25rem' },
        { class: 'vel-text-5xl', properties: 'font-size: 3rem' },
        { class: 'vel-text-6xl', properties: 'font-size: 3.75rem' },
        { class: 'vel-text-7xl', properties: 'font-size: 4.5rem' },
        { class: 'vel-text-8xl', properties: 'font-size: 6rem' },
        { class: 'vel-text-9xl', properties: 'font-size: 8rem' },
      ]}
      examples={[
        {
          label: 'Type scale',
          html: `<div class="vel-flex vel-flex-col vel-gap-2">
  <p class="vel-text-xs" style="color:#94a3b8">vel-text-xs — Extra small (0.75rem)</p>
  <p class="vel-text-sm" style="color:#94a3b8">vel-text-sm — Small (0.875rem)</p>
  <p class="vel-text-base" style="color:#e2e8f0">vel-text-base — Base (1rem)</p>
  <p class="vel-text-lg" style="color:#e2e8f0">vel-text-lg — Large (1.125rem)</p>
  <p class="vel-text-xl" style="color:#e2e8f0">vel-text-xl — X-Large (1.25rem)</p>
  <p class="vel-text-2xl" style="color:#c4b5fd">vel-text-2xl — 2X-Large (1.5rem)</p>
  <p class="vel-text-3xl" style="color:#c4b5fd">vel-text-3xl — 3X-Large (1.875rem)</p>
  <p class="vel-text-4xl" style="color:#a87fff">vel-text-4xl (2.25rem)</p>
</div>`,
        },
      ]}
    />
  )
}
