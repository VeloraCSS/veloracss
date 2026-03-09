'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navSections } from '../_data/nav'

const INNOVATIONS_SECTION = 'Innovations'

export default function DocsSidebar() {
  const pathname = usePathname()
  // Extract slug from path: /docs/getting-started -> getting-started
  const segments = pathname.split('/').filter(Boolean)
  const currentSlug = segments[segments.length - 1] ?? ''

  return (
    <aside className="vdoc-sidebar">
      {navSections.map(section => {
        // Section is open by default if any item in it matches the current path
        const isCurrentSection = section.items.some(item => item.slug === currentSlug)
        const isInnovations = section.title === INNOVATIONS_SECTION

        return (
          <div key={section.title} className="vdoc-sidebar-section">
            <details open={isCurrentSection || undefined}>
              <summary className="vdoc-sidebar-section-title">
                {section.title}
                <span className="vdoc-sidebar-section-icon">▶</span>
              </summary>
              <div className="vdoc-sidebar-items">
                {section.items.map(item => {
                  const isActive = item.slug === currentSlug
                  return (
                    <Link
                      key={item.slug}
                      href={`/docs/${item.slug}`}
                      className={`vdoc-sidebar-link${isActive ? ' active' : ''}`}
                    >
                      {item.label}
                      {isInnovations && (
                        <span className="vdoc-sidebar-link-badge">NEW</span>
                      )}
                    </Link>
                  )
                })}
              </div>
            </details>
          </div>
        )
      })}
    </aside>
  )
}
