//Librerias
import React,{useState,useEffect,useRef} from 'react'
//Hooks
import useDeviceDetect from '../../../hooks/useDeviceDetect'
//COMPONENTES
import Card from '../CARD/card'
//IMAGENES
import flecha from '../../../../ASSETS/proximo.png'
//Estilos
import './carrusel.css'

const Carrusel = ({proyecto,proyectoLenght}) =>{

    const { device } = useDeviceDetect();
    const [leftCarrusel, setLeftCarrusel] = useState(0)
    const [productWidth, setProductWidth] = useState(0)
    const slideContainer = useRef(null)
   
    let itemsForScreen 
    
    if(device === 'phone') itemsForScreen = 1
    if(device === 'tablet') itemsForScreen = 2
    if(device === 'desktop') itemsForScreen = 3

    const elements = proyectoLenght

    function onClickPrev() {
        if (leftCarrusel >= 0) {
            const allLeft = -productWidth * elements
            setLeftCarrusel(allLeft + productWidth * itemsForScreen)
        } else {
            const allRight = productWidth * elements
            if (
                allRight <=
                leftCarrusel - productWidth * itemsForScreen
            ) {
                setLeftCarrusel(0)
            } else setLeftCarrusel(leftCarrusel + productWidth)
        }
    }
    function onClickNext() {
        const allLeft = -productWidth * elements
        if (leftCarrusel <= allLeft + productWidth * itemsForScreen) {
            setLeftCarrusel(0)
        } else setLeftCarrusel(leftCarrusel - productWidth)
    }


    window.addEventListener(
        'resize',
        function() {      
            if(device === 'desktop'){
                setProductWidth(
                  window.innerWidth / itemsForScreen,
                )
            }else{
                setProductWidth(
                    (window.innerWidth*.9) / itemsForScreen,
                  )
            }
        },
        true,
      )

      useEffect(() => {
        if(device === 'desktop'){
            setProductWidth((window.innerWidth)/itemsForScreen)
        }else{
            setProductWidth(
                (window.innerWidth*.9) / itemsForScreen,
              )
        }
      },[])

    return(
        <>
            <section className='section-carrusel'>
                <button className="boton-flecha left"  onClick={onClickPrev}>
                        <img src={flecha} className='carrusel-flecha flecha-revert'/>
                </button>
                <div className='container-carrusel' ref={slideContainer}>
                    <div
                        className="tractionItems"
                        style={{
                        left: `${leftCarrusel}px`,
                        }}
                    >
                        {proyecto && proyecto.map((element,key) =>{
                        return(
                            <div key={key} style={{ width: `${productWidth}px` }} className="container-card">
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
                            </div>
                        )
                    })}
                    </div>
                </div>
                <button className="boton-flecha right"  onClick={onClickNext}>
                        <img src={flecha} className='carrusel-flecha'/>
                </button>
            </section>
        </>
    )
}

export default Carrusel