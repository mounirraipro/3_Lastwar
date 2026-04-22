import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdSenseLoader from './components/AdSenseLoader';
import CookieConsentBanner from './components/CookieConsentBanner';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Last War – Free Online Browser Game",
    template: "%s | Last War",
  },
  description:
    "Play Last War online free — Play Last War free online — no download, no account needed. No download, no account needed.",
  keywords: [
    "Last War",
    "Last War online",
    "Last War free",
    "free online game",
    "browser game",
    "casual game",
  ],
  authors: [{ name: "Last War Team" }],
  creator: "Last War",
  publisher: "Last War",
  metadataBase: new URL("https://lastwar.fr"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Last War",
    title: "Last War – Free Online Browser Game",
    description:
      "Play Last War free in your browser — Play Last War free online — no download, no account needed.",
    url: "https://lastwar.fr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Last War – Free Online Browser Game",
    description:
      "Play Last War free online — no download, no account needed. Play free online!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function getPublisherId() {
  const raw = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  if (!raw) return '';
  return raw.startsWith('ca-pub-') ? raw : `ca-pub-${raw}`;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publisherId = getPublisherId();

  return (
    <html lang="en">
        <head>
        <AdSenseLoader publisherId={publisherId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Last War",
              url: "https://lastwar.fr",
              description:
                "Play Last War free online — no download, no account needed.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://lastwar.fr/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Last War",
              url: "https://lastwar.fr",
              logo: {
                "@type": "ImageObject",
                url: "https://lastwar.fr/og-image.png",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                url: "https://lastwar.fr/contact",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
