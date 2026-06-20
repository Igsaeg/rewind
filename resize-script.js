import sharp from 'sharp';
import fs from 'fs';

const FOLDERS = ['g7', 'g8', 'g9', 'g10'];
const SIZES = [
  { suffix: 'thumb', width: 40, quality: 50 },
  { suffix: 'small', width: 250, quality: 70 },
  { suffix: 'medium', width: 500, quality: 75 },
  { suffix: 'large', width: 800, quality: 80 }
];

(async () => {
  for (const folder of FOLDERS) {
    const inputDir = `src/assets/${folder}`;
    if (!fs.existsSync(inputDir)) continue;

    const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg'));
    
    for (const { suffix, width, quality } of SIZES) {
      const outputDir = `src/assets/${folder}${suffix}`;
      fs.mkdirSync(outputDir, { recursive: true });

      for (const file of files) {
        await sharp(`${inputDir}/${file}`)
          .resize({ width, fit: 'cover' })
          .jpeg({ quality, progressive: true })
          .toFile(`${outputDir}/${file}`);
        console.log(`✓ ${folder}/${file} → ${suffix}`);
      }
    }
  }
  console.log('✓ Done!');
})();