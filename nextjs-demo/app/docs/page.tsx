'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DocsPage() {
  const router = useRouter()
  useEffect(() => { router.replace('/docs/getting-started') }, [router])
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '3px solid #1e2d45', borderTopColor: '#7c5cfc', animation: 'docs-spin 0.7s linear infinite' }} />
      <style>{`@keyframes docs-spin { to { transform: rotate(360deg) } }`}</style>
      <span style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>Loading docs…</span>
    </div>
  )
}
