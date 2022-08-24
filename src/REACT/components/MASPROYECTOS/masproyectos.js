import React from 'react'
import Card from '../ELEMENTS/CARD/card'
import proyectosAux from './masproyectosAux'
import './masproyectos.css'

const MasProyectos = () => {

   
    return(
        <>
            {proyectosAux && <div className='container-mas-proyectos'>
                <h2>MAS PROYECTOS</h2>
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

export default MasProyectos