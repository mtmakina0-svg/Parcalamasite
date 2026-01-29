/**
 * CS Katalog Görsel Güncelleme Script'i V2
 * Tüm görsel referanslarını her modelin kendi görselleriyle değiştirir
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_DIR = 'd:/Furkan/WEB SİTESİ/Parcalamasite/public/catalogs/cs';
const models = ['cs-20', 'cs-40', 'cs-60', 'cs-80', 'cs-150', 'cs-180', 'cs-200'];
const languages = ['', '-en', '-ru', '-ar'];

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
        console.log(`📁 ${model}: ${images.length} görsel - ${images.join(', ')}`);
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
            return;
        }

        let content = fs.readFileSync(htmlFile, 'utf8');

        // Tüm images/ içindeki görsel referanslarını bul ve değiştir
        // Format: images/XXXXX.jpeg veya .jpg veya .png
        const imageRegex = /images\/[^"']+\.(jpeg|jpg|png)/g;
        let match;
        let imageIndex = 0;
        const replacements: { old: string, new: string }[] = [];

        // Tüm görsel referanslarını bul
        while ((match = imageRegex.exec(content)) !== null) {
            const oldPath = match[0];
            const newImage = images[imageIndex % images.length];
            replacements.push({ old: oldPath, new: `images/${newImage}` });
            imageIndex++;
        }

        // Değiştirmeleri yap
        replacements.forEach(r => {
            content = content.replace(r.old, r.new);
        });

        // Model isimlerini güncelle
        content = content.replace(/CS-60/g, modelUpper);
        content = content.replace(/cs-60/g, model);

        fs.writeFileSync(htmlFile, content, 'utf8');
    });

    console.log(`✅ ${model}: Katalog görselleri güncellendi (${images.length} görsel döngüsel kullanıldı)`);
});

console.log('\n🎉 Tüm modellerin görselleri güncellendi!');
