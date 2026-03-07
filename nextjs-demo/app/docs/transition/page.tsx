import DocPage from '../_components/DocPage'

export default function TransitionPage() {
  return (
    <DocPage
      title="Transition"
      description="Utilities for controlling CSS transitions."
      source="transitions.css"
      table={[
        { class: 'vel-transition-none', properties: 'transition: none' },
        { class: 'vel-transition', properties: 'transition: all 150ms ease' },
        { class: 'vel-transition-colors', properties: 'transition: color, background-color, border-color, text-decoration-color, fill, stroke 150ms ease' },
        { class: 'vel-transition-opacity', properties: 'transition: opacity 150ms ease' },
        { class: 'vel-transition-shadow', properties: 'transition: box-shadow 150ms ease' },
        { class: 'vel-transition-transform', properties: 'transition: transform 150ms ease' },
        { class: 'vel-duration-75', properties: 'transition-duration: 75ms' },
        { class: 'vel-duration-100', properties: 'transition-duration: 100ms' },
        { class: 'vel-duration-150', properties: 'transition-duration: 150ms' },
        { class: 'vel-duration-200', properties: 'transition-duration: 200ms' },
        { class: 'vel-duration-300', properties: 'transition-duration: 300ms' },
        { class: 'vel-duration-500', properties: 'transition-duration: 500ms' },
        { class: 'vel-duration-700', properties: 'transition-duration: 700ms' },
        { class: 'vel-duration-1000', properties: 'transition-duration: 1000ms' },
        { class: 'vel-ease-linear', properties: 'transition-timing-function: linear' },
        { class: 'vel-ease-in', properties: 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1)' },
        { class: 'vel-ease-out', properties: 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1)' },
        { class: 'vel-ease-in-out', properties: 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)' },
        { class: 'vel-ease-spring', properties: 'transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1)' },
        { class: 'vel-delay-75', properties: 'transition-delay: 75ms' },
        { class: 'vel-delay-100', properties: 'transition-delay: 100ms' },
        { class: 'vel-delay-150', properties: 'transition-delay: 150ms' },
        { class: 'vel-delay-200', properties: 'transition-delay: 200ms' },
        { class: 'vel-delay-300', properties: 'transition-delay: 300ms' },
        { class: 'vel-delay-500', properties: 'transition-delay: 500ms' },
      ]}
      examples={[
        {
          label: 'Smooth color transition on hover',
          html: `<button class="vel-transition-colors vel-duration-300 vel-ease-in-out vel-bg-surface-2 vel-text-white vel-p-3 vel-rounded-lg" style="background:#1a2236;color:#e2e8f0;padding:0.75rem 1.5rem;border-radius:0.5rem;border:none;cursor:pointer">
  Hover to transition
</button>`,
        },
        {
          label: 'Transform transition with delay',
          html: `<div class="vel-transition-transform vel-duration-500 vel-ease-spring vel-delay-100" style="display:inline-block;padding:1rem;background:#0d1422;border:1px solid #1e2d45;border-radius:0.5rem">
  Delayed spring transition
</div>`,
        },
      ]}
    />
  )
}
