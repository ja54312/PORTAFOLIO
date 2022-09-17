//LIBRERIAS
import React from 'react'
//COMPONENTES
import proyectosAux from './masproyectosAux'
import Carrusel from '../ELEMENTS/CARRUSEL/carrusel'
//ESTILOS
import './masproyectos.css'

const MasProyectos = () => {

    return(
        <>
            {proyectosAux && <div className='container-mas-proyectos'>
                <h2>MAS PROYECTOS</h2>
                <div className='container-cards'>
                    <Carrusel proyecto={proyectosAux} proyectoLenght={proyectosAux.length}/>
                </div>
            </div>}
        </>
    )

}

export default MasProyectos