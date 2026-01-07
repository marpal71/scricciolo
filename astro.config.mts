import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

const siteUrl = env.SITE_URL;
const basePath = env.BASE;

// https://astro.build/config
export default defineConfig({
	site: siteUrl || 'https://scricciolo.netlify.app/',
	//site: siteUrl || 'https://scricciolo.wuaze.com/',
	base: basePath ?? '/',
	vite: {
		plugins: [tailwindcss()],
	},
});
