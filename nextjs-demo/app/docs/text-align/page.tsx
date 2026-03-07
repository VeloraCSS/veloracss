import DocPage from '../_components/DocPage'

export default function TextAlignPage() {
  return (
    <DocPage
      title="Text Align"
      description="Utilities for controlling the alignment of text."
      source="typography.css"
      table={[
        { class: 'vel-text-left', properties: 'text-align: left' },
        { class: 'vel-text-center', properties: 'text-align: center' },
        { class: 'vel-text-right', properties: 'text-align: right' },
        { class: 'vel-text-justify', properties: 'text-align: justify' },
        { class: 'vel-text-start', properties: 'text-align: start' },
        { class: 'vel-text-end', properties: 'text-align: end' },
      ]}
      examples={[
        {
          label: 'Text alignment',
          html: `<div class="vel-flex vel-flex-col vel-gap-3">
  <p class="vel-text-left" style="background:#1a2236;padding:10px 14px;border-radius:6px;color:#e2e8f0">vel-text-left — Left aligned text</p>
  <p class="vel-text-center" style="background:#1a2236;padding:10px 14px;border-radius:6px;color:#e2e8f0">vel-text-center — Centered text</p>
  <p class="vel-text-right" style="background:#1a2236;padding:10px 14px;border-radius:6px;color:#e2e8f0">vel-text-right — Right aligned text</p>
</div>`,
        },
      ]}
    />
  )
}
