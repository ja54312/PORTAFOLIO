# Portafolio · JA54312

Portafolio personal de **José Antonio Alatorre Chávez**, desarrollador Full Stack
con mayor dominio de Front-End.

Construido con **Next.js 16 (App Router) + TypeScript + React 19**, desplegado en
**AWS Amplify Hosting** y publicado en **https://ja54312.com**.

> La configuración de infraestructura (DNS en Cloudflare, certificado, errores
> conocidos del despliegue) está documentada en **[DESPLIEGUE.md](DESPLIEGUE.md)**.

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
│   ├── page.tsx          # composición de secciones (revalidate: 1 día)
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
  lenguaje: 'NEXT-JS',         // JS | REACT | NEXT-JS | HTML-CSS
                               // Bootstrap | WORDPRESS | CLONE
  descripcion: '…',
  link: 'https://…',
  textoBoton: 'Ir a la web',
}
```

Las capturas se sirven desde `i.postimg.cc`, dominio autorizado en
`next.config.ts` (`images.remotePatterns`). Para usar otro host hay que
añadirlo ahí.

## Despliegue en AWS Amplify

El repositorio incluye `amplify.yml`. En la consola de Amplify:

1. **Host web app** → conecta el repositorio de GitHub y la rama.
2. Amplify detecta Next.js, registra la app con plataforma `WEB_COMPUTE` y
   despliega el adaptador de compute desde `.next`.
3. No hacen falta variables de entorno.

El build ejecuta `typecheck`, `lint` y `build`, así que un error de tipos o de
lint detiene el despliegue.

La página se pregenera como HTML estático en el build y se revalida cada 24 h,
de modo que la edad de «Sobre mí» se mantiene al día sin volver a desplegar.

### Si alguna vez quieres servirlo como estático puro

El sitio no tiene nada dinámico, así que puede servirse desde el CDN sin compute
facturable. Son **tres** cambios, y el tercero es el que se olvida:

1. En `next.config.ts`, añade `output: 'export'` e `images: { unoptimized: true }`.
2. En `amplify.yml`, cambia `baseDirectory: .next` por `out`.
3. **Cambia la plataforma de la app a `WEB`**, que no se controla desde
   `amplify.yml` sino con la API:

   ```bash
   aws amplify update-app --app-id <id> --platform WEB --region <region>
   ```

Sin el paso 3 el build pasa pero el deploy falla con:

```
CustomerError: Can't find required-server-files.json in build output directory
```

porque Amplify sigue esperando el artefacto de servidor. Recrear la app no lo
arregla: al detectar Next.js vuelve a asignar `WEB_COMPUTE`.

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
