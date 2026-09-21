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
  title: 'GuideTalk — AI Anime & Gaming Character Companion App',
  description: 'Chat with your favourite characters from Genshin Impact, anime, and games in their authentic voice, powered by Azure OpenAI. Features live dynamic artwork, instant look cycling, rivals discovery, and daily prophecies.',
  openGraph: {
    title: 'GuideTalk — AI Anime & Gaming Character Companion App',
    description: 'Chat with characters from Genshin Impact, anime, and games — in their own voice, powered by Azure OpenAI.',
    url: 'https://guidetalk.onrender.com',
    siteName: 'GuideTalk',
    images: [
      {
        url: 'https://server.wallpaperalchemy.com/storage/wallpapers/562/satoru-gojo-4k-anime-wallpaper-jujutsu-kaisen.jpg',
        width: 1200,
        height: 630,
        alt: 'GuideTalk AI Character Companion App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GuideTalk — AI Anime Companion App',
    description: 'Chat with anime & game characters in their authentic voice, powered by Azure OpenAI.',
    images: ['https://server.wallpaperalchemy.com/storage/wallpapers/562/satoru-gojo-4k-anime-wallpaper-jujutsu-kaisen.jpg'],
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
      <body className={`${plusJakartaSans.variable} ${inter.variable} font-sans antialiased overflow-x-hidden bg-surface text-on-surface`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
