import type { Proyecto } from '@/types/proyecto'

/** Proyectos que se muestran en el carrusel principal. */
export const PROYECTOS_DESTACADOS: readonly Proyecto[] = [
  {
    img: 'https://i.postimg.cc/mgNqzLN2/SIMON-DICE.png',
    altImg: 'Captura del juego Simón Dice',
    titulo: 'SIMON DICE',
    lenguaje: 'JS',
    descripcion: 'Juego de seguir la cadena de colores. De 3 niveles, ¿podrás lograrlo?',
    link: 'https://ja54312.github.io/SIMON_DICE/',
    textoBoton: 'Ir a la web',
  },
  {
    img: 'https://i.postimg.cc/28P6g71J/APP-NOTES.png',
    altImg: 'Captura de la aplicación App Notes',
    titulo: 'APP NOTES',
    lenguaje: 'REACT',
    descripcion:
      'App To-Do creada en React con el uso de useState y useEffect, guardando tus tareas en el localStorage.',
    link: 'https://ja54312.github.io/APP_NOTES/',
    textoBoton: 'Ir a la web',
  },
  {
    img: 'https://i.postimg.cc/cJtnkH9d/ja54312-github-io-MOBILE-FIRST-i-Phone-SE.png',
    altImg: 'Captura de la página Batatabit',
    titulo: 'BATATABIT',
    lenguaje: 'HTML-CSS',
    descripcion:
      'Creación de la página Batatabit basada en un diseño de Figma, con metodología Mobile First.',
    link: 'https://ja54312.github.io/MOBILE_FIRST/',
    textoBoton: 'Ir a la web',
  },
  {
    img: 'https://i.postimg.cc/027XFk4d/marcosclasee-screenshot.png',
    altImg: "Captura de la landing page Marco's Class",
    titulo: "Marco's Class",
    lenguaje: 'REACT',
    descripcion: 'Landing page para clases de inglés creada con Parcel y React.',
    link: 'https://ja54312.github.io/Marco-s-class/',
    textoBoton: 'Ir a la web',
  },
]
