import type { Social } from '@/types/social';

import GitHub from '@assets/svg/github.svg';
import LinkedIn from '@assets/svg/linkedin.svg';

export const SOCIAL: Social[] = [
    {
        name: 'linkedin',
        url: '',
        image: {
            logo: LinkedIn,
            width: 24,
            height: 24,
        },
    },
    {
        name: 'github',
        url: '',
        image: {
            logo: GitHub,
            width: 24,
            height: 24,
        },
    }
]