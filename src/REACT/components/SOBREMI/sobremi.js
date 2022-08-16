import React from "react";
import './sobremi.css'

import FRONT from '../../../ASSETS/front.svg'
import PODCAST from '../../../ASSETS/podcast.svg'
import GAMER from '../../../ASSETS/gamer.svg'

const SobreMi = () => {
    return(
        <>
            <section className="SobreMi">  
                <h2 className="text-sobre-mi">Sobre mi</h2>
                <br/>
                <h4 className="text-sobre-mi">
                    Soy Jose Antonio tengo 31 años,soy Ing.Aeronautico,estudio Ing en Energias Renovables
                    y Me encanta el Desarrollo Web.
                </h4>
                <h4 className="text-sobre-mi">
                    También Soy un Podcaster Amateur
                    Y Gamer. Actualmente tengo conocimiento básico de React y me encuentro mejorando mi conocimiento del mismo.
                    Actualmente trabajo en una agencia de e-comerce como Desarrollador Front-end.
                </h4>
                <br/>
                <div className="container-info-aboutme">
                    <div className="info-aboutme">
                        <img src={FRONT} alt="FrontEnd" className="img-aboutme"/>
                    </div>
                    <div className="info-aboutme">
                        <a href="https://ja54312.github.io/lo-que-la-noche-nos-cuenta/" target='_blank' rel='noopener noreferrer'>
                            <img src={PODCAST} alt="podcast" className="img-aboutme"/>
                        </a>
                    </div>
                    <div className="info-aboutme">
                    <img src={GAMER} alt="gamer" className="img-aboutme"/>
                    </div>
                </div>
                <br/>
            </section>
        </>
    )
}

export default SobreMi