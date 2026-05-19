import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/navbar'
import CustomCursor from '@/components/custom-cursor'
import SmoothScroll from '@/components/smooth-scroll'
import GridLines from '@/components/grid-lines'

const geistSans = localFont({
  src: '../public/geist-latin.woff2',
  variable: '--font-sans',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
})

const spaceGrotesk = localFont({
  src: '../public/space-grotesk-latin.woff2',
  variable: '--font-display',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'ScrollCraft — Build stunning websites, faster.',
  description: 'Craft immersive scroll experiences that captivate and convert.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black font-sans">
        <CustomCursor />
        <Navbar />
        <GridLines />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
