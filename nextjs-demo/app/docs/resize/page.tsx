import DocPage from '../_components/DocPage'

export default function ResizePage() {
  return (
    <DocPage
      title="Resize"
      description="Utilities for controlling how an element can be resized by the user."
      source="interactivity.css"
      table={[
        { class: 'vel-resize-none', properties: 'resize: none' },
        { class: 'vel-resize', properties: 'resize: both' },
        { class: 'vel-resize-y', properties: 'resize: vertical' },
        { class: 'vel-resize-x', properties: 'resize: horizontal' },
      ]}
      examples={[
        {
          label: 'Vertically resizable textarea',
          html: `<textarea class="vel-resize-y" rows="3" style="width:100%;max-width:24rem;padding:0.75rem;background:#0d1422;border:1px solid #1e2d45;border-radius:0.5rem;color:#e2e8f0;font-family:inherit" placeholder="Resize me vertically..."></textarea>`,
        },
        {
          label: 'Non-resizable textarea',
          html: `<textarea class="vel-resize-none" rows="3" style="width:100%;max-width:24rem;padding:0.75rem;background:#0d1422;border:1px solid #1e2d45;border-radius:0.5rem;color:#e2e8f0;font-family:inherit" placeholder="Fixed size textarea"></textarea>`,
        },
      ]}
    />
  )
}
