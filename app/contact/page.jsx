import ContactClient from '@/components/ContactClient'

// --- SEO Metadata Update for Contact Page ---
export const metadata = {
    title: 'Contact Us | Book a Free Web Design Consultation in High Prairie',
    description: 'Ready to start your project? Contact Prairie Tech Services for a free 30-minute consultation. Expert web development & IT solutions for High Prairie and Northern Alberta businesses.',
    keywords: [
        'Book Web Design Consultation',
        'Hire React Developer Alberta',
        'High Prairie Web Design Contact',
        'Free IT Quote High Prairie',
        'Website Developers Near Me'
    ],
    alternates: {
        canonical: 'https://prairietechs.com/contact'
    },
    openGraph: {
        title: 'Get a Free Quote | Prairie Tech Services',
        description: 'Tell us about your project. From business websites to custom web apps, we’re here to help Northern Alberta grow.',
        url: 'https://prairietechs.com/contact',
        type: 'website',
    },
}

export default function ContactPage() {
    return <ContactClient />
}