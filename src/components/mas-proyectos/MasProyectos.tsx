import Carrusel from '@/components/elements/Carrusel'
import { MAS_PROYECTOS } from '@/data/mas-proyectos'
import styles from './mas-proyectos.module.css'

export default function MasProyectos() {
  if (MAS_PROYECTOS.length === 0) return null

  return (
    <section className={styles.seccion} aria-labelledby="titulo-mas-proyectos">
      <h2 id="titulo-mas-proyectos" className={styles.titulo}>
        MÁS PROYECTOS
      </h2>
      <div className={styles.contenedorTarjetas}>
        <Carrusel proyectos={MAS_PROYECTOS} etiqueta="Más proyectos" />
      </div>
    </section>
  )
}
