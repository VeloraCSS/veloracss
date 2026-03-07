import DocPage from '../_components/DocPage'

export default function RingPage() {
  return (
    <DocPage
      title="Ring"
      description="Utilities for adding box-shadow focus rings to elements."
      source="ring.css"
      table={[
        { class: 'vel-ring', properties: 'box-shadow: 0 0 0 3px var(--vel-ring-color, rgba(124,92,252,0.5))' },
        { class: 'vel-ring-0', properties: 'box-shadow: 0 0 0 0px var(--vel-ring-color)' },
        { class: 'vel-ring-1', properties: 'box-shadow: 0 0 0 1px var(--vel-ring-color)' },
        { class: 'vel-ring-2', properties: 'box-shadow: 0 0 0 2px var(--vel-ring-color)' },
        { class: 'vel-ring-4', properties: 'box-shadow: 0 0 0 4px var(--vel-ring-color)' },
        { class: 'vel-ring-8', properties: 'box-shadow: 0 0 0 8px var(--vel-ring-color)' },
        { class: 'vel-ring-inset', properties: 'box-shadow: inset 0 0 0 3px var(--vel-ring-color)' },
        { class: 'vel-ring-primary', properties: '--vel-ring-color: var(--vel-color-primary)' },
        { class: 'vel-ring-success', properties: '--vel-ring-color: var(--vel-color-success)' },
        { class: 'vel-ring-danger', properties: '--vel-ring-color: var(--vel-color-danger)' },
        { class: 'vel-ring-warning', properties: '--vel-ring-color: var(--vel-color-warning)' },
        { class: 'vel-ring-info', properties: '--vel-ring-color: var(--vel-color-info)' },
        { class: 'vel-ring-white', properties: '--vel-ring-color: #ffffff' },
        { class: 'vel-ring-black', properties: '--vel-ring-color: #000000' },
        { class: 'vel-ring-offset-0', properties: 'box-shadow: 0 0 0 0px var(--vel-ring-offset-color, #060b17), 0 0 0 3px var(--vel-ring-color)' },
        { class: 'vel-ring-offset-1', properties: 'box-shadow: 0 0 0 1px var(--vel-ring-offset-color, #060b17), 0 0 0 4px var(--vel-ring-color)' },
        { class: 'vel-ring-offset-2', properties: 'box-shadow: 0 0 0 2px var(--vel-ring-offset-color, #060b17), 0 0 0 5px var(--vel-ring-color)' },
        { class: 'vel-ring-offset-4', properties: 'box-shadow: 0 0 0 4px var(--vel-ring-offset-color, #060b17), 0 0 0 7px var(--vel-ring-color)' },
        { class: 'vel-ring-offset-primary', properties: '--vel-ring-offset-color: var(--vel-color-primary)' },
        { class: 'vel-ring-offset-neutral-900', properties: '--vel-ring-offset-color: var(--vel-neutral-900)' },
      ]}
      examples={[
        {
          label: 'Ring sizes',
          html: `<div style="display:flex;gap:20px;padding:1.5rem;background:#060b17;flex-wrap:wrap;align-items:center;">
  <button class="vel-ring-1 vel-ring-primary vel-rounded-md" style="padding:8px 16px;background:#0d1422;color:#e2e8f0;border:none;cursor:pointer;">ring-1</button>
  <button class="vel-ring-2 vel-ring-primary vel-rounded-md" style="padding:8px 16px;background:#0d1422;color:#e2e8f0;border:none;cursor:pointer;">ring-2</button>
  <button class="vel-ring vel-ring-primary vel-rounded-md" style="padding:8px 16px;background:#0d1422;color:#e2e8f0;border:none;cursor:pointer;">ring (3px)</button>
  <button class="vel-ring-4 vel-ring-primary vel-rounded-md" style="padding:8px 16px;background:#0d1422;color:#e2e8f0;border:none;cursor:pointer;">ring-4</button>
  <button class="vel-ring-8 vel-ring-primary vel-rounded-md" style="padding:8px 16px;background:#0d1422;color:#e2e8f0;border:none;cursor:pointer;">ring-8</button>
</div>`,
        },
        {
          label: 'Semantic ring colors',
          html: `<div style="display:flex;gap:20px;padding:1.5rem;background:#060b17;flex-wrap:wrap;align-items:center;">
  <button class="vel-ring-2 vel-ring-primary vel-rounded-md" style="padding:8px 16px;background:#0d1422;color:#e2e8f0;border:none;cursor:pointer;">Primary</button>
  <button class="vel-ring-2 vel-ring-success vel-rounded-md" style="padding:8px 16px;background:#0d1422;color:#e2e8f0;border:none;cursor:pointer;">Success</button>
  <button class="vel-ring-2 vel-ring-danger vel-rounded-md" style="padding:8px 16px;background:#0d1422;color:#e2e8f0;border:none;cursor:pointer;">Danger</button>
  <button class="vel-ring-2 vel-ring-warning vel-rounded-md" style="padding:8px 16px;background:#0d1422;color:#e2e8f0;border:none;cursor:pointer;">Warning</button>
  <button class="vel-ring-2 vel-ring-info vel-rounded-md" style="padding:8px 16px;background:#0d1422;color:#e2e8f0;border:none;cursor:pointer;">Info</button>
</div>`,
        },
        {
          label: 'Ring with offset',
          html: `<div style="display:flex;gap:20px;padding:1.5rem;background:#060b17;flex-wrap:wrap;align-items:center;">
  <button class="vel-ring-2 vel-ring-primary vel-ring-offset-2 vel-rounded-md" style="padding:8px 16px;background:#111827;color:#e2e8f0;border:none;cursor:pointer;">offset-2</button>
  <button class="vel-ring-2 vel-ring-success vel-ring-offset-4 vel-rounded-md" style="padding:8px 16px;background:#111827;color:#e2e8f0;border:none;cursor:pointer;">offset-4</button>
  <button class="vel-ring-inset vel-ring-primary vel-rounded-md" style="padding:8px 16px;background:#111827;color:#e2e8f0;border:none;cursor:pointer;">inset</button>
</div>`,
        },
      ]}
    />
  )
}
