import DocPage from '../_components/DocPage'

export default function AspectRatioPage() {
  return (
    <DocPage
      title="Aspect Ratio"
      description="Utilities for controlling the aspect ratio of an element."
      source="layout.css"
      table={[
        { class: 'vel-aspect-auto', properties: 'aspect-ratio: auto' },
        { class: 'vel-aspect-square', properties: 'aspect-ratio: 1 / 1' },
        { class: 'vel-aspect-video', properties: 'aspect-ratio: 16 / 9' },
      ]}
      examples={[
        {
          label: 'Aspect ratio boxes',
          html: `<div class="vel-flex vel-gap-4 vel-items-end">
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-aspect-square</p>
    <div class="vel-aspect-square" style="width:80px;background:linear-gradient(135deg,#7c5cfc,#a87fff);border-radius:8px"></div>
  </div>
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-aspect-video</p>
    <div class="vel-aspect-video" style="width:160px;background:linear-gradient(135deg,#0ecb81,#2ebde5);border-radius:8px"></div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
