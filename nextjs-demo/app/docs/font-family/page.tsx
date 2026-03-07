import DocPage from '../_components/DocPage'

export default function FontFamilyPage() {
  return (
    <DocPage
      title="Font Family"
      description="Utilities for controlling the font family of an element."
      source="typography.css"
      table={[
        { class: 'vel-font-sans', properties: 'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
        { class: 'vel-font-serif', properties: 'font-family: ui-serif, Georgia, Cambria, "Times New Roman", serif' },
        { class: 'vel-font-mono', properties: 'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' },
      ]}
      examples={[
        {
          label: 'Font families',
          html: `<div class="vel-flex vel-flex-col vel-gap-4">
  <p class="vel-font-sans" style="color:#e2e8f0;font-size:18px">vel-font-sans — The quick brown fox jumps over the lazy dog</p>
  <p class="vel-font-mono" style="color:#a87fff;font-size:16px">vel-font-mono — const hello = "VeloraCSS"</p>
</div>`,
        },
      ]}
    />
  )
}
