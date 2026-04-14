import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({ output: 'static', base: '/previews/gym-modern', vite: { plugins: [tailwindcss()] } });
