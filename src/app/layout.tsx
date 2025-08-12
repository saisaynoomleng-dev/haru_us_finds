import type { Metadata } from 'next';
import './globals.css';
import { Jost, Tenor } from '@/lib/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Haru USA Finds',
    default: 'Haru USA Finds',
  },
  description:
    'Haru USA Finds is an e-commerce store that sells and ships several US products to Myanmar. Products include supplements, beauty, haricare, fashion, electronics, snacks, bags, shoes, and sportwears.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Jost.variable} ${Tenor.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
