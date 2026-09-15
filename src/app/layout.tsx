import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'

import { PERFIL } from '@/data/perfil'
import './globals.css'

/*
 * `next/font` descarga y auto-hospeda la tipografia en build: elimina la peticion
 * de bloqueo a fonts.googleapis.com que tenia el index.html original. Ademas se
 * cargan los pesos que el CSS realmente usa (400/500/700); antes solo se pedia
 * la variante italic 300 y el navegador sintetizaba el resto.
 */
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--fuente-roboto',
})

const DESCRIPCION =
  'Soy José Antonio Alatorre Chávez, desarrollador Full Stack con mayor dominio de Front-End. Este es mi portafolio de trabajos. Trabajemos juntos =)'

export const metadata: Metadata = {
  title: `${PERFIL.alias} | Full Stack Developer`,
  description: DESCRIPCION,
  authors: [{ name: PERFIL.nombre, url: PERFIL.redes.github }],
  creator: PERFIL.nombre,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    title: `${PERFIL.alias} | Full Stack Developer`,
    description: DESCRIPCION,
    siteName: PERFIL.alias,
  },
  twitter: {
    card: 'summary',
    title: `${PERFIL.alias} | Full Stack Developer`,
    description: DESCRIPCION,
    creator: '@JA54312',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#212529',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={roboto.variable}>
      <body>{children}</body>
    </html>
  )
}
