import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'BC',
	favicon: 'favicon.ico',
	owner: 'Brave Commanders',
	profileImage: 'captain.jpg',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/marpal71',
			icon: Github,
		} as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/',
			icon: Instagram,
		} as SocialLink,
	],
};
