import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Camin Pulse | Le pouls qui guide vos produits',
  description: 'Camin Pulse accompagne les entreprises dans leurs transformations organisationnelles, digitales et culturelles. Experts en agilité, IA et coaching.',
  keywords: 'conseil, transformation digitale, agilité, IA, coaching, entreprise, transformation organisationnelle',
  openGraph: {
    title: 'Camin Pulse | Le pouls qui guide vos produits',
    description: 'Camin Pulse accompagne les entreprises dans leurs transformations organisationnelles, digitales et culturelles. Experts en agilité, IA et coaching.',
    url: 'https://caminpulse.com',
    siteName: 'Camin Pulse',
    images: [
      {
        url: '/camin_pulse_logo_full.svg',
        width: 1200,
        height: 630,
        alt: 'Camin Pulse - Le pouls qui guide vos produits',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camin Pulse | Le pouls qui guide vos produits',
    description: 'Camin Pulse accompagne les entreprises dans leurs transformations organisationnelles, digitales et culturelles. Experts en agilité, IA et coaching.',
    images: ['/camin_pulse_logo_full.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://caminpulse.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/camin_pulse_favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}