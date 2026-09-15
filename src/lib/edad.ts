/**
 * Edad en anios cumplidos a partir del anio de nacimiento.
 *
 * Se calcula en lugar de escribirse a mano para que el texto de "Sobre mi" no
 * vuelva a quedar desactualizado en varios sitios a la vez.
 *
 * La pagina se revalida una vez al dia (ver `revalidate` en `app/page.tsx`),
 * asi que el valor se refresca solo sin necesidad de un nuevo despliegue.
 */
export function calcularEdad(anioNacimiento: number, hoy: Date = new Date()): number {
  return hoy.getFullYear() - anioNacimiento
}
