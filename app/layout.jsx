import { Geist, Geist_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-body' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  metadataBase: new URL('https://prairietechs.com'),
  title: {
    default: 'Prairie Tech Services | Web Development Alberta',
    template: '%s | Prairie Tech Services',
  },
  description:
    'Full-stack web development for Alberta businesses. Websites, e-commerce, and custom web apps — built right, delivered fast.',
  keywords: [
    'web development Alberta',
    'website design High Prairie',
    'React developer',
    'MERN stack',
    'freelance web developer Canada',
    'e-commerce Alberta',
    'web design Peace Country',
  ],
  authors: [{ name: 'Prairie Tech Services' }],
  creator: 'Prairie Tech Services',
  robots: { index: true, follow: true },

  // Favicon te Icons fix
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' }, // public/favicon/favicon.ico
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',

  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://prairietechs.com',
    siteName: 'Prairie Tech Services',
    title: 'Prairie Tech Services | Web Development Alberta',
    description:
      'Full-stack web development for Alberta businesses. Websites, e-commerce, and custom web apps.',
    images: [{
      url: '/assets/og-image.jpg', // public/assets/og-image.jpg
      width: 1200,
      height: 630,
      alt: 'Prairie Tech Services'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prairie Tech Services | Web Development Alberta',
    description: 'Full-stack web development for Alberta businesses.',
    images: ['/assets/og-image.jpg'], // public/assets/og-image.jpg
  },
  other: {
    'geo.region': 'CA-AB',
    'geo.placename': 'High Prairie, Alberta',
    'geo.position': '55.4333;-116.4833',
    ICBM: '55.4333, -116.4833',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}