# Portafolio · JA54312

Portafolio personal de **José Antonio Alatorre Chávez**, desarrollador Front-End.

Construido con **Next.js 16 (App Router) + TypeScript + React 19**, exportado como
sitio estático y desplegado en **AWS Amplify Hosting**.

> Versión 4.0 — migración desde la v3.0, que usaba Parcel 1 + React 17 y se
> publicaba en GitHub Pages.

---

## Requisitos

- Node.js >= 20.9
- npm

## Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Script              | Qué hace                                             |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo con Turbopack                  |
| `npm run build`     | Build de producción                                   |
| `npm start`         | Sirve el build de producción                          |
| `npm run lint`      | ESLint (`next/core-web-vitals` + `next/typescript`)   |
| `npm run typecheck` | `tsc --noEmit` en modo estricto                       |

## Estructura

```
src/
├── app/                  # App Router: layout, página e icono
│   ├── layout.tsx        # metadata, next/font, estilos globales
│   ├── page.tsx          # composición de secciones
│   ├── globals.css       # reset + variables CSS
│   └── icon.png          # favicon
├── components/           # una carpeta por sección, con su módulo CSS
│   ├── header/  hero/  proyectos/  mas-proyectos/
│   ├── sobre-mi/  contacto/  footer/
│   └── elements/         # Badge, Card, Carrusel (reutilizables)
├── data/                 # contenido: perfil y listas de proyectos
├── hooks/                # useDeviceDetect
├── lib/                  # utilidades (cx, edad)
├── types/                # tipos compartidos (Proyecto, Lenguaje)
└── assets/               # imágenes importadas por next/image
public/iconos/            # SVG servidos por ruta (redes e intereses)
```

### Añadir un proyecto

Los proyectos son datos, no JSX. Basta con añadir una entrada a
`src/data/proyectos.ts` (carrusel principal) o `src/data/mas-proyectos.ts`.
El tipo `Proyecto` obliga a rellenar todos los campos y `Lenguaje` está
restringido a los valores que tienen color de badge definido.

```ts
{
  img: 'https://i.postimg.cc/.../captura.png',
  altImg: 'Captura de …',
  titulo: 'MI PROYECTO',
  lenguaje: 'REACT',           // JS | REACT | HTML-CSS | Bootstrap | CLONE
  descripcion: '…',
  link: 'https://…',
  textoBoton: 'Ir a la web',
}
```

Las capturas se sirven desde `i.postimg.cc`. En exportación estática no se
ejecuta el optimizador de `next/image`, así que las imágenes se cargan tal cual
desde su origen; conviene subirlas ya redimensionadas.

## Despliegue en AWS Amplify

El sitio se exporta como HTML estático (`output: 'export'` en `next.config.ts`)
a la carpeta `out/`, que Amplify sirve desde el CDN **sin aprovisionar compute**.

El repositorio incluye `amplify.yml`. En la consola de Amplify:

1. **Host web app** → conecta el repositorio de GitHub y la rama.
2. Amplify lee `amplify.yml`; no hace falta tocar la configuración del build.
3. No hacen falta variables de entorno.

El build ejecuta `typecheck`, `lint` y `build`, así que un error de tipos o de
lint detiene el despliegue.

> Si Amplify detecta Next.js y propone el adaptador SSR, elige el build estático:
> `baseDirectory` debe apuntar a `out`.

### Reconstrucción periódica (opcional)

La edad de «Sobre mí» se calcula en el momento del build, así que puede ir un año
por detrás hasta el siguiente despliegue. Para que se corrija sola, crea un
**incoming webhook** en Amplify (*App settings → Build settings → Incoming
webhooks*) y llámalo una vez al mes desde EventBridge Scheduler o cron.

### Volver a SSR

Si más adelante añades algo dinámico (formulario de contacto, blog, rutas API):

1. En `next.config.ts`, quita `output: 'export'` y `images.unoptimized`.
2. En `amplify.yml`, cambia `baseDirectory: out` por `.next`.

`images.remotePatterns` ya está configurado para `i.postimg.cc`, así que la
optimización de imágenes vuelve a funcionar sin más cambios.

## Notas de la migración v3 → v4

- El carrusel registraba un listener de `resize` en cada render y nunca lo
  limpiaba; ahora usa un `ResizeObserver` que mide el contenedor real y se
  desconecta al desmontar.
- `useDeviceDetect` leía `window` durante el render, incompatible con SSR;
  ahora resuelve en un efecto.
- `.container-cards` estaba definida en dos hojas globales con reglas distintas
  y una pisaba a la otra. Los módulos CSS eliminan la colisión.
- La edad se calcula desde el año de nacimiento en lugar de estar escrita a mano
  en dos sitios con valores distintos.
- Los iconos de redes se sirven desde el propio dominio en vez de
  `vectorlogo.zone`.
- Roboto se auto-hospeda con `next/font`, sin petición de bloqueo a Google Fonts.
- `prod/` y `final/` (artefactos de Parcel versionados) salen del repositorio.
- El despliegue pasa de GitHub Pages a AWS Amplify, manteniendo el sitio estático.

## Contacto

- Web: [linkedin.com/in/ja54312](https://www.linkedin.com/in/ja54312/)
- GitHub: [@ja54312](https://github.com/ja54312)
- Correo: ija54312@gmail.com

Bienvenido el feedback. Trabajemos juntos.
