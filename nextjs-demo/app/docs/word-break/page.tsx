import DocPage from '../_components/DocPage'

export default function WordBreakPage() {
  return (
    <DocPage
      title="Word Break"
      description="Utilities for controlling word breaks and overflow wrapping in text."
      source="typography.css"
      table={[
        { class: 'vel-break-normal', properties: 'overflow-wrap: normal; word-break: normal' },
        { class: 'vel-break-words', properties: 'overflow-wrap: break-word' },
        { class: 'vel-break-all', properties: 'word-break: break-all' },
        { class: 'vel-break-keep', properties: 'word-break: keep-all' },
      ]}
      examples={[
        {
          label: 'Break long words to prevent overflow',
          html: `<div class="vel-break-words" style="width:12rem;background:#0d1422;border:1px solid #1e2d45;border-radius:0.5rem;padding:1rem;color:#e2e8f0">
  Thisisaverylongwordthatwouldhaveoverflowedthecontainerbutnowitbreaksproperly
</div>`,
        },
        {
          label: 'Break all characters (aggressive)',
          html: `<div class="vel-break-all" style="width:12rem;background:#0d1422;border:1px solid #1e2d45;border-radius:0.5rem;padding:1rem;color:#e2e8f0">
  Break at any character boundary. Even mid-word if needed.
</div>`,
        },
        {
          label: 'Normal word breaking (default)',
          html: `<div class="vel-break-normal" style="width:12rem;background:#0d1422;border:1px solid #1e2d45;border-radius:0.5rem;padding:1rem;color:#e2e8f0;overflow:auto">
  Normal word breaking — only breaks at word boundaries.
</div>`,
        },
      ]}
    />
  )
}
