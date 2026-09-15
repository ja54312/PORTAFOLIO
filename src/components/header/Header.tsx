import Image from 'next/image'

import logo from '@/assets/trifuerza.png'
import { PERFIL } from '@/data/perfil'
import styles from './header.module.css'

export default function Header() {
  return (
    <header id="header" className={styles.header}>
      <nav className={styles.navbar} aria-label="Principal">
        <div className={styles.contenedor}>
          <a className={styles.marca} href="#header">
            <Image
              src={logo}
              alt={`Logotipo de ${PERFIL.alias}`}
              width={70}
              height={70}
              className={styles.logo}
              priority
            />
            <span className={styles.nombre}>{PERFIL.alias}</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
