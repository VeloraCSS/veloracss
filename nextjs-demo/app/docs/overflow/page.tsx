import DocPage from '../_components/DocPage'

export default function OverflowPage() {
  return (
    <DocPage
      title="Overflow"
      description="Utilities for controlling how an element handles content that is too large for the container."
      source="layout.css"
      table={[
        { class: 'vel-overflow-auto', properties: 'overflow: auto' },
        { class: 'vel-overflow-hidden', properties: 'overflow: hidden' },
        { class: 'vel-overflow-visible', properties: 'overflow: visible' },
        { class: 'vel-overflow-scroll', properties: 'overflow: scroll' },
        { class: 'vel-overflow-x-auto', properties: 'overflow-x: auto' },
        { class: 'vel-overflow-x-hidden', properties: 'overflow-x: hidden' },
        { class: 'vel-overflow-y-auto', properties: 'overflow-y: auto' },
        { class: 'vel-overflow-y-hidden', properties: 'overflow-y: hidden' },
        { class: 'vel-overflow-y-scroll', properties: 'overflow-y: scroll' },
      ]}
      examples={[
        {
          label: 'Overflow hidden vs scroll',
          html: `<div class="vel-flex vel-gap-4">
  <div>
    <p style="color:#64748b;font-size:12px;margin-bottom:6px">vel-overflow-hidden</p>
    <div class="vel-overflow-hidden" style="width:150px;height:80px;background:#1a2236;border:1px solid #1e2d45;border-radius:6px;padding:8px">
      <div style="width:300px;color:#94a3b8;font-size:12px">This content is wider than its container and gets clipped.</div>
    </div>
  </div>
  <div>
    <p style="color:#64748b;font-size:12px;margin-bottom:6px">vel-overflow-auto</p>
    <div class="vel-overflow-auto" style="width:150px;height:80px;background:#1a2236;border:1px solid #1e2d45;border-radius:6px;padding:8px">
      <div style="width:300px;color:#94a3b8;font-size:12px">This content is wider than its container and scrolls.</div>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
