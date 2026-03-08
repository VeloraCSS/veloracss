import DocPage from '../_components/DocPage'

export default function ChartsPage() {
  return (
    <DocPage
      title="Charts"
      description="Pure CSS bar charts and progress rings. Bar height is driven by --vel-bar-h (a percentage value, e.g. 75%) on each fill element. Ring progress is driven by --vel-ring-pct (a bare number 0–100, no % unit) on the ring wrapper. No JavaScript required."
      source="charts.css"
      table={[
        { class: 'vel-chart-bar',              properties: 'Bar chart container (height: 12rem)' },
        { class: 'vel-chart-axis-y',           properties: 'Vertical y-axis line (absolute)' },
        { class: 'vel-chart-grid',             properties: 'Horizontal grid lines overlay' },
        { class: 'vel-chart-grid-line',        properties: 'Single horizontal grid rule' },
        { class: 'vel-chart-bar-group',        properties: 'Column — value + fill + label' },
        { class: 'vel-chart-bar-value',        properties: 'Numeric label above bar' },
        { class: 'vel-chart-bar-fill',         properties: 'The bar — height set via --vel-bar-h (include %)' },
        { class: 'vel-chart-bar-label',        properties: 'Text label below bar' },
        { class: 'vel-chart-bar-fill-primary', properties: 'Bar color — primary' },
        { class: 'vel-chart-bar-fill-success', properties: 'Bar color — success (green)' },
        { class: 'vel-chart-bar-fill-danger',  properties: 'Bar color — danger (red)' },
        { class: 'vel-chart-bar-fill-warning', properties: 'Bar color — warning (amber)' },
        { class: 'vel-chart-ring',             properties: 'Progress ring wrapper (6rem default)' },
        { class: 'vel-chart-ring-svg',         properties: 'SVG element — rotated -90deg for 12 o\'clock start' },
        { class: 'vel-chart-ring-track',       properties: 'Background circle stroke' },
        { class: 'vel-chart-ring-fill',        properties: 'Progress arc — set --vel-ring-pct (0–100, no unit)' },
        { class: 'vel-chart-ring-label',       properties: 'Centered text overlay inside ring' },
        { class: 'vel-chart-ring-label-sub',   properties: 'Secondary smaller label line' },
        { class: 'vel-chart-ring-sm',          properties: 'Small ring — 4rem' },
        { class: 'vel-chart-ring-lg',          properties: 'Large ring — 9rem' },
        { class: 'vel-chart-ring-primary',     properties: 'Ring arc color — primary' },
        { class: 'vel-chart-ring-success',     properties: 'Ring arc color — success' },
        { class: 'vel-chart-ring-danger',      properties: 'Ring arc color — danger' },
        { class: 'vel-chart-ring-warning',     properties: 'Ring arc color — warning' },
      ]}
      examples={[
        {
          label: 'Bar chart — weekly stats with mixed colors',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;">
  <div class="vel-chart-bar">
    <div class="vel-chart-axis-y"></div>
    <div class="vel-chart-grid">
      <div class="vel-chart-grid-line"></div>
      <div class="vel-chart-grid-line"></div>
      <div class="vel-chart-grid-line"></div>
      <div class="vel-chart-grid-line"></div>
    </div>
    <div class="vel-chart-bar-group">
      <span class="vel-chart-bar-value">42</span>
      <div class="vel-chart-bar-fill vel-chart-bar-fill-primary" style="--vel-bar-h:42%"></div>
      <span class="vel-chart-bar-label">Mon</span>
    </div>
    <div class="vel-chart-bar-group">
      <span class="vel-chart-bar-value">78</span>
      <div class="vel-chart-bar-fill vel-chart-bar-fill-primary" style="--vel-bar-h:78%"></div>
      <span class="vel-chart-bar-label">Tue</span>
    </div>
    <div class="vel-chart-bar-group">
      <span class="vel-chart-bar-value">55</span>
      <div class="vel-chart-bar-fill vel-chart-bar-fill-success" style="--vel-bar-h:55%"></div>
      <span class="vel-chart-bar-label">Wed</span>
    </div>
    <div class="vel-chart-bar-group">
      <span class="vel-chart-bar-value">91</span>
      <div class="vel-chart-bar-fill vel-chart-bar-fill-primary" style="--vel-bar-h:91%"></div>
      <span class="vel-chart-bar-label">Thu</span>
    </div>
    <div class="vel-chart-bar-group">
      <span class="vel-chart-bar-value">33</span>
      <div class="vel-chart-bar-fill vel-chart-bar-fill-danger" style="--vel-bar-h:33%"></div>
      <span class="vel-chart-bar-label">Fri</span>
    </div>
    <div class="vel-chart-bar-group">
      <span class="vel-chart-bar-value">67</span>
      <div class="vel-chart-bar-fill vel-chart-bar-fill-warning" style="--vel-bar-h:67%"></div>
      <span class="vel-chart-bar-label">Sat</span>
    </div>
    <div class="vel-chart-bar-group">
      <span class="vel-chart-bar-value">48</span>
      <div class="vel-chart-bar-fill vel-chart-bar-fill-success" style="--vel-bar-h:48%"></div>
      <span class="vel-chart-bar-label">Sun</span>
    </div>
  </div>
</div>`,
        },
        {
          label: 'Progress rings — all sizes and colors',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;">
  <div class="vel-flex vel-flex-wrap vel-gap-6 vel-items-center">
    <div class="vel-chart-ring vel-chart-ring-lg vel-chart-ring-primary" style="--vel-ring-pct:72">
      <svg class="vel-chart-ring-svg" viewBox="0 0 100 100">
        <circle class="vel-chart-ring-track" cx="50" cy="50" r="42"/>
        <circle class="vel-chart-ring-fill"  cx="50" cy="50" r="42"/>
      </svg>
      <div class="vel-chart-ring-label">72%<span class="vel-chart-ring-label-sub">Tasks</span></div>
    </div>
    <div class="vel-chart-ring vel-chart-ring-lg vel-chart-ring-success" style="--vel-ring-pct:89">
      <svg class="vel-chart-ring-svg" viewBox="0 0 100 100">
        <circle class="vel-chart-ring-track" cx="50" cy="50" r="42"/>
        <circle class="vel-chart-ring-fill"  cx="50" cy="50" r="42"/>
      </svg>
      <div class="vel-chart-ring-label">89%<span class="vel-chart-ring-label-sub">Uptime</span></div>
    </div>
    <div class="vel-chart-ring vel-chart-ring-lg vel-chart-ring-danger" style="--vel-ring-pct:34">
      <svg class="vel-chart-ring-svg" viewBox="0 0 100 100">
        <circle class="vel-chart-ring-track" cx="50" cy="50" r="42"/>
        <circle class="vel-chart-ring-fill"  cx="50" cy="50" r="42"/>
      </svg>
      <div class="vel-chart-ring-label">34%<span class="vel-chart-ring-label-sub">Storage</span></div>
    </div>
    <div class="vel-chart-ring vel-chart-ring-warning" style="--vel-ring-pct:56">
      <svg class="vel-chart-ring-svg" viewBox="0 0 100 100">
        <circle class="vel-chart-ring-track" cx="50" cy="50" r="42"/>
        <circle class="vel-chart-ring-fill"  cx="50" cy="50" r="42"/>
      </svg>
      <div class="vel-chart-ring-label">56%</div>
    </div>
    <div class="vel-chart-ring vel-chart-ring-sm vel-chart-ring-primary" style="--vel-ring-pct:100">
      <svg class="vel-chart-ring-svg" viewBox="0 0 100 100">
        <circle class="vel-chart-ring-track" cx="50" cy="50" r="42"/>
        <circle class="vel-chart-ring-fill"  cx="50" cy="50" r="42"/>
      </svg>
      <div class="vel-chart-ring-label">&#10003;</div>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
