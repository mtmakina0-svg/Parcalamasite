/**
 * Catalog Translation Script
 * Translates Turkish HTML catalog content to English, Russian, and Arabic
 */

import * as fs from 'fs';
import * as path from 'path';

// Translation mappings for catalog content
const translations = {
    en: {
        // Page titles and headers
        'Tek Şaftlı Parçalama Makinesi': 'Single Shaft Shredder',
        'ÜRÜN KATALOĞU': 'PRODUCT CATALOG',
        'Kompakt Güç, Yüksek Verim': 'Compact Power, High Efficiency',
        'Ürün Tanıtımı': 'Product Introduction',
        'Uygulama Alanları': 'Application Areas',
        'Teknik Detaylar': 'Technical Details',
        'Teknik Kimlik Kartı': 'Technical Specification Sheet',
        'Referanslarımız': 'Our References',
        'Boyutlar ve İletişim': 'Dimensions and Contact',
        'Detaylı Teknik Özellikler': 'Detailed Technical Specifications',

        // TSH-60 specific descriptions
        'TSH-60, serinin en kompakt ve seri modelidir. Özellikle küçük ve orta ölçekli işletmelerde plastik takoz, üretim firesi ve kağıt atıkların yerinde imhası için tasarlanmıştır. Enerji tasarrufu sağlayan hidrolik itici (Hydraulic Ram) sistemi ve dayanıklı rotor yapısı ile kesintisiz çalışma performansı sunar.':
            'TSH-60 is the most compact and fast model in the series. It is specifically designed for on-site destruction of plastic blocks, production waste, and paper waste in small and medium-sized enterprises. It offers uninterrupted operating performance with its energy-saving hydraulic ram system and durable rotor structure.',

        // Why TSH-60
        'Neden TSH-60?': 'Why TSH-60?',
        'Kompakt boyutları sayesinde sınırlı alanlara kolayca yerleşir. Düşük enerji tüketimi ile işletme maliyetlerini minimize eder. Tek operatör ile kullanılabilir, bakım ve temizliği kolaydır. Küçük tesisler için ideal başlangıç makinesidir.':
            'Thanks to its compact dimensions, it easily fits in limited spaces. It minimizes operating costs with low energy consumption. Can be operated by a single operator, easy to maintain and clean. It is the ideal starter machine for small facilities.',

        // Feature boxes
        'Kompakt Tasarım': 'Compact Design',
        'Küçük alanlara sığan, taşınabilir boyutlarda endüstriyel parçalama çözümü.': 'Industrial shredding solution in portable dimensions that fits small spaces.',
        'Hidrolik İtici': 'Hydraulic Pusher',
        'Otomatik besleme ile sürekli ve düzenli parçalama performansı.': 'Continuous and regular shredding performance with automatic feeding.',
        'Düşük Enerji Tüketimi': 'Low Energy Consumption',
        '18.5 - 30 kW motor gücü ile ekonomik işletme maliyeti.': 'Economic operating cost with 18.5 - 30 kW motor power.',
        'Kolay Bakım': 'Easy Maintenance',
        'Modüler bıçak sistemi ile hızlı değişim ve minimum duruş süresi.': 'Quick replacement and minimum downtime with modular blade system.',

        // Materials list
        'TSH-60 ile Parçalanabilir Malzemeler': 'Materials That Can Be Shredded with TSH-60',
        'Plastik Takoz &amp; Blok': 'Plastic Blocks &amp; Lumps',
        'Üretim Fireleri': 'Production Waste',
        'Kağıt Bobinleri': 'Paper Rolls',
        'Karton Atıklar': 'Cardboard Waste',
        'İnce Kablolar': 'Thin Cables',
        'Tekstil Parçaları': 'Textile Pieces',
        'Plastik Kasalar': 'Plastic Crates',
        'Ambalaj Malzemeleri': 'Packaging Materials',

        // Application areas
        'TSH-60, kompakt yapısı sayesinde özellikle küçük ve orta ölçekli işletmelerde tercih edilmektedir. Aşağıda başlıca kullanım alanları yer almaktadır:':
            'TSH-60 is preferred especially in small and medium-sized enterprises due to its compact structure. Below are the main areas of use:',
        'Plastik Üretim Tesisleri': 'Plastic Production Facilities',
        'Enjeksiyon ve ekstrüzyon üretim hatlarında oluşan firelerin yerinde imhası. Plastik takoz ve blokların granül boyutuna indirgenmesi.':
            'On-site destruction of waste generated in injection and extrusion production lines. Reduction of plastic blocks and lumps to granule size.',
        'Matbaa &amp; Ambalaj': 'Printing &amp; Packaging',
        'Kağıt bobinleri, karton kutular ve baskı atıklarının parçalanarak geri dönüşüme hazır hale getirilmesi.':
            'Shredding paper rolls, cardboard boxes and printing waste to make them ready for recycling.',
        'Tekstil Atölyeleri': 'Textile Workshops',
        'Kumaş parçaları, iplik atıkları ve tekstil firelerinin elyaf formuna dönüştürülmesi.':
            'Converting fabric pieces, yarn waste and textile scraps into fiber form.',
        'Küçük Geri Dönüşüm Tesisleri': 'Small Recycling Facilities',
        'Sınırlı alanda çalışan geri dönüşüm tesisleri için ideal başlangıç makinesi.':
            'Ideal starter machine for recycling facilities operating in limited space.',

        // Advantages
        'TSH-60 Avantajları': 'TSH-60 Advantages',
        '• Küçük alanlara kolay yerleşim': '• Easy installation in small spaces',
        '• Tek operatör ile kullanım': '• Single operator operation',
        '• Düşük işletme maliyeti': '• Low operating cost',
        '• Hızlı kurulum ve devreye alma': '• Fast installation and commissioning',
        '• Minimum bakım gereksinimi': '• Minimum maintenance requirement',

        // Technical details
        'Hidrolik İtici (Hydraulic Ram)': 'Hydraulic Ram',
        'Malzemeyi rotora iterek sürekli ve düzenli besleme sağlar. Operatör müdahalesine gerek kalmadan otomatik çalışır.':
            'Provides continuous and regular feeding by pushing the material to the rotor. Works automatically without operator intervention.',
        'Akıllı PLC &amp; Otomatik Geri Dönüş (Auto-Reverse)': 'Smart PLC &amp; Auto-Reverse',
        'Aşırı yükte rotor otomatik olarak geri döner, bıçakları korur ve malzeme sıkışmasını önler.':
            'The rotor automatically reverses under overload, protects blades and prevents material jamming.',
        'Değiştirilebilir Elek (Screen)': 'Replaceable Screen',
        'İstenilen granül boyutuna göre kolayca değişen elek sistemi. 20mm - 80mm arası seçenekler.':
            'Screen system that can be easily changed according to desired granule size. Options between 20mm - 80mm.',
        'Hardox Bıçaklar': 'Hardox Blades',
        '40 adet yüksek aşınma dirençli Hardox 500 çelik kesici uç. Uzun ömürlü ve değiştirilebilir.':
            '40 high wear-resistant Hardox 500 steel cutting tips. Long-lasting and replaceable.',

        // Standard equipment
        'Standart Donanım': 'Standard Equipment',
        'Gövde Malzemesi': 'Body Material',
        'St-52 Çelik': 'St-52 Steel',
        'Bıçak Malzemesi': 'Blade Material',
        'Tahrik Sistemi': 'Drive System',
        'Redüktörlü Motor': 'Geared Motor',
        'Hidrolik Ünite': 'Hydraulic Unit',
        'Dahili': 'Built-in',

        // Optional features
        'Opsiyonel Özellikler': 'Optional Features',
        'PLC Kontrol': 'PLC Control',
        'HMI Panel': 'HMI Panel',
        '7" Dokunmatik': '7" Touchscreen',
        'Uzaktan İzleme': 'Remote Monitoring',
        'IoT Modülü': 'IoT Module',
        'Çıkış Konveyörü': 'Output Conveyor',
        'Opsiyonel': 'Optional',

        // Spec labels
        'Model': 'Model',
        'Motor Gücü': 'Motor Power',
        'Rotor Çapı': 'Rotor Diameter',
        'Rotor Uzunluğu': 'Rotor Length',
        'Kapasite': 'Capacity',
        'Bıçak Sayısı': 'Number of Blades',
        'Besleme Ağzı': 'Feeding Opening',
        'Makine Ağırlığı': 'Machine Weight',
        'Ağırlık': 'Weight',
        '40 Adet': '40 Pieces',

        // Note
        'Not': 'Note',
        'Kapasite değerleri malzeme türüne, boyutuna ve yoğunluğuna göre değişiklik gösterebilir. Projenize özel teknik detaylar için satış ekibimizle iletişime geçiniz.':
            'Capacity values may vary depending on the type, size and density of the material. Please contact our sales team for technical details specific to your project.',

        // References
        "Türkiye'nin ve dünyanın önde gelen kurum ve kuruluşları MT Makina'yı tercih ediyor.":
            "Turkey's and the world's leading institutions and organizations prefer MT Makina.",
        '40+ Referans': '40+ References',
        'Güvenilir Çözüm Ortağınız': 'Your Reliable Solution Partner',
        '20 yılı aşkın tecrübemizle kamu kurumları, özel sektör ve uluslararası firmalar için endüstriyel parçalama çözümleri sunuyoruz.':
            'With more than 20 years of experience, we provide industrial shredding solutions for public institutions, private sector and international companies.',

        // Dimensions
        'TSH-60 Boyutları': 'TSH-60 Dimensions',
        'Toplam Uzunluk (A)': 'Total Length (A)',
        'Toplam Genişlik (B)': 'Total Width (B)',
        'Toplam Yükseklik (C)': 'Total Height (C)',

        // Contact
        'Bizimle İletişime Geçin': 'Contact Us',
        'ADRES': 'ADDRESS',
        'GENEL MERKEZ': 'HEADQUARTERS',
        'SATIŞ': 'SALES',
        'WHATSAPP': 'WHATSAPP',
        'E-POSTA': 'E-MAIL',
        'Ücretsiz Keşif': 'Free Site Survey',
        'İhtiyaçlarınıza uygun çözüm için ücretsiz keşif hizmetimizden yararlanın.':
            'Take advantage of our free site survey service for a solution that suits your needs.',

        // HTML comments
        'SAYFA 1: KAPAK': 'PAGE 1: COVER',
        'SAYFA 2: ÜRÜN TANITIMI': 'PAGE 2: PRODUCT INTRODUCTION',
        'SAYFA 3: UYGULAMA ALANLARI': 'PAGE 3: APPLICATION AREAS',
        'SAYFA 4: TEKNİK DETAYLAR': 'PAGE 4: TECHNICAL DETAILS',
        'SAYFA 5: TEKNİK KİMLİK KARTI (SPEC SHEET)': 'PAGE 5: TECHNICAL SPECIFICATION SHEET',
        'SAYFA 6: REFERANSLARIMIZ': 'PAGE 6: OUR REFERENCES',
        'SAYFA 7: BOYUTLAR & İLETİŞİM': 'PAGE 7: DIMENSIONS & CONTACT',

        // Model variations for other TSH models
        'TSH-80, tek şaftlı serinin orta segment modeli': 'TSH-80 is the mid-range model of the single shaft series',
        'TSH-100, tek şaftlı serinin yüksek kapasiteli modeli': 'TSH-100 is the high-capacity model of the single shaft series',
        'TSH-130, tek şaftlı serinin endüstriyel modeli': 'TSH-130 is the industrial model of the single shaft series',
        'TSH-160, tek şaftlı serinin en güçlü modeli': 'TSH-160 is the most powerful model of the single shaft series',
    },
    ru: {
        // Page titles and headers
        'Tek Şaftlı Parçalama Makinesi': 'Одновальный шредер',
        'ÜRÜN KATALOĞU': 'КАТАЛОГ ПРОДУКЦИИ',
        'Kompakt Güç, Yüksek Verim': 'Компактная мощность, высокая эффективность',
        'Ürün Tanıtımı': 'Описание продукта',
        'Uygulama Alanları': 'Области применения',
        'Teknik Detaylar': 'Технические детали',
        'Teknik Kimlik Kartı': 'Техническая спецификация',
        'Referanslarımız': 'Наши рекомендации',
        'Boyutlar ve İletişim': 'Размеры и контакты',
        'Detaylı Teknik Özellikler': 'Подробные технические характеристики',

        // Feature boxes
        'Kompakt Tasarım': 'Компактный дизайн',
        'Hidrolik İtici': 'Гидравлический толкатель',
        'Düşük Enerji Tüketimi': 'Низкое энергопотребление',
        'Kolay Bakım': 'Простое обслуживание',

        // Technical specs
        'Standart Donanım': 'Стандартное оборудование',
        'Opsiyonel Özellikler': 'Дополнительные опции',
        'Motor Gücü': 'Мощность двигателя',
        'Rotor Çapı': 'Диаметр ротора',
        'Rotor Uzunluğu': 'Длина ротора',
        'Kapasite': 'Производительность',
        'Bıçak Sayısı': 'Количество ножей',
        'Besleme Ağzı': 'Загрузочное отверстие',
        'Makine Ağırlığı': 'Вес машины',
        'Ağırlık': 'Вес',

        // Contact
        'Bizimle İletişime Geçin': 'Свяжитесь с нами',
        'ADRES': 'АДРЕС',
        'GENEL MERKEZ': 'ГЛАВНЫЙ ОФИС',
        'SATIŞ': 'ПРОДАЖИ',
        'E-POSTA': 'ЭЛ. ПОЧТА',
    },
    ar: {
        // Page titles and headers
        'Tek Şaftlı Parçalama Makinesi': 'آلة تمزيق ذات عمود واحد',
        'ÜRÜN KATALOĞU': 'كتالوج المنتج',
        'Kompakt Güç, Yüksek Verim': 'قوة مدمجة، كفاءة عالية',
        'Ürün Tanıtımı': 'وصف المنتج',
        'Uygulama Alanları': 'مجالات التطبيق',
        'Teknik Detaylar': 'التفاصيل الفنية',
        'Teknik Kimlik Kartı': 'ورقة المواصفات الفنية',
        'Referanslarımız': 'مراجعنا',
        'Boyutlar ve İletişim': 'الأبعاد والاتصال',
        'Detaylı Teknik Özellikler': 'المواصفات الفنية المفصلة',

        // Feature boxes
        'Kompakt Tasarım': 'تصميم مدمج',
        'Hidrolik İtici': 'دافع هيدروليكي',
        'Düşük Enerji Tüketimi': 'استهلاك منخفض للطاقة',
        'Kolay Bakım': 'صيانة سهلة',

        // Technical specs
        'Standart Donanım': 'المعدات القياسية',
        'Opsiyonel Özellikler': 'الميزات الاختيارية',
        'Motor Gücü': 'قوة المحرك',
        'Rotor Çapı': 'قطر الدوار',
        'Rotor Uzunluğu': 'طول الدوار',
        'Kapasite': 'السعة',
        'Bıçak Sayısı': 'عدد الشفرات',
        'Besleme Ağzı': 'فتحة التغذية',
        'Makine Ağırlığı': 'وزن الآلة',
        'Ağırlık': 'الوزن',

        // Contact
        'Bizimle İletişime Geçin': 'اتصل بنا',
        'ADRES': 'العنوان',
        'GENEL MERKEZ': 'المقر الرئيسي',
        'SATIŞ': 'المبيعات',
        'E-POSTA': 'البريد الإلكتروني',
    }
};

function translateCatalog(sourceFile: string, targetLang: 'en' | 'ru' | 'ar'): void {
    const content = fs.readFileSync(sourceFile, 'utf-8');
    let translated = content;

    // Update lang attribute
    translated = translated.replace('lang="tr"', `lang="${targetLang}"`);

    // Update title meta
    if (targetLang === 'en') {
        translated = translated.replace(
            /Tek Şaftlı Parçalama Makinesi \| MT Makina Ürün Kataloğu/g,
            'Single Shaft Shredder | MT Makina Product Catalog'
        );
    }

    // Apply translations
    const langTranslations = translations[targetLang];
    for (const [turkish, translation] of Object.entries(langTranslations)) {
        translated = translated.split(turkish).join(translation);
    }

    // Generate target filename
    const dir = path.dirname(sourceFile);
    const targetFile = path.join(dir, `catalog-${targetLang}.html`);

    fs.writeFileSync(targetFile, translated, 'utf-8');
    console.log(`✅ Created: ${targetFile}`);
}

// Main execution
async function main() {
    const catalogDir = path.join(__dirname, '..', 'public', 'catalogs', 'tsh');
    const models = ['tsh-60', 'tsh-80', 'tsh-100', 'tsh-130', 'tsh-160'];
    const languages: Array<'en' | 'ru' | 'ar'> = ['en', 'ru', 'ar'];

    console.log('🌍 Translating catalogs...\n');

    for (const model of models) {
        const sourceFile = path.join(catalogDir, model, 'catalog.html');
        if (fs.existsSync(sourceFile)) {
            console.log(`📄 Processing ${model}...`);
            for (const lang of languages) {
                translateCatalog(sourceFile, lang);
            }
            console.log('');
        } else {
            console.log(`⚠️ Source file not found: ${sourceFile}`);
        }
    }

    console.log('✅ All catalogs translated!');
}

main().catch(console.error);
