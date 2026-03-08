import type { Metadata, Viewport } from 'next'
import '../styles/velora.css'
import './globals.css'

export const viewport: Viewport = { colorScheme: 'dark' }

export const metadata: Metadata = {
  title: 'VeloraCSS — AI-designed. Human-shipped.',
  description: 'A utility-first CSS framework with Color Genetics, Container Intelligence, and zero-JS State Machines. One hue changes everything.',
  keywords: ['css framework', 'utility-first', 'oklch', 'color genetics', 'container queries', 'css state machine'],
  authors: [{ name: 'VeloraX' }],
  openGraph: {
    title: 'VeloraCSS — AI-designed. Human-shipped.',
    description: 'A utility-first CSS framework with Color Genetics, Container Intelligence, and zero-JS State Machines.',
    url: 'https://velorax.github.io/veloracss/',
    siteName: 'VeloraCSS',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
