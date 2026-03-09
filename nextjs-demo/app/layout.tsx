import type { Metadata, Viewport } from 'next'
import '../styles/velora.css'
import './_styles/site.css'
import './globals.css'
import SiteFooter from './_components/SiteFooter'

export const viewport: Viewport = { colorScheme: 'dark' }

export const metadata: Metadata = {
  title: 'VeloraCSS — AI-designed. Human-shipped.',
  description: 'A utility-first CSS framework with Color Genetics, Container Intelligence, and zero-JS State Machines. One hue changes everything.',
  keywords: ['css framework', 'utility-first', 'oklch', 'color genetics', 'container queries', 'css state machine'],
  authors: [{ name: 'VeloraX' }],
  icons: {
    icon: '/veloracss/icon.png',
    shortcut: '/veloracss/icon.png',
    apple: '/veloracss/icon.png',
  },
  openGraph: {
    title: 'VeloraCSS — AI-designed. Human-shipped.',
    description: 'A utility-first CSS framework with Color Genetics, Container Intelligence, and zero-JS State Machines.',
    url: 'https://velorax.github.io/veloracss/',
    siteName: 'VeloraCSS',
    type: 'website',
    images: [{ url: 'https://velorax.github.io/veloracss/icon.png', width: 512, height: 512 }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
