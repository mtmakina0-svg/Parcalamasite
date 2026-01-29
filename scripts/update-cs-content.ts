/**
 * CS Katalog Benzersiz İçerik Güncelleme Script'i
 * Her model için özgün SEO açıklamaları ve teknik özellikler
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_DIR = 'd:/Furkan/WEB SİTESİ/Parcalamasite/public/catalogs/cs';

// Her model için benzersiz özellikler ve açıklamalar
const modelData: Record<string, {
    area: string;
    rotorLength: string;
    motorPower: string;
    segment: { tr: string; en: string; ru: string; ar: string };
    intro: { tr: string; en: string; ru: string; ar: string };
    whyThis: { tr: string; en: string; ru: string; ar: string };
    advantages: { tr: string; en: string; ru: string; ar: string };
    metaDesc: { tr: string; en: string; ru: string; ar: string };
    tagline: { tr: string; en: string; ru: string; ar: string };
}> = {
    'cs-20': {
        area: '200 x 200 mm',
        rotorLength: '200 mm',
        motorPower: '2.2 – 11 kW',
        segment: {
            tr: 'en kompakt modeli olarak küçük işletmeler ve laboratuvarlar için ideal çözüm',
            en: 'the most compact model offering an ideal solution for small businesses and laboratories',
            ru: 'самая компактная модель, предлагающая идеальное решение для малого бизнеса и лабораторий',
            ar: 'النموذج الأكثر إحكامًا ويقدم حلاً مثاليًا للشركات الصغيرة والمختبرات'
        },
        intro: {
            tr: 'CS-20, çift şaftlı parçalama makinesi serisinin en kompakt modeli olarak küçük ölçekli atık yönetimi için tasarlanmıştır. 200x200mm parçalama alanı ile sınırlı alanlarda etkili performans sunar. Laboratuvar ortamlarından küçük üretim tesislerine kadar geniş kullanım alanı sağlar.',
            en: 'CS-20 is the most compact model in the dual shaft shredder series, designed for small-scale waste management. With its 200x200mm shredding area, it offers effective performance in limited spaces. It provides wide usage from laboratory environments to small production facilities.',
            ru: 'CS-20 — самая компактная модель в серии двухвальных шредеров, предназначенная для управления отходами малого масштаба. С зоной измельчения 200x200мм она обеспечивает эффективную производительность в ограниченных пространствах.',
            ar: 'CS-20 هو النموذج الأكثر إحكامًا في سلسلة آلات التمزيق ثنائية العمود، مصمم لإدارة النفايات على نطاق صغير. مع منطقة تمزيق 200×200 مم، يوفر أداءً فعالاً في المساحات المحدودة.'
        },
        whyThis: {
            tr: 'Kompakt tasarımı sayesinde ofis ve laboratuvar ortamlarına uygun. Düşük gürültü seviyesi ve kolay bakım özellikleri ile öne çıkar. Küçük hacimli elektronik atık, belge imhası ve numune hazırlama işlemlerinde ideal performans.',
            en: 'Compact design suitable for office and laboratory environments. Distinguished by low noise levels and easy maintenance. Ideal performance for small volume e-waste, document destruction and sample preparation.',
            ru: 'Компактный дизайн, подходящий для офисных и лабораторных условий. Отличается низким уровнем шума и простотой обслуживания. Идеальная производительность для небольших объемов электронных отходов.',
            ar: 'تصميم مدمج مناسب لبيئات المكاتب والمختبرات. يتميز بمستويات ضوضاء منخفضة وسهولة الصيانة. أداء مثالي للنفايات الإلكترونية ذات الحجم الصغير.'
        },
        advantages: {
            tr: '• Kompakt boyut, kolay yerleşim • Düşük enerji tüketimi • Sessiz çalışma • Kolay bakım ve temizlik',
            en: '• Compact size, easy placement • Low energy consumption • Silent operation • Easy maintenance and cleaning',
            ru: '• Компактные размеры • Низкое энергопотребление • Тихая работа • Простое обслуживание',
            ar: '• حجم مدمج، سهل التركيب • استهلاك طاقة منخفض • تشغيل هادئ • صيانة وتنظيف سهل'
        },
        metaDesc: {
            tr: 'CS-20 çift şaftlı parçalama makinesi - 200x200mm kompakt parçalama alanı. Küçük işletmeler ve laboratuvarlar için ideal. 2.2-11 kW motor gücü.',
            en: 'CS-20 dual shaft shredder - 200x200mm compact shredding area. Ideal for small businesses and laboratories. 2.2-11 kW motor power.',
            ru: 'Двухвальный шредер CS-20 - компактная зона измельчения 200x200мм. Идеально для малого бизнеса и лабораторий. Мощность 2.2-11 кВт.',
            ar: 'آلة تمزيق ثنائية العمود CS-20 - منطقة تمزيق مدمجة 200×200 مم. مثالية للشركات الصغيرة والمختبرات.'
        },
        tagline: {
            tr: 'Kompakt Güç, Büyük Sonuçlar',
            en: 'Compact Power, Big Results',
            ru: 'Компактная Мощность, Большие Результаты',
            ar: 'قوة مدمجة، نتائج كبيرة'
        }
    },
    'cs-40': {
        area: '400 x 400 mm',
        rotorLength: '400 mm',
        motorPower: '5.5 – 22 kW',
        segment: {
            tr: 'orta ölçekli tesisler için optimize edilmiş verimli çözüm',
            en: 'efficient solution optimized for medium-sized facilities',
            ru: 'эффективное решение, оптимизированное для средних предприятий',
            ar: 'حل فعال مُحسّن للمرافق متوسطة الحجم'
        },
        intro: {
            tr: 'CS-40, çift şaftlı parçalama makinesi serisinin orta segment modeli olarak atık geri dönüşüm tesisleri için optimize edilmiştir. 400x400mm parçalama alanı ve 5.5-22 kW motor gücü ile günlük operasyonlarda yüksek verim sağlar. Plastik, ahşap ve hafif metal atıkların işlenmesinde mükemmel performans sunar.',
            en: 'CS-40 is the mid-range model in the dual shaft shredder series, optimized for waste recycling facilities. With its 400x400mm shredding area and 5.5-22 kW motor power, it provides high efficiency in daily operations. Offers excellent performance in processing plastic, wood and light metal waste.',
            ru: 'CS-40 — модель среднего класса в серии двухвальных шредеров, оптимизированная для предприятий по переработке отходов. С зоной измельчения 400x400мм и мощностью 5.5-22 кВт обеспечивает высокую эффективность.',
            ar: 'CS-40 هو النموذج متوسط المدى في سلسلة آلات التمزيق ثنائية العمود، محسّن لمرافق إعادة تدوير النفايات. مع منطقة تمزيق 400×400 مم وقوة محرك 5.5-22 كيلوواط.'
        },
        whyThis: {
            tr: 'Dengeli güç-boyut oranı ile orta ölçekli tesislerde ideal seçim. Plastik kasalar, ahşap paletler ve karışık atıkların ön parçalamasında yüksek verim. Granülatör besleme hattı için optimum çıktı boyutu.',
            en: 'Ideal choice for medium-sized facilities with balanced power-size ratio. High efficiency in pre-shredding plastic crates, wooden pallets and mixed waste. Optimum output size for granulator feed line.',
            ru: 'Идеальный выбор для средних предприятий со сбалансированным соотношением мощности и размера. Высокая эффективность в предварительном измельчении пластиковых ящиков.',
            ar: 'خيار مثالي للمرافق متوسطة الحجم مع نسبة متوازنة بين القوة والحجم. كفاءة عالية في التمزيق المسبق للصناديق البلاستيكية.'
        },
        advantages: {
            tr: '• Dengeli güç-verim oranı • Çok yönlü kullanım • Düşük işletme maliyeti • Hızlı yatırım geri dönüşü',
            en: '• Balanced power-efficiency ratio • Versatile usage • Low operating cost • Fast return on investment',
            ru: '• Сбалансированное соотношение мощности • Универсальное использование • Низкие эксплуатационные расходы',
            ar: '• نسبة قوة-كفاءة متوازنة • استخدام متعدد الأغراض • تكلفة تشغيل منخفضة'
        },
        metaDesc: {
            tr: 'CS-40 çift şaftlı parçalama makinesi - 400x400mm parçalama alanı. Orta ölçekli tesisler için ideal. 5.5-22 kW motor, yüksek verim.',
            en: 'CS-40 dual shaft shredder - 400x400mm shredding area. Ideal for medium-sized facilities. 5.5-22 kW motor, high efficiency.',
            ru: 'Двухвальный шредер CS-40 - зона измельчения 400x400мм. Идеально для средних предприятий. Мощность 5.5-22 кВт.',
            ar: 'آلة تمزيق ثنائية العمود CS-40 - منطقة تمزيق 400×400 مم. مثالية للمرافق متوسطة الحجم.'
        },
        tagline: {
            tr: 'Verimli Parçalama, Ekonomik Çözüm',
            en: 'Efficient Shredding, Economic Solution',
            ru: 'Эффективное Измельчение, Экономичное Решение',
            ar: 'تمزيق فعال، حل اقتصادي'
        }
    },
    'cs-60': {
        area: '600 x 600 mm',
        rotorLength: '600 mm',
        motorPower: '11 – 45 kW',
        segment: {
            tr: 'endüstriyel geri dönüşüm için güçlü ve güvenilir çözüm',
            en: 'powerful and reliable solution for industrial recycling',
            ru: 'мощное и надежное решение для промышленной переработки',
            ar: 'حل قوي وموثوق لإعادة التدوير الصناعي'
        },
        intro: {
            tr: 'CS-60, çift şaftlı parçalama makinesi serisinin endüstriyel segment modeli olarak zorlu atık yönetiminde güçlü çözüm sunar. 600x600mm parçalama alanı ve 11-45 kW çift motor sistemi ile yüksek tork kapasitesi sağlar. Karşılıklı dönen rotorlar sayesinde sert plastikler, metal hurdalar ve hacimli malzemeler kontrollü şekilde parçalanır.',
            en: 'CS-60 is the industrial segment model in the dual shaft shredder series offering a powerful solution for tough waste management. With its 600x600mm shredding area and 11-45 kW dual motor system, it provides high torque capacity. Counter-rotating rotors allow controlled shredding of hard plastics, metal scraps and bulky materials.',
            ru: 'CS-60 — модель промышленного сегмента в серии двухвальных шредеров, предлагающая мощное решение для сложного управления отходами. С зоной измельчения 600x600мм и двухмоторной системой 11-45 кВт обеспечивает высокий крутящий момент.',
            ar: 'CS-60 هو نموذج القطاع الصناعي في سلسلة آلات التمزيق ثنائية العمود، يقدم حلاً قويًا لإدارة النفايات الصعبة. مع منطقة تمزيق 600×600 مم ونظام محرك مزدوج 11-45 كيلوواط.'
        },
        whyThis: {
            tr: 'Çift şaftlı tasarımı sayesinde sert plastikler, metal hurda ve hacimli malzemeleri kolayca parçalar. Düşük devir-yüksek tork prensibi ile enerji verimliliği sağlarken, otomatik geri dönüş sistemi sistemi korur.',
            en: 'Easily shreds hard plastics, metal scrap and bulky materials thanks to dual shaft design. Provides energy efficiency with low speed-high torque principle while automatic reverse system protects the system.',
            ru: 'Легко измельчает твердые пластики, металлолом и объемные материалы благодаря двухвальной конструкции. Обеспечивает энергоэффективность с принципом низкой скорости и высокого крутящего момента.',
            ar: 'يمزق بسهولة البلاستيك الصلب والخردة المعدنية والمواد الضخمة بفضل التصميم ثنائي العمود. يوفر كفاءة الطاقة مع مبدأ السرعة المنخفضة والعزم العالي.'
        },
        advantages: {
            tr: '• Yüksek tork kapasitesi • Zorlu malzemelere dayanıklılık • Çok yönlü kullanım • Uzun bakım aralıkları',
            en: '• High torque capacity • Durability for tough materials • Versatile usage • Long maintenance intervals',
            ru: '• Высокий крутящий момент • Долговечность для сложных материалов • Универсальность • Длительные интервалы обслуживания',
            ar: '• سعة عزم دوران عالية • متانة للمواد الصعبة • استخدام متعدد الأغراض • فترات صيانة طويلة'
        },
        metaDesc: {
            tr: 'CS-60 çift şaftlı parçalama makinesi - 600x600mm parçalama alanı. Endüstriyel atık yönetimi için 11-45 kW çift motor, yüksek tork.',
            en: 'CS-60 dual shaft shredder - 600x600mm shredding area. 11-45 kW dual motor for industrial waste management, high torque.',
            ru: 'Двухвальный шредер CS-60 - зона измельчения 600x600мм. Двойной мотор 11-45 кВт для промышленной переработки.',
            ar: 'آلة تمزيق ثنائية العمود CS-60 - منطقة تمزيق 600×600 مم. محرك مزدوج 11-45 كيلوواط لإدارة النفايات الصناعية.'
        },
        tagline: {
            tr: 'Çift Güç, Maksimum Tork',
            en: 'Dual Power, Maximum Torque',
            ru: 'Двойная Мощность, Максимальный Крутящий Момент',
            ar: 'قوة مزدوجة، عزم دوران أقصى'
        }
    },
    'cs-80': {
        area: '800 x 800 mm',
        rotorLength: '800 mm',
        motorPower: '22 – 75 kW',
        segment: {
            tr: 'ağır sanayi uygulamaları için yüksek kapasiteli performans',
            en: 'high capacity performance for heavy industrial applications',
            ru: 'высокопроизводительная работа для тяжелых промышленных применений',
            ar: 'أداء عالي السعة للتطبيقات الصناعية الثقيلة'
        },
        intro: {
            tr: 'CS-80, çift şaftlı parçalama makinesi serisinin ağır sanayi modeli olarak büyük hacimli atık işlemede üstün performans sunar. 800x800mm geniş parçalama alanı ve 22-75 kW güçlü motor sistemi ile saatlik yüksek işleme kapasitesi sağlar. İnşaat atıkları, büyük plastik konteynerler ve ağır metal hurdaların parçalanmasında tercih edilen model.',
            en: 'CS-80 is the heavy industry model in the dual shaft shredder series offering superior performance in high-volume waste processing. With its 800x800mm wide shredding area and 22-75 kW powerful motor system, it provides high hourly processing capacity. Preferred model for shredding construction waste, large plastic containers and heavy metal scraps.',
            ru: 'CS-80 — модель для тяжелой промышленности в серии двухвальных шредеров, обеспечивающая превосходную производительность при обработке больших объемов отходов. С широкой зоной измельчения 800x800мм и мощной моторной системой 22-75 кВт.',
            ar: 'CS-80 هو نموذج الصناعة الثقيلة في سلسلة آلات التمزيق ثنائية العمود، يوفر أداءً متفوقًا في معالجة النفايات ذات الحجم الكبير. مع منطقة تمزيق واسعة 800×800 مم ونظام محرك قوي 22-75 كيلوواط.'
        },
        whyThis: {
            tr: 'Geniş besleme ağzı sayesinde büyük ve hacimli malzemeler kesintisiz işlenir. Hidrolik kaplin sistemi aşırı yüklerde motorları korur. Yüksek saatlik kapasite ile büyük ölçekli geri dönüşüm tesislerinin vazgeçilmezi.',
            en: 'Large and bulky materials are processed continuously thanks to wide feed opening. Hydraulic coupling system protects motors during overloads. Indispensable for large-scale recycling facilities with high hourly capacity.',
            ru: 'Большие и объемные материалы обрабатываются непрерывно благодаря широкому загрузочному отверстию. Гидравлическая муфта защищает двигатели при перегрузках.',
            ar: 'تتم معالجة المواد الكبيرة والضخمة بشكل مستمر بفضل فتحة التغذية الواسعة. نظام القابض الهيدروليكي يحمي المحركات عند التحميل الزائد.'
        },
        advantages: {
            tr: '• Geniş besleme ağzı • Yüksek saatlik kapasite • Ağır yük dayanımı • Hidrolik koruma sistemi',
            en: '• Wide feed opening • High hourly capacity • Heavy load endurance • Hydraulic protection system',
            ru: '• Широкое загрузочное отверстие • Высокая часовая производительность • Устойчивость к тяжелым нагрузкам',
            ar: '• فتحة تغذية واسعة • سعة ساعية عالية • تحمل الأحمال الثقيلة • نظام حماية هيدروليكي'
        },
        metaDesc: {
            tr: 'CS-80 çift şaftlı parçalama makinesi - 800x800mm geniş parçalama alanı. Ağır sanayi için 22-75 kW motor, yüksek kapasite.',
            en: 'CS-80 dual shaft shredder - 800x800mm wide shredding area. 22-75 kW motor for heavy industry, high capacity.',
            ru: 'Двухвальный шредер CS-80 - широкая зона измельчения 800x800мм. Мотор 22-75 кВт для тяжелой промышленности.',
            ar: 'آلة تمزيق ثنائية العمود CS-80 - منطقة تمزيق واسعة 800×800 مم. محرك 22-75 كيلوواط للصناعة الثقيلة.'
        },
        tagline: {
            tr: 'Ağır Sanayi, Ağır Performans',
            en: 'Heavy Industry, Heavy Performance',
            ru: 'Тяжелая Промышленность, Высокая Производительность',
            ar: 'صناعة ثقيلة، أداء ثقيل'
        }
    },
    'cs-150': {
        area: '1500 x 1500 mm',
        rotorLength: '1500 mm',
        motorPower: '45 – 132 kW',
        segment: {
            tr: 'yüksek kapasiteli endüstriyel atık işleme için tasarlanmış',
            en: 'designed for high-capacity industrial waste processing',
            ru: 'предназначена для высокопроизводительной промышленной переработки отходов',
            ar: 'مصممة لمعالجة النفايات الصناعية عالية السعة'
        },
        intro: {
            tr: 'CS-150, çift şaftlı parçalama makinesi serisinin yüksek kapasiteli modeli olarak büyük ölçekli geri dönüşüm tesisleri için tasarlanmıştır. 1500x1500mm devasa parçalama alanı ve 45-132 kW motor gücü ile ton bazında saatlik işleme kapasitesi sunar. Otomotiv hurdası, büyük elektronik atık ve endüstriyel ambalaj işlemede lider performans.',
            en: 'CS-150 is the high-capacity model in the dual shaft shredder series designed for large-scale recycling facilities. With its massive 1500x1500mm shredding area and 45-132 kW motor power, it offers hourly processing capacity on a ton basis. Leading performance in automotive scrap, large e-waste and industrial packaging processing.',
            ru: 'CS-150 — высокопроизводительная модель в серии двухвальных шредеров, предназначенная для крупных перерабатывающих предприятий. С огромной зоной измельчения 1500x1500мм и мощностью 45-132 кВт обеспечивает тоннажную часовую производительность.',
            ar: 'CS-150 هو النموذج عالي السعة في سلسلة آلات التمزيق ثنائية العمود، مصمم لمرافق إعادة التدوير واسعة النطاق. مع منطقة تمزيق ضخمة 1500×1500 مم وقوة محرك 45-132 كيلوواط.'
        },
        whyThis: {
            tr: 'Devasa parçalama alanı ile büyük boy malzemelerin ön işlemesinde kesintisiz çalışma. Çift motor senkronizasyonu ile dengeli güç dağılımı. Otomatik yağlama sistemi sayesinde minimum bakım gereksinimi.',
            en: 'Continuous operation in pre-processing large materials with massive shredding area. Balanced power distribution with dual motor synchronization. Minimum maintenance requirement thanks to automatic lubrication system.',
            ru: 'Непрерывная работа при предварительной обработке крупных материалов с огромной зоной измельчения. Сбалансированное распределение мощности с синхронизацией двух двигателей.',
            ar: 'تشغيل مستمر في المعالجة المسبقة للمواد الكبيرة مع منطقة تمزيق ضخمة. توزيع متوازن للطاقة مع تزامن المحرك المزدوج.'
        },
        advantages: {
            tr: '• Devasa 1.5m parçalama alanı • Ton bazında işleme kapasitesi • Otomatik yağlama • Senkronize çift motor',
            en: '• Massive 1.5m shredding area • Ton-based processing capacity • Auto lubrication • Synchronized dual motors',
            ru: '• Огромная зона измельчения 1.5м • Тоннажная производительность • Автоматическая смазка • Синхронизированные моторы',
            ar: '• منطقة تمزيق ضخمة 1.5 متر • سعة معالجة بالطن • تشحيم تلقائي • محركات مزدوجة متزامنة'
        },
        metaDesc: {
            tr: 'CS-150 çift şaftlı parçalama makinesi - 1500x1500mm devasa parçalama alanı. Yüksek kapasiteli tesisler için 45-132 kW güç.',
            en: 'CS-150 dual shaft shredder - 1500x1500mm massive shredding area. 45-132 kW power for high-capacity facilities.',
            ru: 'Двухвальный шредер CS-150 - огромная зона измельчения 1500x1500мм. Мощность 45-132 кВт для высокопроизводительных предприятий.',
            ar: 'آلة تمزيق ثنائية العمود CS-150 - منطقة تمزيق ضخمة 1500×1500 مم. قوة 45-132 كيلوواط للمرافق عالية السعة.'
        },
        tagline: {
            tr: 'Devasa Kapasite, Kesintisiz Üretim',
            en: 'Massive Capacity, Continuous Production',
            ru: 'Огромная Мощность, Непрерывное Производство',
            ar: 'سعة ضخمة، إنتاج مستمر'
        }
    },
    'cs-180': {
        area: '1800 x 1800 mm',
        rotorLength: '1800 mm',
        motorPower: '75 – 200 kW',
        segment: {
            tr: 'maksimum verimlilik için tasarlanmış profesyonel çözüm',
            en: 'professional solution designed for maximum efficiency',
            ru: 'профессиональное решение, разработанное для максимальной эффективности',
            ar: 'حل احترافي مصمم لأقصى قدر من الكفاءة'
        },
        intro: {
            tr: 'CS-180, çift şaftlı parçalama makinesi serisinin profesyonel segment modeli olarak endüstriyel atık işlemede maksimum verimlilik sağlar. 1800x1800mm ultra geniş parçalama alanı ve 75-200 kW güçlü motor sistemi ile saatte tonlarca malzeme işleme kapasitesi sunar. Büyük ölçekli hurda işleme tesisleri ve entegre geri dönüşüm hatları için tasarlanmıştır.',
            en: 'CS-180 is the professional segment model in the dual shaft shredder series providing maximum efficiency in industrial waste processing. With its ultra-wide 1800x1800mm shredding area and 75-200 kW powerful motor system, it offers tons of material processing capacity per hour. Designed for large-scale scrap processing facilities and integrated recycling lines.',
            ru: 'CS-180 — модель профессионального сегмента в серии двухвальных шредеров, обеспечивающая максимальную эффективность в промышленной переработке. С ультраширокой зоной измельчения 1800x1800мм и мощной моторной системой 75-200 кВт.',
            ar: 'CS-180 هو نموذج القطاع المهني في سلسلة آلات التمزيق ثنائية العمود، يوفر أقصى كفاءة في معالجة النفايات الصناعية. مع منطقة تمزيق فائقة العرض 1800×1800 مم ونظام محرك قوي 75-200 كيلوواط.'
        },
        whyThis: {
            tr: 'Ultra geniş parçalama alanı ile endüstriyel ölçekte kesintisiz çalışma. PLC kontrollü otomatik operasyon ile minimum operatör müdahalesi. Entegre konveyör sistemleri ile tam otomasyon imkanı.',
            en: 'Non-stop operation at industrial scale with ultra-wide shredding area. Minimum operator intervention with PLC controlled automatic operation. Full automation capability with integrated conveyor systems.',
            ru: 'Бесперебойная работа в промышленных масштабах с ультраширокой зоной измельчения. Минимальное вмешательство оператора с автоматическим управлением ПЛК.',
            ar: 'تشغيل مستمر على نطاق صناعي مع منطقة تمزيق فائقة العرض. تدخل الحد الأدنى للمشغل مع التشغيل التلقائي بنظام PLC.'
        },
        advantages: {
            tr: '• Ultra geniş 1.8m alan • PLC otomatik kontrol • Entegre konveyör uyumu • 7/24 kesintisiz çalışma',
            en: '• Ultra-wide 1.8m area • PLC auto control • Integrated conveyor compatibility • 24/7 non-stop operation',
            ru: '• Ультраширокая зона 1.8м • Автоматическое управление ПЛК • Совместимость с конвейером • Работа 24/7',
            ar: '• منطقة فائقة العرض 1.8 متر • تحكم PLC تلقائي • توافق ناقل متكامل • تشغيل 24/7 بدون توقف'
        },
        metaDesc: {
            tr: 'CS-180 çift şaftlı parçalama makinesi - 1800x1800mm ultra geniş alan. Profesyonel tesisler için 75-200 kW motor sistemi.',
            en: 'CS-180 dual shaft shredder - 1800x1800mm ultra-wide area. 75-200 kW motor system for professional facilities.',
            ru: 'Двухвальный шредер CS-180 - ультраширокая зона 1800x1800мм. Моторная система 75-200 кВт для профессиональных предприятий.',
            ar: 'آلة تمزيق ثنائية العمود CS-180 - منطقة فائقة العرض 1800×1800 مم. نظام محرك 75-200 كيلوواط للمرافق المهنية.'
        },
        tagline: {
            tr: 'Profesyonel Çözüm, Endüstriyel Güç',
            en: 'Professional Solution, Industrial Power',
            ru: 'Профессиональное Решение, Промышленная Мощность',
            ar: 'حل احترافي، قوة صناعية'
        }
    },
    'cs-200': {
        area: '2000 x 2000 mm',
        rotorLength: '2000 mm',
        motorPower: '110 – 315 kW',
        segment: {
            tr: 'en yüksek kapasiteli endüstriyel parçalama çözümü',
            en: 'highest capacity industrial shredding solution',
            ru: 'промышленное решение для измельчения с максимальной мощностью',
            ar: 'حل التمزيق الصناعي ذو السعة الأعلى'
        },
        intro: {
            tr: 'CS-200, çift şaftlı parçalama makinesi serisinin amiral gemisi modeli olarak en zorlu endüstriyel uygulamalar için tasarlanmıştır. 2000x2000mm maksimum parçalama alanı ve 110-315 kW dev motor gücü ile sınırsız işleme kapasitesi sunar. Otomotiv geri dönüşümü, büyük ölçekli metal hurda ve endüstriyel atık yönetiminde tartışmasız lider.',
            en: 'CS-200 is the flagship model in the dual shaft shredder series designed for the most demanding industrial applications. With its maximum 2000x2000mm shredding area and 110-315 kW giant motor power, it offers unlimited processing capacity. Undisputed leader in automotive recycling, large-scale metal scrap and industrial waste management.',
            ru: 'CS-200 — флагманская модель в серии двухвальных шредеров, предназначенная для самых требовательных промышленных применений. С максимальной зоной измельчения 2000x2000мм и гигантской мощностью 110-315 кВт предлагает неограниченную производительность.',
            ar: 'CS-200 هو النموذج الرائد في سلسلة آلات التمزيق ثنائية العمود، مصمم للتطبيقات الصناعية الأكثر تطلبًا. مع منطقة تمزيق قصوى 2000×2000 مم وقوة محرك عملاقة 110-315 كيلوواط.'
        },
        whyThis: {
            tr: 'Maksimum 2 metre parçalama genişliği ile sınır tanımayan işleme kapasitesi. Otomotiv gövdeleri, büyük metal yapılar ve endüstriyel ekipman imhası için ideal. Her koşulda güvenilir çalışma garantisi.',
            en: 'Unlimited processing capacity with maximum 2 meter shredding width. Ideal for automotive bodies, large metal structures and industrial equipment destruction. Guaranteed reliable operation under all conditions.',
            ru: 'Неограниченная производительность с максимальной шириной измельчения 2 метра. Идеально для автомобильных кузовов, крупных металлических конструкций и уничтожения промышленного оборудования.',
            ar: 'سعة معالجة غير محدودة مع عرض تمزيق أقصى 2 متر. مثالي لهياكل السيارات والهياكل المعدنية الكبيرة وتدمير المعدات الصناعية.'
        },
        advantages: {
            tr: '• Maksimum 2m parçalama alanı • 315 kW\'a kadar motor gücü • Otomotiv geri dönüşümü • Sınırsız kapasite',
            en: '• Maximum 2m shredding area • Up to 315 kW motor power • Automotive recycling • Unlimited capacity',
            ru: '• Максимальная зона измельчения 2м • Мощность до 315 кВт • Автомобильная переработка • Неограниченная мощность',
            ar: '• منطقة تمزيق قصوى 2 متر • قوة محرك حتى 315 كيلوواط • إعادة تدوير السيارات • سعة غير محدودة'
        },
        metaDesc: {
            tr: 'CS-200 çift şaftlı parçalama makinesi - 2000x2000mm maksimum parçalama alanı. Amiral gemisi model, 110-315 kW güç.',
            en: 'CS-200 dual shaft shredder - 2000x2000mm maximum shredding area. Flagship model, 110-315 kW power.',
            ru: 'Флагманский двухвальный шредер CS-200 - максимальная зона измельчения 2000x2000мм. Мощность 110-315 кВт.',
            ar: 'آلة تمزيق ثنائية العمود CS-200 - منطقة تمزيق قصوى 2000×2000 مم. النموذج الرائد، قوة 110-315 كيلوواط.'
        },
        tagline: {
            tr: 'Sınırsız Güç, Sınırsız Kapasite',
            en: 'Unlimited Power, Unlimited Capacity',
            ru: 'Неограниченная Мощность, Неограниченная Производительность',
            ar: 'قوة غير محدودة، سعة غير محدودة'
        }
    }
};

const languages: ('tr' | 'en' | 'ru' | 'ar')[] = ['tr', 'en', 'ru', 'ar'];
const langSuffixes = { tr: '', en: '-en', ru: '-ru', ar: '-ar' };

Object.entries(modelData).forEach(([model, data]) => {
    const modelUpper = model.toUpperCase();

    languages.forEach(lang => {
        const suffix = langSuffixes[lang];
        const htmlFile = path.join(BASE_DIR, model, `catalog${suffix}.html`);

        if (!fs.existsSync(htmlFile)) {
            console.log(`⚠️ ${htmlFile} bulunamadı`);
            return;
        }

        let content = fs.readFileSync(htmlFile, 'utf8');

        // Meta description güncelle
        content = content.replace(
            /<meta name="description"[^>]*content="[^"]*">/,
            `<meta name="description" content="${data.metaDesc[lang]}">`
        );

        // OG description güncelle
        content = content.replace(
            /<meta property="og:description"[^>]*content="[^"]*">/,
            `<meta property="og:description" content="${data.metaDesc[lang]}">`
        );

        // Twitter description güncelle
        content = content.replace(
            /<meta name="twitter:description"[^>]*content="[^"]*">/,
            `<meta name="twitter:description" content="${data.metaDesc[lang]}">`
        );

        // Tagline güncelle
        content = content.replace(
            /<p class="cover-tagline">([^<]*)<\/p>/,
            `<p class="cover-tagline">${data.tagline[lang]}</p>`
        );

        // Ürün tanıtımı paragrafını güncelle (sayfa 2)
        const introRegex = new RegExp(
            `<p style="font-size: 12pt; line-height: 1.8;">CS-\\d+, çift şaftlı parçalama makinesi serisinin[^<]*</p>`,
            'g'
        );
        content = content.replace(
            introRegex,
            `<p style="font-size: 12pt; line-height: 1.8;">${data.intro[lang]}</p>`
        );

        // Neden bu model kutusunu güncelle
        const whyRegex = /<div class="highlight-box">\s*<h3>Neden CS-\d+\?<\/h3>\s*<p>[^<]*<\/p>\s*<\/div>/;
        const whyTitle = lang === 'tr' ? `Neden ${modelUpper}?` :
            lang === 'en' ? `Why ${modelUpper}?` :
                lang === 'ru' ? `Почему ${modelUpper}?` : `لماذا ${modelUpper}؟`;
        content = content.replace(
            whyRegex,
            `<div class="highlight-box">
                <h3>${whyTitle}</h3>
                <p>${data.whyThis[lang]}</p>
            </div>`
        );

        // Avantajları güncelle
        const advRegex = /<div class="highlight-box"[^>]*style="[^"]*text-align: center;[^"]*"[^>]*>\s*<h3>CS-\d+ Avantajları<\/h3>\s*<p>[^<]*<\/p>\s*<\/div>/;
        const advTitle = lang === 'tr' ? `${modelUpper} Avantajları` :
            lang === 'en' ? `${modelUpper} Advantages` :
                lang === 'ru' ? `Преимущества ${modelUpper}` : `مزايا ${modelUpper}`;
        content = content.replace(
            advRegex,
            `<div class="highlight-box" style="margin-top: 6mm; text-align: center;">
                <h3>${advTitle}</h3>
                <p>${data.advantages[lang]}</p>
            </div>`
        );

        // Teknik özellikler güncelle
        content = content.replace(/Parçalama Alanı<\/span>\s*<span class="value">\d+\s*x\s*\d+\s*mm/,
            `Parçalama Alanı</span><span class="value">${data.area}`);
        content = content.replace(/Rotor Uzunluğu<\/span>\s*<span class="value">\d+\s*mm/,
            `Rotor Uzunluğu</span><span class="value">${data.rotorLength}`);
        content = content.replace(/Motor Gücü<\/span>\s*<span class="value">[^<]+/,
            `Motor Gücü</span><span class="value">${data.motorPower}`);

        // big-spec-grid değerlerini güncelle
        const areaMatch = data.area.match(/(\d+)\s*x\s*(\d+)/);
        if (areaMatch) {
            content = content.replace(
                /<span class="value">600<span class="unit"> x 600<\/span><\/span>/,
                `<span class="value">${areaMatch[1]}<span class="unit"> x ${areaMatch[2]}</span></span>`
            );
        }

        const rotorMatch = data.rotorLength.match(/(\d+)/);
        if (rotorMatch) {
            content = content.replace(
                /<span class="value">600<span class="unit"> mm<\/span><\/span>/,
                `<span class="value">${rotorMatch[1]}<span class="unit"> mm</span></span>`
            );
        }

        const motorMatch = data.motorPower.match(/[\d.]+ – (\d+)/);
        if (motorMatch) {
            content = content.replace(
                /<span class="value">45<span class="unit"> kW<\/span><\/span>/,
                `<span class="value">${motorMatch[1]}<span class="unit"> kW</span></span>`
            );
        }

        fs.writeFileSync(htmlFile, content, 'utf8');
    });

    console.log(`✅ ${model}: Benzersiz SEO içerikleri güncellendi (4 dil)`);
});

console.log('\n🎉 Tüm modellerin benzersiz içerikleri oluşturuldu!');
