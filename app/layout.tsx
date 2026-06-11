import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Dexter Gui | Portfolio',
  description: 'Interactive developer portfolio — Full Stack Developer & Digital Architect',
  openGraph: {
    title: 'Dexter Gui | Portfolio',
    description: 'Interactive developer portfolio — Full Stack Developer & Digital Architect',
    images: [{ url: '/logo.svg', width: 1024, height: 1024, alt: 'DG Logo' }],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth scroll-pt-24`}>
      <body className="bg-[#0a0a0b] text-white font-sans antialiased selection:bg-white/20 overflow-x-hidden min-h-[100svh] flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
