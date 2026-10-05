import Image from 'next/image'

import Badge from './Badge'
import Icono from './Icono'
import { cx } from '@/lib/cx'
import type { Proyecto } from '@/types/proyecto'
import styles from './proyecto-card.module.css'

interface ProyectoCardProps {
  proyecto: Proyecto
  /** `destacado` ocupa el ancho completo de la cuadricula y pone la captura al lado. */
  variante?: 'normal' | 'destacado' | 'compacto'
  /** La primera tarjeta visible se carga con prioridad para mejorar el LCP. */
  prioridad?: boolean
}

/** Tarjeta de proyecto. Toda la tarjeta es clicable a traves del enlace del titulo. */
export default function ProyectoCard({
  proyecto,
  variante = 'normal',
  prioridad = false,
}: ProyectoCardProps) {
  const { img, altImg, titulo, lenguaje, descripcion, link, textoBoton } = proyecto

  return (
    <article className={cx(styles.card, styles[variante])}>
      <div className={styles.imagenWrapper}>
        <Image
          src={img}
          alt={altImg}
          fill
          sizes={
            variante === 'destacado'
              ? '(max-width: 768px) 100vw, 640px'
              : '(max-width: 768px) 100vw, 400px'
          }
          className={styles.imagen}
          priority={prioridad}
        />
      </div>
      <div className={styles.cuerpo}>
        <Badge lenguaje={lenguaje} />
        <h3 className={styles.titulo}>
          <a
            href={link}
            className={styles.enlace}
            target="_blank"
            rel="noopener noreferrer"
          >
            {titulo}
            <span className={styles.soloLectores}> (se abre en una pestaña nueva)</span>
          </a>
        </h3>
        <p className={styles.texto}>{descripcion}</p>
        <span className={styles.accion} aria-hidden="true">
          {textoBoton}
          <Icono nombre="externo" tamano={16} />
        </span>
      </div>
    </article>
  )
}
