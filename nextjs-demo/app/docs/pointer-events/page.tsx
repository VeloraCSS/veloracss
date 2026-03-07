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
  <button style="padding:0.75rem 1.5rem;background:#7c5cfc;color:#fff;border-radius:0.5rem;border:none;cursor:pointer">
    Clickable button
  </button>
  <div class="vel-pointer-events-none" style="position:absolute;inset:0;background:rgba(255,0,0,0.1);border-radius:0.5rem">
    <!-- This overlay won't block clicks -->
  </div>
</div>`,
        },
        {
          label: 'Disabled interactive element',
          html: `<a class="vel-pointer-events-none" href="#" style="color:#64748b;text-decoration:none;padding:0.5rem 1rem;display:inline-block;opacity:0.5">
  Disabled link (non-clickable)
</a>`,
        },
      ]}
    />
  )
}
