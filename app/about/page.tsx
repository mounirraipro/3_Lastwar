import type { Metadata } from 'next';
import JsonLd from '../components/JsonLd';

const aboutSchema = [
    {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Last War',
        url: 'https://lastwar.fr/about',
        description: 'Learn about Last War, our mission, and the team behind the game.',
        publisher: {
            '@type': 'Organization',
            name: 'Last War',
            url: 'https://lastwar.fr',
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Lahcen Aharouane',
        jobTitle: 'Game Designer & Web Developer',
        url: 'https://lastwar.fr/about',
        worksFor: {
            '@type': 'Organization',
            name: 'Last War',
            url: 'https://lastwar.fr',
        },
        description: 'Game designer and web developer specialising in browser-based games and SEO-optimised game landing pages.',
    },
];

export const metadata: Metadata = {
    title: 'About Us – Last War',
    description: 'Learn about Last War, our mission, and the team behind the game.',
    keywords: ['about Last War', 'game team', 'who made Last War'],
};

export default function AboutPage() {
    return (
        <>
            <JsonLd schema={aboutSchema} />
            <div className="page-header">
                <div className="container">
                    <h1 className="gradient-text">About Last War</h1>
                    <p>Our story, mission, and the passion behind every level.</p>
                </div>
            </div>

            <div className="page-content">
                <h2>Our Story</h2>
                <p>
                    Last War was born from a simple idea: what if playing Last War could be even simpler and more accessible?. The result is a game
                    that&apos;s instantly intuitive yet endlessly engaging — an experience unlike any other on the web.
                </p>
                <p>
                    We launched Last War with a clear vision — to create a free, accessible, and
                    beautifully designed game that anyone can enjoy. Whether you&apos;re taking a break,
                    unwinding after work, or looking for something your whole family can enjoy,
                    Last War has something for you.
                </p>

                <h2>Our Mission</h2>
                <p>
                    We believe that games are more than entertainment — they&apos;re tools for building
                    skills, improving focus, and finding moments of calm in a busy world. Our mission
                    is to make high-quality game experiences freely available to everyone, everywhere.
                </p>
                <p>
                    Every level in Last War is handcrafted with care. We obsess over the details
                    so you can simply enjoy the game.
                </p>

                <h2>What Makes Us Different</h2>
                <p>
                    Last War offers a unique experience compared to similar games in its category.
                </p>

                <h3>Key Features</h3>
                <ul>
                    <li><strong>Unique Gameplay:</strong> A fresh take on the genre with mechanics you won't find elsewhere.</li>
                    <li><strong>Progressive Difficulty:</strong> Start easy and scale up to real challenge as you improve.</li>
                    <li><strong>Beautiful Design:</strong> Carefully crafted visuals and audio for an immersive experience.</li>
                    <li><strong>No Downloads Required:</strong> Play instantly in your browser on any device.</li>
                    <li><strong>100% Free:</strong> No paywalls, no premium tiers. Just pure fun.</li>
                </ul>

                <h2>Our Values</h2>
                <p>
                    <strong>Accessibility First:</strong> We design for everyone. Our game works across
                    devices and screen sizes, with clear visuals and intuitive controls.
                </p>
                <p>
                    <strong>Privacy Matters:</strong> We respect your data. We don&apos;t collect personal
                    information from children, and we&apos;re transparent about how we use cookies and analytics.
                    Read our <a href="/privacy-policy">Privacy Policy</a> for full details.
                </p>
                <p>
                    <strong>Quality Over Quantity:</strong> We&apos;d rather have fewer beautifully crafted
                    levels than hundreds of mediocre ones. Every piece of content is tested and refined before release.
                </p>

                <h2>Get In Touch</h2>
                <p>
                    We love hearing from our community! Whether you have feedback, suggestions, bug reports,
                    or just want to say hello, don&apos;t hesitate to reach out through our{' '}
                    <a href="/contact">Contact page</a>. Your input helps us make Last War better for
                    everyone.
                </p>
            </div>
        </>
    );
}
