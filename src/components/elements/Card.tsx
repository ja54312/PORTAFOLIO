import Image from 'next/image'

import Badge from './Badge'
import type { Proyecto } from '@/types/proyecto'
import styles from './card.module.css'

interface CardProps {
  proyecto: Proyecto
  /**
   * Las primeras tarjetas visibles se cargan con prioridad para mejorar el LCP;
   * el resto queda en carga diferida.
   */
  prioridad?: boolean
}

/** Tarjeta con la captura, la tecnologia y el enlace de un proyecto. */
export default function Card({ proyecto, prioridad = false }: CardProps) {
  const { img, altImg, titulo, lenguaje, descripcion, link, textoBoton } = proyecto

  return (
    <article className={styles.card}>
      <div className={styles.imagenWrapper}>
        <Image
          src={img}
          alt={altImg}
          fill
          /* La tarjeta mide 16rem (256px) fijos en todos los tamanos. */
          sizes="256px"
          className={styles.imagen}
          priority={prioridad}
        />
      </div>
      <div className={styles.cuerpo}>
        <Badge lenguaje={lenguaje} />
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.texto}>{descripcion}</p>
        <a
          href={link}
          className={styles.boton}
          target="_blank"
          rel="noopener noreferrer"
        >
          {textoBoton}
          <span className={styles.soloLectores}> (se abre en una pestaña nueva)</span>
        </a>
      </div>
    </article>
  )
}
