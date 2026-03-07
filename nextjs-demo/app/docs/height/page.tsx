import DocPage from '../_components/DocPage'

export default function HeightPage() {
  return (
    <DocPage
      title="Height"
      description="Utilities for setting the height of an element."
      source="sizing.css"
      table={[
        { class: 'vel-h-0', properties: 'height: 0px' },
        { class: 'vel-h-auto', properties: 'height: auto' },
        { class: 'vel-h-full', properties: 'height: 100%' },
        { class: 'vel-h-screen', properties: 'height: 100vh' },
        { class: 'vel-h-min', properties: 'height: min-content' },
        { class: 'vel-h-max', properties: 'height: max-content' },
        { class: 'vel-h-fit', properties: 'height: fit-content' },
        { class: 'vel-h-1', properties: 'height: 0.25rem' },
        { class: 'vel-h-2', properties: 'height: 0.5rem' },
        { class: 'vel-h-4', properties: 'height: 1rem' },
        { class: 'vel-h-8', properties: 'height: 2rem' },
        { class: 'vel-h-16', properties: 'height: 4rem' },
        { class: 'vel-h-32', properties: 'height: 8rem' },
        { class: 'vel-h-64', properties: 'height: 16rem' },
      ]}
      examples={[
        {
          label: 'Height variants',
          html: `<div class="vel-flex vel-items-end vel-gap-4">
  <div style="background:#1a2236;border:1px solid #1e2d45;border-radius:6px;display:flex;flex-direction:column;justify-content:flex-end">
    <div class="vel-h-8" style="background:#7c5cfc;border-radius:4px;width:60px"></div>
    <p style="color:#64748b;font-size:11px;text-align:center;margin-top:4px">h-8</p>
  </div>
  <div style="background:#1a2236;border:1px solid #1e2d45;border-radius:6px;display:flex;flex-direction:column;justify-content:flex-end">
    <div class="vel-h-16" style="background:#0ecb81;border-radius:4px;width:60px"></div>
    <p style="color:#64748b;font-size:11px;text-align:center;margin-top:4px">h-16</p>
  </div>
  <div style="background:#1a2236;border:1px solid #1e2d45;border-radius:6px;display:flex;flex-direction:column;justify-content:flex-end">
    <div class="vel-h-24" style="background:#f0416c;border-radius:4px;width:60px"></div>
    <p style="color:#64748b;font-size:11px;text-align:center;margin-top:4px">h-24</p>
  </div>
</div>`,
        },
      ]}
    />
  )
}
