import { MetadataRoute } from 'next';
import { servicesList } from '@/data/services';

export const dynamic = 'force-static';


export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.siznex.com';

    // Static routes
    const routes = [
        '',
        '/about',
        '/work',
        '/team',
        '/contact',
        '/privacy-policy',
        '/blog',
        '/marketing-solutions',
        '/mobile-app-development',
        '/web-development',
        '/services'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic routes (Services)
    const serviceRoutes = servicesList.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...serviceRoutes];
}
