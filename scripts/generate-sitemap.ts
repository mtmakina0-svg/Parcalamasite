
import fs from 'fs';
import path from 'path';
import { generateSitemapXML, generateRobotsTxt } from '../src/utils/sitemapGenerator';

// Paths
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const ROBOTS_PATH = path.join(PUBLIC_DIR, 'robots.txt');

// Ensure public dir exists
if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Generate Sitemap
console.log('Generating sitemap.xml...');
const sitemap = generateSitemapXML();
fs.writeFileSync(SITEMAP_PATH, sitemap);
console.log(`Sitemap written to ${SITEMAP_PATH}`);

// Generate Robots.txt
console.log('Generating robots.txt...');
const robots = generateRobotsTxt();
fs.writeFileSync(ROBOTS_PATH, robots);
console.log(`Robots.txt written to ${ROBOTS_PATH}`);
