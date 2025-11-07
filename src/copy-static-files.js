#!/usr/bin/env node

/**
 * Post-build script to copy static files to dist folder
 * This ensures sitemap.xml and robots.txt are in the deployed build
 */

const fs = require('fs');
const path = require('path');

const staticFiles = [
  { src: 'public/sitemap.xml', dest: 'dist/sitemap.xml' },
  { src: 'public/robots.txt', dest: 'dist/robots.txt' },
  { src: 'public/404.html', dest: 'dist/404.html' },
];

console.log('📋 Copying static files to dist...\n');

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  console.log('⚠️  dist directory does not exist, creating it...');
  fs.mkdirSync('dist', { recursive: true });
}

staticFiles.forEach(({ src, dest }) => {
  try {
    if (fs.existsSync(src)) {
      // Create destination directory if it doesn't exist
      const destDir = path.dirname(dest);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      // Copy file
      fs.copyFileSync(src, dest);
      console.log(`✅ Copied: ${src} → ${dest}`);
    } else {
      console.log(`⚠️  Source file not found: ${src}`);
    }
  } catch (error) {
    console.error(`❌ Error copying ${src}:`, error.message);
  }
});

console.log('\n✨ Static files copy complete!\n');
