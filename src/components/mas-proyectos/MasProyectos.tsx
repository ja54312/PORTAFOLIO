import ProyectoCard from '@/components/elements/ProyectoCard'
import Seccion from '@/components/elements/Seccion'
import { MAS_PROYECTOS } from '@/data/mas-proyectos'
import styles from './mas-proyectos.module.css'

export default function MasProyectos() {
  if (MAS_PROYECTOS.length === 0) return null

  return (
    <Seccion
      id="mas-proyectos"
      numero="03"
      titulo="Más proyectos"
      bajada="Proyectos personales y de aprendizaje con los que fui construyendo la base."
    >
      <ul className={styles.cuadricula}>
        {MAS_PROYECTOS.map((proyecto) => (
          <li key={proyecto.link} className={styles.elemento}>
            <ProyectoCard proyecto={proyecto} variante="compacto" />
          </li>
        ))}
      </ul>
    </Seccion>
  )
}
