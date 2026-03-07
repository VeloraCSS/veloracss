import DocPage from '../_components/DocPage'

export default function BackgroundPositionPage() {
  return (
    <DocPage
      title="Background Position"
      description="Utilities for controlling the position of an element's background image."
      source="colors.css"
      table={[
        { class: 'vel-bg-center', properties: 'background-position: center' },
        { class: 'vel-bg-top', properties: 'background-position: top' },
        { class: 'vel-bg-top-right', properties: 'background-position: top right' },
        { class: 'vel-bg-right', properties: 'background-position: right' },
        { class: 'vel-bg-bottom-right', properties: 'background-position: bottom right' },
        { class: 'vel-bg-bottom', properties: 'background-position: bottom' },
        { class: 'vel-bg-bottom-left', properties: 'background-position: bottom left' },
        { class: 'vel-bg-left', properties: 'background-position: left' },
        { class: 'vel-bg-top-left', properties: 'background-position: top left' },
      ]}
      examples={[
        {
          label: 'Background position values',
          html: `<div style="display:flex;gap:12px;padding:1rem;background:#060b17;flex-wrap:wrap;">
  <div class="vel-bg-top vel-bg-no-repeat" style="width:80px;height:80px;border-radius:6px;border:1px solid #1e2d45;background-image:url('https://placehold.co/40x40/7c5cfc/fff');background-color:#0d1422;" title="vel-bg-top"></div>
  <div class="vel-bg-center vel-bg-no-repeat" style="width:80px;height:80px;border-radius:6px;border:1px solid #1e2d45;background-image:url('https://placehold.co/40x40/7c5cfc/fff');background-color:#0d1422;" title="vel-bg-center"></div>
  <div class="vel-bg-bottom vel-bg-no-repeat" style="width:80px;height:80px;border-radius:6px;border:1px solid #1e2d45;background-image:url('https://placehold.co/40x40/7c5cfc/fff');background-color:#0d1422;" title="vel-bg-bottom"></div>
</div>`,
        },
      ]}
    />
  )
}
