// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://solofai.com',
  // Directory-style URLs (/work/ -> /work/index.html) match Firebase's
  // cleanUrls handling and avoid duplicate-URL SEO issues.
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
