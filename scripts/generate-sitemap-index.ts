/**
 * Kategorize Edilmiş Sitemap Index Generator
 * MT Makina - Yoast SEO benzeri sitemap yapısı
 * 
 * Şu sitemap'leri oluşturur:
 * - sitemap-index.xml (Ana index)
 * - sitemap-pages.xml (Ana sayfalar)
 * - sitemap-products.xml (Ürün kategorileri)
 * - sitemap-models.xml (Ürün modelleri)
 * - sitemap-waste.xml (Atık türleri)
 * - sitemap-blog.xml (Blog yazıları)
 */

import fs from 'fs';
import path from 'path';
import { generateUrl, type Language } from '../src/utils/seoConfig';

import { availableModels } from '../src/utils/modelConfig';

const BASE_URL = 'https://www.parcalamamakinesi.com';
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const TODAY = new Date().toISOString().split('T')[0];
const LANGUAGES: Language[] = ['tr', 'en', 'ru', 'ar'];

interface SitemapUrl {
    loc: string;
    lastmod: string;
    changefreq: string;
    priority: number;
    alternates?: { lang: Language; url: string }[];
}

// Ürün ve modellerini al
const products = availableModels;

// Atık kategorileri
const wasteCategories = [
    'evsel', 'elektronik', 'lastik', 'metal', 'cam', 'kagit',
    'plastik', 'organik', 'tibbi', 'agac', 'hayvan', 'ambalaj',
    'palet', 'tekstil', 'aty'
];

// Blog yazıları (blogPosts.ts'den import edilebilir)
const blogSlugs = [
    'plastik-geri-donusum-rehberi',
    'endustriyel-parca-lama-makineleri',
    'atik-yonetimi-2024'
];

// Katalog modelleri (TSH serisi ve CS serisi)
const catalogModels = {
    tsh: ['tsh-60', 'tsh-80', 'tsh-100', 'tsh-130', 'tsh-160'],
    cs: ['cs-20', 'cs-40', 'cs-60', 'cs-80', 'cs-150', 'cs-180', 'cs-200']
};
const catalogLanguages = { tr: '', en: '-en', ru: '-ru', ar: '-ar' };

/**
 * XML header oluştur (XSL stylesheet referansı ile)
 */
function xmlHeader(includeXsl: boolean = true): string {
    let header = '<?xml version="1.0" encoding="UTF-8"?>\n';
    if (includeXsl) {
        header += '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';
    }
    return header;
}

/**
 * Sitemap URL'sini XML'e çevir
 */
function urlToXml(url: SitemapUrl): string {
    let xml = '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;

    // Hreflang alternates
    if (url.alternates && url.alternates.length > 0) {
        url.alternates.forEach(alt => {
            xml += `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.url}"/>\n`;
        });
        xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${url.alternates[0].url}"/>\n`;
    }

    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
    xml += '  </url>\n';

    return xml;
}

/**
 * Sitemap dosyası oluştur
 */
function createSitemap(urls: SitemapUrl[]): string {
    let xml = xmlHeader(true);
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
    xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

    urls.forEach(url => {
        xml += urlToXml(url);
    });

    xml += '</urlset>';
    return xml;
}

/**
 * Sitemap Index dosyası oluştur
 */
function createSitemapIndex(sitemaps: { name: string; lastmod: string }[]): string {
    let xml = xmlHeader(true);
    xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    sitemaps.forEach(sitemap => {
        xml += '  <sitemap>\n';
        xml += `    <loc>${BASE_URL}/${sitemap.name}</loc>\n`;
        xml += `    <lastmod>${sitemap.lastmod}</lastmod>\n`;
        xml += '  </sitemap>\n';
    });

    xml += '</sitemapindex>';
    return xml;
}

/**
 * Ana Sayfalar Sitemap'i (pages)
 */
function generatePagesSitemap(): SitemapUrl[] {
    const urls: SitemapUrl[] = [];

    const pages = [
        { gen: generateUrl.home, priority: 1.0, freq: 'weekly' },
        { gen: generateUrl.about, priority: 0.9, freq: 'monthly' },
        { gen: generateUrl.products, priority: 0.9, freq: 'weekly' },
        { gen: generateUrl.technology, priority: 0.8, freq: 'monthly' },
        { gen: generateUrl.references, priority: 0.8, freq: 'monthly' },
        { gen: generateUrl.certificates, priority: 0.7, freq: 'monthly' },
        { gen: generateUrl.contact, priority: 0.8, freq: 'monthly' },
        { gen: generateUrl.ecatalog, priority: 0.7, freq: 'monthly' },
    ];

    LANGUAGES.forEach(lang => {
        pages.forEach(page => {
            const url = BASE_URL + page.gen(lang);
            const alternates = LANGUAGES.map(l => ({
                lang: l,
                url: BASE_URL + page.gen(l)
            }));

            urls.push({
                loc: url,
                lastmod: TODAY,
                changefreq: page.freq,
                priority: page.priority,
                alternates
            });
        });
    });

    return urls;
}

/**
 * Ürün Kategorileri Sitemap'i (product-categories)
 */
function generateProductCategoriesSitemap(): SitemapUrl[] {
    const urls: SitemapUrl[] = [];

    LANGUAGES.forEach(lang => {
        Object.keys(products).forEach(productType => {
            const url = BASE_URL + generateUrl.productCategory(productType, lang);
            const alternates = LANGUAGES.map(l => ({
                lang: l,
                url: BASE_URL + generateUrl.productCategory(productType, l)
            }));

            urls.push({
                loc: url,
                lastmod: TODAY,
                changefreq: 'weekly',
                priority: 0.85,
                alternates
            });
        });
    });

    return urls;
}

/**
 * Ürün Modelleri Sitemap'i (product-models)
 */
function generateProductModelsSitemap(): SitemapUrl[] {
    const urls: SitemapUrl[] = [];

    LANGUAGES.forEach(lang => {
        Object.keys(products).forEach(productType => {
            products[productType].forEach(model => {
                const url = BASE_URL + generateUrl.productDetail(productType, model, lang);
                const alternates = LANGUAGES.map(l => ({
                    lang: l,
                    url: BASE_URL + generateUrl.productDetail(productType, model, l)
                }));

                urls.push({
                    loc: url,
                    lastmod: TODAY,
                    changefreq: 'weekly',
                    priority: 0.8,
                    alternates
                });
            });
        });
    });

    return urls;
}

/**
 * Atık Türleri Sitemap'i (waste)
 */
function generateWasteSitemap(): SitemapUrl[] {
    const urls: SitemapUrl[] = [];

    LANGUAGES.forEach(lang => {
        // Ana atık sayfası
        const mainUrl = BASE_URL + generateUrl.waste(undefined, lang);
        const mainAlternates = LANGUAGES.map(l => ({
            lang: l,
            url: BASE_URL + generateUrl.waste(undefined, l)
        }));

        urls.push({
            loc: mainUrl,
            lastmod: TODAY,
            changefreq: 'weekly',
            priority: 0.7,
            alternates: mainAlternates
        });

        // Atık kategorileri
        wasteCategories.forEach(category => {
            const url = BASE_URL + generateUrl.waste(category, lang);
            const alternates = LANGUAGES.map(l => ({
                lang: l,
                url: BASE_URL + generateUrl.waste(category, l)
            }));

            urls.push({
                loc: url,
                lastmod: TODAY,
                changefreq: 'monthly',
                priority: 0.6,
                alternates
            });
        });
    });

    return urls;
}

/**
 * Blog Sitemap'i
 */
function generateBlogSitemap(): SitemapUrl[] {
    const urls: SitemapUrl[] = [];

    LANGUAGES.forEach(lang => {
        // Blog ana sayfa
        const langPrefix = lang === 'tr' ? '/tr' : `/${lang}`;
        const blogMainUrl = `${BASE_URL}${langPrefix}/blog`;

        urls.push({
            loc: blogMainUrl,
            lastmod: TODAY,
            changefreq: 'weekly',
            priority: 0.7,
            alternates: LANGUAGES.map(l => ({
                lang: l,
                url: `${BASE_URL}/${l === 'tr' ? 'tr' : l}/blog`
            }))
        });

        // Blog yazıları
        blogSlugs.forEach(slug => {
            const url = `${BASE_URL}${langPrefix}/blog/${slug}`;

            urls.push({
                loc: url,
                lastmod: TODAY,
                changefreq: 'monthly',
                priority: 0.6,
                alternates: LANGUAGES.map(l => ({
                    lang: l,
                    url: `${BASE_URL}/${l === 'tr' ? 'tr' : l}/blog/${slug}`
                }))
            });
        });
    });

    return urls;
}

/**
 * Katalog Sitemap'i (catalog HTML files)
 */
function generateCatalogsSitemap(): SitemapUrl[] {
    const urls: SitemapUrl[] = [];

    // Iterate over each series (tsh, cs, etc.)
    Object.entries(catalogModels).forEach(([series, models]) => {
        models.forEach((model: string) => {
            // Her model için dil alternatiflerini oluştur
            const alternates = LANGUAGES.map(lang => ({
                lang,
                url: `${BASE_URL}/catalogs/${series}/${model}/catalog${catalogLanguages[lang]}.html`
            }));

            LANGUAGES.forEach(lang => {
                const suffix = catalogLanguages[lang];
                const url = `${BASE_URL}/catalogs/${series}/${model}/catalog${suffix}.html`;

                urls.push({
                    loc: url,
                    lastmod: TODAY,
                    changefreq: 'monthly',
                    priority: 0.6,
                    alternates
                });
            });
        });
    });

    return urls;
}

/**
 * Güncellenmiş robots.txt oluştur
 */
function generateRobotsTxt(): string {
    let content = '# MT Makina Robots.txt\n';
    content += '# Updated: ' + TODAY + '\n\n';
    content += 'User-agent: *\n';
    content += 'Allow: /\n\n';
    content += 'Disallow: /admin/\n';
    content += 'Disallow: /api/\n';
    content += 'Disallow: /*.json$\n\n';
    content += '# Sitemap Index\n';
    content += `Sitemap: ${BASE_URL}/sitemap-index.xml\n\n`;
    content += '# Individual Sitemaps\n';
    content += `Sitemap: ${BASE_URL}/sitemap-pages.xml\n`;
    content += `Sitemap: ${BASE_URL}/sitemap-products.xml\n`;
    content += `Sitemap: ${BASE_URL}/sitemap-models.xml\n`;
    content += `Sitemap: ${BASE_URL}/sitemap-waste.xml\n`;
    content += `Sitemap: ${BASE_URL}/sitemap-blog.xml\n`;
    content += `Sitemap: ${BASE_URL}/sitemap-catalogs.xml\n\n`;
    content += '# Crawl-delay\n';
    content += 'Crawl-delay: 1\n';

    return content;
}

/**
 * Ana fonksiyon - Tüm sitemapları oluştur
 */
function main() {
    console.log('📍 Kategorize Sitemap Index Oluşturuluyor...\n');

    // Dizin kontrolü
    if (!fs.existsSync(PUBLIC_DIR)) {
        fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }

    // 1. Pages Sitemap
    console.log('📄 sitemap-pages.xml oluşturuluyor...');
    const pagesUrls = generatePagesSitemap();
    const pagesSitemap = createSitemap(pagesUrls);
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-pages.xml'), pagesSitemap);
    console.log(`   ✅ ${pagesUrls.length} sayfa URL'si eklendi`);

    // 2. Product Categories Sitemap
    console.log('📄 sitemap-products.xml oluşturuluyor...');
    const productsUrls = generateProductCategoriesSitemap();
    const productsSitemap = createSitemap(productsUrls);
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-products.xml'), productsSitemap);
    console.log(`   ✅ ${productsUrls.length} ürün kategorisi URL'si eklendi`);

    // 3. Product Models Sitemap
    console.log('📄 sitemap-models.xml oluşturuluyor...');
    const modelsUrls = generateProductModelsSitemap();
    const modelsSitemap = createSitemap(modelsUrls);
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-models.xml'), modelsSitemap);
    console.log(`   ✅ ${modelsUrls.length} ürün modeli URL'si eklendi`);

    // 4. Waste Sitemap
    console.log('📄 sitemap-waste.xml oluşturuluyor...');
    const wasteUrls = generateWasteSitemap();
    const wasteSitemap = createSitemap(wasteUrls);
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-waste.xml'), wasteSitemap);
    console.log(`   ✅ ${wasteUrls.length} atık türü URL'si eklendi`);

    // 5. Blog Sitemap
    console.log('📄 sitemap-blog.xml oluşturuluyor...');
    const blogUrls = generateBlogSitemap();
    const blogSitemap = createSitemap(blogUrls);
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-blog.xml'), blogSitemap);
    console.log(`   ✅ ${blogUrls.length} blog URL'si eklendi`);

    // 6. Catalogs Sitemap
    console.log('📄 sitemap-catalogs.xml oluşturuluyor...');
    const catalogsUrls = generateCatalogsSitemap();
    const catalogsSitemap = createSitemap(catalogsUrls);
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-catalogs.xml'), catalogsSitemap);
    console.log(`   ✅ ${catalogsUrls.length} katalog URL'si eklendi`);

    // 7. Sitemap Index
    console.log('\n📍 sitemap-index.xml oluşturuluyor...');
    const sitemapIndex = createSitemapIndex([
        { name: 'sitemap-pages.xml', lastmod: TODAY },
        { name: 'sitemap-products.xml', lastmod: TODAY },
        { name: 'sitemap-models.xml', lastmod: TODAY },
        { name: 'sitemap-waste.xml', lastmod: TODAY },
        { name: 'sitemap-blog.xml', lastmod: TODAY },
        { name: 'sitemap-catalogs.xml', lastmod: TODAY },
    ]);
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-index.xml'), sitemapIndex);
    console.log('   ✅ Sitemap Index oluşturuldu');

    // 8. Eski sitemap.xml'i de güncelle (backward compatibility)
    console.log('\n📄 sitemap.xml güncelleniyor (backward compatibility)...');
    const allUrls = [...pagesUrls, ...productsUrls, ...modelsUrls, ...wasteUrls, ...blogUrls, ...catalogsUrls];
    const mainSitemap = createSitemap(allUrls);
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), mainSitemap);
    console.log(`   ✅ ${allUrls.length} toplam URL ile sitemap.xml güncellendi`);


    // 8. Robots.txt güncelle
    console.log('\n📄 robots.txt güncelleniyor...');
    const robotsTxt = generateRobotsTxt();
    fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt);
    console.log('   ✅ robots.txt güncellendi');

    // Özet
    console.log('\n' + '='.repeat(50));
    console.log('📊 SITEMAP ÖZET');
    console.log('='.repeat(50));
    console.log(`📄 sitemap-pages.xml    : ${pagesUrls.length} URL`);
    console.log(`📄 sitemap-products.xml : ${productsUrls.length} URL`);
    console.log(`📄 sitemap-models.xml   : ${modelsUrls.length} URL`);
    console.log(`📄 sitemap-waste.xml    : ${wasteUrls.length} URL`);
    console.log(`📄 sitemap-blog.xml     : ${blogUrls.length} URL`);
    console.log(`📄 sitemap-catalogs.xml : ${catalogsUrls.length} URL`);
    console.log('-'.repeat(50));
    console.log(`📍 TOPLAM               : ${allUrls.length} URL`);
    console.log('='.repeat(50));
    console.log('\n✅ Tüm sitemaplar başarıyla oluşturuldu!\n');
}

// Script'i çalıştır
main();
