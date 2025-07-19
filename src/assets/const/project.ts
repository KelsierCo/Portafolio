import type { Project } from '@/types/project';
import avion from '@assets/images/conversor.webp';

export const PROJECTS: Project[] = [
  {
    title: 'Encriptador',
    description: 'Un encriptador de texto simple que permite codificar y decodificar mensajes utilizando un algoritmo básico.',
    image: avion.src,
    link: 'https://kelsierco.github.io/EncriptadorOne/',
    tags: ['Preact', 'Web Development', 'Example']
  },
]