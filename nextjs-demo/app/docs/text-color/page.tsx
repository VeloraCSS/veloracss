import DocPage from '../_components/DocPage'

export default function TextColorPage() {
  return (
    <DocPage
      title="Text Color"
      description="Utilities for controlling the text color of an element."
      source="colors.css"
      table={[
        { class: 'vel-text-primary', properties: 'color: var(--vel-primary-500)' },
        { class: 'vel-text-secondary', properties: 'color: var(--vel-secondary-500)' },
        { class: 'vel-text-success', properties: 'color: var(--vel-success-500)' },
        { class: 'vel-text-danger', properties: 'color: var(--vel-danger-500)' },
        { class: 'vel-text-warning', properties: 'color: var(--vel-warning-500)' },
        { class: 'vel-text-info', properties: 'color: var(--vel-info-500)' },
        { class: 'vel-text-white', properties: 'color: #ffffff' },
        { class: 'vel-text-black', properties: 'color: #000000' },
        { class: 'vel-text-neutral-50', properties: 'color: var(--vel-neutral-50)' },
        { class: 'vel-text-neutral-100', properties: 'color: var(--vel-neutral-100)' },
        { class: 'vel-text-neutral-200', properties: 'color: var(--vel-neutral-200)' },
        { class: 'vel-text-neutral-300', properties: 'color: var(--vel-neutral-300)' },
        { class: 'vel-text-neutral-400', properties: 'color: var(--vel-neutral-400)' },
        { class: 'vel-text-neutral-500', properties: 'color: var(--vel-neutral-500)' },
        { class: 'vel-text-neutral-600', properties: 'color: var(--vel-neutral-600)' },
        { class: 'vel-text-neutral-700', properties: 'color: var(--vel-neutral-700)' },
        { class: 'vel-text-neutral-800', properties: 'color: var(--vel-neutral-800)' },
        { class: 'vel-text-neutral-900', properties: 'color: var(--vel-neutral-900)' },
      ]}
      examples={[
        {
          label: 'Semantic text colors',
          html: `<div style="display:flex;flex-direction:column;gap:0.5rem;background:#060b17;padding:1.25rem;border-radius:0.5rem">
  <p class="vel-text-primary" style="margin:0">vel-text-primary — Velora Violet</p>
  <p class="vel-text-success" style="margin:0">vel-text-success — Emerald</p>
  <p class="vel-text-danger" style="margin:0">vel-text-danger — Rose</p>
  <p class="vel-text-warning" style="margin:0">vel-text-warning — Amber</p>
  <p class="vel-text-info" style="margin:0">vel-text-info — Sky</p>
  <p class="vel-text-secondary" style="margin:0">vel-text-secondary — Slate</p>
</div>`,
        },
        {
          label: 'Neutral scale text',
          html: `<div style="display:flex;flex-direction:column;gap:0.25rem;background:#060b17;padding:1.25rem;border-radius:0.5rem">
  <p class="vel-text-neutral-900" style="margin:0">vel-text-neutral-900 (darkest)</p>
  <p class="vel-text-neutral-700" style="margin:0">vel-text-neutral-700</p>
  <p class="vel-text-neutral-500" style="margin:0">vel-text-neutral-500</p>
  <p class="vel-text-neutral-300" style="margin:0">vel-text-neutral-300</p>
  <p class="vel-text-neutral-100" style="margin:0">vel-text-neutral-100 (lightest)</p>
</div>`,
        },
        {
          label: 'Hover text color change',
          html: `<a class="vel-text-neutral-400 vel-hover:text-primary vel-transition-colors vel-duration-150" href="#" style="text-decoration:none">
  Hover to see color change
</a>`,
        },
      ]}
    />
  )
}
