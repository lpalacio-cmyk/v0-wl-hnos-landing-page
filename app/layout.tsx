import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Poppins, Open_Sans } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WL Hnos. & Asoc. — Asesoramiento Financiero Integral para PyMEs',
  description:
    'Estudio de Ciencias Económicas en Catamarca y el NOA. Impuestos, contabilidad, gestión financiera, laboral y mercado de capitales para tu PyME.',
  keywords: 'asesoramiento financiero, contabilidad, impuestos, PyME, Catamarca, NOA, mercado de capitales',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${openSans.variable} bg-wl-bg scroll-smooth`}>
      <body className="font-body antialiased text-wl-navy">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
