/**
 * Metal Parçalama Makinesi (RDM Serisi) - 7 Sayfa Detaylı Katalog Script'i
 * RDM-100, RDM-150, RDM-180, RDM-200 için 4 dilde kapsamlı SEO katalog oluşturur
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_DIR = 'd:/Furkan/WEB SİTESİ/Parcalamasite/public/catalogs/metal';
const SOURCE_IMAGES_DIR = 'D:/Furkan/WEB SİTESİ/parçalamamakinesi katalog/Metal parçalama makinesi katalog';

interface ModelData {
    area: string;
    rotorLength: string;
    motorPower: string;
    weight: string;
    capacity: string;
    tagline: Record<string, string>;
    description: Record<string, string>;
    highlight: Record<string, string>;
    materials: Record<string, string[]>;
    applications: Record<string, Array<{ title: string; desc: string }>>;
    features: Record<string, Array<{ title: string; desc: string }>>;
    optionalFeatures: Record<string, string[]>;
}

// Her model için benzersiz SEO içeriği
const models: Record<string, ModelData> = {
    'rdm-100': {
        area: '1000 x 1000 mm',
        rotorLength: '1000 mm',
        motorPower: '45–75 kW (2–4X)',
        weight: '~6.500 kg',
        capacity: '1-3 ton/saat',
        tagline: { tr: 'Kompakt Metal Gücü', en: 'Compact Metal Power', ru: 'Компактная Мощность для Металла', ar: 'قوة معدنية مدمجة' },
        description: {
            tr: 'RDM-100, metal parçalama makineleri serisinin kompakt ve verimli başlangıç modelidir. 1000x1000mm parçalama alanı ve 45-75 kW motor gücü ile küçük ve orta ölçekli metal geri dönüşüm tesisleri için ideal çözüm sunar. Çift şaftlı rotor tasarımı, alüminyum profiller, teneke kutular, ince metal atıklar ve hafif metal hurdaların kontrollü parçalanmasını sağlar. Düşük enerji tüketimi ve yüksek verimlilik oranı ile işletme maliyetlerini minimize eder.',
            en: 'RDM-100 is the compact and efficient entry-level model of the metal shredder series. With 1000x1000mm shredding area and 45-75 kW motor power, it offers an ideal solution for small and medium-sized metal recycling facilities. The dual-shaft rotor design ensures controlled shredding of aluminum profiles, tin cans, thin metal waste, and light metal scrap. It minimizes operating costs with low energy consumption and high efficiency.',
            ru: 'RDM-100 — компактная и эффективная модель начального уровня в серии металлических измельчителей. С зоной измельчения 1000x1000мм и мощностью двигателя 45-75 кВт предлагает идеальное решение для малых и средних предприятий по переработке металла. Двухвальная конструкция ротора обеспечивает контролируемое измельчение алюминиевых профилей, жестяных банок, тонких металлических отходов и лёгкого металлолома.',
            ar: 'RDM-100 هي الطراز المدمج والفعال للمبتدئين في سلسلة كسارات المعادن. مع منطقة تمزيق 1000×1000 مم وقوة محرك 45-75 كيلووات، توفر حلاً مثاليًا لمنشآت إعادة تدوير المعادن الصغيرة والمتوسطة. تصميم الدوار ثنائي العمود يضمن التمزيق المتحكم لملفات الألمنيوم وعلب الصفيح ونفايات المعادن الرقيقة وخردة المعادن الخفيفة.'
        },
        highlight: {
            tr: 'RDM-100, sınırlı alana sahip tesisler için mükemmel bir seçimdir. Kompakt boyutlarına rağmen endüstriyel performans sunar. Çift şaftlı tasarımı sayesinde malzemeleri yakalayarak sıkışma olmadan parçalar. Düşük güç tüketimi ile yüksek verim dengesi, yatırım geri dönüş süresini kısaltır. Modüler yapısı sayesinde bakım ve parça değişimi hızlı ve ekonomiktir.',
            en: 'RDM-100 is an excellent choice for facilities with limited space. Despite its compact size, it delivers industrial performance. Thanks to its dual-shaft design, it captures and shreds materials without jamming. The balance of low power consumption and high efficiency shortens the investment payback period. Its modular design enables fast and economical maintenance and parts replacement.',
            ru: 'RDM-100 — отличный выбор для предприятий с ограниченным пространством. Несмотря на компактные размеры, обеспечивает промышленную производительность. Благодаря двухвальной конструкции захватывает и измельчает материалы без заклинивания. Баланс низкого энергопотребления и высокой эффективности сокращает срок окупаемости инвестиций.',
            ar: 'RDM-100 خيار ممتاز للمرافق ذات المساحة المحدودة. على الرغم من حجمها المدمج، توفر أداءً صناعيًا. بفضل تصميمها ثنائي العمود، تلتقط المواد وتمزقها دون انسداد. التوازن بين استهلاك الطاقة المنخفض والكفاءة العالية يقصر فترة استرداد الاستثمار.'
        },
        materials: {
            tr: ['Alüminyum Profiller', 'Teneke Kutular', 'İnce Saclar', 'Metal Ambalajlar', 'Bakır Kablolar', 'Elektronik Atık Metalleri'],
            en: ['Aluminum Profiles', 'Tin Cans', 'Thin Sheets', 'Metal Packaging', 'Copper Cables', 'Electronic Waste Metals'],
            ru: ['Алюминиевые профили', 'Жестяные банки', 'Тонкие листы', 'Металлическая упаковка', 'Медные кабели', 'Металлы из электронных отходов'],
            ar: ['ملفات الألمنيوم', 'علب الصفيح', 'الصفائح الرقيقة', 'التغليف المعدني', 'كابلات النحاس', 'معادن النفايات الإلكترونية']
        },
        applications: {
            tr: [
                { title: 'Küçük Geri Dönüşüm Tesisleri', desc: 'Sınırlı alanda çalışan küçük ölçekli metal geri dönüşüm işletmeleri için ideal başlangıç makinesi.' },
                { title: 'Alüminyum İşleme', desc: 'Alüminyum profil, kapak ve ambalaj atıklarının parçalanarak ergitmeye hazır hale getirilmesi.' },
                { title: 'Kablo Geri Dönüşümü', desc: 'İnce bakır ve alüminyum kabloların ön parçalama işlemi için ideal boyut ve kapasitede.' },
                { title: 'E-Atık Ön İşleme', desc: 'Elektronik atıklardan çıkan metal parçaların boyut küçültme işlemi.' }
            ],
            en: [
                { title: 'Small Recycling Facilities', desc: 'Ideal starter machine for small-scale metal recycling businesses operating in limited spaces.' },
                { title: 'Aluminum Processing', desc: 'Shredding of aluminum profiles, caps, and packaging waste to prepare for melting.' },
                { title: 'Cable Recycling', desc: 'Ideal size and capacity for pre-shredding of thin copper and aluminum cables.' },
                { title: 'E-Waste Pre-Processing', desc: 'Size reduction of metal parts from electronic waste.' }
            ],
            ru: [
                { title: 'Малые перерабатывающие предприятия', desc: 'Идеальная стартовая машина для малых предприятий по переработке металла в ограниченном пространстве.' },
                { title: 'Переработка алюминия', desc: 'Измельчение алюминиевых профилей, крышек и упаковочных отходов для подготовки к плавке.' },
                { title: 'Переработка кабелей', desc: 'Идеальный размер и производительность для предварительного измельчения тонких медных и алюминиевых кабелей.' },
                { title: 'Предварительная обработка электронных отходов', desc: 'Уменьшение размера металлических деталей из электронных отходов.' }
            ],
            ar: [
                { title: 'مرافق إعادة التدوير الصغيرة', desc: 'آلة مثالية للبدء لشركات إعادة تدوير المعادن الصغيرة التي تعمل في مساحات محدودة.' },
                { title: 'معالجة الألمنيوم', desc: 'تمزيق ملفات الألمنيوم والأغطية ونفايات التغليف للتحضير للصهر.' },
                { title: 'إعادة تدوير الكابلات', desc: 'حجم وسعة مثالية للتمزيق المسبق لكابلات النحاس والألمنيوم الرقيقة.' },
                { title: 'المعالجة المسبقة للنفايات الإلكترونية', desc: 'تقليل حجم الأجزاء المعدنية من النفايات الإلكترونية.' }
            ]
        },
        features: {
            tr: [
                { title: 'Çift Şaftlı Rotor', desc: 'Zıt yönlü dönen iki rotor ile malzemeleri yakalayarak kontrollü parçalama.' },
                { title: 'Kompakt Tasarım', desc: '1000mm rotor boyu ile sınırlı alanlara uygun endüstriyel çözüm.' },
                { title: 'Modüler Bıçak Sistemi', desc: 'Cıvatalı, kolayca sökülebilen ve değiştirilebilen kesici bıçaklar.' },
                { title: 'Düşük Enerji Tüketimi', desc: '45-75 kW motor gücü ile ekonomik işletme maliyeti.' }
            ],
            en: [
                { title: 'Dual-Shaft Rotor', desc: 'Controlled shredding by capturing materials with two counter-rotating rotors.' },
                { title: 'Compact Design', desc: 'Industrial solution suitable for limited spaces with 1000mm rotor length.' },
                { title: 'Modular Blade System', desc: 'Bolted, easily removable and replaceable cutting blades.' },
                { title: 'Low Energy Consumption', desc: 'Economical operating cost with 45-75 kW motor power.' }
            ],
            ru: [
                { title: 'Двухвальный ротор', desc: 'Контролируемое измельчение путём захвата материалов двумя противовращающимися роторами.' },
                { title: 'Компактная конструкция', desc: 'Промышленное решение для ограниченных пространств с длиной ротора 1000мм.' },
                { title: 'Модульная система ножей', desc: 'Болтовые, легко снимаемые и заменяемые режущие ножи.' },
                { title: 'Низкое энергопотребление', desc: 'Экономичные эксплуатационные расходы при мощности двигателя 45-75 кВт.' }
            ],
            ar: [
                { title: 'دوار ثنائي العمود', desc: 'تمزيق متحكم بالتقاط المواد بدوارين متعاكسين.' },
                { title: 'تصميم مدمج', desc: 'حل صناعي مناسب للمساحات المحدودة بطول دوار 1000 مم.' },
                { title: 'نظام شفرات معياري', desc: 'شفرات قطع مثبتة بمسامير، سهلة الإزالة والاستبدال.' },
                { title: 'استهلاك طاقة منخفض', desc: 'تكلفة تشغيل اقتصادية بقوة محرك 45-75 كيلووات.' }
            ]
        },
        optionalFeatures: {
            tr: ['Dört Motorlu Tasarım', 'Rotor Soğutma Sistemi', 'Otomatik Yağlama Ünitesi', 'Hidrolik Baskı Ünitesi', 'Farklı Ölçülerde Elek', 'Cıvatalı Sökülebilen Bıçak'],
            en: ['Four-Motor Design', 'Rotor Cooling System', 'Automatic Lubrication Unit', 'Hydraulic Press Unit', 'Various Screen Sizes', 'Bolt-On Removable Blades'],
            ru: ['Четырёхмоторная конструкция', 'Система охлаждения ротора', 'Автоматический блок смазки', 'Гидравлический прессовый блок', 'Различные размеры сит', 'Болтовые съёмные ножи'],
            ar: ['تصميم بأربعة محركات', 'نظام تبريد الدوار', 'وحدة تشحيم أوتوماتيكية', 'وحدة ضغط هيدروليكية', 'أحجام غربال مختلفة', 'شفرات قابلة للإزالة بمسامير']
        }
    },
    'rdm-150': {
        area: '1500 x 1500 mm',
        rotorLength: '1500 mm',
        motorPower: '55–90 kW (2–4X)',
        weight: '~9.500 kg',
        capacity: '2-5 ton/saat',
        tagline: { tr: 'Orta Sınıf Performans, Profesyonel Kalite', en: 'Mid-Range Performance, Professional Quality', ru: 'Средний Класс, Профессиональное Качество', ar: 'أداء متوسط، جودة احترافية' },
        description: {
            tr: 'RDM-150, orta ölçekli metal geri dönüşüm tesisleri için tasarlanmış profesyonel sınıf metal parçalama makinesidir. 1500x1500mm genişletilmiş parçalama alanı ve 55-90 kW motor gücü ile günlük yüksek hacimli metal atık işleme operasyonlarında üstün verimlilik sağlar. Otomotiv parçaları, beyaz eşya hurdası, metal mobilya ve orta kalınlıktaki sacların parçalanmasında ideal performans sunar.',
            en: 'RDM-150 is a professional-grade metal shredder designed for medium-sized metal recycling facilities. With 1500x1500mm expanded shredding area and 55-90 kW motor power, it provides superior efficiency in daily high-volume metal waste processing operations. It offers ideal performance in shredding automotive parts, white goods scrap, metal furniture, and medium-thickness sheets.',
            ru: 'RDM-150 — измельчитель металла профессионального класса, разработанный для средних предприятий по переработке металла. С расширенной зоной измельчения 1500x1500мм и мощностью двигателя 55-90 кВт обеспечивает превосходную эффективность при ежедневной переработке больших объёмов металлических отходов. Идеально подходит для измельчения автомобильных деталей, лома бытовой техники, металлической мебели и листов средней толщины.',
            ar: 'RDM-150 هي كسارة معادن احترافية مصممة لمنشآت إعادة تدوير المعادن المتوسطة. مع منطقة تمزيق موسعة 1500×1500 مم وقوة محرك 55-90 كيلووات، توفر كفاءة فائقة في عمليات معالجة نفايات المعادن عالية الحجم اليومية. توفر أداءً مثاليًا في تمزيق قطع غيار السيارات وخردة الأجهزة المنزلية والأثاث المعدني والصفائح متوسطة السماكة.'
        },
        highlight: {
            tr: 'RDM-150, güç ve verimlilik dengesinde optimum noktayı yakalayan bir tasarıma sahiptir. 1500mm rotor boyu, daha büyük parçaların tek geçişte işlenmesine olanak tanır. Profesyonel geri dönüşüm tesisleri için uygun fiyat/performans oranı sunar. Çift veya dört motorlu konfigürasyon seçenekleri ile ihtiyaca göre özelleştirilebilir. Güçlendirilmiş rotor yapısı ağır metal parçalara karşı dayanıklılık sağlar.',
            en: 'RDM-150 has a design that captures the optimum point in the balance of power and efficiency. The 1500mm rotor length allows processing of larger pieces in a single pass. It offers suitable price/performance ratio for professional recycling facilities. It can be customized according to needs with dual or four-motor configuration options. Reinforced rotor structure provides durability against heavy metal pieces.',
            ru: 'RDM-150 имеет конструкцию, достигающую оптимального баланса мощности и эффективности. Длина ротора 1500мм позволяет обрабатывать более крупные куски за один проход. Предлагает оптимальное соотношение цена/производительность для профессиональных перерабатывающих предприятий. Может быть настроен в соответствии с потребностями с двух- или четырёхмоторной конфигурацией.',
            ar: 'RDM-150 لها تصميم يحقق النقطة المثلى في التوازن بين القوة والكفاءة. طول الدوار 1500 مم يسمح بمعالجة القطع الأكبر في مرور واحد. توفر نسبة سعر/أداء مناسبة لمرافق إعادة التدوير المهنية. يمكن تخصيصها وفقًا للاحتياجات مع خيارات تكوين بمحركين أو أربعة محركات.'
        },
        materials: {
            tr: ['Otomotiv Parçaları', 'Beyaz Eşya Hurdası', 'Metal Mobilyalar', 'Orta Kalınlıkta Saclar', 'Alüminyum Döküm Parçalar', 'Endüstriyel Metal Atıklar'],
            en: ['Automotive Parts', 'White Goods Scrap', 'Metal Furniture', 'Medium-Thickness Sheets', 'Aluminum Cast Parts', 'Industrial Metal Waste'],
            ru: ['Автомобильные детали', 'Лом бытовой техники', 'Металлическая мебель', 'Листы средней толщины', 'Алюминиевые литые детали', 'Промышленные металлические отходы'],
            ar: ['قطع غيار السيارات', 'خردة الأجهزة المنزلية', 'الأثاث المعدني', 'صفائح متوسطة السماكة', 'قطع الألمنيوم المصبوب', 'النفايات المعدنية الصناعية']
        },
        applications: {
            tr: [
                { title: 'Profesyonel Hurda Tesisleri', desc: 'Orta ölçekli hurda alım ve satış işletmelerinde günlük yoğun metal parçalama operasyonları.' },
                { title: 'Beyaz Eşya Geri Dönüşümü', desc: 'Buzdolabı, çamaşır makinesi ve bulaşık makinesi gibi ev aletlerinin parçalanması.' },
                { title: 'Otomotiv Geri Dönüşümü', desc: 'Araç parçaları, motor blokları ve karoser parçalarının ön işlemden geçirilmesi.' },
                { title: 'Endüstriyel Tesisler', desc: 'Fabrika ve üretim tesislerinde oluşan metal atıkların yerinde işlenmesi.' }
            ],
            en: [
                { title: 'Professional Scrap Facilities', desc: 'Daily intensive metal shredding operations in medium-sized scrap buying and selling businesses.' },
                { title: 'White Goods Recycling', desc: 'Shredding of household appliances such as refrigerators, washing machines, and dishwashers.' },
                { title: 'Automotive Recycling', desc: 'Pre-processing of vehicle parts, engine blocks, and body parts.' },
                { title: 'Industrial Facilities', desc: 'On-site processing of metal waste from factories and production facilities.' }
            ],
            ru: [
                { title: 'Профессиональные ломозаготовительные предприятия', desc: 'Ежедневные интенсивные операции по измельчению металла на средних предприятиях по закупке и продаже лома.' },
                { title: 'Переработка бытовой техники', desc: 'Измельчение бытовой техники: холодильников, стиральных и посудомоечных машин.' },
                { title: 'Автомобильная переработка', desc: 'Предварительная обработка деталей автомобилей, блоков двигателей и кузовных деталей.' },
                { title: 'Промышленные предприятия', desc: 'Переработка металлических отходов на фабриках и производственных предприятиях на месте.' }
            ],
            ar: [
                { title: 'مرافق الخردة المهنية', desc: 'عمليات تمزيق المعادن اليومية المكثفة في شركات شراء وبيع الخردة المتوسطة.' },
                { title: 'إعادة تدوير الأجهزة المنزلية', desc: 'تمزيق الأجهزة المنزلية مثل الثلاجات والغسالات وغسالات الصحون.' },
                { title: 'إعادة تدوير السيارات', desc: 'المعالجة المسبقة لقطع غيار المركبات وكتل المحركات وأجزاء الهيكل.' },
                { title: 'المنشآت الصناعية', desc: 'معالجة النفايات المعدنية من المصانع ومرافق الإنتاج في الموقع.' }
            ]
        },
        features: {
            tr: [
                { title: 'Genişletilmiş Rotor', desc: '1500mm rotor boyu ile daha büyük parçaların tek geçişte işlenmesi.' },
                { title: 'Profesyonel Motor Gücü', desc: '55-90 kW motor seçenekleri ile yoğun operasyonlara uygun.' },
                { title: 'Güçlendirilmiş Yapı', desc: 'Ağır metal parçalara karşı dayanıklı St-52 çelik gövde.' },
                { title: 'Esnek Konfigürasyon', desc: 'Çift veya dört motorlu tasarım seçenekleri.' }
            ],
            en: [
                { title: 'Extended Rotor', desc: 'Processing of larger pieces in single pass with 1500mm rotor length.' },
                { title: 'Professional Motor Power', desc: 'Suitable for intensive operations with 55-90 kW motor options.' },
                { title: 'Reinforced Structure', desc: 'St-52 steel body durable against heavy metal pieces.' },
                { title: 'Flexible Configuration', desc: 'Dual or four-motor design options.' }
            ],
            ru: [
                { title: 'Расширенный ротор', desc: 'Обработка более крупных кусков за один проход с длиной ротора 1500мм.' },
                { title: 'Профессиональная мощность', desc: 'Подходит для интенсивных операций с опциями двигателя 55-90 кВт.' },
                { title: 'Усиленная конструкция', desc: 'Корпус из стали St-52, устойчивый к тяжёлым металлическим кускам.' },
                { title: 'Гибкая конфигурация', desc: 'Двух- или четырёхмоторные варианты конструкции.' }
            ],
            ar: [
                { title: 'دوار موسع', desc: 'معالجة القطع الأكبر في مرور واحد بطول دوار 1500 مم.' },
                { title: 'قوة محرك احترافية', desc: 'مناسب للعمليات المكثفة مع خيارات محرك 55-90 كيلووات.' },
                { title: 'هيكل معزز', desc: 'جسم فولاذي St-52 متين ضد القطع المعدنية الثقيلة.' },
                { title: 'تكوين مرن', desc: 'خيارات تصميم بمحركين أو أربعة محركات.' }
            ]
        },
        optionalFeatures: {
            tr: ['Dört Motorlu Tasarım', 'Rotor Soğutma Sistemi', 'Otomatik Yağlama Ünitesi', 'Hidrolik Baskı Ünitesi', 'Besleme Konveyörü', 'Boşaltma Konveyörü'],
            en: ['Four-Motor Design', 'Rotor Cooling System', 'Automatic Lubrication Unit', 'Hydraulic Press Unit', 'Feeding Conveyor', 'Discharge Conveyor'],
            ru: ['Четырёхмоторная конструкция', 'Система охлаждения ротора', 'Автоматический блок смазки', 'Гидравлический прессовый блок', 'Подающий конвейер', 'Разгрузочный конвейер'],
            ar: ['تصميم بأربعة محركات', 'نظام تبريد الدوار', 'وحدة تشحيم أوتوماتيكية', 'وحدة ضغط هيدروليكية', 'ناقل تغذية', 'ناقل تفريغ']
        }
    },
    'rdm-180': {
        area: '1800 x 1500 mm',
        rotorLength: '1800 mm',
        motorPower: '75–90 kW (2–4X)',
        weight: '~12.500 kg',
        capacity: '4-8 ton/saat',
        tagline: { tr: 'Yüksek Hacim, Üstün Verim', en: 'High Volume, Superior Efficiency', ru: 'Большой Объём, Превосходная Эффективность', ar: 'حجم عالي، كفاءة متفوقة' },
        description: {
            tr: 'RDM-180, büyük ölçekli metal geri dönüşüm operasyonları için tasarlanmış yüksek kapasiteli metal parçalama makinesidir. 1800x1500mm geniş parçalama alanı ve 75-90 kW motor gücü ile saatte 4-8 ton metal işleme kapasitesi sunar. Kalın metal levhalar, büyük otomotiv parçaları, endüstriyel makine hurdaları ve ağır metal atıkların verimli şekilde parçalanmasını sağlar.',
            en: 'RDM-180 is a high-capacity metal shredder designed for large-scale metal recycling operations. With 1800x1500mm wide shredding area and 75-90 kW motor power, it offers 4-8 tons per hour metal processing capacity. It ensures efficient shredding of thick metal plates, large automotive parts, industrial machine scrap, and heavy metal waste.',
            ru: 'RDM-180 — высокопроизводительный измельчитель металла, разработанный для крупномасштабных операций по переработке металла. С широкой зоной измельчения 1800x1500мм и мощностью двигателя 75-90 кВт предлагает производительность 4-8 тонн металла в час. Обеспечивает эффективное измельчение толстых металлических листов, крупных автомобильных деталей, лома промышленных машин и тяжёлых металлических отходов.',
            ar: 'RDM-180 هي كسارة معادن عالية السعة مصممة لعمليات إعادة تدوير المعادن الكبيرة. مع منطقة تمزيق واسعة 1800×1500 مم وقوة محرك 75-90 كيلووات، توفر قدرة معالجة معادن 4-8 طن في الساعة. تضمن التمزيق الفعال للألواح المعدنية السميكة وقطع غيار السيارات الكبيرة وخردة الآلات الصناعية والنفايات المعدنية الثقيلة.'
        },
        highlight: {
            tr: 'RDM-180, hacim/güç oranında sınıfının en iyilerinden biridir. 1800mm rotor boyu, büyük boyutlu metal atıkların ön kesim gerektirmeden doğrudan işlenmesine olanak tanır. Dört motorlu konfigürasyonda 360 kW\'a ulaşan toplam güç, en zorlu metal parçaları bile kolayca işler. Rotor soğutma sistemi ile sürekli çalışmaya uygundur.',
            en: 'RDM-180 is one of the best in its class in volume/power ratio. The 1800mm rotor length allows direct processing of large-sized metal waste without pre-cutting. Total power reaching 360 kW in four-motor configuration easily processes even the toughest metal parts. Suitable for continuous operation with rotor cooling system.',
            ru: 'RDM-180 — один из лучших в своём классе по соотношению объём/мощность. Длина ротора 1800мм позволяет напрямую обрабатывать крупногабаритные металлические отходы без предварительной резки. Суммарная мощность до 360 кВт в четырёхмоторной конфигурации легко обрабатывает даже самые сложные металлические детали. Пригоден для непрерывной работы с системой охлаждения ротора.',
            ar: 'RDM-180 هي واحدة من الأفضل في فئتها من حيث نسبة الحجم/القوة. طول الدوار 1800 مم يسمح بمعالجة مباشرة للنفايات المعدنية كبيرة الحجم دون قطع مسبق. القوة الإجمالية التي تصل إلى 360 كيلووات في تكوين أربعة محركات تعالج بسهولة حتى أصعب القطع المعدنية. مناسبة للتشغيل المستمر مع نظام تبريد الدوار.'
        },
        materials: {
            tr: ['Kalın Metal Levhalar', 'Büyük Otomotiv Parçaları', 'Endüstriyel Makine Hurdaları', 'Çelik Profiller', 'Ağır Metal Döküm', 'Tank & Konteyner Parçaları'],
            en: ['Thick Metal Plates', 'Large Automotive Parts', 'Industrial Machine Scrap', 'Steel Profiles', 'Heavy Metal Castings', 'Tank & Container Parts'],
            ru: ['Толстые металлические листы', 'Крупные автомобильные детали', 'Лом промышленных машин', 'Стальные профили', 'Тяжёлое металлическое литьё', 'Детали танков и контейнеров'],
            ar: ['ألواح معدنية سميكة', 'قطع غيار سيارات كبيرة', 'خردة الآلات الصناعية', 'ملفات فولاذية', 'مصبوبات معدنية ثقيلة', 'أجزاء الخزانات والحاويات']
        },
        applications: {
            tr: [
                { title: 'Büyük Hurda Tesisleri', desc: 'Yüksek hacimli günlük operasyonlar gerçekleştiren büyük ölçekli hurda işleme tesisleri.' },
                { title: 'Ağır Makine Geri Dönüşümü', desc: 'Endüstriyel makineler, tarım ekipmanları ve iş makinelerinin parçalanması.' },
                { title: 'Otomotiv Söküm Tesisleri', desc: 'Araç şasileri, motor blokları ve büyük karoser parçalarının işlenmesi.' },
                { title: 'Çelik Fabrikaları', desc: 'Üretim atıkları ve hurda çeliğin ergitmeye hazır hale getirilmesi.' }
            ],
            en: [
                { title: 'Large Scrap Facilities', desc: 'Large-scale scrap processing facilities performing high-volume daily operations.' },
                { title: 'Heavy Machinery Recycling', desc: 'Shredding of industrial machines, agricultural equipment, and construction machinery.' },
                { title: 'Automotive Dismantling Facilities', desc: 'Processing of vehicle chassis, engine blocks, and large body parts.' },
                { title: 'Steel Mills', desc: 'Preparing production waste and scrap steel for melting.' }
            ],
            ru: [
                { title: 'Крупные ломозаготовительные предприятия', desc: 'Крупные предприятия по переработке лома, выполняющие большие объёмы ежедневных операций.' },
                { title: 'Переработка тяжёлой техники', desc: 'Измельчение промышленных машин, сельскохозяйственного оборудования и строительной техники.' },
                { title: 'Авторазборочные предприятия', desc: 'Обработка шасси автомобилей, блоков двигателей и крупных кузовных деталей.' },
                { title: 'Сталелитейные заводы', desc: 'Подготовка производственных отходов и лома стали к плавке.' }
            ],
            ar: [
                { title: 'مرافق الخردة الكبيرة', desc: 'مرافق معالجة الخردة الكبيرة التي تنفذ عمليات يومية عالية الحجم.' },
                { title: 'إعادة تدوير الآلات الثقيلة', desc: 'تمزيق الآلات الصناعية والمعدات الزراعية وآلات البناء.' },
                { title: 'مرافق تفكيك السيارات', desc: 'معالجة هياكل المركبات وكتل المحركات وأجزاء الهيكل الكبيرة.' },
                { title: 'مصانع الصلب', desc: 'تحضير نفايات الإنتاج وخردة الصلب للصهر.' }
            ]
        },
        features: {
            tr: [
                { title: 'Geniş Parçalama Alanı', desc: '1800x1500mm alan ile büyük parçaların ön kesim olmadan işlenmesi.' },
                { title: 'Yüksek Kapasite', desc: 'Saatte 4-8 ton metal işleme kapasitesi.' },
                { title: 'Güçlü Tahrik', desc: '75-90 kW motor, dört motorlu versiyonda 360 kW toplam güç.' },
                { title: 'Ağır Hizmet Gövde', desc: 'Ağır metal parçalara dayanıklı güçlendirilmiş çelik yapı.' }
            ],
            en: [
                { title: 'Wide Shredding Area', desc: 'Processing of large pieces without pre-cutting with 1800x1500mm area.' },
                { title: 'High Capacity', desc: '4-8 tons per hour metal processing capacity.' },
                { title: 'Powerful Drive', desc: '75-90 kW motor, 360 kW total power in four-motor version.' },
                { title: 'Heavy-Duty Body', desc: 'Reinforced steel structure resistant to heavy metal pieces.' }
            ],
            ru: [
                { title: 'Широкая зона измельчения', desc: 'Обработка крупных кусков без предварительной резки с зоной 1800x1500мм.' },
                { title: 'Высокая производительность', desc: 'Производительность 4-8 тонн металла в час.' },
                { title: 'Мощный привод', desc: 'Двигатель 75-90 кВт, 360 кВт суммарной мощности в четырёхмоторной версии.' },
                { title: 'Для тяжёлых условий', desc: 'Усиленная стальная конструкция, устойчивая к тяжёлым металлическим кускам.' }
            ],
            ar: [
                { title: 'منطقة تمزيق واسعة', desc: 'معالجة القطع الكبيرة دون قطع مسبق بمساحة 1800×1500 مم.' },
                { title: 'سعة عالية', desc: 'قدرة معالجة معادن 4-8 طن في الساعة.' },
                { title: 'قيادة قوية', desc: 'محرك 75-90 كيلووات، 360 كيلووات قوة إجمالية في إصدار أربعة محركات.' },
                { title: 'جسم للخدمة الشاقة', desc: 'هيكل فولاذي معزز مقاوم للقطع المعدنية الثقيلة.' }
            ]
        },
        optionalFeatures: {
            tr: ['Dört Motorlu Tasarım (360 kW)', 'Rotor Soğutma Sistemi', 'Otomatik Yağlama', 'Hidrolik Baskı Ünitesi', 'PLC Kontrol Paneli', 'Besleme & Boşaltma Konveyörü'],
            en: ['Four-Motor Design (360 kW)', 'Rotor Cooling System', 'Automatic Lubrication', 'Hydraulic Press Unit', 'PLC Control Panel', 'Feed & Discharge Conveyor'],
            ru: ['Четырёхмоторная конструкция (360 кВт)', 'Система охлаждения ротора', 'Автоматическая смазка', 'Гидравлический прессовый блок', 'Панель управления ПЛК', 'Подающий и разгрузочный конвейер'],
            ar: ['تصميم بأربعة محركات (360 كيلووات)', 'نظام تبريد الدوار', 'تشحيم أوتوماتيكي', 'وحدة ضغط هيدروليكية', 'لوحة تحكم PLC', 'ناقل تغذية وتفريغ']
        }
    },
    'rdm-200': {
        area: '2000 x 1800 mm',
        rotorLength: '2000 mm',
        motorPower: '90–132 kW (2–4X)',
        weight: '~18.000 kg',
        capacity: '6-12 ton/saat',
        tagline: { tr: 'Endüstriyel Dev, Maksimum Kapasite', en: 'Industrial Giant, Maximum Capacity', ru: 'Промышленный Гигант, Максимальная Мощность', ar: 'عملاق صناعي، أقصى سعة' },
        description: {
            tr: 'RDM-200, metal parçalama makineleri serisinin en güçlü ve en kapasiteli amiral gemisi modelidir. 2000x1800mm devasa parçalama alanı ve 90-132 kW motor gücü (dört motorlu versiyonda 528 kW) ile saatte 6-12 ton metal işleme kapasitesi sunar. En ağır endüstriyel metal atıklar, gemi söküm parçaları, büyük çelik yapılar ve ağır makine hurdalarının parçalanmasında rakipsiz performans sağlar.',
            en: 'RDM-200 is the most powerful and highest capacity flagship model of the metal shredder series. With 2000x1800mm massive shredding area and 90-132 kW motor power (528 kW in four-motor version), it offers 6-12 tons per hour metal processing capacity. It provides unrivaled performance in shredding the heaviest industrial metal waste, ship dismantling parts, large steel structures, and heavy machinery scrap.',
            ru: 'RDM-200 — самая мощная и производительная флагманская модель серии измельчителей металла. С огромной зоной измельчения 2000x1800мм и мощностью двигателя 90-132 кВт (528 кВт в четырёхмоторной версии) предлагает производительность 6-12 тонн металла в час. Обеспечивает непревзойдённую производительность при измельчении самых тяжёлых промышленных металлических отходов, деталей судоразборки, крупных стальных конструкций и лома тяжёлой техники.',
            ar: 'RDM-200 هي الطراز الرائد الأقوى والأعلى سعة في سلسلة كسارات المعادن. مع منطقة تمزيق ضخمة 2000×1800 مم وقوة محرك 90-132 كيلووات (528 كيلووات في إصدار أربعة محركات)، توفر قدرة معالجة معادن 6-12 طن في الساعة. توفر أداءً لا مثيل له في تمزيق أثقل النفايات المعدنية الصناعية وأجزاء تفكيك السفن والهياكل الفولاذية الكبيرة وخردة الآلات الثقيلة.'
        },
        highlight: {
            tr: 'RDM-200, piyasadaki en güçlü metal parçalama makinelerinden biridir. 2 metre rotor boyu ve dört motorlu versiyonda 528 kW toplam güç ile en zorlu metal parçalama operasyonlarının üstesinden gelir. Gemi söküm tesisleri, ulusal çelik geri dönüşüm projeleri ve ağır sanayi atık işleme merkezleri için idealdir. Sürekli çalışma için optimize edilmiş soğutma ve yağlama sistemleri ile minimum bakım gereksinimi.',
            en: 'RDM-200 is one of the most powerful metal shredders on the market. With 2-meter rotor length and 528 kW total power in four-motor version, it handles the toughest metal shredding operations. Ideal for ship dismantling facilities, national steel recycling projects, and heavy industry waste processing centers. Minimum maintenance requirement with cooling and lubrication systems optimized for continuous operation.',
            ru: 'RDM-200 — один из самых мощных измельчителей металла на рынке. С длиной ротора 2 метра и суммарной мощностью 528 кВт в четырёхмоторной версии справляется с самыми сложными операциями измельчения металла. Идеально подходит для судоразборочных предприятий, национальных проектов по переработке стали и центров переработки отходов тяжёлой промышленности. Минимальные требования к обслуживанию благодаря системам охлаждения и смазки, оптимизированным для непрерывной работы.',
            ar: 'RDM-200 هي واحدة من أقوى كسارات المعادن في السوق. مع طول دوار 2 متر و528 كيلووات قوة إجمالية في إصدار أربعة محركات، تتعامل مع أصعب عمليات تمزيق المعادن. مثالية لمرافق تفكيك السفن ومشاريع إعادة تدوير الصلب الوطنية ومراكز معالجة نفايات الصناعة الثقيلة. متطلبات صيانة دنيا مع أنظمة التبريد والتشحيم المحسنة للتشغيل المستمر.'
        },
        materials: {
            tr: ['Gemi Söküm Parçaları', 'Ağır Çelik Yapılar', 'Büyük Makine Hurdaları', 'Tank & Silo Parçaları', 'Demiryolu Malzemeleri', 'Ağır Döküm Parçalar'],
            en: ['Ship Dismantling Parts', 'Heavy Steel Structures', 'Large Machine Scrap', 'Tank & Silo Parts', 'Railway Materials', 'Heavy Cast Parts'],
            ru: ['Детали судоразборки', 'Тяжёлые стальные конструкции', 'Крупный лом машин', 'Детали танков и силосов', 'Железнодорожные материалы', 'Тяжёлые литые детали'],
            ar: ['أجزاء تفكيك السفن', 'هياكل فولاذية ثقيلة', 'خردة آلات كبيرة', 'أجزاء الخزانات والصوامع', 'مواد السكك الحديدية', 'قطع مصبوبة ثقيلة']
        },
        applications: {
            tr: [
                { title: 'Gemi Söküm Tesisleri', desc: 'Gemi ve deniz taşıtlarından çıkan ağır metal parçaların parçalanması.' },
                { title: 'Ulusal Geri Dönüşüm Projeleri', desc: 'Devlet destekli büyük ölçekli çelik ve metal geri dönüşüm projeleri.' },
                { title: 'Ağır Sanayi Atık Merkezleri', desc: 'Sanayi bölgelerinde oluşan ağır metal atıkların merkezi işlenmesi.' },
                { title: 'Çelik Fabrikaları', desc: 'Yüksek kapasiteli hurda girişi gerektiren büyük çelik üretim tesisleri.' }
            ],
            en: [
                { title: 'Ship Dismantling Facilities', desc: 'Shredding of heavy metal parts from ships and marine vessels.' },
                { title: 'National Recycling Projects', desc: 'Government-supported large-scale steel and metal recycling projects.' },
                { title: 'Heavy Industry Waste Centers', desc: 'Central processing of heavy metal waste from industrial zones.' },
                { title: 'Steel Mills', desc: 'Large steel production facilities requiring high-capacity scrap input.' }
            ],
            ru: [
                { title: 'Судоразборочные предприятия', desc: 'Измельчение тяжёлых металлических деталей с кораблей и морских судов.' },
                { title: 'Национальные проекты переработки', desc: 'Поддерживаемые государством крупномасштабные проекты по переработке стали и металла.' },
                { title: 'Центры тяжёлых промышленных отходов', desc: 'Централизованная переработка тяжёлых металлических отходов из промышленных зон.' },
                { title: 'Сталелитейные заводы', desc: 'Крупные сталелитейные предприятия, требующие высокопроизводительного ввода лома.' }
            ],
            ar: [
                { title: 'مرافق تفكيك السفن', desc: 'تمزيق الأجزاء المعدنية الثقيلة من السفن والمراكب البحرية.' },
                { title: 'مشاريع إعادة التدوير الوطنية', desc: 'مشاريع إعادة تدوير الصلب والمعادن الكبيرة المدعومة حكومياً.' },
                { title: 'مراكز نفايات الصناعة الثقيلة', desc: 'المعالجة المركزية للنفايات المعدنية الثقيلة من المناطق الصناعية.' },
                { title: 'مصانع الصلب', desc: 'منشآت إنتاج الصلب الكبيرة التي تتطلب مدخلات خردة عالية السعة.' }
            ]
        },
        features: {
            tr: [
                { title: 'Devasa Rotor', desc: '2000mm rotor boyu ile piyasanın en geniş parçalama alanı.' },
                { title: 'Maksimum Güç', desc: 'Dört motorlu versiyonda 528 kW toplam motor gücü.' },
                { title: 'Endüstriyel Kapasite', desc: 'Saatte 6-12 ton metal işleme kapasitesi.' },
                { title: 'Sürekli Çalışma', desc: 'Rotor soğutma ve otomatik yağlama ile 24/7 operasyon.' }
            ],
            en: [
                { title: 'Massive Rotor', desc: 'Market\'s widest shredding area with 2000mm rotor length.' },
                { title: 'Maximum Power', desc: '528 kW total motor power in four-motor version.' },
                { title: 'Industrial Capacity', desc: '6-12 tons per hour metal processing capacity.' },
                { title: 'Continuous Operation', desc: '24/7 operation with rotor cooling and automatic lubrication.' }
            ],
            ru: [
                { title: 'Огромный ротор', desc: 'Самая широкая зона измельчения на рынке с длиной ротора 2000мм.' },
                { title: 'Максимальная мощность', desc: '528 кВт суммарной мощности двигателя в четырёхмоторной версии.' },
                { title: 'Промышленная производительность', desc: 'Производительность 6-12 тонн металла в час.' },
                { title: 'Непрерывная работа', desc: 'Работа 24/7 с охлаждением ротора и автоматической смазкой.' }
            ],
            ar: [
                { title: 'دوار ضخم', desc: 'أوسع منطقة تمزيق في السوق بطول دوار 2000 مم.' },
                { title: 'أقصى قوة', desc: '528 كيلووات قوة محرك إجمالية في إصدار أربعة محركات.' },
                { title: 'سعة صناعية', desc: 'قدرة معالجة معادن 6-12 طن في الساعة.' },
                { title: 'تشغيل مستمر', desc: 'تشغيل 24/7 مع تبريد الدوار والتشحيم الأوتوماتيكي.' }
            ]
        },
        optionalFeatures: {
            tr: ['Dört Motorlu Tasarım (528 kW)', 'Gelişmiş Rotor Soğutma', 'Tam Otomatik Yağlama', 'Hidrolik Baskı Sistemi', 'PLC + SCADA Kontrol', 'Komple Konveyör Hattı'],
            en: ['Four-Motor Design (528 kW)', 'Advanced Rotor Cooling', 'Fully Automatic Lubrication', 'Hydraulic Press System', 'PLC + SCADA Control', 'Complete Conveyor Line'],
            ru: ['Четырёхмоторная конструкция (528 кВт)', 'Усовершенствованное охлаждение ротора', 'Полностью автоматическая смазка', 'Гидравлическая прессовая система', 'Управление ПЛК + SCADA', 'Полная конвейерная линия'],
            ar: ['تصميم بأربعة محركات (528 كيلووات)', 'تبريد دوار متقدم', 'تشحيم أوتوماتيكي بالكامل', 'نظام ضغط هيدروليكي', 'تحكم PLC + SCADA', 'خط ناقل كامل']
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

// Template fonksiyonunu import et
import { generateMetalHTML } from './metal-catalog-template';

// İmajları kopyala (tüm modeller için aynı görseller)
function copyImages(modelId: string): void {
    const targetDir = path.join(BASE_DIR, modelId, 'images');

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    const files = fs.readdirSync(SOURCE_IMAGES_DIR)
        .filter(f => f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.jpg'))
        .filter(f => f !== 'Thumbs.db');

    // Random sıralama ile 6 görsel seç
    const shuffled = files.sort(() => 0.5 - Math.random()).slice(0, 6);

    shuffled.forEach((file, index) => {
        const sourcePath = path.join(SOURCE_IMAGES_DIR, file);
        const targetPath = path.join(targetDir, `${index + 1}.jpeg`);
        fs.copyFileSync(sourcePath, targetPath);
    });
    console.log(`  📷 ${shuffled.length} images copied for ${modelId}`);
}

// Ana fonksiyon
console.log('🚀 Metal Shredder (RDM Series) Catalog Generation Started (7-Page SEO Version)...\n');

const modelIds = Object.keys(models);

modelIds.forEach(modelId => {
    console.log(`📁 ${modelId.toUpperCase()} processing...`);
    const modelDir = path.join(BASE_DIR, modelId);

    if (!fs.existsSync(modelDir)) {
        fs.mkdirSync(modelDir, { recursive: true });
    }

    copyImages(modelId);

    (Object.keys(languages) as Array<keyof typeof languages>).forEach(lang => {
        const suffix = languages[lang].suffix;
        const filename = `catalog${suffix}.html`;
        const filepath = path.join(modelDir, filename);

        const html = generateMetalHTML(modelId, lang, models[modelId], languages[lang]);
        fs.writeFileSync(filepath, html, 'utf8');
        console.log(`  ✅ Created: ${modelId}/${filename}`);
    });
    console.log('');
});

console.log('🎉 All Metal Shredder (RDM) catalogs generated successfully!');
console.log(`   Total: ${modelIds.length} models x ${Object.keys(languages).length} languages = ${modelIds.length * 4} catalogs\n`);
