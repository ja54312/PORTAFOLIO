import Carrusel from '@/components/elements/Carrusel'
import { PROYECTOS_DESTACADOS } from '@/data/proyectos'
import styles from './proyectos.module.css'

export default function Proyectos() {
  if (PROYECTOS_DESTACADOS.length === 0) return null

  return (
    <section className={styles.seccion} aria-labelledby="titulo-proyectos">
      <h2 id="titulo-proyectos" className={styles.titulo}>
        PROYECTOS DESTACADOS
      </h2>
      <div className={styles.contenedorTarjetas}>
        <Carrusel proyectos={PROYECTOS_DESTACADOS} etiqueta="Proyectos destacados" />
      </div>
    </section>
  )
}
