import Seccion from '@/components/elements/Seccion'
import { PERFIL } from '@/data/perfil'
import { STACK } from '@/data/stack'
import { calcularEdad } from '@/lib/edad'
import styles from './sobre-mi.module.css'

export default function SobreMi() {
  const edad = calcularEdad(PERFIL.anioNacimiento)

  return (
    <Seccion id="sobre-mi" numero="04" titulo="Sobre mí">
      <div className={styles.contenido}>
        <div className={styles.texto}>
          <p>
            Soy José Antonio, tengo {edad} años y soy Ingeniero Aeronáutico de formación.
            Llevo {PERFIL.aniosExperiencia} años desarrollando software, desde landing pages y
            e-commerce hasta plataformas SaaS, dashboards de datos e infraestructura en la
            nube.
          </p>
          <p>
            Hoy trabajo en <strong>Wivboost</strong> y <strong>Mad Tech</strong>, donde
            desarrollo de punta a punta productos de ad-tech y analítica: del front en Next.js
            al backend en NestJS y GraphQL, los datos en BigQuery y la infraestructura con
            Terraform en AWS.
          </p>
          <p>
            En paralelo hago proyectos freelance para negocios que necesitan algo más que una
            web. Fuera del código, soy gamer y escucho podcasts.
          </p>
        </div>
        <dl className={styles.stack}>
          {STACK.map((grupo) => (
            <div key={grupo.area} className={styles.grupo}>
              <dt className={styles.area}>{grupo.area}</dt>
              <dd>
                <ul className={styles.tecnologias}>
                  {grupo.tecnologias.map((tecnologia) => (
                    <li key={tecnologia}>{tecnologia}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Seccion>
  )
}
