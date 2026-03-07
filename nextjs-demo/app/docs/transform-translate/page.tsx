import DocPage from '../_components/DocPage'

export default function TransformTranslatePage() {
  return (
    <DocPage
      title="Transform — Translate"
      description="Utilities for translating (moving) elements."
      source="transitions.css"
      table={[
        { class: 'vel-translate-x-0', properties: 'transform: translateX(0px)' },
        { class: 'vel-translate-x-1', properties: 'transform: translateX(0.25rem)' },
        { class: 'vel-translate-x-2', properties: 'transform: translateX(0.5rem)' },
        { class: 'vel-translate-x-4', properties: 'transform: translateX(1rem)' },
        { class: 'vel-translate-x-8', properties: 'transform: translateX(2rem)' },
        { class: 'vel-translate-x-full', properties: 'transform: translateX(100%)' },
        { class: '-vel-translate-x-1', properties: 'transform: translateX(-0.25rem)' },
        { class: '-vel-translate-x-2', properties: 'transform: translateX(-0.5rem)' },
        { class: '-vel-translate-x-4', properties: 'transform: translateX(-1rem)' },
        { class: '-vel-translate-x-full', properties: 'transform: translateX(-100%)' },
        { class: 'vel-translate-y-0', properties: 'transform: translateY(0px)' },
        { class: 'vel-translate-y-1', properties: 'transform: translateY(0.25rem)' },
        { class: 'vel-translate-y-2', properties: 'transform: translateY(0.5rem)' },
        { class: 'vel-translate-y-4', properties: 'transform: translateY(1rem)' },
        { class: 'vel-translate-y-8', properties: 'transform: translateY(2rem)' },
        { class: 'vel-translate-y-full', properties: 'transform: translateY(100%)' },
        { class: '-vel-translate-y-1', properties: 'transform: translateY(-0.25rem)' },
        { class: '-vel-translate-y-2', properties: 'transform: translateY(-0.5rem)' },
        { class: '-vel-translate-y-4', properties: 'transform: translateY(-1rem)' },
        { class: '-vel-translate-y-full', properties: 'transform: translateY(-100%)' },
      ]}
      examples={[
        {
          label: 'Slide up on hover',
          html: `<div class="vel-transition-transform vel-duration-200 vel-ease-out vel-hover:-translate-y-2" style="display:inline-block;padding:1rem 1.5rem;background:#0d1422;border:1px solid #1e2d45;border-radius:0.5rem;color:#e2e8f0;cursor:pointer">
  Hover to lift
</div>`,
        },
        {
          label: 'Centered absolute element using translate',
          html: `<div style="position:relative;height:6rem;background:#060b17;border:1px solid #1e2d45;border-radius:0.5rem;overflow:hidden">
  <div class="vel-translate-x-full" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:0.5rem 1rem;background:#7c5cfc;color:#fff;border-radius:0.25rem">
    Centered
  </div>
</div>`,
        },
      ]}
    />
  )
}
