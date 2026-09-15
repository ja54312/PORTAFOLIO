'use client'

import { useEffect, useState } from 'react'

export type Device = 'phone' | 'tablet' | 'desktop'

/** Mismos cortes que usaban las media queries del portafolio original. */
export function deviceParaAncho(ancho: number): Device {
  if (ancho < 767) return 'phone'
  if (ancho < 905) return 'tablet'
  return 'desktop'
}

/**
 * Tipo de dispositivo segun el ancho de la ventana.
 *
 * Devuelve `null` en el servidor y durante el primer render del cliente: leer
 * `window` en el cuerpo del componente rompe el renderizado en servidor de
 * Next.js y provoca errores de hidratacion. El valor real llega en el efecto,
 * que ademas escucha `resize` y se limpia al desmontar.
 */
export function useDeviceDetect(): { device: Device | null } {
  const [device, setDevice] = useState<Device | null>(null)

  useEffect(() => {
    const actualizar = () => setDevice(deviceParaAncho(window.innerWidth))

    actualizar()
    window.addEventListener('resize', actualizar)
    return () => window.removeEventListener('resize', actualizar)
  }, [])

  return { device }
}

export default useDeviceDetect
