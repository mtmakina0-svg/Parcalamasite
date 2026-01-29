/**
 * CS Katalog Master Fix Script
 * Tüm boyut/spec değerlerini + görselleri düzeltir
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_DIR = 'd:/Furkan/WEB SİTESİ/Parcalamasite/public/catalogs/cs';

// Her model için teknik özellikler
const modelSpecs: Record<string, {
    area: string;           // 200 x 200 mm format
    areaCompact: string;    // 200x200 format
    areaW: string;          // 200 (width only)
    areaH: string;          // 200 (height only)
    rotor: string;          // 200 mm format
    rotorValue: string;     // 200 (value only)
    motorRange: string;     // 2.2 – 11 kW format
    motorMax: string;       // 11 (max kW value)
}> = {
    'cs-20': {
        area: '200 x 200 mm',
        areaCompact: '200x200',
        areaW: '200',
        areaH: '200',
        rotor: '200 mm',
        rotorValue: '200',
        motorRange: '2.2 – 11 kW',
        motorMax: '11'
    },
    'cs-40': {
        area: '400 x 400 mm',
        areaCompact: '400x400',
        areaW: '400',
        areaH: '400',
        rotor: '400 mm',
        rotorValue: '400',
        motorRange: '5.5 – 22 kW',
        motorMax: '22'
    },
    'cs-60': {
        area: '600 x 600 mm',
        areaCompact: '600x600',
        areaW: '600',
        areaH: '600',
        rotor: '600 mm',
        rotorValue: '600',
        motorRange: '11 – 45 kW',
        motorMax: '45'
    },
    'cs-80': {
        area: '800 x 800 mm',
        areaCompact: '800x800',
        areaW: '800',
        areaH: '800',
        rotor: '800 mm',
        rotorValue: '800',
        motorRange: '22 – 75 kW',
        motorMax: '75'
    },
    'cs-150': {
        area: '1500 x 1500 mm',
        areaCompact: '1500x1500',
        areaW: '1500',
        areaH: '1500',
        rotor: '1500 mm',
        rotorValue: '1500',
        motorRange: '45 – 132 kW',
        motorMax: '132'
    },
    'cs-180': {
        area: '1800 x 1800 mm',
        areaCompact: '1800x1800',
        areaW: '1800',
        areaH: '1800',
        rotor: '1800 mm',
        rotorValue: '1800',
        motorRange: '75 – 200 kW',
        motorMax: '200'
    },
    'cs-200': {
        area: '2000 x 2000 mm',
        areaCompact: '2000x2000',
        areaW: '2000',
        areaH: '2000',
        rotor: '2000 mm',
        rotorValue: '2000',
        motorRange: '110 – 315 kW',
        motorMax: '315'
    }
};

const languages = ['', '-en', '-ru', '-ar'];

Object.entries(modelSpecs).forEach(([model, specs]) => {
    const modelUpper = model.toUpperCase();
    const imagesDir = path.join(BASE_DIR, model, 'images');

    // Model görselleri listesi
    let images: string[] = [];
    try {
        const files = fs.readdirSync(imagesDir);
        images = files.filter(f =>
            (f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png')) &&
            !f.includes('Thumbs')
        ).sort();
    } catch (e) {
        console.log(`⚠️ ${model}: images klasörü yok`);
    }

    languages.forEach(lang => {
        const htmlFile = path.join(BASE_DIR, model, `catalog${lang}.html`);
        if (!fs.existsSync(htmlFile)) return;

        let content = fs.readFileSync(htmlFile, 'utf8');

        // ============ BIG-SPEC-GRID DÜZELTMELERI ============
        // Motor Gücü: 11-45 kW (2x) -> modelMax kW (2x)
        content = content.replace(
            /<span class="value">11-45 <span class="unit">kW \(2x\)<\/span><\/span>/g,
            `<span class="value">${specs.motorRange.replace(' – ', '-').replace(' kW', '')} <span class="unit">kW (2x)</span></span>`
        );

        // Parçalama Alanı: 600x600 mm -> modelCompact mm
        content = content.replace(
            /<span class="value">600x600 <span class="unit">mm<\/span><\/span>/g,
            `<span class="value">${specs.areaCompact} <span class="unit">mm</span></span>`
        );

        // Rotor Boyu: 600 mm -> rotorValue mm
        content = content.replace(
            /<span class="value">600 <span class="unit">mm<\/span><\/span>\s*<span class="label">Rotor Boyu<\/span>/g,
            `<span class="value">${specs.rotorValue} <span class="unit">mm</span></span>\n                    <span class="label">Rotor Boyu</span>`
        );

        // ============ SPEC-ROW DÜZELTMELERI ============
        // Motor Gücü satırı
        content = content.replace(
            /<span class="label">Motor Gücü<\/span><span class="value">[^<]+<\/span>/g,
            `<span class="label">Motor Gücü</span><span class="value">${specs.motorRange}</span>`
        );

        // Parçalama Alanı satırı
        content = content.replace(
            /<span class="label">Parçalama Alanı<\/span><span class="value">[^<]+<\/span>/g,
            `<span class="label">Parçalama Alanı</span><span class="value">${specs.area}</span>`
        );

        // Rotor Uzunluğu satırı
        content = content.replace(
            /<span class="label">Rotor Uzunluğu<\/span><span class="value">[^<]+<\/span>/g,
            `<span class="label">Rotor Uzunluğu</span><span class="value">${specs.rotor}</span>`
        );

        // ============ GÖRSEL DÜZELTMELERİ ============
        if (images.length > 0) {
            // Tüm images/ referanslarını bul ve değiştir
            let imageIndex = 0;
            content = content.replace(/images\/[^"']+\.(jpeg|jpg|png)/g, (match) => {
                const newImage = images[imageIndex % images.length];
                imageIndex++;
                return `images/${newImage}`;
            });
        }

        fs.writeFileSync(htmlFile, content, 'utf8');
    });

    console.log(`✅ ${model}: Specs + görseller güncellendi`);
    console.log(`   Area: ${specs.areaCompact}mm, Rotor: ${specs.rotorValue}mm, Motor: ${specs.motorRange}`);
    if (images.length > 0) {
        console.log(`   Görseller: ${images.length} adet (${images.slice(0, 3).join(', ')}...)`);
    }
});

console.log('\n🎉 Tüm modeller düzeltildi!');
