import { Suspense } from 'react'
import HomeClient from '@/components/HomeClient'

// --- SEO Metadata Update ---
export const metadata = {
  title: 'Prairie Tech Services | Web Development High Prairie, AB',
  description: 'Custom, high-performance websites for local businesses in High Prairie and Northern Alberta. SEO-optimized, mobile-responsive, and fast.',
  keywords: ['Web Design High Prairie', 'Alberta Web Developers', 'SEO Services High Prairie', 'Small Business Websites'],
  metadataBase: new URL('https://prairietechs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Prairie Tech Services',
    description: 'Modern Web Solutions for Alberta Businesses',
    url: 'https://prairietechs.com',
    siteName: 'Prairie Tech Services',
    images: [
      {
        url: '/og-image.jpg', // Public folder vich image honi chahidi hai
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeClient />
    </Suspense>
  )
}