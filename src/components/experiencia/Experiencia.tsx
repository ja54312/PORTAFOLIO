import Seccion from '@/components/elements/Seccion'
import { EXPERIENCIA } from '@/data/experiencia'
import styles from './experiencia.module.css'

export default function Experiencia() {
  return (
    <Seccion
      id="experiencia"
      numero="01"
      titulo="Experiencia"
      bajada="De landing pages y e-commerce a plataformas SaaS, datos e infraestructura en la nube."
    >
      <ol className={styles.lista}>
        {EXPERIENCIA.map((puesto) => (
          <li key={puesto.empresa} className={styles.puesto}>
            <p className={styles.periodo}>{puesto.periodo}</p>
            <div className={styles.tarjeta}>
              <h3 className={styles.empresa}>{puesto.empresa}</h3>
              <p className={styles.rol}>{puesto.puesto}</p>
              <ul className={styles.logros}>
                {puesto.logros.map((logro) => (
                  <li key={logro}>{logro}</li>
                ))}
              </ul>
              <ul className={styles.stack} aria-label="Tecnologías">
                {puesto.stack.map((tecnologia) => (
                  <li key={tecnologia}>{tecnologia}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Seccion>
  )
}
