'use client'

import Link from 'next/link'
import { useState } from 'react'
import { navSections } from '../_data/nav'

interface DocsSidebarProps {
  currentSlug: string
}

export default function DocsSidebar({ currentSlug }: DocsSidebarProps) {
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? navSections
        .map((section) => ({
          ...section,
          items: section.items.filter((item) =>
            item.label.toLowerCase().includes(query.toLowerCase()) ||
            item.slug.toLowerCase().includes(query.toLowerCase())
          ),
        }))
        .filter((section) => section.items.length > 0)
    : navSections

  return (
    <aside
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '260px',
        height: '100vh',
        background: '#0d1422',
        borderRight: '1px solid #1e2d45',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 40,
        scrollbarWidth: 'thin',
        scrollbarColor: '#1e2d45 transparent',
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: '1.25rem 1rem 1rem',
          borderBottom: '1px solid #1e2d45',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexShrink: 0,
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: '1rem',
            fontWeight: 800,
            color: '#e2e8f0',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          VeloraCSS
        </Link>
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: 600,
            color: '#a87fff',
            background: 'rgba(124, 92, 252, 0.15)',
            border: '1px solid rgba(124, 92, 252, 0.3)',
            padding: '1px 6px',
            borderRadius: '99px',
            letterSpacing: '0.04em',
          }}
        >
          Docs
        </span>
      </div>

      {/* Search */}
      <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #1e2d45', flexShrink: 0 }}>
        <input
          type="search"
          placeholder="Search docs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '0.4rem 0.65rem',
            borderRadius: '0.5rem',
            background: '#060b17',
            border: '1px solid #1e2d45',
            color: '#e2e8f0',
            fontSize: '0.8rem',
            outline: 'none',
            transition: 'border-color 0.15s, box-shadow 0.15s',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#7c5cfc'
            e.currentTarget.style.boxShadow = '0 0 0 2px rgba(124, 92, 252, 0.2)'
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = '#1e2d45'
            e.currentTarget.style.boxShadow = 'none'
          }}
        />
      </div>

      {/* Nav sections */}
      <nav style={{ flex: 1, padding: '0.75rem 0.5rem', overflowY: 'auto' }}>
        {filtered.map((section) => (
          <div key={section.title} style={{ marginBottom: '1.25rem' }}>
            <p
              style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                color: '#64748b',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0 0.5rem',
                marginBottom: '0.3rem',
              }}
            >
              {section.title}
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {section.items.map((item) => {
                const isActive = item.slug === currentSlug
                return (
                  <li key={item.slug}>
                    <Link
                      href={`/docs/${item.slug}`}
                      style={{
                        display: 'block',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '0.375rem',
                        fontSize: '0.8rem',
                        textDecoration: 'none',
                        transition: 'color 0.12s, background 0.12s',
                        color: isActive ? '#a87fff' : '#94a3b8',
                        background: isActive ? 'rgba(124, 92, 252, 0.12)' : 'transparent',
                        borderLeft: isActive ? '2px solid #7c5cfc' : '2px solid transparent',
                        paddingLeft: isActive ? 'calc(0.75rem - 2px)' : '0.75rem',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = '#ffffff'
                          e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = '#94a3b8'
                          e.currentTarget.style.background = 'transparent'
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Back to Demo */}
      <div
        style={{
          padding: '0.75rem 1rem',
          borderTop: '1px solid #1e2d45',
          flexShrink: 0,
        }}
      >
        <Link
          href="/"
          style={{
            display: 'block',
            fontSize: '0.78rem',
            color: '#64748b',
            textDecoration: 'none',
            padding: '0.3rem 0.25rem',
            transition: 'color 0.12s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#94a3b8' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b' }}
        >
          ← Back to Demo
        </Link>
      </div>
    </aside>
  )
}
