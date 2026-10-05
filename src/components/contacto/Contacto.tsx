import Icono, { type NombreIcono } from '@/components/elements/Icono'
import { PERFIL } from '@/data/perfil'
import styles from './contacto.module.css'

const REDES: ReadonlyArray<{ href: string; icono: NombreIcono; nombre: string }> = [
  { href: PERFIL.redes.linkedin, icono: 'linkedin', nombre: 'LinkedIn' },
  { href: PERFIL.redes.github, icono: 'github', nombre: 'GitHub' },
  { href: PERFIL.redes.twitter, icono: 'twitter', nombre: 'Twitter' },
  { href: PERFIL.redes.facebook, icono: 'facebook', nombre: 'Facebook' },
]

export default function Contacto() {
  return (
    <section id="contacto" className={styles.seccion} aria-labelledby="titulo-contacto">
      <div className={styles.tarjeta}>
        <div className={styles.brillo} aria-hidden="true" />
        <p className={styles.numero}>05. Contacto</p>
        <h2 id="titulo-contacto" className={styles.titulo}>
          ¿Construimos algo juntos?
        </h2>
        <p className={styles.texto}>
          Estoy abierto a posiciones remotas y proyectos freelance. Si tienes una idea, un
          producto o un reto técnico, escríbeme.
        </p>
        <a className={styles.correo} href={`mailto:${PERFIL.email}`}>
          <Icono nombre="correo" tamano={18} />
          {PERFIL.email}
        </a>
        <ul className={styles.redes}>
          {REDES.map((red) => (
            <li key={red.nombre}>
              <a
                className={styles.red}
                href={red.href}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label={`Perfil de ${PERFIL.alias} en ${red.nombre}`}
              >
                <Icono nombre={red.icono} tamano={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
