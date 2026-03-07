import DocPage from '../_components/DocPage'

export default function OverscrollBehaviorPage() {
  return (
    <DocPage
      title="Overscroll Behavior"
      description="Utilities for controlling how the browser behaves when reaching the boundary of a scrolling area."
      source="layout.css"
      table={[
        { class: 'vel-overscroll-auto', properties: 'overscroll-behavior: auto' },
        { class: 'vel-overscroll-contain', properties: 'overscroll-behavior: contain' },
        { class: 'vel-overscroll-none', properties: 'overscroll-behavior: none' },
      ]}
      examples={[
        {
          label: 'Overscroll contain',
          html: `<div class="vel-overscroll-contain vel-overflow-auto" style="height:80px;background:#1a2236;border:1px solid #1e2d45;border-radius:6px;padding:12px">
  <div style="height:200px;color:#94a3b8;font-size:12px">
    Scrollable content with vel-overscroll-contain — prevents scroll chaining to parent.
    Keep scrolling...
    More content...
    Even more...
  </div>
</div>`,
        },
      ]}
    />
  )
}
