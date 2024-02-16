import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import UiProvider from '@/app/ui-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Show Tracker',
  description: 'To keep track of your watch list',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UiProvider>{children}</UiProvider>
      </body>
    </html>
  );
}
