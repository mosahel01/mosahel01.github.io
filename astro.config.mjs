// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // This repository uses the <username>.github.io naming convention, so the
  // site is served from the domain root and "base" must be left at its default ("/").
  // Do NOT set base to "/mosahel01.github.io" for a user/organization pages repo.
  site: 'https://mosahel01.github.io',
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});