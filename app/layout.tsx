import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@/components/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'PantryMind - Smart Household Inventory Tracking App',
    template: '%s | PantryMind'
  },
  description: 'Download PantryMind from the App Store. AI-powered food scanning, real-time household sync, and smart notifications to reduce food waste. Free on iOS.',
  keywords: [
    'download PantryMind',
    'App Store',
    'household inventory',
    'food tracking',
    'AI scanning',
    'family app',
    'food waste reduction',
    'grocery management',
    'iOS app',
    'kitchen organization'
  ],
  authors: [{ name: 'PantryMind Team' }],
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
    title: 'PantryMind - Smart Household Inventory Tracking App',
    description: 'Download PantryMind from the App Store. Never waste food again with AI-powered scanning and real-time household sync.',
    siteName: 'PantryMind',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PantryMind - Smart Household Inventory Tracking App',
    description: 'Download PantryMind from the App Store. Never waste food again with AI-powered scanning and real-time household sync.',
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