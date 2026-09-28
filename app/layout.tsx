import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@/components/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'PantryMind — Shared Kitchen Inventory & AI Scanning',
    template: '%s | PantryMind',
  },
  description:
    'Download PantryMind on the App Store. AI fridge scanning, household sync, expiry alerts, grocery lists, and optional PantryMind Plus. Free to start on iOS.',
  keywords: [
    'PantryMind',
    'App Store',
    'household inventory',
    'AI food scanning',
    'fridge inventory',
    'food waste',
    'grocery list',
    'PantryMind Plus',
    'iOS kitchen app',
  ],
  authors: [{ name: 'PantryMind' }],
  creator: 'PantryMind',
  publisher: 'PantryMind',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pantrymind.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pantrymind.app',
    title: 'PantryMind — Shared Kitchen Inventory & AI Scanning',
    description:
      'Scan your kitchen with AI, sync with your household, and get expiry alerts. Free to start — Plus optional.',
    siteName: 'PantryMind',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PantryMind — Shared Kitchen Inventory & AI Scanning',
    description:
      'Scan your kitchen with AI, sync with your household, and get expiry alerts. Free to start — Plus optional.',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <GoogleAnalytics />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
          {children}
        </div>
      </body>
    </html>
  );
}