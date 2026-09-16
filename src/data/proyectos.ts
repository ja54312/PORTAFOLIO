import airbnbClone from '@/assets/capturas/airbnb-clone.webp'
import appNotes from '@/assets/capturas/app-notes.webp'
import eternology from '@/assets/capturas/eternology.webp'
import tmhLogistica from '@/assets/capturas/tmh-logistica.webp'
import type { Proyecto } from '@/types/proyecto'

/** Proyectos que se muestran en el carrusel principal. */
export const PROYECTOS_DESTACADOS: readonly Proyecto[] = [
  {
    img: airbnbClone,
    altImg: 'Captura del clon de Airbnb',
    titulo: 'Airbnb Clone',
    lenguaje: 'NEXT-JS',
    descripcion:
      'Un clon funcional de Airbnb, hecho en Next.js con TypeScript, MongoDB y Prisma.',
    link: 'https://cloneairbnb-eta.vercel.app/',
    textoBoton: 'Ir a la web',
  },
  {
    img: tmhLogistica,
    altImg: 'Captura de la web de TMH Logística',
    titulo: 'TMH LOGISTICA',
    lenguaje: 'NEXT-JS',
    descripcion:
      'Landing page para una empresa de logística, hecha en Next.js con TypeScript.',
    link: 'https://www.tmhlogistica.com/',
    textoBoton: 'Ir a la web',
  },
  {
    img: eternology,
    altImg: 'Captura de la web de Eternology',
    titulo: 'ETERNOLOGY',
    lenguaje: 'WORDPRESS',
    descripcion:
      'Creación de la página para un negocio de bebidas, en WordPress con código personalizado.',
    link: 'https://eternology.com.mx/',
    textoBoton: 'Ir a la web',
  },
  {
    img: appNotes,
    altImg: 'Captura de la aplicación App Notes',
    titulo: 'APP NOTES',
    lenguaje: 'REACT',
    descripcion:
      'App To-Do creada en React con el uso de useState y useEffect, guardando tus tareas en el localStorage.',
    link: 'https://ja54312.github.io/APP_NOTES/',
    textoBoton: 'Ir a la web',
  },
]
