import Link from 'next/link'

const IS_PROD = process.env.NODE_ENV === 'production'

export default function SiteFooter() {
  return (
    <footer className="vsite-footer">
      <div className="vsite-footer-grid">
        <div>
          <div className="vsite-footer-col-title">Framework</div>
          <Link href="/docs/getting-started" className="vsite-footer-link">Getting Started</Link>
          <Link href="/docs/utilities/layout" className="vsite-footer-link">Utilities</Link>
          <Link href="/docs/components/button" className="vsite-footer-link">Components</Link>
          <Link href="/docs/innovations/color-genetics" className="vsite-footer-link">Innovations</Link>
          <Link href="/docs/configuration" className="vsite-footer-link">Configuration</Link>
        </div>
        <div>
          <div className="vsite-footer-col-title">Community</div>
          <a href="https://github.com/VeloraX/veloracss" className="vsite-footer-link" target="_blank" rel="noopener">GitHub</a>
          <a href="https://discord.gg/veloracss" className="vsite-footer-link" target="_blank" rel="noopener">Discord</a>
          <Link href="/community" className="vsite-footer-link">Component Registry</Link>
          <a href="https://bsky.app/profile/veloracss.bsky.social" className="vsite-footer-link" target="_blank" rel="noopener">Bluesky</a>
        </div>
        <div>
          <div className="vsite-footer-col-title">Resources</div>
          <a href={IS_PROD ? 'https://velorax.github.io/veloracss/playground/' : 'http://localhost:5173'} className="vsite-footer-link" target="_blank" rel="noopener">Playground</a>
          <a href="https://www.npmjs.com/package/veloracss" className="vsite-footer-link" target="_blank" rel="noopener">npm</a>
          <Link href="/docs/changelog" className="vsite-footer-link">Changelog</Link>
        </div>
        <div>
          <div className="vsite-footer-col-title">Legal</div>
          <a href="https://github.com/VeloraX/veloracss/blob/main/LICENSE" className="vsite-footer-link" target="_blank" rel="noopener">MIT License</a>
          <div className="vsite-footer-link" style={{ cursor: 'default', marginTop: '1rem', lineHeight: 1.5 }}>
            AI-designed.<br />Human-shipped.
          </div>
        </div>
      </div>
      <div className="vsite-footer-bottom">
        <span>© 2026 VeloraX. All rights reserved.</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>veloracss</span>
          <span className="vel-badge vel-badge-primary vel-badge-sm">v1.0.1</span>
        </span>
      </div>
    </footer>
  )
}
