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
          html: `<button class="vel-transition-colors vel-duration-200 vel-bg-surface-2 vel-hover:bg-primary vel-text-white vel-py-3 vel-px-6 vel-rounded-lg vel-cursor-pointer" style="border:none">
  Hover to change background
</button>`,
        },
        {
          label: 'Focus ring on input',
          html: `<input class="vel-focus:ring vel-focus:ring-primary vel-bg-surface-1 vel-text-base vel-rounded-lg vel-py-3 vel-px-4 vel-w-full" type="text" placeholder="Focus me to see ring" style="border:1px solid #1e2d45;outline:none;max-width:20rem" />`,
        },
        {
          label: 'Active scale press effect',
          html: `<button class="vel-transition-transform vel-duration-100 vel-active:scale-95 vel-bg-primary vel-text-white vel-py-3 vel-px-6 vel-rounded-lg vel-cursor-pointer" style="border:none;transform-origin:center">
  Press me
</button>`,
        },
        {
          label: 'Combining hover and focus states',
          html: `<a class="vel-transition-colors vel-duration-150 vel-text-muted vel-hover:text-primary vel-focus:text-primary vel-focus:outline-none vel-inline-block vel-py-1" href="#" style="text-decoration:none">
  Hover or focus this link
</a>`,
        },
      ]}
    />
  )
}
