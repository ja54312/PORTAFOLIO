import { cx } from '@/lib/cx'
import type { Lenguaje } from '@/types/proyecto'
import styles from './badge.module.css'

interface BadgeProps {
  lenguaje: Lenguaje
}

/** Etiqueta con la tecnologia principal de un proyecto; el punto lleva su color. */
export default function Badge({ lenguaje }: BadgeProps) {
  return <span className={cx(styles.badge, styles[lenguaje])}>{lenguaje}</span>
}
