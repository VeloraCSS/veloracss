import type { ReactNode } from 'react'
import SiteHeader from '../_components/SiteHeader'
import DocsSidebar from './_components/DocsSidebar'

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="vdoc-layout">
        <DocsSidebar />
        <main className="vdoc-main">
          {children}
        </main>
        <div className="vdoc-toc" /> {/* placeholder — pages fill via their own ToC */}
      </div>
    </>
  )
}
