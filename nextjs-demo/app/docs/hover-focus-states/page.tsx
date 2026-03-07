import DocPage from '../_components/DocPage'

export default function HoverFocusStatesPage() {
  return (
    <DocPage
      title="Hover & Focus States"
      description="Apply classes conditionally on hover or focus using vel-hover: and vel-focus: prefixes."
      table={[
        { class: 'vel-hover:{class}', properties: 'Applies {class} on :hover' },
        { class: 'vel-focus:{class}', properties: 'Applies {class} on :focus and :focus-visible' },
        { class: 'vel-active:{class}', properties: 'Applies {class} on :active' },
      ]}
      examples={[
        {
          label: 'Hover background change',
          html: `<button class="vel-transition-colors vel-duration-200 vel-bg-surface-2 vel-hover:bg-primary vel-text-white vel-p-3 vel-rounded-lg vel-cursor-pointer" style="padding:0.75rem 1.5rem;background:#111827;color:#fff;border-radius:0.5rem;border:none;transition:background 200ms">
  Hover to change background
</button>`,
        },
        {
          label: 'Focus ring on input',
          html: `<input class="vel-focus:ring vel-focus:ring-primary" type="text" placeholder="Focus me to see ring" style="padding:0.75rem 1rem;background:#0d1422;border:1px solid #1e2d45;border-radius:0.5rem;color:#e2e8f0;outline:none;width:100%;max-width:20rem" />`,
        },
        {
          label: 'Active scale press effect',
          html: `<button class="vel-transition-transform vel-duration-100 vel-active:scale-95" style="padding:0.75rem 1.5rem;background:#7c5cfc;color:#fff;border-radius:0.5rem;border:none;cursor:pointer;transform-origin:center">
  Press me
</button>`,
        },
        {
          label: 'Combining hover and focus states',
          html: `<a class="vel-transition-colors vel-duration-150 vel-text-muted vel-hover:text-primary vel-focus:text-primary vel-focus:outline-none" href="#" style="color:#64748b;text-decoration:none;display:inline-block;padding:0.25rem 0">
  Hover or focus this link
</a>`,
        },
      ]}
    />
  )
}
