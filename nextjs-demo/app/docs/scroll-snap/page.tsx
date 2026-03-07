import DocPage from '../_components/DocPage'

export default function ScrollSnapPage() {
  return (
    <DocPage
      title="Scroll Snap"
      description="Utilities for controlling scroll snap behavior in scroll containers and their children."
      source="interactivity.css"
      table={[
        { class: 'vel-snap-start', properties: 'scroll-snap-align: start' },
        { class: 'vel-snap-end', properties: 'scroll-snap-align: end' },
        { class: 'vel-snap-center', properties: 'scroll-snap-align: center' },
        { class: 'vel-snap-none', properties: 'scroll-snap-align: none' },
        { class: 'vel-snap-x', properties: 'scroll-snap-type: x mandatory' },
        { class: 'vel-snap-y', properties: 'scroll-snap-type: y mandatory' },
        { class: 'vel-snap-both', properties: 'scroll-snap-type: both mandatory' },
        { class: 'vel-snap-mandatory', properties: 'scroll-snap-type: var(--vel-scroll-snap-axis, both) mandatory' },
        { class: 'vel-snap-proximity', properties: 'scroll-snap-type: var(--vel-scroll-snap-axis, both) proximity' },
      ]}
      examples={[
        {
          label: 'Horizontal scroll snap carousel',
          html: `<div class="vel-snap-x" style="display:flex;overflow-x:auto;gap:1rem;padding:1rem;background:#060b17;border:1px solid #1e2d45;border-radius:0.5rem;scroll-snap-type:x mandatory">
  <div class="vel-snap-start" style="flex-shrink:0;width:16rem;height:8rem;background:#0d1422;border:1px solid #1e2d45;border-radius:0.5rem;display:flex;align-items:center;justify-content:center;color:#a87fff">Slide 1</div>
  <div class="vel-snap-start" style="flex-shrink:0;width:16rem;height:8rem;background:#0d1422;border:1px solid #1e2d45;border-radius:0.5rem;display:flex;align-items:center;justify-content:center;color:#a87fff">Slide 2</div>
  <div class="vel-snap-start" style="flex-shrink:0;width:16rem;height:8rem;background:#0d1422;border:1px solid #1e2d45;border-radius:0.5rem;display:flex;align-items:center;justify-content:center;color:#a87fff">Slide 3</div>
</div>`,
        },
      ]}
    />
  )
}
