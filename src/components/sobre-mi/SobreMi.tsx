import Image from 'next/image'

import { PERFIL } from '@/data/perfil'
import { calcularEdad } from '@/lib/edad'
import styles from './sobre-mi.module.css'

const INTERESES = [
  { src: '/iconos/front.svg', alt: 'Desarrollo Front-End' },
  { src: '/iconos/podcast.svg', alt: 'Podcasting' },
  { src: '/iconos/gamer.svg', alt: 'Videojuegos' },
] as const

export default function SobreMi() {
  const edad = calcularEdad(PERFIL.anioNacimiento)

  return (
    <section className={styles.seccion} aria-labelledby="titulo-sobre-mi">
      <h2 id="titulo-sobre-mi" className={styles.texto}>
        Sobre mí
      </h2>
      <p className={styles.texto}>
        Soy José Antonio, tengo {edad} años, soy Ing. Aeronáutico y me apasiona el
        desarrollo web.
      </p>
      <p className={styles.texto}>
        También soy gamer. Actualmente tengo conocimiento de React, TypeScript, Next.js,
        Node.js, Express y Docker, y sigo mejorándolo. Trabajo en una agencia de e-commerce
        como desarrollador Front-End.
      </p>
      <ul className={styles.intereses}>
        {INTERESES.map((interes) => (
          <li key={interes.src} className={styles.interes}>
            <Image
              src={interes.src}
              alt={interes.alt}
              width={50}
              height={50}
              className={styles.icono}
              unoptimized
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
