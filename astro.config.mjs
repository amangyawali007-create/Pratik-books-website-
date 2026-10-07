// @ts-check
import { defineConfig } from 'astro/config';

// Static build → served by Cloudflare Workers static assets (see wrangler.jsonc).
// Set `site` to the real domain once known; it turns on the canonical/og:url tags.
export default defineConfig({
  // site: 'https://your-domain.com',
});
