export interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  color: string;
}

export const services: ServiceItem[] = [
  {
    title: 'Terapia individual',
    subtitle: 'Acompañamiento emocional personalizado',
    description: 'Atención individual adaptada a cada etapa del desarrollo, con enfoque en bienestar, autoconocimiento y regulación emocional.',
    benefits: ['Sesiones centradas en objetivos claros', 'Seguimiento personalizado', 'Herramientas prácticas para la vida cotidiana'],
    color: 'from-deepblue to-tealbright'
  },
  {
    title: 'Terapia de pareja',
    subtitle: 'Comunicación y conexión renovada',
    description: 'Espacio seguro para fortalecer vínculos, mejorar la expresión emocional y cultivar relaciones saludables con empatía y respeto.',
    benefits: ['Mejora de la comunicación', 'Resolución de conflictos', 'Fortalecimiento de la alianza emocional'],
    color: 'from-purplegentle to-coralsoft'
  },
  {
    title: 'Psicología infanto juvenil',
    subtitle: 'Crecimiento integral en niños y adolescentes',
    description: 'Intervenciones creadas para acompañar al niño y a la familia en procesos de desarrollo, emociones y aprendizaje saludable.',
    benefits: ['Espacios seguros para expresar emociones', 'Estrategias para el hogar', 'Acompañamiento lúdico-terapéutico'],
    color: 'from-skysoft to-inclusive'
  },
  {
    title: 'Terapia del habla',
    subtitle: 'Comunicación clara y confiable',
    description: 'Apoyo en habilidades del lenguaje y la comunicación con técnicas especializadas para cada edad y necesidad terapéutica.',
    benefits: ['Mejora en expresión verbal', 'Reforzamiento del lenguaje funcional', 'Evaluación continua de progreso'],
    color: 'from-coralsoft to-warmgold'
  },
  {
    title: 'Desarrollo integral',
    subtitle: 'Potenciamos el crecimiento familiar',
    description: 'Programas que fortalecen la autonomía, las habilidades sociales y el repertorio de competencias personales en todas las edades.',
    benefits: ['Enfoque familiar e interdisciplinario', 'Estimulación adaptada', 'Evaluación con seguimiento continuo'],
    color: 'from-inclusive to-deepblue'
  },
  {
    title: 'Terapia familiar',
    subtitle: 'Acompañamiento en dinámicas colectivas',
    description: 'Sesiones que propician la escucha activa, la cohesión y la resolución de conflictos dentro del sistema familiar.',
    benefits: ['Fortalece la red de apoyo', 'Mejora la convivencia', 'Construye acuerdos saludables'],
    color: 'from-tealbright to-purplegentle'
  },
  {
    title: 'TDAH',
    subtitle: 'Apoyo especializado para la atención',
    description: 'Intervenciones terapéuticas que integran estrategias de autocontrol, organización y regulación emocional para personas con TDAH.',
    benefits: ['Entrenamiento de habilidades ejecutivas', 'Rutinas estructuradas', 'Acompañamiento familiar'],
    color: 'from-warmgold to-coralsoft'
  },
  {
    title: 'Autismo',
    subtitle: 'Inclusión y desarrollo con respeto',
    description: 'Atención respetuosa con intervenciones individualizadas para promover la comunicación, la socialización y la independencia.',
    benefits: ['Entorno seguro y predecible', 'Estrategias visuales', 'Colaboración con la familia'],
    color: 'from-skysoft to-purplegentle'
  },
  {
    title: 'Síndrome de Down',
    subtitle: 'Crecer con apoyo integral',
    description: 'Programas de acompañamiento diseñados para potenciar capacidades cognitivas, comunicativas y sociales en todas las edades.',
    benefits: ['Estimulación multisensorial', 'Inclusión escolar', 'Acompañamiento continuo'],
    color: 'from-inclusive to-warmgold'
  },
  {
    title: 'Reforzamiento académico',
    subtitle: 'Aprendizaje con confianza',
    description: 'Sesiones de apoyo académico orientadas a mejorar la atención, la comprensión y el rendimiento escolar.',
    benefits: ['Metodologías activas', 'Estrategias de estudio', 'Refuerzo emocional en el aprendizaje'],
    color: 'from-deepblue to-coralsoft'
  },
  {
    title: 'Evaluaciones psicológicas',
    subtitle: 'Diagnóstico preciso y humano',
    description: 'Evaluaciones integrales que entregan una visión clara para diseñar rutas de intervención efectivas y empáticas.',
    benefits: ['Informes claros y accesibles', 'Recomendaciones concretas', 'Apoyo en la toma de decisiones'],
    color: 'from-purplegentle to-tealbright'
  }
];
