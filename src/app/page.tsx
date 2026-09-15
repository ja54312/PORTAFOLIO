import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Proyectos from '@/components/proyectos/Proyectos'
import MasProyectos from '@/components/mas-proyectos/MasProyectos'
import SobreMi from '@/components/sobre-mi/SobreMi'
import Contacto from '@/components/contacto/Contacto'
import Footer from '@/components/footer/Footer'

/*
 * La edad de "Sobre mi" se calcula con la fecha actual. Revalidar una vez al dia
 * mantiene el dato al dia sin necesidad de volver a desplegar.
 */
export const revalidate = 86400

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Proyectos />
        <MasProyectos />
        <SobreMi />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
