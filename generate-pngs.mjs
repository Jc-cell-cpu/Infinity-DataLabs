import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brandDir = './public/brand';

const filesToConvert = [
  { svg: 'infinity-datalabs-icon.svg', png: 'infinity-datalabs-icon-512.png', width: 512 },
  { svg: 'infinity-datalabs-favicon.svg', png: 'infinity-datalabs-favicon-512.png', width: 512 },
  { svg: 'infinity-datalabs-horizontal-dark.svg', png: 'infinity-datalabs-horizontal-dark.png', height: 256 },
  { svg: 'infinity-datalabs-horizontal-light.svg', png: 'infinity-datalabs-horizontal-light.png', height: 256 },
  { svg: 'infinity-datalabs-vertical.svg', png: 'infinity-datalabs-stacked.png', height: 512 },
];

async function generate() {
  for (const file of filesToConvert) {
    const svgPath = path.join(brandDir, file.svg);
    const pngPath = path.join(brandDir, file.png);
    
    if (fs.existsSync(svgPath)) {
      try {
        let instance = sharp(svgPath, {
          density: 2400, // Highest quality rendering density
        });

        if (file.width) {
          instance = instance.resize({
            width: file.width,
            fit: 'contain',
            kernel: sharp.kernel.lanczos3,
          });
        } else if (file.height) {
          instance = instance.resize({
            height: file.height,
            fit: 'contain',
            kernel: sharp.kernel.lanczos3,
          });
        }

        await instance
          .png({
            compressionLevel: 9,
            adaptiveFiltering: true,
          })
          .toFile(pngPath);
        console.log(`Successfully generated ${file.png}`);
      } catch (err) {
        console.error(`Error generating ${file.png}:`, err);
      }
    } else {
      console.log(`SVG not found: ${svgPath}`);
    }
  }
}

generate();
