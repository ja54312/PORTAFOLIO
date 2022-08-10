import React from "react";
import ReactDOM from "react-dom";
import Footer from "./src/REACT/components/FOOTER/footer";
import Header from "./src/REACT/components/HEADER/header";
import Prueba from "./src/REACT/components/PRUEBA/prueba";


export default function App(){
  return(
    <>
        <Header/>
        <Prueba/>
        <Prueba/>
        <Prueba/>
        <Prueba/>
        <Prueba/>
        <Prueba/>
        <Prueba/>
        <Prueba/>
        <Prueba/>
        <Prueba/>
        <Prueba/>
        <Footer/>
    </>
  )
}

const entryPointMalta = document.getElementById("root");
ReactDOM.render(<App/>, entryPointMalta);