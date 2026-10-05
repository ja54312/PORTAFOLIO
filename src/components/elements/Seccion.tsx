import styles from './seccion.module.css'

interface SeccionProps {
  /** Ancla del menu y base del id del titulo. */
  id: string
  /** Numeracion estilo codigo que acompana al titulo ("01", "02"...). */
  numero: string
  titulo: string
  /** Frase corta bajo el titulo. */
  bajada?: string
  children: React.ReactNode
}

/** Contenedor comun de las secciones de la pagina, con su encabezado numerado. */
export default function Seccion({ id, numero, titulo, bajada, children }: SeccionProps) {
  const idTitulo = `titulo-${id}`

  return (
    <section id={id} className={styles.seccion} aria-labelledby={idTitulo}>
      <header className={styles.encabezado}>
        <p className={styles.numero}>{numero}.</p>
        <h2 id={idTitulo} className={styles.titulo}>
          {titulo}
        </h2>
        {bajada && <p className={styles.bajada}>{bajada}</p>}
      </header>
      {children}
    </section>
  )
}
