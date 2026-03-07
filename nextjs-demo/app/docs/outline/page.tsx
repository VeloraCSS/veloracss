import DocPage from '../_components/DocPage'

export default function OutlinePage() {
  return (
    <DocPage
      title="Outline"
      description="Utilities for controlling the outline of an element."
      source="borders.css"
      table={[
        { class: 'vel-outline-none', properties: 'outline: none' },
        { class: 'vel-outline', properties: 'outline: 2px solid currentColor' },
        { class: 'vel-outline-2', properties: 'outline-width: 2px' },
        { class: 'vel-outline-4', properties: 'outline-width: 4px' },
        { class: 'vel-outline-offset-0', properties: 'outline-offset: 0px' },
        { class: 'vel-outline-offset-1', properties: 'outline-offset: 1px' },
        { class: 'vel-outline-offset-2', properties: 'outline-offset: 2px' },
        { class: 'vel-outline-offset-4', properties: 'outline-offset: 4px' },
        { class: 'vel-outline-primary', properties: 'outline-color: var(--vel-color-primary)' },
        { class: 'vel-outline-success', properties: 'outline-color: var(--vel-color-success)' },
        { class: 'vel-outline-danger', properties: 'outline-color: var(--vel-color-danger)' },
      ]}
      examples={[
        {
          label: 'Outline with offset',
          html: `<div style="display:flex;gap:20px;padding:1.5rem;background:#060b17;flex-wrap:wrap;align-items:center;">
  <button class="vel-outline vel-outline-primary vel-outline-offset-2 vel-rounded-md" style="padding:8px 16px;background:#0d1422;color:#e2e8f0;border:none;cursor:pointer;">Primary</button>
  <button class="vel-outline vel-outline-success vel-outline-offset-2 vel-rounded-md" style="padding:8px 16px;background:#0d1422;color:#e2e8f0;border:none;cursor:pointer;">Success</button>
  <button class="vel-outline vel-outline-danger vel-outline-offset-2 vel-rounded-md" style="padding:8px 16px;background:#0d1422;color:#e2e8f0;border:none;cursor:pointer;">Danger</button>
  <button class="vel-outline-none vel-rounded-md" style="padding:8px 16px;background:#0d1422;color:#64748b;border:none;cursor:pointer;">No outline</button>
</div>`,
        },
      ]}
    />
  )
}
