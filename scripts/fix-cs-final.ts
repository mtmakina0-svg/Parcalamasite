/**
 * CS Katalog Final Fix - Tüm 600 değerlerini modele göre değiştirir
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_DIR = 'd:/Furkan/WEB SİTESİ/Parcalamasite/public/catalogs/cs';

// Her model için değerler
const modelValues: Record<string, { w: string; motor: string; motorMax: string }> = {
    'cs-20': { w: '200', motor: '2.2 – 11', motorMax: '2.2-11' },
    'cs-40': { w: '400', motor: '5.5 – 22', motorMax: '5.5-22' },
    'cs-60': { w: '600', motor: '11 – 45', motorMax: '11-45' },
    'cs-80': { w: '800', motor: '22 – 75', motorMax: '22-75' },
    'cs-150': { w: '1500', motor: '45 – 132', motorMax: '45-132' },
    'cs-180': { w: '1800', motor: '75 – 200', motorMax: '75-200' },
    'cs-200': { w: '2000', motor: '110 – 315', motorMax: '110-315' }
};

const languages = ['', '-en', '-ru', '-ar'];

Object.entries(modelValues).forEach(([model, vals]) => {
    if (model === 'cs-60') {
        console.log(`⏭️ ${model}: Zaten doğru (şablon model)`);
        return;
    }

    languages.forEach(lang => {
        const htmlFile = path.join(BASE_DIR, model, `catalog${lang}.html`);
        if (!fs.existsSync(htmlFile)) return;

        let content = fs.readFileSync(htmlFile, 'utf8');
        const origContent = content;

        // TÜM 600 formatlarını değiştir (CSS font-weight: 600 hariç)

        // Format 1: 600x600 mm (big-spec-grid)
        content = content.replace(/600x600 <span class="unit">mm/g, `${vals.w}x${vals.w} <span class="unit">mm`);

        // Format 2: 600 x 600 mm (spec-row, boşluklu)
        content = content.replace(/>600 x 600 mm</g, `>${vals.w} x ${vals.w} mm<`);

        // Format 3: 600 mm (rotor boyu - big-spec-grid)
        content = content.replace(/600 <span class="unit">mm<\/span><\/span>\s*\n\s*<span class="label">Rotor Boyu/g,
            `${vals.w} <span class="unit">mm</span></span>\n                    <span class="label">Rotor Boyu`);

        // Format 4: >600 mm< (rotor uzunluğu - spec-row)
        content = content.replace(/>600 mm<\/span>\s*\n\s*<\/div>\s*\n\s*<div class="spec-row">\s*\n\s*<span class="label">Motor Tipi/g,
            `>${vals.w} mm</span>\n                </div>\n                <div class="spec-row">\n                    <span class="label">Motor Tipi`);

        // Format 5: value">600 mm</span> (generic rotor)
        content = content.replace(/class="value">600 mm<\/span>/g, `class="value">${vals.w} mm</span>`);

        // Format 6: Motor gücü - 11-45 kW (2x)
        content = content.replace(/11-45 <span class="unit">kW \(2x\)/g, `${vals.motorMax} <span class="unit">kW (2x)`);

        // Format 7: Motor gücü - 11 – 45 kW (spec-row)
        content = content.replace(/>11 – 45 kW</g, `>${vals.motor} kW<`);

        // Boyutlar sayfasındaki değerler için doğrudan metin değiştirme
        // Boyut tablosunda 600 mm değerleri
        content = content.replace(/<td>600<\/td>/g, `<td>${vals.w}</td>`);

        if (content !== origContent) {
            fs.writeFileSync(htmlFile, content, 'utf8');
            console.log(`✅ ${model}${lang}: Değerler güncellendi`);
        } else {
            console.log(`⚠️ ${model}${lang}: Değişiklik yok`);
        }
    });
});

console.log('\n🔍 Kontrol ediliyor...');

// CS-20 kontrolü
const cs20File = path.join(BASE_DIR, 'cs-20', 'catalog.html');
const cs20Content = fs.readFileSync(cs20File, 'utf8');
const remaining600 = (cs20Content.match(/600/g) || []).length;
console.log(`CS-20'de kalan "600" değerleri: ${remaining600} (1 tanesi font-weight için olmalı)`);

console.log('\n🎉 Tamamlandı!');
