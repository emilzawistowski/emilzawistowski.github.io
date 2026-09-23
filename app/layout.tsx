import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Geist_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://emilzawistowski.github.io'),
  title: 'Emil Zawistowski — Hearing Science, Auditory Perception & Cognition',
  description:
    'Emil Zawistowski — hearing science, auditory cognition and spatial hearing research using psychoacoustics, EEG and computational methods.',
  authors: [{ name: 'Emil Zawistowski' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Emil Zawistowski — Hearing Science, Auditory Perception & Cognition',
    description:
      'Emil Zawistowski — hearing science, auditory cognition and spatial hearing research using psychoacoustics, EEG and computational methods.',
    url: '/',
    siteName: 'Emil Zawistowski',
    images: [
      {
        url: '/portrait_emil.jpg',
        width: 725,
        height: 905,
        alt: 'Portrait of Emil Zawistowski',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${geistMono.variable} bg-background`}
    >
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
