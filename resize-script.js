import sharp from 'sharp';
import fs from 'fs';

const FOLDERS = ['g7_original', 'g8_original', 'g9_original', 'g10_original'];

const SIZES = [
    { suffix: '_thumb', width: 40, quality: 50 },
    { suffix: '_loaded', width: 800, quality: 80 }
];

(async () => {
    for (const folder of FOLDERS) {
        const inputDir = `src/assets/${folder}`;

        if (!fs.existsSync(inputDir)) continue;

        const files = fs.readdirSync(inputDir)
            .filter(f => f.endsWith('.jpg'));

        for (const { suffix, width, quality } of SIZES) {
            const outputDir = `src/assets/${folder.replace('_original', '')}${suffix}`;

            fs.mkdirSync(outputDir, { recursive: true });

            const existing = fs.readdirSync(outputDir);

            for (const file of existing) {
                if (!files.includes(file)) {
                    fs.unlinkSync(`${outputDir}/${file}`);
                    console.log(`✗ Removed ${file}`);
                }
            }

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