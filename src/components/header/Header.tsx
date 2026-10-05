import Image from 'next/image'

import logo from '@/assets/trifuerza.png'
import { PERFIL } from '@/data/perfil'
import styles from './header.module.css'

const ENLACES = [
  { href: '#experiencia', texto: 'Experiencia' },
  { href: '#proyectos', texto: 'Proyectos' },
  { href: '#sobre-mi', texto: 'Sobre mí' },
] as const

export default function Header() {
  return (
    <header id="inicio" className={styles.header}>
      <nav className={styles.navbar} aria-label="Principal">
        <a className={styles.marca} href="#inicio">
          <Image
            src={logo}
            alt=""
            width={28}
            height={28}
            className={styles.logo}
            priority
          />
          <span className={styles.nombre}>{PERFIL.alias}</span>
        </a>
        <ul className={styles.enlaces}>
          {ENLACES.map((enlace) => (
            <li key={enlace.href}>
              <a className={styles.enlace} href={enlace.href}>
                {enlace.texto}
              </a>
            </li>
          ))}
        </ul>
        <a className={styles.contacto} href="#contacto">
          Contacto
        </a>
      </nav>
    </header>
  )
}
