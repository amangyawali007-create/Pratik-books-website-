# Pratik Books & Stationers

Static Astro site for Pratik Books & Stationers, Kanchi Bazar, Tikapur. Deployed as static assets on Cloudflare Workers.

```sh
bun install
bun run dev       # local dev server
bun run preview   # build + serve dist/ through wrangler (same as production)
bun run deploy    # build + wrangler deploy (needs `bunx wrangler login` once)
```

- All content lives in `src/pages/index.astro` (categories array, phone numbers, WhatsApp messages at the top).
- Set `site` in `astro.config.mjs` to the real domain to enable the canonical and `og:url` tags.
