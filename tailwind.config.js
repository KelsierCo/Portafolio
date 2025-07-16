/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#31E981', 
        secondary: '#082D0F', 
        accent: '#FF8552', 
        neutral: '#FFCB77',
        background: '#084887',
      },
    },
  },
  plugins: [],
}

