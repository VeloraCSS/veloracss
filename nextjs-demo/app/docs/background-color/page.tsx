import DocPage from '../_components/DocPage'

export default function BackgroundColorPage() {
  return (
    <DocPage
      title="Background Color"
      description="Utilities for controlling an element's background color."
      source="colors.css"
      table={[
        { class: 'vel-bg-primary', properties: 'background-color: var(--vel-color-primary)' },
        { class: 'vel-bg-secondary', properties: 'background-color: var(--vel-color-secondary)' },
        { class: 'vel-bg-success', properties: 'background-color: var(--vel-color-success)' },
        { class: 'vel-bg-danger', properties: 'background-color: var(--vel-color-danger)' },
        { class: 'vel-bg-warning', properties: 'background-color: var(--vel-color-warning)' },
        { class: 'vel-bg-info', properties: 'background-color: var(--vel-color-info)' },
        { class: 'vel-bg-primary-light', properties: 'background-color: var(--vel-color-primary-light)' },
        { class: 'vel-bg-success-light', properties: 'background-color: var(--vel-color-success-light)' },
        { class: 'vel-bg-danger-light', properties: 'background-color: var(--vel-color-danger-light)' },
        { class: 'vel-bg-warning-light', properties: 'background-color: var(--vel-color-warning-light)' },
        { class: 'vel-bg-info-light', properties: 'background-color: var(--vel-color-info-light)' },
        { class: 'vel-bg-neutral-50', properties: 'background-color: var(--vel-neutral-50)' },
        { class: 'vel-bg-neutral-100', properties: 'background-color: var(--vel-neutral-100)' },
        { class: 'vel-bg-neutral-200', properties: 'background-color: var(--vel-neutral-200)' },
        { class: 'vel-bg-neutral-300', properties: 'background-color: var(--vel-neutral-300)' },
        { class: 'vel-bg-neutral-400', properties: 'background-color: var(--vel-neutral-400)' },
        { class: 'vel-bg-neutral-500', properties: 'background-color: var(--vel-neutral-500)' },
        { class: 'vel-bg-neutral-600', properties: 'background-color: var(--vel-neutral-600)' },
        { class: 'vel-bg-neutral-700', properties: 'background-color: var(--vel-neutral-700)' },
        { class: 'vel-bg-neutral-800', properties: 'background-color: var(--vel-neutral-800)' },
        { class: 'vel-bg-neutral-900', properties: 'background-color: var(--vel-neutral-900)' },
        { class: 'vel-bg-neutral-950', properties: 'background-color: var(--vel-neutral-950)' },
        { class: 'vel-bg-white', properties: 'background-color: #ffffff' },
        { class: 'vel-bg-black', properties: 'background-color: #000000' },
        { class: 'vel-bg-transparent', properties: 'background-color: transparent' },
      ]}
      examples={[
        {
          label: 'Semantic background colors',
          html: `<div style="display:flex;gap:8px;padding:1rem;background:#060b17;flex-wrap:wrap;">
  <div class="vel-bg-primary" style="width:60px;height:60px;border-radius:6px;"></div>
  <div class="vel-bg-secondary" style="width:60px;height:60px;border-radius:6px;"></div>
  <div class="vel-bg-success" style="width:60px;height:60px;border-radius:6px;"></div>
  <div class="vel-bg-danger" style="width:60px;height:60px;border-radius:6px;"></div>
  <div class="vel-bg-warning" style="width:60px;height:60px;border-radius:6px;"></div>
  <div class="vel-bg-info" style="width:60px;height:60px;border-radius:6px;"></div>
</div>`,
        },
        {
          label: 'Neutral scale',
          html: `<div style="display:flex;gap:4px;padding:1rem;background:#060b17;flex-wrap:wrap;">
  <div class="vel-bg-neutral-100" style="width:40px;height:40px;border-radius:4px;"></div>
  <div class="vel-bg-neutral-300" style="width:40px;height:40px;border-radius:4px;"></div>
  <div class="vel-bg-neutral-500" style="width:40px;height:40px;border-radius:4px;"></div>
  <div class="vel-bg-neutral-700" style="width:40px;height:40px;border-radius:4px;"></div>
  <div class="vel-bg-neutral-900" style="width:40px;height:40px;border-radius:4px;"></div>
</div>`,
        },
      ]}
    />
  )
}
