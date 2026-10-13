import type { Metadata, Viewport } from 'next'
import { Archivo, Geist_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { themeScript } from '@/lib/theme'
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
  title: 'Emil Zawistowski',
  description:
    'Emil Zawistowski — hearing science, auditory cognition and spatial hearing research using psychoacoustics, EEG and computational methods.',
  authors: [{ name: 'Emil Zawistowski' }],
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    'max-image-preview': 'none',
  },
  verification: {
    google: 'Hbb_R8BZNqhMMUliz_B2JVHV86_6ewmKY408pMqHjM0',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Emil Zawistowski',
    description:
      'Emil Zawistowski — hearing science, auditory cognition and spatial hearing research using psychoacoustics, EEG and computational methods.',
    url: '/',
    siteName: 'Emil Zawistowski',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Emil Zawistowski — Hearing Science | Auditory Cognition',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  icons: {
    icon: [
      // Fallback for browsers without SVG icons; the size keeps Chrome from preferring it.
      { url: '/favicon/favicon.ico', sizes: '32x32' },
      // Turns light when the browser itself is in dark mode.
      { url: '/favicon/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-GB"
      className={`${archivo.variable} ${geistMono.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
