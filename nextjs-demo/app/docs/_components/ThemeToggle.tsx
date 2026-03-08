'use client'
import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [light, setLight] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('vel-mode')
    if (saved === 'light') {
      setLight(true)
      document.documentElement.setAttribute('data-vel-mode', 'light')
    }
  }, [])

  const toggle = () => {
    const next = !light
    setLight(next)
    if (next) {
      document.documentElement.setAttribute('data-vel-mode', 'light')
      localStorage.setItem('vel-mode', 'light')
    } else {
      document.documentElement.removeAttribute('data-vel-mode')
      localStorage.setItem('vel-mode', 'dark')
    }
  }

  return (
    <button
      onClick={toggle}
      title={light ? 'Switch to dark mode' : 'Switch to light mode'}
      style={{
        background: 'none',
        border: '1px solid var(--vel-border-base)',
        borderRadius: '0.5rem',
        padding: '0.35rem 0.5rem',
        cursor: 'pointer',
        color: 'var(--vel-color-text)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.375rem',
        fontSize: '0.75rem',
        fontWeight: 500,
        transition: 'background 0.15s, border-color 0.15s',
      }}
    >
      {light ? (
        // Moon icon
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      ) : (
        // Sun icon
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      )}
      {light ? 'Dark' : 'Light'}
    </button>
  )
}
