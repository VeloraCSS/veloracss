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
  <div class="vel-visible vel-bg-primary vel-text-white vel-rounded-md" style="padding:12px 20px">vel-visible</div>
  <div class="vel-invisible vel-bg-danger vel-text-white vel-rounded-md" style="padding:12px 20px">vel-invisible (hidden, takes space)</div>
  <div class="vel-bg-success vel-text-white vel-rounded-md" style="padding:12px 20px">still here</div>
</div>`,
        },
      ]}
    />
  )
}
