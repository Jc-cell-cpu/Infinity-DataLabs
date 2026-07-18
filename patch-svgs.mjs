import fs from 'fs';
import path from 'path';

const brandDir = './public/brand';
const files = fs.readdirSync(brandDir).filter(f => f.endsWith('.svg'));

for (const file of files) {
  const filePath = path.join(brandDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace <mask id="ears"> with <mask id="ears" maskUnits="userSpaceOnUse" x="-200" y="-200" width="1000" height="1000">
  content = content.replace(
    /<mask id="ears">/g,
    '<mask id="ears" maskUnits="userSpaceOnUse" x="-200" y="-200" width="1000" height="1000">'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Patched ${file}`);
}
