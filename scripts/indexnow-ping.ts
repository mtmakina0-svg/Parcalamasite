/**
 * IndexNow API Integration
 * Instantly notifies Bing, Yandex, and other search engines about URL changes
 * This helps speed up indexing significantly
 * 
 * Run: npx tsx scripts/indexnow-ping.ts
 */

const INDEXNOW_KEY = 'mtmakina2024seo'; // Your IndexNow API key
const SITE_HOST = 'www.parcalamamakinesi.com';

// URLs to submit for indexing
const urlsToIndex = [
    // Home pages
    'https://www.parcalamamakinesi.com/',
    'https://www.parcalamamakinesi.com/en',
    'https://www.parcalamamakinesi.com/ru',
    'https://www.parcalamamakinesi.com/ar',

    // Turkish product categories
    'https://www.parcalamamakinesi.com/tr/tek-saftli-parcalama-makinesi',
    'https://www.parcalamamakinesi.com/tr/cift-saftli-parcalama-makinesi',
    'https://www.parcalamamakinesi.com/tr/dort-saftli-parcalama-makinesi',
    'https://www.parcalamamakinesi.com/tr/metal-parcalama-makinesi',
    'https://www.parcalamamakinesi.com/tr/mobil-kirici',
    'https://www.parcalamamakinesi.com/tr/palet-parcalama-makinesi',
    'https://www.parcalamamakinesi.com/tr/harddisk-imha-makinesi',
    'https://www.parcalamamakinesi.com/tr/agac-koku-parcalama-makinesi',
    'https://www.parcalamamakinesi.com/tr/agac-parcalama-ogutme-makinesi',
    'https://www.parcalamamakinesi.com/tr/cam-sise-kirma-makinesi',

    // Turkish corporate pages
    'https://www.parcalamamakinesi.com/tr/kurumsal',
    'https://www.parcalamamakinesi.com/tr/urunler',
    'https://www.parcalamamakinesi.com/tr/teknoloji',
    'https://www.parcalamamakinesi.com/tr/referanslar',
    'https://www.parcalamamakinesi.com/tr/sertifikalar',
    'https://www.parcalamamakinesi.com/tr/iletisim',
    'https://www.parcalamamakinesi.com/tr/e-katalog',

    // English product categories
    'https://www.parcalamamakinesi.com/en/single-shaft-shredder',
    'https://www.parcalamamakinesi.com/en/dual-shaft-shredder',
    'https://www.parcalamamakinesi.com/en/quad-shaft-shredder',
    'https://www.parcalamamakinesi.com/en/metal-shredder',
    'https://www.parcalamamakinesi.com/en/mobile-shredder',
    'https://www.parcalamamakinesi.com/en/pallet-shredder',
    'https://www.parcalamamakinesi.com/en/harddisk-destroyer',
    'https://www.parcalamamakinesi.com/en/tree-root-shredder',
    'https://www.parcalamamakinesi.com/en/wood-grinder',
    'https://www.parcalamamakinesi.com/en/glass-crusher',

    // English corporate pages
    'https://www.parcalamamakinesi.com/en/about',
    'https://www.parcalamamakinesi.com/en/products',
    'https://www.parcalamamakinesi.com/en/technology',
    'https://www.parcalamamakinesi.com/en/references',
    'https://www.parcalamamakinesi.com/en/certificates',
    'https://www.parcalamamakinesi.com/en/contact',
    'https://www.parcalamamakinesi.com/en/e-catalog',
];

// IndexNow API endpoints
const indexNowEndpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow',
];

async function pingIndexNow() {
    console.log('🚀 Starting IndexNow ping...\n');

    const payload = {
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urlsToIndex,
    };

    for (const endpoint of indexNowEndpoints) {
        try {
            console.log(`📡 Pinging ${endpoint}...`);

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok || response.status === 202) {
                console.log(`✅ ${endpoint} - Success (${response.status})`);
            } else {
                console.log(`⚠️ ${endpoint} - Status: ${response.status}`);
            }
        } catch (error) {
            console.log(`❌ ${endpoint} - Error: ${error}`);
        }
    }

    console.log(`\n📊 Total URLs submitted: ${urlsToIndex.length}`);
    console.log('✨ IndexNow ping completed!');
}

// Also ping sitemap to Google
async function pingSitemapToGoogle() {
    console.log('\n🔍 Pinging sitemap to Google...');

    const sitemapUrl = `https://${SITE_HOST}/sitemap.xml`;
    const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

    try {
        const response = await fetch(googlePingUrl);
        if (response.ok) {
            console.log('✅ Google sitemap ping successful!');
        } else {
            console.log(`⚠️ Google sitemap ping status: ${response.status}`);
        }
    } catch (error) {
        console.log(`❌ Google sitemap ping error: ${error}`);
    }
}

// Run the pings
async function main() {
    await pingIndexNow();
    await pingSitemapToGoogle();
}

main();
