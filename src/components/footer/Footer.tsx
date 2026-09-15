import Image from 'next/image'

import { PERFIL } from '@/data/perfil'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <p className={styles.texto}>{PERFIL.version}</p>
      <p className={styles.texto}>
        Created with love ❤ by{' '}
        <a href={PERFIL.redes.twitter} target="_blank" rel="noopener noreferrer me">
          @{PERFIL.alias}
        </a>
      </p>
      <a
        className={styles.correo}
        href={`mailto:${PERFIL.email}`}
        aria-label={`Escribir un correo a ${PERFIL.email}`}
      >
        <Image
          src="/iconos/gmail.svg"
          alt=""
          width={40}
          height={40}
          unoptimized
        />
      </a>
    </footer>
  )
}
