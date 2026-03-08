import DocPage from '../_components/DocPage'

export default function AlignSelfPage() {
  return (
    <DocPage
      title="Align Self"
      description="Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis."
      source="flexbox.css"
      table={[
        { class: 'vel-self-auto', properties: 'align-self: auto' },
        { class: 'vel-self-start', properties: 'align-self: flex-start' },
        { class: 'vel-self-end', properties: 'align-self: flex-end' },
        { class: 'vel-self-center', properties: 'align-self: center' },
        { class: 'vel-self-stretch', properties: 'align-self: stretch' },
        { class: 'vel-self-baseline', properties: 'align-self: baseline' },
      ]}
      examples={[
        {
          label: 'Per-item cross-axis alignment',
          html: `<div class="vel-flex vel-gap-3" style="background:#1a2236;padding:12px;border-radius:6px;height:120px">
  <div class="vel-self-start vel-bg-primary vel-text-white vel-rounded-md" style="padding:8px 14px;font-size:12px">self-start</div>
  <div class="vel-self-center vel-bg-success vel-text-white vel-rounded-md" style="padding:8px 14px;font-size:12px">self-center</div>
  <div class="vel-self-end vel-bg-danger vel-text-white vel-rounded-md" style="padding:8px 14px;font-size:12px">self-end</div>
  <div class="vel-self-stretch vel-bg-info vel-text-white vel-rounded-md vel-flex vel-items-center" style="padding:8px 14px;font-size:12px">self-stretch</div>
</div>`,
        },
      ]}
    />
  )
}
