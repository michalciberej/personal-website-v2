import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import Cursor from './components/Cursor';
import './globals.css';

const sora = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Michal Ciberej | Frontend Developer',
  description: 'Personal website of Michal Ciberej',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={sora.className}>
        {children}
        <Cursor />
      </body>
    </html>
  );
}
