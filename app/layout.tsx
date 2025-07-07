import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SocialEagle.AI',
  description: 'Created By SocialEagle.AI',
  generator: 'SocialEagle.AI',
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
