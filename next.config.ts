import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /*
   * No se define `output`: Amplify Hosting despliega este proyecto en modo SSR
   * (plataforma WEB_COMPUTE), que es la que detecta al conectar un repo con
   * Next.js. La pagina se sigue pregenerando como HTML estatico en el build;
   * el adaptador de Next en Amplify solo la sirve y revalida.
   *
   * Para servirlo como estatico puro hay que anadir aqui `output: 'export'` e
   * `images.unoptimized`, apuntar `baseDirectory` a `out` en amplify.yml Y
   * cambiar la plataforma de la app a WEB:
   *   aws amplify update-app --app-id <id> --platform WEB --region <region>
   * Sin ese ultimo paso el deploy falla con "Can't find required-server-files.json".
   */

  /*
   * No hay `images.remotePatterns`: las capturas viven en `src/assets/capturas`
   * y se importan estaticamente. Antes venian de i.postimg.cc y el optimizador
   * tenia que descargarlas en cada arranque en frio, lo que agotaba el timeout
   * del compute de Amplify y devolvia 408 al navegador.
   */
}

export default nextConfig
