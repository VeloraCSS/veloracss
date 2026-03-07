import DocPage from '../_components/DocPage'

export default function ProgressPage() {
  return (
    <DocPage
      title="Progress"
      description="Progress bar component for showing completion state. Supports all semantic colors, size variants, striped, shimmer, indeterminate, and glow effects."
      source="progress.css"
      table={[
        { class: 'vel-progress', properties: 'Base progress track — full width, rounded, surface background' },
        { class: 'vel-progress-bar', properties: 'The filled inner bar; set width inline (e.g. style="width:60%")' },
        { class: 'vel-progress-primary', properties: 'Primary gradient fill on the bar' },
        { class: 'vel-progress-success', properties: 'Success green fill on the bar' },
        { class: 'vel-progress-danger', properties: 'Danger red fill on the bar' },
        { class: 'vel-progress-warning', properties: 'Warning amber fill on the bar' },
        { class: 'vel-progress-info', properties: 'Info blue fill on the bar' },
        { class: 'vel-progress-sm', properties: 'Thinner track height' },
        { class: 'vel-progress-lg', properties: 'Taller track height' },
        { class: 'vel-progress-striped', properties: 'Diagonal stripe pattern overlaid on the bar' },
        { class: 'vel-progress-shimmer', properties: 'Animated shimmer sweep across the bar' },
        { class: 'vel-progress-indeterminate', properties: 'Animated bar that loops without a fixed width' },
        { class: 'vel-progress-glow', properties: 'Adds colored glow box-shadow beneath the bar' },
      ]}
      examples={[
        {
          label: 'Basic progress at 60%',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;">
  <div class="vel-progress">
    <div class="vel-progress-bar vel-progress-primary" style="width:60%;"></div>
  </div>
</div>`,
        },
        {
          label: 'Color variants',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;flex-direction:column;gap:10px;">
  <div class="vel-progress">
    <div class="vel-progress-bar vel-progress-primary" style="width:75%;"></div>
  </div>
  <div class="vel-progress">
    <div class="vel-progress-bar vel-progress-success" style="width:50%;"></div>
  </div>
  <div class="vel-progress">
    <div class="vel-progress-bar vel-progress-danger" style="width:30%;"></div>
  </div>
  <div class="vel-progress">
    <div class="vel-progress-bar vel-progress-warning" style="width:65%;"></div>
  </div>
</div>`,
        },
        {
          label: 'Striped progress',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;">
  <div class="vel-progress">
    <div class="vel-progress-bar vel-progress-primary vel-progress-striped" style="width:70%;"></div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
