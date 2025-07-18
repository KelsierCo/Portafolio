import type { Project } from '@/types/project';
import avion from '@assets/images/avion.webp';

export const PROJECTS: Project[] = [
  {
    title: 'Avion',
    description: 'Un proyecto de ejemplo que muestra cómo usar Preact para crear una aplicación web moderna.',
    image: avion.src,
    link: '',
    tags: ['Preact', 'Web Development', 'Example']
  },
]