import React from 'react'
import Card from '../ELEMENTS/CARD/card'
import proyectosAux from './proyectosAux'
import './proyectos.css'

const Proyectos = () => {

    //console.log(proyectosAux,"proyectos aux")
    //console.log(proyectosAux[0],"proyectos aux")
    return(
        <>
            {proyectosAux && <div className='container-proyectos'>
                <h2>PROYECTITOS</h2>
                <div className='container-cards'>
                    {proyectosAux && proyectosAux.map((element,key) =>{
                        return(
                            <Card
                                key={key}
                                Img={element.Img}
                                AltImg={element.AltImg} 
                                Title={element.Title}
                                Lenguaje={element.Lenguaje}
                                TextoCard={element.TextoCard}
                                Link={element.Link}
                                ButtonText={element.ButtonText}
                            />
                        )
                    }) 
                    }
                </div>
            </div>}
        </>
    )

}

export default Proyectos