import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dan Castillo Dev',
  description: 'dancastill.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-primary-dark">{children}</body>
    </html>
  )
}
