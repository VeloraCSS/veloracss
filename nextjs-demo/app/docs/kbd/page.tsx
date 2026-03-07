import DocPage from '../_components/DocPage'

export default function KbdPage() {
  return (
    <DocPage
      title="Kbd"
      description="Styled keyboard key elements for displaying keyboard shortcuts, hotkeys, and key combinations in documentation and UI."
      source="kbd.css"
      table={[
        { class: 'vel-kbd', properties: 'Base keyboard key element with inset border and monospace font' },
        { class: 'vel-kbd-sm', properties: 'Smaller key size (font-size: 0.65rem; padding: 1px 5px)' },
        { class: 'vel-kbd-lg', properties: 'Larger key size (font-size: 0.9rem; padding: 4px 10px)' },
        { class: 'vel-kbd-combo', properties: 'Inline wrapper for multi-key shortcut groups with a + separator' },
      ]}
      examples={[
        {
          label: 'Keyboard shortcuts',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:center;gap:12px;">
      <span style="color:#64748b;font-size:0.85rem;width:140px;">Open command palette</span>
      <span class="vel-kbd-combo">
        <kbd class="vel-kbd">Ctrl</kbd>
        <kbd class="vel-kbd">K</kbd>
      </span>
    </div>
    <div style="display:flex;align-items:center;gap:12px;">
      <span style="color:#64748b;font-size:0.85rem;width:140px;">Command palette (Mac)</span>
      <span class="vel-kbd-combo">
        <kbd class="vel-kbd">&#8984;</kbd>
        <kbd class="vel-kbd">Shift</kbd>
        <kbd class="vel-kbd">P</kbd>
      </span>
    </div>
    <div style="display:flex;align-items:center;gap:12px;">
      <span style="color:#64748b;font-size:0.85rem;width:140px;">Save file</span>
      <span class="vel-kbd-combo">
        <kbd class="vel-kbd">Ctrl</kbd>
        <kbd class="vel-kbd">S</kbd>
      </span>
    </div>
  </div>
</div>`,
        },
        {
          label: 'Sizes',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
      <kbd class="vel-kbd vel-kbd-sm">Esc</kbd>
      <span style="color:#64748b;font-size:0.7rem;">sm</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
      <kbd class="vel-kbd">Enter</kbd>
      <span style="color:#64748b;font-size:0.7rem;">default</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
      <kbd class="vel-kbd vel-kbd-lg">Tab</kbd>
      <span style="color:#64748b;font-size:0.7rem;">lg</span>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
