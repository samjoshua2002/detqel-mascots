import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sintra X AI Team - Hire Your First AI Employee',
  description: 'Meet Sintra X - 12 highly trained AI teammates, perfect for tasks you keep meaning to delegate. Your AI team that never sleeps.',
  openGraph: {
    title: 'Sintra X AI Team',
    description: 'Hire your first AI employee. 12 highly trained AI teammates for your business.',
    url: 'https://sintrax.com',
    siteName: 'Sintra X',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Sintra X AI Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sintra X AI Team',
    description: 'Hire your first AI employee. 12 highly trained AI teammates for your business.',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#131313',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body className={`${plusJakartaSans.variable} ${inter.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
