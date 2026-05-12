// Generates favicons, apple-touch-icon, PWA manifest icons, and the
// Open Graph share card from public/logo.png. Run with:
//   node scripts/generate-assets.mjs
// Idempotent — safe to re-run after editing the source logo.

import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const publicDir = join(root, "public");
// Source-of-truth logo lives in src/assets/ at full resolution so
// Astro's image pipeline can use it. We also write a resized copy
// to public/logo.png for the canonical share URL + JSON-LD logo
// references (which don't go through Astro).
const logo = join(root, "src", "assets", "logo.png");

const arborGreen = { r: 31, g: 77, b: 43 };
const arborGreenDark = "#143119";
const cream = "#f7f5ee";

console.log("Writing canonical public/logo.png (600x600)…");
await sharp(logo).resize(600, 600).png({ compressionLevel: 9 }).toFile(join(publicDir, "logo.png"));

console.log("Generating apple-touch-icon (180x180)…");
await sharp(logo).resize(180, 180).png().toFile(join(publicDir, "apple-touch-icon.png"));

console.log("Generating favicon-32 (32x32)…");
await sharp(logo).resize(32, 32).png().toFile(join(publicDir, "favicon-32x32.png"));

console.log("Generating favicon-16 (16x16)…");
await sharp(logo).resize(16, 16).png().toFile(join(publicDir, "favicon-16x16.png"));

console.log("Generating PWA icon-192 (192x192)…");
await sharp(logo).resize(192, 192).png().toFile(join(publicDir, "icon-192.png"));

console.log("Generating PWA icon-512 (512x512)…");
await sharp(logo).resize(512, 512).png().toFile(join(publicDir, "icon-512.png"));

console.log("Generating site.webmanifest…");
const manifest = {
  name: "Titan Arbor Solutions",
  short_name: "Titan Arbor",
  description: "Professional tree care for metro Atlanta",
  icons: [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
  ],
  theme_color: "#1f4d2b",
  background_color: cream,
  display: "standalone",
  start_url: "/",
  scope: "/",
};
await writeFile(join(publicDir, "site.webmanifest"), JSON.stringify(manifest, null, 2));

console.log("Generating Open Graph share card (1200x630)…");

// SVG composition for the text portion of the OG card.
// Right-side text block: brand + tagline + phone CTA.
const svgText = `
<svg width="700" height="630" xmlns="http://www.w3.org/2000/svg">
  <style>
    .brand { font: 800 64px system-ui, -apple-system, "Segoe UI", sans-serif; fill: #f7f5ee; letter-spacing: -1px; }
    .sub   { font: 400 24px system-ui, -apple-system, "Segoe UI", sans-serif; fill: #e8efe6; }
    .tagline { font: 600 32px system-ui, -apple-system, "Segoe UI", sans-serif; fill: #f7f5ee; letter-spacing: -0.5px; }
    .pill { font: 700 20px system-ui, -apple-system, "Segoe UI", sans-serif; fill: #143119; }
  </style>
  <text x="0" y="260" class="sub">TITAN ARBOR SOLUTIONS</text>
  <text x="0" y="345" class="tagline">Professional tree care</text>
  <text x="0" y="395" class="tagline">for metro Atlanta.</text>

  <!-- Pill / CTA -->
  <g transform="translate(0, 450)">
    <rect x="0" y="0" width="260" height="56" rx="28" fill="#f7f5ee"/>
    <text x="30" y="36" class="pill">CALL 478-266-8020</text>
  </g>
</svg>
`.trim();

// Build the 1200x630 canvas: solid dark-green background, logo on the
// left, text SVG on the right.
const logoResized = await sharp(logo)
  .resize(380, 380, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 3,
    background: arborGreen,
  },
})
  .composite([
    // Subtle vignette via a darker green rectangle on the right side
    {
      input: Buffer.from(
        `<svg width="1200" height="630"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${arborGreenDark}" stop-opacity="0.55"/><stop offset="1" stop-color="${arborGreenDark}" stop-opacity="0"/></linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/></svg>`,
      ),
      top: 0,
      left: 0,
    },
    // Logo on the left
    { input: logoResized, top: 125, left: 60 },
    // Text block on the right
    { input: Buffer.from(svgText), top: 0, left: 460 },
  ])
  .jpeg({ quality: 85 })
  .toFile(join(publicDir, "og-image.jpg"));

console.log("✓ All assets generated in public/");
