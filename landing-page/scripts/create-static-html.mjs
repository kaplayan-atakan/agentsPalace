import * as fs from 'fs/promises';
import * as path from 'path';
import { execSync } from 'child_process';
import * as https from 'https';
import * as http from 'http';
import { createWriteStream } from 'fs';

// Function to download a file
async function downloadFile(url, outputPath) {
  const protocol = url.startsWith('https') ? https : http;
  
  return new Promise((resolve, reject) => {
    const fileStream = createWriteStream(outputPath);
    
    protocol.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode} ${response.statusMessage}`));
        return;
      }
      
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      
      fileStream.on('error', (err) => {
        fs.unlink(outputPath).catch(() => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

// This script creates a static HTML snapshot of the running Next.js app
async function createStaticHtml() {
  try {
    console.log('Creating static HTML snapshot of the running Next.js app...');
    
    // Create the output directory if it doesn't exist
    const outputDir = path.resolve('static-export');
    await fs.mkdir(outputDir, { recursive: true }).catch(() => {});
    
    // Create directories for assets
    await fs.mkdir(path.join(outputDir, 'css'), { recursive: true }).catch(() => {});
    await fs.mkdir(path.join(outputDir, 'js'), { recursive: true }).catch(() => {});
    await fs.mkdir(path.join(outputDir, 'images'), { recursive: true }).catch(() => {});
    
    // Fetch the page content
    const html = execSync('curl -s http://localhost:3000').toString();
    
    // Extract CSS and JS links
    const cssLinks = [...html.matchAll(/<link [^>]*href="([^"]+\.css[^"]*)"[^>]*>/g)]
      .map(match => match[1])
      .filter(href => href.startsWith('/') || href.startsWith('http'));
    
    const jsLinks = [...html.matchAll(/<script [^>]*src="([^"]+\.js[^"]*)"[^>]*>/g)]
      .map(match => match[1])
      .filter(src => src.startsWith('/') || src.startsWith('http'));
    
    const imgLinks = [...html.matchAll(/<img [^>]*src="([^"]+\.(png|jpg|jpeg|gif|svg)[^"]*)"[^>]*>/g)]
      .map(match => match[1])
      .filter(src => src.startsWith('/') || src.startsWith('http'));
    
    // Process the HTML to ensure resources are properly referenced
    let processedHtml = html;
    
    // Process CSS links
    for (const cssLink of cssLinks) {
      const cssFileName = path.basename(cssLink.split('?')[0]);
      const cssOutputPath = path.join(outputDir, 'css', cssFileName);
      
      // Download the CSS file
      try {
        const fullUrl = cssLink.startsWith('http') ? cssLink : `http://localhost:3000${cssLink}`;
        await downloadFile(fullUrl, cssOutputPath);
        console.log(`Downloaded CSS: ${cssFileName}`);
        
        // Update the HTML to point to the local copy
        processedHtml = processedHtml.replace(
          new RegExp(`href="${cssLink.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'),
          `href="css/${cssFileName}"`
        );
      } catch (error) {
        console.error(`Error downloading CSS file ${cssLink}:`, error);
      }
    }
    
    // Process JS links
    for (const jsLink of jsLinks) {
      const jsFileName = path.basename(jsLink.split('?')[0]);
      const jsOutputPath = path.join(outputDir, 'js', jsFileName);
      
      // Download the JS file
      try {
        const fullUrl = jsLink.startsWith('http') ? jsLink : `http://localhost:3000${jsLink}`;
        await downloadFile(fullUrl, jsOutputPath);
        console.log(`Downloaded JS: ${jsFileName}`);
        
        // Update the HTML to point to the local copy
        processedHtml = processedHtml.replace(
          new RegExp(`src="${jsLink.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'),
          `src="js/${jsFileName}"`
        );
      } catch (error) {
        console.error(`Error downloading JS file ${jsLink}:`, error);
      }
    }
    
    // Process image links
    for (const imgLink of imgLinks) {
      const imgFileName = path.basename(imgLink.split('?')[0]);
      const imgOutputPath = path.join(outputDir, 'images', imgFileName);
      
      // Download the image file
      try {
        const fullUrl = imgLink.startsWith('http') ? imgLink : `http://localhost:3000${imgLink}`;
        await downloadFile(fullUrl, imgOutputPath);
        console.log(`Downloaded image: ${imgFileName}`);
        
        // Update the HTML to point to the local copy
        processedHtml = processedHtml.replace(
          new RegExp(`src="${imgLink.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'),
          `src="images/${imgFileName}"`
        );
      } catch (error) {
        console.error(`Error downloading image file ${imgLink}:`, error);
      }
    }
    
    // Write to file
    await fs.writeFile(path.join(outputDir, 'index.html'), processedHtml);
    
    console.log(`Static HTML snapshot created at: ${path.join(outputDir, 'index.html')}`);
  } catch (error) {
    console.error('Error creating static HTML snapshot:', error);
  }
}

createStaticHtml();
