import React from 'react'

import './badge.css'

//Estructura de componente <Badge lenguaje='string'/>
//LENGUAJES PERIMITIDOS {JS,HTML-CSS,REAC,Bootstrap,CLONE} 

const Badge = ({lenguaje}) => {


    return(
        <>
            <span className={'badge '+ lenguaje}>{lenguaje}</span>
        </>
    )

}

export default Badge