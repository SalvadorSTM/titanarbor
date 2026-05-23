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

// Sampled directly from src/assets/logo.png's solid background so the
// logo blends into the OG card with no visible square outline.
const arborGreen = { r: 29, g: 60, b: 43 };
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

// Hierarchy: BRAND (biggest, 2 lines) → PHONE → trust line → tagline.
// All elements centered within the right text column for a deliberate,
// poster-like composition. Vertical rhythm fills the full card height.
const svgText = `
<svg width="720" height="630" xmlns="http://www.w3.org/2000/svg">
  <style>
    .brand   { font: 900 92px system-ui, -apple-system, "Segoe UI", sans-serif; fill: #f7f5ee; letter-spacing: -3px; text-anchor: middle; }
    .phone   { font: 800 76px system-ui, -apple-system, "Segoe UI", sans-serif; fill: #f7f5ee; letter-spacing: 2px; text-anchor: middle; }
    .trust   { font: 700 30px system-ui, -apple-system, "Segoe UI", sans-serif; fill: #cdddc4; letter-spacing: 2px; text-anchor: middle; }
    .tagline { font: 500 28px system-ui, -apple-system, "Segoe UI", sans-serif; fill: #a8baa0; letter-spacing: 0.5px; text-anchor: middle; }
  </style>

  <text x="360" y="115" class="brand">TITAN ARBOR</text>
  <text x="360" y="215" class="brand">SOLUTIONS</text>

  <text x="360" y="345" class="phone">478-266-8020</text>

  <text x="360" y="455" class="trust">Licensed · Insured · 24/7 Emergency</text>

  <text x="360" y="565" class="tagline">Tree care for metro Atlanta.</text>
</svg>
`.trim();

// Logo: render from the 2400x2400 master at 420px for the OG card.
const logoResized = await sharp(logo)
  .resize(420, 420, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

// Compose 1200x630: solid dark-green bg (no overlay → no banding),
// logo on the left, text block fills the right.
await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 3,
    background: arborGreen,
  },
})
  .composite([
    // Logo on the left, vertically centered
    { input: logoResized, top: 105, left: 40 },
    // Text block: starts near top, ends near bottom, fills full height
    { input: Buffer.from(svgText), top: 0, left: 480 },
  ])
  // High-quality JPEG with no chroma subsampling. The previous
  // banding came from the gradient overlay; with that removed and
  // quality bumped to 95, edges stay crisp without artifacts.
  .jpeg({ quality: 95, chromaSubsampling: "4:4:4", mozjpeg: true })
  .toFile(join(publicDir, "og-image.jpg"));

console.log("✓ All assets generated in public/");
