import { Footer } from '@/components/Footer';
import { ThemeModeScript } from 'flowbite-react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StoreProvider from './StoreProvider';
import './globals.css';
import NavBarComp from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <StoreProvider>
          <NavBarComp />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
