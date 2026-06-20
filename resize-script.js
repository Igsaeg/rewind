import sharp from 'sharp';
import fs from 'fs';

const folders = ['g7', 'g8', 'g9', 'g10'];

async function run() {
  for (const folder of folders) {
    const inputDir = `src/assets/${folder}`;
    const outputDir = `src/assets/${folder}_thumb`;

    if (!fs.existsSync(inputDir)) continue;
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    const files = fs.readdirSync(inputDir);
    for (const file of files) {
      if (!file.endsWith('.jpg')) continue;
      await sharp(`${inputDir}/${file}`)
        .resize({ width: 500 })
        .jpeg({ quality: 75 })
        .toFile(`${outputDir}/${file}`);
      console.log(`Resized: ${folder}/${file}`);
    }
  }
  console.log('Done!');
}

run();