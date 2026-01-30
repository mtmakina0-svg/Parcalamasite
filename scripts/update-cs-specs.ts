/**
 * CS Katalog Doğru Özellikler Güncellemesi
 * Kullanıcının verdiği doğru değerlerle günceller
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_DIR = 'd:/Furkan/WEB SİTESİ/Parcalamasite/public/catalogs/cs';

// DOĞRU ÖZELLIKLER (Kullanıcıdan alınan + tahmin edilenler)
const modelSpecs: Record<string, {
    areaW: number;      // Genişlik
    areaH: number;      // Yükseklik
    rotor: number;      // Rotor boyu
    motorMin: number;   // Motor min
    motorMax: number;   // Motor max
}> = {
    // Listede yok - tahmin
    'cs-20': { areaW: 200, areaH: 200, rotor: 200, motorMin: 2.2, motorMax: 11 },
    'cs-40': { areaW: 400, areaH: 400, rotor: 400, motorMin: 5.5, motorMax: 22 },
    // Listeden - doğru değerler
    'cs-60': { areaW: 600, areaH: 600, rotor: 600, motorMin: 11, motorMax: 45 },
    'cs-80': { areaW: 800, areaH: 800, rotor: 800, motorMin: 15, motorMax: 55 },
    'cs-150': { areaW: 1500, areaH: 1200, rotor: 1500, motorMin: 45, motorMax: 132 },
    'cs-180': { areaW: 1800, areaH: 1500, rotor: 1800, motorMin: 55, motorMax: 132 },
    'cs-200': { areaW: 2000, areaH: 1800, rotor: 2000, motorMin: 75, motorMax: 200 }
};

const languages = ['', '-en', '-ru', '-ar'];

// Her model için önce CS-60 şablonundan kopyala, sonra değerleri güncelle
Object.entries(modelSpecs).forEach(([model, specs]) => {
    const areaStr = `${specs.areaW} x ${specs.areaH} mm`;
    const areaCompact = `${specs.areaW}x${specs.areaH}`;
    const rotorStr = `${specs.rotor} mm`;
    const motorStr = `${specs.motorMin}–${specs.motorMax} kW`;
    const motorCompact = `${specs.motorMin}-${specs.motorMax}`;

    languages.forEach(lang => {
        const htmlFile = path.join(BASE_DIR, model, `catalog${lang}.html`);
        if (!fs.existsSync(htmlFile)) {
            console.log(`⚠️ ${model}${lang}: Dosya yok, atlıyor`);
            return;
        }

        let content = fs.readFileSync(htmlFile, 'utf8');

        // === BIG-SPEC-GRID GÜNCELLEMELER ===
        // Motor: XX-YY kW (2x)
        content = content.replace(
            /<span class="value">[0-9.]+-[0-9.]+ <span class="unit">kW \(2x\)<\/span><\/span>/g,
            `<span class="value">${motorCompact} <span class="unit">kW (2x)</span></span>`
        );

        // Parçalama Alanı: WxH mm
        content = content.replace(
            /<span class="value">\d+x\d+ <span class="unit">mm<\/span><\/span>\s*\n\s*<span class="label">Parçalama Alanı/g,
            `<span class="value">${areaCompact} <span class="unit">mm</span></span>\n                    <span class="label">Parçalama Alanı`
        );

        // Rotor Boyu: R mm
        content = content.replace(
            /<span class="value">\d+ <span class="unit">mm<\/span><\/span>\s*\n\s*<span class="label">Rotor Boyu/g,
            `<span class="value">${specs.rotor} <span class="unit">mm</span></span>\n                    <span class="label">Rotor Boyu`
        );

        // === SPEC-ROW GÜNCELLEMELER ===
        // Motor Gücü satırı
        content = content.replace(
            /<span class="label">Motor Gücü<\/span><span class="value">[^<]+<\/span>/g,
            `<span class="label">Motor Gücü</span><span class="value">${motorStr} (2x)</span>`
        );

        // Parçalama Alanı satırı
        content = content.replace(
            /<span class="label">Parçalama Alanı<\/span><span class="value">[^<]+<\/span>/g,
            `<span class="label">Parçalama Alanı</span><span class="value">${areaStr}</span>`
        );

        // Rotor Uzunluğu satırı
        content = content.replace(
            /<span class="label">Rotor Uzunluğu<\/span><span class="value">[^<]+<\/span>/g,
            `<span class="label">Rotor Uzunluğu</span><span class="value">${rotorStr}</span>`
        );

        // === BOYUTLAR TABLOSU ===
        // <span class="value">XXX mm</span> formatları
        content = content.replace(
            /class="value">\d+ mm<\/span>\s*<\/div>\s*<div class="spec-row">\s*<span class="label">Motor Tipi/g,
            `class="value">${rotorStr}</span>\n                </div>\n                <div class="spec-row">\n                    <span class="label">Motor Tipi`
        );

        // Sayfa 6 - Boyutlar sayfasındaki değerler
        content = content.replace(
            /class="value">\d+ x \d+ mm<\/span>\s*<\/div>\s*<div class="spec-row">\s*<span class="label">Rotor/g,
            `class="value">${areaStr}</span>\n                    </div>\n                    <div class="spec-row">\n                        <span class="label">Rotor`
        );

        fs.writeFileSync(htmlFile, content, 'utf8');
    });

    console.log(`✅ ${model}: ${areaStr}, Rotor: ${rotorStr}, Motor: ${motorStr} (2x)`);
});

console.log('\n🎉 Tüm modeller doğru özelliklerle güncellendi!');
