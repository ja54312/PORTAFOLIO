/** Un puesto de la trayectoria profesional, del mas reciente al mas antiguo. */
export interface Puesto {
  readonly empresa: string
  readonly puesto: string
  readonly periodo: string
  readonly logros: readonly string[]
  readonly stack: readonly string[]
}

export const EXPERIENCIA: readonly Puesto[] = [
  {
    empresa: 'Wivboost · Mad Tech',
    puesto: 'Senior Full Stack & Cloud Engineer',
    periodo: 'Ene 2025 – Actualidad',
    logros: [
      'Desarrollo principal de la plataforma multi-tenant de clientes de Mad Tech en Next.js 15 y React 19, publicada también como app iOS y Android con Capacitor.',
      'Diseño del backend central en NestJS, GraphQL y Prisma/PostgreSQL, con insights generados por IA (Vertex AI y Gemini), fuentes de datos en BigQuery y procesamiento de video.',
      'Intranet de RR. HH. multiempresa para todo el grupo: control de asistencia, vacaciones conforme a la LFT, organigrama y almacenamiento de documentos.',
      'Dashboards de analítica de marca y de eventos presenciales con visión por computadora, alimentados desde BigQuery y Google Cloud Storage.',
      'Infraestructura como código con Terraform para migrar a una nueva cuenta de AWS: ECS Fargate, RDS, Cognito, CloudFront, Route 53 y CI con GitHub OIDC.',
      'API de contenido generativo multimodelo en FastAPI (Imagen, Veo, Gemini, gpt-image-1 y Runway) para banners, imágenes y video.',
    ],
    stack: [
      'Next.js',
      'NestJS',
      'GraphQL',
      'PostgreSQL',
      'AWS',
      'GCP',
      'Terraform',
      'Vertex AI',
    ],
  },
  {
    empresa: 'Core Biz',
    puesto: 'Front-End Developer',
    periodo: 'Mar 2021 – Dic 2024',
    logros: [
      'Landing pages para lanzamientos de producto de grandes marcas, con un aumento del 15% en ventas.',
      'Desarrollo de la dirección de entrega en el checkout para el go-live de un e-commerce, con un aumento del 5% en ventas.',
      'Componentes reutilizables en React (carruseles, comparadores, botones dinámicos, flags) sobre VTEX.',
    ],
    stack: ['React', 'JavaScript', 'VTEX', 'Sass'],
  },
  {
    empresa: 'Pulpo Digital',
    puesto: 'Front-End Developer',
    periodo: 'Jul 2019 – Ago 2020',
    logros: [
      'Landing pages para negocios locales con promociones que aumentaron un 20% las ventas en tienda.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
]
