import DocPage from '../_components/DocPage'

export default function TablesPage() {
  return (
    <DocPage
      title="Tables"
      description="Styled data table component with striped rows, hover highlighting, borders, compact density, and a responsive overflow wrapper."
      source="table.css"
      table={[
        { class: 'vel-table', properties: 'Base table — full width, border-collapse, thead styling, cell padding' },
        { class: 'vel-table-striped', properties: 'Alternating row background on even rows' },
        { class: 'vel-table-hover', properties: 'Highlight row on :hover' },
        { class: 'vel-table-bordered', properties: 'Adds borders to all cells' },
        { class: 'vel-table-compact', properties: 'Reduced cell padding for dense data' },
        { class: 'vel-table-wrapper', properties: 'overflow-x: auto wrapper for responsive horizontal scroll' },
      ]}
      examples={[
        {
          label: 'Basic table',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;">
  <div class="vel-table-wrapper">
    <table class="vel-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alice</td>
          <td><span class="vel-badge vel-badge-success">Active</span></td>
          <td>Admin</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td><span class="vel-badge vel-badge-warning">Pending</span></td>
          <td>Editor</td>
        </tr>
        <tr>
          <td>Carol</td>
          <td><span class="vel-badge vel-badge-neutral">Inactive</span></td>
          <td>Viewer</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
        },
        {
          label: 'Striped + hover',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;">
  <div class="vel-table-wrapper">
    <table class="vel-table vel-table-striped vel-table-hover">
      <thead>
        <tr>
          <th>Package</th>
          <th>Version</th>
          <th>License</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>veloracss</td>
          <td>0.2.0</td>
          <td>MIT</td>
        </tr>
        <tr>
          <td>postcss</td>
          <td>8.4.0</td>
          <td>MIT</td>
        </tr>
        <tr>
          <td>vite</td>
          <td>5.0.0</td>
          <td>MIT</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
        },
      ]}
    />
  )
}
