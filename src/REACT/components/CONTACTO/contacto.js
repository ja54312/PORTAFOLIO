import React from "react";
import './contacto.css'

const Contacto = () => {
    return(
        <>  
            <section className="container-contacto">
                <h2 className="texto-contacto">Creemos algo juntos ...</h2>
                <br/>
                <br/>
                <div className="container-divs">
                    <div className="container-contacts">
                        <div className="container-contact">
                            <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/twitter/twitter-official.svg" alt="Logo de twitter" className="img-contact"/>
                            </a>
                        </div>
                        <div className="container-contact">
                            <a href="https://www.facebook.com/iJa54312" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/facebook/facebook-tile.svg" alt="logo de facebook" className="img-contact"/>
                            </a>
                        </div>
                        <div className="container-contact">
                            <a href="https://github.com/ja54312" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="logo de github" className="img-contact"/>
                            </a>
                        </div>
                        <div className="container-contact">
                            <a href="https://www.linkedin.com/in/ja54312/" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/linkedin/linkedin-tile.svg" alt="logo de linkedin" className="img-contact"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacto
