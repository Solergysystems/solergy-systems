import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');

async function optimizeImages() {
  console.log('🚀 Starting image optimization...\n');

  const files = fs.readdirSync(imagesDir);
  const jpgFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg'));

  for (const file of jpgFiles) {
    const inputPath = path.join(imagesDir, file);
    const fileName = path.parse(file).name;
    const webpPath = path.join(imagesDir, `${fileName}.webp`);

    try {
      // Get original file size
      const originalSize = fs.statSync(inputPath).size;
      
      // Convert to WebP with optimization
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(webpPath);

      const webpSize = fs.statSync(webpPath).size;
      const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

      console.log(`✅ ${file}`);
      console.log(`   Original: ${(originalSize / 1024).toFixed(0)}KB → WebP: ${(webpSize / 1024).toFixed(0)}KB (${savings}% smaller)\n`);

      // Special handling for logo - create a PNG version with better quality
      if (file === 'logo.jpg') {
        const pngPath = path.join(imagesDir, 'logo.png');
        await sharp(inputPath)
          .png({ quality: 100, compressionLevel: 9 })
          .toFile(pngPath);
        
        console.log(`   📌 Created high-quality PNG version: logo.png\n`);
      }

      // For hero images (1-6), create responsive sizes
      if (/^[1-6]\.jpg$/.test(file)) {
        const sizes = [
          { width: 640, suffix: '-mobile' },
          { width: 1024, suffix: '-tablet' },
          { width: 1920, suffix: '-desktop' }
        ];

        for (const size of sizes) {
          const responsivePath = path.join(imagesDir, `${fileName}${size.suffix}.webp`);
          await sharp(inputPath)
            .resize(size.width, null, { fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 80, effort: 6 })
            .toFile(responsivePath);
        }
        console.log(`   📱 Created responsive sizes for hero image\n`);
      }

    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  console.log('✨ Image optimization complete!\n');
  console.log('📋 Summary:');
  console.log(`   - All images converted to WebP format`);
  console.log(`   - Logo available in JPG, WebP, and PNG formats`);
  console.log(`   - Hero images (1-6) have responsive sizes (mobile/tablet/desktop)`);
  console.log(`   - Surya Ghar banner optimized to WebP\n`);
}

optimizeImages().catch(console.error);
