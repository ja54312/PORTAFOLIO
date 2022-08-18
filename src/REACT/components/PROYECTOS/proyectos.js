import React from 'react'
import Card from '../ELEMENTS/CARD/card'
import IMG from '../../../ASSETS/SCREENSHOTS/SIMON_DICE_.png'
import './proyectos.css'

const Proyectos = () => {
    return(
        <>
            <div className='container-proyectos'>
                <h2>PROYECTITOS</h2>
                <Card 
                    Img={IMG}
                    AltImg={'imagen'} 
                    Title={'SIMON DICE'}
                    TextoCard={'Juego de seguir la cadena de colores,De 3 niveles podras lograrlo??'}
                    Link={'https://ja54312.github.io/SIMON_DICE/'}
                    ButtonText={'Ir a la web'}
                />
            </div>
        </>
    )

}

export default Proyectos