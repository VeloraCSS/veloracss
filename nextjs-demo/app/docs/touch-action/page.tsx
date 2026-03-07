import DocPage from '../_components/DocPage'

export default function TouchActionPage() {
  return (
    <DocPage
      title="Touch Action"
      description="Utilities for controlling how an element responds to touch input on mobile devices."
      source="interactivity.css"
      table={[
        { class: 'vel-touch-auto', properties: 'touch-action: auto' },
        { class: 'vel-touch-none', properties: 'touch-action: none' },
        { class: 'vel-touch-pan-x', properties: 'touch-action: pan-x' },
        { class: 'vel-touch-pan-y', properties: 'touch-action: pan-y' },
        { class: 'vel-touch-manipulation', properties: 'touch-action: manipulation' },
      ]}
      examples={[
        {
          label: 'Disable touch scrolling on a map or canvas element',
          html: `<div class="vel-touch-none" style="width:100%;height:10rem;background:#060b17;border:1px solid #1e2d45;border-radius:0.5rem;display:flex;align-items:center;justify-content:center;color:#64748b">
  Touch events disabled (map / canvas area)
</div>`,
        },
        {
          label: 'Allow only vertical panning (e.g. in a horizontal slider)',
          html: `<div class="vel-touch-pan-y" style="overflow-y:auto;height:8rem;padding:1rem;background:#0d1422;border:1px solid #1e2d45;border-radius:0.5rem;color:#94a3b8">
  <p>Scrollable content</p>
  <p>Only vertical pan allowed on touch devices.</p>
  <p>Horizontal touch gestures are passed through to the parent.</p>
</div>`,
        },
      ]}
    />
  )
}
