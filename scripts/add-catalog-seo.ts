/**
 * Add SEO Meta Tags to Catalog HTML Files
 * This script adds meta description, robots, canonical, and Open Graph tags
 * to all catalog HTML files without breaking the existing layout
 */

import * as fs from 'fs';
import * as path from 'path';

const catalogsDir = path.join(__dirname, '../public/catalogs/tsh');

// SEO metadata for each model and language
const catalogSEO: { [model: string]: { [lang: string]: { title: string; description: string; keywords: string } } } = {
    'tsh-60': {
        tr: {
            title: 'TSH-60 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu',
            description: 'TSH-60 tek şaftlı parçalama makinesi teknik özellikleri, kapasite bilgileri ve detaylı ürün kataloğu. 500 kg/saat kapasite, 15 kW motor gücü. MT Makina kalitesiyle.',
            keywords: 'TSH-60, tek şaftlı parçalama makinesi, shredder, MT Makina, endüstriyel parçalama, plastik kırıcı, ürün kataloğu'
        },
        en: {
            title: 'TSH-60 Single Shaft Shredder | MT Makina Product Catalog',
            description: 'TSH-60 single shaft shredder technical specifications, capacity information and detailed product catalog. 500 kg/h capacity, 15 kW motor power. MT Makina quality.',
            keywords: 'TSH-60, single shaft shredder, industrial shredder, MT Makina, plastic shredder, product catalog'
        },
        ru: {
            title: 'TSH-60 Одновальный Шредер | Каталог Продукции MT Makina',
            description: 'Технические характеристики одновального шредера TSH-60, информация о производительности и подробный каталог продукции. Производительность 500 кг/ч, мощность двигателя 15 кВт.',
            keywords: 'TSH-60, одновальный шредер, промышленный шредер, MT Makina, каталог продукции'
        },
        ar: {
            title: 'TSH-60 آلة تمزيق أحادية العمود | كتالوج منتجات MT Makina',
            description: 'المواصفات الفنية لآلة التمزيق أحادية العمود TSH-60، معلومات السعة وكتالوج المنتج المفصل. سعة 500 كجم/ساعة، قوة محرك 15 كيلووات.',
            keywords: 'TSH-60, آلة تمزيق, شريدر صناعي, MT Makina, كتالوج المنتجات'
        }
    },
    'tsh-80': {
        tr: {
            title: 'TSH-80 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu',
            description: 'TSH-80 tek şaftlı parçalama makinesi teknik özellikleri, kapasite bilgileri ve detaylı ürün kataloğu. 1000 kg/saat kapasite, 22 kW motor gücü. MT Makina kalitesiyle.',
            keywords: 'TSH-80, tek şaftlı parçalama makinesi, shredder, MT Makina, endüstriyel parçalama, plastik kırıcı, ürün kataloğu'
        },
        en: {
            title: 'TSH-80 Single Shaft Shredder | MT Makina Product Catalog',
            description: 'TSH-80 single shaft shredder technical specifications, capacity information and detailed product catalog. 1000 kg/h capacity, 22 kW motor power. MT Makina quality.',
            keywords: 'TSH-80, single shaft shredder, industrial shredder, MT Makina, plastic shredder, product catalog'
        },
        ru: {
            title: 'TSH-80 Одновальный Шредер | Каталог Продукции MT Makina',
            description: 'Технические характеристики одновального шредера TSH-80, информация о производительности и подробный каталог продукции. Производительность 1000 кг/ч, мощность двигателя 22 кВт.',
            keywords: 'TSH-80, одновальный шредер, промышленный шредер, MT Makina, каталог продукции'
        },
        ar: {
            title: 'TSH-80 آلة تمزيق أحادية العمود | كتالوج منتجات MT Makina',
            description: 'المواصفات الفنية لآلة التمزيق أحادية العمود TSH-80، معلومات السعة وكتالوج المنتج المفصل. سعة 1000 كجم/ساعة، قوة محرك 22 كيلووات.',
            keywords: 'TSH-80, آلة تمزيق, شريدر صناعي, MT Makina, كتالوج المنتجات'
        }
    },
    'tsh-100': {
        tr: {
            title: 'TSH-100 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu',
            description: 'TSH-100 tek şaftlı parçalama makinesi teknik özellikleri, kapasite bilgileri ve detaylı ürün kataloğu. 2000 kg/saat kapasite, 37 kW motor gücü. MT Makina kalitesiyle.',
            keywords: 'TSH-100, tek şaftlı parçalama makinesi, shredder, MT Makina, endüstriyel parçalama, plastik kırıcı, ürün kataloğu'
        },
        en: {
            title: 'TSH-100 Single Shaft Shredder | MT Makina Product Catalog',
            description: 'TSH-100 single shaft shredder technical specifications, capacity information and detailed product catalog. 2000 kg/h capacity, 37 kW motor power. MT Makina quality.',
            keywords: 'TSH-100, single shaft shredder, industrial shredder, MT Makina, plastic shredder, product catalog'
        },
        ru: {
            title: 'TSH-100 Одновальный Шредер | Каталог Продукции MT Makina',
            description: 'Технические характеристики одновального шредера TSH-100, информация о производительности и подробный каталог продукции. Производительность 2000 кг/ч, мощность двигателя 37 кВт.',
            keywords: 'TSH-100, одновальный шредер, промышленный шредер, MT Makina, каталог продукции'
        },
        ar: {
            title: 'TSH-100 آلة تمزيق أحادية العمود | كتالوج منتجات MT Makina',
            description: 'المواصفات الفنية لآلة التمزيق أحادية العمود TSH-100، معلومات السعة وكتالوج المنتج المفصل. سعة 2000 كجم/ساعة، قوة محرك 37 كيلووات.',
            keywords: 'TSH-100, آلة تمزيق, شريدر صناعي, MT Makina, كتالوج المنتجات'
        }
    },
    'tsh-130': {
        tr: {
            title: 'TSH-130 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu',
            description: 'TSH-130 tek şaftlı parçalama makinesi teknik özellikleri, kapasite bilgileri ve detaylı ürün kataloğu. 4000 kg/saat kapasite, 55 kW motor gücü. MT Makina kalitesiyle.',
            keywords: 'TSH-130, tek şaftlı parçalama makinesi, shredder, MT Makina, endüstriyel parçalama, plastik kırıcı, ürün kataloğu'
        },
        en: {
            title: 'TSH-130 Single Shaft Shredder | MT Makina Product Catalog',
            description: 'TSH-130 single shaft shredder technical specifications, capacity information and detailed product catalog. 4000 kg/h capacity, 55 kW motor power. MT Makina quality.',
            keywords: 'TSH-130, single shaft shredder, industrial shredder, MT Makina, plastic shredder, product catalog'
        },
        ru: {
            title: 'TSH-130 Одновальный Шредер | Каталог Продукции MT Makina',
            description: 'Технические характеристики одновального шредера TSH-130, информация о производительности и подробный каталог продукции. Производительность 4000 кг/ч, мощность двигателя 55 кВт.',
            keywords: 'TSH-130, одновальный шредер, промышленный шредер, MT Makina, каталог продукции'
        },
        ar: {
            title: 'TSH-130 آلة تمزيق أحادية العمود | كتالوج منتجات MT Makina',
            description: 'المواصفات الفنية لآلة التمزيق أحادية العمود TSH-130، معلومات السعة وكتالوج المنتج المفصل. سعة 4000 كجم/ساعة، قوة محرك 55 كيلووات.',
            keywords: 'TSH-130, آلة تمزيق, شريدر صناعي, MT Makina, كتالوج المنتجات'
        }
    },
    'tsh-160': {
        tr: {
            title: 'TSH-160 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu',
            description: 'TSH-160 tek şaftlı parçalama makinesi teknik özellikleri, kapasite bilgileri ve detaylı ürün kataloğu. 6000 kg/saat kapasite, 75 kW motor gücü. MT Makina kalitesiyle.',
            keywords: 'TSH-160, tek şaftlı parçalama makinesi, shredder, MT Makina, endüstriyel parçalama, plastik kırıcı, ürün kataloğu'
        },
        en: {
            title: 'TSH-160 Single Shaft Shredder | MT Makina Product Catalog',
            description: 'TSH-160 single shaft shredder technical specifications, capacity information and detailed product catalog. 6000 kg/h capacity, 75 kW motor power. MT Makina quality.',
            keywords: 'TSH-160, single shaft shredder, industrial shredder, MT Makina, plastic shredder, product catalog'
        },
        ru: {
            title: 'TSH-160 Одновальный Шредер | Каталог Продукции MT Makina',
            description: 'Технические характеристики одновального шредера TSH-160, информация о производительности и подробный каталог продукции. Производительность 6000 кг/ч, мощность двигателя 75 кВт.',
            keywords: 'TSH-160, одновальный шредер, промышленный шредер, MT Makina, каталог продукции'
        },
        ar: {
            title: 'TSH-160 آلة تمزيق أحادية العمود | كتالوج منتجات MT Makina',
            description: 'المواصفات الفنية لآلة التمزيق أحادية العمود TSH-160، معلومات السعة وكتالوج المنتج المفصل. سعة 6000 كجم/ساعة، قوة محرك 75 كيلووات.',
            keywords: 'TSH-160, آلة تمزيق, شريدر صناعي, MT Makina, كتالوج المنتجات'
        }
    }
};

// Language code to full locale mapping
const langToLocale: { [key: string]: string } = {
    tr: 'tr_TR',
    en: 'en_US',
    ru: 'ru_RU',
    ar: 'ar_SA'
};

// Generate SEO meta tags to insert after <title> tag
function generateSEOMeta(model: string, lang: string, fileName: string): string {
    const seo = catalogSEO[model]?.[lang];
    if (!seo) {
        console.warn(`No SEO data for ${model} ${lang}`);
        return '';
    }

    const baseUrl = 'https://www.parcalamamakinesi.com';
    const catalogPath = `/catalogs/tsh/${model}/${fileName}`;
    const canonicalUrl = `${baseUrl}${catalogPath}`;
    const ogImage = 'https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png';
    const locale = langToLocale[lang] || 'tr_TR';
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    return `
    <!-- SEO Meta Tags -->
    <meta name="description" content="${seo.description}">
    <meta name="keywords" content="${seo.keywords}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="googlebot" content="index, follow">
    <meta name="author" content="MT Makina">
    <link rel="canonical" href="${canonicalUrl}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="product">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${seo.title}">
    <meta property="og:description" content="${seo.description}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:locale" content="${locale}">
    <meta property="og:site_name" content="MT Makina">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${canonicalUrl}">
    <meta name="twitter:title" content="${seo.title}">
    <meta name="twitter:description" content="${seo.description}">
    <meta name="twitter:image" content="${ogImage}">`;
}

// Process all catalog files
function processCatalogs() {
    const models = ['tsh-60', 'tsh-80', 'tsh-100', 'tsh-130', 'tsh-160'];
    const langSuffixes = ['', '-en', '-ru', '-ar']; // '' = Turkish

    let processedCount = 0;
    let errorCount = 0;

    for (const model of models) {
        for (const suffix of langSuffixes) {
            const lang = suffix === '' ? 'tr' : suffix.substring(1);
            const fileName = `catalog${suffix}.html`;
            const filePath = path.join(catalogsDir, model, fileName);

            if (!fs.existsSync(filePath)) {
                console.log(`⚠️  File not found: ${filePath}`);
                continue;
            }

            try {
                let content = fs.readFileSync(filePath, 'utf-8');

                // Check if SEO meta tags already exist
                if (content.includes('<!-- SEO Meta Tags -->')) {
                    console.log(`⏭️  Already has SEO tags: ${model}/${fileName}`);
                    continue;
                }

                // Find the </title> tag and insert SEO meta after it
                const titleEndMatch = content.match(/<\/title>/i);
                if (!titleEndMatch) {
                    console.log(`⚠️  No </title> found in: ${model}/${fileName}`);
                    continue;
                }

                const seoMeta = generateSEOMeta(model, lang, fileName);
                if (!seoMeta) {
                    continue;
                }

                // Insert SEO meta tags after </title>
                content = content.replace(/<\/title>/i, `</title>${seoMeta}`);

                // Update html lang attribute if needed
                if (lang !== 'tr') {
                    content = content.replace(/<html lang="tr">/i, `<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">`);
                }

                // Write the updated content
                fs.writeFileSync(filePath, content, 'utf-8');
                console.log(`✅ Added SEO tags: ${model}/${fileName}`);
                processedCount++;

            } catch (error) {
                console.error(`❌ Error processing ${model}/${fileName}:`, error);
                errorCount++;
            }
        }
    }

    console.log('\n========================================');
    console.log(`📊 SUMMARY`);
    console.log(`========================================`);
    console.log(`✅ Processed: ${processedCount} files`);
    console.log(`❌ Errors: ${errorCount} files`);
    console.log(`========================================`);
}

// Run the script
processCatalogs();
