import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/lib/auth-context';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'https://blazesites.com.au'),
  title: {
    default: 'Blazesites — AI-Powered Website Builder for Agencies',
    template: '%s | Blazesites',
  },
  description:
    'Build smarter websites in minutes with AI. The all-in-one platform for agencies and entrepreneurs to create professional, SEO-optimised websites.',
  keywords: [
    'website builder',
    'AI website',
    'agency platform',
    'website CMS',
    'no-code builder',
    'SEO websites',
    'Blazesites',
    'Australia',
  ],
  authors: [{ name: 'Blazesites' }],
  creator: 'Blazesites',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://blazesites.com.au',
    siteName: 'Blazesites',
    title: 'Blazesites — AI-Powered Website Builder for Agencies',
    description:
      'Build smarter websites in minutes with AI. The all-in-one platform for agencies and entrepreneurs.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Blazesites — Build smarter websites',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blazesites — AI-Powered Website Builder',
    description:
      'Build smarter websites in minutes with AI. The all-in-one platform for agencies and entrepreneurs.',
    images: ['/og-image.png'],
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
