import { PERFIL } from '@/data/perfil'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenido}>
        <p>
          © {new Date().getFullYear()} {PERFIL.nombre}
        </p>
        <p className={styles.tecnico}>
          Next.js 16 · AWS Amplify · {PERFIL.version}
        </p>
      </div>
    </footer>
  )
}
