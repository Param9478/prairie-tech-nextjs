import ServicesClient from '@/components/ServicesClient'

// Optimized for High Prairie & Northern Alberta local search
export const metadata = {
    title: 'Web Design & Development Services | High Prairie, AB',
    description: 'Professional web development in High Prairie & Northern Alberta. Business sites from $800, E-commerce from $1,500. Fast, SEO-ready, and mobile-responsive solutions.',
    keywords: [
        'Web Design High Prairie',
        'Alberta Web Development Pricing',
        'E-commerce Website Cost Alberta',
        'Small Business Web Design AB',
        'Website Maintenance Packages',
        'Custom Web Apps High Prairie'
    ],
    alternates: {
        canonical: 'https://prairietechs.com/services'
    },
    openGraph: {
        title: 'Web Services & Fixed Pricing | Prairie Tech Services',
        description: 'Affordable web solutions for Alberta businesses. Business websites, online stores, and custom apps with clear pricing.',
        url: 'https://prairietechs.com/services',
        siteName: 'Prairie Tech Services',
        images: [
            {
                url: '/services-og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Prairie Tech Services - Web Development Pricing'
            },
        ],
        locale: 'en_CA',
        type: 'website',
    },
}

export default function ServicesPage() {
    return <ServicesClient />
}