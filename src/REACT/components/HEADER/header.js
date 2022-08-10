import React from "react";
import Logo from '../../../ASSETS/Trifuerza_ALBW.png';
import './header.css'
const Header = () =>{
    return(
        <>
            <header id="header" className="header">
                <nav className="header-navbar">
                    <div className="conatiner-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt="trifuerza" className="Logo"/>
                            <span className="name_logo">JA54312</span>
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )

}

export default Header