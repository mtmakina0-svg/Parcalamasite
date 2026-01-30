/**
 * Mobile Catalog 7-Page HTML Template Generator
 * Full template matching _SABLON design
 */

interface LanguageConfig {
    code: string;
    suffix: string;
    locale: string;
}

// Sayfa metinleri
const pageTexts = {
    mobileShredder: { tr: 'Mobil Kırıcı', en: 'Mobile Shredder', ru: 'Мобильный Измельчитель', ar: 'الكسارة المتنقلة' },
    productCatalog: { tr: 'ÜRÜN KATALOĞU', en: 'PRODUCT CATALOG', ru: 'КАТАЛОГ ПРОДУКЦИИ', ar: 'كتالوج المنتجات' },
    productIntro: { tr: 'ÜRÜN TANITIMI', en: 'PRODUCT INTRODUCTION', ru: 'ОПИСАНИЕ ПРОДУКТА', ar: 'تقديم المنتج' },
    applications: { tr: 'UYGULAMA ALANLARI', en: 'APPLICATION AREAS', ru: 'ОБЛАСТИ ПРИМЕНЕНИЯ', ar: 'مجالات التطبيق' },
    technicalDetails: { tr: 'TEKNİK DETAYLAR', en: 'TECHNICAL DETAILS', ru: 'ТЕХНИЧЕСКИЕ ДЕТАЛИ', ar: 'التفاصيل الفنية' },
    specSheet: { tr: 'TEKNİK KİMLİK KARTI', en: 'TECHNICAL SPECIFICATIONS', ru: 'ТЕХНИЧЕСКИЙ ПАСПОРТ', ar: 'بطاقة المواصفات الفنية' },
    references: { tr: 'REFERANSLARIMIZ', en: 'OUR REFERENCES', ru: 'НАШИ РЕФЕРЕНЦИИ', ar: 'مراجعنا' },
    dimensions: { tr: 'BOYUTLAR VE İLETİŞİM', en: 'DIMENSIONS & CONTACT', ru: 'РАЗМЕРЫ И КОНТАКТЫ', ar: 'الأبعاد والاتصال' },
    whyModel: { tr: 'Neden', en: 'Why', ru: 'Почему', ar: 'لماذا' },
    materials: { tr: 'Parçalanabilir Malzemeler', en: 'Processable Materials', ru: 'Перерабатываемые Материалы', ar: 'المواد القابلة للمعالجة' },
    advantages: { tr: 'Avantajları', en: 'Advantages', ru: 'Преимущества', ar: 'المزايا' },
    standardFeatures: { tr: 'Standart Donanım', en: 'Standard Equipment', ru: 'Стандартное Оснащение', ar: 'المعدات القياسية' },
    optionalFeatures: { tr: 'Opsiyonel Özellikler', en: 'Optional Features', ru: 'Опциональные Функции', ar: 'الميزات الاختيارية' },
    detailedSpecs: { tr: 'Detaylı Teknik Özellikler', en: 'Detailed Technical Specifications', ru: 'Подробные Технические Характеристики', ar: 'المواصفات الفنية التفصيلية' },
    trustedPartner: { tr: 'Güvenilir Çözüm Ortağınız', en: 'Your Trusted Solution Partner', ru: 'Ваш Надёжный Партнёр', ar: 'شريكك الموثوق' },
    contactUs: { tr: 'Bizimle İletişime Geçin', en: 'Contact Us', ru: 'Свяжитесь С Нами', ar: 'اتصل بنا' },
    motorPower: { tr: 'Motor Gücü', en: 'Motor Power', ru: 'Мощность Двигателя', ar: 'قوة المحرك' },
    capacity: { tr: 'Kapasite', en: 'Capacity', ru: 'Производительность', ar: 'السعة' },
    weight: { tr: 'Ağırlık', en: 'Weight', ru: 'Вес', ar: 'الوزن' },
    rotorLength: { tr: 'Rotor Boyu', en: 'Rotor Length', ru: 'Длина Ротора', ar: 'طول الدوار' },
    shreddingArea: { tr: 'Parçalama Alanı', en: 'Shredding Area', ru: 'Зона Измельчения', ar: 'منطقة التمزيق' },
    design: { tr: 'Tasarım', en: 'Design', ru: 'Конструкция', ar: 'التصميم' },
    singleShaft: { tr: 'Tek Şaftlı', en: 'Single Shaft', ru: 'Одновальный', ar: 'أحادي العمود' },
    dualShaft: { tr: 'Çift Şaftlı', en: 'Dual Shaft', ru: 'Двухвальный', ar: 'ثنائي العمود' },
    address: { tr: 'ADRES', en: 'ADDRESS', ru: 'АДРЕС', ar: 'العنوان' },
    phone: { tr: 'TELEFON', en: 'PHONE', ru: 'ТЕЛЕФОН', ar: 'الهاتف' },
    headquarters: { tr: 'GENEL MERKEZ', en: 'HEADQUARTERS', ru: 'ГЛАВНЫЙ ОФИС', ar: 'المقر الرئيسي' },
    sales: { tr: 'SATIŞ', en: 'SALES', ru: 'ПРОДАЖИ', ar: 'المبيعات' },
    email: { tr: 'E-POSTA', en: 'E-MAIL', ru: 'ЭЛ. ПОЧТА', ar: 'البريد الإلكتروني' },
    freeInspection: { tr: 'Ücretsiz Keşif', en: 'Free Inspection', ru: 'Бесплатный Осмотр', ar: 'فحص مجاني' },
    freeInspectionDesc: { tr: 'İhtiyaçlarınıza uygun çözüm için ücretsiz keşif hizmetimizden yararlanın.', en: 'Take advantage of our free site inspection service for a solution tailored to your needs.', ru: 'Воспользуйтесь нашей бесплатной услугой осмотра для решения, адаптированного к вашим потребностям.', ar: 'استفد من خدمة الفحص المجاني للحصول على حل مناسب لاحتياجاتك.' },
    referencesIntro: { tr: 'Türkiye\'nin ve dünyanın önde gelen kurum ve kuruluşları MT Makina\'yı tercih ediyor.', en: 'Leading institutions and organizations from Turkey and the world prefer MT Makina.', ru: 'Ведущие учреждения и организации Турции и мира выбирают MT Makina.', ar: 'المؤسسات والمنظمات الرائدة من تركيا والعالم تفضل MT Makina.' },
    note: { tr: 'Not', en: 'Note', ru: 'Примечание', ar: 'ملاحظة' },
    noteText: { tr: 'Kapasite değerleri malzeme türüne, boyutuna ve yoğunluğuna göre değişiklik gösterebilir. Projenize özel teknik detaylar için satış ekibimizle iletişime geçiniz.', en: 'Capacity values may vary depending on material type, size, and density. Contact our sales team for project-specific technical details.', ru: 'Значения производительности могут варьироваться в зависимости от типа материала, размера и плотности. Свяжитесь с нашим отделом продаж для получения технических деталей по вашему проекту.', ar: 'قد تختلف قيم السعة اعتمادًا على نوع المواد والحجم والكثافة. اتصل بفريق المبيعات لدينا للحصول على التفاصيل الفنية الخاصة بمشروعك.' }
};

export function generateFullHTML(modelId: string, lang: string, model: any, langConfig: LanguageConfig): string {
    const modelName = modelId.toUpperCase();
    const shaftType = model.type === 'single' ? pageTexts.singleShaft : pageTexts.dualShaft;

    // Images
    const img1 = '1.jpeg', img2 = '2.jpeg', img3 = '3.jpeg', img4 = '4.jpeg', img5 = '5.jpeg', img6 = '6.jpeg';

    return `<!DOCTYPE html>
<html lang="${langConfig.code}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="/catalogs/mobile/${modelId}/">
    <title>${modelName} ${pageTexts.mobileShredder[lang as keyof typeof pageTexts.mobileShredder]} | MT Makina</title>
    <meta name="description" content="${model.description[lang]}">
    <meta name="keywords" content="${modelName}, mobile shredder, mobil kırıcı, ${model.type === 'single' ? 'tek şaftlı' : 'çift şaftlı'}, MT Makina, parçalama makinesi">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="author" content="MT Makina">
    <link rel="canonical" href="https://www.parcalamamakinesi.com/catalogs/mobile/${modelId}/catalog${langConfig.suffix}.html">
    <meta property="og:type" content="product">
    <meta property="og:url" content="https://www.parcalamamakinesi.com/catalogs/mobile/${modelId}/catalog${langConfig.suffix}.html">
    <meta property="og:title" content="${modelName} ${pageTexts.mobileShredder[lang as keyof typeof pageTexts.mobileShredder]} | MT Makina">
    <meta property="og:description" content="${model.description[lang]}">
    <meta property="og:locale" content="${langConfig.locale}">
    <meta property="og:site_name" content="MT Makina">
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
        h4{font-size:11pt;font-weight:700;color:var(--dark-anthracite);margin-bottom:2mm}
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
        .big-spec-item .value{font-size:18pt;font-weight:900;color:var(--primary-yellow);display:block;margin-bottom:2mm}
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
        .material-list{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);gap:2mm;margin-top:4mm}
        .material-list li{font-size:10pt;padding:2mm 3mm;background:var(--light-gray);border-left:3px solid var(--primary-yellow)}
        .app-card{background:var(--light-gray);padding:4mm;border-radius:4px;margin-bottom:4mm}
        .app-card h4{color:var(--dark-anthracite);margin-bottom:2mm}
        .app-card p{font-size:9pt;color:#555;margin-bottom:0}
        .callout-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:4mm}
        .callout-box{background:var(--light-gray);padding:4mm;border-left:3px solid var(--primary-yellow)}
        .callout-box strong{display:block;font-size:10pt;color:var(--dark-anthracite);margin-bottom:2mm}
        .callout-box span{font-size:9pt;color:#555;line-height:1.4}
        .specs-list{list-style:none}
        .specs-list li{display:flex;justify-content:space-between;padding:3mm 0;border-bottom:1px solid var(--border-gray)}
        .specs-list li:last-child{border-bottom:none}
        .spec-label{font-size:10pt;color:#666}
        .spec-value{font-size:10pt;font-weight:700;color:var(--dark-anthracite)}
        .references-intro{text-align:center;margin-bottom:8mm}
        .references-intro p{font-size:12pt;color:#666}
        .references-count{display:inline-block;background:var(--primary-yellow);color:var(--dark-anthracite);font-weight:700;padding:2mm 6mm;border-radius:3px;margin-top:3mm}
        .references-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:4mm}
        .reference-logo{background:var(--white);border:1px solid var(--border-gray);padding:3mm;border-radius:4px;display:flex;align-items:center;justify-content:center;min-height:15mm}
        .reference-logo img{max-width:100%;max-height:12mm;object-fit:contain}
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
                <img src="images/${img1}" alt="${modelName} ${pageTexts.mobileShredder[lang as keyof typeof pageTexts.mobileShredder]}" class="cover-img">
                <h1 class="cover-model">${modelName}</h1>
                <p class="cover-title">${pageTexts.mobileShredder[lang as keyof typeof pageTexts.mobileShredder]}</p>
                <p class="cover-subtitle">${shaftType[lang as keyof typeof shaftType]} Mobile Shredder</p>
                <div class="cover-series">${pageTexts.productCatalog[lang as keyof typeof pageTexts.productCatalog]}</div>
            </div>
            <p class="cover-tagline">${model.tagline[lang]}</p>
        </div>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 2: PRODUCT INTRO -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${pageTexts.productIntro[lang as keyof typeof pageTexts.productIntro]}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div class="model-badge">${modelName}</div>
            <p style="font-size:12pt;line-height:1.8">${model.description[lang]}</p>
            <div class="product-image-container">
                <img src="images/${img2}" alt="${modelName}" class="product-image" style="max-height:55mm">
            </div>
            <div class="highlight-box">
                <h3>${pageTexts.whyModel[lang as keyof typeof pageTexts.whyModel]} ${modelName}?</h3>
                <p>${model.highlight[lang]}</p>
            </div>
            <div class="feature-grid">
                ${model.features[lang].slice(0, 4).map((f: any) => `
                <div class="feature-box">
                    <h4>${f.title}</h4>
                    <p>${f.desc}</p>
                </div>`).join('')}
            </div>
            <h3 style="margin-top:6mm">${modelName} ${pageTexts.materials[lang as keyof typeof pageTexts.materials]}</h3>
            <ul class="material-list">
                ${model.materials[lang].map((m: string) => `<li>${m}</li>`).join('')}
            </ul>
        </div>
        <span class="page-number">02</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 3: APPLICATION AREAS -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${pageTexts.applications[lang as keyof typeof pageTexts.applications]}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <p>${modelName}, ${model.type === 'single' ? (lang === 'tr' ? 'tek şaftlı yapısı' : lang === 'en' ? 'single-shaft design' : lang === 'ru' ? 'одновальная конструкция' : 'تصميم أحادي العمود') : (lang === 'tr' ? 'çift şaftlı yapısı' : lang === 'en' ? 'dual-shaft design' : lang === 'ru' ? 'двухвальная конструкция' : 'تصميم ثنائي العمود')} ${lang === 'tr' ? 'sayesinde aşağıdaki alanlarda tercih edilmektedir:' : lang === 'en' ? 'is preferred in the following areas:' : lang === 'ru' ? 'предпочтителен в следующих областях:' : 'مفضل في المجالات التالية:'}</p>
            <div class="two-columns" style="margin-top:6mm">
                <div class="column">
                    <div class="product-image-container" style="margin:0 0 3mm 0">
                        <img src="images/${img3}" alt="${modelName}" class="product-image" style="max-height:45mm;border-radius:4px">
                    </div>
                    <div class="app-card">
                        <h4>${model.applications[lang][0].title}</h4>
                        <p>${model.applications[lang][0].desc}</p>
                    </div>
                </div>
                <div class="column">
                    <div class="product-image-container" style="margin:0 0 3mm 0">
                        <img src="images/${img4}" alt="${modelName}" class="product-image" style="max-height:45mm;border-radius:4px">
                    </div>
                    <div class="app-card">
                        <h4>${model.applications[lang][1].title}</h4>
                        <p>${model.applications[lang][1].desc}</p>
                    </div>
                </div>
            </div>
            <div class="two-columns" style="margin-top:6mm">
                <div class="column">
                    <div class="app-card">
                        <h4>${model.applications[lang][2].title}</h4>
                        <p>${model.applications[lang][2].desc}</p>
                    </div>
                </div>
                <div class="column">
                    <div class="app-card">
                        <h4>${model.applications[lang][3].title}</h4>
                        <p>${model.applications[lang][3].desc}</p>
                    </div>
                </div>
            </div>
            <div class="highlight-box" style="margin-top:6mm;text-align:center">
                <h3>${modelName} ${pageTexts.advantages[lang as keyof typeof pageTexts.advantages]}</h3>
                <p>• ${lang === 'tr' ? 'Sahada bağımsız çalışma' : lang === 'en' ? 'Independent on-site operation' : lang === 'ru' ? 'Автономная работа на объекте' : 'تشغيل مستقل في الموقع'} &nbsp;&nbsp;• ${lang === 'tr' ? 'Yüksek işleme kapasitesi' : lang === 'en' ? 'High processing capacity' : lang === 'ru' ? 'Высокая производительность' : 'قدرة معالجة عالية'} &nbsp;&nbsp;• ${lang === 'tr' ? 'Düşük işletme maliyeti' : lang === 'en' ? 'Low operating cost' : lang === 'ru' ? 'Низкие эксплуатационные расходы' : 'تكلفة تشغيل منخفضة'}<br>• ${lang === 'tr' ? 'Kolay nakliye ve kurulum' : lang === 'en' ? 'Easy transport and setup' : lang === 'ru' ? 'Лёгкая транспортировка и установка' : 'نقل وإعداد سهل'} &nbsp;&nbsp;• ${lang === 'tr' ? 'Minimum bakım gereksinimi' : lang === 'en' ? 'Minimum maintenance requirement' : lang === 'ru' ? 'Минимальные требования к обслуживанию' : 'متطلبات صيانة دنيا'}</p>
            </div>
            <div class="product-image-container" style="margin-top:6mm">
                <img src="images/${img5}" alt="${modelName}" class="product-image" style="max-height:45mm">
            </div>
        </div>
        <span class="page-number">03</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 4: TECHNICAL DETAILS -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${pageTexts.technicalDetails[lang as keyof typeof pageTexts.technicalDetails]}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div class="product-image-container">
                <img src="images/${img2}" alt="${modelName}" class="product-image" style="max-height:65mm">
            </div>
            <div class="callout-grid">
                ${model.features[lang].map((f: any) => `
                <div class="callout-box">
                    <strong>${f.title}</strong>
                    <span>${f.desc}</span>
                </div>`).join('')}
            </div>
            <div class="two-columns" style="margin-top:6mm">
                <div class="column">
                    <h3>${pageTexts.standardFeatures[lang as keyof typeof pageTexts.standardFeatures]}</h3>
                    <ul class="specs-list">
                        <li><span class="spec-label">${lang === 'tr' ? 'Gövde Malzemesi' : lang === 'en' ? 'Body Material' : lang === 'ru' ? 'Материал корпуса' : 'مادة الجسم'}</span><span class="spec-value">St-52 ${lang === 'tr' ? 'Çelik' : lang === 'en' ? 'Steel' : lang === 'ru' ? 'Сталь' : 'فولاذ'}</span></li>
                        <li><span class="spec-label">${lang === 'tr' ? 'Bıçak Malzemesi' : lang === 'en' ? 'Blade Material' : lang === 'ru' ? 'Материал ножей' : 'مادة الشفرات'}</span><span class="spec-value">Hardox 500</span></li>
                        <li><span class="spec-label">${lang === 'tr' ? 'Tahrik Sistemi' : lang === 'en' ? 'Drive System' : lang === 'ru' ? 'Привод' : 'نظام القيادة'}</span><span class="spec-value">${lang === 'tr' ? 'Dizel Hidrolik' : lang === 'en' ? 'Diesel Hydraulic' : lang === 'ru' ? 'Дизель-гидравлический' : 'ديزل هيدروليكي'}</span></li>
                        <li><span class="spec-label">${lang === 'tr' ? 'Kontrol Sistemi' : lang === 'en' ? 'Control System' : lang === 'ru' ? 'Система управления' : 'نظام التحكم'}</span><span class="spec-value">PLC + HMI</span></li>
                    </ul>
                </div>
                <div class="column">
                    <h3>${pageTexts.optionalFeatures[lang as keyof typeof pageTexts.optionalFeatures]}</h3>
                    <ul class="specs-list">
                        ${model.optionalFeatures[lang].slice(0, 4).map((f: string) => `<li><span class="spec-label">${f}</span><span class="spec-value">✓</span></li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
        <span class="page-number">04</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 5: SPEC SHEET -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${pageTexts.specSheet[lang as keyof typeof pageTexts.specSheet]}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div style="text-align:center;margin-bottom:6mm">
                <div class="model-badge" style="font-size:32pt;padding:5mm 15mm">${modelName}</div>
                <p style="font-size:12pt;color:#666;margin-top:3mm">${pageTexts.mobileShredder[lang as keyof typeof pageTexts.mobileShredder]} | ${shaftType[lang as keyof typeof shaftType]}</p>
            </div>
            <div class="big-spec-grid">
                <div class="big-spec-item">
                    <span class="value">${model.motorPower}</span>
                    <span class="label">${pageTexts.motorPower[lang as keyof typeof pageTexts.motorPower]}</span>
                </div>
                <div class="big-spec-item">
                    <span class="value">${model.capacity}</span>
                    <span class="label">${pageTexts.capacity[lang as keyof typeof pageTexts.capacity]}</span>
                </div>
                <div class="big-spec-item">
                    <span class="value">${model.weight}</span>
                    <span class="label">${pageTexts.weight[lang as keyof typeof pageTexts.weight]}</span>
                </div>
            </div>
            <div class="spec-card">
                <div class="spec-card-header"><h3>${pageTexts.detailedSpecs[lang as keyof typeof pageTexts.detailedSpecs]}</h3></div>
                <div class="spec-row"><span class="label">Model</span><span class="value highlight">${modelName}</span></div>
                <div class="spec-row"><span class="label">${pageTexts.design[lang as keyof typeof pageTexts.design]}</span><span class="value">${shaftType[lang as keyof typeof shaftType]}</span></div>
                <div class="spec-row"><span class="label">${pageTexts.motorPower[lang as keyof typeof pageTexts.motorPower]}</span><span class="value">${model.motorPower}</span></div>
                <div class="spec-row"><span class="label">${pageTexts.shreddingArea[lang as keyof typeof pageTexts.shreddingArea]}</span><span class="value">${model.area}</span></div>
                <div class="spec-row"><span class="label">${pageTexts.rotorLength[lang as keyof typeof pageTexts.rotorLength]}</span><span class="value">${model.rotorLength}</span></div>
                <div class="spec-row"><span class="label">${pageTexts.capacity[lang as keyof typeof pageTexts.capacity]}</span><span class="value">${model.capacity}</span></div>
                <div class="spec-row"><span class="label">${pageTexts.weight[lang as keyof typeof pageTexts.weight]}</span><span class="value">${model.weight}</span></div>
            </div>
            <div class="highlight-box" style="margin-top:4mm">
                <h3>${pageTexts.note[lang as keyof typeof pageTexts.note]}</h3>
                <p>${pageTexts.noteText[lang as keyof typeof pageTexts.noteText]}</p>
            </div>
        </div>
        <span class="page-number">05</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 6: REFERENCES -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${pageTexts.references[lang as keyof typeof pageTexts.references]}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div class="references-intro">
                <p>${pageTexts.referencesIntro[lang as keyof typeof pageTexts.referencesIntro]}</p>
                <span class="references-count">40+ ${lang === 'tr' ? 'Referans' : lang === 'en' ? 'References' : lang === 'ru' ? 'Референций' : 'مرجع'}</span>
            </div>
            <div class="references-grid">
                <div class="reference-logo"><img src="../../assets/referanslar/aselsan-logo.webp" alt="Aselsan"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/bosch-logo.webp" alt="Bosch"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/pepsico-logo.webp" alt="PepsiCo"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/castrol-logo.webp" alt="Castrol"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/bp-logo.webp" alt="BP"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/iga-logo.webp" alt="İGA"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/tav-havalimanlari-logo.webp" alt="TAV"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/remondis-logo.webp" alt="Remondis"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/tei-logo.webp" alt="TEI"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/mke-logo.webp" alt="MKE"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/tcmb-logo.webp" alt="TCMB"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/saglik-bakanligi-logo.webp" alt="Sağlık Bakanlığı"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/adalet-bakanligi-logo.webp" alt="Adalet Bakanlığı"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/disisleri-bakanligi-logo.webp" alt="Dışişleri Bakanlığı"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/genelkurmay-baskanligi-logo.webp" alt="Genelkurmay"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/mit-logo.webp" alt="MİT"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/osym-logo.webp" alt="ÖSYM"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/golden-rose-logo.webp" alt="Golden Rose"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/betek-logo.webp" alt="Betek"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/orhan-holding-logo.webp" alt="Orhan Holding"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/hun-holding-logo.webp" alt="Hun Holding"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/max-royal-resort-logo.webp" alt="Max Royal"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/ic-hotels-logo.webp" alt="IC Hotels"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/bolu-cimento-logo.webp" alt="Bolu Çimento"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/soke-un-logo.webp" alt="Söke Un"></div>
            </div>
            <div class="highlight-box" style="margin-top:8mm">
                <h3>${pageTexts.trustedPartner[lang as keyof typeof pageTexts.trustedPartner]}</h3>
                <p>${lang === 'tr' ? '20 yılı aşkın tecrübemizle kamu kurumları, özel sektör ve uluslararası firmalar için endüstriyel parçalama çözümleri sunuyoruz.' : lang === 'en' ? 'With over 20 years of experience, we provide industrial shredding solutions for government institutions, private sector, and international companies.' : lang === 'ru' ? 'С более чем 20-летним опытом мы предоставляем промышленные решения для измельчения для государственных учреждений, частного сектора и международных компаний.' : 'مع أكثر من 20 عامًا من الخبرة، نقدم حلول التمزيق الصناعي للمؤسسات الحكومية والقطاع الخاص والشركات الدولية.'}</p>
            </div>
        </div>
        <span class="page-number">06</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 7: DIMENSIONS & CONTACT -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${pageTexts.dimensions[lang as keyof typeof pageTexts.dimensions]}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div class="product-image-container" style="margin-top:0">
                <img src="images/${img6}" alt="${modelName}" class="product-image" style="max-height:60mm">
            </div>
            <div class="spec-card" style="margin-top:4mm">
                <div class="spec-card-header"><h3>${modelName} ${lang === 'tr' ? 'Boyutları' : lang === 'en' ? 'Dimensions' : lang === 'ru' ? 'Размеры' : 'الأبعاد'}</h3></div>
                <div class="spec-row"><span class="label">${pageTexts.shreddingArea[lang as keyof typeof pageTexts.shreddingArea]}</span><span class="value">${model.area}</span></div>
                <div class="spec-row"><span class="label">${pageTexts.rotorLength[lang as keyof typeof pageTexts.rotorLength]}</span><span class="value">${model.rotorLength}</span></div>
                <div class="spec-row"><span class="label">${pageTexts.weight[lang as keyof typeof pageTexts.weight]}</span><span class="value">${model.weight}</span></div>
            </div>
            <div class="two-columns" style="margin-top:6mm">
                <div class="column">
                    <div class="contact-section">
                        <h3>${pageTexts.contactUs[lang as keyof typeof pageTexts.contactUs]}</h3>
                        <div class="contact-group">
                            <div class="contact-group-title">${pageTexts.address[lang as keyof typeof pageTexts.address]}</div>
                            <p class="address-text">Cumhuriyet Mahallesi, Nazım Hikmet Bulvarı, 1983 Sk. Kent Palas 2 Kat: 7 D: 85 - 86, PK.: 34512 Esenyurt / İSTANBUL</p>
                        </div>
                        <div class="contact-group">
                            <div class="contact-group-title">${pageTexts.headquarters[lang as keyof typeof pageTexts.headquarters]}</div>
                            <p style="font-size:10pt;margin-bottom:1mm">+90 850 259 01 66</p>
                            <p style="font-size:10pt;margin-bottom:0">+90 212 613 31 82</p>
                        </div>
                        <div class="contact-group">
                            <div class="contact-group-title">${pageTexts.sales[lang as keyof typeof pageTexts.sales]}</div>
                            <p style="font-size:10pt;margin-bottom:1mm">+90 212 671 74 55</p>
                            <p style="font-size:10pt;margin-bottom:0">+90 212 671 74 56</p>
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
                            <div class="contact-group-title">${pageTexts.email[lang as keyof typeof pageTexts.email]}</div>
                            <p style="font-size:10pt;margin-bottom:0">info@mtmakina.com.tr</p>
                        </div>
                        <div class="website-box">
                            <p>www.mtmakina.com.tr</p>
                            <p class="secondary">www.parcalamamakinesi.com</p>
                        </div>
                        <div class="highlight-box" style="margin-top:4mm;padding:4mm">
                            <h3 style="font-size:11pt;margin-bottom:2mm">${pageTexts.freeInspection[lang as keyof typeof pageTexts.freeInspection]}</h3>
                            <p style="font-size:9pt">${pageTexts.freeInspectionDesc[lang as keyof typeof pageTexts.freeInspectionDesc]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <span class="page-number">07</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>
</body>
</html>`;
}
