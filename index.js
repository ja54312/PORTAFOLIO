import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/REACT/components/HEADER/header";
import Hero from "./src/REACT/components/HERO/hero";
import Proyectos from "./src/REACT/components/PROYECTOS/proyectos";
import MasProyectos from "./src/REACT/components/MASPROYECTOS/masproyectos";
import SobreMi from "./src/REACT/components/SOBREMI/sobremi";
import Contacto from "./src/REACT/components/CONTACTO/contacto";
import Footer from "./src/REACT/components/FOOTER/footer";

export default function App(){
  return(
    <>
        <Header/>
        <Hero/>
        <Proyectos/>
        <MasProyectos/>
        <SobreMi/>
        <Contacto/>
        <Footer/>
    </>
  )
}

const entryPointMalta = document.getElementById("root");
ReactDOM.render(<App/>, entryPointMalta);