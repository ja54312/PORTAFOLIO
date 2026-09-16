import type { StaticImageData } from 'next/image'

/**
 * Lenguajes/tecnologias que puede mostrar un <Badge/>.
 * Cada valor tiene una clase de color asociada en `elements/badge.module.css`.
 */
export const LENGUAJES = [
  'JS',
  'REACT',
  'NEXT-JS',
  'HTML-CSS',
  'Bootstrap',
  'WORDPRESS',
  'CLONE',
] as const

export type Lenguaje = (typeof LENGUAJES)[number]


export interface Proyecto {
  /**
   * Captura del proyecto, importada desde `src/assets/capturas`.
   * El import estatico aporta ancho y alto, evita el salto de layout y
   * ahorra al optimizador tener que descargar de un host externo.
   */
  readonly img: StaticImageData
  /** Texto alternativo de la captura. */
  readonly altImg: string
  readonly titulo: string
  readonly lenguaje: Lenguaje
  readonly descripcion: string
  /** Enlace publico al proyecto desplegado. */
  readonly link: string
  readonly textoBoton: string
}
