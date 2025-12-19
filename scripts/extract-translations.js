/**
 * Script to extract translations from LanguageContext.tsx
 * Uses line-by-line parsing for robustness
 */
const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, '../src/components/LanguageContext.tsx');
const localesDir = path.join(__dirname, '../src/locales');

// Create locales directory
if (!fs.existsSync(localesDir)) {
    fs.mkdirSync(localesDir, { recursive: true });
}

// Read LanguageContext.tsx
const lines = fs.readFileSync(sourceFile, 'utf-8').split('\n');

const languages = ['tr', 'en', 'ru', 'ar'];
const langData = {};
let currentLang = null;
let braceDepth = 0;
let inTranslations = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Detect start of translations object
    if (trimmed === 'const translations = {') {
        inTranslations = true;
        braceDepth = 1;
        continue;
    }

    if (!inTranslations) continue;

    // Detect language block start
    if (!currentLang) {
        for (const lang of languages) {
            if (trimmed === `${lang}: {`) {
                currentLang = lang;
                langData[lang] = {};
                braceDepth = 1;
                break;
            }
        }
        continue;
    }

    // Count braces
    for (const char of line) {
        if (char === '{') braceDepth++;
        if (char === '}') braceDepth--;
    }

    // End of language block
    if (braceDepth === 0) {
        console.log(`  Found ${Object.keys(langData[currentLang]).length} keys for ${currentLang}`);
        currentLang = null;
        continue;
    }

    // Parse key-value pairs
    // Format: key: 'value', or 'key': 'value', or key: "value",
    const kvMatch = trimmed.match(/^['"]?(\w[\w_-]*)['"]?\s*:\s*['"`]((?:[^'"`\\]|\\.|\\n)*)['"`],?\s*(?:\/\/.*)?$/);
    if (kvMatch && currentLang) {
        const key = kvMatch[1];
        let value = kvMatch[2];
        // Unescape
        value = value.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\n/g, '\n');
        langData[currentLang][key] = value;
    }

    // Stop at LanguageContext
    if (line.includes('export const LanguageContext')) {
        break;
    }
}

// Write JSON files
for (const lang of languages) {
    if (langData[lang] && Object.keys(langData[lang]).length > 0) {
        const outputFile = path.join(localesDir, `${lang}.json`);
        fs.writeFileSync(outputFile, JSON.stringify(langData[lang], null, 2), 'utf-8');
        console.log(`✅ Generated ${lang}.json with ${Object.keys(langData[lang]).length} keys`);
    } else {
        console.log(`⚠️ No data found for ${lang}`);
    }
}

console.log('\n✅ Extraction complete!');
console.log(`📁 Files saved to: ${localesDir}`);
