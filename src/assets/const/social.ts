import type { Social } from '@/types/social';

import GitHub from '@assets/svg/github.svg';
import LinkedIn from '@assets/svg/linkedin.svg';

export const SOCIAL: Social[] = [
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/carlos-moreno-713090235/',
        image: {
            logo: LinkedIn,
            width: 24,
            height: 24,
        },
    },
    {
        name: 'github',
        url: 'https://github.com/KelsierCo',
        image: {
            logo: GitHub,
            width: 24,
            height: 24,
        },
    }
]