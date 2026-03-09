'use client'

import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

interface TocProps {
  headings: TocItem[]
}

export default function DocsTableOfContents({ headings }: TocProps) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    if (!headings.length) return
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: '-52px 0px -70% 0px', threshold: 0 }
    )
    headings.forEach(h => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [headings])

  if (!headings.length) return null

  return (
    <nav className="vdoc-toc">
      <div className="vdoc-toc-title">On this page</div>
      {headings.map(h => (
        <a
          key={h.id}
          href={`#${h.id}`}
          className={`vdoc-toc-link${active === h.id ? ' active' : ''}`}
          style={h.level === 3 ? { paddingLeft: '1.5rem', fontSize: '0.75rem' } : {}}
        >
          {h.text}
        </a>
      ))}
    </nav>
  )
}
