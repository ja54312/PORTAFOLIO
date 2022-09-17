//LIBRERIAS
import React from 'react'
//COMPONENTES
import proyectosAux from './proyectosAux'
import Carrusel from '../ELEMENTS/CARRUSEL/carrusel'
//ESTILOS
import './proyectos.css'

const Proyectos = () => {
 
    return(
        <>
            {proyectosAux && <div className='container-proyectos'>
                <h2>PROYECTOS DESTACADOS</h2>
                <div className='container-cards'>
                    <Carrusel proyecto={proyectosAux} proyectoLenght={proyectosAux.length}/>
                </div>
            </div>}
        </>
    )

}

export default Proyectos