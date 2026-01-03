import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
});

export const metadata: Metadata = {
  title: 'immobilien-photograph.wien - Luxuriöse Immobilienfotografie',
  description: 'Professionelle Immobilienfotografie und Videografie für anspruchsvolle Verkäufer in Wien',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${spaceGrotesk.variable} ${cormorantGaramond.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
