import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Swadvice | Cabinet de conseil en transformation digitale et agilité',
  description: 'Swadvice accompagne les entreprises dans leurs transformations organisationnelles, digitales et culturelles. Experts en agilité, IA et coaching.',
  keywords: 'conseil, transformation digitale, agilité, IA, coaching, entreprise, transformation organisationnelle',
  openGraph: {
    title: 'Swadvice | Cabinet de conseil en transformation digitale et agilité',
    description: 'Swadvice accompagne les entreprises dans leurs transformations organisationnelles, digitales et culturelles. Experts en agilité, IA et coaching.',
    url: 'https://swadvice.fr',
    siteName: 'Swadvice',
    images: [
      {
        url: '/swadvice-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Swadvice - Human first. Tech smart. Impact real.',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swadvice | Cabinet de conseil en transformation digitale et agilité',
    description: 'Swadvice accompagne les entreprises dans leurs transformations organisationnelles, digitales et culturelles. Experts en agilité, IA et coaching.',
    images: ['/swadvice-og.jpg'],
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
    canonical: 'https://swadvice.fr',
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}