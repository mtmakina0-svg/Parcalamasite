/**
 * Multi-language Sitemap Generator for MT Makina Website
 * Generates XML sitemap with hreflang support for all languages
 */

import { generateUrl, type Language } from './seoConfig';
import { modelDescriptions } from './modelDescriptions';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  alternates?: { lang: Language; url: string }[];
}

// All product types and their models
// All product types and their models derived from modelDescriptions or manually augmented if needed
// We use a mapping or just keys from modelDescriptions
const products: { [key: string]: string[] } = {};

// Populate products from modelDescriptions
Object.keys(modelDescriptions).forEach(type => {
  products[type] = Object.keys(modelDescriptions[type]);
});

// Update waste categories to match WasteCategoriesPage.tsx
const wasteCategories = [
  'evsel',
  'elektronik',
  'lastik',
  'metal',
  'cam',
  'kagit',
  'plastik',
  'organik',
  'tibbi',
  'agac',
  'hayvan',
  'ambalaj',
  'palet',
  'tekstil',
  'aty'
];

const languages: Language[] = ['tr', 'en', 'ru', 'ar'];

/**
 * Generate complete sitemap URLs with multi-language support
 */
export function generateSitemapUrls(): SitemapUrl[] {
  const baseUrl = 'https://www.parcalamamakinesi.com';
  const today = new Date().toISOString().split('T')[0];

  const urls: SitemapUrl[] = [];

  // For each language, generate all pages
  languages.forEach(lang => {
    // Home page - highest priority
    const homeUrl = baseUrl + generateUrl.home(lang);
    const homeAlternates = languages.map(l => ({
      lang: l,
      url: baseUrl + generateUrl.home(l)
    }));
    urls.push({
      loc: homeUrl,
      lastmod: today,
      changefreq: 'weekly',
      priority: 1.0,
      alternates: homeAlternates
    });

    // About page
    const aboutUrl = baseUrl + generateUrl.about(lang);
    const aboutAlternates = languages.map(l => ({
      lang: l,
      url: baseUrl + generateUrl.about(l)
    }));
    urls.push({
      loc: aboutUrl,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.9,
      alternates: aboutAlternates
    });

    // Products overview page
    const productsUrl = baseUrl + generateUrl.products(lang);
    const productsAlternates = languages.map(l => ({
      lang: l,
      url: baseUrl + generateUrl.products(l)
    }));
    urls.push({
      loc: productsUrl,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.9,
      alternates: productsAlternates
    });

    // Technology page
    const techUrl = baseUrl + generateUrl.technology(lang);
    const techAlternates = languages.map(l => ({
      lang: l,
      url: baseUrl + generateUrl.technology(l)
    }));
    urls.push({
      loc: techUrl,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8,
      alternates: techAlternates
    });

    // References page
    const refsUrl = baseUrl + generateUrl.references(lang);
    const refsAlternates = languages.map(l => ({
      lang: l,
      url: baseUrl + generateUrl.references(l)
    }));
    urls.push({
      loc: refsUrl,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8,
      alternates: refsAlternates
    });

    // Certificates page
    const certsUrl = baseUrl + generateUrl.certificates(lang);
    const certsAlternates = languages.map(l => ({
      lang: l,
      url: baseUrl + generateUrl.certificates(l)
    }));
    urls.push({
      loc: certsUrl,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.7,
      alternates: certsAlternates
    });

    // Contact page
    const contactUrl = baseUrl + generateUrl.contact(lang);
    const contactAlternates = languages.map(l => ({
      lang: l,
      url: baseUrl + generateUrl.contact(l)
    }));
    urls.push({
      loc: contactUrl,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8,
      alternates: contactAlternates
    });

    // E-catalog page
    const ecatalogUrl = baseUrl + generateUrl.ecatalog(lang);
    const ecatalogAlternates = languages.map(l => ({
      lang: l,
      url: baseUrl + generateUrl.ecatalog(l)
    }));
    urls.push({
      loc: ecatalogUrl,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.7,
      alternates: ecatalogAlternates
    });

    // Product category pages
    Object.keys(products).forEach(productType => {
      const categoryUrl = baseUrl + generateUrl.productCategory(productType, lang);
      const categoryAlternates = languages.map(l => ({
        lang: l,
        url: baseUrl + generateUrl.productCategory(productType, l)
      }));
      urls.push({
        loc: categoryUrl,
        lastmod: today,
        changefreq: 'weekly',
        priority: 0.85,
        alternates: categoryAlternates
      });

      // Product model detail pages
      products[productType].forEach(model => {
        const modelUrl = baseUrl + generateUrl.productDetail(productType, model, lang);
        const modelAlternates = languages.map(l => ({
          lang: l,
          url: baseUrl + generateUrl.productDetail(productType, model, l)
        }));
        urls.push({
          loc: modelUrl,
          lastmod: today,
          changefreq: 'weekly',
          priority: 0.8,
          alternates: modelAlternates
        });
      });
    });

    // Waste category pages
    const wasteMainUrl = baseUrl + generateUrl.waste(undefined, lang);
    const wasteMainAlternates = languages.map(l => ({
      lang: l,
      url: baseUrl + generateUrl.waste(undefined, l)
    }));
    urls.push({
      loc: wasteMainUrl,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.7,
      alternates: wasteMainAlternates
    });

    wasteCategories.forEach(category => {
      const wasteUrl = baseUrl + generateUrl.waste(category, lang);
      const wasteAlternates = languages.map(l => ({
        lang: l,
        url: baseUrl + generateUrl.waste(category, l)
      }));
      urls.push({
        loc: wasteUrl,
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.6,
        alternates: wasteAlternates
      });
    });
  });

  return urls;
}

/**
 * Generate XML sitemap string with hreflang annotations
 */
export function generateSitemapXML(): string {
  const urls = generateSitemapUrls();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;

    // Add hreflang alternate links
    if (url.alternates) {
      url.alternates.forEach(alt => {
        xml += `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.url}"/>\n`;
      });
      // Add x-default
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${url.alternates[0].url}"/>\n`;
    }

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

  let content = '# MT Makina Robots.txt\n\n';
  content += 'User-agent: *\n';
  content += 'Allow: /\n\n';
  content += 'Disallow: /admin/\n';
  content += 'Disallow: /api/\n';
  content += 'Disallow: /*.json$\n\n';
  content += '# Sitemaps\n';
  content += `Sitemap: ${baseUrl}/sitemap.xml\n\n`;
  content += '# Crawl-delay\n';
  content += 'Crawl-delay: 1\n';

  return content;
}

/**
 * Get total number of URLs in sitemap
 */
export function getSitemapStats() {
  const urls = generateSitemapUrls();
  const byLanguage: { [key: string]: number } = {};

  languages.forEach(lang => {
    byLanguage[lang] = urls.filter(url => url.loc.includes(`/${lang}/`)).length;
  });

  return {
    total: urls.length,
    byLanguage,
    productPages: Object.values(products).reduce((sum, models) => sum + models.length, 0) * languages.length,
    categoryPages: Object.keys(products).length * languages.length,
    mainPages: 8 * languages.length // home, about, products, tech, refs, certs, contact, ecatalog
  };
}