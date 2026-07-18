import fs from 'fs';
import path from 'path';

const brandDir = './public/brand';
const files = fs.readdirSync(brandDir).filter(f => f.endsWith('.svg'));

const oldPath = 'M22 49c-9.39 0-17-7.61-17-17 0-9.39 7.61-17 17-17 15 0 15 8 30 8s15-8 30-8c9.39 0 17 7.61 17 17 0 9.39-7.61 17-17 17-15 0-15-8-30-8s-15 8-30 8z';
const newPath = 'M24 49c-10.5 0-19-7.6-19-17 0-9.4 8.5-17 19-17 14 0 14 8 28 8s14-8 28-8c10.5 0 19 7.6 19 17 0 9.4-8.5 17-19 17-14 0-14-8-28-8s-14 8-28 8z';

for (const file of files) {
  const filePath = path.join(brandDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(oldPath, newPath);
  content = content.replace(/M16 32h12/g, 'M18 32h12');
  content = content.replace(/M76 32h12/g, 'M74 32h12');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
