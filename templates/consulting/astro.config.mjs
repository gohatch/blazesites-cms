import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({ base: '/previews/consulting', vite: { plugins: [tailwindcss()] } });
