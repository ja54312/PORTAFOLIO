/** Une clases ignorando las vacias. Los modulos CSS pueden devolver undefined. */
export function cx(...clases: Array<string | false | null | undefined>): string {
  return clases.filter(Boolean).join(' ')
}
