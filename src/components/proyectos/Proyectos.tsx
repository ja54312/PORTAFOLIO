import ProyectoCard from '@/components/elements/ProyectoCard'
import Seccion from '@/components/elements/Seccion'
import { PROYECTOS_DESTACADOS } from '@/data/proyectos'
import styles from './proyectos.module.css'

export default function Proyectos() {
  if (PROYECTOS_DESTACADOS.length === 0) return null

  return (
    <Seccion
      id="proyectos"
      numero="02"
      titulo="Proyectos destacados"
      bajada="Trabajo freelance para clientes reales, en producción."
    >
      <ul className={styles.cuadricula}>
        {PROYECTOS_DESTACADOS.map((proyecto, i) => (
          <li key={proyecto.link} className={styles.elemento}>
            <ProyectoCard
              proyecto={proyecto}
              variante={i === 0 ? 'destacado' : 'normal'}
              prioridad={i === 0}
            />
          </li>
        ))}
      </ul>
    </Seccion>
  )
}
