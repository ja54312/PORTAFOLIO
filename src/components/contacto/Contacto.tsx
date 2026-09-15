import Image from 'next/image'

import { PERFIL } from '@/data/perfil'
import styles from './contacto.module.css'

const REDES = [
  { href: PERFIL.redes.twitter, src: '/iconos/twitter.svg', nombre: 'Twitter' },
  { href: PERFIL.redes.facebook, src: '/iconos/facebook.svg', nombre: 'Facebook' },
  { href: PERFIL.redes.github, src: '/iconos/github.svg', nombre: 'GitHub' },
  { href: PERFIL.redes.linkedin, src: '/iconos/linkedin.svg', nombre: 'LinkedIn' },
] as const

export default function Contacto() {
  return (
    <section className={styles.seccion} aria-labelledby="titulo-contacto">
      <h2 id="titulo-contacto" className={styles.titulo}>
        Creemos algo juntos ...
      </h2>
      <ul className={styles.redes}>
        {REDES.map((red) => (
          <li key={red.nombre} className={styles.red}>
            <a href={red.href} target="_blank" rel="noopener noreferrer me">
              <Image
                src={red.src}
                alt={`Perfil de ${PERFIL.alias} en ${red.nombre}`}
                width={50}
                height={50}
                className={styles.icono}
                unoptimized
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
