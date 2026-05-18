export interface TeamMember {
  name: string;
  role: string;
  description: string;
  social?: {
    label: string;
    url: string;
  }[];
}

export const team: TeamMember[] = [
  {
    name: 'Daniel Montes',
    role: 'Ingeniero en análisis de datos — Jefe de marketing y tutor',
    description: 'Especialista en análisis estratégico, acompañamiento educativo y desarrollo de proyectos innovadores enfocados en el crecimiento integral.',
    social: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com' }
    ]
  },
  {
    name: 'Claudi Dubón',
    role: 'Psicóloga',
    description: 'Profesional comprometida con el bienestar emocional y el acompañamiento terapéutico integral para niños, jóvenes y familias.',
    social: [
      { label: 'Instagram', url: 'https://www.instagram.com' }
    ]
  },
  {
    name: 'Yoeli',
    role: 'Licenciada en Psicología',
    description: 'Enfocada en brindar apoyo emocional y herramientas terapéuticas para el desarrollo saludable y la estabilidad emocional.',
    social: [
      { label: 'Facebook', url: 'https://www.facebook.com' }
    ]
  }
];
