import Icono from '@/components/elements/Icono'
import { PERFIL } from '@/data/perfil'
import styles from './hero.module.css'

const DESTACADOS = ['Next.js', 'NestJS', 'GraphQL', 'AWS', 'GCP', 'Terraform', 'IA generativa']

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="titulo-hero">
      <div className={styles.fondo} aria-hidden="true" />
      <div className={styles.contenido}>
        <p className={styles.saludo}>
          <span className={styles.disponible} aria-hidden="true" />
          Hola, soy {PERFIL.nombre}
        </p>
        <h1 id="titulo-hero" className={styles.titulo}>
          Senior Full Stack
          <br />
          <span className={styles.degradado}>&amp; Cloud Engineer</span>
          <span className={styles.cursor} aria-hidden="true">
            _
          </span>
        </h1>
        <p className={styles.texto}>
          {PERFIL.aniosExperiencia} años construyendo productos web de punta a punta:
          interfaces en Next.js y React, APIs en NestJS y GraphQL, e infraestructura en AWS y
          GCP, con IA generativa integrada donde aporta valor.
        </p>
        <div className={styles.acciones}>
          <a className={styles.primario} href="#proyectos">
            Ver proyectos
            <Icono nombre="flecha" tamano={18} />
          </a>
          <a className={styles.secundario} href={`mailto:${PERFIL.email}`}>
            <Icono nombre="correo" tamano={18} />
            Escríbeme
          </a>
        </div>
        <ul className={styles.datos} aria-label="Resumen">
          <li>
            <strong>{PERFIL.aniosExperiencia}+</strong> años de experiencia
          </li>
          <li>{PERFIL.ubicacion} · Remoto</li>
        </ul>
        <ul className={styles.stack} aria-label="Tecnologías principales">
          {DESTACADOS.map((tecnologia) => (
            <li key={tecnologia}>{tecnologia}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
