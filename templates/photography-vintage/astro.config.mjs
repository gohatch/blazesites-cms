import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({ base: '/previews/photography-vintage', vite: { plugins: [tailwindcss()] } });
