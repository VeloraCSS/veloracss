import DocPage from '../_components/DocPage'

export default function FloatPage() {
  return (
    <DocPage
      title="Float"
      description="Utilities for controlling the wrapping of content around an element."
      source="layout.css"
      table={[
        { class: 'vel-float-left', properties: 'float: left' },
        { class: 'vel-float-right', properties: 'float: right' },
        { class: 'vel-float-none', properties: 'float: none' },
        { class: 'vel-clearfix', properties: '::after { content: \'\'; display: table; clear: both }' },
      ]}
      examples={[
        {
          label: 'Float right',
          html: `<div style="background:#1a2236;border:1px solid #1e2d45;border-radius:8px;padding:16px;overflow:auto">
  <div class="vel-float-right vel-bg-primary vel-text-white vel-rounded-md" style="padding:8px 16px;margin-left:12px">Float Right</div>
  <p style="color:#94a3b8;font-size:14px">Text flows around the floated element. Using vel-float-right moves the element to the right edge of its container.</p>
</div>`,
        },
      ]}
    />
  )
}
