import arcaneStudio from '@/assets/capturas/arcane-studio.webp'
import eternology from '@/assets/capturas/eternology.webp'
import institutoSapereAude from '@/assets/capturas/instituto-sapere-aude.webp'
import losCabosWeddings from '@/assets/capturas/los-cabos-weddings.webp'
import tmhLogistica from '@/assets/capturas/tmh-logistica.webp'
import type { Proyecto } from '@/types/proyecto'

/** Proyectos que se muestran en el carrusel principal. */
export const PROYECTOS_DESTACADOS: readonly Proyecto[] = [
  {
    img: institutoSapereAude,
    altImg: 'Captura de la web del Instituto Sapere Aude',
    titulo: 'Instituto Sapere Aude',
    lenguaje: 'NESTJS',
    descripcion:
      'Sistema escolar con 6 roles en NestJS, GraphQL, Prisma y Next.js 16, desplegado on-premise con Cloudflare Tunnel y CI.',
    link: 'https://www.institutosapereaude.com',
    textoBoton: 'Visitar sitio',
  },
  {
    img: tmhLogistica,
    altImg: 'Captura de la web de TMH Logística',
    titulo: 'TMH Logística',
    lenguaje: 'NEXT-JS',
    descripcion:
      'Sitio en Next.js con cotizador y módulo de facturación CFDI 4.0 con timbrado ante el SAT para su plataforma.',
    link: 'https://www.tmhlogistica.com/',
    textoBoton: 'Visitar sitio',
  },
  {
    img: losCabosWeddings,
    altImg: 'Captura de la web de Los Cabos Weddings',
    titulo: 'Los Cabos Weddings',
    lenguaje: 'NEXT-JS',
    descripcion:
      'Directorio bilingüe de proveedores de bodas en Next.js con TypeScript, next-intl y SEO técnico.',
    link: 'https://www.loscabosweddings.com',
    textoBoton: 'Visitar sitio',
  },
  {
    img: arcaneStudio,
    altImg: 'Captura de la web de Arcane Studio',
    titulo: 'Arcane Studio',
    lenguaje: 'AWS',
    descripcion:
      'Web de agencia en Next.js bilingüe con GitLab CI (SAST) y despliegue en AWS Amplify.',
    link: 'https://www.arcanestudioagency.com',
    textoBoton: 'Visitar sitio',
  },
  {
    img: eternology,
    altImg: 'Captura de la web de Eternology',
    titulo: 'Eternology',
    lenguaje: 'WORDPRESS',
    descripcion:
      'Sitio para una marca de bebidas en WordPress con páginas a medida, GTM y WhatsApp.',
    link: 'https://eternology.com.mx/',
    textoBoton: 'Visitar sitio',
  },
]
