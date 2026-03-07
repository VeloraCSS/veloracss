import DocPage from '../_components/DocPage'

export default function TextDecorationPage() {
  return (
    <DocPage
      title="Text Decoration"
      description="Utilities for controlling the decoration of text."
      source="typography.css"
      table={[
        { class: 'vel-underline', properties: 'text-decoration-line: underline' },
        { class: 'vel-no-underline', properties: 'text-decoration-line: none' },
        { class: 'vel-line-through', properties: 'text-decoration-line: line-through' },
        { class: 'vel-overline', properties: 'text-decoration-line: overline' },
        { class: 'vel-decoration-solid', properties: 'text-decoration-style: solid' },
        { class: 'vel-decoration-double', properties: 'text-decoration-style: double' },
        { class: 'vel-decoration-dotted', properties: 'text-decoration-style: dotted' },
        { class: 'vel-decoration-dashed', properties: 'text-decoration-style: dashed' },
        { class: 'vel-decoration-wavy', properties: 'text-decoration-style: wavy' },
        { class: 'vel-decoration-0', properties: 'text-decoration-thickness: 0px' },
        { class: 'vel-decoration-1', properties: 'text-decoration-thickness: 1px' },
        { class: 'vel-decoration-2', properties: 'text-decoration-thickness: 2px' },
        { class: 'vel-decoration-4', properties: 'text-decoration-thickness: 4px' },
        { class: 'vel-decoration-8', properties: 'text-decoration-thickness: 8px' },
        { class: 'vel-underline-offset-0', properties: 'text-underline-offset: 0px' },
        { class: 'vel-underline-offset-1', properties: 'text-underline-offset: 1px' },
        { class: 'vel-underline-offset-2', properties: 'text-underline-offset: 2px' },
        { class: 'vel-underline-offset-4', properties: 'text-underline-offset: 4px' },
        { class: 'vel-underline-offset-8', properties: 'text-underline-offset: 8px' },
      ]}
      examples={[
        {
          label: 'Basic decoration styles',
          html: `<div style="display:flex;flex-direction:column;gap:0.5rem;color:#e2e8f0;background:#060b17;padding:1.25rem;border-radius:0.5rem">
  <p class="vel-underline" style="margin:0">Underline</p>
  <p class="vel-line-through" style="margin:0">Line-through</p>
  <p class="vel-overline" style="margin:0">Overline</p>
  <p class="vel-no-underline vel-underline" style="margin:0;text-decoration:none">No underline (override)</p>
</div>`,
        },
        {
          label: 'Decoration styles with color',
          html: `<div style="display:flex;flex-direction:column;gap:0.5rem;color:#e2e8f0;background:#060b17;padding:1.25rem;border-radius:0.5rem">
  <p class="vel-underline vel-decoration-wavy vel-decoration-2" style="margin:0;text-decoration-color:#7c5cfc">Wavy violet underline</p>
  <p class="vel-underline vel-decoration-dotted vel-underline-offset-4" style="margin:0;text-decoration-color:#0ecb81">Dotted green with offset</p>
  <p class="vel-underline vel-decoration-dashed vel-decoration-4" style="margin:0;text-decoration-color:#f0416c">Thick dashed red</p>
</div>`,
        },
        {
          label: 'Remove underline from links',
          html: `<a class="vel-no-underline vel-text-primary vel-hover:underline" href="#" style="color:#7c5cfc">
  Link without underline (hover to underline)
</a>`,
        },
      ]}
    />
  )
}
