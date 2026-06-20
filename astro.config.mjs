import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://likefrost.com',
  output: 'static',
  integrations: [
    sitemap()
  ],
  adapter: cloudflare({
    platformProxy: { enabled: true }
  })
});
