import * as fs from 'fs/promises';
import * as path from 'path';
import { execSync } from 'child_process';

// This script updates the static export to include module pages
async function updateStaticExport() {
  try {
    console.log('Updating static export to include module pages...');
    
    // Create output directories if they don't exist
    const modulesDir = path.resolve('static-export', 'modules');
    await fs.mkdir(modulesDir, { recursive: true }).catch(() => {});
    
    // Create flow module directory
    const flowDir = path.join(modulesDir, 'flow');
    await fs.mkdir(flowDir, { recursive: true }).catch(() => {});
    
    // Fetch the Flow module page content
    console.log('Fetching Flow module page content...');
    const flowHtml = execSync('curl -s http://localhost:3000/modules/flow').toString();
    
    // Write the Flow module HTML file
    await fs.writeFile(path.join(flowDir, 'index.html'), flowHtml);
    console.log('Created Flow module static HTML file');
    
    // Update links in the main index.html to use relative paths
    console.log('Updating links in the main index.html...');
    const indexPath = path.resolve('static-export', 'index.html');
    let indexHtml = await fs.readFile(indexPath, 'utf8');
    
    // Replace client-side links with static HTML links
    indexHtml = indexHtml.replace(/href="\/modules\/flow"/g, 'href="./modules/flow/index.html"');
    
    // Write the updated index.html
    await fs.writeFile(indexPath, indexHtml);
    console.log('Updated main index.html with correct links');
    
    console.log('Static export update completed successfully!');
  } catch (error) {
    console.error('Failed to update static export:', error);
    process.exit(1);
  }
}

updateStaticExport();
