import DocPage from '../_components/DocPage'

export default function BackgroundAttachmentPage() {
  return (
    <DocPage
      title="Background Attachment"
      description="Utilities for controlling how a background image behaves when scrolling."
      source="colors.css"
      table={[
        { class: 'vel-bg-fixed', properties: 'background-attachment: fixed' },
        { class: 'vel-bg-local', properties: 'background-attachment: local' },
        { class: 'vel-bg-scroll', properties: 'background-attachment: scroll' },
      ]}
      examples={[
        {
          label: 'Background attachment values',
          html: `<div style="padding:1rem;background:#060b17;">
  <!-- vel-bg-fixed: background stays fixed relative to the viewport -->
  <div class="vel-bg-fixed vel-bg-cover vel-bg-center" style="height:100px;border-radius:6px;border:1px solid #1e2d45;background-image:linear-gradient(135deg,#7c5cfc,#a87fff);margin-bottom:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.8rem;">vel-bg-fixed</div>

  <!-- vel-bg-scroll: background scrolls with the element -->
  <div class="vel-bg-scroll vel-bg-cover vel-bg-center" style="height:100px;border-radius:6px;border:1px solid #1e2d45;background-image:linear-gradient(135deg,#0ea5e9,#38bdf8);display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.8rem;">vel-bg-scroll</div>
</div>`,
        },
      ]}
    />
  )
}
