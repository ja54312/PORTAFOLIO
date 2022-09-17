import React, { useEffect, useState } from 'react'

const useDeviceDetect = () =>{

    //const [isMobile, setMobile] = useState(false)
  
    let anchoPantalla = window.innerWidth
    let device = undefined
  
      if(anchoPantalla < 767){
        device = 'phone'
      }if ( device === undefined && 766 < anchoPantalla && anchoPantalla < 905) {
        device = 'tablet'
      } if(device === undefined && anchoPantalla > 821) {
        device = 'desktop'
      }
      //console.log(anchoPantalla,'anchopantalla')
      //console.log(device,'dispositivo')

    // useEffect(()=>{
    //     const userAgent = typeof navigator === 'undefined' ? '' :navigator.userAgent;
    //     const mobile = Boolean(
    //         userAgent.match(
    //           /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    //         )
    //       )
    //       setMobile(mobile)
    // },[])

    return {device}
}

export default useDeviceDetect