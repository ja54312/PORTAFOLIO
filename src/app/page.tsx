import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Proyectos from '@/components/proyectos/Proyectos'
import MasProyectos from '@/components/mas-proyectos/MasProyectos'
import SobreMi from '@/components/sobre-mi/SobreMi'
import Contacto from '@/components/contacto/Contacto'
import Footer from '@/components/footer/Footer'

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
