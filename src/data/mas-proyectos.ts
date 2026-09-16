import batatabit from '@/assets/capturas/batatabit.webp'
import conferencia from '@/assets/capturas/conferencia.webp'
import eCommerce from '@/assets/capturas/e-commerce.webp'
import googleClone from '@/assets/capturas/google-clone.webp'
import marcosClass from '@/assets/capturas/marcos-class.webp'
import miBlog from '@/assets/capturas/mi-blog.webp'
import simonDice from '@/assets/capturas/simon-dice.webp'
import type { Proyecto } from '@/types/proyecto'

/** Proyectos secundarios que se muestran en el segundo carrusel. */
export const MAS_PROYECTOS: readonly Proyecto[] = [
  {
    img: conferencia,
    altImg: 'Captura de la página de la conferencia',
    titulo: 'Conferencia',
    lenguaje: 'Bootstrap',
    descripcion:
      'Una simulación de una página para anunciar una conferencia y la compra de tickets.',
    link: 'https://ja54312.github.io/Bootstrap_Conferencia/',
    textoBoton: 'Ir a la web',
  },
  {
    img: eCommerce,
    altImg: 'Captura de la tienda E-Shopp Draco',
    titulo: 'E-Commerce',
    lenguaje: 'HTML-CSS',
    descripcion: 'E-Commerce ficticio que vende huevos de dragón.',
    link: 'https://ja54312.github.io/E-SHOPP-DRACO/',
    textoBoton: 'Ir a la web',
  },
  {
    img: googleClone,
    altImg: 'Captura del clon de Google',
    titulo: 'GOOGLE-Clone',
    lenguaje: 'CLONE',
    descripcion: 'Una copia del front de la página del buscador Google.',
    link: 'https://ja54312.github.io/GOOGLE-CLONE/',
    textoBoton: 'Ir a la web',
  },
  {
    img: marcosClass,
    altImg: "Captura de la landing page Marco's Class",
    titulo: "Marco's Class",
    lenguaje: 'REACT',
    descripcion: 'Landing page para clases de inglés creada con Parcel y React.',
    link: 'https://ja54312.github.io/Marco-s-class/',
    textoBoton: 'Ir a la web',
  },
  {
    img: miBlog,
    altImg: 'Captura de Mi Blog',
    titulo: 'Mi Blog',
    lenguaje: 'HTML-CSS',
    descripcion: 'Página tipo blog.',
    link: 'https://ja54312.github.io/Mi_Blog/index.html',
    textoBoton: 'Ir a la web',
  },
  {
    img: simonDice,
    altImg: 'Captura del juego Simón Dice',
    titulo: 'SIMON DICE',
    lenguaje: 'JS',
    descripcion: 'Juego de seguir la cadena de colores. De 3 niveles, ¿podrás lograrlo?',
    link: 'https://ja54312.github.io/SIMON_DICE/',
    textoBoton: 'Ir a la web',
  },
  {
    img: batatabit,
    altImg: 'Captura de la página Batatabit',
    titulo: 'BATATABIT',
    lenguaje: 'HTML-CSS',
    descripcion:
      'Creación de la página Batatabit basada en un diseño de Figma, con metodología Mobile First.',
    link: 'https://ja54312.github.io/MOBILE_FIRST/',
    textoBoton: 'Ir a la web',
  },
]
