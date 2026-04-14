import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({ output: 'static', base: '/previews/catering', vite: { plugins: [tailwindcss()] } });
