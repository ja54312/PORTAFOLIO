import React from "react";
import './footer.css'


const Footer = () =>{
    return(
        <>
            <footer id="footer" className="footer"> 
                <p className="text-footer">v3.0</p>
                <p className="text-footer">Created with love ❤ by 
                    <a href="https://twitter.com/JA54312" target="_blank" rel="noopener noreferrer" alt="enlace a twitter de @JA54312">@JA54312</a>
                </p>
                <div className="mail-contact">
                    <a href="mailto:ija54312@gmail.com">
                        <img src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" alt="imagen correo"/>
                    </a>
                </div>
            </footer>
        </>
    )

}

export default Footer