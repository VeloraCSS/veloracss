import type { Metadata } from 'next'
import '../styles/velora.css'

export const metadata: Metadata = {
  title: 'VeloraCSS — Next.js Demo',
  description: 'VeloraCSS utility-first CSS framework working with Next.js App Router',
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
