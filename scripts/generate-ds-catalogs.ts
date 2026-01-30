/**
 * DS Serisi (Dört Şaftlı) Katalog Oluşturma Script'i
 * Tüm DS modelleri için 4 dilde katalog oluşturur
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_DIR = 'd:/Furkan/WEB SİTESİ/Parcalamasite/public/catalogs/ds';
const SOURCE_IMAGES_DIR = 'D:/Furkan/WEB SİTESİ/parçalamamakinesi katalog/Dört şaftlı parçalama makinesi katalog';

// Model verileri - her model için benzersiz özellikler
const models: Record<string, {
    area: string;
    rotorLength: string;
    motorPower: string;
    tagline: { tr: string; en: string; ru: string; ar: string };
    description: { tr: string; en: string; ru: string; ar: string };
    highlight: { tr: string; en: string; ru: string; ar: string };
}> = {
    'ds-80': {
        area: '800 x 800 mm',
        rotorLength: '800 mm',
        motorPower: '11 – 22 kW (4x)',
        tagline: {
            tr: 'Dört Şaftın Gücü, Kompakt Tasarım',
            en: 'Four Shaft Power, Compact Design',
            ru: 'Мощь Четырех Валов, Компактный Дизайн',
            ar: 'قوة أربعة أعمدة، تصميم مدمج'
        },
        description: {
            tr: 'DS-80, dört şaftlı parçalama makinesi serisinin kompakt modeli olarak orta ölçekli tesisler için ideal çözüm sunar. 800x800mm parçalama alanı ve dört adet bağımsız motor ile maksimum parçalama verimliliği sağlar. Güvenlik ve hassasiyet gerektiren uygulamalarda üstün performans gösterir.',
            en: 'The DS-80 is the compact model of our four shaft shredder series, offering an ideal solution for medium-sized facilities. With its 800x800mm shredding area and four independent motors, it provides maximum shredding efficiency. It demonstrates superior performance in applications requiring safety and precision.',
            ru: 'DS-80 — компактная модель серии четырехвальных шредеров, предлагающая идеальное решение для средних предприятий. С зоной измельчения 800x800мм и четырьмя независимыми двигателями обеспечивает максимальную эффективность измельчения.',
            ar: 'DS-80 هو النموذج المدمج من سلسلة آلات التمزيق رباعية العمود، ويقدم حلاً مثاليًا للمنشآت متوسطة الحجم. مع منطقة تمزيق 800×800 مم وأربعة محركات مستقلة.'
        },
        highlight: {
            tr: 'Dört şaftlı tasarım sayesinde malzeme geri beslenmesi önlenir ve homojen parça boyutu elde edilir. Hassas belge imhası, plastik ve kauçuk geri dönüşümü için idealdir. Düşük gürültü seviyesi ile ofis ortamlarına uygundur.',
            en: 'Four shaft design prevents material feedback and achieves homogeneous particle size. Ideal for confidential document destruction, plastic and rubber recycling. Suitable for office environments with low noise levels.',
            ru: 'Четырехвальная конструкция предотвращает обратную подачу материала и обеспечивает однородный размер частиц. Идеально подходит для уничтожения конфиденциальных документов, переработки пластика и резины.',
            ar: 'تصميم أربعة أعمدة يمنع ارتداد المواد ويحقق حجم جزيئات متجانس. مثالي لتدمير المستندات السرية وإعادة تدوير البلاستيك والمطاط.'
        }
    },
    'ds-100': {
        area: '1000 x 1000 mm',
        rotorLength: '1000 mm',
        motorPower: '22 – 45 kW (4x)',
        tagline: {
            tr: 'Endüstriyel Güç, Hassas Parçalama',
            en: 'Industrial Power, Precise Shredding',
            ru: 'Промышленная Мощь, Точное Измельчение',
            ar: 'قوة صناعية، تمزيق دقيق'
        },
        description: {
            tr: 'DS-100, endüstriyel ölçekli dört şaftlı parçalama makinesidir. 1000x1000mm geniş parçalama alanı ve 4x22-45kW motor gücü ile yüksek kapasiteli atık işleme sunar. Plastik, kauçuk, lastik ve kompozit malzemelerin parçalanmasında mükemmel sonuçlar verir.',
            en: 'The DS-100 is an industrial-scale four shaft shredder. With its 1000x1000mm wide shredding area and 4x22-45kW motor power, it offers high-capacity waste processing. It delivers excellent results in shredding plastic, rubber, tires, and composite materials.',
            ru: 'DS-100 — четырехвальный шредер промышленного масштаба. С широкой зоной измельчения 1000x1000мм и мощностью двигателя 4x22-45кВт обеспечивает высокопроизводительную переработку отходов.',
            ar: 'DS-100 هي آلة تمزيق رباعية العمود بمقياس صناعي. مع منطقة تمزيق واسعة 1000×1000 مم وقوة محرك 4×22-45 كيلوواط.'
        },
        highlight: {
            tr: 'Dört bağımsız tahrik ünitesi ile her türlü malzemede kesintisiz çalışma garantisi. Otomatik ters dönüş sistemi tıkanmaları önler. E-atık, lastik ve ağır plastik uygulamalarında tercih edilir.',
            en: 'Four independent drive units guarantee uninterrupted operation with all materials. Automatic reverse system prevents blockages. Preferred for e-waste, tire, and heavy plastic applications.',
            ru: 'Четыре независимых привода гарантируют бесперебойную работу с любыми материалами. Автоматическая система реверса предотвращает заторы. Предпочтителен для электронных отходов, шин и тяжелого пластика.',
            ar: 'أربع وحدات دفع مستقلة تضمن التشغيل المستمر مع جميع المواد. نظام الانعكاس التلقائي يمنع الانسداد. مفضل للنفايات الإلكترونية والإطارات والبلاستيك الثقيل.'
        }
    },
    'ds-150': {
        area: '1500 x 1500 mm',
        rotorLength: '1500 mm',
        motorPower: '45 – 132 kW (4x)',
        tagline: {
            tr: 'Yüksek Kapasite, Maksimum Verim',
            en: 'High Capacity, Maximum Efficiency',
            ru: 'Высокая Производительность, Максимальная Эффективность',
            ar: 'سعة عالية، كفاءة قصوى'
        },
        description: {
            tr: 'DS-150, büyük ölçekli geri dönüşüm tesisleri için tasarlanmış yüksek kapasiteli dört şaftlı parçalama makinesidir. 1500x1500mm parçalama alanı ve 4x45-132kW motor gücü ile saatte tonlarca atık işleyebilir. Belediye atığı, endüstriyel hurda ve hacimli malzemeler için optimal çözüm.',
            en: 'The DS-150 is a high-capacity four shaft shredder designed for large-scale recycling plants. With its 1500x1500mm shredding area and 4x45-132kW motor power, it can process tons of waste per hour. Optimal solution for municipal waste, industrial scrap, and bulky materials.',
            ru: 'DS-150 — высокопроизводительный четырехвальный шредер, разработанный для крупных перерабатывающих предприятий. С зоной измельчения 1500x1500мм и мощностью двигателя 4x45-132кВт может обрабатывать тонны отходов в час.',
            ar: 'DS-150 هي آلة تمزيق رباعية العمود عالية السعة مصممة لمصانع إعادة التدوير الكبيرة. مع منطقة تمزيق 1500×1500 مم وقوة محرك 4×45-132 كيلوواط.'
        },
        highlight: {
            tr: 'Dört şaftın senkronize çalışması ile zorlu malzemelerde bile tıkanma olmaz. Hurda araç parçalama, büyük lastik geri dönüşümü ve karışık atık tesisleri için en çok tercih edilen model. Hidrolik baskı ünitesi opsiyonu ile besleme verimliliği artırılabilir.',
            en: 'Synchronized operation of four shafts prevents blockage even with difficult materials. Most preferred model for scrap vehicle shredding, large tire recycling, and mixed waste facilities. Feeding efficiency can be increased with hydraulic pusher unit option.',
            ru: 'Синхронная работа четырех валов предотвращает засорение даже при работе со сложными материалами. Наиболее предпочтительная модель для измельчения автомобилей, переработки крупных шин и смешанных отходов.',
            ar: 'التشغيل المتزامن لأربعة أعمدة يمنع الانسداد حتى مع المواد الصعبة. النموذج الأكثر تفضيلاً لتمزيق السيارات الخردة وإعادة تدوير الإطارات الكبيرة ومرافق النفايات المختلطة.'
        }
    },
    'ds-200': {
        area: '2000 x 2000 mm',
        rotorLength: '2000 mm',
        motorPower: '75 – 160 kW (4x)',
        tagline: {
            tr: 'Serinin Amiral Gemisi',
            en: 'The Flagship of the Series',
            ru: 'Флагман Серии',
            ar: 'الرائد في السلسلة'
        },
        description: {
            tr: 'DS-200, dört şaftlı parçalama makinesi serisinin en büyük ve en güçlü modelidir. 2000x2000mm dev parçalama alanı ve 4x75-160kW motor gücü ile mega ölçekli projelerin tüm ihtiyaçlarını karşılar. Uluslararası standartlarda geri dönüşüm kompleksleri için ultimate çözüm.',
            en: 'The DS-200 is the largest and most powerful model in our four shaft shredder series. With its giant 2000x2000mm shredding area and 4x75-160kW motor power, it meets all needs of mega-scale projects. The ultimate solution for international-standard recycling complexes.',
            ru: 'DS-200 — самая большая и мощная модель в серии четырехвальных шредеров. С гигантской зоной измельчения 2000x2000мм и мощностью двигателя 4x75-160кВт удовлетворяет все потребности мега-проектов.',
            ar: 'DS-200 هي أكبر وأقوى طراز في سلسلة آلات التمزيق رباعية العمود. مع منطقة تمزيق عملاقة 2000×2000 مم وقوة محرك 4×75-160 كيلوواط.'
        },
        highlight: {
            tr: 'Maksimum güç ve kapasite arayanlar için tasarlandı. Hurda araçlar, büyük metal yapılar, yoğun plastik bloklar, karışık belediye atıkları ve endüstriyel proseslerin tamamını tek makinede yönetir. 7/24 kesintisiz operasyon için tasarlanmış dayanıklı yapı. Türkiye ve dünyada mega tesislerde güvenle kullanılmaktadır.',
            en: 'Designed for those seeking maximum power and capacity. Manages scrap vehicles, large metal structures, dense plastic blocks, mixed municipal waste, and entire industrial processes in a single machine. Durable construction designed for 24/7 uninterrupted operation. Trusted in mega facilities in Turkey and worldwide.',
            ru: 'Создан для тех, кто ищет максимальную мощность и производительность. Управляет автомобилями на металлолом, крупными металлоконструкциями, плотными пластиковыми блоками, смешанными муниципальными отходами и всеми промышленными процессами в одной машине.',
            ar: 'مصمم لمن يبحثون عن أقصى قوة وسعة. يدير السيارات الخردة والهياكل المعدنية الكبيرة والكتل البلاستيكية الكثيفة والنفايات البلدية المختلطة وجميع العمليات الصناعية في آلة واحدة.'
        }
    }
};

// Opsiyonel özellikler
const optionalFeatures = {
    tr: [
        'Kayış Kasnaklı Hidrolik Kaplin',
        'Rotor Soğutma Sistemi',
        'Otomatik Yağlama Ünitesi',
        'Hidrolik Baskı Ünitesi',
        'Farklı Ölçülerde Elek',
        'Cıvatalı sökülebilen bıçak tasarımı',
        'Hidromotor tahrik sistemi',
        'Ofis ve endüstriyel tip şase tasarımı',
        'Çıkış İçin Konveyör Uygulamaları'
    ],
    en: [
        'Belt Pulley Hydraulic Coupling',
        'Rotor Cooling System',
        'Automatic Lubrication Unit',
        'Hydraulic Pusher Unit',
        'Various Screen Sizes',
        'Bolt-on removable blade design',
        'Hydromotor drive system',
        'Office and industrial type chassis design',
        'Conveyor Applications for Output'
    ],
    ru: [
        'Ременная гидравлическая муфта',
        'Система охлаждения ротора',
        'Автоматическая система смазки',
        'Гидравлический толкатель',
        'Сита разных размеров',
        'Съемные ножи на болтах',
        'Гидромоторный привод',
        'Офисное и промышленное шасси',
        'Конвейерные системы выгрузки'
    ],
    ar: [
        'وصلة هيدروليكية بكرة السير',
        'نظام تبريد الدوار',
        'وحدة التشحيم التلقائي',
        'وحدة الدفع الهيدروليكية',
        'أحجام شاشات مختلفة',
        'تصميم شفرات قابلة للإزالة بالمسامير',
        'نظام دفع هيدروموتور',
        'تصميم هيكل مكتبي وصناعي',
        'تطبيقات الناقل للإخراج'
    ]
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
    optionalFeatures: { tr: 'Opsiyonel Özellikler', en: 'Optional Features', ru: 'Опциональные Функции', ar: 'الميزات الاختيارية' },
    technicalDetails: { tr: 'Teknik Detaylar', en: 'Technical Details', ru: 'Технические Детали', ar: 'التفاصيل التقنية' },
    specSheet: { tr: 'Teknik Kimlik Kartı', en: 'Technical Specification Sheet', ru: 'Технический Паспорт', ar: 'ورقة المواصفات الفنية' },
    dimensions: { tr: 'Boyutlar ve İletişim', en: 'Dimensions and Contact', ru: 'Размеры и Контакты', ar: 'الأبعاد والاتصال' },
    quadShaftShredder: { tr: 'Dört Şaftlı Parçalama Makinesi', en: 'Four Shaft Shredder', ru: 'Четырехвальный Шредер', ar: 'آلة تمزيق رباعية العمود' },
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

    // Opsiyonel özellikler listesini oluştur
    const optFeaturesList = optionalFeatures[lang].map(f => `<li>${f}</li>`).join('\n                        ');

    return `<!DOCTYPE html>
<html lang="${langConfig.code}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="/catalogs/ds/${modelId}/">
    <title>${modelName} ${pageTexts.quadShaftShredder[lang]} | MT Makina</title>
    <meta name="description" content="${model.description[lang]}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="googlebot" content="index, follow">
    <meta name="author" content="MT Makina">
    <link rel="canonical" href="https://www.parcalamamakinesi.com/catalogs/ds/${modelId}/catalog${langConfig.suffix}.html">
    <meta property="og:type" content="product">
    <meta property="og:url" content="https://www.parcalamamakinesi.com/catalogs/ds/${modelId}/catalog${langConfig.suffix}.html">
    <meta property="og:title" content="${modelName} ${pageTexts.quadShaftShredder[lang]} | MT Makina">
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
        .optional-features ul{list-style:none;padding:0;margin:0}
        .optional-features li{padding:3mm 0 3mm 8mm;border-bottom:1px solid var(--border-gray);position:relative;font-size:10pt}
        .optional-features li::before{content:'✓';position:absolute;left:0;color:var(--primary-yellow);font-weight:700}
        .optional-features li:last-child{border-bottom:none}
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
                <img src="images/${img1}" alt="${modelName} ${pageTexts.quadShaftShredder[lang]}" class="cover-img">
                <h1 class="cover-model">${modelName}</h1>
                <p class="cover-title">${pageTexts.quadShaftShredder[lang]}</p>
                <p class="cover-subtitle">Four Shaft Shredder</p>
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
                <p style="font-size:12pt;color:#666;margin-top:3mm">${pageTexts.quadShaftShredder[lang]}</p>
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
                <div class="spec-row"><span class="label">${lang === 'tr' ? 'Şaft Sayısı' : lang === 'en' ? 'Number of Shafts' : lang === 'ru' ? 'Количество Валов' : 'عدد الأعمدة'}</span><span class="value">4</span></div>
            </div>
            <div class="product-image-container">
                <img src="images/${img3}" alt="${modelName}" class="product-image" style="max-height:45mm">
            </div>
        </div>
        <span class="page-number">03</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 4: OPTIONAL FEATURES & CONTACT -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${pageTexts.optionalFeatures[lang]}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div class="two-columns">
                <div class="column">
                    <div class="optional-features">
                        <ul>
                        ${optFeaturesList}
                        </ul>
                    </div>
                    <div class="product-image-container" style="margin-top:6mm">
                        <img src="images/${img4}" alt="${modelName}" class="product-image" style="max-height:55mm">
                    </div>
                </div>
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

// Görsel dizini oluştur ve kopyala
function setupImages(modelId: string) {
    const targetDir = path.join(BASE_DIR, modelId, 'images');

    // Dizin yoksa oluştur
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    // Kaynak görselleri kopyala
    try {
        const sourceImages = fs.readdirSync(SOURCE_IMAGES_DIR);
        sourceImages.forEach(img => {
            const sourcePath = path.join(SOURCE_IMAGES_DIR, img);
            const targetPath = path.join(targetDir, img);
            if (!fs.existsSync(targetPath)) {
                fs.copyFileSync(sourcePath, targetPath);
                console.log(`  📷 Copied: ${img}`);
            }
        });
    } catch (e) {
        console.log(`  ⚠️ Could not copy images for ${modelId}`);
    }
}

// Ana katalog dizini oluştur
if (!fs.existsSync(BASE_DIR)) {
    fs.mkdirSync(BASE_DIR, { recursive: true });
}

// Her model için katalog oluştur
const modelIds = Object.keys(models);

modelIds.forEach(modelId => {
    console.log(`\n📁 Processing ${modelId.toUpperCase()}...`);

    const modelDir = path.join(BASE_DIR, modelId);

    // Dizin yoksa oluştur
    if (!fs.existsSync(modelDir)) {
        fs.mkdirSync(modelDir, { recursive: true });
    }

    // Görselleri kopyala
    setupImages(modelId);

    // Her dil için katalog oluştur
    (Object.keys(languages) as Array<keyof typeof languages>).forEach(lang => {
        const suffix = languages[lang].suffix;
        const filename = `catalog${suffix}.html`;
        const filepath = path.join(modelDir, filename);

        const html = generateCatalogHTML(modelId, lang);
        fs.writeFileSync(filepath, html, 'utf8');
        console.log(`  ✅ Created: ${filename}`);
    });
});

console.log('\n🎉 All DS catalogs generated successfully!');
