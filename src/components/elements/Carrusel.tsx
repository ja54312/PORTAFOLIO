'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import Card from './Card'
import flecha from '@/assets/flecha.png'
import useDeviceDetect, { type Device } from '@/hooks/useDeviceDetect'
import { cx } from '@/lib/cx'
import type { Proyecto } from '@/types/proyecto'
import styles from './carrusel.module.css'

/** Tarjetas visibles a la vez en cada tipo de dispositivo. */
const TARJETAS_VISIBLES: Record<Device, number> = {
  phone: 1,
  tablet: 2,
  desktop: 3,
}

/** Antes de conocer el dispositivo se asume 1: coincide en servidor y cliente. */
const VISIBLES_POR_DEFECTO = 1

interface CarruselProps {
  proyectos: readonly Proyecto[]
  /** Nombre accesible del carrusel, p. ej. "Proyectos destacados". */
  etiqueta: string
}

export default function Carrusel({ proyectos, etiqueta }: CarruselProps) {
  const { device } = useDeviceDetect()
  const ventanaRef = useRef<HTMLDivElement>(null)
  const [anchoVentana, setAnchoVentana] = useState(0)
  const [indice, setIndice] = useState(0)

  const visibles = device ? TARJETAS_VISIBLES[device] : VISIBLES_POR_DEFECTO
  const indiceMaximo = Math.max(0, proyectos.length - visibles)

  /*
   * Se mide el contenedor real con ResizeObserver en lugar de `window.innerWidth`.
   * En escritorio el carrusel ocupa solo el 80-89% del viewport, asi que repartir
   * el ancho de la ventana generaba tarjetas mas anchas que su propio contenedor.
   * El observer se desconecta al desmontar, a diferencia del listener de `resize`
   * que la version anterior registraba en cada render y nunca limpiaba.
   */
  useEffect(() => {
    const elemento = ventanaRef.current
    if (!elemento) return

    const observer = new ResizeObserver(([entrada]) => {
      if (entrada) setAnchoVentana(entrada.contentRect.width)
    })

    // `observe` ya dispara el callback con el tamano actual: no hace falta
    // una medida inicial aparte.
    observer.observe(elemento)

    return () => observer.disconnect()
  }, [])

  /*
   * Al reducir la ventana caben menos tarjetas y el indice guardado puede
   * quedar fuera de rango. Se acota durante el render en lugar de corregirlo
   * con un efecto, que provocaria un render en cascada.
   */
  const indiceVisible = Math.min(indice, indiceMaximo)

  const anterior = useCallback(() => {
    setIndice(indiceVisible <= 0 ? indiceMaximo : indiceVisible - 1)
  }, [indiceVisible, indiceMaximo])

  const siguiente = useCallback(() => {
    setIndice(indiceVisible >= indiceMaximo ? 0 : indiceVisible + 1)
  }, [indiceVisible, indiceMaximo])

  const anchoTarjeta = anchoVentana > 0 ? anchoVentana / visibles : 0
  const hayDesplazamiento = indiceMaximo > 0

  return (
    <section
      className={styles.carrusel}
      aria-roledescription="carrusel"
      aria-label={etiqueta}
    >
      {hayDesplazamiento && (
        <button
          type="button"
          className={cx(styles.flechaBoton, styles.izquierda)}
          onClick={anterior}
          aria-label="Ver proyecto anterior"
        >
          <Image
            src={flecha}
            alt=""
            width={30}
            height={30}
            className={cx(styles.flecha, styles.flechaInvertida)}
          />
        </button>
      )}

      <div className={styles.ventana} ref={ventanaRef}>
        <ul
          className={styles.pista}
          style={{ transform: `translateX(-${indiceVisible * anchoTarjeta}px)` }}
        >
          {proyectos.map((proyecto, posicion) => (
            <li
              key={proyecto.link}
              className={styles.elemento}
              style={anchoTarjeta > 0 ? { width: `${anchoTarjeta}px` } : undefined}
              aria-hidden={posicion < indiceVisible || posicion >= indiceVisible + visibles}
            >
              <Card proyecto={proyecto} prioridad={posicion === 0} />
            </li>
          ))}
        </ul>
      </div>

      {hayDesplazamiento && (
        <button
          type="button"
          className={cx(styles.flechaBoton, styles.derecha)}
          onClick={siguiente}
          aria-label="Ver proyecto siguiente"
        >
          <Image src={flecha} alt="" width={30} height={30} className={styles.flecha} />
        </button>
      )}
    </section>
  )
}
