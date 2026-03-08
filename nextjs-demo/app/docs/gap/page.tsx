import DocPage from '../_components/DocPage'

export default function GapPage() {
  return (
    <DocPage
      title="Gap"
      description="Utilities for controlling gutters between grid and flexbox items."
      source="flexbox.css"
      table={[
        { class: 'vel-gap-0', properties: 'gap: 0px' },
        { class: 'vel-gap-1', properties: 'gap: 0.25rem' },
        { class: 'vel-gap-2', properties: 'gap: 0.5rem' },
        { class: 'vel-gap-3', properties: 'gap: 0.75rem' },
        { class: 'vel-gap-4', properties: 'gap: 1rem' },
        { class: 'vel-gap-5', properties: 'gap: 1.25rem' },
        { class: 'vel-gap-6', properties: 'gap: 1.5rem' },
        { class: 'vel-gap-8', properties: 'gap: 2rem' },
        { class: 'vel-gap-10', properties: 'gap: 2.5rem' },
        { class: 'vel-gap-12', properties: 'gap: 3rem' },
        { class: 'vel-gap-16', properties: 'gap: 4rem' },
        { class: 'vel-gap-x-4', properties: 'column-gap: 1rem' },
        { class: 'vel-gap-y-4', properties: 'row-gap: 1rem' },
      ]}
      examples={[
        {
          label: 'Gap sizes',
          html: `<div class="vel-flex vel-flex-col vel-gap-4">
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-gap-2</p>
    <div class="vel-flex vel-gap-2">
      <div class="vel-bg-primary vel-text-white vel-rounded-md" style="padding:10px 18px">A</div>
      <div class="vel-bg-primary vel-text-white vel-rounded-md" style="padding:10px 18px">B</div>
      <div class="vel-bg-primary vel-text-white vel-rounded-md" style="padding:10px 18px">C</div>
    </div>
  </div>
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-gap-8</p>
    <div class="vel-flex vel-gap-8">
      <div class="vel-bg-success vel-text-white vel-rounded-md" style="padding:10px 18px">A</div>
      <div class="vel-bg-success vel-text-white vel-rounded-md" style="padding:10px 18px">B</div>
      <div class="vel-bg-success vel-text-white vel-rounded-md" style="padding:10px 18px">C</div>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
