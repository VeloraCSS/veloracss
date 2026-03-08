// Docs layout: sidebar + main content
// basePath awareness: use relative paths for links, not absolute /docs/...
// The sidebar is fixed 260px wide on desktop
// Main content has padding-left: 260px on desktop
// On mobile: sidebar hidden by default (just handle desktop for now)

import type { ReactNode } from 'react'
import DocsLayoutClient from './_components/DocsLayoutClient'

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--vel-surface-0)' }}>
      <DocsLayoutClient />
      <main style={{ marginLeft: '260px', flex: 1, minHeight: '100vh' }}>
        {children}
      </main>
    </div>
  )
}
