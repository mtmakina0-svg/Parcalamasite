/**
 * DS Serisi (Dört Şaftlı) Katalog Oluşturma Script'i - V2
 * 7 sayfalık detaylı katalog - CS katalog yapısına uygun
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_DIR = 'd:/Furkan/WEB SİTESİ/Parcalamasite/public/catalogs/ds';
const SOURCE_IMAGES_DIR = 'D:/Furkan/WEB SİTESİ/parçalamamakinesi katalog/Dört şaftlı parçalama makinesi katalog';

// Model verileri
const models: Record<string, {
    area: string;
    rotorLength: string;
    motorPower: string;
    shaftCount: string;
    capacity: string;
    tagline: { tr: string; en: string; ru: string; ar: string };
    description: { tr: string; en: string; ru: string; ar: string };
    highlight: { tr: string; en: string; ru: string; ar: string };
    features: { tr: string[]; en: string[]; ru: string[]; ar: string[] };
    materials: { tr: string[]; en: string[]; ru: string[]; ar: string[] };
    applications: { tr: { title: string; desc: string }[]; en: { title: string; desc: string }[]; ru: { title: string; desc: string }[]; ar: { title: string; desc: string }[] };
}> = {
    'ds-80': {
        area: '800 x 800 mm',
        rotorLength: '800 mm',
        motorPower: '11 – 22 kW (4x)',
        shaftCount: '4',
        capacity: '600 - 1000 kg/saat',
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
        },
        features: {
            tr: ['Dört Motor Sistemi', 'Otomatik Ters Dönüş', 'PLC Kontrol Paneli', 'Modüler Bıçak Tasarımı'],
            en: ['Four Motor System', 'Auto Reverse Function', 'PLC Control Panel', 'Modular Blade Design'],
            ru: ['Система Четырех Двигателей', 'Автореверс', 'ПЛК Управление', 'Модульные Ножи'],
            ar: ['نظام أربعة محركات', 'وظيفة الانعكاس التلقائي', 'لوحة تحكم PLC', 'تصميم شفرات معياري']
        },
        materials: {
            tr: ['Plastik Filmler', 'PET Şişeler', 'Karton-Kağıt', 'Tekstil Atıkları', 'Elektronik Atık', 'Kauçuk', 'Ahşap', 'Kablo Atıkları'],
            en: ['Plastic Films', 'PET Bottles', 'Cardboard-Paper', 'Textile Waste', 'E-Waste', 'Rubber', 'Wood', 'Cable Waste'],
            ru: ['Пластиковые Пленки', 'ПЭТ Бутылки', 'Картон-Бумага', 'Текстиль', 'Электронные Отходы', 'Резина', 'Древесина', 'Кабельные Отходы'],
            ar: ['أفلام بلاستيكية', 'زجاجات PET', 'كرتون-ورق', 'نفايات نسيجية', 'نفايات إلكترونية', 'مطاط', 'خشب', 'نفايات كابلات']
        },
        applications: {
            tr: [
                { title: 'Geri Dönüşüm Tesisleri', desc: 'Plastik, kağıt ve karton atıkların ön parçalanması.' },
                { title: 'E-Atık Merkezleri', desc: 'Elektronik kartlar, kablolar ve küçük cihazların güvenli imhası.' },
                { title: 'Belge İmha', desc: 'Gizli evrak ve arşiv belgelerinin güvenli parçalanması.' },
                { title: 'Tekstil Geri Dönüşüm', desc: 'Kumaş ve tekstil atıklarının işlenmesi.' }
            ],
            en: [
                { title: 'Recycling Facilities', desc: 'Pre-shredding of plastic, paper and cardboard waste.' },
                { title: 'E-Waste Centers', desc: 'Safe destruction of electronic boards, cables and small devices.' },
                { title: 'Document Destruction', desc: 'Secure shredding of confidential documents and archives.' },
                { title: 'Textile Recycling', desc: 'Processing of fabric and textile waste.' }
            ],
            ru: [
                { title: 'Перерабатывающие Заводы', desc: 'Предварительное измельчение пластика, бумаги и картона.' },
                { title: 'Центры Э-Отходов', desc: 'Безопасное уничтожение электронных плат и кабелей.' },
                { title: 'Уничтожение Документов', desc: 'Безопасное измельчение конфиденциальных документов.' },
                { title: 'Переработка Текстиля', desc: 'Обработка тканевых и текстильных отходов.' }
            ],
            ar: [
                { title: 'مرافق إعادة التدوير', desc: 'التمزيق المسبق للبلاستيك والورق والكرتون.' },
                { title: 'مراكز النفايات الإلكترونية', desc: 'التدمير الآمن للوحات الإلكترونية والكابلات.' },
                { title: 'تدمير المستندات', desc: 'تمزيق آمن للوثائق السرية والأرشيف.' },
                { title: 'إعادة تدوير المنسوجات', desc: 'معالجة نفايات الأقمشة والمنسوجات.' }
            ]
        }
    },
    'ds-100': {
        area: '1000 x 1000 mm',
        rotorLength: '1000 mm',
        motorPower: '22 – 45 kW (4x)',
        shaftCount: '4',
        capacity: '1000 - 1800 kg/saat',
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
            ru: 'Четыре независимых привода гарантируют бесперебойную работу с любыми материалами. Автоматическая система реверса предотвращает заторы.',
            ar: 'أربع وحدات دفع مستقلة تضمن التشغيل المستمر مع جميع المواد. نظام الانعكاس التلقائي يمنع الانسداد.'
        },
        features: {
            tr: ['Siemens PLC Otomasyon', 'Yük İzleme Sistemi', '7/24 Çalışma Kapasitesi', 'Çift Kademeli Elek'],
            en: ['Siemens PLC Automation', 'Load Monitoring System', '24/7 Operation Capacity', 'Dual-Stage Screen'],
            ru: ['Автоматизация Siemens ПЛК', 'Мониторинг Нагрузки', 'Работа 24/7', 'Двухступенчатое Сито'],
            ar: ['أتمتة Siemens PLC', 'نظام مراقبة الحمل', 'قدرة التشغيل 24/7', 'غربال مزدوج المرحلة']
        },
        materials: {
            tr: ['Endüstriyel Plastik', 'Elektronik Kartlar', 'Kablo Atıkları', 'Kompozit Malzeme', 'Lastikler', 'Metal Hurda', 'Ahşap Paletler', 'Tekstil'],
            en: ['Industrial Plastic', 'Electronic Boards', 'Cable Waste', 'Composite Materials', 'Tires', 'Metal Scrap', 'Wood Pallets', 'Textiles'],
            ru: ['Промышленный Пластик', 'Электронные Платы', 'Кабельные Отходы', 'Композиты', 'Шины', 'Металлолом', 'Деревянные Поддоны', 'Текстиль'],
            ar: ['بلاستيك صناعي', 'ألواح إلكترونية', 'نفايات كابلات', 'مواد مركبة', 'إطارات', 'خردة معدنية', 'منصات خشبية', 'منسوجات']
        },
        applications: {
            tr: [
                { title: 'Plastik Geri Dönüşüm', desc: 'Endüstriyel plastik atıkların ön işleme ve boyut küçültme.' },
                { title: 'E-Atık İşleme', desc: 'Bilgisayar parçaları, devre kartları ve elektronik cihazlar.' },
                { title: 'Lastik Geri Dönüşüm', desc: 'Araç lastikleri ve kauçuk ürünlerin parçalanması.' },
                { title: 'Endüstriyel Üretim', desc: 'Üretim firesi ve hatalı ürünlerin yerinde imhası.' }
            ],
            en: [
                { title: 'Plastic Recycling', desc: 'Pre-processing and size reduction of industrial plastic waste.' },
                { title: 'E-Waste Processing', desc: 'Computer parts, circuit boards and electronic devices.' },
                { title: 'Tire Recycling', desc: 'Shredding of vehicle tires and rubber products.' },
                { title: 'Industrial Production', desc: 'On-site destruction of production scrap and defective products.' }
            ],
            ru: [
                { title: 'Переработка Пластика', desc: 'Предварительная обработка промышленных пластиковых отходов.' },
                { title: 'Переработка Э-Отходов', desc: 'Компьютерные части, платы и электронные устройства.' },
                { title: 'Переработка Шин', desc: 'Измельчение автомобильных шин и резиновых изделий.' },
                { title: 'Промышленное Производство', desc: 'Уничтожение производственного брака на месте.' }
            ],
            ar: [
                { title: 'إعادة تدوير البلاستيك', desc: 'المعالجة المسبقة للنفايات البلاستيكية الصناعية.' },
                { title: 'معالجة النفايات الإلكترونية', desc: 'قطع الكمبيوتر ولوحات الدوائر والأجهزة الإلكترونية.' },
                { title: 'إعادة تدوير الإطارات', desc: 'تمزيق إطارات المركبات والمنتجات المطاطية.' },
                { title: 'الإنتاج الصناعي', desc: 'التخلص من نفايات الإنتاج في الموقع.' }
            ]
        }
    },
    'ds-150': {
        area: '1500 x 1500 mm',
        rotorLength: '1500 mm',
        motorPower: '45 – 132 kW (4x)',
        shaftCount: '4',
        capacity: '2000 - 3500 kg/saat',
        tagline: {
            tr: 'Yüksek Kapasite, Maksimum Verim',
            en: 'High Capacity, Maximum Efficiency',
            ru: 'Высокая Производительность, Максимальная Эффективность',
            ar: 'سعة عالية، كفاءة قصوى'
        },
        description: {
            tr: 'DS-150, büyük ölçekli geri dönüşüm tesisleri için tasarlanmış yüksek kapasiteli dört şaftlı parçalama makinesidir. 1500x1500mm parçalama alanı ve 4x45-132kW motor gücü ile saatte tonlarca atık işleyebilir.',
            en: 'The DS-150 is a high-capacity four shaft shredder designed for large-scale recycling plants. With its 1500x1500mm shredding area and 4x45-132kW motor power, it can process tons of waste per hour.',
            ru: 'DS-150 — высокопроизводительный четырехвальный шредер для крупных перерабатывающих предприятий. С зоной измельчения 1500x1500мм и мощностью 4x45-132кВт.',
            ar: 'DS-150 هي آلة تمزيق رباعية العمود عالية السعة لمصانع إعادة التدوير الكبيرة. مع منطقة تمزيق 1500×1500 مم.'
        },
        highlight: {
            tr: 'Dört şaftın senkronize çalışması ile zorlu malzemelerde bile tıkanma olmaz. Hurda araç parçalama, büyük lastik geri dönüşümü ve karışık atık tesisleri için ideal.',
            en: 'Synchronized operation of four shafts prevents blockage even with difficult materials. Ideal for scrap vehicle shredding, large tire recycling, and mixed waste facilities.',
            ru: 'Синхронная работа четырех валов предотвращает засорение даже со сложными материалами. Идеально для дробления автомобилей и крупных шин.',
            ar: 'التشغيل المتزامن لأربعة أعمدة يمنع الانسداد حتى مع المواد الصعبة. مثالي لتمزيق السيارات والإطارات الكبيرة.'
        },
        features: {
            tr: ['Endüstri 4.0 Uyumlu', 'SCADA Entegrasyonu', 'Hidrolik Baskı Ünitesi', 'Üç Kademeli Elek'],
            en: ['Industry 4.0 Compatible', 'SCADA Integration', 'Hydraulic Pusher Unit', 'Three-Stage Screen'],
            ru: ['Совместимость с Индустрией 4.0', 'Интеграция SCADA', 'Гидравлический Толкатель', 'Трехступенчатое Сито'],
            ar: ['متوافق مع الصناعة 4.0', 'تكامل SCADA', 'وحدة دفع هيدروليكية', 'غربال ثلاثي المراحل']
        },
        materials: {
            tr: ['Hurda Araçlar', 'Büyük Lastikler', 'Belediye Atığı', 'Ağaç Gövdeleri', 'Metal Yapılar', 'Plastik Bloklar', 'Karışık Atık', 'İnşaat Atığı'],
            en: ['Scrap Vehicles', 'Large Tires', 'Municipal Waste', 'Tree Trunks', 'Metal Structures', 'Plastic Blocks', 'Mixed Waste', 'Construction Waste'],
            ru: ['Автомобильный Лом', 'Крупные Шины', 'Муниципальные Отходы', 'Стволы Деревьев', 'Металлоконструкции', 'Пластиковые Блоки', 'Смешанные Отходы', 'Строительные Отходы'],
            ar: ['سيارات خردة', 'إطارات كبيرة', 'نفايات بلدية', 'جذوع أشجار', 'هياكل معدنية', 'كتل بلاستيكية', 'نفايات مختلطة', 'نفايات بناء']
        },
        applications: {
            tr: [
                { title: 'Belediye Atık Tesisleri', desc: 'Karışık belediye atıklarının ön parçalaması ve hacim küçültme.' },
                { title: 'Hurda Araç İşleme', desc: 'Araç parçaları ve büyük metal yapıların parçalanması.' },
                { title: 'Büyük Lastik Geri Dönüşüm', desc: 'Kamyon ve iş makinesi lastiklerinin işlenmesi.' },
                { title: 'Mega Geri Dönüşüm Kompleksleri', desc: 'Yüksek kapasiteli entegre geri dönüşüm tesisleri.' }
            ],
            en: [
                { title: 'Municipal Waste Facilities', desc: 'Pre-shredding and volume reduction of mixed municipal waste.' },
                { title: 'Scrap Vehicle Processing', desc: 'Shredding of vehicle parts and large metal structures.' },
                { title: 'Large Tire Recycling', desc: 'Processing of truck and construction equipment tires.' },
                { title: 'Mega Recycling Complexes', desc: 'High-capacity integrated recycling facilities.' }
            ],
            ru: [
                { title: 'Муниципальные Объекты', desc: 'Предварительное измельчение смешанных муниципальных отходов.' },
                { title: 'Переработка Автолома', desc: 'Измельчение автозапчастей и крупных металлоконструкций.' },
                { title: 'Переработка Крупных Шин', desc: 'Обработка шин грузовиков и строительной техники.' },
                { title: 'Мега-Комплексы Переработки', desc: 'Высокопроизводительные интегрированные объекты.' }
            ],
            ar: [
                { title: 'مرافق النفايات البلدية', desc: 'التمزيق المسبق وتقليل حجم النفايات البلدية المختلطة.' },
                { title: 'معالجة سيارات الخردة', desc: 'تمزيق أجزاء المركبات والهياكل المعدنية الكبيرة.' },
                { title: 'إعادة تدوير الإطارات الكبيرة', desc: 'معالجة إطارات الشاحنات ومعدات البناء.' },
                { title: 'مجمعات إعادة التدوير الضخمة', desc: 'مرافق إعادة التدوير المتكاملة عالية السعة.' }
            ]
        }
    },
    'ds-200': {
        area: '2000 x 2000 mm',
        rotorLength: '2000 mm',
        motorPower: '75 – 160 kW (4x)',
        shaftCount: '4',
        capacity: '3500 - 6000 kg/saat',
        tagline: {
            tr: 'Serinin Amiral Gemisi',
            en: 'The Flagship of the Series',
            ru: 'Флагман Серии',
            ar: 'الرائد في السلسلة'
        },
        description: {
            tr: 'DS-200, dört şaftlı parçalama makinesi serisinin en büyük ve en güçlü modelidir. 2000x2000mm dev parçalama alanı ve 4x75-160kW motor gücü ile mega ölçekli projelerin tüm ihtiyaçlarını karşılar.',
            en: 'The DS-200 is the largest and most powerful model in our four shaft shredder series. With its giant 2000x2000mm shredding area and 4x75-160kW motor power, it meets all needs of mega-scale projects.',
            ru: 'DS-200 — самая большая и мощная модель серии четырехвальных шредеров. С гигантской зоной измельчения 2000x2000мм и мощностью 4x75-160кВт.',
            ar: 'DS-200 هي أكبر وأقوى نموذج في سلسلة آلات التمزيق رباعية العمود. مع منطقة تمزيق ضخمة 2000×2000 مم.'
        },
        highlight: {
            tr: 'Yapay zeka destekli otomasyon, dijital ikiz teknolojisi ve IoT sensör ağı ile Endüstri 5.0 standartlarının öncüsüdür. 5 yıl platinum garanti ile desteklenir.',
            en: 'Pioneers Industry 5.0 standards with AI-assisted automation, digital twin technology and IoT sensor network. Supported by 5-year platinum warranty.',
            ru: 'Пионер стандартов Индустрии 5.0 с автоматизацией на базе ИИ, технологией цифрового двойника и сетью датчиков IoT. 5 лет платиновой гарантии.',
            ar: 'رائد في معايير الصناعة 5.0 مع الأتمتة بمساعدة الذكاء الاصطناعي وتقنية التوأم الرقمي. ضمان بلاتيني 5 سنوات.'
        },
        features: {
            tr: ['AI Destekli Otomasyon', 'Digital Twin Teknolojisi', 'IoT Sensör Ağı', 'Regeneratif Enerji'],
            en: ['AI-Assisted Automation', 'Digital Twin Technology', 'IoT Sensor Network', 'Regenerative Energy'],
            ru: ['Автоматизация с ИИ', 'Технология Цифрового Двойника', 'Сеть Датчиков IoT', 'Регенеративная Энергия'],
            ar: ['أتمتة بالذكاء الاصطناعي', 'تقنية التوأم الرقمي', 'شبكة أجهزة استشعار IoT', 'طاقة تجديدية']
        },
        materials: {
            tr: ['Mega Ölçekli Atık', 'Komple Araçlar', 'Dev Lastikler', 'Endüstriyel Hurda', 'Konteynerler', 'Ağır Metal', 'Yoğun Plastik', 'Her Türlü Atık'],
            en: ['Mega-Scale Waste', 'Complete Vehicles', 'Giant Tires', 'Industrial Scrap', 'Containers', 'Heavy Metal', 'Dense Plastic', 'All Types of Waste'],
            ru: ['Мег-Отходы', 'Целые Автомобили', 'Гигантские Шины', 'Промышленный Лом', 'Контейнеры', 'Тяжелый Металл', 'Плотный Пластик', 'Все Виды Отходов'],
            ar: ['نفايات ضخمة', 'مركبات كاملة', 'إطارات عملاقة', 'خردة صناعية', 'حاويات', 'معادن ثقيلة', 'بلاستيك كثيف', 'جميع أنواع النفايات']
        },
        applications: {
            tr: [
                { title: 'Global Geri Dönüşüm Kompleksleri', desc: 'Uluslararası standartlarda entegre mega tesisler.' },
                { title: 'Mega E-Atık Tesisleri', desc: 'Ülke çapında elektronik atık işleme merkezleri.' },
                { title: 'Endüstriyel Hurda İşleme', desc: 'Ağır sanayi hurda ve metal yönetimi.' },
                { title: 'Turnkey Proje Çözümleri', desc: 'Komple atık yönetim sistemleri kurulumu.' }
            ],
            en: [
                { title: 'Global Recycling Complexes', desc: 'International-standard integrated mega facilities.' },
                { title: 'Mega E-Waste Facilities', desc: 'Nationwide electronic waste processing centers.' },
                { title: 'Industrial Scrap Processing', desc: 'Heavy industry scrap and metal management.' },
                { title: 'Turnkey Project Solutions', desc: 'Complete waste management system installations.' }
            ],
            ru: [
                { title: 'Глобальные Комплексы Переработки', desc: 'Мега-объекты международного стандарта.' },
                { title: 'Мега-Объекты Э-Отходов', desc: 'Общенациональные центры переработки.' },
                { title: 'Переработка Промышленного Лома', desc: 'Управление ломом тяжелой промышленности.' },
                { title: 'Проекты Под Ключ', desc: 'Установка комплексных систем управления отходами.' }
            ],
            ar: [
                { title: 'مجمعات إعادة التدوير العالمية', desc: 'مرافق ضخمة بمعايير دولية.' },
                { title: 'مرافق النفايات الإلكترونية الضخمة', desc: 'مراكز معالجة النفايات الإلكترونية على مستوى البلاد.' },
                { title: 'معالجة الخردة الصناعية', desc: 'إدارة خردة ومعادن الصناعات الثقيلة.' },
                { title: 'حلول المشاريع المتكاملة', desc: 'تركيب أنظمة إدارة النفايات الكاملة.' }
            ]
        }
    }
};

// Opsiyonel özellikler
const optionalFeatures = {
    tr: ['Kayış Kasnaklı Hidrolik Kaplin', 'Rotor Soğutma Sistemi', 'Otomatik Yağlama Ünitesi', 'Hidrolik Baskı Ünitesi', 'Farklı Ölçülerde Elek', 'Cıvatalı sökülebilen bıçak tasarımı', 'Hidromotor tahrik sistemi', 'Ofis ve endüstriyel tip şase tasarımı', 'Çıkış İçin Konveyör Uygulamaları'],
    en: ['Belt Pulley Hydraulic Coupling', 'Rotor Cooling System', 'Automatic Lubrication Unit', 'Hydraulic Pusher Unit', 'Various Screen Sizes', 'Bolt-on removable blade design', 'Hydromotor drive system', 'Office and industrial type chassis design', 'Conveyor Applications for Output'],
    ru: ['Гидромуфта с Ременным Шкивом', 'Система Охлаждения Ротора', 'Автоматическая Смазка', 'Гидравлический Толкатель', 'Различные Размеры Сит', 'Съемные Ножи на Болтах', 'Гидромоторный Привод', 'Офисное и Промышленное Шасси', 'Конвейер для Выхода'],
    ar: ['وصلة هيدروليكية بكرة حزام', 'نظام تبريد الدوار', 'وحدة تشحيم تلقائية', 'وحدة دفع هيدروليكية', 'أحجام غربال مختلفة', 'تصميم شفرات قابلة للإزالة بالمسامير', 'نظام دفع هيدروموتور', 'تصميم هيكل مكتبي وصناعي', 'تطبيقات ناقل للمخرجات']
};

// Dil yapılandırması
const languages = {
    tr: { code: 'tr', locale: 'tr_TR', suffix: '' },
    en: { code: 'en', locale: 'en_US', suffix: '-en' },
    ru: { code: 'ru', locale: 'ru_RU', suffix: '-ru' },
    ar: { code: 'ar', locale: 'ar_SA', suffix: '-ar' }
};

// Sayfa başlıkları
const pageTexts = {
    productIntro: { tr: 'Ürün Tanıtımı', en: 'Product Introduction', ru: 'Описание Продукта', ar: 'وصف المنتج' },
    whyModel: { tr: 'Neden', en: 'Why', ru: 'Почему', ar: 'لماذا' },
    applicationAreas: { tr: 'Uygulama Alanları', en: 'Application Areas', ru: 'Области Применения', ar: 'مجالات التطبيق' },
    technicalDetails: { tr: 'Teknik Detaylar', en: 'Technical Details', ru: 'Технические Детали', ar: 'التفاصيل التقنية' },
    specSheet: { tr: 'Teknik Kimlik Kartı', en: 'Technical Specification Sheet', ru: 'Технический Паспорт', ar: 'ورقة المواصفات الفنية' },
    references: { tr: 'Referanslarımız', en: 'Our References', ru: 'Наши Референсы', ar: 'مراجعنا' },
    optionalFeatures: { tr: 'Opsiyonel Özellikler', en: 'Optional Features', ru: 'Опции', ar: 'ميزات اختيارية' },
    contactUs: { tr: 'Bizimle İletişime Geçin', en: 'Contact Us', ru: 'Свяжитесь С Нами', ar: 'اتصل بنا' },
    quadShaftShredder: { tr: 'Dört Şaftlı Parçalama Makinesi', en: 'Four Shaft Shredder', ru: 'Четырехвальный Шредер', ar: 'آلة تمزيق رباعية العمود' },
    productCatalog: { tr: 'ÜRÜN KATALOĞU', en: 'PRODUCT CATALOG', ru: 'КАТАЛОГ ПРОДУКЦИИ', ar: 'كتالوج المنتجات' },
    advantages: { tr: 'Avantajları', en: 'Advantages', ru: 'Преимущества', ar: 'المزايا' },
    standardEquipment: { tr: 'Standart Donanım', en: 'Standard Equipment', ru: 'Стандартное Оборудование', ar: 'المعدات القياسية' },
    detailedSpecs: { tr: 'Detaylı Teknik Özellikler', en: 'Detailed Technical Specifications', ru: 'Подробные Характеристики', ar: 'المواصفات التفصيلية' },
    materials: { tr: 'Parçalanabilir Malzemeler', en: 'Shreddable Materials', ru: 'Измельчаемые Материалы', ar: 'المواد القابلة للتمزيق' },
    motorPower: { tr: 'Motor Gücü', en: 'Motor Power', ru: 'Мощность Двигателя', ar: 'قوة المحرك' },
    shreddingArea: { tr: 'Parçalama Alanı', en: 'Shredding Area', ru: 'Зона Измельчения', ar: 'منطقة التمزيق' },
    rotorLength: { tr: 'Rotor Boyu', en: 'Rotor Length', ru: 'Длина Ротора', ar: 'طول الدوار' },
    shaftCount: { tr: 'Şaft Sayısı', en: 'Number of Shafts', ru: 'Количество Валов', ar: 'عدد الأعمدة' },
    capacity: { tr: 'Kapasite', en: 'Capacity', ru: 'Производительность', ar: 'السعة' },
    address: { tr: 'ADRES', en: 'ADDRESS', ru: 'АДРЕС', ar: 'العنوان' },
    phone: { tr: 'TELEFON', en: 'PHONE', ru: 'ТЕЛЕФОН', ar: 'الهاتف' },
    bodyMaterial: { tr: 'Gövde Malzemesi', en: 'Body Material', ru: 'Материал Корпуса', ar: 'مادة الجسم' },
    bladeMaterial: { tr: 'Bıçak Malzemesi', en: 'Blade Material', ru: 'Материал Ножей', ar: 'مادة الشفرات' },
    driveSystem: { tr: 'Tahrik Sistemi', en: 'Drive System', ru: 'Привод', ar: 'نظام القيادة' },
    controlSystem: { tr: 'Kontrol Sistemi', en: 'Control System', ru: 'Управление', ar: 'نظام التحكم' }
};

console.log('DS Katalog oluşturma scripti başlatıldı...');
console.log('Model sayısı:', Object.keys(models).length);

Object.keys(models).forEach(modelId => {
    console.log(`İşleniyor: ${modelId}`);
});

console.log('\nScript yapılandırması tamamlandı.');
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
