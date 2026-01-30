/**
 * Mobile Shredder (Mobil Kırıcı) - 7 Sayfa Detaylı Katalog Script'i
 * TSM-150, TSM-300, CSM-150, CSM-200 için 4 dilde kapsamlı SEO katalog oluşturur
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_DIR = 'd:/Furkan/WEB SİTESİ/Parcalamasite/public/catalogs/mobile';
const SOURCE_IMAGES_DIR = 'D:/Furkan/WEB SİTESİ/parçalamamakinesi katalog/Mobil kırıcı katalog';

// Her model için benzersiz SEO içeriği
const models: Record<string, ModelData> = {
    'tsm-150': {
        area: '1500 x 1800 mm',
        rotorLength: '1500 mm',
        motorPower: '400 HP (298 kW)',
        weight: '~18.000 kg',
        capacity: '15-25 ton/saat',
        type: 'single',
        tagline: { tr: 'Kompakt Mobil Güç', en: 'Compact Mobile Power', ru: 'Компактная Мобильная Мощность', ar: 'قوة متنقلة مدمجة' },
        description: {
            tr: 'TSM-150, tek şaftlı tasarımı ile sahada yüksek verimlilik sunan kompakt mobil kırıcı makinesidir. 1500mm rotor boyu ve 400 HP dizel motor gücü ile inşaat atıkları, ağaç dalları, palet ve hacimli endüstriyel atıkların yerinde parçalanmasında üstün performans gösterir. Paletli veya tekerlekli şasi seçenekleri ile farklı saha koşullarına uyum sağlar.',
            en: 'TSM-150 is a compact mobile shredder offering high on-site efficiency with its single-shaft design. With 1500mm rotor length and 400 HP diesel engine power, it delivers superior performance in shredding construction waste, tree branches, pallets, and bulky industrial waste on-site. With tracked or wheeled chassis options, it adapts to different site conditions.',
            ru: 'TSM-150 — компактный мобильный измельчитель с одновальной конструкцией, обеспечивающий высокую эффективность на объекте. С длиной ротора 1500 мм и мощностью дизельного двигателя 400 л.с. обеспечивает превосходную производительность при измельчении строительных отходов, веток деревьев, поддонов и крупногабаритных промышленных отходов на месте.',
            ar: 'TSM-150 هي كسارة متنقلة مدمجة توفر كفاءة عالية في الموقع بتصميمها أحادي العمود. مع طول دوار 1500 مم وقوة محرك ديزل 400 حصان، توفر أداءً متفوقًا في تمزيق نفايات البناء وأغصان الأشجار والمنصات والنفايات الصناعية الضخمة في الموقع.'
        },
        highlight: {
            tr: 'TSM-150, kompakt boyutlarına rağmen endüstriyel güç sunması ile öne çıkar. Dar sahalarda ve şehir içi projelerde rahatça manevra yapabilir. Tek şaftlı rotor tasarımı, hacimli malzemeleri hızla yakalayıp parçalar. Dizel motor sayesinde elektrik bağlantısı olmayan sahalarda bağımsız çalışır.',
            en: 'TSM-150 stands out for delivering industrial power despite its compact size. It can easily maneuver in narrow sites and urban projects. The single-shaft rotor design quickly captures and shreds bulky materials. With diesel engine, it operates independently in sites without electricity connection.',
            ru: 'TSM-150 выделяется тем, что обеспечивает промышленную мощность несмотря на компактные размеры. Легко маневрирует на узких площадках и городских объектах. Одновальная конструкция ротора быстро захватывает и измельчает объёмные материалы. Дизельный двигатель позволяет работать автономно на объектах без электричества.',
            ar: 'تتميز TSM-150 بتقديم قوة صناعية على الرغم من حجمها المدمج. يمكنها المناورة بسهولة في المواقع الضيقة والمشاريع الحضرية. تصميم الدوار أحادي العمود يلتقط ويمزق المواد الضخمة بسرعة. مع محرك الديزل، تعمل بشكل مستقل في المواقع بدون توصيل كهربائي.'
        },
        materials: {
            tr: ['İnşaat Molozları', 'Ağaç Dalları & Kütükler', 'Ahşap Paletler', 'Plastik Atıklar', 'Karışık Belediye Atıkları', 'Tarım Atıkları'],
            en: ['Construction Debris', 'Tree Branches & Logs', 'Wooden Pallets', 'Plastic Waste', 'Mixed Municipal Waste', 'Agricultural Waste'],
            ru: ['Строительный мусор', 'Ветки и стволы деревьев', 'Деревянные поддоны', 'Пластиковые отходы', 'Смешанные муниципальные отходы', 'Сельскохозяйственные отходы'],
            ar: ['أنقاض البناء', 'أغصان وجذوع الأشجار', 'المنصات الخشبية', 'النفايات البلاستيكية', 'النفايات البلدية المختلطة', 'النفايات الزراعية']
        },
        applications: {
            tr: [
                { title: 'İnşaat Sahaları', desc: 'Yıkım ve inşaat projelerinde oluşan beton, tuğla ve ahşap atıkların sahada parçalanması.' },
                { title: 'Belediye Atık Yönetimi', desc: 'Büyük hacimli belediye atıklarının transfer istasyonlarında veya sahada ön işlemden geçirilmesi.' },
                { title: 'Orman & Tarım', desc: 'Ağaç dalları, kütükler, tarım atıkları ve biyokütle malzemelerinin parçalanması.' },
                { title: 'Endüstriyel Tesisler', desc: 'Fabrika sahalarında oluşan atıkların yerinde işlenerek hacimlerinin azaltılması.' }
            ],
            en: [
                { title: 'Construction Sites', desc: 'On-site shredding of concrete, brick and wood waste from demolition and construction projects.' },
                { title: 'Municipal Waste Management', desc: 'Pre-processing of bulky municipal waste at transfer stations or on-site.' },
                { title: 'Forestry & Agriculture', desc: 'Shredding of tree branches, logs, agricultural waste and biomass materials.' },
                { title: 'Industrial Facilities', desc: 'On-site processing of factory waste to reduce volume.' }
            ],
            ru: [
                { title: 'Строительные площадки', desc: 'Измельчение бетона, кирпича и древесных отходов от сноса и строительства на месте.' },
                { title: 'Муниципальное управление отходами', desc: 'Предварительная обработка крупногабаритных муниципальных отходов на пересадочных станциях или на месте.' },
                { title: 'Лесное и сельское хозяйство', desc: 'Измельчение веток деревьев, брёвен, сельскохозяйственных отходов и биомассы.' },
                { title: 'Промышленные объекты', desc: 'Обработка заводских отходов на месте для уменьшения объёма.' }
            ],
            ar: [
                { title: 'مواقع البناء', desc: 'تمزيق الخرسانة والطوب والنفايات الخشبية من مشاريع الهدم والبناء في الموقع.' },
                { title: 'إدارة النفايات البلدية', desc: 'المعالجة المسبقة للنفايات البلدية الضخمة في محطات النقل أو في الموقع.' },
                { title: 'الغابات والزراعة', desc: 'تمزيق أغصان الأشجار والجذوع والنفايات الزراعية ومواد الكتلة الحيوية.' },
                { title: 'المنشآت الصناعية', desc: 'معالجة نفايات المصنع في الموقع لتقليل الحجم.' }
            ]
        },
        features: {
            tr: [
                { title: 'Tek Şaftlı Rotor', desc: 'Yüksek torklu tek şaftlı rotor, hacimli malzemeleri hızla yakalar ve parçalar.' },
                { title: 'Dizel Motor', desc: '400 HP Caterpillar/Cummins dizel motor ile şebekeden bağımsız çalışma.' },
                { title: 'Paletli/Tekerlekli Şasi', desc: 'Zorlu arazi koşullarına uygun paletli veya karayolu nakliyesine uygun tekerlekli şasi.' },
                { title: 'Katlanır Çıkış Konveyörü', desc: 'Nakliye için katlanabilen, uzun menzilli çıkış konveyörü.' }
            ],
            en: [
                { title: 'Single-Shaft Rotor', desc: 'High-torque single-shaft rotor quickly captures and shreds bulky materials.' },
                { title: 'Diesel Engine', desc: 'Grid-independent operation with 400 HP Caterpillar/Cummins diesel engine.' },
                { title: 'Tracked/Wheeled Chassis', desc: 'Tracked chassis for rough terrain or wheeled chassis for road transport.' },
                { title: 'Folding Discharge Conveyor', desc: 'Long-range discharge conveyor that folds for transport.' }
            ],
            ru: [
                { title: 'Одновальный ротор', desc: 'Высокомоментный одновальный ротор быстро захватывает и измельчает объёмные материалы.' },
                { title: 'Дизельный двигатель', desc: 'Автономная работа с дизельным двигателем Caterpillar/Cummins мощностью 400 л.с.' },
                { title: 'Гусеничное/Колёсное шасси', desc: 'Гусеничное шасси для сложной местности или колёсное для дорожной перевозки.' },
                { title: 'Складной выгрузной конвейер', desc: 'Конвейер большой дальности, складывающийся для транспортировки.' }
            ],
            ar: [
                { title: 'دوار أحادي العمود', desc: 'دوار أحادي العمود عالي العزم يلتقط ويمزق المواد الضخمة بسرعة.' },
                { title: 'محرك ديزل', desc: 'تشغيل مستقل عن الشبكة مع محرك ديزل Caterpillar/Cummins بقوة 400 حصان.' },
                { title: 'هيكل جنزير/عجلات', desc: 'هيكل جنزير للتضاريس الوعرة أو هيكل عجلات للنقل على الطرق.' },
                { title: 'ناقل تفريغ قابل للطي', desc: 'ناقل تفريغ بعيد المدى يطوى للنقل.' }
            ]
        },
        optionalFeatures: {
            tr: ['Uzaktan Kumandalı Kontrol', 'Manyetik Ayırıcı', 'Rüzgar Eleme Sistemi', 'GPS Takip Sistemi', 'Toz Bastırma Sistemi', 'Farklı Elek Boyutları (30-150mm)'],
            en: ['Remote Control Operation', 'Magnetic Separator', 'Wind Sifting System', 'GPS Tracking System', 'Dust Suppression System', 'Various Screen Sizes (30-150mm)'],
            ru: ['Дистанционное управление', 'Магнитный сепаратор', 'Система воздушной сепарации', 'Система GPS-слежения', 'Система пылеподавления', 'Различные размеры сит (30-150мм)'],
            ar: ['التحكم عن بعد', 'فاصل مغناطيسي', 'نظام الفرز بالرياح', 'نظام تتبع GPS', 'نظام قمع الغبار', 'أحجام غربال مختلفة (30-150 مم)']
        }
    },
    'tsm-300': {
        area: '3000 x 2000 mm',
        rotorLength: '3000 mm',
        motorPower: '600 HP (447 kW)',
        weight: '~35.000 kg',
        capacity: '30-50 ton/saat',
        type: 'single',
        tagline: { tr: 'Mega Kapasite, Sahada Üstünlük', en: 'Mega Capacity, On-Site Supremacy', ru: 'Мега Мощность, Превосходство на Объекте', ar: 'سعة ضخمة، تفوق في الموقع' },
        description: {
            tr: 'TSM-300, tek şaftlı mobil kırıcı serisinin amiral gemisi modelidir. 3000mm devasa rotor boyu ve 600 HP motor gücü ile büyük ölçekli inşaat yıkımları, mega projeler ve ağır endüstriyel atık işleme operasyonlarında benzersiz performans sunar. Saatte 30-50 ton işleme kapasitesi ile en zorlu projelerin üstesinden gelir.',
            en: 'TSM-300 is the flagship model of the single-shaft mobile shredder series. With its massive 3000mm rotor length and 600 HP motor power, it delivers unmatched performance in large-scale demolition, mega projects, and heavy industrial waste processing operations. With 30-50 tons per hour processing capacity, it handles the most demanding projects.',
            ru: 'TSM-300 — флагманская модель серии одновальных мобильных измельчителей. С огромной длиной ротора 3000 мм и мощностью двигателя 600 л.с. обеспечивает непревзойдённую производительность при крупномасштабном сносе, мега-проектах и тяжёлой переработке промышленных отходов. С производительностью 30-50 тонн в час справляется с самыми сложными проектами.',
            ar: 'TSM-300 هي الطراز الرائد في سلسلة الكسارات المتنقلة أحادية العمود. مع طول دوار ضخم 3000 مم وقوة محرك 600 حصان، توفر أداءً لا مثيل له في عمليات الهدم الكبيرة والمشاريع الضخمة ومعالجة النفايات الصناعية الثقيلة. مع قدرة معالجة 30-50 طن في الساعة، تتعامل مع أصعب المشاريع.'
        },
        highlight: {
            tr: 'TSM-300, piyasadaki en güçlü tek şaftlı mobil kırıcılardan biridir. Devasa 3 metre rotor boyu, betondan ahşaba, metalden plastiğe her türlü malzemeyi tek geçişte parçalar. Büyük ölçekli yıkım projelerinde, stadyum ve AVM inşaatlarında tercih edilir. Yüksek kapasitesi sayesinde proje sürelerini önemli ölçüde kısaltır.',
            en: 'TSM-300 is one of the most powerful single-shaft mobile shredders on the market. The massive 3-meter rotor length shreds all types of materials from concrete to wood, metal to plastic in a single pass. Preferred in large-scale demolition projects, stadium and shopping mall constructions. Its high capacity significantly shortens project durations.',
            ru: 'TSM-300 — один из самых мощных одновальных мобильных измельчителей на рынке. Огромная длина ротора 3 метра измельчает все виды материалов от бетона до дерева, от металла до пластика за один проход. Предпочтителен для крупномасштабных проектов сноса, строительства стадионов и торговых центров. Высокая производительность значительно сокращает сроки проекта.',
            ar: 'TSM-300 هي واحدة من أقوى الكسارات المتنقلة أحادية العمود في السوق. طول الدوار الضخم 3 أمتار يمزق جميع أنواع المواد من الخرسانة إلى الخشب، من المعدن إلى البلاستيك في مرور واحد. مفضلة في مشاريع الهدم الكبيرة وبناء الملاعب ومراكز التسوق. قدرتها العالية تقصر مدة المشروع بشكل كبير.'
        },
        materials: {
            tr: ['Beton & Tuğla', 'Ağaç Kütükleri & Dalları', 'Büyük Ahşap Yapılar', 'Karışık İnşaat Atıkları', 'Endüstriyel Atıklar', 'Hacimli Ambalajlar'],
            en: ['Concrete & Brick', 'Tree Logs & Branches', 'Large Wooden Structures', 'Mixed Construction Waste', 'Industrial Waste', 'Bulky Packaging'],
            ru: ['Бетон и кирпич', 'Стволы и ветки деревьев', 'Крупные деревянные конструкции', 'Смешанные строительные отходы', 'Промышленные отходы', 'Объёмная упаковка'],
            ar: ['الخرسانة والطوب', 'جذوع وأغصان الأشجار', 'الهياكل الخشبية الكبيرة', 'نفايات البناء المختلطة', 'النفايات الصناعية', 'التغليف الضخم']
        },
        applications: {
            tr: [
                { title: 'Mega Yıkım Projeleri', desc: 'Stadyum, AVM, fabrika ve büyük bina yıkımlarında oluşan devasa atıkların sahada işlenmesi.' },
                { title: 'Afet Bölgesi Temizliği', desc: 'Deprem, sel ve doğal afet sonrası enkaz kaldırma ve moloz parçalama operasyonları.' },
                { title: 'Büyük Ölçekli Geri Dönüşüm', desc: 'Bölgesel geri dönüşüm tesislerinde yüksek hacimli atık ön işleme.' },
                { title: 'Biyokütle İşleme', desc: 'Orman temizliği ve enerji üretimi için ağaç atıklarının parçalanması.' }
            ],
            en: [
                { title: 'Mega Demolition Projects', desc: 'On-site processing of massive waste from stadium, mall, factory and large building demolitions.' },
                { title: 'Disaster Zone Cleanup', desc: 'Debris removal and rubble shredding operations after earthquakes, floods and natural disasters.' },
                { title: 'Large-Scale Recycling', desc: 'High-volume waste pre-processing at regional recycling facilities.' },
                { title: 'Biomass Processing', desc: 'Shredding of tree waste for forest clearing and energy production.' }
            ],
            ru: [
                { title: 'Мега-проекты сноса', desc: 'Обработка огромных отходов от сноса стадионов, ТЦ, заводов и крупных зданий на месте.' },
                { title: 'Очистка зон бедствия', desc: 'Операции по удалению обломков и измельчению завалов после землетрясений, наводнений и стихийных бедствий.' },
                { title: 'Крупномасштабная переработка', desc: 'Предварительная обработка большого объёма отходов на региональных перерабатывающих предприятиях.' },
                { title: 'Переработка биомассы', desc: 'Измельчение древесных отходов для расчистки леса и производства энергии.' }
            ],
            ar: [
                { title: 'مشاريع الهدم الضخمة', desc: 'معالجة النفايات الضخمة من هدم الملاعب ومراكز التسوق والمصانع والمباني الكبيرة في الموقع.' },
                { title: 'تنظيف مناطق الكوارث', desc: 'عمليات إزالة الحطام وتمزيق الأنقاض بعد الزلازل والفيضانات والكوارث الطبيعية.' },
                { title: 'إعادة التدوير الكبيرة', desc: 'المعالجة المسبقة للنفايات عالية الحجم في مرافق إعادة التدوير الإقليمية.' },
                { title: 'معالجة الكتلة الحيوية', desc: 'تمزيق نفايات الأشجار لتطهير الغابات وإنتاج الطاقة.' }
            ]
        },
        features: {
            tr: [
                { title: 'Devasa 3m Rotor', desc: '3000mm rotor uzunluğu ile en büyük malzemeleri tek geçişte parçalar.' },
                { title: '600 HP Dizel Motor', desc: 'Yüksek güçlü Caterpillar dizel motor ile maksimum performans.' },
                { title: 'Ağır Hizmet Şasi', desc: 'Zorlu saha koşullarına dayanıklı güçlendirilmiş paletli şasi.' },
                { title: 'Büyük Besleme Hunisi', desc: '3000x2000mm geniş besleme ağzı ile kepçe ile doğrudan yükleme.' }
            ],
            en: [
                { title: 'Massive 3m Rotor', desc: '3000mm rotor length shreds the largest materials in a single pass.' },
                { title: '600 HP Diesel Engine', desc: 'Maximum performance with high-power Caterpillar diesel engine.' },
                { title: 'Heavy-Duty Chassis', desc: 'Reinforced tracked chassis resistant to tough site conditions.' },
                { title: 'Large Feed Hopper', desc: '3000x2000mm wide feed opening for direct loading with excavator bucket.' }
            ],
            ru: [
                { title: 'Огромный 3м ротор', desc: 'Длина ротора 3000 мм измельчает самые крупные материалы за один проход.' },
                { title: 'Дизельный двигатель 600 л.с.', desc: 'Максимальная производительность с мощным дизельным двигателем Caterpillar.' },
                { title: 'Усиленное шасси', desc: 'Усиленное гусеничное шасси, устойчивое к сложным условиям объекта.' },
                { title: 'Большой загрузочный бункер', desc: 'Широкое загрузочное отверстие 3000x2000 мм для прямой загрузки ковшом экскаватора.' }
            ],
            ar: [
                { title: 'دوار ضخم 3 متر', desc: 'طول الدوار 3000 مم يمزق أكبر المواد في مرور واحد.' },
                { title: 'محرك ديزل 600 حصان', desc: 'أداء أقصى مع محرك ديزل Caterpillar عالي القوة.' },
                { title: 'هيكل للخدمة الشاقة', desc: 'هيكل جنزير معزز مقاوم لظروف الموقع الصعبة.' },
                { title: 'قادوس تغذية كبير', desc: 'فتحة تغذية واسعة 3000×2000 مم للتحميل المباشر بدلو الحفار.' }
            ]
        },
        optionalFeatures: {
            tr: ['Çift Manyetik Ayırıcı', 'Overband Manyetik Sistem', 'Rüzgar Eleme (Windsifter)', 'Uzaktan İzleme & Kontrol', 'Otomatik Yağlama Sistemi', 'İkincil Parçalama Modülü'],
            en: ['Double Magnetic Separator', 'Overband Magnetic System', 'Windsifter', 'Remote Monitoring & Control', 'Automatic Lubrication System', 'Secondary Shredding Module'],
            ru: ['Двойной магнитный сепаратор', 'Надленточная магнитная система', 'Воздушный сепаратор (Windsifter)', 'Дистанционный мониторинг и управление', 'Автоматическая система смазки', 'Модуль вторичного измельчения'],
            ar: ['فاصل مغناطيسي مزدوج', 'نظام مغناطيسي علوي', 'فاصل هوائي', 'المراقبة والتحكم عن بعد', 'نظام تشحيم أوتوماتيكي', 'وحدة تمزيق ثانوية']
        }
    },
    'csm-150': {
        area: '1500 x 1200 mm',
        rotorLength: '1500 mm',
        motorPower: '400 HP (298 kW)',
        weight: '~22.000 kg',
        capacity: '12-20 ton/saat',
        type: 'dual',
        tagline: { tr: 'Çift Şaft Gücü, Mobil Esneklik', en: 'Dual Shaft Power, Mobile Flexibility', ru: 'Мощность Двух Валов, Мобильная Гибкость', ar: 'قوة العمود المزدوج، مرونة متنقلة' },
        description: {
            tr: 'CSM-150, çift şaftlı tasarımı ile karmaşık malzeme yapılarını verimli şekilde işleyen mobil kırıcı makinesidir. Zıt yönlü dönen iki rotor, malzemeleri yakalayarak kontrollü parçalama sağlar. 1500x1200mm parçalama alanı ve 400 HP motor gücü ile metal, plastik karışımı atıklar ve zorlu endüstriyel malzemelerde mükemmel sonuçlar verir.',
            en: 'CSM-150 is a mobile shredder that efficiently processes complex material structures with its dual-shaft design. Two counter-rotating rotors capture materials and provide controlled shredding. With 1500x1200mm shredding area and 400 HP motor power, it delivers excellent results in metal-plastic mixed waste and challenging industrial materials.',
            ru: 'CSM-150 — мобильный измельчитель, эффективно перерабатывающий сложные структуры материалов благодаря двухвальной конструкции. Два противовращающихся ротора захватывают материалы и обеспечивают контролируемое измельчение. С зоной измельчения 1500x1200 мм и мощностью двигателя 400 л.с. обеспечивает отличные результаты при переработке смешанных металло-пластиковых отходов.',
            ar: 'CSM-150 هي كسارة متنقلة تعالج بكفاءة هياكل المواد المعقدة بتصميمها ثنائي العمود. دواران متعاكسان يلتقطان المواد ويوفران تمزيقًا متحكمًا. مع منطقة تمزيق 1500×1200 مم وقوة محرك 400 حصان، توفر نتائج ممتازة في النفايات المختلطة من المعدن والبلاستيك والمواد الصناعية الصعبة.'
        },
        highlight: {
            tr: 'CSM-150, çift şaftlı yapısı sayesinde metal içeren karmaşık atıkları bile kolayca işler. Düşük hız-yüksek tork prensibi ile çalışarak malzemeleri sıkışma olmadan parçalar. Otomobil hurdalıkları, e-atık işleme ve karma endüstriyel atık tesisleri için idealdir. Kontrollü çıkış boyutu ile sonraki işleme adımlarına uygun ürün elde edilir.',
            en: 'CSM-150 easily processes even complex waste containing metal thanks to its dual-shaft structure. Working on the low speed-high torque principle, it shreds materials without jamming. Ideal for car scrapyards, e-waste processing, and mixed industrial waste facilities. Controlled output size provides suitable product for subsequent processing steps.',
            ru: 'CSM-150 легко перерабатывает даже сложные отходы, содержащие металл, благодаря двухвальной конструкции. Работая по принципу низкой скорости-высокого крутящего момента, измельчает материалы без заклинивания. Идеально подходит для автомобильных свалок, переработки электронных отходов и предприятий по переработке смешанных промышленных отходов.',
            ar: 'تعالج CSM-150 بسهولة حتى النفايات المعقدة التي تحتوي على معادن بفضل هيكلها ثنائي العمود. تعمل على مبدأ السرعة المنخفضة والعزم العالي، تمزق المواد دون انسداد. مثالية لساحات خردة السيارات ومعالجة النفايات الإلكترونية ومرافق النفايات الصناعية المختلطة.'
        },
        materials: {
            tr: ['Hurda Otomobiller', 'E-Atık (WEEE)', 'Metal & Plastik Karışımlar', 'Endüstriyel Paletler', 'Kablo Atıkları', 'Beyaz Eşya Hurdasında'],
            en: ['Scrap Cars', 'E-Waste (WEEE)', 'Metal & Plastic Mixtures', 'Industrial Pallets', 'Cable Waste', 'White Goods Scrap'],
            ru: ['Лом автомобилей', 'Электронные отходы (WEEE)', 'Смеси металла и пластика', 'Промышленные поддоны', 'Кабельные отходы', 'Лом бытовой техники'],
            ar: ['سيارات الخردة', 'النفايات الإلكترونية (WEEE)', 'خلائط المعادن والبلاستيك', 'المنصات الصناعية', 'نفايات الكابلات', 'خردة الأجهزة المنزلية']
        },
        applications: {
            tr: [
                { title: 'Otomobil Geri Dönüşümü', desc: 'Hurda araçların ön parçalama işlemi ve metal-plastik ayırma hazırlığı.' },
                { title: 'E-Atık İşleme', desc: 'Elektronik atıkların kontrollü parçalanması ve değerli metallerin geri kazanımı.' },
                { title: 'Karma Atık Tesisleri', desc: 'Metal içeren karma endüstriyel atıkların parçalanması ve sınıflandırılması.' },
                { title: 'Kablo Geri Dönüşümü', desc: 'Bakır ve alüminyum kabloların parçalanarak metal geri kazanımına hazırlanması.' }
            ],
            en: [
                { title: 'Car Recycling', desc: 'Pre-shredding of scrap vehicles and preparation for metal-plastic separation.' },
                { title: 'E-Waste Processing', desc: 'Controlled shredding of electronic waste and recovery of valuable metals.' },
                { title: 'Mixed Waste Facilities', desc: 'Shredding and classification of mixed industrial waste containing metal.' },
                { title: 'Cable Recycling', desc: 'Shredding of copper and aluminum cables for metal recovery preparation.' }
            ],
            ru: [
                { title: 'Переработка автомобилей', desc: 'Предварительное измельчение ломовых автомобилей и подготовка к разделению металла и пластика.' },
                { title: 'Переработка электронных отходов', desc: 'Контролируемое измельчение электронных отходов и извлечение ценных металлов.' },
                { title: 'Предприятия смешанных отходов', desc: 'Измельчение и классификация смешанных промышленных отходов, содержащих металл.' },
                { title: 'Переработка кабелей', desc: 'Измельчение медных и алюминиевых кабелей для подготовки к извлечению металла.' }
            ],
            ar: [
                { title: 'إعادة تدوير السيارات', desc: 'التمزيق المسبق للمركبات الخردة والتحضير لفصل المعادن والبلاستيك.' },
                { title: 'معالجة النفايات الإلكترونية', desc: 'التمزيق المتحكم للنفايات الإلكترونية واستعادة المعادن الثمينة.' },
                { title: 'مرافق النفايات المختلطة', desc: 'تمزيق وتصنيف النفايات الصناعية المختلطة التي تحتوي على معادن.' },
                { title: 'إعادة تدوير الكابلات', desc: 'تمزيق كابلات النحاس والألمنيوم للتحضير لاستعادة المعادن.' }
            ]
        },
        features: {
            tr: [
                { title: 'Çift Şaftlı Rotor', desc: 'Zıt yönlü dönen iki rotor, malzemeleri yakalayarak kontrollü parçalama sağlar.' },
                { title: 'Düşük Hız-Yüksek Tork', desc: 'Düşük devir ve yüksek tork ile zorlu malzemelerde sıkışma olmadan çalışma.' },
                { title: 'Dayanıklı Kesici Sistem', desc: 'Hardox 500 çelik bıçaklar ile uzun ömürlü kesme performansı.' },
                { title: 'Ayarlanabilir Çıkış Boyutu', desc: 'Değiştirilebilir elek sistemi ile istenilen parça boyutunda çıkış.' }
            ],
            en: [
                { title: 'Dual Shaft Rotor', desc: 'Two counter-rotating rotors capture materials and provide controlled shredding.' },
                { title: 'Low Speed-High Torque', desc: 'Low RPM and high torque operation without jamming on tough materials.' },
                { title: 'Durable Cutting System', desc: 'Long-lasting cutting performance with Hardox 500 steel blades.' },
                { title: 'Adjustable Output Size', desc: 'Desired particle size output with replaceable screen system.' }
            ],
            ru: [
                { title: 'Двухвальный ротор', desc: 'Два противовращающихся ротора захватывают материалы и обеспечивают контролируемое измельчение.' },
                { title: 'Низкая скорость-высокий крутящий момент', desc: 'Работа с низким числом оборотов и высоким крутящим моментом без заклинивания на сложных материалах.' },
                { title: 'Прочная режущая система', desc: 'Долговечная режущая способность с лезвиями из стали Hardox 500.' },
                { title: 'Регулируемый размер выхода', desc: 'Выход желаемого размера частиц со сменной системой сит.' }
            ],
            ar: [
                { title: 'دوار ثنائي العمود', desc: 'دواران متعاكسان يلتقطان المواد ويوفران تمزيقًا متحكمًا.' },
                { title: 'سرعة منخفضة-عزم عالي', desc: 'تشغيل بعدد دورات منخفض وعزم عالي دون انسداد على المواد الصعبة.' },
                { title: 'نظام قطع متين', desc: 'أداء قطع طويل الأمد مع شفرات فولاذ Hardox 500.' },
                { title: 'حجم إخراج قابل للتعديل', desc: 'إخراج بحجم الجسيمات المطلوب مع نظام غربال قابل للاستبدال.' }
            ]
        },
        optionalFeatures: {
            tr: ['Overband Manyetik Ayırıcı', 'Toz Bastırma Sistemi', 'Kamera İzleme Sistemi', 'Uzaktan Kumanda', 'Hidrolik Elek Açma', 'Çıkış Konveyörü Farklı Boylar'],
            en: ['Overband Magnetic Separator', 'Dust Suppression System', 'Camera Monitoring System', 'Remote Control', 'Hydraulic Screen Opening', 'Various Conveyor Lengths'],
            ru: ['Надленточный магнитный сепаратор', 'Система пылеподавления', 'Система видеонаблюдения', 'Дистанционное управление', 'Гидравлическое открытие сита', 'Различные длины конвейера'],
            ar: ['فاصل مغناطيسي علوي', 'نظام قمع الغبار', 'نظام مراقبة بالكاميرا', 'التحكم عن بعد', 'فتح الغربال الهيدروليكي', 'أطوال ناقل مختلفة']
        }
    },
    'csm-200': {
        area: '2000 x 1800 mm',
        rotorLength: '2000 mm',
        motorPower: '800 HP (596 kW)',
        weight: '~38.000 kg',
        capacity: '25-40 ton/saat',
        type: 'dual',
        tagline: { tr: 'Endüstriyel Güç, Rakipsiz Performans', en: 'Industrial Power, Unrivaled Performance', ru: 'Промышленная Мощность, Непревзойдённая Производительность', ar: 'قوة صناعية، أداء لا مثيل له' },
        description: {
            tr: 'CSM-200, çift şaftlı mobil kırıcı serisinin en güçlü ve en kapasiteli modelidir. 2000mm rotor boyu, 800 HP motor gücü ve saatte 25-40 ton işleme kapasitesi ile en ağır endüstriyel uygulamalarda benzersiz performans sunar. İki adet zıt yönlü dönen rotor, en zorlu malzemeleri bile kolayca parçalar.',
            en: 'CSM-200 is the most powerful and highest capacity model in the dual-shaft mobile shredder series. With 2000mm rotor length, 800 HP motor power, and 25-40 tons per hour processing capacity, it delivers unparalleled performance in the heaviest industrial applications. Two counter-rotating rotors easily shred even the most challenging materials.',
            ru: 'CSM-200 — самая мощная и производительная модель в серии двухвальных мобильных измельчителей. С длиной ротора 2000 мм, мощностью двигателя 800 л.с. и производительностью 25-40 тонн в час обеспечивает непревзойдённую производительность в самых тяжёлых промышленных применениях. Два противовращающихся ротора легко измельчают даже самые сложные материалы.',
            ar: 'CSM-200 هي الطراز الأقوى والأعلى سعة في سلسلة الكسارات المتنقلة ثنائية العمود. مع طول دوار 2000 مم وقوة محرك 800 حصان وقدرة معالجة 25-40 طن في الساعة، توفر أداءً لا مثيل له في أثقل التطبيقات الصناعية. دواران متعاكسان يمزقان بسهولة حتى أصعب المواد.'
        },
        highlight: {
            tr: 'CSM-200, piyasadaki en güçlü çift şaftlı mobil kırıcıdır. 800 HP motor gücü ile saatte 40 tona varan işleme kapasitesi sunar. Büyük ölçekli hurda işleme tesisleri, ulusal geri dönüşüm projeleri ve mega inşaat yıkımlarında tercih edilir. Çift rotor teknolojisi sayesinde metal, beton ve ahşap karışımı en zorlu atıkları bile verimli şekilde parçalar.',
            en: 'CSM-200 is the most powerful dual-shaft mobile shredder on the market. With 800 HP motor power, it offers processing capacity up to 40 tons per hour. Preferred in large-scale scrap processing facilities, national recycling projects, and mega demolition projects. Thanks to dual rotor technology, it efficiently shreds even the most challenging waste mixtures of metal, concrete, and wood.',
            ru: 'CSM-200 — самый мощный двухвальный мобильный измельчитель на рынке. С мощностью двигателя 800 л.с. предлагает производительность до 40 тонн в час. Предпочтителен для крупномасштабных предприятий по переработке лома, национальных проектов по переработке и мега-проектов сноса. Благодаря технологии двух роторов эффективно измельчает даже самые сложные смеси отходов из металла, бетона и дерева.',
            ar: 'CSM-200 هي أقوى كسارة متنقلة ثنائية العمود في السوق. مع قوة محرك 800 حصان، توفر قدرة معالجة تصل إلى 40 طن في الساعة. مفضلة في مرافق معالجة الخردة الكبيرة ومشاريع إعادة التدوير الوطنية ومشاريع الهدم الضخمة. بفضل تقنية الدوار المزدوج، تمزق بكفاءة حتى أصعب خلائط النفايات من المعادن والخرسانة والخشب.'
        },
        materials: {
            tr: ['Ağır Hurda Metal', 'Endüstriyel Makine Hurdası', 'Beton & Demir Karışımı', 'Dev Ahşap Yapılar', 'Gemi Söküm Atıkları', 'Tren Vagonu Hurdası'],
            en: ['Heavy Scrap Metal', 'Industrial Machine Scrap', 'Concrete & Iron Mixture', 'Giant Wooden Structures', 'Ship Dismantling Waste', 'Train Wagon Scrap'],
            ru: ['Тяжёлый металлолом', 'Лом промышленных машин', 'Смесь бетона и железа', 'Гигантские деревянные конструкции', 'Отходы судоразборки', 'Лом вагонов'],
            ar: ['خردة معدنية ثقيلة', 'خردة الآلات الصناعية', 'خليط الخرسانة والحديد', 'هياكل خشبية عملاقة', 'نفايات تفكيك السفن', 'خردة عربات القطار']
        },
        applications: {
            tr: [
                { title: 'Ağır Hurda İşleme', desc: 'Büyük ölçekli hurda tesislerinde metal ve karışık atıkların ön parçalama işlemi.' },
                { title: 'Gemi Söküm Tesisleri', desc: 'Gemi söküm operasyonlarında oluşan devasa metal ve karma atıkların işlenmesi.' },
                { title: 'Ulusal Geri Dönüşüm Projeleri', desc: 'Devlet destekli büyük ölçekli atık yönetimi ve geri dönüşüm projeleri.' },
                { title: 'Mega Yıkım Operasyonları', desc: 'Stadyum, fabrika ve sanayi tesisi yıkımlarında oluşan ağır atıkların sahada işlenmesi.' }
            ],
            en: [
                { title: 'Heavy Scrap Processing', desc: 'Pre-shredding of metal and mixed waste in large-scale scrap facilities.' },
                { title: 'Ship Dismantling Facilities', desc: 'Processing of massive metal and mixed waste from ship dismantling operations.' },
                { title: 'National Recycling Projects', desc: 'Government-supported large-scale waste management and recycling projects.' },
                { title: 'Mega Demolition Operations', desc: 'On-site processing of heavy waste from stadium, factory, and industrial facility demolitions.' }
            ],
            ru: [
                { title: 'Переработка тяжёлого лома', desc: 'Предварительное измельчение металла и смешанных отходов на крупных ломоперерабатывающих предприятиях.' },
                { title: 'Судоразборочные предприятия', desc: 'Переработка огромных металлических и смешанных отходов от операций по разборке судов.' },
                { title: 'Национальные проекты переработки', desc: 'Поддерживаемые государством крупномасштабные проекты по управлению отходами и переработке.' },
                { title: 'Мега-операции по сносу', desc: 'Обработка тяжёлых отходов от сноса стадионов, заводов и промышленных объектов на месте.' }
            ],
            ar: [
                { title: 'معالجة الخردة الثقيلة', desc: 'التمزيق المسبق للمعادن والنفايات المختلطة في مرافق الخردة الكبيرة.' },
                { title: 'مرافق تفكيك السفن', desc: 'معالجة النفايات المعدنية والمختلطة الضخمة من عمليات تفكيك السفن.' },
                { title: 'مشاريع إعادة التدوير الوطنية', desc: 'مشاريع إدارة النفايات وإعادة التدوير الكبيرة المدعومة حكومياً.' },
                { title: 'عمليات الهدم الضخمة', desc: 'معالجة النفايات الثقيلة من هدم الملاعب والمصانع والمنشآت الصناعية في الموقع.' }
            ]
        },
        features: {
            tr: [
                { title: '800 HP Motor Gücü', desc: 'Serinin en güçlü modeli, saatte 40 tona varan işleme kapasitesi.' },
                { title: 'Çift Rotor Teknolojisi', desc: 'Zıt yönlü dönen iki rotor ile maksimum yakalama ve parçalama gücü.' },
                { title: 'Ağır Hizmet Şasi', desc: 'En zorlu saha koşullarına dayanıklı güçlendirilmiş paletli şasi.' },
                { title: 'Akıllı Kontrol Sistemi', desc: 'PLC tabanlı otomatik kontrol ve uzaktan izleme imkanı.' }
            ],
            en: [
                { title: '800 HP Motor Power', desc: 'Most powerful model in the series, processing capacity up to 40 tons per hour.' },
                { title: 'Dual Rotor Technology', desc: 'Maximum capture and shredding power with two counter-rotating rotors.' },
                { title: 'Heavy-Duty Chassis', desc: 'Reinforced tracked chassis resistant to the toughest site conditions.' },
                { title: 'Smart Control System', desc: 'PLC-based automatic control and remote monitoring capability.' }
            ],
            ru: [
                { title: 'Мощность двигателя 800 л.с.', desc: 'Самая мощная модель в серии, производительность до 40 тонн в час.' },
                { title: 'Технология двух роторов', desc: 'Максимальная сила захвата и измельчения с двумя противовращающимися роторами.' },
                { title: 'Усиленное шасси', desc: 'Усиленное гусеничное шасси, устойчивое к самым сложным условиям объекта.' },
                { title: 'Умная система управления', desc: 'Автоматическое управление на базе ПЛК и возможность дистанционного мониторинга.' }
            ],
            ar: [
                { title: 'قوة محرك 800 حصان', desc: 'أقوى طراز في السلسلة، قدرة معالجة تصل إلى 40 طن في الساعة.' },
                { title: 'تقنية الدوار المزدوج', desc: 'أقصى قوة التقاط وتمزيق مع دوارين متعاكسين.' },
                { title: 'هيكل للخدمة الشاقة', desc: 'هيكل جنزير معزز مقاوم لأصعب ظروف الموقع.' },
                { title: 'نظام تحكم ذكي', desc: 'تحكم أوتوماتيكي قائم على PLC وإمكانية المراقبة عن بعد.' }
            ]
        },
        optionalFeatures: {
            tr: ['Çift Overband Manyetik', 'Eddy Current Ayırıcı', 'Tam Otomasyon Paketi', 'Uzaktan İzleme & Raporlama', 'İkincil Granülatör Modülü', 'Özel Bıçak Konfigürasyonları'],
            en: ['Double Overband Magnetic', 'Eddy Current Separator', 'Full Automation Package', 'Remote Monitoring & Reporting', 'Secondary Granulator Module', 'Custom Blade Configurations'],
            ru: ['Двойной надленточный магнит', 'Сепаратор вихревых токов', 'Полный пакет автоматизации', 'Дистанционный мониторинг и отчётность', 'Модуль вторичного гранулятора', 'Специальные конфигурации ножей'],
            ar: ['مغناطيس علوي مزدوج', 'فاصل التيار الدوامي', 'حزمة الأتمتة الكاملة', 'المراقبة والتقارير عن بعد', 'وحدة حبيبات ثانوية', 'تكوينات شفرات مخصصة']
        }
    }
};

interface ModelData {
    area: string;
    rotorLength: string;
    motorPower: string;
    weight: string;
    capacity: string;
    type: 'single' | 'dual';
    tagline: Record<string, string>;
    description: Record<string, string>;
    highlight: Record<string, string>;
    materials: Record<string, string[]>;
    applications: Record<string, Array<{ title: string; desc: string }>>;
    features: Record<string, Array<{ title: string; desc: string }>>;
    optionalFeatures: Record<string, string[]>;
}

// Dil yapılandırması
const languages = {
    tr: { code: 'tr', suffix: '', locale: 'tr_TR' },
    en: { code: 'en', suffix: '-en', locale: 'en_US' },
    ru: { code: 'ru', suffix: '-ru', locale: 'ru_RU' },
    ar: { code: 'ar', suffix: '-ar', locale: 'ar_SA' }
};

// Template fonksiyonunu import et
import { generateFullHTML } from './mobile-catalog-template';

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

// Ana fonksiyon
console.log('🚀 Mobile Shredder Catalog Generation Started (7-Page SEO Version)...\n');

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

        const html = generateFullHTML(modelId, lang, models[modelId], languages[lang]);
        fs.writeFileSync(filepath, html, 'utf8');
        console.log(`  ✅ Created: ${modelId}/${filename}`);
    });
    console.log('');
});

console.log('🎉 All Mobile Shredder catalogs generated successfully!');
console.log(`   Total: ${modelIds.length} models x ${Object.keys(languages).length} languages = ${modelIds.length * 4} catalogs\n`);
