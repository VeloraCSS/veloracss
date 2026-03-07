import DocPage from '../_components/DocPage'

export default function BorderColorPage() {
  return (
    <DocPage
      title="Border Color"
      description="Utilities for controlling the color of an element's borders."
      source="borders.css"
      table={[
        { class: 'vel-border-primary', properties: 'border-color: var(--vel-color-primary)' },
        { class: 'vel-border-secondary', properties: 'border-color: var(--vel-color-secondary)' },
        { class: 'vel-border-success', properties: 'border-color: var(--vel-color-success)' },
        { class: 'vel-border-danger', properties: 'border-color: var(--vel-color-danger)' },
        { class: 'vel-border-warning', properties: 'border-color: var(--vel-color-warning)' },
        { class: 'vel-border-info', properties: 'border-color: var(--vel-color-info)' },
        { class: 'vel-border-neutral-200', properties: 'border-color: var(--vel-neutral-200)' },
        { class: 'vel-border-neutral-400', properties: 'border-color: var(--vel-neutral-400)' },
        { class: 'vel-border-neutral-600', properties: 'border-color: var(--vel-neutral-600)' },
        { class: 'vel-border-neutral-800', properties: 'border-color: var(--vel-neutral-800)' },
        { class: 'vel-border-white', properties: 'border-color: #ffffff' },
        { class: 'vel-border-black', properties: 'border-color: #000000' },
        { class: 'vel-border-transparent', properties: 'border-color: transparent' },
      ]}
      examples={[
        {
          label: 'Semantic border colors',
          html: `<div style="display:flex;gap:10px;padding:1rem;background:#060b17;flex-wrap:wrap;">
  <div class="vel-border-2 vel-border-solid vel-border-primary vel-rounded-md" style="width:56px;height:56px;background:#0d1422;"></div>
  <div class="vel-border-2 vel-border-solid vel-border-secondary vel-rounded-md" style="width:56px;height:56px;background:#0d1422;"></div>
  <div class="vel-border-2 vel-border-solid vel-border-success vel-rounded-md" style="width:56px;height:56px;background:#0d1422;"></div>
  <div class="vel-border-2 vel-border-solid vel-border-danger vel-rounded-md" style="width:56px;height:56px;background:#0d1422;"></div>
  <div class="vel-border-2 vel-border-solid vel-border-warning vel-rounded-md" style="width:56px;height:56px;background:#0d1422;"></div>
  <div class="vel-border-2 vel-border-solid vel-border-info vel-rounded-md" style="width:56px;height:56px;background:#0d1422;"></div>
</div>`,
        },
      ]}
    />
  )
}
