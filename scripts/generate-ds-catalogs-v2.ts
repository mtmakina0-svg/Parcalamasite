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
