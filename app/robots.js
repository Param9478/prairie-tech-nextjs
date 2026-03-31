export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Je tusi koi folder lukanuna chaunde ho (optional)
        },
        sitemap: 'https://prairietechs.com/sitemap.xml',
    }
}