import DocPage from '../_components/DocPage'

export default function FontStylePage() {
  return (
    <DocPage
      title="Font Style"
      description="Utilities for controlling the style of text."
      source="typography.css"
      table={[
        { class: 'vel-italic', properties: 'font-style: italic' },
        { class: 'vel-not-italic', properties: 'font-style: normal' },
      ]}
      examples={[
        {
          label: 'Italic text',
          html: `<p class="vel-italic" style="color:#e2e8f0;font-size:1.125rem">
  This text is rendered in italic style.
</p>`,
        },
        {
          label: 'Removing italic (e.g. on em or i elements)',
          html: `<em class="vel-not-italic" style="color:#94a3b8">
  This em element is rendered upright, not italic.
</em>`,
        },
        {
          label: 'Italic in a card context',
          html: `<blockquote style="padding:1.25rem 1.5rem;background:#0d1422;border-left:3px solid #7c5cfc;border-radius:0 0.5rem 0.5rem 0">
  <p class="vel-italic" style="color:#94a3b8;margin:0">"Design is not just what it looks like and feels like. Design is how it works."</p>
  <cite class="vel-not-italic" style="display:block;margin-top:0.5rem;font-size:0.85rem;color:#64748b">— Steve Jobs</cite>
</blockquote>`,
        },
      ]}
    />
  )
}
