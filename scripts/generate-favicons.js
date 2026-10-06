const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const targets = [
  { size: 512, dest: 'public/favicon-512x512.png' },
  { size: 512, dest: 'public/favicon.png' },
  { size: 512, dest: 'src/app/icon.png' },
  { size: 180, dest: 'src/app/apple-icon.png' },
  { size: 180, dest: 'public/apple-touch-icon.png' },
  { size: 32, dest: 'public/favicon-32x32.png' },
  { size: 16, dest: 'public/favicon-16x16.png' }
];

console.log('Generating high quality PNG favicons from src/app/icon.svg...');

for (const { size, dest } of targets) {
  const absoluteDest = path.resolve(__dirname, '..', dest);
  const dir = path.dirname(absoluteDest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const cmd = `npx -y @resvg/resvg-js-cli --fit-width ${size} --shape-rendering 2 --text-rendering 2 --image-rendering 0 src/app/icon.svg "${absoluteDest}"`;
  execSync(cmd, { stdio: 'inherit' });
  console.log(`Successfully generated ${dest} (${size}x${size} px)`);
}
