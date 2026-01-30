// generate-ds-catalogs-v2.ts devamı - HTML Generator

function generateCatalogHTML(modelId: string, lang: keyof typeof languages): string {
    const model = models[modelId];
    const langConfig = languages[lang];
    const modelName = modelId.toUpperCase();
    const opts = optionalFeatures[lang];

    // Görsel dosyalarını listele
    const imagesDir = path.join(BASE_DIR, modelId, 'images');
    let images: string[] = [];
    try {
        images = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));
    } catch (e) {
        console.log(`No images found for ${modelId}`);
    }

    const img1 = images[0] || '1.jpeg';
    const img2 = images[1] || images[0] || '2.jpeg';
    const img3 = images[2] || images[0] || '3.png';
    const img4 = images[3] || images[0] || '4.png';
    const img5 = images[4] || images[0] || '5.png';
    const img6 = images[5] || images[0] || '6.png';

    const apps = model.applications[lang];
    const mats = model.materials[lang];
    const feats = model.features[lang];

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
        .section-header{margin-bottom:12mm}.section-header h2{margin-bottom:0}
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
        .big-spec-item .value{font-size:20pt;font-weight:900;color:var(--primary-yellow);display:block;margin-bottom:2mm}
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
        .app-card{background:var(--light-gray);padding:4mm;border-radius:4px;margin-bottom:4mm}
        .app-card h4{font-size:11pt;font-weight:700;color:var(--dark-anthracite);margin-bottom:2mm}
        .app-card p{font-size:9pt;color:#555;margin-bottom:0;line-height:1.5}
        .material-list{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:3mm;margin-top:5mm}
        .material-list li{background:var(--light-gray);padding:3mm 4mm;border-left:3px solid var(--primary-yellow);font-size:10pt;font-weight:500}
        .specs-list{list-style:none;margin-top:5mm}
        .specs-list li{padding:3mm 0;border-bottom:1px solid var(--border-gray);display:flex;justify-content:space-between}
        .specs-list li:last-child{border-bottom:none}
        .specs-list .spec-label{font-weight:500;color:#666}
        .specs-list .spec-value{font-weight:700;color:var(--dark-anthracite)}
        .callout-grid{display:grid;grid-template-columns:1fr 1fr;gap:4mm;margin-top:6mm}
        .callout-box{background:var(--white);border:2px solid var(--primary-yellow);border-radius:4px;padding:3mm 4mm;font-size:9pt;box-shadow:0 2px 8px rgba(0,0,0,0.15);margin-bottom:4mm}
        .callout-box strong{color:var(--dark-anthracite);display:block;margin-bottom:1mm;font-size:10pt}
        .callout-box span{color:#555;font-size:9pt;line-height:1.4}
        .references-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:4mm;margin-top:6mm}
        .reference-logo{background:var(--white);border:1px solid var(--border-gray);border-radius:4px;padding:3mm;display:flex;align-items:center;justify-content:center;height:22mm}
        .reference-logo img{max-width:100%;max-height:100%;object-fit:contain}
        .references-intro{text-align:center;margin-bottom:8mm}
        .references-intro p{font-size:12pt;color:#666}
        .references-count{display:inline-block;background:var(--primary-yellow);color:var(--dark-anthracite);font-size:11pt;font-weight:700;padding:2mm 5mm;border-radius:3px;margin-top:3mm}
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
            <!-- Tagline removed to prevent overlap -->
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
                <img src="images/${img2}" alt="${modelName}" class="product-image" style="max-height:55mm">
            </div>
            <div class="highlight-box">
                <h3>${pageTexts.whyModel[lang]} ${modelName}?</h3>
                <p>${model.highlight[lang]}</p>
            </div>
            <div class="feature-grid">
                ${feats.map(f => `<div class="feature-box"><h4>${f}</h4></div>`).join('\n                ')}
            </div>
            <h3 style="margin-top:8mm">${pageTexts.materials[lang]}</h3>
            <ul class="material-list">
                ${mats.map(m => `<li>${m}</li>`).join('\n                ')}
            </ul>
        </div>
        <span class="page-number">02</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 3: APPLICATION AREAS -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${pageTexts.applicationAreas[lang]}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <p>${model.description[lang].substring(0, 200)}...</p>
            <div class="two-columns" style="margin-top:6mm">
                <div class="column">
                    <div class="product-image-container" style="margin:0 0 3mm 0">
                        <img src="images/${img3}" alt="${modelName}" class="product-image" style="max-height:45mm;border-radius:4px">
                    </div>
                    <div class="app-card"><h4>${apps[0].title}</h4><p>${apps[0].desc}</p></div>
                </div>
                <div class="column">
                    <div class="product-image-container" style="margin:0 0 3mm 0">
                        <img src="images/${img4}" alt="${modelName}" class="product-image" style="max-height:45mm;border-radius:4px">
                    </div>
                    <div class="app-card"><h4>${apps[1].title}</h4><p>${apps[1].desc}</p></div>
                </div>
            </div>
            <div class="two-columns" style="margin-top:6mm">
                <div class="column">
                    <div class="app-card"><h4>${apps[2].title}</h4><p>${apps[2].desc}</p></div>
                </div>
                <div class="column">
                    <div class="app-card"><h4>${apps[3].title}</h4><p>${apps[3].desc}</p></div>
                </div>
            </div>
            <div class="highlight-box" style="margin-top:6mm;text-align:center">
                <h3>${modelName} ${pageTexts.advantages[lang]}</h3>
                <p>• ${feats[0]} • ${feats[1]} • ${feats[2]} • ${feats[3]}</p>
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
                <div class="section-header" style="margin-bottom:0"><h2>${pageTexts.technicalDetails[lang]}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div class="product-image-container">
                <img src="images/${img6}" alt="${modelName}" class="product-image" style="max-height:65mm">
            </div>
            <div class="callout-grid">
                <div class="callout-box">
                    <strong>${lang === 'tr' ? 'Dört Şaft Sistemi' : lang === 'en' ? 'Four Shaft System' : lang === 'ru' ? 'Четырехвальная Система' : 'نظام أربعة أعمدة'}</strong>
                    <span>${lang === 'tr' ? 'Dört bağımsız rotor ile malzeme geri beslenmesi önlenir ve homojen çıkış sağlanır.' : lang === 'en' ? 'Four independent rotors prevent material feedback and ensure homogeneous output.' : lang === 'ru' ? 'Четыре независимых ротора предотвращают обратную подачу материала.' : 'أربعة دوارات مستقلة تمنع ارتداد المواد وتضمن مخرجات متجانسة.'}</span>
                </div>
                <div class="callout-box">
                    <strong>${lang === 'tr' ? 'Otomatik Geri Dönüş' : lang === 'en' ? 'Auto-Reverse Function' : lang === 'ru' ? 'Функция Автореверса' : 'وظيفة الانعكاس التلقائي'}</strong>
                    <span>${lang === 'tr' ? 'Aşırı yük algılandığında rotorun ters dönmesi ile sıkışma önlenir.' : lang === 'en' ? 'When overload is detected, rotor reversal prevents jamming.' : lang === 'ru' ? 'При обнаружении перегрузки реверс ротора предотвращает заклинивание.' : 'عند اكتشاف الحمل الزائد، يمنع انعكاس الدوار الانسداد.'}</span>
                </div>
                <div class="callout-box">
                    <strong>${lang === 'tr' ? 'Ayarlanabilir Elek' : lang === 'en' ? 'Adjustable Screen' : lang === 'ru' ? 'Регулируемое Сито' : 'غربال قابل للتعديل'}</strong>
                    <span>${lang === 'tr' ? 'İstenilen çıkış boyutuna göre değiştirilebilir elek sistemi.' : lang === 'en' ? 'Screen system adjustable according to desired output size.' : lang === 'ru' ? 'Система сит, регулируемая по размеру выхода.' : 'نظام غربال قابل للتعديل حسب حجم المخرجات المطلوب.'}</span>
                </div>
                <div class="callout-box">
                    <strong>${lang === 'tr' ? 'Hardox Bıçaklar' : lang === 'en' ? 'Hardox Blades' : lang === 'ru' ? 'Ножи Hardox' : 'شفرات Hardox'}</strong>
                    <span>${lang === 'tr' ? 'Yüksek aşınma dirençli Hardox 450/500 çelik bıçaklar.' : lang === 'en' ? 'High wear-resistant Hardox 450/500 steel blades.' : lang === 'ru' ? 'Высокоизносостойкие стальные ножи Hardox 450/500.' : 'شفرات فولاذية Hardox 450/500 عالية مقاومة التآكل.'}</span>
                </div>
            </div>
            <div class="two-columns" style="margin-top:6mm">
                <div class="column">
                    <h3>${pageTexts.standardEquipment[lang]}</h3>
                    <ul class="specs-list">
                        <li><span class="spec-label">${pageTexts.bodyMaterial[lang]}</span><span class="spec-value">St-52 ${lang === 'tr' ? 'Çelik' : lang === 'en' ? 'Steel' : lang === 'ru' ? 'Сталь' : 'فولاذ'}</span></li>
                        <li><span class="spec-label">${pageTexts.bladeMaterial[lang]}</span><span class="spec-value">Hardox 450/500</span></li>
                        <li><span class="spec-label">${pageTexts.driveSystem[lang]}</span><span class="spec-value">${lang === 'tr' ? 'Redüktörlü Motor (4x)' : lang === 'en' ? 'Geared Motor (4x)' : lang === 'ru' ? 'Мотор-Редуктор (4x)' : 'محرك مع علبة تروس (4x)'}</span></li>
                        <li><span class="spec-label">${pageTexts.controlSystem[lang]}</span><span class="spec-value">PLC + HMI Panel</span></li>
                    </ul>
                </div>
                <div class="column">
                    <h3>${pageTexts.optionalFeatures[lang]}</h3>
                    <ul class="specs-list">
                        <li><span class="spec-label">${opts[0]}</span><span class="spec-value">✓</span></li>
                        <li><span class="spec-label">${opts[1]}</span><span class="spec-value">✓</span></li>
                        <li><span class="spec-label">${opts[2]}</span><span class="spec-value">✓</span></li>
                        <li><span class="spec-label">${opts[3]}</span><span class="spec-value">✓</span></li>
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
                    <span class="label">${pageTexts.motorPower[lang]}</span>
                </div>
                <div class="big-spec-item">
                    <span class="value">${model.area}</span>
                    <span class="label">${pageTexts.shreddingArea[lang]}</span>
                </div>
                <div class="big-spec-item">
                    <span class="value">${model.rotorLength}</span>
                    <span class="label">${pageTexts.rotorLength[lang]}</span>
                </div>
            </div>
            <div class="spec-card">
                <div class="spec-card-header"><h3>${pageTexts.detailedSpecs[lang]}</h3></div>
                <div class="spec-row"><span class="label">Model</span><span class="value highlight">${modelName}</span></div>
                <div class="spec-row"><span class="label">${pageTexts.motorPower[lang]}</span><span class="value">${model.motorPower}</span></div>
                <div class="spec-row"><span class="label">${pageTexts.shreddingArea[lang]}</span><span class="value">${model.area}</span></div>
                <div class="spec-row"><span class="label">${pageTexts.rotorLength[lang]}</span><span class="value">${model.rotorLength}</span></div>
                <div class="spec-row"><span class="label">${pageTexts.shaftCount[lang]}</span><span class="value">${model.shaftCount}</span></div>
                <div class="spec-row"><span class="label">${pageTexts.capacity[lang]}</span><span class="value">${model.capacity}</span></div>
            </div>
            <div class="highlight-box" style="margin-top:4mm">
                <h3>${lang === 'tr' ? 'Not' : lang === 'en' ? 'Note' : lang === 'ru' ? 'Примечание' : 'ملاحظة'}</h3>
                <p>${lang === 'tr' ? 'Kapasite değerleri malzeme türüne, boyutuna ve yoğunluğuna göre değişiklik gösterebilir. Projenize özel teknik detaylar için satış ekibimizle iletişime geçiniz.' : lang === 'en' ? 'Capacity values may vary depending on material type, size and density. Please contact our sales team for project-specific technical details.' : lang === 'ru' ? 'Значения производительности могут варьироваться в зависимости от типа, размера и плотности материала. Свяжитесь с нами для уточнения деталей.' : 'قد تختلف قيم السعة حسب نوع المادة وحجمها وكثافتها. يرجى الاتصال بفريق المبيعات لدينا للحصول على تفاصيل فنية خاصة بالمشروع.'}</p>
            </div>
        </div>
        <span class="page-number">05</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 6: REFERENCES -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${pageTexts.references[lang]}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div class="references-intro">
                <p>${lang === 'tr' ? 'Türkiye\'nin ve dünyanın önde gelen kurum ve kuruluşları MT Makina\'yı tercih ediyor.' : lang === 'en' ? 'Leading institutions and organizations in Turkey and the world choose MT Makina.' : lang === 'ru' ? 'Ведущие учреждения Турции и мира выбирают MT Makina.' : 'المؤسسات الرائدة في تركيا والعالم تختار MT Makina.'}</p>
                <span class="references-count">40+ ${lang === 'tr' ? 'Referans' : lang === 'en' ? 'References' : lang === 'ru' ? 'Референсов' : 'مرجع'}</span>
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
                <div class="reference-logo"><img src="../../assets/referanslar/ibb-logo.webp" alt="İBB"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/tusas-logo.webp" alt="TUSAŞ"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/havelsan-logo.webp" alt="Havelsan"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/roketsan-logo.webp" alt="Roketsan"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/turkiye-finans-logo.webp" alt="Türkiye Finans"></div>
            </div>
        </div>
        <span class="page-number">06</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 7: OPTIONAL FEATURES & CONTACT -->
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
                        ${opts.map(o => `<li>${o}</li>`).join('\n                        ')}
                        </ul>
                    </div>
                    <div class="product-image-container" style="margin-top:6mm">
                        <img src="images/${img1}" alt="${modelName}" class="product-image" style="max-height:55mm">
                    </div>
                </div>
                <div class="column">
                    <div class="contact-section">
                        <h3>${pageTexts.contactUs[lang]}</h3>
                        <div class="contact-group">
                            <div class="contact-group-title">${pageTexts.address[lang]}</div>
                            <p class="address-text">Cumhuriyet Mah., Nazım Hikmet Blv., 1983 Sk. Kent Palas 2 Kat:7 D:85-86, 34512 Esenyurt/İSTANBUL</p>
                        </div>
                        <div class="contact-group">
                            <div class="contact-group-title">${pageTexts.phone[lang]}</div>
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
        <span class="page-number">07</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>
</body>
</html>`;
}

// Dizin oluştur ve görselleri kopyala
function setupModelDirectory(modelId: string) {
    const modelDir = path.join(BASE_DIR, modelId);
    const imagesDir = path.join(modelDir, 'images');

    if (!fs.existsSync(modelDir)) {
        fs.mkdirSync(modelDir, { recursive: true });
    }
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
    }

    // Kaynak görselleri kopyala
    try {
        const sourceImages = fs.readdirSync(SOURCE_IMAGES_DIR);
        sourceImages.forEach(img => {
            const srcPath = path.join(SOURCE_IMAGES_DIR, img);
            const destPath = path.join(imagesDir, img);
            if (!fs.existsSync(destPath)) {
                fs.copyFileSync(srcPath, destPath);
                console.log(`  ✓ Copied: ${img}`);
            }
        });
    } catch (e) {
        console.log(`  ⚠ Could not copy images for ${modelId}`);
    }
}

// Ana işlem
console.log('\\n🚀 DS Katalog V2 oluşturma başlatıldı...\\n');

const modelIds = Object.keys(models);
const langKeys = Object.keys(languages) as Array<keyof typeof languages>;

modelIds.forEach(modelId => {
    console.log(`📁 ${modelId.toUpperCase()} işleniyor...`);

    // Dizin ve görselleri hazırla
    setupModelDirectory(modelId);

    // Her dil için katalog oluştur
    langKeys.forEach(lang => {
        const suffix = languages[lang].suffix;
        const filename = `catalog${suffix}.html`;
        const filepath = path.join(BASE_DIR, modelId, filename);

        const html = generateCatalogHTML(modelId, lang);
        fs.writeFileSync(filepath, html, 'utf8');
        console.log(`  ✅ ${filename}`);
    });
    console.log('');
});

console.log('🎉 Tüm DS katalogları başarıyla oluşturuldu!');
console.log(`   Toplam: ${modelIds.length} model x ${langKeys.length} dil = ${modelIds.length * langKeys.length} katalog`);
