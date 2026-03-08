import DocPage from '../_components/DocPage'

export default function PointerEventsPage() {
  return (
    <DocPage
      title="Pointer Events"
      description="Utilities for controlling whether an element responds to pointer events."
      source="interactivity.css"
      table={[
        { class: 'vel-pointer-events-none', properties: 'pointer-events: none' },
        { class: 'vel-pointer-events-auto', properties: 'pointer-events: auto' },
      ]}
      examples={[
        {
          label: 'Overlay that passes clicks through',
          html: `<div style="position:relative;display:inline-block">
  <button class="vel-btn vel-btn-primary">
    Clickable button
  </button>
  <div class="vel-pointer-events-none vel-absolute" style="inset:0;background:rgba(255,0,0,0.1);border-radius:0.5rem">
    <!-- This overlay won't block clicks -->
  </div>
</div>`,
        },
        {
          label: 'Disabled interactive element',
          html: `<a class="vel-pointer-events-none vel-text-muted vel-inline-block vel-opacity-50" href="#" style="text-decoration:none;padding:0.5rem 1rem">
  Disabled link (non-clickable)
</a>`,
        },
      ]}
    />
  )
}
