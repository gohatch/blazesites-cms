import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  base: '/previews/burger',
  vite: {
    plugins: [tailwindcss()],
  },
});
