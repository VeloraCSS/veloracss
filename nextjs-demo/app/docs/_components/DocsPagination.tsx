import Link from 'next/link'
import { navSections } from '../_data/nav'

// Flatten all nav items in declared order
const flatNav = navSections.flatMap(section => section.items)

interface DocsPaginationProps {
  currentPath: string
}

export default function DocsPagination({ currentPath }: DocsPaginationProps) {
  // Extract slug from a path like /docs/getting-started
  const segments = currentPath.split('/').filter(Boolean)
  const currentSlug = segments[segments.length - 1] ?? ''

  const currentIndex = flatNav.findIndex(item => item.slug === currentSlug)
  if (currentIndex === -1) return null

  const prev = currentIndex > 0 ? flatNav[currentIndex - 1] : null
  const next = currentIndex < flatNav.length - 1 ? flatNav[currentIndex + 1] : null

  if (!prev && !next) return null

  return (
    <nav className="vdoc-pagination">
      {prev ? (
        <Link href={`/docs/${prev.slug}`} className="vdoc-pagination-item">
          <span className="vdoc-pagination-label">← Previous</span>
          <span className="vdoc-pagination-title">{prev.label}</span>
        </Link>
      ) : (
        <div /> /* empty placeholder to keep grid alignment */
      )}
      {next ? (
        <Link href={`/docs/${next.slug}`} className="vdoc-pagination-item vdoc-pagination-item-next">
          <span className="vdoc-pagination-label">Next →</span>
          <span className="vdoc-pagination-title">{next.label}</span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}
