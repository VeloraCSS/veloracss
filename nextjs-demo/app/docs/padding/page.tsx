import DocPage from '../_components/DocPage'

export default function PaddingPage() {
  return (
    <DocPage
      title="Padding"
      description="Utilities for controlling an element's padding."
      source="spacing.css"
      table={[
        { class: 'vel-p-0', properties: 'padding: 0px' },
        { class: 'vel-p-1', properties: 'padding: 0.25rem' },
        { class: 'vel-p-2', properties: 'padding: 0.5rem' },
        { class: 'vel-p-3', properties: 'padding: 0.75rem' },
        { class: 'vel-p-4', properties: 'padding: 1rem' },
        { class: 'vel-p-5', properties: 'padding: 1.25rem' },
        { class: 'vel-p-6', properties: 'padding: 1.5rem' },
        { class: 'vel-p-8', properties: 'padding: 2rem' },
        { class: 'vel-p-10', properties: 'padding: 2.5rem' },
        { class: 'vel-p-12', properties: 'padding: 3rem' },
        { class: 'vel-p-16', properties: 'padding: 4rem' },
        { class: 'vel-px-4', properties: 'padding-left: 1rem; padding-right: 1rem' },
        { class: 'vel-py-4', properties: 'padding-top: 1rem; padding-bottom: 1rem' },
        { class: 'vel-pt-4', properties: 'padding-top: 1rem' },
        { class: 'vel-pr-4', properties: 'padding-right: 1rem' },
        { class: 'vel-pb-4', properties: 'padding-bottom: 1rem' },
        { class: 'vel-pl-4', properties: 'padding-left: 1rem' },
      ]}
      examples={[
        {
          label: 'Padding scale',
          html: `<div class="vel-flex vel-items-end vel-gap-4">
  <div class="vel-p-2" style="background:#7c5cfc20;border:1px dashed #7c5cfc60;border-radius:6px">
    <div style="background:#7c5cfc;color:#fff;border-radius:4px;font-size:12px">p-2</div>
  </div>
  <div class="vel-p-4" style="background:#7c5cfc20;border:1px dashed #7c5cfc60;border-radius:6px">
    <div style="background:#7c5cfc;color:#fff;border-radius:4px;font-size:12px">p-4</div>
  </div>
  <div class="vel-p-8" style="background:#7c5cfc20;border:1px dashed #7c5cfc60;border-radius:6px">
    <div style="background:#7c5cfc;color:#fff;border-radius:4px;font-size:12px">p-8</div>
  </div>
</div>`,
        },
        {
          label: 'Directional padding',
          html: `<div class="vel-flex vel-gap-4">
  <div class="vel-pt-8 vel-pb-2 vel-px-4" style="background:#0ecb8120;border:1px dashed #0ecb8160;border-radius:6px">
    <div style="background:#0ecb81;color:#fff;border-radius:4px;font-size:12px;padding:4px 8px">pt-8 pb-2 px-4</div>
  </div>
  <div class="vel-py-6 vel-px-2" style="background:#2ebde520;border:1px dashed #2ebde560;border-radius:6px">
    <div style="background:#2ebde5;color:#fff;border-radius:4px;font-size:12px;padding:4px 8px">py-6 px-2</div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
