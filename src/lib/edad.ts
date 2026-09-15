/**
 * Edad en anios cumplidos a partir del anio de nacimiento.
 *
 * Se calcula en lugar de escribirse a mano para que el texto de "Sobre mi" no
 * vuelva a quedar desactualizado en varios sitios a la vez.
 *
 * Al exportarse el sitio como estatico el valor queda fijado en el momento del
 * build, asi que puede ir un anio por detras hasta el siguiente despliegue. Si
 * quieres que se corrija solo, programa una reconstruccion anual con un webhook
 * de Amplify (ver README).
 */
export function calcularEdad(anioNacimiento: number, hoy: Date = new Date()): number {
  return hoy.getFullYear() - anioNacimiento
}
