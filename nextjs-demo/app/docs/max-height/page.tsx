import DocPage from '../_components/DocPage'

export default function MaxHeightPage() {
  return (
    <DocPage
      title="Max-Height"
      description="Utilities for setting the maximum height of an element."
      source="sizing.css"
      table={[
        { class: 'vel-max-h-none', properties: 'max-height: none' },
        { class: 'vel-max-h-full', properties: 'max-height: 100%' },
        { class: 'vel-max-h-screen', properties: 'max-height: 100vh' },
        { class: 'vel-max-h-fit', properties: 'max-height: fit-content' },
        { class: 'vel-max-h-16', properties: 'max-height: 4rem' },
        { class: 'vel-max-h-32', properties: 'max-height: 8rem' },
        { class: 'vel-max-h-64', properties: 'max-height: 16rem' },
        { class: 'vel-max-h-96', properties: 'max-height: 24rem' },
      ]}
      examples={[
        {
          label: 'Capped height with scroll',
          html: `<div class="vel-max-h-24 vel-overflow-auto" style="background:#1a2236;border:1px solid #1e2d45;border-radius:6px;padding:12px">
  <p style="color:#94a3b8;font-size:13px">vel-max-h-24 limits height to 6rem.</p>
  <p style="color:#64748b;font-size:13px;margin-top:8px">Content below gets scrolled.</p>
  <p style="color:#64748b;font-size:13px;margin-top:8px">More content here.</p>
  <p style="color:#64748b;font-size:13px;margin-top:8px">Even more content.</p>
</div>`,
        },
      ]}
    />
  )
}
