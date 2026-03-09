'use client'
import { useState } from 'react'

interface TerminalProps {
  filename?: string
  children: React.ReactNode  // pre-formatted code content (HTML string or JSX)
  rawText?: string           // plain text for copying (strips HTML tags)
  className?: string
}

export default function Terminal({ filename, children, rawText, className = '' }: TerminalProps) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    const text = rawText ?? (typeof children === 'string' ? children : '')
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <div className={`vsite-terminal ${className}`}>
      <div className="vsite-terminal-bar">
        <div className="vsite-terminal-dots">
          <span className="vsite-terminal-dot vsite-terminal-dot-red" />
          <span className="vsite-terminal-dot vsite-terminal-dot-yellow" />
          <span className="vsite-terminal-dot vsite-terminal-dot-green" />
        </div>
        {filename && <span className="vsite-terminal-filename">{filename}</span>}
        <button className="vsite-terminal-copy" onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="vsite-terminal-body">
        <pre style={{ margin: 0, whiteSpace: 'pre', overflowX: 'auto' }}>
          {children}
        </pre>
      </div>
    </div>
  )
}
