/**
 * CS Katalog Görsel Güncelleme Script'i
 * Her modelin images klasöründeki görselleri katalog HTML'lerine ekler
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_DIR = 'd:/Furkan/WEB SİTESİ/Parcalamasite/public/catalogs/cs';
const models = ['cs-20', 'cs-40', 'cs-60', 'cs-80', 'cs-150', 'cs-180', 'cs-200'];
const languages = ['', '-en', '-ru', '-ar'];

// Görsel placeholder'ları ve karşılıkları
const imagePlaceholders = [
    { placeholder: 'CS-60-1.jpeg', index: 0 },  // Kapak görseli
    { placeholder: 'CS-60-2.jpeg', index: 1 },  // Ürün tanıtımı
    { placeholder: 'CS-60-3.jpeg', index: 2 },  // Uygulama alanları
    { placeholder: 'CS-60-4.jpeg', index: 3 },  // Teknik detaylar
    { placeholder: 'CS-60-5.jpeg', index: 4 },  // Spec sheet
    { placeholder: 'CS-60-6.jpeg', index: 5 },  // Boyutlar
    { placeholder: 'CS-60-7.jpeg', index: 6 },  // Ekstra
];

models.forEach(model => {
    const modelUpper = model.toUpperCase();
    const imagesDir = path.join(BASE_DIR, model, 'images');

    // Klasördeki görselleri listele
    let images: string[] = [];
    try {
        const files = fs.readdirSync(imagesDir);
        images = files.filter(f =>
            (f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png')) &&
            !f.includes('Thumbs')
        ).sort();
        console.log(`📁 ${model}: ${images.length} görsel bulundu - ${images.join(', ')}`);
    } catch (e) {
        console.log(`⚠️ ${model}: images klasörü bulunamadı`);
        return;
    }

    if (images.length === 0) {
        console.log(`⚠️ ${model}: Görsel yok, atlanıyor`);
        return;
    }

    // Her dil için HTML güncelle
    languages.forEach(langSuffix => {
        const htmlFile = path.join(BASE_DIR, model, `catalog${langSuffix}.html`);

        if (!fs.existsSync(htmlFile)) {
            console.log(`⚠️ ${htmlFile} bulunamadı`);
            return;
        }

        let content = fs.readFileSync(htmlFile, 'utf8');

        // CS-60 görsel isimlerini bu modelin görselleriyle değiştir
        for (let i = 0; i < 7; i++) {
            const oldName = `CS-60-${i + 1}.jpeg`;
            // Görsel yoksa döngüsel olarak tekrarlıyor
            const newName = images[i % images.length];
            content = content.replace(new RegExp(oldName, 'g'), newName);
        }

        // Alt text'leri de güncelle
        content = content.replace(/alt="CS-60/g, `alt="${modelUpper}`);

        fs.writeFileSync(htmlFile, content, 'utf8');
    });

    console.log(`✅ ${model}: Tüm katalog görselleri güncellendi`);
});

console.log('\n🎉 Tüm modellerin görselleri güncellendi!');
