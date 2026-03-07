import DocPage from '../_components/DocPage'

export default function TransformScalePage() {
  return (
    <DocPage
      title="Transform — Scale"
      description="Utilities for scaling elements."
      source="transitions.css"
      table={[
        { class: 'vel-scale-0', properties: 'transform: scale(0)' },
        { class: 'vel-scale-50', properties: 'transform: scale(0.5)' },
        { class: 'vel-scale-75', properties: 'transform: scale(0.75)' },
        { class: 'vel-scale-90', properties: 'transform: scale(0.9)' },
        { class: 'vel-scale-95', properties: 'transform: scale(0.95)' },
        { class: 'vel-scale-100', properties: 'transform: scale(1)' },
        { class: 'vel-scale-105', properties: 'transform: scale(1.05)' },
        { class: 'vel-scale-110', properties: 'transform: scale(1.1)' },
        { class: 'vel-scale-125', properties: 'transform: scale(1.25)' },
        { class: 'vel-scale-150', properties: 'transform: scale(1.5)' },
        { class: 'vel-scale-x-0', properties: 'transform: scaleX(0)' },
        { class: 'vel-scale-x-50', properties: 'transform: scaleX(0.5)' },
        { class: 'vel-scale-x-100', properties: 'transform: scaleX(1)' },
        { class: 'vel-scale-y-0', properties: 'transform: scaleY(0)' },
        { class: 'vel-scale-y-100', properties: 'transform: scaleY(1)' },
      ]}
      examples={[
        {
          label: 'Scale on hover using transition + scale',
          html: `<div class="vel-transition-transform vel-duration-200 vel-ease-out vel-hover:scale-110" style="display:inline-block;padding:1rem 2rem;background:#7c5cfc;color:#fff;border-radius:0.5rem;cursor:pointer">
  Hover to scale up
</div>`,
        },
        {
          label: 'Press effect with active:scale-95',
          html: `<button class="vel-transition-transform vel-duration-100 vel-active:scale-95" style="padding:0.75rem 1.5rem;background:#0ecb81;color:#fff;border-radius:0.5rem;border:none;cursor:pointer">
  Click me
</button>`,
        },
      ]}
    />
  )
}
