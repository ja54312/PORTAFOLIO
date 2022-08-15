import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/REACT/components/HEADER/header";
import Hero from "./src/REACT/components/HERO/hero";
import Contacto from "./src/REACT/components/CONTACTO/contacto";
import Footer from "./src/REACT/components/FOOTER/footer";
import Prueba from "./src/REACT/components/PRUEBA/prueba";


export default function App(){
  return(
    <>
        <Header/>
        <Hero/>
        <Contacto/>
        <Footer/>
    </>
  )
}

const entryPointMalta = document.getElementById("root");
ReactDOM.render(<App/>, entryPointMalta);