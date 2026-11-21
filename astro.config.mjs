// astro.config.mjs
// Main Astro settings. Output is fully static (perfect for Cloudflare Pages).
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // CHANGE THIS to your real site URL (used for sitemap + canonical + social cards)
  site: 'https://shahzaib-portfolio.pages.dev',

  // 'static' = plain HTML/CSS/JS files, no server needed
  output: 'static',

  integrations: [sitemap()],
});
