'use client'

import Link from 'next/link'
import { useState } from 'react'
import { navSections } from '../_data/nav'
import ThemeToggle from './ThemeToggle'

interface DocsSidebarProps {
  currentSlug: string
}

const sidebarStyles = `
  .vdocs-sidebar {
    position: fixed; top: 0; left: 0; width: 260px; height: 100vh;
    background: var(--vel-surface-1); border-right: 1px solid var(--vel-border-base);
    overflow-y: auto; display: flex; flex-direction: column; z-index: 40;
    scrollbar-width: thin; scrollbar-color: var(--vel-border-base) transparent;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  }
  .vdocs-sidebar-header {
    padding: 1.25rem 1rem 1rem;
    border-bottom: 1px solid var(--vel-border-base);
    display: flex; align-items: center; gap: 0.5rem; flex-shrink: 0;
  }
  .vdocs-sidebar-logo {
    font-size: 1rem; font-weight: 800; color: var(--vel-color-text);
    text-decoration: none; letter-spacing: -0.02em;
  }
  .vdocs-sidebar-badge {
    font-size: 0.65rem; font-weight: 600;
    color: var(--vel-color-primary);
    background: var(--vel-color-primary-light);
    border: 1px solid oklch(65% 0.21 var(--vel-dna-hue, 258) / 0.3);
    padding: 1px 6px; border-radius: 99px; letter-spacing: 0.04em;
  }
  .vdocs-sidebar-search-wrap {
    padding: 0.75rem 1rem; border-bottom: 1px solid var(--vel-border-base); flex-shrink: 0;
  }
  .vdocs-sidebar-search {
    width: 100%; box-sizing: border-box;
    padding: 0.4rem 0.65rem; border-radius: 0.5rem;
    background: var(--vel-surface-0); border: 1px solid var(--vel-border-base);
    color: var(--vel-color-text); font-size: 0.8rem; outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
    font-family: inherit;
  }
  .vdocs-sidebar-search::placeholder { color: var(--vel-color-muted); }
  .vdocs-sidebar-search:focus {
    border-color: var(--vel-color-primary);
    box-shadow: 0 0 0 2px oklch(65% 0.21 var(--vel-dna-hue, 258) / 0.2);
  }
  .vdocs-sidebar-nav { flex: 1; padding: 0.75rem 0.5rem; overflow-y: auto; }
  .vdocs-sidebar-section { margin-bottom: 1.25rem; }
  .vdocs-sidebar-section-title {
    font-size: 0.65rem; font-weight: 600; color: var(--vel-color-muted);
    letter-spacing: 0.1em; text-transform: uppercase;
    padding: 0 0.5rem; margin-bottom: 0.3rem;
  }
  .vdocs-sidebar-list { list-style: none; margin: 0; padding: 0; }
  .vdocs-sidebar-link {
    display: block; padding: 0.3rem 0.75rem; border-radius: 0.375rem;
    font-size: 0.8rem; text-decoration: none;
    transition: color 0.12s, background 0.12s;
    color: var(--vel-color-muted);
    background: transparent; border-left: 2px solid transparent;
  }
  .vdocs-sidebar-link:hover {
    color: var(--vel-color-text);
    background: var(--vel-surface-2);
  }
  .vdocs-sidebar-link.active {
    color: var(--vel-color-primary);
    background: var(--vel-color-primary-light);
    border-left-color: var(--vel-color-primary);
    padding-left: calc(0.75rem - 2px);
  }
  .vdocs-sidebar-footer {
    padding: 0.75rem 1rem; border-top: 1px solid var(--vel-border-base); flex-shrink: 0;
  }
  .vdocs-sidebar-back {
    display: block; font-size: 0.78rem; color: var(--vel-color-muted);
    text-decoration: none; padding: 0.3rem 0.25rem; transition: color 0.12s;
  }
  .vdocs-sidebar-back:hover { color: var(--vel-color-text); }
`

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
    <>
      <style dangerouslySetInnerHTML={{ __html: sidebarStyles }} />
      <aside className="vdocs-sidebar">
        {/* Logo */}
        <div className="vdocs-sidebar-header">
          <Link href="/" className="vdocs-sidebar-logo">VeloraCSS</Link>
          <span className="vdocs-sidebar-badge">Docs</span>
          <span style={{ flex: 1 }} />
          <ThemeToggle />
        </div>

        {/* Search */}
        <div className="vdocs-sidebar-search-wrap">
          <input
            type="search"
            placeholder="Search docs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="vdocs-sidebar-search"
          />
        </div>

        {/* Nav sections */}
        <nav className="vdocs-sidebar-nav">
          {filtered.map((section) => (
            <div key={section.title} className="vdocs-sidebar-section">
              <p className="vdocs-sidebar-section-title">{section.title}</p>
              <ul className="vdocs-sidebar-list">
                {section.items.map((item) => {
                  const isActive = item.slug === currentSlug
                  return (
                    <li key={item.slug}>
                      <Link
                        href={`/docs/${item.slug}`}
                        className={`vdocs-sidebar-link${isActive ? ' active' : ''}`}
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
        <div className="vdocs-sidebar-footer">
          <Link href="/" className="vdocs-sidebar-back">← Back to Demo</Link>
        </div>
      </aside>
    </>
  )
}
