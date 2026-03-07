import DocPage from '../_components/DocPage'

export default function VerticalAlignPage() {
  return (
    <DocPage
      title="Vertical Align"
      description="Utilities for controlling the vertical alignment of inline or table-cell content."
      source="typography.css"
      table={[
        { class: 'vel-align-baseline', properties: 'vertical-align: baseline' },
        { class: 'vel-align-top', properties: 'vertical-align: top' },
        { class: 'vel-align-middle', properties: 'vertical-align: middle' },
        { class: 'vel-align-bottom', properties: 'vertical-align: bottom' },
        { class: 'vel-align-text-top', properties: 'vertical-align: text-top' },
        { class: 'vel-align-text-bottom', properties: 'vertical-align: text-bottom' },
        { class: 'vel-align-sub', properties: 'vertical-align: sub' },
        { class: 'vel-align-super', properties: 'vertical-align: super' },
      ]}
      examples={[
        {
          label: 'Aligning inline elements',
          html: `<div style="background:#060b17;padding:1.25rem;border-radius:0.5rem;line-height:3rem">
  <span style="display:inline-block;width:3rem;height:3rem;background:#1a2236;border-radius:0.25rem"></span>
  <span class="vel-align-top" style="color:#e2e8f0;margin:0 0.5rem">top</span>
  <span style="display:inline-block;width:3rem;height:3rem;background:#1a2236;border-radius:0.25rem"></span>
  <span class="vel-align-middle" style="color:#e2e8f0;margin:0 0.5rem">middle</span>
  <span style="display:inline-block;width:3rem;height:3rem;background:#1a2236;border-radius:0.25rem"></span>
  <span class="vel-align-bottom" style="color:#e2e8f0;margin:0 0.5rem">bottom</span>
</div>`,
        },
        {
          label: 'Superscript and subscript alignment',
          html: `<p style="color:#e2e8f0;background:#060b17;padding:1rem;border-radius:0.5rem;font-size:1.1rem">
  E = mc<sup class="vel-align-super" style="font-size:0.7em">2</sup>
  &nbsp;&nbsp;
  H<sub class="vel-align-sub" style="font-size:0.7em">2</sub>O
</p>`,
        },
        {
          label: 'Middle-align icon with text',
          html: `<div style="background:#060b17;padding:1rem;border-radius:0.5rem;color:#e2e8f0">
  <span class="vel-align-middle" style="display:inline-block;width:1.25rem;height:1.25rem;background:#7c5cfc;border-radius:0.25rem;margin-right:0.5rem"></span>
  <span class="vel-align-middle">Icon aligned with text</span>
</div>`,
        },
      ]}
    />
  )
}
