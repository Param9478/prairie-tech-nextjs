import AboutClient from '@/components/AboutClient'

// --- SEO Metadata Update for About Page ---
export const metadata = {
    title: 'About Us | Local Web Developers in High Prairie, AB',
    description: 'Full-stack web development studio in High Prairie, Alberta. Specialized in React, Next.js, and custom IT solutions for local businesses. Meet the team behind Prairie Tech Services.',
    keywords: [
        'Web Development Team Alberta',
        'Parminder Singh Web Developer',
        'React Developer High Prairie',
        'High Prairie IT Solutions',
        'Local Alberta Web Studio'
    ],
    alternates: {
        canonical: 'https://prairietechs.com/about'
    },
    openGraph: {
        title: 'Meet Prairie Tech Services | High Prairie, AB',
        description: 'Learn about our journey, our modern tech stack, and how we help Northern Alberta businesses grow online.',
        url: 'https://prairietechs.com/about',
        images: [
            {
                url: '/about-og-image.jpg', // Je alag image hai, nahi taan default wali rehne deo
                width: 1200,
                height: 630,
                alt: 'About Prairie Tech Services Team'
            },
        ],
    },
}

export default function AboutPage() {
    return <AboutClient />
}