// @ts-check
import { defineConfig } from 'astro/config';

// Static build → served by Cloudflare Workers static assets (see wrangler.jsonc).
// `site` turns on the canonical/og:url tags.
export default defineConfig({
  site: 'https://pratikbooks.com',
});
