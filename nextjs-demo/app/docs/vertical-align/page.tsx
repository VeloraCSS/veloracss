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
  <span class="vel-bg-surface-3 vel-rounded-sm vel-inline-block" style="width:3rem;height:3rem"></span>
  <span class="vel-align-top vel-text-base" style="margin:0 0.5rem">top</span>
  <span class="vel-bg-surface-3 vel-rounded-sm vel-inline-block" style="width:3rem;height:3rem"></span>
  <span class="vel-align-middle vel-text-base" style="margin:0 0.5rem">middle</span>
  <span class="vel-bg-surface-3 vel-rounded-sm vel-inline-block" style="width:3rem;height:3rem"></span>
  <span class="vel-align-bottom vel-text-base" style="margin:0 0.5rem">bottom</span>
</div>`,
        },
        {
          label: 'Superscript and subscript alignment',
          html: `<p class="vel-text-base" style="background:#060b17;padding:1rem;border-radius:0.5rem;font-size:1.1rem">
  E = mc<sup class="vel-align-super" style="font-size:0.7em">2</sup>
  &nbsp;&nbsp;
  H<sub class="vel-align-sub" style="font-size:0.7em">2</sub>O
</p>`,
        },
        {
          label: 'Middle-align icon with text',
          html: `<div class="vel-text-base" style="background:#060b17;padding:1rem;border-radius:0.5rem">
  <span class="vel-align-middle vel-bg-primary vel-rounded-sm vel-inline-block" style="width:1.25rem;height:1.25rem;margin-right:0.5rem"></span>
  <span class="vel-align-middle">Icon aligned with text</span>
</div>`,
        },
      ]}
    />
  )
}
