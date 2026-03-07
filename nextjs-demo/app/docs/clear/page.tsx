import DocPage from '../_components/DocPage'

export default function ClearPage() {
  return (
    <DocPage
      title="Clear"
      description="Utilities for controlling the wrapping of content around an element."
      source="layout.css"
      table={[
        { class: 'vel-clear-left', properties: 'clear: left' },
        { class: 'vel-clear-right', properties: 'clear: right' },
        { class: 'vel-clear-both', properties: 'clear: both' },
        { class: 'vel-clear-none', properties: 'clear: none' },
      ]}
      examples={[
        {
          label: 'Clear both — content sits below all floated elements',
          html: `<div style="overflow:hidden;background:#0d1422;border-radius:0.5rem;padding:1rem;gap:0.5rem">
  <div style="float:left;width:38%;background:rgba(124,92,252,0.2);border:1px solid rgba(124,92,252,0.4);border-radius:0.375rem;padding:0.75rem;font-size:0.8rem;color:#a87fff;font-family:monospace">float left</div>
  <div style="float:right;width:38%;background:rgba(14,203,129,0.15);border:1px solid rgba(14,203,129,0.3);border-radius:0.375rem;padding:0.75rem;font-size:0.8rem;color:#0ecb81;font-family:monospace">float right</div>
  <div class="vel-clear-both" style="background:#1a2236;border:1px solid #1e2d45;border-radius:0.375rem;padding:0.75rem;font-size:0.8rem;color:#94a3b8;font-family:monospace;margin-top:0.5rem">vel-clear-both — below both floats</div>
</div>`,
        },
        {
          label: 'Clear left only',
          html: `<div style="overflow:hidden;background:#0d1422;border-radius:0.5rem;padding:1rem">
  <div style="float:left;width:35%;background:rgba(124,92,252,0.2);border:1px solid rgba(124,92,252,0.4);border-radius:0.375rem;padding:0.75rem;font-size:0.8rem;color:#a87fff;font-family:monospace">float left</div>
  <div class="vel-clear-left" style="background:#1a2236;border:1px solid #1e2d45;border-radius:0.375rem;padding:0.75rem;font-size:0.8rem;color:#94a3b8;font-family:monospace;margin-top:0.5rem">vel-clear-left — clears only the left float</div>
</div>`,
        },
      ]}
    />
  )
}
