export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  image: string;
}

export const projects: ProjectItem[] = [
  {
    title: 'Sala de terapia remodelada',
    category: 'Espacio clínico',
    description: 'Ambiente cálido, accesible y pensado para generar seguridad emocional.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Taller lúdico creativo',
    category: 'Actividad infantil',
    description: 'Diseño de actividades inclusivas centradas en el juego y la expresión.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Evaluación con familia',
    category: 'Proceso clínico',
    description: 'Espacios colaborativos para el diagnóstico y la planificación terapéutica.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Actividad grupal de integración',
    category: 'Evento',
    description: 'Sesiones de trabajo en equipo para fortalecer habilidades sociales y emocionales.',
    image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Espacio de lectura y concentración',
    category: 'Ambiente educativo',
    description: 'Rincones diseñados para reforzar la atención y el aprendizaje en un entorno sereno.',
    image: 'https://images.unsplash.com/photo-1496317556649-f930d733eea2?auto=format&fit=crop&w=900&q=80'
  }
];
