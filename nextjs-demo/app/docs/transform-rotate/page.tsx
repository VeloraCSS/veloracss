import DocPage from '../_components/DocPage'

export default function TransformRotatePage() {
  return (
    <DocPage
      title="Transform — Rotate"
      description="Utilities for rotating elements."
      source="transitions.css"
      table={[
        { class: 'vel-rotate-0', properties: 'transform: rotate(0deg)' },
        { class: 'vel-rotate-1', properties: 'transform: rotate(1deg)' },
        { class: 'vel-rotate-2', properties: 'transform: rotate(2deg)' },
        { class: 'vel-rotate-3', properties: 'transform: rotate(3deg)' },
        { class: 'vel-rotate-6', properties: 'transform: rotate(6deg)' },
        { class: 'vel-rotate-12', properties: 'transform: rotate(12deg)' },
        { class: 'vel-rotate-45', properties: 'transform: rotate(45deg)' },
        { class: 'vel-rotate-90', properties: 'transform: rotate(90deg)' },
        { class: 'vel-rotate-180', properties: 'transform: rotate(180deg)' },
        { class: '-vel-rotate-1', properties: 'transform: rotate(-1deg)' },
        { class: '-vel-rotate-2', properties: 'transform: rotate(-2deg)' },
        { class: '-vel-rotate-3', properties: 'transform: rotate(-3deg)' },
        { class: '-vel-rotate-6', properties: 'transform: rotate(-6deg)' },
        { class: '-vel-rotate-12', properties: 'transform: rotate(-12deg)' },
        { class: '-vel-rotate-45', properties: 'transform: rotate(-45deg)' },
        { class: '-vel-rotate-90', properties: 'transform: rotate(-90deg)' },
        { class: '-vel-rotate-180', properties: 'transform: rotate(-180deg)' },
      ]}
      examples={[
        {
          label: 'Rotate 45 degrees',
          html: `<div class="vel-rotate-45 vel-bg-primary vel-text-white vel-rounded-sm vel-inline-block" style="padding:1rem">
  45°
</div>`,
        },
        {
          label: 'Animated rotate on hover',
          html: `<div class="vel-transition-transform vel-duration-300 vel-hover:rotate-180 vel-bg-surface-1 vel-text-primary vel-rounded-lg vel-inline-flex vel-items-center vel-justify-center vel-cursor-pointer" style="width:2.5rem;height:2.5rem;border:1px solid #1e2d45">
  &#8593;
</div>`,
        },
      ]}
    />
  )
}
