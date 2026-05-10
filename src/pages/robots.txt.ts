import type { APIRoute } from "astro";
import { site as siteConfig } from "../lib/site";

export const GET: APIRoute = ({ site }) => {
  const body = siteConfig.published
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", site).toString()}\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
