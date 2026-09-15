import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /*
   * El portafolio no tiene nada dinamico, asi que se exporta como HTML estatico
   * a `out/` y Amplify lo sirve desde el CDN, sin compute facturable.
   */
  output: 'export',

  /** URLs con barra final, que es como Amplify sirve los sitios estaticos. */
  trailingSlash: true,

  images: {
    /*
     * La exportacion estatica no puede ejecutar el optimizador de imagenes,
     * que necesita un servidor. Las capturas se sirven tal cual desde su origen.
     */
    unoptimized: true,

    /*
     * Ignorado mientras `unoptimized` este activo. Se conserva para que volver
     * al modo SSR sea solo quitar `output` y `unoptimized`.
     */
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
