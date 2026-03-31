import ProjectsClient from '@/components/ProjectsClient'

// --- SEO Metadata Update for Projects Page ---
export const metadata = {
    title: 'Our Portfolio | Web Design & E-commerce Projects in Alberta',
    description: 'Explore our latest web development projects. From local business websites in High Prairie to custom E-commerce stores and React apps across Alberta. See how we deliver results.',
    keywords: [
        'Web Design Portfolio Alberta',
        'E-commerce Store Developer High Prairie',
        'Custom Web Apps Portfolio',
        'React Project Examples',
        'Local Alberta Business Websites',
        'Prairie Tech Services Projects'
    ],
    alternates: {
        canonical: 'https://prairietechs.com/projects'
    },
    openGraph: {
        title: 'Featured Projects | Prairie Tech Services',
        description: 'Check out the websites and digital solutions we’ve built for businesses in Northern Alberta. High-performance and SEO-ready.',
        url: 'https://prairietechs.com/projects',
        images: [
            {
                url: '/portfolio-og-image.jpg', // Tuhade best project da screenshot use karo
                width: 1200,
                height: 630,
                alt: 'Prairie Tech Services Portfolio Gallery'
            },
        ],
    },
}

export default function ProjectsPage() {
    return <ProjectsClient />
}