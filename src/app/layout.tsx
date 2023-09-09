import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import { Inter } from 'next/font/google';
import { MDXProvider } from '@mdx-js/react';
import { useMDXComponents } from './mdx-components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Test Blog',
  description: 'A static template for GitHub Pages from Next.js with MDX.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MDXProvider components={useMDXComponents}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </MDXProvider>
  )
}
