import type { Metadata, Viewport } from 'next'
import '@fontsource-variable/inter'
import './globals.css'

export const metadata: Metadata = {
  title: 'WL Hnos. & Asoc. — Asesoramiento Financiero Integral para PyMEs',
  description:
    'Estudio de Ciencias Económicas en Catamarca y el NOA. Impuestos, contabilidad, gestión financiera, laboral y mercado de capitales para tu PyME.',
  keywords: 'asesoramiento financiero, contabilidad, impuestos, PyME, Catamarca, NOA, mercado de capitales',
}

export const viewport: Viewport = {
  themeColor: '#0f1e45',
  initialScale: 1,
  width: 'device-width',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-surface scroll-smooth">
      <body className="font-body antialiased text-text-primary">
        {children}
      </body>
    </html>
  )
}
