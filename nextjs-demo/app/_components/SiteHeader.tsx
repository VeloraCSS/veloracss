'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const IS_PROD = process.env.NODE_ENV === 'production'
const PLAYGROUND_URL = IS_PROD
  ? 'https://velorax.github.io/veloracss/playground/'
  : 'http://localhost:5173'

export default function SiteHeader() {
  const pathname = usePathname()

  const navLinks = [
    { label: 'Docs',       href: '/docs/getting-started' },
    { label: 'Components', href: '/docs/components/button' },
    { label: 'Playground', href: PLAYGROUND_URL, external: true },
    { label: 'Community',  href: '/community' },
  ]

  return (
    <header className="vsite-header">
      {/* Logo */}
      <Link href="/" className="vsite-header-logo">
        <Image src="/icon.png" alt="VeloraCSS" width={22} height={22} />
        <span>VeloraCSS</span>
        <span className="vel-badge vel-badge-primary vel-badge-sm" style={{ marginLeft: '0.25rem' }}>v1.0.1</span>
      </Link>

      {/* Nav */}
      <nav className="vsite-header-nav">
        {navLinks.map(link => (
          link.external ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener"
              className="vsite-header-link"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              className={`vsite-header-link${pathname?.startsWith(link.href.split('/').slice(0, 3).join('/')) ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          )
        ))}
      </nav>

      {/* End actions */}
      <div className="vsite-header-end">
        {/* Search trigger */}
        <button
          className="vel-btn vel-btn-ghost vel-btn-sm"
          style={{ gap: '0.5rem', color: 'var(--vel-color-muted)', fontSize: '0.8125rem', minWidth: '8rem', justifyContent: 'space-between' }}
          aria-label="Search"
        >
          <span>Search...</span>
          <kbd className="vel-kbd vel-kbd-sm">K</kbd>
        </button>

        {/* GitHub */}
        <a
          href="https://github.com/VeloraX/veloracss"
          target="_blank"
          rel="noopener"
          className="vel-btn vel-btn-ghost vel-btn-sm"
          aria-label="GitHub"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </a>
      </div>
    </header>
  )
}
