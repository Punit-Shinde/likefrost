import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://likefrost.com',
  output: 'static',
  integrations: [sitemap()],
});
