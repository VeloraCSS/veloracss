import DocPage from '../_components/DocPage'

export default function UserSelectPage() {
  return (
    <DocPage
      title="User Select"
      description="Utilities for controlling whether the user can select text in an element."
      source="interactivity.css"
      table={[
        { class: 'vel-select-none', properties: 'user-select: none' },
        { class: 'vel-select-text', properties: 'user-select: text' },
        { class: 'vel-select-all', properties: 'user-select: all' },
        { class: 'vel-select-auto', properties: 'user-select: auto' },
      ]}
      examples={[
        {
          label: 'Non-selectable UI label',
          html: `<div class="vel-select-none" style="padding:0.5rem 1rem;background:#0d1422;border:1px solid #1e2d45;border-radius:0.25rem;color:#94a3b8;display:inline-block">
  Cannot be selected
</div>`,
        },
        {
          label: 'Select all on click (e.g. code snippet)',
          html: `<code class="vel-select-all" style="display:block;padding:0.75rem 1rem;background:#060b17;border:1px solid #1e2d45;border-radius:0.5rem;color:#a87fff;font-family:monospace">
  git clone https://github.com/VeloraX/veloracss.git
</code>`,
        },
      ]}
    />
  )
}
