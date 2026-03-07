import DocPage from '../_components/DocPage'

export default function DividePage() {
  return (
    <DocPage
      title="Divide"
      description="Utilities for adding borders between child elements."
      source="divide.css"
      table={[
        { class: 'vel-divide-x', properties: '> * + * { border-left-width: 1px }' },
        { class: 'vel-divide-x-2', properties: '> * + * { border-left-width: 2px }' },
        { class: 'vel-divide-x-4', properties: '> * + * { border-left-width: 4px }' },
        { class: 'vel-divide-y', properties: '> * + * { border-top-width: 1px }' },
        { class: 'vel-divide-y-2', properties: '> * + * { border-top-width: 2px }' },
        { class: 'vel-divide-y-4', properties: '> * + * { border-top-width: 4px }' },
        { class: 'vel-divide-solid', properties: '> * + * { border-style: solid }' },
        { class: 'vel-divide-dashed', properties: '> * + * { border-style: dashed }' },
        { class: 'vel-divide-dotted', properties: '> * + * { border-style: dotted }' },
        { class: 'vel-divide-none', properties: '> * + * { border-style: none }' },
        { class: 'vel-divide-primary', properties: '> * + * { border-color: var(--vel-color-primary) }' },
        { class: 'vel-divide-neutral-300', properties: '> * + * { border-color: var(--vel-neutral-300) }' },
        { class: 'vel-divide-neutral-700', properties: '> * + * { border-color: var(--vel-neutral-700) }' },
      ]}
      examples={[
        {
          label: 'Horizontal divide (vel-divide-x)',
          html: `<div style="padding:1rem;background:#060b17;">
  <div class="vel-flex vel-divide-x vel-divide-solid vel-divide-primary" style="border-radius:6px;border:1px solid #1e2d45;overflow:hidden;">
    <div style="flex:1;padding:12px 16px;color:#e2e8f0;font-size:0.85rem;">Section A</div>
    <div style="flex:1;padding:12px 16px;color:#e2e8f0;font-size:0.85rem;">Section B</div>
    <div style="flex:1;padding:12px 16px;color:#e2e8f0;font-size:0.85rem;">Section C</div>
  </div>
</div>`,
        },
        {
          label: 'Vertical divide (vel-divide-y)',
          html: `<div style="padding:1rem;background:#060b17;">
  <div class="vel-divide-y vel-divide-solid vel-divide-neutral-700" style="border-radius:6px;border:1px solid #1e2d45;overflow:hidden;">
    <div style="padding:12px 16px;color:#e2e8f0;font-size:0.85rem;">Row 1</div>
    <div style="padding:12px 16px;color:#e2e8f0;font-size:0.85rem;">Row 2</div>
    <div style="padding:12px 16px;color:#e2e8f0;font-size:0.85rem;">Row 3</div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
