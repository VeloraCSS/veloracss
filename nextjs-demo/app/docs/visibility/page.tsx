import DocPage from '../_components/DocPage'

export default function VisibilityPage() {
  return (
    <DocPage
      title="Visibility"
      description="Utilities for controlling the visibility of an element."
      source="layout.css"
      table={[
        { class: 'vel-visible', properties: 'visibility: visible' },
        { class: 'vel-invisible', properties: 'visibility: hidden' },
        { class: 'vel-collapse', properties: 'visibility: collapse' },
      ]}
      examples={[
        {
          label: 'Visible vs invisible',
          html: `<div class="vel-flex vel-gap-4 vel-items-center">
  <div class="vel-visible" style="background:#7c5cfc;color:#fff;padding:12px 20px;border-radius:6px">vel-visible</div>
  <div class="vel-invisible" style="background:#f0416c;color:#fff;padding:12px 20px;border-radius:6px">vel-invisible (hidden, takes space)</div>
  <div style="background:#0ecb81;color:#fff;padding:12px 20px;border-radius:6px">still here</div>
</div>`,
        },
      ]}
    />
  )
}
