import type { Metadata } from 'next'
import { Inter, Barlow_Condensed } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EmailPopup from '@/components/EmailPopup'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Faith Makes Sense | Christian Apologetics',
    template: '%s | Faith Makes Sense',
  },
  description:
    'Apologetics for the local church. Free resources, training, and tools to help you learn, defend, and share your faith.',
  keywords: [
    'Christian apologetics',
    'Faith Makes Sense',
    'Bill Yomes',
    'GODFIDENCE',
    'Adelphos Academy',
    'apologetics resources',
    'church training',
  ],
  openGraph: {
    title: 'Faith Makes Sense | Christian Apologetics',
    description:
      'Apologetics for the local church. Free resources, training, and tools to help you learn, defend, and share your faith.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <EmailPopup />
      </body>
    </html>
  )
}
