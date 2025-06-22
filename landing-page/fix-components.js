/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const colorMap = {
  'text-electric-purple': '#a259f7',
  'text-cyber-green': '#39ff14',
  'text-electric-blue': '#6236ff',
  'text-neon-orange': '#ff7e29',
  'text-cyber-mint': '#00ffb3',
  'text-neon-red': '#ff4e00',
  'text-neon-pink': '#ff007f',
  'text-neon-yellow': '#ffff00'
};

const componentsDir = './src/components';
const files = ['ModuleGallery.tsx', 'UseCases.tsx', 'CTAInvestor.tsx'];

files.forEach(fileName => {
  const filePath = path.join(componentsDir, fileName);
  let content = fs.readFileSync(filePath, 'utf8');
  
  console.log(`Processing ${fileName}...`);
  
  // Add missing color properties
  Object.entries(colorMap).forEach(([className, colorValue]) => {
    const regex = new RegExp(`(className: "${className}",)`, 'g');
    content = content.replace(regex, `className: "${className}",\n      color: "${colorValue}",`);
  });
  
  // Fix duplicate classNames
  content = content.replace(/className="([^"]*)" className=\{([^}]*)\}/g, 'className={`$1 ${$2}`}');
  content = content.replace(/className=\{([^}]*)\} className="([^"]*)"/g, 'className={`${$1} $2`}');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${fileName}`);
});

console.log('All files have been updated!');
