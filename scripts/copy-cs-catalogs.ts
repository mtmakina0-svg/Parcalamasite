/**
 * CS Katalog Kopyalama Script'i
 * CS-60 şablonunu kullanarak diğer modelleri oluşturur (encoding korunarak)
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_DIR = 'd:/Furkan/WEB SİTESİ/Parcalamasite/public/catalogs/cs';
const models = ['cs-20', 'cs-40', 'cs-80', 'cs-150', 'cs-180', 'cs-200'];
const languages = ['', '-en', '-ru', '-ar'];

models.forEach(model => {
    const modelUpper = model.toUpperCase();

    languages.forEach(langSuffix => {
        const sourceFile = path.join(BASE_DIR, 'cs-60', `catalog${langSuffix}.html`);
        const destFile = path.join(BASE_DIR, model, `catalog${langSuffix}.html`);

        // Read with UTF-8
        let content = fs.readFileSync(sourceFile, 'utf8');

        // Replace CS-60 with model name
        content = content.replace(/CS-60/g, modelUpper);
        content = content.replace(/cs-60/g, model);

        // Write with UTF-8
        fs.writeFileSync(destFile, content, 'utf8');
        console.log(`✅ Created: ${model}/catalog${langSuffix}.html`);
    });
});

console.log('\n🎉 All catalogs copied successfully!');
