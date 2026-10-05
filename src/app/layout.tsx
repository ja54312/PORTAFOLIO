import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { PERFIL } from '@/data/perfil'
import './globals.css'

/*
 * `next/font` descarga y auto-hospeda las tipografias en build, sin peticiones
 * de bloqueo a fonts.googleapis.com. Geist para el texto y Geist Mono para los
 * detalles tecnicos (etiquetas, fechas, numeracion de secciones).
 */
const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--fuente-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--fuente-geist-mono',
})

const DESCRIPCION = `Soy ${PERFIL.nombre}, ${PERFIL.titulo} con ${PERFIL.aniosExperiencia} años de experiencia en Next.js, NestJS, GraphQL, AWS y GCP. Conoce mi experiencia y mis proyectos.`

const TITULO = `${PERFIL.alias} | ${PERFIL.titulo}`

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  authors: [{ name: PERFIL.nombre, url: PERFIL.redes.github }],
  creator: PERFIL.nombre,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    title: TITULO,
    description: DESCRIPCION,
    siteName: PERFIL.alias,
  },
  twitter: {
    card: 'summary',
    title: TITULO,
    description: DESCRIPCION,
    creator: '@JA54312',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0b0f',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
