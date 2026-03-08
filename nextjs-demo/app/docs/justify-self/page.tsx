import DocPage from '../_components/DocPage'

export default function JustifySelfPage() {
  return (
    <DocPage
      title="Justify Self"
      description="Utilities for controlling how an individual grid item is aligned along its inline axis."
      source="flexbox.css"
      table={[
        { class: 'vel-justify-self-auto', properties: 'justify-self: auto' },
        { class: 'vel-justify-self-start', properties: 'justify-self: start' },
        { class: 'vel-justify-self-end', properties: 'justify-self: end' },
        { class: 'vel-justify-self-center', properties: 'justify-self: center' },
        { class: 'vel-justify-self-stretch', properties: 'justify-self: stretch' },
      ]}
      examples={[
        {
          label: 'Per-item inline alignment',
          html: `<div class="vel-grid vel-grid-cols-3 vel-gap-3" style="background:#1a2236;padding:12px;border-radius:6px">
  <div class="vel-justify-self-start vel-bg-primary vel-text-white vel-rounded-md" style="padding:8px 14px;font-size:12px">self-start</div>
  <div class="vel-justify-self-center vel-bg-success vel-text-white vel-rounded-md" style="padding:8px 14px;font-size:12px">self-center</div>
  <div class="vel-justify-self-end vel-bg-danger vel-text-white vel-rounded-md" style="padding:8px 14px;font-size:12px">self-end</div>
</div>`,
        },
      ]}
    />
  )
}
