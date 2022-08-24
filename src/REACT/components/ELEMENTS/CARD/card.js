import React from 'react'

import Badge from '../BADGE/badge'
import './card.css'

const Card = ({Img,AltImg,Title,Lenguaje,TextoCard,Link,ButtonText}) => {
    return(
        <>
            <div className='card'>
                <img src={Img} className='card-img-top' alt={AltImg}/>
                <div className='card-body'>
                    <Badge lenguaje={Lenguaje}/>
                    <h5 className='card-title'>{Title}</h5>
                    <p className='card-text'>{TextoCard}</p>
                    <a href={Link} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>{ButtonText}</a>
                </div>
            </div>
        </>
    )
}

export default Card