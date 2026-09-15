import { cx } from '@/lib/cx'
import type { Lenguaje } from '@/types/proyecto'
import styles from './badge.module.css'

interface BadgeProps {
  lenguaje: Lenguaje
}

/** Etiqueta de color con la tecnologia principal de un proyecto. */
export default function Badge({ lenguaje }: BadgeProps) {
  return <span className={cx(styles.badge, styles[lenguaje])}>{lenguaje}</span>
}
