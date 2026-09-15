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
  /** URL de la captura del proyecto. */
  readonly img: string
  /** Texto alternativo de la captura. */
  readonly altImg: string
  readonly titulo: string
  readonly lenguaje: Lenguaje
  readonly descripcion: string
  /** Enlace publico al proyecto desplegado. */
  readonly link: string
  readonly textoBoton: string
}
