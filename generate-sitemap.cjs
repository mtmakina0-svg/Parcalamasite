// Bu script, 'public' klasörünün içine 'sitemap.xml' dosyasını oluşturur.

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
  '/sertifikalar', // Bu sayfa hala varsa kalsın.
  '/iletisim',
  '/e-katalog',
  '/atik-turleri',
];

// -----------------------------------------------------------------
// YENİ GÜNCEL LİSTE (Ekran görüntülerinizden alındı)
// -----------------------------------------------------------------
const productCategories = [
  '/tek-shaftli-parcalama-makinesi',
  '/cift-shaftli-parcalama-makinesi',
  '/dort-shaftli-parcalama-makinesi',
  '/metal-parcalama-makinesi', // (Redmonster)
  '/mobil-kirici',
  '/palet-parcalama-makinesi',
  '/harddisk-imha-makinesi',
  '/agac-koku-parcalama-makinesi',
  '/agac-parcalama-ogutme-makinesi',
  '/cam-sise-kirma-makinesi',
];

// -----------------------------------------------------------------
// YENİ GÜNCEL MODELLER (Ekran görüntülerinizden alındı)
// -----------------------------------------------------------------
// NOT: URL'lerin /tsh-60, /cs-20 gibi küçük harf olacağını varsaydım.
const productModels = {
  // Resim: image_446560.png
  '/tek-shaftli-parcalama-makinesi': [
    'TSH-60', 'TSH-80', 'TSH-100', 'TSH-130', 'TSH-160', 'TSH-200'
  ],
  // Resim: image_44657b.png
  '/cift-shaftli-parcalama-makinesi': [
    'CS-20', 'CS-40', 'CS-60', 'CS-80', 'CS-100', 'CS-120', 'CS-150', 'CS-180', 'CS-200'
  ],
  // Resim: image_446580.png
  '/dort-shaftli-parcalama-makinesi': [
    'DS-80', 'DS-100', 'DS-150', 'DS-200'
  ],
  // Resim: image_44659c.png
  '/metal-parcalama-makinesi': [
    'RDM-100', 'RDM-150', 'RDM-180', 'RDM-200'
  ],
  // Resim: image_4465a1.png
  '/mobil-kirici': [
    'TSM-150', 'TSM-300', 'CSM-150', 'CSM-200'
  ],
  // Resim: image_4465bd.png
  '/palet-parcalama-makinesi': [
    'TSV-140', 'TSV-200', 'TSVX-200'
  ],
  // Resim: image_4465d9.png
  '/harddisk-imha-makinesi': [
    'DATABER-S', 'DATABER-D', 'DATABER-T'
  ],
  // BU KATEGORİLER İÇİN RESİM ATmadınız, BOŞ BIRAKIYORUM
  // SİZİN EKLEMENİZ GEREKİR.
  '/agac-koku-parcalama-makinesi': [
    // LÜTFEN MODELLERİ BURAYA EKLEYİN
  ],
  '/agac-parcalama-ogutme-makinesi': [
    // LÜTFEN MODELLERİ BURAYA EKLEYİN
  ],
  '/cam-sise-kirma-makinesi': [
    // LÜTFEN MODELLERİ BURAYA EKLEYİN
  ],
};

// -----------------------------------------------------------------
// Atık Kategorileri (Ekran görüntünüzle uyumlu, dokunmayın)
// -----------------------------------------------------------------
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

// -----------------------------------------------------------------
// SCRIPT'İN KALANI (Burası Kodu Çalıştırır - DOKUNMAYIN)
// -----------------------------------------------------------------
async function generateSitemap() {
  console.log('Site haritası (sitemap.xml) oluşturuluyor...');

  const sitemapStream = new SitemapStream({ hostname: BASE_URL });
  const writePath = path.resolve(__dirname, 'public', 'sitemap.xml');
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