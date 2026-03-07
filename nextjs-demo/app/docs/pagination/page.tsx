import DocPage from '../_components/DocPage'

export default function PaginationPage() {
  return (
    <DocPage
      title="Pagination"
      description="Navigation controls for moving between pages of content, with support for active states, disabled links, ellipsis, and size variants."
      source="pagination.css"
      table={[
        { class: 'vel-pagination', properties: 'Flex container wrapping all page items' },
        { class: 'vel-page-item', properties: 'Wrapper element for each page link or control' },
        { class: 'vel-page-link', properties: 'The clickable anchor or button inside vel-page-item' },
        { class: 'vel-page-link-active', properties: 'Highlights the currently active page link' },
        { class: 'vel-page-link-disabled', properties: 'Dimmed, non-interactive page link (e.g. prev on first page)' },
        { class: 'vel-page-ellipsis', properties: 'Non-interactive ellipsis separator between page ranges' },
        { class: 'vel-pagination-sm', properties: 'Smaller size variant for compact layouts' },
        { class: 'vel-pagination-lg', properties: 'Larger size variant for prominent pagination' },
      ]}
      examples={[
        {
          label: 'Basic pagination',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <nav class="vel-pagination" aria-label="Page navigation">
    <div class="vel-page-item">
      <a class="vel-page-link vel-page-link-disabled" href="#" aria-label="Previous">&laquo; Prev</a>
    </div>
    <div class="vel-page-item">
      <a class="vel-page-link" href="#">1</a>
    </div>
    <div class="vel-page-item">
      <a class="vel-page-link vel-page-link-active" href="#">2</a>
    </div>
    <div class="vel-page-item">
      <a class="vel-page-link" href="#">3</a>
    </div>
    <div class="vel-page-item">
      <span class="vel-page-ellipsis">&hellip;</span>
    </div>
    <div class="vel-page-item">
      <a class="vel-page-link" href="#">8</a>
    </div>
    <div class="vel-page-item">
      <a class="vel-page-link" href="#" aria-label="Next">Next &raquo;</a>
    </div>
  </nav>
</div>`,
        },
        {
          label: 'Small pagination',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <nav class="vel-pagination vel-pagination-sm" aria-label="Small page navigation">
    <div class="vel-page-item">
      <a class="vel-page-link" href="#">&laquo;</a>
    </div>
    <div class="vel-page-item">
      <a class="vel-page-link vel-page-link-active" href="#">1</a>
    </div>
    <div class="vel-page-item">
      <a class="vel-page-link" href="#">2</a>
    </div>
    <div class="vel-page-item">
      <a class="vel-page-link" href="#">3</a>
    </div>
    <div class="vel-page-item">
      <a class="vel-page-link" href="#">&raquo;</a>
    </div>
  </nav>
</div>`,
        },
      ]}
    />
  )
}
