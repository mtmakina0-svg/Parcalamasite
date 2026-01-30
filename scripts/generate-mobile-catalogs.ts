/**
 * Mobile Shredder (Mobil Kırıcı) Katalog Script'i
 * TSM-150, TSM-300, CSM-150, CSM-200 için 4 dilde katalog oluşturur
 * Şablon: CS kataloglarıyla aynı (diagonal design, Roboto font, yellow/anthracite)
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_DIR = 'd:/Furkan/WEB SİTESİ/Parcalamasite/public/catalogs/mobile';
const SOURCE_IMAGES_DIR = 'D:/Furkan/WEB SİTESİ/parçalamamakinesi katalog/Mobil kırıcı katalog';

// Model verileri
const models: Record<string, {
    area: string;
    rotorLength: string;
    motorPower: string;
    type: 'single' | 'dual';
    tagline: { tr: string; en: string; ru: string; ar: string };
    description: { tr: string; en: string; ru: string; ar: string };
    highlight: { tr: string; en: string; ru: string; ar: string };
}> = {
    'tsm-150': {
        area: '1500 x 1800 mm',
        rotorLength: '1500 mm',
        motorPower: '400 HP',
        type: 'single',
        tagline: {
            tr: 'Mobil Güç, Sahada Verim',
            en: 'Mobile Power, On-Site Efficiency',
            ru: 'Мобильная Мощность, Эффективность на Месте',
            ar: 'قوة متنقلة، كفاءة في الموقع'
        },
        description: {
            tr: 'TSM-150, tek şaftlı tasarımı ile yüksek verimlilik sunan mobil kırıcı makinesidir. 1500x1800mm parçalama alanı ve 400 HP motor gücü ile zorlu atık işleme operasyonlarında güvenilir performans sağlar.',
            en: 'TSM-150 is a mobile shredder offering high efficiency with its single-shaft design. With 1500x1800mm shredding area and 400 HP motor power, it provides reliable performance in demanding waste processing operations.',
            ru: 'TSM-150 — мобильный измельчитель с одновальной конструкцией, обеспечивающий высокую эффективность. С зоной измельчения 1500x1800мм и мощностью двигателя 400 л.с. обеспечивает надёжную работу.',
            ar: 'TSM-150 هي كسارة متنقلة توفر كفاءة عالية بتصميمها أحادي العمود. مع منطقة تقطيع 1500×1800 مم وقوة محرك 400 حصان.'
        },
        highlight: {
            tr: 'Taşınabilir yapısı sayesinde farklı sahalara kolayca taşınabilir ve yerinde parçalama imkanı sunar. Bu da lojistik maliyetlerini ve iş gücü gereksinimlerini önemli ölçüde azaltır.',
            en: 'Thanks to its portable structure, it can be easily transported to different sites and offers on-site shredding capability. This significantly reduces logistics costs and labor requirements.',
            ru: 'Благодаря портативной конструкции легко транспортируется на разные объекты и обеспечивает измельчение на месте. Это значительно снижает логистические расходы.',
            ar: 'بفضل هيكلها المحمول، يمكن نقلها بسهولة إلى مواقع مختلفة وتوفر إمكانية التقطيع في الموقع. وهذا يقلل تكاليف اللوجستيات بشكل كبير.'
        }
    },
    'tsm-300': {
        area: '3000 x 2000 mm',
        rotorLength: '3000 mm',
        motorPower: '600 HP',
        type: 'single',
        tagline: {
            tr: 'Mega Kapasite, Maksimum Verim',
            en: 'Mega Capacity, Maximum Efficiency',
            ru: 'Мега Мощность, Максимальная Эффективность',
            ar: 'سعة ضخمة، كفاءة قصوى'
        },
        description: {
            tr: 'TSM-300, tek şaftlı serinin en büyük modeli olarak mega kapasiteli mobil kırıcı makinesidir. 3000x2000mm devasa parçalama alanı ve 600 HP motor gücü ile en zorlu endüstriyel atık işleme operasyonlarında üstün performans sağlar.',
            en: 'TSM-300, the largest model in the single-shaft series, is a mega capacity mobile shredder. With its massive 3000x2000mm shredding area and 600 HP motor power, it delivers superior performance in the most demanding industrial waste processing.',
            ru: 'TSM-300, крупнейшая модель в одновальной серии, представляет собой мобильный измельчитель мега-производительности. С огромной зоной измельчения 3000x2000мм и мощностью двигателя 600 л.с.',
            ar: 'TSM-300، أكبر طراز في سلسلة العمود الواحد، هي كسارة متنقلة ضخمة السعة. مع منطقة تقطيع ضخمة 3000×2000 مم وقوة محرك 600 حصان.'
        },
        highlight: {
            tr: 'Büyük hacimli inşaat atıkları, ağaç kütükleri ve endüstriyel atıkları tek seferde parçalama kapasitesine sahiptir. Sahada kullanım için optimize edilmiş tasarımı ile büyük projelerde vazgeçilmez çözüm ortağınız.',
            en: 'Capable of shredding large-volume construction waste, tree trunks, and industrial waste in a single pass. With its design optimized for on-site use, your indispensable solution partner for large projects.',
            ru: 'Способен измельчать крупногабаритные строительные отходы, стволы деревьев и промышленные отходы за один проход. С оптимизированной для работы на месте конструкцией.',
            ar: 'قادرة على تمزيق نفايات البناء كبيرة الحجم وجذوع الأشجار والنفايات الصناعية في مرور واحد. مع تصميمها المحسّن للاستخدام في الموقع.'
        }
    },
    'csm-150': {
        area: '1500 x 1200 mm',
        rotorLength: '1500 mm',
        motorPower: '400 HP',
        type: 'dual',
        tagline: {
            tr: 'Çift Şaft Gücü, Mobil Esneklik',
            en: 'Dual Shaft Power, Mobile Flexibility',
            ru: 'Мощность Двух Валов, Мобильная Гибкость',
            ar: 'قوة العمود المزدوج، مرونة متنقلة'
        },
        description: {
            tr: 'CSM-150, çift şaftlı tasarımı ile karmaşık malzemeleri verimli şekilde işleyen mobil kırıcı makinesidir. 1500x1200mm parçalama alanı ve 400 HP motor gücü ile metal, plastik ve karma atıkların işlenmesinde mükemmel sonuçlar verir.',
            en: 'CSM-150 is a mobile shredder that efficiently processes complex materials with its dual-shaft design. With 1500x1200mm shredding area and 400 HP motor power, it delivers excellent results in processing metal, plastic, and mixed waste.',
            ru: 'CSM-150 — мобильный измельчитель с двухвальной конструкцией для эффективной переработки сложных материалов. С зоной измельчения 1500x1200мм и мощностью двигателя 400 л.с.',
            ar: 'CSM-150 هي كسارة متنقلة تعالج المواد المعقدة بكفاءة بتصميمها ثنائي العمود. مع منطقة تقطيع 1500×1200 مم وقوة محرك 400 حصان.'
        },
        highlight: {
            tr: 'Çift şaftlı yapısı sayesinde metal içeren karmaşık atıkları bile kolayca parçalar. Zıt yönlü dönen rotorlar malzemeleri yakalayarak etkili kesim sağlar.',
            en: 'Thanks to its dual-shaft structure, it easily shreds even complex waste containing metal. Counter-rotating rotors capture materials and ensure effective cutting.',
            ru: 'Благодаря двухвальной конструкции легко измельчает даже сложные отходы, содержащие металл. Противовращающиеся роторы захватывают материалы и обеспечивают эффективную резку.',
            ar: 'بفضل هيكلها ثنائي العمود، تمزق بسهولة حتى النفايات المعقدة التي تحتوي على معادن. الدوارات المتعاكسة تلتقط المواد وتضمن قطعًا فعالًا.'
        }
    },
    'csm-200': {
        area: '2000 x 1800 mm',
        rotorLength: '2000 mm',
        motorPower: '800 HP',
        type: 'dual',
        tagline: {
            tr: 'Endüstriyel Güç, Rakipsiz Performans',
            en: 'Industrial Power, Unrivaled Performance',
            ru: 'Промышленная Мощность, Непревзойдённая Производительность',
            ar: 'قوة صناعية، أداء لا مثيل له'
        },
        description: {
            tr: 'CSM-200, çift şaftlı mobil kırıcı serisinin amiral gemisi modelidir. 2000x1800mm parçalama alanı ve 800 HP motor gücü ile en ağır endüstriyel atık işleme operasyonlarında benzersiz performans sunar.',
            en: 'CSM-200 is the flagship model of the dual-shaft mobile shredder series. With 2000x1800mm shredding area and 800 HP motor power, it delivers unparalleled performance in the heaviest industrial waste processing operations.',
            ru: 'CSM-200 — флагманская модель серии двухвальных мобильных измельчителей. С зоной измельчения 2000x1800мм и мощностью двигателя 800 л.с. обеспечивает непревзойдённую производительность.',
            ar: 'CSM-200 هي الطراز الرائد في سلسلة الكسارات المتنقلة ثنائية العمود. مع منطقة تقطيع 2000×1800 مم وقوة محرك 800 حصان.'
        },
        highlight: {
            tr: '800 HP motor gücü ile serinin en güçlü modeli. Büyük ölçekli geri dönüşüm tesisleri, inşaat sahaları ve belediye atık işleme merkezleri için idealdir.',
            en: 'The most powerful model in the series with 800 HP motor power. Ideal for large-scale recycling facilities, construction sites, and municipal waste processing centers.',
            ru: 'Самая мощная модель в серии с мощностью двигателя 800 л.с. Идеально подходит для крупных перерабатывающих предприятий, строительных площадок и муниципальных центров переработки отходов.',
            ar: 'أقوى طراز في السلسلة بقوة محرك 800 حصان. مثالي لمرافق إعادة التدوير الكبيرة ومواقع البناء ومراكز معالجة النفايات البلدية.'
        }
    }
};

// Dil yapılandırması
const languages = {
    tr: { code: 'tr', suffix: '', locale: 'tr_TR' },
    en: { code: 'en', suffix: '-en', locale: 'en_US' },
    ru: { code: 'ru', suffix: '-ru', locale: 'ru_RU' },
    ar: { code: 'ar', suffix: '-ar', locale: 'ar_SA' }
};

// Sayfa metinleri
const pageTexts = {
    mobileShredder: { tr: 'Mobil Kırıcı', en: 'Mobile Shredder', ru: 'Мобильный Измельчитель', ar: 'الكسارة المتنقلة' },
    productCatalog: { tr: 'ÜRÜN KATALOĞU', en: 'PRODUCT CATALOG', ru: 'КАТАЛОГ ПРОДУКЦИИ', ar: 'كتالوج المنتجات' },
    productIntro: { tr: 'ÜRÜN TANITIMI', en: 'PRODUCT INTRODUCTION', ru: 'ОПИСАНИЕ ПРОДУКТА', ar: 'تقديم المنتج' },
    specSheet: { tr: 'TEKNİK ÖZELLİKLER', en: 'TECHNICAL SPECIFICATIONS', ru: 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ', ar: 'المواصفات الفنية' },
    dimensions: { tr: 'BOYUTLAR VE İLETİŞİM', en: 'DIMENSIONS & CONTACT', ru: 'РАЗМЕРЫ И КОНТАКТЫ', ar: 'الأبعاد والاتصال' },
    whyModel: { tr: 'Neden', en: 'Why', ru: 'Почему', ar: 'لماذا' }
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

    const shaftType = model.type === 'single'
        ? { tr: 'Tek Şaftlı', en: 'Single Shaft', ru: 'Одновальный', ar: 'أحادي العمود' }
        : { tr: 'Çift Şaftlı', en: 'Dual Shaft', ru: 'Двухвальный', ar: 'ثنائي العمود' };

    return `<!DOCTYPE html>
<html lang="${langConfig.code}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="/catalogs/mobile/${modelId}/">
    <title>${modelName} ${pageTexts.mobileShredder[lang]} | MT Makina</title>
    <meta name="description" content="${model.description[lang]}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="author" content="MT Makina">
    <link rel="canonical" href="https://www.parcalamamakinesi.com/catalogs/mobile/${modelId}/catalog${langConfig.suffix}.html">
    <meta property="og:type" content="product">
    <meta property="og:url" content="https://www.parcalamamakinesi.com/catalogs/mobile/${modelId}/catalog${langConfig.suffix}.html">
    <meta property="og:title" content="${modelName} ${pageTexts.mobileShredder[lang]} | MT Makina">
    <meta property="og:description" content="${model.description[lang]}">
    <meta property="og:locale" content="${langConfig.locale}">
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
        .type-badge{display:inline-block;background:var(--dark-anthracite);color:var(--primary-yellow);font-size:10pt;font-weight:700;padding:2mm 4mm;margin-left:4mm;letter-spacing:1px}
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
                <img src="images/${img1}" alt="${modelName} ${pageTexts.mobileShredder[lang]}" class="cover-img">
                <h1 class="cover-model">${modelName}</h1>
                <p class="cover-title">${pageTexts.mobileShredder[lang]}</p>
                <p class="cover-subtitle">${shaftType[lang]} Mobile Shredder</p>
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
            <div class="model-badge">${modelName}</div><span class="type-badge">${shaftType[lang]}</span>
            <p style="font-size:12pt;line-height:1.8;margin-top:6mm">${model.description[lang]}</p>
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
                <p style="font-size:12pt;color:#666;margin-top:3mm">${pageTexts.mobileShredder[lang]} - ${shaftType[lang]}</p>
            </div>
            <div class="big-spec-grid">
                <div class="big-spec-item">
                    <span class="value">${model.motorPower}</span>
                    <span class="label">${lang === 'tr' ? 'Motor Gücü' : lang === 'en' ? 'Motor Power' : lang === 'ru' ? 'Мощность' : 'قوة المحرك'}</span>
                </div>
                <div class="big-spec-item">
                    <span class="value">${model.area}</span>
                    <span class="label">${lang === 'tr' ? 'Parçalama Alanı' : lang === 'en' ? 'Shredding Area' : lang === 'ru' ? 'Зона Измельчения' : 'منطقة التقطيع'}</span>
                </div>
                <div class="big-spec-item">
                    <span class="value">${model.rotorLength}</span>
                    <span class="label">${lang === 'tr' ? 'Rotor Boyu' : lang === 'en' ? 'Rotor Length' : lang === 'ru' ? 'Длина Ротора' : 'طول الدوار'}</span>
                </div>
            </div>
            <div class="spec-card">
                <div class="spec-card-header"><h3>${lang === 'tr' ? 'Detaylı Teknik Özellikler' : lang === 'en' ? 'Detailed Technical Specifications' : lang === 'ru' ? 'Подробные Технические Характеристики' : 'المواصفات الفنية التفصيلية'}</h3></div>
                <div class="spec-row"><span class="label">Model</span><span class="value highlight">${modelName}</span></div>
                <div class="spec-row"><span class="label">${lang === 'tr' ? 'Tasarım' : lang === 'en' ? 'Design' : lang === 'ru' ? 'Конструкция' : 'التصميم'}</span><span class="value">${shaftType[lang]}</span></div>
                <div class="spec-row"><span class="label">${lang === 'tr' ? 'Motor Gücü' : lang === 'en' ? 'Motor Power' : lang === 'ru' ? 'Мощность Двигателя' : 'قوة المحرك'}</span><span class="value">${model.motorPower}</span></div>
                <div class="spec-row"><span class="label">${lang === 'tr' ? 'Parçalama Alanı' : lang === 'en' ? 'Shredding Area' : lang === 'ru' ? 'Зона Измельчения' : 'منطقة التقطيع'}</span><span class="value">${model.area}</span></div>
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

// İmajları kopyala
function copyImages(modelId: string): void {
    const sourceDir = path.join(SOURCE_IMAGES_DIR, modelId);
    const targetDir = path.join(BASE_DIR, modelId, 'images');

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    if (fs.existsSync(sourceDir)) {
        const files = fs.readdirSync(sourceDir)
            .filter(f => f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.jpg'))
            .filter(f => f !== 'Thumbs.db')
            .slice(0, 6);

        files.forEach((file, index) => {
            const sourcePath = path.join(sourceDir, file);
            const targetPath = path.join(targetDir, `${index + 1}.jpeg`);
            fs.copyFileSync(sourcePath, targetPath);
        });
        console.log(`  📷 ${files.length} images copied for ${modelId}`);
    }
}

// Her model için 4 dilde katalog oluştur
console.log('🚀 Mobile Shredder Catalog Generation Started...\n');

const modelIds = Object.keys(models);

modelIds.forEach(modelId => {
    const modelDir = path.join(BASE_DIR, modelId);

    // Dizin yoksa oluştur
    if (!fs.existsSync(modelDir)) {
        fs.mkdirSync(modelDir, { recursive: true });
    }

    // Görselleri kopyala
    copyImages(modelId);

    // Her dil için katalog oluştur
    (Object.keys(languages) as Array<keyof typeof languages>).forEach(lang => {
        const suffix = languages[lang].suffix;
        const filename = `catalog${suffix}.html`;
        const filepath = path.join(modelDir, filename);

        const html = generateCatalogHTML(modelId, lang);
        fs.writeFileSync(filepath, html, 'utf8');
        console.log(`  ✅ Created: ${modelId}/${filename}`);
    });
    console.log('');
});

console.log('🎉 All Mobile Shredder catalogs generated successfully!');
console.log(`   Total: ${modelIds.length} models x ${Object.keys(languages).length} languages = ${modelIds.length * Object.keys(languages).length} catalogs\n`);
