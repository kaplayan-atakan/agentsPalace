import { readFileSync, writeFileSync } from 'fs';

// Read UseCases.tsx
let content = readFileSync('./src/components/UseCases.tsx', 'utf8');

// Fix all duplicate className issues
content = content.replace(/className="([^"]*)" className=\{useCase\.color\}/g, 'className={`$1 ${useCase.className}`}');
content = content.replace(/className=\{useCase\.color\}/g, 'className={useCase.className}');

writeFileSync('./src/components/UseCases.tsx', content);
console.log('Fixed UseCases.tsx duplicate classNames');
