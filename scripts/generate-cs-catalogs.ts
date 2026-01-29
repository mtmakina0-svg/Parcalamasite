/**
 * CS Serisi Katalog Oluşturma Script'i
 * Tüm CS modelleri için 4 dilde katalog oluşturur
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_DIR = 'd:/Furkan/WEB SİTESİ/Parcalamasite/public/catalogs/cs';

// Model verileri - her model için benzersiz özellikler
const models: Record<string, {
    area: string;
    rotorLength: string;
    motorPower: string;
    tagline: { tr: string; en: string; ru: string; ar: string };
    description: { tr: string; en: string; ru: string; ar: string };
    highlight: { tr: string; en: string; ru: string; ar: string };
}> = {
    'cs-20': {
        area: '200 x 200 mm',
        rotorLength: '200 mm',
        motorPower: '2.2 – 11 kW',
        tagline: {
            tr: 'Kompakt Güç, Büyük Sonuçlar',
            en: 'Compact Power, Big Results',
            ru: 'Компактная Мощность, Большие Результаты',
            ar: 'قوة مدمجة، نتائج كبيرة'
        },
        description: {
            tr: 'CS-20, çift şaftlı parçalama makinesi serisinin en kompakt modeli olarak küçük işletmeler ve laboratuvarlar için ideal çözüm sunar. 200x200mm parçalama alanı ve yüksek tork kapasitesi ile sınırlı alanlarda etkili atık yönetimi sağlar.',
            en: 'The CS-20 is the most compact model in our dual shaft shredder series, offering an ideal solution for small businesses and laboratories. With its 200x200mm shredding area and high torque capacity, it provides effective waste management in limited spaces.',
            ru: 'CS-20 — самая компактная модель в серии двухвальных шредеров, предлагающая идеальное решение для малого бизнеса и лабораторий. С зоной измельчения 200x200мм и высоким крутящим моментом обеспечивает эффективное управление отходами в ограниченном пространстве.',
            ar: 'CS-20 هو النموذج الأكثر إحكامًا في سلسلة آلات التمزيق ثنائية العمود، ويقدم حلاً مثاليًا للشركات الصغيرة والمختبرات. مع منطقة تمزيق 200×200 مم وعزم دوران عالٍ.'
        },
        highlight: {
            tr: 'Kompakt boyutlarına rağmen çift şaftlı tasarımın tüm avantajlarını sunar. Ofis ortamlarında kullanılabilir, düşük gürültü seviyesi ve kolay bakım imkanı ile öne çıkar.',
            en: 'Despite its compact size, it offers all the advantages of dual shaft design. Suitable for office environments, featuring low noise levels and easy maintenance.',
            ru: 'Несмотря на компактные размеры, обладает всеми преимуществами двухвального дизайна. Подходит для офисных помещений, отличается низким уровнем шума и простотой обслуживания.',
            ar: 'على الرغم من حجمها المدمج، فإنها توفر جميع مزايا التصميم ثنائي العمود. مناسبة لبيئات المكاتب، تتميز بمستويات ضوضاء منخفضة وسهولة الصيانة.'
        }
    },
    'cs-40': {
        area: '400 x 400 mm',
        rotorLength: '400 mm',
        motorPower: '5.5 – 22 kW',
        tagline: {
            tr: 'Verimli Parçalama, Güvenilir Performans',
            en: 'Efficient Shredding, Reliable Performance',
            ru: 'Эффективное Измельчение, Надежная Производительность',
            ar: 'تمزيق فعال، أداء موثوق'
        },
        description: {
            tr: 'CS-40, orta kapasiteli çift şaftlı parçalama makinesi olarak küçük ve orta ölçekli tesislerde güvenilir performans sunar. 400x400mm parçalama alanı ile plastik, karton ve hafif metal atıklarını verimli şekilde işler.',
            en: 'The CS-40 is a medium-capacity dual shaft shredder offering reliable performance in small to medium-sized facilities. With its 400x400mm shredding area, it efficiently processes plastic, cardboard, and light metal waste.',
            ru: 'CS-40 — двухвальный шредер средней мощности, обеспечивающий надежную работу на малых и средних предприятиях. С зоной измельчения 400x400мм эффективно перерабатывает пластик, картон и легкий металлолом.',
            ar: 'CS-40 هي آلة تمزيق ثنائية العمود متوسطة السعة توفر أداءً موثوقًا في المنشآت الصغيرة والمتوسطة. مع منطقة تمزيق 400×400 مم.'
        },
        highlight: {
            tr: 'Çift motor sistemi ile zorlu malzemelerde bile kesintisiz çalışma sağlar. Modüler bıçak tasarımı sayesinde bakım süreleri minimize edilir.',
            en: 'The dual motor system ensures uninterrupted operation even with challenging materials. Modular blade design minimizes maintenance downtime.',
            ru: 'Система двух двигателей обеспечивает бесперебойную работу даже со сложными материалами. Модульная конструкция ножей минимизирует время обслуживания.',
            ar: 'يضمن نظام المحرك المزدوج التشغيل المستمر حتى مع المواد الصعبة. تصميم الشفرات المعيارية يقلل من وقت الصيانة.'
        }
    },
    'cs-80': {
        area: '800 x 800 mm',
        rotorLength: '800 mm',
        motorPower: '15 – 55 kW (2x)',
        tagline: {
            tr: 'Endüstriyel Güç, Yüksek Kapasite',
            en: 'Industrial Power, High Capacity',
            ru: 'Промышленная Мощность, Высокая Производительность',
            ar: 'قوة صناعية، سعة عالية'
        },
        description: {
            tr: 'CS-80, endüstriyel ölçekli parçalama operasyonları için tasarlanmış güçlü bir çift şaftlı makinedir. 800x800mm geniş parçalama alanı ve çift motor sistemi ile yüksek hacimli atık işleme kapasitesi sunar.',
            en: 'The CS-80 is a powerful dual shaft machine designed for industrial-scale shredding operations. With its 800x800mm wide shredding area and dual motor system, it offers high-volume waste processing capacity.',
            ru: 'CS-80 — мощная двухвальная машина, предназначенная для промышленного измельчения. С широкой зоной измельчения 800x800мм и системой двух двигателей обеспечивает высокую производительность переработки отходов.',
            ar: 'CS-80 هي آلة قوية ثنائية العمود مصممة لعمليات التمزيق على المستوى الصناعي. مع منطقة تمزيق واسعة 800×800 مم ونظام محرك مزدوج.'
        },
        highlight: {
            tr: 'Ağır hizmet uygulamaları için ideal. Paletler, büyük plastik variller ve metal hurdalar kolayca parçalanır. Uzun ömürlü Hardox bıçaklar ile minimum bakım gerektirir.',
            en: 'Ideal for heavy-duty applications. Pallets, large plastic drums, and metal scrap are easily shredded. Long-lasting Hardox blades require minimum maintenance.',
            ru: 'Идеально подходит для тяжелых условий эксплуатации. Поддоны, большие пластиковые бочки и металлолом легко измельчаются. Долговечные ножи Hardox требуют минимального обслуживания.',
            ar: 'مثالي للتطبيقات الشاقة. يتم تمزيق المنصات والبراميل البلاستيكية الكبيرة والخردة المعدنية بسهولة. شفرات Hardox طويلة الأمد تتطلب الحد الأدنى من الصيانة.'
        }
    },
    'cs-150': {
        area: '1500 x 1200 mm',
        rotorLength: '1500 mm',
        motorPower: '45 – 132 kW (2x)',
        tagline: {
            tr: 'Maksimum Verim, Profesyonel Çözüm',
            en: 'Maximum Efficiency, Professional Solution',
            ru: 'Максимальная Эффективность, Профессиональное Решение',
            ar: 'كفاءة قصوى، حل احترافي'
        },
        description: {
            tr: 'CS-150, büyük ölçekli geri dönüşüm tesisleri ve ağır endüstriyel uygulamalar için tasarlanmış yüksek kapasiteli çift şaftlı parçalama makinesidir. 1500x1200mm parçalama alanı ile ton başına yüksek verim sağlar.',
            en: 'The CS-150 is a high-capacity dual shaft shredder designed for large-scale recycling plants and heavy industrial applications. With its 1500x1200mm shredding area, it delivers high throughput per ton.',
            ru: 'CS-150 — высокопроизводительный двухвальный шредер, предназначенный для крупных перерабатывающих предприятий и тяжелых промышленных применений. С зоной измельчения 1500x1200мм обеспечивает высокую производительность.',
            ar: 'CS-150 هي آلة تمزيق ثنائية العمود عالية السعة مصممة لمصانع إعادة التدوير الكبيرة والتطبيقات الصناعية الثقيلة. مع منطقة تمزيق 1500×1200 مم.'
        },
        highlight: {
            tr: 'Belediye atıkları, inşaat molozları ve büyük hacimli endüstriyel atıklar için optimal çözüm. Çift motorlu yüksek tork sistemi ile en zorlu malzemeleri bile parçalar.',
            en: 'Optimal solution for municipal waste, construction debris, and large-volume industrial waste. The dual-motor high-torque system shreds even the toughest materials.',
            ru: 'Оптимальное решение для муниципальных отходов, строительного мусора и крупногабаритных промышленных отходов. Система высокого крутящего момента с двумя двигателями измельчает даже самые сложные материалы.',
            ar: 'الحل الأمثل للنفايات البلدية ومخلفات البناء والنفايات الصناعية كبيرة الحجم. نظام عزم الدوران العالي بمحركين يمزق حتى أصعب المواد.'
        }
    },
    'cs-180': {
        area: '1800 x 1500 mm',
        rotorLength: '1800 mm',
        motorPower: '55 – 132 kW (2x)',
        tagline: {
            tr: 'Ağır Sanayi, Benzersiz Güç',
            en: 'Heavy Industry, Unmatched Power',
            ru: 'Тяжелая Промышленность, Непревзойденная Мощность',
            ar: 'صناعة ثقيلة، قوة لا مثيل لها'
        },
        description: {
            tr: 'CS-180, ağır sanayi uygulamaları için geliştirilen çift şaftlı parçalama makinesidir. 1800x1500mm parçalama alanı ve güçlü motor kombinasyonu ile hacimli ve dirençli malzemelerin parçalanmasında üstün performans gösterir.',
            en: 'The CS-180 is a dual shaft shredder developed for heavy industry applications. With its 1800x1500mm shredding area and powerful motor combination, it demonstrates superior performance in shredding bulky and resistant materials.',
            ru: 'CS-180 — двухвальный шредер, разработанный для тяжелых промышленных применений. С зоной измельчения 1800x1500мм и мощной комбинацией двигателей демонстрирует превосходную производительность при измельчении объемных и прочных материалов.',
            ar: 'CS-180 هي آلة تمزيق ثنائية العمود مطورة لتطبيقات الصناعة الثقيلة. مع منطقة تمزيق 1800×1500 مم ومجموعة محركات قوية.'
        },
        highlight: {
            tr: 'Araç lastikleri, büyük metal parçalar, ağaç gövdeleri ve hacimli plastik atıklar için idealdir. Hidrolik baskı ünitesi opsiyonu ile besleme verimliliği artırılabilir.',
            en: 'Ideal for vehicle tires, large metal parts, tree trunks, and bulky plastic waste. Feeding efficiency can be increased with the hydraulic pusher unit option.',
            ru: 'Идеально подходит для автомобильных шин, крупных металлических деталей, стволов деревьев и объемных пластиковых отходов. Эффективность подачи может быть увеличена с помощью гидравлического толкателя.',
            ar: 'مثالي لإطارات المركبات والأجزاء المعدنية الكبيرة وجذوع الأشجار والنفايات البلاستيكية الضخمة. يمكن زيادة كفاءة التغذية مع خيار وحدة الدفع الهيدروليكية.'
        }
    },
    'cs-200': {
        area: '2000 x 1800 mm',
        rotorLength: '2000 mm',
        motorPower: '75 – 200 kW (2x)',
        tagline: {
            tr: 'Serinin En Güçlüsü',
            en: 'The Most Powerful in the Series',
            ru: 'Самый Мощный в Серии',
            ar: 'الأقوى في السلسلة'
        },
        description: {
            tr: 'CS-200, çift şaftlı parçalama makinesi serisinin amiral gemisidir. 2000x1800mm parçalama alanı ve 75-200 kW çift motor gücü ile en zorlu endüstriyel atık yönetimi ihtiyaçlarını karşılar. Büyük ölçekli geri dönüşüm tesisleri için ultimate çözüm.',
            en: 'The CS-200 is the flagship of our dual shaft shredder series. With its 2000x1800mm shredding area and 75-200 kW dual motor power, it meets the most demanding industrial waste management needs. The ultimate solution for large-scale recycling plants.',
            ru: 'CS-200 — флагман серии двухвальных шредеров. С зоной измельчения 2000x1800мм и мощностью двух двигателей 75-200 кВт удовлетворяет самые требовательные потребности в промышленном управлении отходами. Идеальное решение для крупных перерабатывающих предприятий.',
            ar: 'CS-200 هي الرائدة في سلسلة آلات التمزيق ثنائية العمود. مع منطقة تمزيق 2000×1800 مم وقوة محرك مزدوج 75-200 كيلوواط، تلبي أصعب احتياجات إدارة النفايات الصناعية.'
        },
        highlight: {
            tr: 'Maksimum kapasite ve güç arayanlar için. Hurda araçlar, büyük metal yapılar, yoğun plastik bloklar ve karışık atıkları tek makinede parçalar. Türkiyenin ve dünyanın en büyük tesislerinde güvenle kullanılmaktadır.',
            en: 'For those seeking maximum capacity and power. Shreds scrap vehicles, large metal structures, dense plastic blocks, and mixed waste in a single machine. Trusted in the largest facilities in Turkey and worldwide.',
            ru: 'Для тех, кто ищет максимальную производительность и мощность. Измельчает автомобили на металлолом, крупные металлоконструкции, плотные пластиковые блоки и смешанные отходы в одной машине. Используется на крупнейших предприятиях Турции и мира.',
            ar: 'لمن يبحثون عن أقصى سعة وقوة. تمزق السيارات الخردة والهياكل المعدنية الكبيرة والكتل البلاستيكية الكثيفة والنفايات المختلطة في آلة واحدة.'
        }
    }
};

// Dil yapılandırması
const languages = {
    tr: { code: 'tr', locale: 'tr_TR', suffix: '' },
    en: { code: 'en', locale: 'en_US', suffix: '-en' },
    ru: { code: 'ru', locale: 'ru_RU', suffix: '-ru' },
    ar: { code: 'ar', locale: 'ar_SA', suffix: '-ar' }
};

// Sayfa başlıkları çevirileri
const pageTexts = {
    productIntro: { tr: 'Ürün Tanıtımı', en: 'Product Introduction', ru: 'Описание Продукта', ar: 'وصف المنتج' },
    whyModel: { tr: 'Neden', en: 'Why', ru: 'Почему', ar: 'لماذا' },
    applicationAreas: { tr: 'Uygulama Alanları', en: 'Application Areas', ru: 'Области Применения', ar: 'مجالات التطبيق' },
    technicalDetails: { tr: 'Teknik Detaylar', en: 'Technical Details', ru: 'Технические Детали', ar: 'التفاصيل التقنية' },
    specSheet: { tr: 'Teknik Kimlik Kartı', en: 'Technical Specification Sheet', ru: 'Технический Паспорт', ar: 'ورقة المواصفات الفنية' },
    references: { tr: 'Referanslarımız', en: 'Our References', ru: 'Наши Референсы', ar: 'مراجعنا' },
    dimensions: { tr: 'Boyutlar ve İletişim', en: 'Dimensions and Contact', ru: 'Размеры и Контакты', ar: 'الأبعاد والاتصال' },
    dualShaftShredder: { tr: 'Çift Şaftlı Parçalama Makinesi', en: 'Dual Shaft Shredder', ru: 'Двухвальный Шредер', ar: 'آلة تمزيق ثنائية العمود' },
    productCatalog: { tr: 'ÜRÜN KATALOĞU', en: 'PRODUCT CATALOG', ru: 'КАТАЛОГ ПРОДУКЦИИ', ar: 'كتالوج المنتجات' }
};

function generateCatalogHTML(modelId: string, lang: keyof typeof languages): string {
    const model = models[modelId];
    const langConfig = languages[lang];
    const modelName = modelId.toUpperCase();

    // Görsel dosyalarını listele
    const imagesDir = path.join(BASE_DIR, modelId, 'images');
    let images: string[] = [];
    try {
        images = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));
    } catch (e) {
        console.log(`No images found for ${modelId}`);
    }

    const img1 = images[0] || 'placeholder.jpg';
    const img2 = images[1] || images[0] || 'placeholder.jpg';
    const img3 = images[2] || images[0] || 'placeholder.jpg';
    const img4 = images[3] || images[0] || 'placeholder.jpg';

    return `<!DOCTYPE html>
<html lang="${langConfig.code}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="/catalogs/cs/${modelId}/">
    <title>${modelName} ${pageTexts.dualShaftShredder[lang]} | MT Makina</title>
    <meta name="description" content="${model.description[lang]}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="googlebot" content="index, follow">
    <meta name="author" content="MT Makina">
    <link rel="canonical" href="https://www.parcalamamakinesi.com/catalogs/cs/${modelId}/catalog${langConfig.suffix}.html">
    <meta property="og:type" content="product">
    <meta property="og:url" content="https://www.parcalamamakinesi.com/catalogs/cs/${modelId}/catalog${langConfig.suffix}.html">
    <meta property="og:title" content="${modelName} ${pageTexts.dualShaftShredder[lang]} | MT Makina">
    <meta property="og:description" content="${model.description[lang]}">
    <meta property="og:image" content="https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png">
    <meta property="og:locale" content="${langConfig.locale}">
    <meta property="og:site_name" content="MT Makina">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <style>
        *{margin:0;padding:0;box-sizing:border-box}
        :root{--primary-yellow:#FFC000;--dark-anthracite:#222222;--light-gray:#F9F9F9;--border-gray:#E0E0E0;--text-dark:#333333;--white:#FFFFFF}
        body{font-family:'Roboto','Helvetica',Arial,sans-serif;font-size:11pt;line-height:1.5;color:var(--text-dark);background-color:#E5E5E5}
        .page{width:210mm;min-height:297mm;background:var(--white);margin:20px auto;position:relative;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.15)}
        .page-content{padding:20mm 25mm 30mm 25mm;min-height:calc(297mm - 50mm)}
        @media print{*{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}body{background:white!important}.page{width:210mm!important;height:297mm!important;margin:0!important;box-shadow:none!important;page-break-after:always!important}.page:last-child{page-break-after:auto!important}}
        @page{size:A4 portrait;margin:0}
        h1{font-size:32pt;font-weight:900;color:var(--dark-anthracite);text-transform:uppercase;letter-spacing:2px}
        h2{font-size:18pt;font-weight:700;color:var(--dark-anthracite);text-transform:uppercase;letter-spacing:1px;margin-bottom:8mm;position:relative;display:inline-block}
        h2::after{content:'';position:absolute;bottom:-4mm;left:0;width:100%;height:3px;background:var(--primary-yellow)}
        h3{font-size:14pt;font-weight:700;color:var(--dark-anthracite);margin-bottom:5mm}
        p{font-size:11pt;line-height:1.7;color:var(--text-dark);margin-bottom:4mm}
        .cover-page{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;height:297mm;overflow:hidden}
        .cover-top-block{position:absolute;top:0;left:0;width:100%;height:45%;background:var(--primary-yellow);clip-path:polygon(0 0,100% 0,100% 70%,0 100%)}
        .cover-bottom-block{position:absolute;bottom:0;left:0;width:100%;height:35%;background:var(--dark-anthracite);clip-path:polygon(0 30%,100% 0,100% 100%,0 100%)}
        .cover-logo{position:absolute;top:15mm;left:20mm;z-index:20;width:50mm;height:auto}
        .cover-content{position:relative;z-index:10;text-align:center;padding:0 20mm}
        .cover-img{width:155mm;height:auto;max-height:105mm;object-fit:contain;margin-bottom:6mm;padding:3mm;background:var(--white);border:2px solid var(--white);border-radius:4px;box-shadow:0 6px 25px rgba(0,0,0,0.2)}
        .cover-model{font-size:72pt;font-weight:900;color:var(--dark-anthracite);text-transform:uppercase;letter-spacing:6px;margin-bottom:3mm;text-shadow:3px 3px 0 rgba(255,255,255,0.5)}
        .cover-title{font-size:18pt;font-weight:700;color:var(--dark-anthracite);text-transform:uppercase;letter-spacing:3px;margin-bottom:2mm}
        .cover-subtitle{font-size:12pt;font-weight:500;color:#666666;text-transform:uppercase;letter-spacing:2px;margin-top:0;margin-bottom:25mm}
        .cover-series{display:inline-block;background:var(--dark-anthracite);color:var(--primary-yellow);font-size:14pt;font-weight:700;padding:3mm 10mm;margin-top:15mm;letter-spacing:2px}
        .cover-tagline{position:absolute;bottom:30mm;left:50%;transform:translateX(-50%);z-index:10;color:var(--white);font-size:16pt;font-weight:500;letter-spacing:3px;text-transform:uppercase}
        .page-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:8mm;padding-bottom:4mm;border-bottom:1px solid var(--border-gray)}
        .page-header-icon{width:12mm;height:auto;opacity:0.8}
        .section-header{margin-bottom:12mm}
        .section-header h2{margin-bottom:0}
        .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:6mm;margin-top:8mm}
        .feature-box{background:var(--light-gray);border-left:4px solid var(--primary-yellow);padding:5mm}
        .feature-box h4{font-size:11pt;font-weight:700;color:var(--dark-anthracite);margin-bottom:2mm}
        .feature-box p{font-size:9pt;margin-bottom:0;color:#555;line-height:1.5}
        .product-image{width:100%;height:auto;object-fit:contain;border-radius:4px}
        .product-image-container{margin:6mm 0;text-align:center}
        .page-footer{position:absolute;bottom:0;left:0;width:100%;height:12mm;background:var(--primary-yellow);display:flex;align-items:center;justify-content:flex-end;padding:0 25mm}
        .page-footer span{font-size:9pt;font-weight:500;color:var(--dark-anthracite);margin-left:8mm}
        .page-footer span::before{content:'•';margin-right:8mm;opacity:0.5}
        .page-footer span:first-child::before{display:none}
        .highlight-box{background:var(--dark-anthracite);color:var(--white);padding:6mm;margin:8mm 0}
        .highlight-box h3{color:var(--primary-yellow);margin-bottom:3mm}
        .highlight-box p{color:var(--white);margin-bottom:0}
        .page-number{position:absolute;bottom:15mm;left:25mm;font-size:9pt;color:var(--dark-anthracite);font-weight:500}
        .model-badge{display:inline-block;background:var(--primary-yellow);color:var(--dark-anthracite);font-size:24pt;font-weight:900;padding:3mm 8mm;letter-spacing:2px;margin-bottom:6mm}
        .spec-card{background:var(--light-gray);border:2px solid var(--border-gray);border-radius:6px;padding:8mm;margin:6mm 0}
        .spec-card-header{background:var(--primary-yellow);margin:-8mm -8mm 6mm -8mm;padding:4mm 8mm;border-radius:4px 4px 0 0}
        .spec-card-header h3{color:var(--dark-anthracite);margin:0;font-size:14pt;text-transform:uppercase;letter-spacing:1px}
        .spec-row{display:flex;justify-content:space-between;align-items:center;padding:4mm 0;border-bottom:1px solid var(--border-gray)}
        .spec-row:last-child{border-bottom:none}
        .spec-row .label{font-size:11pt;font-weight:500;color:#666}
        .spec-row .value{font-size:14pt;font-weight:700;color:var(--dark-anthracite)}
        .spec-row .value.highlight{color:var(--primary-yellow);background:var(--dark-anthracite);padding:2mm 4mm;border-radius:3px}
        .big-spec-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:5mm;margin:8mm 0}
        .big-spec-item{background:var(--dark-anthracite);color:var(--white);padding:6mm;text-align:center;border-radius:4px}
        .big-spec-item .value{font-size:22pt;font-weight:900;color:var(--primary-yellow);display:block;margin-bottom:2mm}
        .big-spec-item .unit{font-size:10pt;font-weight:400;color:var(--primary-yellow);opacity:0.8}
        .big-spec-item .label{font-size:9pt;font-weight:500;color:#aaa;text-transform:uppercase;letter-spacing:0.5px}
        .two-columns{display:grid;grid-template-columns:1fr 1fr;gap:10mm}
        .contact-section{margin-top:6mm}
        .contact-section h3{margin-bottom:3mm;padding-bottom:2mm;border-bottom:2px solid var(--primary-yellow)}
        .contact-group{margin-bottom:5mm}
        .contact-group-title{font-size:10pt;font-weight:700;color:var(--primary-yellow);background:var(--dark-anthracite);padding:2mm 3mm;margin-bottom:2mm;display:inline-block}
        .address-text{font-size:10pt;line-height:1.6;color:var(--text-dark)}
        .website-box{background:var(--light-gray);padding:4mm;text-align:center;border-radius:4px;margin-top:4mm}
        .website-box p{margin:0;font-size:12pt;font-weight:700;color:var(--dark-anthracite)}
        .website-box p.secondary{font-size:10pt;font-weight:500;color:#666;margin-top:1mm}
    </style>
</head>
<body>
    <!-- PAGE 1: COVER -->
    <div class="page">
        <div class="cover-page">
            <div class="cover-top-block"></div>
            <div class="cover-bottom-block"></div>
            <img src="../../assets/Mt Makina-Logo.png" alt="MT Makina Logo" class="cover-logo">
            <div class="cover-content">
                <img src="images/${img1}" alt="${modelName} ${pageTexts.dualShaftShredder[lang]}" class="cover-img">
                <h1 class="cover-model">${modelName}</h1>
                <p class="cover-title">${pageTexts.dualShaftShredder[lang]}</p>
                <p class="cover-subtitle">Dual Shaft Shredder</p>
                <div class="cover-series">${pageTexts.productCatalog[lang]}</div>
            </div>
            <p class="cover-tagline">${model.tagline[lang]}</p>
        </div>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 2: PRODUCT INTRO -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${pageTexts.productIntro[lang]}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div class="model-badge">${modelName}</div>
            <p style="font-size:12pt;line-height:1.8">${model.description[lang]}</p>
            <div class="product-image-container">
                <img src="images/${img2}" alt="${modelName}" class="product-image" style="max-height:60mm">
            </div>
            <div class="highlight-box">
                <h3>${pageTexts.whyModel[lang]} ${modelName}?</h3>
                <p>${model.highlight[lang]}</p>
            </div>
        </div>
        <span class="page-number">02</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 3: SPEC SHEET -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${pageTexts.specSheet[lang]}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div style="text-align:center;margin-bottom:6mm">
                <div class="model-badge" style="font-size:32pt;padding:5mm 15mm">${modelName}</div>
                <p style="font-size:12pt;color:#666;margin-top:3mm">${pageTexts.dualShaftShredder[lang]}</p>
            </div>
            <div class="big-spec-grid">
                <div class="big-spec-item">
                    <span class="value">${model.motorPower}</span>
                    <span class="label">${lang === 'tr' ? 'Motor Gücü' : lang === 'en' ? 'Motor Power' : lang === 'ru' ? 'Мощность' : 'قوة المحرك'}</span>
                </div>
                <div class="big-spec-item">
                    <span class="value">${model.area}</span>
                    <span class="label">${lang === 'tr' ? 'Parçalama Alanı' : lang === 'en' ? 'Shredding Area' : lang === 'ru' ? 'Зона Измельчения' : 'منطقة التمزيق'}</span>
                </div>
                <div class="big-spec-item">
                    <span class="value">${model.rotorLength}</span>
                    <span class="label">${lang === 'tr' ? 'Rotor Boyu' : lang === 'en' ? 'Rotor Length' : lang === 'ru' ? 'Длина Ротора' : 'طول الدوار'}</span>
                </div>
            </div>
            <div class="spec-card">
                <div class="spec-card-header"><h3>${lang === 'tr' ? 'Detaylı Teknik Özellikler' : lang === 'en' ? 'Detailed Technical Specifications' : lang === 'ru' ? 'Подробные Технические Характеристики' : 'المواصفات الفنية التفصيلية'}</h3></div>
                <div class="spec-row"><span class="label">Model</span><span class="value highlight">${modelName}</span></div>
                <div class="spec-row"><span class="label">${lang === 'tr' ? 'Motor Gücü' : lang === 'en' ? 'Motor Power' : lang === 'ru' ? 'Мощность Двигателя' : 'قوة المحرك'}</span><span class="value">${model.motorPower}</span></div>
                <div class="spec-row"><span class="label">${lang === 'tr' ? 'Parçalama Alanı' : lang === 'en' ? 'Shredding Area' : lang === 'ru' ? 'Зона Измельчения' : 'منطقة التمزيق'}</span><span class="value">${model.area}</span></div>
                <div class="spec-row"><span class="label">${lang === 'tr' ? 'Rotor Boyu' : lang === 'en' ? 'Rotor Length' : lang === 'ru' ? 'Длина Ротора' : 'طول الدوار'}</span><span class="value">${model.rotorLength}</span></div>
            </div>
            <div class="product-image-container">
                <img src="images/${img3}" alt="${modelName}" class="product-image" style="max-height:50mm">
            </div>
        </div>
        <span class="page-number">03</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 4: CONTACT -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${pageTexts.dimensions[lang]}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div class="product-image-container" style="margin-top:0">
                <img src="images/${img4}" alt="${modelName}" class="product-image" style="max-height:70mm">
            </div>
            <div class="two-columns" style="margin-top:6mm">
                <div class="column">
                    <div class="contact-section">
                        <h3>${lang === 'tr' ? 'Bizimle İletişime Geçin' : lang === 'en' ? 'Contact Us' : lang === 'ru' ? 'Свяжитесь С Нами' : 'اتصل بنا'}</h3>
                        <div class="contact-group">
                            <div class="contact-group-title">${lang === 'tr' ? 'ADRES' : lang === 'en' ? 'ADDRESS' : lang === 'ru' ? 'АДРЕС' : 'العنوان'}</div>
                            <p class="address-text">Cumhuriyet Mah., Nazım Hikmet Blv., 1983 Sk. Kent Palas 2 Kat:7 D:85-86, 34512 Esenyurt/İSTANBUL</p>
                        </div>
                        <div class="contact-group">
                            <div class="contact-group-title">${lang === 'tr' ? 'TELEFON' : lang === 'en' ? 'PHONE' : lang === 'ru' ? 'ТЕЛЕФОН' : 'الهاتف'}</div>
                            <p style="font-size:10pt;margin-bottom:1mm">+90 850 259 01 66</p>
                            <p style="font-size:10pt;margin-bottom:0">+90 212 613 31 82</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="contact-section">
                        <h3>&nbsp;</h3>
                        <div class="contact-group">
                            <div class="contact-group-title">WHATSAPP</div>
                            <p style="font-size:11pt;font-weight:700;margin-bottom:0">+90 542 310 99 30</p>
                        </div>
                        <div class="contact-group">
                            <div class="contact-group-title">E-MAIL</div>
                            <p style="font-size:10pt;margin-bottom:0">info@mtmakina.com.tr</p>
                        </div>
                        <div class="website-box">
                            <p>www.mtmakina.com.tr</p>
                            <p class="secondary">www.parcalamamakinesi.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <span class="page-number">04</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>
</body>
</html>`;
}

// Her model için 4 dilde katalog oluştur
const modelIds = Object.keys(models);

modelIds.forEach(modelId => {
    const modelDir = path.join(BASE_DIR, modelId);

    // Dizin yoksa oluştur
    if (!fs.existsSync(modelDir)) {
        fs.mkdirSync(modelDir, { recursive: true });
    }

    // Her dil için katalog oluştur
    (Object.keys(languages) as Array<keyof typeof languages>).forEach(lang => {
        const suffix = languages[lang].suffix;
        const filename = `catalog${suffix}.html`;
        const filepath = path.join(modelDir, filename);

        const html = generateCatalogHTML(modelId, lang);
        fs.writeFileSync(filepath, html, 'utf8');
        console.log(`✅ Created: ${modelId}/${filename}`);
    });
});

console.log('\n🎉 All catalogs generated successfully!');
