import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: {
    default: 'deutschkirschfan - Kirschwasser und deutsche Spirituosen',
    template: '%s | deutschkirschfan'
  },
  description: 'Informationsportal über traditionellen deutschen Kirschbrand Kirschwasser aus dem Schwarzwald und regionale alkoholische Getränke Deutschlands.',
  keywords: ['Kirschwasser', 'Kirschbrand', 'Schwarzwald', 'deutsche Spirituosen', 'Black Forest', 'Obstbrand'],
  authors: [{ name: 'deutschkirschfan' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://deutschkirschfan.com',
    siteName: 'deutschkirschfan',
    title: 'deutschkirschfan - Kirschwasser und deutsche Spirituosen',
    description: 'Informationsportal über traditionellen deutschen Kirschbrand Kirschwasser aus dem Schwarzwald.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1520',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
