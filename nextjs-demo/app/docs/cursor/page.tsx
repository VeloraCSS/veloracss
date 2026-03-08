import DocPage from '../_components/DocPage'

export default function CursorPage() {
  return (
    <DocPage
      title="Cursor"
      description="Utilities for controlling the cursor style."
      source="interactivity.css"
      table={[
        { class: 'vel-cursor-auto', properties: 'cursor: auto' },
        { class: 'vel-cursor-default', properties: 'cursor: default' },
        { class: 'vel-cursor-pointer', properties: 'cursor: pointer' },
        { class: 'vel-cursor-wait', properties: 'cursor: wait' },
        { class: 'vel-cursor-text', properties: 'cursor: text' },
        { class: 'vel-cursor-move', properties: 'cursor: move' },
        { class: 'vel-cursor-help', properties: 'cursor: help' },
        { class: 'vel-cursor-not-allowed', properties: 'cursor: not-allowed' },
        { class: 'vel-cursor-grab', properties: 'cursor: grab' },
        { class: 'vel-cursor-grabbing', properties: 'cursor: grabbing' },
        { class: 'vel-cursor-crosshair', properties: 'cursor: crosshair' },
        { class: 'vel-cursor-zoom-in', properties: 'cursor: zoom-in' },
        { class: 'vel-cursor-zoom-out', properties: 'cursor: zoom-out' },
        { class: 'vel-cursor-none', properties: 'cursor: none' },
      ]}
      examples={[
        {
          label: 'Pointer cursor on interactive element',
          html: `<button class="vel-cursor-pointer vel-btn vel-btn-primary">
  Click me
</button>`,
        },
        {
          label: 'Disabled state with not-allowed cursor',
          html: `<button class="vel-cursor-not-allowed vel-btn vel-btn-outline-primary vel-opacity-50" disabled>
  Disabled
</button>`,
        },
        {
          label: 'Grab cursor for draggable items',
          html: `<div class="vel-cursor-grab vel-bg-surface-1 vel-text-base vel-rounded-lg vel-inline-block" style="padding:1rem;border:1px solid #1e2d45">
  Drag me
</div>`,
        },
      ]}
    />
  )
}
