const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/img_backup'; // Read from backup
const outputDir = './public/img'; // Write to original location

// Configuration for different image types
const config = {
  jpeg: {
    quality: 85, // 85% quality is usually good balance
    progressive: true,
    mozjpeg: true
  },
  png: {
    compressionLevel: 9,
    adaptiveFiltering: true,
    palette: true
  },
  webp: {
    quality: 85
  }
};

// Target max dimensions for different image types
const maxDimensions = {
  hero: { width: 1920, height: 1080 },
  gallery: { width: 1200, height: 900 },
  thumbnail: { width: 600, height: 600 },
  default: { width: 1600, height: 1200 }
};

function getImageType(filename) {
  const lower = filename.toLowerCase();
  if (lower.includes('hero')) return 'hero';
  if (lower.includes('gallery')) return 'gallery';
  if (lower.includes('avatar') || lower.includes('placeholder')) return 'thumbnail';
  return 'default';
}

async function compressImage(inputPath, outputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const filename = path.basename(inputPath);
  const imageType = getImageType(filename);
  const dimensions = maxDimensions[imageType];

  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size / 1024 / 1024; // MB

    let pipeline = sharp(inputPath);

    // Get metadata to check if resize is needed
    const metadata = await pipeline.metadata();
    
    // Resize if image is larger than max dimensions
    if (metadata.width > dimensions.width || metadata.height > dimensions.height) {
      pipeline = pipeline.resize(dimensions.width, dimensions.height, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Apply format-specific compression
    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg(config.jpeg);
    } else if (ext === '.png') {
      // For very large PNGs, consider converting to JPEG if they don't need transparency
      if (originalSize > 5 && !filename.includes('logo') && !filename.includes('sparkl')) {
        // Check if image has transparency
        const hasAlpha = metadata.hasAlpha;
        if (!hasAlpha) {
          // Convert to JPEG for better compression
          outputPath = outputPath.replace('.png', '.jpg');
          pipeline = pipeline.jpeg(config.jpeg);
          console.log(`  Converting ${filename} from PNG to JPEG (no transparency needed)`);
        } else {
          pipeline = pipeline.png(config.png);
        }
      } else {
        pipeline = pipeline.png(config.png);
      }
    }

    // Save the compressed image
    // First save to temp file, then move to final location
    const tempPath = outputPath + '.tmp';
    await pipeline.toFile(tempPath);
    
    // Move temp file to final location
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }
    fs.renameSync(tempPath, outputPath);

    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size / 1024 / 1024; // MB
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✓ ${filename}: ${originalSize.toFixed(2)}MB → ${newSize.toFixed(2)}MB (-${reduction}%)`);
    
    return { originalSize, newSize, reduction: parseFloat(reduction) };
  } catch (error) {
    console.error(`✗ Error processing ${filename}:`, error.message);
    return null;
  }
}

async function processAllImages() {
  console.log('Starting image compression...\n');
  
  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });

  let totalOriginal = 0;
  let totalCompressed = 0;
  let processedCount = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    
    const result = await compressImage(inputPath, outputPath);
    
    if (result) {
      totalOriginal += result.originalSize;
      totalCompressed += result.newSize;
      processedCount++;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('Compression Complete!');
  console.log('='.repeat(50));
  console.log(`Images processed: ${processedCount}`);
  console.log(`Total original size: ${totalOriginal.toFixed(2)}MB`);
  console.log(`Total compressed size: ${totalCompressed.toFixed(2)}MB`);
  console.log(`Total reduction: ${((totalOriginal - totalCompressed) / totalOriginal * 100).toFixed(1)}%`);
  console.log(`Space saved: ${(totalOriginal - totalCompressed).toFixed(2)}MB`);
  console.log('\nBackup of original images saved in: ./public/img_backup/');
}

// Run the compression
processAllImages().catch(console.error);