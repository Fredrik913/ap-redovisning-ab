// Skapar webboptimerade bilder i public/pictures från originalen i images/originals.
// Kör med: npm run images
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const SRC = "images/originals";
const OUT = "public/pictures";

// Kvalitet: hög nog att inte synas komprimerad, men utan onödigt stora filer
const WEBP = { quality: 82, effort: 6, smartSubsample: true };
const WEBP_PORTRAIT = { quality: 86, effort: 6, smartSubsample: true };
const JPEG = { quality: 82, mozjpeg: true, progressive: true };

await mkdir(OUT, { recursive: true });

// Hero desktop: tre bredder så att webbläsaren kan välja efter skärm (srcset)
for (const width of [1280, 1920, 2560]) {
  await sharp(`${SRC}/hero.jpg`)
    .resize({ width })
    .webp(WEBP)
    .toFile(`${OUT}/hero-desktop-${width}.webp`);
}
await sharp(`${SRC}/hero.jpg`).resize({ width: 1920 }).jpeg(JPEG).toFile(`${OUT}/hero-desktop.jpg`);

// Hero mobil: stående utsnitt (3:5) ur mitten av originalet, tillräckligt stort för 3x-skärmar
const mobile = { width: 1260, height: 2100, fit: "cover", position: "centre" };
await sharp(`${SRC}/hero.jpg`).resize(mobile).webp(WEBP).toFile(`${OUT}/hero-mobile.webp`);
await sharp(`${SRC}/hero.jpg`).resize(mobile).jpeg(JPEG).toFile(`${OUT}/hero-mobile.jpg`);

// Porträtt: kvadratisk mittbeskärning, visas i 256px så 800px räcker även på 3x-skärmar
const portrait = { width: 800, height: 800, fit: "cover", position: "centre" };
await sharp(`${SRC}/profile-portrait.jpg`)
  .resize(portrait)
  .webp(WEBP_PORTRAIT)
  .toFile(`${OUT}/profile-portrait.webp`);
await sharp(`${SRC}/profile-portrait.jpg`)
  .resize(portrait)
  .jpeg({ ...JPEG, quality: 86 })
  .toFile(`${OUT}/profile-portrait.jpg`);

console.log("Bilder skapade i", OUT);
