// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://titanarbor.com',

  // Vanity short URLs → external destinations. Astro generates a tiny
  // static page at each path that meta-refreshes to the target, so
  // titanarbor.com/review is easy to text/print on invoices instead
  // of the long g.page URL.
  redirects: {
    '/review': 'https://g.page/r/CSbggSHdIX6zEBM/review',
    '/reviews': 'https://g.page/r/CSbggSHdIX6zEBM/review',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});