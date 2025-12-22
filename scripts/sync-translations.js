/**
 * Script to copy missing translation keys from EN to RU and AR
 * This ensures no raw keys are shown to users while proper translations can be added later
 */

const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../src/locales');

// Load all locale files
const tr = JSON.parse(fs.readFileSync(path.join(localesDir, 'tr.json'), 'utf8'));
const en = JSON.parse(fs.readFileSync(path.join(localesDir, 'en.json'), 'utf8'));
const ru = JSON.parse(fs.readFileSync(path.join(localesDir, 'ru.json'), 'utf8'));
const ar = JSON.parse(fs.readFileSync(path.join(localesDir, 'ar.json'), 'utf8'));

const trKeys = Object.keys(tr);
const enKeys = Object.keys(en);

console.log('='.repeat(60));
console.log('Translation Key Sync Script');
console.log('='.repeat(60));
console.log(`TR keys: ${trKeys.length}`);
console.log(`EN keys: ${enKeys.length}`);
console.log(`RU keys: ${Object.keys(ru).length}`);
console.log(`AR keys: ${Object.keys(ar).length}`);
console.log('');

// Find missing keys
const missingInRu = trKeys.filter(k => !ru[k]);
const missingInAr = trKeys.filter(k => !ar[k]);

console.log(`Missing in RU: ${missingInRu.length}`);
console.log(`Missing in AR: ${missingInAr.length}`);
console.log('');

// Copy missing keys from EN (or TR if EN doesn't have it)
let ruAdded = 0;
let arAdded = 0;

missingInRu.forEach(key => {
    if (en[key]) {
        ru[key] = en[key];
        ruAdded++;
    } else if (tr[key]) {
        // Fallback to TR if EN doesn't have it
        ru[key] = tr[key];
        ruAdded++;
    }
});

missingInAr.forEach(key => {
    if (en[key]) {
        ar[key] = en[key];
        arAdded++;
    } else if (tr[key]) {
        // Fallback to TR if EN doesn't have it
        ar[key] = tr[key];
        arAdded++;
    }
});

console.log(`Added to RU: ${ruAdded} keys`);
console.log(`Added to AR: ${arAdded} keys`);
console.log('');

// Save updated files
fs.writeFileSync(
    path.join(localesDir, 'ru.json'),
    JSON.stringify(ru, null, 2),
    'utf8'
);

fs.writeFileSync(
    path.join(localesDir, 'ar.json'),
    JSON.stringify(ar, null, 2),
    'utf8'
);

console.log('✅ RU and AR locale files updated!');
console.log('');
console.log('New counts:');
console.log(`RU keys: ${Object.keys(ru).length}`);
console.log(`AR keys: ${Object.keys(ar).length}`);
