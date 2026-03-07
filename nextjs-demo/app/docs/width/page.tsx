import DocPage from '../_components/DocPage'

export default function WidthPage() {
  return (
    <DocPage
      title="Width"
      description="Utilities for setting the width of an element."
      source="sizing.css"
      table={[
        { class: 'vel-w-0', properties: 'width: 0px' },
        { class: 'vel-w-auto', properties: 'width: auto' },
        { class: 'vel-w-full', properties: 'width: 100%' },
        { class: 'vel-w-screen', properties: 'width: 100vw' },
        { class: 'vel-w-min', properties: 'width: min-content' },
        { class: 'vel-w-max', properties: 'width: max-content' },
        { class: 'vel-w-fit', properties: 'width: fit-content' },
        { class: 'vel-w-1', properties: 'width: 0.25rem' },
        { class: 'vel-w-2', properties: 'width: 0.5rem' },
        { class: 'vel-w-4', properties: 'width: 1rem' },
        { class: 'vel-w-8', properties: 'width: 2rem' },
        { class: 'vel-w-16', properties: 'width: 4rem' },
        { class: 'vel-w-32', properties: 'width: 8rem' },
        { class: 'vel-w-64', properties: 'width: 16rem' },
        { class: 'vel-w-1/2', properties: 'width: 50%' },
        { class: 'vel-w-1/3', properties: 'width: 33.333%' },
        { class: 'vel-w-2/3', properties: 'width: 66.667%' },
        { class: 'vel-w-1/4', properties: 'width: 25%' },
        { class: 'vel-w-3/4', properties: 'width: 75%' },
      ]}
      examples={[
        {
          label: 'Width scale',
          html: `<div class="vel-flex vel-flex-col vel-gap-2">
  <div class="vel-w-1/4" style="background:#7c5cfc;color:#fff;padding:8px;border-radius:6px;font-size:12px">w-1/4</div>
  <div class="vel-w-1/2" style="background:#7c5cfc;color:#fff;padding:8px;border-radius:6px;font-size:12px">w-1/2</div>
  <div class="vel-w-3/4" style="background:#7c5cfc;color:#fff;padding:8px;border-radius:6px;font-size:12px">w-3/4</div>
  <div class="vel-w-full" style="background:#7c5cfc;color:#fff;padding:8px;border-radius:6px;font-size:12px">w-full</div>
</div>`,
        },
      ]}
    />
  )
}
