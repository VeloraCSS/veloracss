import DocPage from '../_components/DocPage'

export default function IsolationPage() {
  return (
    <DocPage
      title="Isolation"
      description="Utilities for controlling whether an element should explicitly create a new stacking context."
      source="layout.css"
      table={[
        { class: 'vel-isolate', properties: 'isolation: isolate' },
        { class: 'vel-isolation-auto', properties: 'isolation: auto' },
      ]}
      examples={[
        {
          label: 'Isolation',
          html: `<div class="vel-flex vel-gap-4">
  <div class="vel-isolate" style="background:#1a2236;border:1px solid #1e2d45;padding:12px;border-radius:6px">
    <p style="color:#a87fff;font-size:12px">vel-isolate creates new stacking context</p>
  </div>
  <div class="vel-isolation-auto" style="background:#1a2236;border:1px solid #1e2d45;padding:12px;border-radius:6px">
    <p style="color:#94a3b8;font-size:12px">vel-isolation-auto — default</p>
  </div>
</div>`,
        },
      ]}
    />
  )
}
