// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@astrojs/tailwind';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwindcss(), preact()],
});