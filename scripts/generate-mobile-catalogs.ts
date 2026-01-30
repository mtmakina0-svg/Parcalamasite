// Mobile Shredder (Mobil Kırıcı) Catalog Generator
// Generates HTML catalogs for TSM-150, TSM-300, CSM-150, CSM-200 in 4 languages

import * as fs from 'fs';
import * as path from 'path';

// Configuration
const BASE_DIR = 'public/catalogs/mobile';
const SOURCE_IMAGES_DIR = 'D:/Furkan/WEB SİTESİ/parçalamamakinesi katalog/Mobil kırıcı katalog';

// Models data
const models = [
    { id: 'tsm-150', name: 'TSM-150', area: '1500 x 1800 mm', rotor: '1500 mm', power: '400 HP', type: 'single' },
    { id: 'tsm-300', name: 'TSM-300', area: '3000 x 2000 mm', rotor: '3000 mm', power: '600 HP', type: 'single' },
    { id: 'csm-150', name: 'CSM-150', area: '1500 x 1200 mm', rotor: '1500 mm', power: '400 HP', type: 'dual' },
    { id: 'csm-200', name: 'CSM-200', area: '2000 x 1800 mm', rotor: '2000 mm', power: '800 HP', type: 'dual' }
];

const languages = ['tr', 'en', 'ru', 'ar'];

// Page texts per language
const pageTexts: Record<string, any> = {
    tr: {
        productCatalog: 'ÜRÜN KATALOĞU',
        categoryTitle: 'Mobil Kırıcı',
        categorySubtitle: 'Taşınabilir Parçalama Makinesi',
        productIntro: 'Ürün Tanıtımı',
        applicationAreas: 'Uygulama Alanları',
        technicalDetails: 'Teknik Detaylar',
        technicalSpecs: 'Teknik Özellikler',
        references: 'Referanslarımız',
        optionalFeatures: 'Opsiyonel Özellikler',
        contact: 'İletişim',
        phone: 'Telefon',
        email: 'E-posta',
        address: 'Adres',
        addressText: 'Saray Mah. Dr. Adnan Büyükdeniz Cad. No:4/2 Cessas Plaza Kat:7 D:21 Ümraniye, İstanbul, TÜRKİYE',
        features: [
            'Yüksek Verimlilik',
            'Taşınabilir Tasarım',
            'Geniş Malzeme Kapasitesi',
            'Dayanıklı Yapı'
        ],
        materials: [
            'Plastik',
            'Metal',
            'Ahşap',
            'İnşaat Atıkları',
            'Belediye Atıkları',
            'Tarım Atıkları'
        ],
        applications: [
            'Geri Dönüşüm Tesisleri',
            'İnşaat Sahaları',
            'Belediye Atık Yönetimi',
            'Tarım ve Orman',
            'Endüstriyel Tesisler'
        ],
        optionalList: [
            'Tek Şaftlı ve Çift Şaftlı Tasarım',
            'Rotor Soğutma Sistemi',
            'Otomatik Yağlama Ünitesi',
            'Farklı Ölçülerde Elek',
            'Hidrolik Açılan Elek Sistemi',
            'Çıkış İçin Katlanır Konveyör',
            'Araç Üstü veya Çekme Taşıma',
            'Dizel Motorlu veya Jeneratörlü',
            'Tekerlekli ve Paletli Sistem',
            'Uzaktan Kumandalı Kontrol'
        ],
        descriptionIntro: 'TSM ve CSM Serisi Mobil Kırıcılar, geri dönüşüm süreçlerinde yüksek verimlilik ve taşınabilirlik sunar.',
        descriptionMain: 'Mobil kırıcı, yüksek tork ve düşük hız kombinasyonu ile malzemeleri hızlı ve etkili bir şekilde parçalar. Taşınabilir yapısı sayesinde farklı sahalara kolayca taşınabilir ve yerinde parçalama imkanı sunar.',
        featureDescriptions: {
            efficiency: 'Geniş malzeme yelpazesini hızlı ve etkili işler',
            portability: 'Sahada kolayca taşınabilir tasarım',
            flexibility: 'Farklı endüstriler için uygun çözümler',
            durability: 'Yüksek kaliteli çelik yapı'
        },
        shredArea: 'Parçalama Alanı',
        rotorLength: 'Rotor Boyu',
        motorPower: 'Motor Gücü',
        reliablePartner: 'Güvenilir Çözüm Ortağınız',
        partnerDesc: '20 yılı aşkın tecrübemizle kamu kurumları, özel sektör ve uluslararası firmalar için endüstriyel parçalama çözümleri sunuyoruz.'
    },
    en: {
        productCatalog: 'PRODUCT CATALOG',
        categoryTitle: 'Mobile Shredder',
        categorySubtitle: 'Portable Shredding Machine',
        productIntro: 'Product Introduction',
        applicationAreas: 'Application Areas',
        technicalDetails: 'Technical Details',
        technicalSpecs: 'Technical Specifications',
        references: 'Our References',
        optionalFeatures: 'Optional Features',
        contact: 'Contact',
        phone: 'Phone',
        email: 'E-mail',
        address: 'Address',
        addressText: 'Saray Mah. Dr. Adnan Büyükdeniz Cad. No:4/2 Cessas Plaza Floor:7 D:21 Ümraniye, Istanbul, TURKEY',
        features: [
            'High Efficiency',
            'Portable Design',
            'Wide Material Capacity',
            'Durable Structure'
        ],
        materials: [
            'Plastic',
            'Metal',
            'Wood',
            'Construction Waste',
            'Municipal Waste',
            'Agricultural Waste'
        ],
        applications: [
            'Recycling Facilities',
            'Construction Sites',
            'Municipal Waste Management',
            'Agriculture and Forestry',
            'Industrial Facilities'
        ],
        optionalList: [
            'Single-Shaft and Dual-Shaft Design',
            'Rotor Cooling System',
            'Automatic Lubrication Unit',
            'Various Screen Sizes',
            'Hydraulic Opening Screen System',
            'Foldable Exit Conveyor',
            'On-Vehicle or Towing Transport',
            'Diesel Engine or Generator',
            'Wheeled and Tracked System',
            'Remote Control System'
        ],
        descriptionIntro: 'TSM and CSM Series Mobile Shredders offer high efficiency and portability in recycling processes.',
        descriptionMain: 'Mobile shredder quickly and effectively shreds materials with its high torque and low speed combination. Thanks to its portable structure, it can be easily transported to different sites and offers on-site shredding.',
        featureDescriptions: {
            efficiency: 'Processes wide range of materials quickly',
            portability: 'Easily transportable on-site design',
            flexibility: 'Suitable solutions for different industries',
            durability: 'High-quality steel structure'
        },
        shredArea: 'Shredding Area',
        rotorLength: 'Rotor Length',
        motorPower: 'Motor Power',
        reliablePartner: 'Your Reliable Solution Partner',
        partnerDesc: 'With over 20 years of experience, we provide industrial shredding solutions for public institutions, private sector and international companies.'
    },
    ru: {
        productCatalog: 'КАТАЛОГ ПРОДУКЦИИ',
        categoryTitle: 'Мобильный Измельчитель',
        categorySubtitle: 'Портативная Дробилка',
        productIntro: 'Описание Продукта',
        applicationAreas: 'Области Применения',
        technicalDetails: 'Технические Детали',
        technicalSpecs: 'Технические Характеристики',
        references: 'Наши Референсы',
        optionalFeatures: 'Дополнительные Опции',
        contact: 'Контакты',
        phone: 'Телефон',
        email: 'Эл. почта',
        address: 'Адрес',
        addressText: 'Saray Mah. Dr. Adnan Büyükdeniz Cad. No:4/2 Cessas Plaza Этаж:7 D:21 Ümraniye, Стамбул, ТУРЦИЯ',
        features: [
            'Высокая Эффективность',
            'Портативный Дизайн',
            'Широкий Диапазон Материалов',
            'Прочная Конструкция'
        ],
        materials: [
            'Пластик',
            'Металл',
            'Древесина',
            'Строительные Отходы',
            'Муниципальные Отходы',
            'Сельскохозяйственные Отходы'
        ],
        applications: [
            'Перерабатывающие Заводы',
            'Строительные Площадки',
            'Управление Муниципальными Отходами',
            'Сельское и Лесное Хозяйство',
            'Промышленные Объекты'
        ],
        optionalList: [
            'Одновальная и Двухвальная Конструкция',
            'Система Охлаждения Ротора',
            'Автоматическая Смазка',
            'Различные Размеры Сит',
            'Гидравлическая Система Открытия Сита',
            'Складной Выходной Конвейер',
            'Транспортировка на ТС или Буксировка',
            'Дизельный Двигатель или Генератор',
            'Колёсная и Гусеничная Система',
            'Дистанционное Управление'
        ],
        descriptionIntro: 'Мобильные измельчители серии TSM и CSM обеспечивают высокую эффективность и мобильность в переработке.',
        descriptionMain: 'Мобильный измельчитель быстро и эффективно измельчает материалы благодаря высокому крутящему моменту и низкой скорости. Портативная конструкция позволяет легко перемещать на разные объекты.',
        featureDescriptions: {
            efficiency: 'Быстрая обработка широкого спектра материалов',
            portability: 'Легко транспортируемая конструкция',
            flexibility: 'Подходит для разных отраслей',
            durability: 'Высококачественная стальная конструкция'
        },
        shredArea: 'Область Измельчения',
        rotorLength: 'Длина Ротора',
        motorPower: 'Мощность Двигателя',
        reliablePartner: 'Ваш Надёжный Партнёр',
        partnerDesc: 'Более 20 лет опыта в предоставлении промышленных решений для государственных учреждений, частного сектора и международных компаний.'
    },
    ar: {
        productCatalog: 'كتالوج المنتجات',
        categoryTitle: 'الكسارة المتنقلة',
        categorySubtitle: 'آلة التقطيع المحمولة',
        productIntro: 'تقديم المنتج',
        applicationAreas: 'مجالات التطبيق',
        technicalDetails: 'التفاصيل التقنية',
        technicalSpecs: 'المواصفات الفنية',
        references: 'مراجعنا',
        optionalFeatures: 'الميزات الاختيارية',
        contact: 'اتصل بنا',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        address: 'العنوان',
        addressText: 'Saray Mah. Dr. Adnan Büyükdeniz Cad. No:4/2 Cessas Plaza Floor:7 D:21 Ümraniye, إسطنبول, تركيا',
        features: [
            'كفاءة عالية',
            'تصميم محمول',
            'سعة مواد واسعة',
            'هيكل متين'
        ],
        materials: [
            'البلاستيك',
            'المعادن',
            'الخشب',
            'نفايات البناء',
            'النفايات البلدية',
            'النفايات الزراعية'
        ],
        applications: [
            'مرافق إعادة التدوير',
            'مواقع البناء',
            'إدارة النفايات البلدية',
            'الزراعة والغابات',
            'المنشآت الصناعية'
        ],
        optionalList: [
            'تصميم أحادي وثنائي العمود',
            'نظام تبريد الدوار',
            'وحدة التشحيم التلقائي',
            'أحجام غربال مختلفة',
            'نظام فتح الغربال الهيدروليكي',
            'ناقل خروج قابل للطي',
            'النقل على المركبة أو السحب',
            'محرك ديزل أو مولد',
            'نظام عجلات ومجنزر',
            'نظام التحكم عن بعد'
        ],
        descriptionIntro: 'توفر الكسارات المتنقلة من سلسلة TSM و CSM كفاءة عالية وقابلية للتنقل في عمليات إعادة التدوير.',
        descriptionMain: 'تقوم الكسارة المتنقلة بتمزيق المواد بسرعة وفعالية بفضل عزم الدوران العالي والسرعة المنخفضة. يمكن نقلها بسهولة إلى مواقع مختلفة بفضل هيكلها المحمول.',
        featureDescriptions: {
            efficiency: 'معالجة سريعة لمجموعة واسعة من المواد',
            portability: 'تصميم سهل النقل في الموقع',
            flexibility: 'حلول مناسبة لمختلف الصناعات',
            durability: 'هيكل فولاذي عالي الجودة'
        },
        shredArea: 'منطقة التقطيع',
        rotorLength: 'طول الدوار',
        motorPower: 'قوة المحرك',
        reliablePartner: 'شريكك الموثوق للحلول',
        partnerDesc: 'مع أكثر من 20 عامًا من الخبرة، نقدم حلول التمزيق الصناعي للمؤسسات العامة والقطاع الخاص والشركات الدولية.'
    }
};

// Optional features list
const optionalFeatures = pageTexts.tr.optionalList;

// Function to get model-specific description
function getModelDescription(model: typeof models[0], lang: string): string {
    const texts = pageTexts[lang];
    const typeText = lang === 'tr' ? (model.type === 'single' ? 'tek şaftlı' : 'çift şaftlı') :
        lang === 'en' ? (model.type === 'single' ? 'single-shaft' : 'dual-shaft') :
            lang === 'ru' ? (model.type === 'single' ? 'одновальный' : 'двухвальный') :
                (model.type === 'single' ? 'أحادي العمود' : 'ثنائي العمود');

    if (lang === 'tr') {
        return `${model.name}, ${typeText} tasarımı ile yüksek verimlilik sunan mobil kırıcı makinesidir. ${model.area} parçalama alanı ve ${model.power} motor gücü ile zorlu atık işleme operasyonlarında güvenilir performans sağlar.`;
    } else if (lang === 'en') {
        return `${model.name} is a ${typeText} design mobile shredder offering high efficiency. With ${model.area} shredding area and ${model.power} motor power, it provides reliable performance in demanding waste processing operations.`;
    } else if (lang === 'ru') {
        return `${model.name} — это ${typeText} мобильный измельчитель с высокой эффективностью. С областью измельчения ${model.area} и мощностью двигателя ${model.power} обеспечивает надёжную работу в сложных условиях.`;
    } else {
        return `${model.name} هي كسارة متنقلة ${typeText} توفر كفاءة عالية. بمساحة تقطيع ${model.area} وقوة محرك ${model.power}، توفر أداءً موثوقًا في عمليات معالجة النفايات الصعبة.`;
    }
}

// Generate CSS
function generateCSS(): string {
    return `
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800&display=swap');

:root {
    --primary: #F4CE14;
    --dark: #1E1E1E;
    --gray: #45474B;
    --light: #F5F7F8;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@page {
    size: A4;
    margin: 0;
}

body {
    font-family: 'Mulish', sans-serif;
    background: #f0f0f0;
    color: var(--dark);
    line-height: 1.6;
}

.page {
    width: 210mm;
    height: 297mm;
    margin: 10mm auto;
    background: white;
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 30px rgba(0,0,0,0.15);
    page-break-after: always;
}

@media print {
    body { background: white; }
    .page { margin: 0; box-shadow: none; }
}

.page-content {
    padding: 12mm 15mm;
    height: calc(297mm - 20mm);
    display: flex;
    flex-direction: column;
}

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8mm;
    padding-bottom: 4mm;
    border-bottom: 2px solid var(--primary);
}

.page-header-icon {
    height: 12mm;
}

.section-header {
    margin-bottom: 6mm;
}

.section-header h2 {
    color: var(--gray);
    font-size: 20pt;
    font-weight: 700;
    position: relative;
    display: inline-block;
}

.section-header h2::after {
    content: '';
    position: absolute;
    bottom: -2mm;
    left: 0;
    width: 15mm;
    height: 1mm;
    background: var(--primary);
}

/* Cover Page */
.cover-page {
    background: linear-gradient(135deg, var(--gray) 0%, var(--dark) 100%);
    height: 100%;
    display: flex;
    flex-direction: column;
}

.cover-header {
    padding: 10mm 15mm;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cover-logo {
    height: 15mm;
}

.cover-badge {
    background: var(--primary);
    color: var(--dark);
    padding: 2mm 5mm;
    font-weight: 700;
    font-size: 10pt;
}

.cover-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 15mm;
}

.cover-main img {
    max-width: 85%;
    max-height: 130mm;
    object-fit: contain;
    margin-bottom: 10mm;
}

.cover-title-section {
    text-align: center;
    color: white;
}

.cover-model {
    font-size: 48pt;
    font-weight: 800;
    color: var(--primary);
    letter-spacing: 3px;
    margin-bottom: 3mm;
}

.cover-category {
    font-size: 18pt;
    font-weight: 300;
    opacity: 0.9;
}

.cover-footer {
    padding: 8mm 15mm;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255,255,255,0.1);
}

.cover-footer span {
    color: rgba(255,255,255,0.7);
    font-size: 9pt;
}

.cover-catalog-badge {
    background: var(--primary);
    color: var(--dark);
    padding: 2mm 6mm;
    font-weight: 700;
    font-size: 10pt;
}

/* Feature Cards */
.features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5mm;
    margin-bottom: 6mm;
}

.feature-card {
    background: var(--light);
    padding: 5mm;
    border-radius: 2mm;
    border-left: 3px solid var(--primary);
}

.feature-card h4 {
    color: var(--gray);
    font-size: 11pt;
    margin-bottom: 2mm;
}

.feature-card p {
    color: #666;
    font-size: 9pt;
    line-height: 1.4;
}

/* Materials Grid */
.materials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4mm;
    margin-bottom: 6mm;
}

.material-item {
    background: var(--light);
    padding: 4mm;
    text-align: center;
    border-radius: 2mm;
    font-size: 10pt;
    font-weight: 600;
    color: var(--gray);
}

/* Applications List */
.applications-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3mm;
}

.application-item {
    display: flex;
    align-items: center;
    gap: 3mm;
    padding: 3mm;
    background: var(--light);
    border-radius: 2mm;
}

.application-item::before {
    content: '✓';
    color: var(--primary);
    font-weight: 700;
}

/* Spec Table */
.spec-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 6mm;
}

.spec-table th, .spec-table td {
    padding: 3mm 4mm;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
    font-size: 10pt;
}

.spec-table th {
    background: var(--gray);
    color: white;
    font-weight: 600;
}

.spec-table tr:nth-child(even) {
    background: var(--light);
}

/* References Grid */
.references-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4mm;
}

.reference-logo {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 2mm;
    padding: 3mm;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 15mm;
}

.reference-logo img {
    max-width: 100%;
    max-height: 12mm;
    object-fit: contain;
}

/* Optional Features */
.optional-features ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2mm;
}

.optional-features li {
    padding: 2mm 0;
    padding-left: 5mm;
    position: relative;
    font-size: 10pt;
    border-bottom: 1px solid #eee;
}

.optional-features li::before {
    content: '●';
    color: var(--primary);
    position: absolute;
    left: 0;
}

/* Contact Box */
.contact-box {
    background: var(--gray);
    color: white;
    padding: 6mm;
    border-radius: 3mm;
    margin-top: auto;
}

.contact-box h3 {
    color: var(--primary);
    font-size: 14pt;
    margin-bottom: 4mm;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4mm;
}

.contact-item {
    font-size: 9pt;
}

.contact-item strong {
    display: block;
    color: var(--primary);
    margin-bottom: 1mm;
}

/* Two Columns Layout */
.two-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8mm;
}

/* Product Image Container */
.product-image-container {
    text-align: center;
}

.product-image {
    max-width: 100%;
    max-height: 70mm;
    object-fit: contain;
}

/* Highlight Box */
.highlight-box {
    background: var(--light);
    border-left: 4px solid var(--primary);
    padding: 5mm;
    margin: 5mm 0;
}

.highlight-box h3 {
    color: var(--gray);
    font-size: 12pt;
    margin-bottom: 2mm;
}

.highlight-box p {
    font-size: 10pt;
    color: #555;
}

/* Page Footer */
.page-footer {
    position: absolute;
    bottom: 5mm;
    left: 15mm;
    right: 15mm;
    display: flex;
    justify-content: space-between;
    font-size: 8pt;
    color: #999;
    border-top: 1px solid #eee;
    padding-top: 2mm;
}

.page-number {
    position: absolute;
    bottom: 5mm;
    right: 15mm;
    font-size: 9pt;
    color: var(--gray);
    font-weight: 600;
}

/* RTL Support */
[dir="rtl"] .section-header h2::after {
    left: auto;
    right: 0;
}

[dir="rtl"] .feature-card {
    border-left: none;
    border-right: 3px solid var(--primary);
}

[dir="rtl"] .highlight-box {
    border-left: none;
    border-right: 4px solid var(--primary);
}

[dir="rtl"] .optional-features li {
    padding-left: 0;
    padding-right: 5mm;
}

[dir="rtl"] .optional-features li::before {
    left: auto;
    right: 0;
}

[dir="rtl"] .application-item::before {
    order: 2;
}
  `.trim();
}

// Generate HTML for a model
function generateHTML(model: typeof models[0], lang: string): string {
    const texts = pageTexts[lang];
    const isRTL = lang === 'ar';
    const dir = isRTL ? 'rtl' : 'ltr';
    const description = getModelDescription(model, lang);

    // Get image files
    const imgDir = path.join(SOURCE_IMAGES_DIR, model.id);
    let images: string[] = [];
    if (fs.existsSync(imgDir)) {
        images = fs.readdirSync(imgDir)
            .filter((f: string) => f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.webp'))
            .filter((f: string) => f !== 'Thumbs.db')
            .slice(0, 6);
    }

    const html = `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${model.name} ${texts.categoryTitle} - MT Makina</title>
    <style>${generateCSS()}</style>
</head>
<body>
    <!-- PAGE 1: COVER -->
    <div class="page cover-page">
        <div class="cover-header">
            <img src="../../assets/mt-logo-white.png" alt="MT Makina" class="cover-logo">
            <span class="cover-badge">${texts.categoryTitle}</span>
        </div>
        <div class="cover-main">
            <img src="images/1.jpeg" alt="${model.name}">
            <div class="cover-title-section">
                <div class="cover-model">${model.name}</div>
                <div class="cover-category">${texts.categorySubtitle}</div>
            </div>
        </div>
        <div class="cover-footer">
            <span>www.mtmakina.com.tr</span>
            <span class="cover-catalog-badge">${texts.productCatalog}</span>
            <span>www.parcalamamakinesi.com</span>
        </div>
    </div>

    <!-- PAGE 2: PRODUCT INTRO -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${texts.productIntro}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div class="two-columns">
                <div class="column">
                    <h3 style="color:var(--gray);margin-bottom:4mm;font-size:14pt">${model.name} ${texts.categoryTitle}</h3>
                    <p style="font-size:10pt;color:#555;margin-bottom:5mm;line-height:1.7">${texts.descriptionIntro}</p>
                    <p style="font-size:10pt;color:#555;margin-bottom:5mm;line-height:1.7">${description}</p>
                    <p style="font-size:10pt;color:#555;line-height:1.7">${texts.descriptionMain}</p>
                </div>
                <div class="column">
                    <div class="product-image-container">
                        <img src="images/2.jpeg" alt="${model.name}" class="product-image">
                    </div>
                </div>
            </div>
            <div class="features-grid" style="margin-top:6mm">
                <div class="feature-card">
                    <h4>${texts.features[0]}</h4>
                    <p>${texts.featureDescriptions.efficiency}</p>
                </div>
                <div class="feature-card">
                    <h4>${texts.features[1]}</h4>
                    <p>${texts.featureDescriptions.portability}</p>
                </div>
                <div class="feature-card">
                    <h4>${texts.features[2]}</h4>
                    <p>${texts.featureDescriptions.flexibility}</p>
                </div>
                <div class="feature-card">
                    <h4>${texts.features[3]}</h4>
                    <p>${texts.featureDescriptions.durability}</p>
                </div>
            </div>
        </div>
        <span class="page-number">02</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 3: APPLICATION AREAS -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${texts.applicationAreas}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div class="two-columns">
                <div class="column">
                    <h4 style="color:var(--gray);margin-bottom:4mm">${lang === 'tr' ? 'İşlenebilir Malzemeler' : lang === 'en' ? 'Processable Materials' : lang === 'ru' ? 'Обрабатываемые Материалы' : 'المواد القابلة للمعالجة'}</h4>
                    <div class="materials-grid" style="grid-template-columns: repeat(2, 1fr)">
                        ${texts.materials.map((m: string) => `<div class="material-item">${m}</div>`).join('\n                        ')}
                    </div>
                    <h4 style="color:var(--gray);margin-bottom:4mm;margin-top:6mm">${lang === 'tr' ? 'Kullanım Alanları' : lang === 'en' ? 'Usage Areas' : lang === 'ru' ? 'Области Использования' : 'مجالات الاستخدام'}</h4>
                    <div class="applications-list" style="grid-template-columns: 1fr">
                        ${texts.applications.map((a: string) => `<div class="application-item">${a}</div>`).join('\n                        ')}
                    </div>
                </div>
                <div class="column">
                    <div class="product-image-container">
                        <img src="images/3.jpeg" alt="${model.name}" class="product-image" style="max-height:90mm">
                    </div>
                </div>
            </div>
        </div>
        <span class="page-number">03</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 4: TECHNICAL DETAILS -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${texts.technicalDetails}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div class="two-columns">
                <div class="column">
                    <div class="product-image-container">
                        <img src="images/4.jpeg" alt="${model.name}" class="product-image" style="max-height:100mm">
                    </div>
                </div>
                <div class="column">
                    <div class="highlight-box">
                        <h3>${model.name} ${texts.technicalSpecs}</h3>
                        <table class="spec-table" style="margin-top:4mm">
                            <tr><th>${lang === 'tr' ? 'Özellik' : lang === 'en' ? 'Feature' : lang === 'ru' ? 'Параметр' : 'الميزة'}</th><th>${lang === 'tr' ? 'Değer' : lang === 'en' ? 'Value' : lang === 'ru' ? 'Значение' : 'القيمة'}</th></tr>
                            <tr><td>${texts.shredArea}</td><td>${model.area}</td></tr>
                            <tr><td>${texts.rotorLength}</td><td>${model.rotor}</td></tr>
                            <tr><td>${texts.motorPower}</td><td>${model.power}</td></tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="product-image-container" style="margin-top:8mm">
                <img src="images/5.jpeg" alt="${model.name}" class="product-image" style="max-height:80mm">
            </div>
        </div>
        <span class="page-number">04</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 5: SPEC SHEET -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${texts.technicalSpecs}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <h3 style="color:var(--gray);margin-bottom:5mm">${lang === 'tr' ? 'Tüm Model Karşılaştırması' : lang === 'en' ? 'All Model Comparison' : lang === 'ru' ? 'Сравнение Всех Моделей' : 'مقارنة جميع الموديلات'}</h3>
            <table class="spec-table">
                <tr>
                    <th>${lang === 'tr' ? 'Model' : lang === 'en' ? 'Model' : lang === 'ru' ? 'Модель' : 'الموديل'}</th>
                    <th>${texts.shredArea}</th>
                    <th>${texts.rotorLength}</th>
                    <th>${texts.motorPower}</th>
                </tr>
                ${models.map(m => `<tr${m.id === model.id ? ' style="background:var(--primary);color:var(--dark)"' : ''}>
                    <td><strong>${m.name}</strong></td>
                    <td>${m.area}</td>
                    <td>${m.rotor}</td>
                    <td>${m.power}</td>
                </tr>`).join('\n                ')}
            </table>
            <div class="highlight-box" style="margin-top:8mm">
                <h3>${lang === 'tr' ? 'TSM ve CSM Serisi Farkı' : lang === 'en' ? 'TSM and CSM Series Difference' : lang === 'ru' ? 'Разница между сериями TSM и CSM' : 'الفرق بين سلسلتي TSM و CSM'}</h3>
                <p>${lang === 'tr' ? 'TSM serisi tek şaftlı, CSM serisi çift şaftlı tasarıma sahiptir. Tek şaftlı modeller daha kompakt yapı sunarken, çift şaftlı modeller daha yüksek işleme kapasitesi sağlar.' :
            lang === 'en' ? 'TSM series has single-shaft, CSM series has dual-shaft design. Single-shaft models offer more compact structure, while dual-shaft models provide higher processing capacity.' :
                lang === 'ru' ? 'Серия TSM имеет одновальную, серия CSM — двухвальную конструкцию. Одновальные модели более компактны, двухвальные обеспечивают большую производительность.' :
                    'سلسلة TSM ذات عمود واحد، وسلسلة CSM ذات عمودين. توفر النماذج ذات العمود الواحد هيكلاً أكثر إحكاماً، بينما توفر النماذج ذات العمودين سعة معالجة أعلى.'}</p>
            </div>
            <div class="product-image-container" style="margin-top:8mm">
                <img src="images/6.jpeg" alt="${model.name}" class="product-image" style="max-height:65mm">
            </div>
        </div>
        <span class="page-number">05</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 6: REFERENCES -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${texts.references}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div style="text-align:center;margin-bottom:6mm">
                <span style="background:var(--primary);color:var(--dark);padding:2mm 6mm;font-weight:700;font-size:12pt">40+ ${lang === 'tr' ? 'Referans' : lang === 'en' ? 'References' : lang === 'ru' ? 'Референсов' : 'مرجع'}</span>
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
                <div class="reference-logo"><img src="../../assets/referanslar/melodi-cikolata-logo.webp" alt="Melodi Çikolata"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/humana-logo.webp" alt="Humana"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/seha-logo.webp" alt="SEHA"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/malatya-buyuksehir-belediyesi-logo.webp" alt="Malatya BB"></div>
                <div class="reference-logo"><img src="../../assets/referanslar/tuzla-belediyesi-logo.webp" alt="Tuzla Belediyesi"></div>
            </div>
            <div class="highlight-box" style="margin-top:8mm">
                <h3>${texts.reliablePartner}</h3>
                <p>${texts.partnerDesc}</p>
            </div>
        </div>
        <span class="page-number">06</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>

    <!-- PAGE 7: OPTIONAL FEATURES & CONTACT -->
    <div class="page">
        <div class="page-content">
            <div class="page-header">
                <div class="section-header" style="margin-bottom:0"><h2>${texts.optionalFeatures}</h2></div>
                <img src="../../assets/logoicon.png" alt="MT Makina" class="page-header-icon">
            </div>
            <div class="two-columns">
                <div class="column">
                    <div class="optional-features">
                        <ul>
                        ${texts.optionalList.map((o: string) => `<li>${o}</li>`).join('\n                        ')}
                        </ul>
                    </div>
                    <div class="product-image-container" style="margin-top:6mm">
                        <img src="images/1.jpeg" alt="${model.name}" class="product-image" style="max-height:55mm">
                    </div>
                </div>
                <div class="column">
                    <div class="contact-box">
                        <h3>${texts.contact}</h3>
                        <div class="contact-info">
                            <div class="contact-item">
                                <strong>${texts.phone}</strong>
                                +90 216 307 62 22
                            </div>
                            <div class="contact-item">
                                <strong>${texts.email}</strong>
                                info@mtmakina.com.tr
                            </div>
                            <div class="contact-item" style="grid-column: span 2">
                                <strong>${texts.address}</strong>
                                ${texts.addressText}
                            </div>
                        </div>
                    </div>
                    <div class="highlight-box" style="margin-top:6mm">
                        <h3>www.parcalamamakinesi.com</h3>
                        <p>${lang === 'tr' ? 'Tüm ürün ve kataloglarımız için web sitemizi ziyaret edin.' :
            lang === 'en' ? 'Visit our website for all products and catalogs.' :
                lang === 'ru' ? 'Посетите наш сайт для всех продуктов и каталогов.' :
                    'قم بزيارة موقعنا لجميع المنتجات والكتالوجات.'}</p>
                    </div>
                </div>
            </div>
        </div>
        <span class="page-number">07</span>
        <div class="page-footer"><span>www.mtmakina.com.tr</span><span>www.parcalamamakinesi.com</span></div>
    </div>
</body>
</html>`;

    return html;
}

// Copy images to catalog directory
function copyImages(modelId: string, targetDir: string): void {
    const sourceDir = path.join(SOURCE_IMAGES_DIR, modelId);
    const imagesDir = path.join(targetDir, 'images');

    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
    }

    if (fs.existsSync(sourceDir)) {
        const files = fs.readdirSync(sourceDir)
            .filter(f => f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.webp'))
            .filter(f => f !== 'Thumbs.db')
            .slice(0, 6);

        files.forEach((file, index) => {
            const ext = path.extname(file);
            const sourcePath = path.join(sourceDir, file);
            const targetPath = path.join(imagesDir, `${index + 1}.jpeg`);
            fs.copyFileSync(sourcePath, targetPath);
        });

        console.log(`  📷 ${files.length} images copied`);
    }
}

// Main execution
console.log('🚀 Mobile Shredder Catalog Generation Started...\n');

// Create base directory
if (!fs.existsSync(BASE_DIR)) {
    fs.mkdirSync(BASE_DIR, { recursive: true });
}

// Generate catalogs for each model
models.forEach(model => {
    console.log(`📁 ${model.name} processing...`);

    const modelDir = path.join(BASE_DIR, model.id);
    if (!fs.existsSync(modelDir)) {
        fs.mkdirSync(modelDir, { recursive: true });
    }

    // Copy images
    copyImages(model.id, modelDir);

    // Generate HTML for each language
    languages.forEach(lang => {
        const html = generateHTML(model, lang);
        const filename = lang === 'tr' ? 'catalog.html' : `catalog-${lang}.html`;
        const filePath = path.join(modelDir, filename);
        fs.writeFileSync(filePath, html, 'utf-8');
        console.log(`  ✅ ${filename}`);
    });

    console.log('');
});

console.log(`🎉 All Mobile Shredder catalogs generated successfully!`);
console.log(`   Total: ${models.length} models x ${languages.length} languages = ${models.length * languages.length} catalogs\n`);
