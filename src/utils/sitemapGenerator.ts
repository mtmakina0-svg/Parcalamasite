/**
 * Sitemap Generator for MT Makina Website
 * Generates XML sitemap for better SEO
 */

import { generateUrl } from './seoConfig';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// All product types and their models
const products = {
  'single-shaft': ['TSH-60', 'TSH-80', 'TSH-100', 'TSH-130', 'TSH-160', 'TSH-200'],
  'dual-shaft': ['CS-20', 'CS-40', 'CS-60', 'CS-80', 'CS-100', 'CS-120', 'CS-150', 'CS-180', 'CS-200'],
  'quad-shaft': ['DS-80', 'DS-100', 'DS-150', 'DS-200'],
  'metal': ['RDM-100', 'RDM-150', 'RDM-180', 'RDM-200'],
  'mobile': ['TSM-150', 'TSM-300', 'CSM-150', 'CSM-200'],
  'pallet': ['TSV-140', 'TSV-200', 'TSVX-200'],
  'harddisk': ['DATABER-S', 'DATABER-D', 'DATABER-T'],
  'granulator': ['GR-400', 'GR-600', 'GR-800'],
  'baler': ['BP-60', 'BP-100'],
  'conveyor': ['CV-3M', 'CV-5M', 'CV-10M'],
  'separator': ['MS-1', 'MS-2']
};

const wasteCategories = [
  'plastik',
  'kagit-karton', 
  'metal',
  'elektronik',
  'ahsap',
  'lastik',
  'tekstil',
  'organik'
];

/**
 * Generate complete sitemap URLs
 */
export function generateSitemapUrls(): SitemapUrl[] {
  const baseUrl = 'https://www.parcalamamakinesi.com';
  const today = new Date().toISOString().split('T')[0];
  
  const urls: SitemapUrl[] = [];

  // Home page - highest priority
  urls.push({
    loc: baseUrl + generateUrl.home(),
    lastmod: today,
    changefreq: 'weekly',
    priority: 1.0
  });

  // Main pages
  urls.push({
    loc: baseUrl + generateUrl.about(),
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.9
  });

  urls.push({
    loc: baseUrl + generateUrl.products(),
    lastmod: today,
    changefreq: 'weekly',
    priority: 0.9
  });

  urls.push({
    loc: baseUrl + generateUrl.technology(),
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.8
  });

  urls.push({
    loc: baseUrl + generateUrl.references(),
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.8
  });

  urls.push({
    loc: baseUrl + generateUrl.certificates(),
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  });

  urls.push({
    loc: baseUrl + generateUrl.contact(),
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.8
  });

  urls.push({
    loc: baseUrl + generateUrl.ecatalog(),
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  });

  // Product category pages
  Object.keys(products).forEach(productType => {
    urls.push({
      loc: baseUrl + generateUrl.productCategory(productType),
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.85
    });

    // Individual product model pages
    products[productType as keyof typeof products].forEach(model => {
      urls.push({
        loc: baseUrl + generateUrl.productDetail(productType, model),
        lastmod: today,
        changefreq: 'weekly',
        priority: 0.8
      });
    });
  });

  // Waste categories
  urls.push({
    loc: baseUrl + generateUrl.waste(),
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  });

  wasteCategories.forEach(category => {
    urls.push({
      loc: baseUrl + generateUrl.waste(category),
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.6
    });
  });

  return urls;
}

/**
 * Generate XML sitemap content
 */
export function generateSitemapXML(): string {
  const urls = generateSitemapUrls();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;
    if (url.lastmod) {
      xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    }
    if (url.changefreq) {
      xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    }
    if (url.priority !== undefined) {
      xml += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
    }
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
}

/**
 * Generate robots.txt content
 */
export function generateRobotsTxt(): string {
  const baseUrl = 'https://www.parcalamamakinesi.com';
  
  return `# Robots.txt for MT Makina - parcalamamakinesi.com
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: *.json$

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (optional, adjust based on server capacity)
Crawl-delay: 1

# Specific bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Yandex
Allow: /
`;
}

/**
 * Log sitemap generation (useful for debugging)
 */
export function logSitemapInfo(): void {
  const urls = generateSitemapUrls();
  console.log('=== MT Makina Sitemap Info ===');
  console.log(`Total URLs: ${urls.length}`);
  console.log('\nURL Breakdown:');
  console.log(`- Main pages: 8`);
  console.log(`- Product categories: ${Object.keys(products).length}`);
  console.log(`- Product models: ${Object.values(products).flat().length}`);
  console.log(`- Waste categories: ${wasteCategories.length + 1}`);
  console.log('\nTo generate sitemap.xml, copy the output of generateSitemapXML()');
  console.log('To generate robots.txt, copy the output of generateRobotsTxt()');
}

// For development - log sitemap info
if (process.env.NODE_ENV === 'development') {
  // Uncomment to see sitemap info in console
  // logSitemapInfo();
}
