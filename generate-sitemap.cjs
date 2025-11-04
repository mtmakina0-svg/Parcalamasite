// Bu script, 'build' işlemi bittikten sonra çalışır
// ve 'build' klasörünün içine 'sitemap.xml' dosyasını oluşturur.

const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Sitenizin ana adresi
const BASE_URL = 'https://parcalamamakinesi.com';

// Sitenizdeki tüm statik (elle eklenen) sayfalar
const staticPages = [
  '/',
  '/kurumsal',
  '/urunler',
  '/teknoloji',
  '/referanslar',
  '/sertifikalar',
  '/iletisim',
  '/e-katalog',
  '/atik-turleri',
];

// Header.tsx dosyasından bildiğimiz dinamik ürün kategorileri
const productCategories = [
  '/tek-shaftli-parcalama-makinesi',
  '/cift-shaftli-parcalama-makinesi',
  '/dort-shaftli-parcalama-makinesi',
  '/metal-parcalama-makinesi',
  '/granulator-makinesi',
  '/balyalama-makinesi',
  '/konveyor-sistemi',
  '/ayristirma-makinesi',
];

// ProductDetailPage.tsx dosyasından bildiğimiz ürün modelleri
// (Daha fazla model eklerseniz, buraya da eklemek iyi olur)
const productModels = {
  '/tek-shaftli-parcalama-makinesi': [
    'TSH-60', 'TSH-80', 'TSH-100', 'TSH-130', 'TSH-160', 'TSH-200'
  ],
  // Diğer kategoriler için modeller...
};

// Header.tsx dosyasından bildiğimiz atık kategorileri
const wasteCategories = [
  'evsel-atiklar',
  'lastik-atiklari',
  'cam-atiklar',
  'plastik-atiklar',
  'tibbi-atiklar',
  'elektronik-atiklar',
  'metal-atiklar',
  'kagit-karton-atiklar',
  'organik-atiklar',
  'hayvan-atiklari',
];

// Site haritasını oluşturma fonksiyonu
async function generateSitemap() {
  console.log('Site haritası (sitemap.xml) oluşturuluyor...');

  const sitemapStream = new SitemapStream({ hostname: BASE_URL });
  const writePath = path.resolve(__dirname, 'build', 'sitemap.xml');
  const writeStream = createWriteStream(writePath);

  sitemapStream.pipe(writeStream);

  // 1. Statik sayfaları ekle
  staticPages.forEach(page => {
    sitemapStream.write({ url: page, changefreq: 'monthly', priority: 0.7 });
  });

  // 2. Ürün kategorilerini ekle
  productCategories.forEach(category => {
    sitemapStream.write({ url: category, changefreq: 'weekly', priority: 0.8 });
  });

  // 3. Ürün modellerini ekle
  for (const [categoryPath, models] of Object.entries(productModels)) {
    models.forEach(model => {
      sitemapStream.write({
        url: `${categoryPath}/${model.toLowerCase()}`,
        changefreq: 'weekly',
        priority: 0.9,
      });
    });
  }

  // 4. Atık kategorilerini ekle
  wasteCategories.forEach(waste => {
    sitemapStream.write({
      url: `/atik-turleri/${waste}`,
      changefreq: 'weekly',
      priority: 0.8,
    });
  });

  sitemapStream.end();
  await streamToPromise(sitemapStream);

  console.log(`Site haritası başarıyla '${writePath}' adresine oluşturuldu.`);
}

generateSitemap().catch(console.error);
