/**
 * Model-Specific Multilingual SEO-Optimized Descriptions
 * Her makine modeli için benzersiz, çok dilli, SEO odaklı açıklama metinleri
 */

type Language = 'tr' | 'en' | 'ru' | 'ar';

interface ModelDescription {
  intro: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
}

interface MultilingualModelDescription {
  tr: ModelDescription;
  en: ModelDescription;
  ru: ModelDescription;
  ar: ModelDescription;
}

export const modelDescriptions: { [productType: string]: { [modelName: string]: MultilingualModelDescription } } = {
  'single-saft': {
    'TSH-60': {
      tr: {
        intro: 'TSH-60 tek şaftlı parçalama makinesi, küçük ve orta ölçekli işletmeler için ideal çözümdür.',
        paragraph1: 'TSH-60 model, 15-30 kW motor gücü ile plastik, ahşap, kağıt, tekstil ve ambalaj atıklarının etkili şekilde parçalanmasını sağlar. 600x1100 mm parçalama alanı ve 500-800 kg/saat işleme kapasitesi ile günlük orta seviye üretim gereksinimlerini karşılar. Kompakt tasarımı sayesinde sınırlı alanlarda bile verimli çalışır.',
        paragraph2: 'PLC kontrollü otomasyon sistemi ile donatılmış TSH-60, aşırı yüklenme durumlarında otomatik ters çalışma fonksiyonu sayesinde bıçakların ömrünü uzatır ve kesintisiz üretim sağlar. Değiştirilebilir elek sistemi ile farklı çıkış boyutları elde edebilirsiniz.',
        paragraph3: 'MT Makina TSH-60 parçalama makinesi, kompakt boyutlara rağmen endüstriyel dayanıklılık sunar. 600 mm rotor uzunluğu, 24 adet değiştirilebilir bıçak ve otomatik yağlama sistemi ile minimum bakım gerektirir. Plastik geri dönüşüm tesisleri, ahşap atık işleme ve kağıt-karton tesisleri için ekonomik ve verimli bir çözümdür.'
      },
      en: {
        intro: 'TSH-60 single shaft shredder is an ideal solution for small and medium-sized enterprises.',
        paragraph1: 'TSH-60 model provides effective shredding of plastic, wood, paper, textile and packaging waste with 15-30 kW motor power. With 600x1100 mm shredding area and 500-800 kg/hour processing capacity, it meets daily medium-level production requirements. Thanks to its compact design, it works efficiently even in limited spaces.',
        paragraph2: 'Equipped with PLC controlled automation system, TSH-60 extends blade life and ensures uninterrupted production through automatic reverse function in case of overload. Different output sizes can be obtained with the replaceable screen system.',
        paragraph3: 'MT Makina TSH-60 shredder offers industrial durability despite its compact size. With 600 mm rotor length, 24 replaceable blades and automatic lubrication system, it requires minimum maintenance. It is an economical and efficient solution for plastic recycling facilities, wood waste processing and paper-cardboard facilities.'
      },
      ru: {
        intro: 'Одновальный измельчитель TSH-60 - идеальное решение для малых и средних предприятий.',
        paragraph1: 'Модель TSH-60 обеспечивает эффективное измельчение пластика, дерева, бумаги, текстиля и упаковочных отходов при мощности двигателя 15-30 кВт. С зоной измельчения 600x1100 мм и производительностью 500-800 кг/час она отвечает ежедневным требованиям производства среднего уровня. Благодаря компактной конструкции она эффективно работает даже в ограниченном пространстве.',
        paragraph2: 'Оснащенный системой автоматизации с ПЛК-управлением, TSH-60 продлевает срок службы ножей и обеспечивает бесперебойное производство благодаря автоматической функции реверса в случае перегрузки. С заменяемой системой сит можно получить ��зличные размеры на выходе.',
        paragraph3: 'Измельчитель MT Makina TSH-60 обладает промышленной прочностью, несмотря на компактный размер. С длиной ротора 600 мм, 24 сменными ножами и автоматической системой смазки требует минимального обслуживания. Это экономичное и эффективное решение для предприятий по переработке пластика, обработке древесных отходов и картонно-бумажных предприятий.'
      },
      ar: {
        intro: 'آلة التقطيع أحادية العمود TSH-60 هي الحل الأمثل للشركات الصغيرة والمتوسطة.',
        paragraph1: 'يوفر طراز TSH-60 تقطيعًا فعالاً للبلاستيك والخشب والورق والمنسوجات ونفايات التعبئة والتغليف بقوة محرك 15-30 كيلووات. بمنطقة تقطيع 600×1100 مم وسعة معالجة 500-800 كجم/ساعة، يلبي متطلبات الإنتاج اليومية متوسطة المستوى. بفضل تصميمه المدمج، يعمل بكفاءة حتى في المساحات المحدودة.',
        paragraph2: 'مجهز بنظام أتتة يتحكم فيه PLC، يطيل TSH-60 عمر الشفرات ويضمن إنتاجًا مستمرًا من خلال وظيفة الرجوع التلقائي في حالة الحمل الزائد. يمكن الحصول على أحجام مخرجات مختلفة بنظام الشاشة القابل للاستبدال.',
        paragraph3: 'تقدم آلة التقطيع MT Makina TSH-60 متانة صناعية على الرغم من حجمها المدمج. مع طول دوار 600 مم و24 شفرة قابلة للاستبدال ونظام تشحيم تلقائي، يتطلب الحد الأدنى من الصيانة. إنه حل اقتصادي وفعال لمرافق إعادة تدوير البلاستيك ومعالجة نفايات الخشب ومرافق الورق والكرتون.'
      }
    },
    'TSH-80': {
      tr: {
        intro: 'TSH-80 tek şaftlı parçalama makinesi, orta ölçekli üretim tesisleri için güçlü ve verimli bir çözüm sunar.',
        paragraph1: 'TSH-80 model, 22-45 kW motor gücü ile 800x1100 mm geniş parçalama alanına sahiptir. 800-1200 kg/saat kapasite ile günlük yüksek hacimli atık işleme gereksinimlerini karşılar. Plastik enjeksiyon atıkları, PET şişeler, PP-PE malzemeler, ahşap paletler ve endüstriyel ambalaj atıklarının parçalanmasında üstün performans gösterir.',
        paragraph2: 'Gelişmiş PLC otomasyon sistemi, gerçek zamanlı motor yükü izleme, otomatik başlatma-durdurma ve acil durum güvenlik sistemleri ile donatılmıştır. 800 mm rotor uzunluğu ve 32 adet yüksek kaliteli bıçak, homojen parçalama ve uzun ömürlü kullanım garantisi verir.',
        paragraph3: 'TSH-80, orta büyüklükteki geri dönüşüm tesisleri, plastik işleme fabrikaları ve atık yönetim merkezleri için optimize edilmiştir. Değiştirilebilel elek sistemi (20-80 mm) ile çıkış boyutu kontrolü yapılabilir. Düşük enerji tüketimi ve yüksek verimlilik oranı ile işletme maliyetlerini minimize eder.'
      },
      en: {
        intro: 'TSH-80 single shaft shredder offers powerful and efficient solution for medium-scale production facilities.',
        paragraph1: 'TSH-80 model has a wide shredding area of 800x1100 mm with 22-45 kW motor power. With 800-1200 kg/hour capacity, it meets daily high-volume waste processing requirements. It shows superior performance in shredding plastic injection waste, PET bottles, PP-PE materials, wooden pallets and industrial packaging waste.',
        paragraph2: 'Equipped with advanced PLC automation system, real-time motor load monitoring, automatic start-stop and emergency safety systems. 800 mm rotor length and 32 high-quality blades guarantee homogeneous shredding and long-lasting use.',
        paragraph3: 'TSH-80 is optimized for medium-sized recycling facilities, plastic processing factories and waste management centers. Output size control can be done with replaceable screen system (20-80 mm). It minimizes operating costs with low energy consumption and high efficiency ratio.'
      },
      ru: {
        intro: 'Одновальный измельчитель TSH-80 предлагает мощное и эффективное решение для производственных объектов среднего масштаба.',
        paragraph1: 'Модель TSH-80 имеет широкую зону измельчения 800x1100 мм с мощностью двигателя 22-45 кВт. С производительностью 800-1200 кг/час она отвечает ежедневным требованиям обработки больших объемов отходов. Показывает превосходную производительность при измельчении отходов пластикового литья, ПЭТ-бутылок, материалов PP-PE, деревянных поддонов и промышленных упаковочных отходов.',
        paragraph2: 'Оснащен усовершенствованной системой автоматизации ПЛК, мониторингом нагрузки двигателя в реальном времени, автоматическим запуском-остановкой и системами аварийной безопасности. Длина ротора 800 мм и 32 высококачественных ножа гарантируют однородное измельчение и долговечное использование.',
        paragraph3: 'TSH-80 оптимизирован для перерабатывающих предприятий среднего размера, заводов по переработке пластмасс и центров управления отходами. Контроль размера на выходе может осуществляться с помощью сменной системы сит (20-80 мм). Минимизирует эксплуатационные расходы благодаря низкому энергопотреблению и высокому коэффициенту эффективности.'
      },
      ar: {
        intro: 'توفر آلة التقطيع أحادية العمود TSH-80 حلاً قويًا وفعالاً لمنشآت الإنتاج متوسطة الحجم.',
        paragraph1: 'يتميز طراز TSH-80 بمنطقة تقطيع واسعة 800×1100 مم بقوة محرك 22-45 كيلووات. بسعة 800-1200 كجم/ساعة، يلبي متطلبات معالجة النفايات اليومية ذات الحجم الكبير. يظهر أداءً متفوقًا في تقطيع نفايات حقن البلاستيك وزجاجات PET ومواد PP-PE والمنصات الخشبية ونفايات التعبئة والتغليف الصناعية.',
        paragraph2: 'مجهز بنظام أتمتة PLC متقدم ومراقبة حمل المحرك في الوقت الفعلي والبدء والإيقاف التلقائي وأنظمة السلامة في حالات الطوارئ. يضمن طول الدوار 800 مم و32 شفرة عالية الجودة تقطيعًا متجانسًا واستخدامًا طويل الأمد.',
        paragraph3: 'تم تحسين TSH-80 لمرافق إعادة التدوير متوسطة الحجم ومصانع معالجة البلاستيك ومراكز إدارة النفايات. يمكن التحكم في حجم المخرجات باستخدام نظام الشاشة القابل للاستبدال (20-80 مم). يقلل من تكاليف التشغيل بفضل انخفاض استه��اك الطاقة ونسبة الكفاءة العالية.'
      }
    },
    'TSH-100': {
      tr: {
        intro: 'TSH-100 tek şaftlı parçalama makinesi, yüksek kapasite gerektiren endüstriyel uygulamalar için tasarlanmış profesyonel bir sistemdir.',
        paragraph1: 'TSH-100 model, 30-75 kW güçlü motor seçenekleri ile 1000x1300 mm geniş parçalama alanı sunar. 1200-1800 kg/saat i��leme kapasitesi ile büyük ölçekli üretim tesislerinin ihtiyaçlarını karşılar. Kalın duvarlı plastikler, büyük çaplı ahşap parçalar, endüstriyel konteynerler, IBC tanklar ve ağır tekstil atıklarını kolayca parçalar.',
        paragraph2: 'İleri seviye PLC kontrol paneli, touch screen operatör arayüzü, uzaktan izleme ve bakım hatırlatma sistemleri ile donatılmıştır. 1000 mm rotor, 40 adet premium kalite bıçak ve hidrolik itici sistem sayesinde sürekli ve kesintisiz üretim garantisi verir. Otomatik ters çalışma ve akıllı yük yönetimi, maksimum verimlilik sağlar.',
        paragraph3: 'MT Makina TSH-100, büyük plastik geri dönüşüm tesisleri, ahşap palet üreticileri, kompozit malzeme işleyiciler ve endüstriyel atık yönetim firmaları için ideal çözümdür. Modüler yapısı sayesinde konveyör sistemleri ve seperatörlerle entegre edilebilir. CE sertifikalı güvenlik standartları ve 2 yıl garanti ile desteklenir.'
      },
      en: {
        intro: 'TSH-100 single shaft shredder is a professional system designed for industrial applications requiring high capacity.',
        paragraph1: 'TSH-100 model offers a wide shredding area of 1000x1300 mm with powerful motor options of 30-75 kW. With 1200-1800 kg/hour processing capacity, it meets the needs of large-scale production facilities. It easily shreds thick-walled plastics, large wood parts, industrial containers, IBC tanks and heavy textile waste.',
        paragraph2: 'Equipped with advanced PLC control panel, touch screen operator interface, remote monitoring and maintenance reminder systems. With 1000 mm rotor, 40 premium quality blades and hydraulic pusher system, it guarantees continuous and uninterrupted production. Automatic reverse operation and intelligent load management provide maximum efficiency.',
        paragraph3: 'MT Makina TSH-100 is an ideal solution for large plastic recycling facilities, wooden pallet manufacturers, composite material processors and industrial waste management companies. Thanks to its modular structure, it can be integrated with conveyor systems and separators. Supported by CE certified safety standards and 2-year warranty.'
      },
      ru: {
        intro: 'Одновальный измельчитель TSH-100 - профессиональная система, разработанная для промышленных применений, требующих высокой производительности.',
        paragraph1: 'Модель TSH-100 предлагает широкую зону измельчения 1000x1300 мм с мощными вариантами двигателя 30-75 кВт. С производительностью обработки 1200-1800 кг/час она отвечает потребностям крупномасштабных производственных объектов. Легко измельчает толстостенный пластик, крупные деревянные детали, промышленные контейнеры, баки IBC и тяжелые текстильные отходы.',
        paragraph2: 'Оснащен усовершенствованной панелью управления ПЛК, сенсорным интерфейсом оператора, системами дистанционного мониторинга и напоминания о техническом обслуживании. С ротором 1000 мм, 40 ножами премиум-качества и гидравлической системой толкателя гарантирует непрерывное производство. Автоматическая реверсивная работа и интеллектуальное управление нагрузкой обеспечивают максимальную эффективность.',
        paragraph3: 'MT Makina TSH-100 - идеальное решение для крупных предприятий по переработке пластика, производителей деревянных поддонов, переработчиков композитных материалов и компаний по управлению промышленными отходами. Благодаря модульной структуре может быть интегрирован с конвейерными системами и сепараторами. Поддерживается сертифицированными стандартами безопасности CE и 2-летней гарантией.'
      },
      ar: {
        intro: 'آلة التقطيع أحادية العمود TSH-100 هي نظام احترافي مصمم للتطبيقات الصناعية التي تتطلب سعة عالية.',
        paragraph1: 'يوفر طراز TSH-100 منطقة تقطيع واسعة 1000×1300 مم مع خيارات محرك قوية 30-75 كيلووات. بسعة معالجة 1200-1800 كجم/ساعة، يلبي احتياجات منشآت الإنتاج واسعة النطاق. يقطع بسهولة البلاستيك ذو الجدران السميكة وقطع الخشب الكبيرة والحاويات الصناعية وخزانات IBC ونفايات المنسوجات الثقيلة.',
        paragraph2: 'مجهز بلوحة تحكم PLC متقدمة وواجهة مشغل شاشة تعمل باللمس وأنظمة المراقبة عن بُعد وتذكير الصيانة. مع دوار 1000 مم و40 شفرة عالية الجودة ونظام دفع هيدروليكي، يضمن إنتجًا ��ستمرًا ومتواصلاً. توفر العملية العكسية التلقائية وإدارة الحمل الذكية أقصى كفاءة.',
        paragraph3: 'MT Makina TSH-100 هو حل مثالي لمنشآت إعادة تدوير البلاستيك الكبيرة ومصنعي المنصات الخشبية ومعالجي المواد المركبة وشركات إدارة النفايات الصناعية. بفضل هيكلها المعياري، يمكن دمجها مع أنظمة النقل والفواصل. مدعومة بمعايير السلامة المعتمدة من CE وضمان لمدة عامين.'
      }
    },
    'TSH-130': {
      tr: {
        intro: 'TSH-130 tek şaftlı parçalama makinesi, ağır hizmet tipi endüstriyel uygulamalar için tasarlanmış güçlü bir parçalama sistemidir.',
        paragraph1: 'TSH-130 model, 45-110 kW yüksek tork motor gücü ile 1300x1600 mm ekstra geniş parçalama alanı sunar. 1800-2500 kg/saat işleme kapasitesi ile sürekli üretim yapan büyük tesislerin gereksinimlerini karşılar. Kalın çeperli endüstriyel plastikler, büyük ahşap kütükler, yatak ve mobilya atıkları, büyük çaplı borular ve ağır endüstriyel atıkların parçalanmasında üstün performans gösterir.',
        paragraph2: 'Endüstriyel sınıf PLC otomasyon, gerçek zamanlı üretim takibi, enerji tüketim analizi ve bakım planlama modülleri içerir. 1300 mm uzun rotor, 48 adet takviyeli bıçak sistemi ve güçlendirilmiş rulman yapısı ile 7/24 kesintisiz çalışma kapasitesine sahiptir. Hidrolik besleyici ve otomatik seviye kontrol sistemi operatör müdahalesini minimize eder.',
        paragraph3: 'TSH-130, büyük kapasiteli plastik geri dönüşüm kompleksleri, ahşap işleme merkezleri, evsel eşya geri kazanım tesisleri ve ağır sanayi atık yönetimi için optimize edilmiştir. Çift elek sistemi ile hem kaba hem de ince parçalama yapılabilir. Yüksek dayanıklılık ve düşük işletme maliyeti ile yatırım geri dönüşü hızlıdır.'
      },
      en: {
        intro: 'TSH-130 single shaft shredder is a powerful shredding system designed for heavy-duty industrial applications.',
        paragraph1: 'TSH-130 model offers an extra wide shredding area of 1300x1600 mm with 45-110 kW high torque motor power. With 1800-2500 kg/hour processing capacity, it meets the requirements of large facilities with continuous production. It shows superior performance in shredding thick-walled industrial plastics, large wood logs, bed and furniture waste, large diameter pipes and heavy industrial waste.',
        paragraph2: 'Industrial grade PLC automation includes real-time production tracking, energy consumption analysis and maintenance planning modules. With 1300 mm long rotor, 48 reinforced blade system and strengthened bearing structure, it has 7/24 uninterrupted operation capacity. Hydraulic feeder and automatic level control system minimize operator intervention.',
        paragraph3: 'TSH-130 is optimized for large capacity plastic recycling complexes, wood processing centers, household appliance recovery facilities and heavy industry waste management. Both coarse and fine shredding can be done with dual screen system. Fast return on investment with high durability and low operating costs.'
      },
      ru: {
        intro: 'Одновальный измельчитель TSH-130 - мощная система измельчения, разработанная для тяжелых промышленных применений.',
        paragraph1: 'Модель TSH-130 предлагает сверхширокую зону измельчения 1300x1600 мм с высокомоментным двигателем 45-110 кВт. С производительностью обработки 1800-2500 кг/час она отвечает требованиям крупных предприятий с непрерывным производством. Показывает превосходную производительность при измельчении толстостенного промышленного пластика, крупных деревянных бревен, отходов мебели �� кроватей, труб большого диаметра и тяжелых промышленных отходов.',
        paragraph2: 'Промышленная автоматизация ПЛК включает отслеживание производства в реальном времени, анализ энергопотребления и модули планирования технического обслуживания. С длинным ротором 1300 мм, системой из 48 усиленных ножей и усиленной конструкцией подшипников имеет возможность непрерывной работы 7/24. Гидравлический податчик и система автоматического контроля уровня минимизируют вмешательство оператора.',
        paragraph3: 'TSH-130 оптимизирован для крупных комплексов по переработке пластика, центров обработки древесины, предприятий по утилизации бытовой техники и управления отходами тяжелой промышленности. Возможно как грубое, так и тонкое измельчение с двойной системой сит. Быстрая окупаемость инвестиций благодаря высокой долговечности и низким эксплуатационным расходам.'
      },
      ar: {
        intro: 'آلة التقطيع أحادية العمود TSH-130 هي نظام تقطيع قوي مصمم للتطبيقات الصناعية الثقيلة.',
        paragraph1: 'يوفر طراز TSH-130 منطقة تقطيع واسعة للغاية 1300×1600 مم مع قوة محرك عزم دوران عالية 45-110 كيلووات. بسعة معالجة 1800-2500 كجم/ساعة، يلبي متطلبات المنشآت الكبيرة ذات الإنتاج المستمر. يظهر أداءً متفوقًا في تقطيع البلاستيك الصناعي ذو الجدران السميكة وجذوع الخشب الكبيرة ونفايات الأسرة والأثاث والأنابيب ذات القطر الكبير والنفايات الصناعية الثقيلة.',
        paragraph2: 'تتضمن أتمتة PLC الصناعية تتبع الإنتاج في الوقت الفعلي وتحليل استهلاك الطاقة ووحدات تخطيط الصيانة. مع دوار طويل 1300 مم ونظام 48 شفرة معززة وهيكل محمل معزز، لديه قدرة تشغيل متواصل 7/24. يقلل المغذي الهيدروليكي ونظام التحكم في المستوى التلقائي من تدخل المشغل.',
        paragraph3: 'تم تحسين TSH-130 لمجمعات إعادة تدوير البلاستيك ذات السعة الكبيرة ومراكز معالجة الخشب ومرافق استعادة الأجهزة المنزلية وإدارة نفايات الصناعة الثقيلة. يمكن إجراء التقطيع الخشن والناعم باستخدام نظام الشاشة المزدوجة. عائد سريع على الاستثمار مع متانة عالية وتكاليف تشغيل منخفضة.'
      }
    },
    'TSH-160': {
      tr: {
        intro: 'TSH-160 tek şaftlı parçalama makinesi, çift motor teknolojisi ile ekstra yüksek kapasite ve performans sunan endüstriyel sınıf bir sistemdir.',
        paragraph1: 'TSH-160 model, 2x 55-132 kW çift motor konfigürasyonu ile 1600x1800 mm ultra geniş parçalama alanı sunar. 3500-4500 kg/saat işleme kapasitesi ile Türkiye\'nin en yüksek kapasiteli tek şaftlı sistemlerinden biridir. Büyük hacimli endüstriyel konteynerler, otomotiv tampon ve parçaları, büyük çaplı boru sistemleri, kompozit malzemeler ve toplu atık işleme projelerinde kullanılır.',
        paragraph2: 'Siemens PLC tabanlı ileri otomasyon sistemi, SCADA entegrasyonu, uzaktan müdahale, predictive maintenance (öngörülü bakım) ve IoT bağlantı altyapısı sunar. 1600 mm ekstra uzun rotor, 64 adet özel alaşımlı bıçak ve takviyeli dişli kutusu ile maksimum tork ve dayanıklılık sağlar. Çift motor sistemi sayesinde ağır yüklerde bile kesintisiz çalışma garantisi verir.',
        paragraph3: 'MT Makina TSH-160, büyük ölçekli geri dönüşüm kompleksleri, otomotiv geri kazanım merkezleri, belediye atık yönetim tesisleri ve sanayi bölgesi ortak atık işleme merkezleri için tasarlanmıştır. Tam otomatik konveyör besleme, manyetik seperatör, hava seperatörü ve balya presi ile entegre edilebilir. Avrupa standartlarında güvenlik ve CE sertifikası ile desteklenir.'
      },
      en: {
        intro: 'TSH-160 single shaft shredder is an industrial-class system offering extra high capacity and performance with dual motor technology.',
        paragraph1: 'TSH-160 model offers an ultra-wide shredding area of 1600x1800 mm with 2x 55-132 kW dual motor configuration. With a processing capacity of 3500-4500 kg/hour, it is one of Turkey\'s highest capacity single shaft systems. It is used in large volume industrial containers, automotive bumpers and parts, large diameter pipe systems, composite materials and bulk waste processing projects.',
        paragraph2: 'Siemens PLC-based advanced automation system offers SCADA integration, remote intervention, predictive maintenance and IoT connectivity infrastructure. With 1600 mm extra long rotor, 64 special alloy blades and reinforced gearbox, it provides maximum torque and durability. Thanks to the dual motor system, it guarantees uninterrupted operation even under heavy loads.',
        paragraph3: 'MT Makina TSH-160 is designed for large-scale recycling complexes, automotive recovery centers, municipal waste management facilities and industrial zone joint waste processing centers. It can be integrated with fully automatic conveyor feeding, magnetic separator, air separator and bale press. Supported by European standards safety and CE certification.'
      },
      ru: {
        intro: 'Одновальный измельчитель TSH-160 - система промышленного класса, предлагающая сверхвысокую производительность и производительность с технологией двойного двигателя.',
        paragraph1: 'Модель TSH-160 предлагает сверхширокую зону измельчения 1600x1800 мм с конфигурацией двойного двигателя 2x 55-132 кВт. С производительностью обработки 3500-4500 кг/час это одна из самых высокопроизводительных одновальных систем Турции. Используется в крупногабаритных промышленных контейнерах, автомобильных бамперах и деталях, трубных системах большого диаметра, композитных материалах и проектах массовой переработки отходов.',
        paragraph2: 'Передовая система автоматизации на базе ПЛК Siemens предлагает интеграцию SCADA, дистанционное вмешательство, прогнозируемое техническое обслуживание и инфраструктуру подключения IoT. С дополнительным длинным ротором 1600 мм, 64 ножами из специального сплава и усиленным редуктором обеспечивает максимальный крутящий момент и долговечность. Благодаря системе с двумя двигателями гарантирует бесперебойную работу даже при больших нагрузках.',
        paragraph3: 'MT Makina TSH-160 разработан для крупномасштабных комплексов переработки, центров восстановления автомобилей, муниципальных объектов по управлению отходами и совместных центров переработки отходов промышленных зон. Может быть интегрирован с полностью автоматической конвейерной подачей, магнитным сепаратором, воздушным сепаратором и пресс-подборщиком. Поддерживается европейскими стандартами безопасности и сертификацией CE.'
      },
      ar: {
        intro: 'آلة التقطيع أحادية العمود TSH-160 هي نظام من الدرجة الصناعية يوفر سعة وأداء عاليين للغاية بتقنية المحرك المزدوج.',
        paragraph1: 'يوفر طراز TSH-160 منطقة تقطيع فائقة الاتساع 1600×1800 مم مع تكوين محرك مزدوج 2×55-132 كيلووات. بسعة معالجة 3500-4500 كجم/ساعة، هو أحد أنظمة العمود الواحد ذات السعة الأعلى في تركيا. يستخدم في الحاويات الصناعية كبيرة الحجم والمصدات وأجزاء السيارات وأنظمة الأنابيب ذات القطر الكبير والمواد المركبة ومشاريع معالجة النفايات بالجملة.',
        paragraph2: 'يوف�� نظام الأتمتة المتقدم القائم على PLC من Siemens تكامل SCADA والتدخل عن بُعد والصيانة التنبؤية والبنية التحتية لاتصال إنترنت الأشياء. مع دوار طويل إضافي 1600 مم و64 شفرة سبائك خاصة وعلبة تروس معززة، يوفر أقصى عزم دوران ومتانة. بفضل نظام المحرك المزدوج، يضمن تشغيلاً متواصلاً حتى تحت الأحمال الثقيلة.',
        paragraph3: 'تم تصميم MT Makina TSH-160 لمجمعات إعادة التدوير واسعة النطاق ومراكز استعادة السيارات ومرافق إدارة النفايات البلدية ومراكز معالجة النفايات المشتركة في المناطق الصناعية. يمكن دمجه مع التغذية بالناقل الأوتوماتيكي بالكامل والفاصل المغناطيسي والفاصل الهوائي ومكبس البالات. مدعوم بمعايير السلامة الأوروبية وشهادة CE.'
      }
    },
    'TSH-200': {
      tr: {
        intro: 'TSH-200 tek şaftlı parçalama makinesi, MT Makina\'nın en büyük ve en güçlü modeli olup maksimum kapasite gerektiren mega projeler için tasarlanmıştır.',
        paragraph1: 'TSH-200 model, 2x 75-160 kW çift motor sistemi ile 2000x2300 mm dev parçalama alanı sunar. 4500-6000 kg/saat işleme kapasitesi ile saatte 5 tona kadar atık işleyebilme gücüne sahiptir. Endüstriyel büyük hacimli konteynerler, otobus-kamyon iç döşemeleri, büyük çaplı plastik tanklar, endüstriyel makine kasaları, büyük ahşap yapılar ve toplu elektronik atık projeleri için kullanılır.',
        paragraph2: 'En ileri PLC ve SCADA sistemi, yapay zeka destekli yük optimizasyonu, gerçek zamanlı performans analizi, uzaktan tam kontrol ve bulut tabanlı veri saklama özelliklerine sahiptir. 2000 mm ultra uzun rotor, 80 adet premium kalite bıçak, endüstriyel sınıf hidrolik sistem ve takviyeli çelik gövde ile en zorlu malzemeleri bile kolayca işler. Çift motor ve diferansiyel dişli sistemi sayesinde eşsiz tork ve verim sunar.',
        paragraph3: 'TSH-200, mega ölçekli geri dönüşüm kompleksleri, belediye entegre katı atık yönetim tesisleri, otomotiv sanayi atık merkezleri, liman ve gümrük atık işleme merkezleri için ideal çözümdür. Tam otomatik hat entegrasyonu, multi-seperatör sistemleri, otomatik paketleme ve sevkiyat sistemleri ile kombine edilebilir. 7/24 teknik destek, yerinde bakım servisi ve uzun süreli garanti ile desteklenir.'
      },
      en: {
        intro: 'TSH-200 single shaft shredder is MT Makina\'s largest and most powerful model, designed for mega projects requiring maximum capacity.',
        paragraph1: 'TSH-200 model offers a giant shredding area of 2000x2300 mm with 2x 75-160 kW dual motor system. With a processing capacity of 4500-6000 kg/hour, it has the power to process up to 5 tons of waste per hour. It is used for industrial large volume containers, bus-truck interior trim, large diameter plastic tanks, industrial machine casings, large wooden structures and bulk electronic waste projects.',
        paragraph2: 'The most advanced PLC and SCADA system features AI-assisted load optimization, real-time performance analysis, full remote control and cloud-based data storage. With 2000 mm ultra-long rotor, 80 premium quality blades, industrial grade hydraulic system and reinforced steel body, it easily processes even the toughest materials. It offers unique torque and efficiency thanks to dual motor and differential gear system.',
        paragraph3: 'TSH-200 is the ideal solution for mega-scale recycling complexes, municipal integrated solid waste management facilities, automotive industrial waste centers, port and customs waste processing centers. It can be combined with fully automatic line integration, multi-separator systems, automatic packaging and shipping systems. Supported by 24/7 technical support, on-site maintenance service and long-term warranty.'
      },
      ru: {
        intro: 'Одновальный измельчитель TSH-200 - самая большая и мощная модель MT Makina, разработанная для мега-проектов, требующих максимальной производительности.',
        paragraph1: 'Модель TSH-200 предлагает гигантскую зону измельчения 2000x2300 мм с системой двойного двигателя 2x 75-160 кВт. С производительностью обработки 4500-6000 кг/час она способна обрабатывать до 5 тонн отходов в час. Используется для промышленных контейнеров большого объема, внутренней отделки автобусов и грузовиков, пластиковых резервуаров большого диаметра, корпусов промышленного оборудования, больших деревянных конструкций и крупных проектов по электронным отходам.',
        paragraph2: 'Самая передовая система ПЛК и SCADA включает оптимизацию нагрузки с помощью ИИ, анализ производительности в реальном времени, полное дистанционное управление и облачное хранение данных. С ул��традлинным ротором 2000 мм, 80 ножами премиум-качества, гидравлической системой промышленного класса и усиленным стальным корпусом легко обрабатывает даже самые прочные материалы. Обеспечивает уникальный крутящий момент и эффективность благодаря системе с двумя двигателями и дифференциальной передачей.',
        paragraph3: 'TSH-200 - идеальное решение для мегамасштабных комплексов переработки, муниципальных интегрированных объектов управления твердыми отходами, центров промышленных отходов автомобильной промышленности, портовых и таможенных центров переработки отходов. Может комбинироваться с полностью автоматической интеграцией линии, мультисепараторными системами, автоматическими системами упаковки и отгрузки. Поддерживается круглосуточной технической поддержкой, сервисом обслуживания на месте и долгосрочной гарантией.'
      },
      ar: {
        intro: 'آلة التقطيع أحادية العمود TSH-200 هي أكبر وأقوى طراز من MT Makina، مصممة للمشاريع الضخمة التي تتطلب أقصى سعة.',
        paragraph1: 'يوفر طراز TSH-200 منطقة تقطيع عملاقة 2000×2300 مم مع نظام محرك مزدوج 2×75-160 كيلووات. بسعة معالجة 4500-6000 كجم/ساعة، لديها القدرة على معالجة ما يصل إلى 5 أطنان من النفايات في الساعة. يستخدم للحاويات الصناعية كبيرة الحجم وتشطيبات الحافلات والشاحنات الداخلية وخزانات البلاستيك ذات القطر الكبير وهياكل الآلات الصناعية والهياكل الخشبية الكبيرة ومشاريع النفايات الإلكترونية بالجملة.',
        paragraph2: 'يتميز نظام PLC وSCADA الأكثر تقدمًا بتحسين الحمل بمساعدة الذكاء الاصطناعي وتحليل الأداء في الوقت الفعلي والتحكم الكامل عن بُعد وتخزين البيانات المستند إلى السحابة. مع دوار فائق الطول 2000 مم و80 شفرة عالية الجودة و��ظام هيدروليكي بدرجة صناعية وهيكل فولاذي معزز، يعالج بسهولة حتى أصعب المواد. ��وفر عزم دوران وكفاءة فريدة بفضل نظام المحرك المزدوج ونظام التروس التفاضلي.',
        paragraph3: 'TSH-200 هو الحل الأمثل لمجمعات إعادة التدوير على نطاق ضخم ومرافق الإدارة المتكاملة للنفايات الصلبة البلدية ومراكز النفايات الصناعية للسيارات ومراكز معالجة نفايات الموانئ والجمارك. يمكن دمجه مع التكامل الآلي الكامل للخط وأنظمة الفصل المتعددة وأنظمة التعبئة والشحن التلقائية. مدعوم بدعم فني على مدار 24/7 وخدمة صيانة في الموقع وضمان طويل الأجل.'
      }
    }
  },
  'dual-saft': {
    'CS-20': {
      tr: {
        intro: 'CS-20 çift şaftlı parçalama makinesi, küçük ölçekli geri dönüşüm tesisleri için kompakt ve ekonomik çözümdür.',
        paragraph1: 'CS-20 model, 2x7.5 kW çift motor sistemi ile 400 mm rotor uzunluğu ve 200 mm rotor çapına sahiptir. 300-500 kg/saat işleme kapasitesi ile küçük ve orta boy işletmelerin günlük atık işleme ihtiyaçlarını karşılar. Plastik film, pet şişe, karton, kağıt, hafif metal ve küçük ahşap parçaların parçalanmasında etkili performans gösterir.',
        paragraph2: 'Basit kullanımlı kontrol paneli ve güvenlik sistemleri ile donatılmış CS-20, sınırlı alanlarda bile verimli çalışır. 32 adet değiştirilebilir bıçak ve ayarlanabilir elek sistemi (30-80 mm) ile farklı materyal türlerine uyum sağlar. Düşük enerji tüketimi sayesinde işletme maliyetlerini minimize eder.',
        paragraph3: 'MT Makina CS-20, küçük plastik geri dönüşüm atölyeleri, kağıt-karton toplama merkezleri, ambalaj atığı işleme birimleri ve yerel atık yönetim merkezleri için idealdir. Kolay montaj ve hızlı kurulum imkanı sunar. 1 yıl garanti ve teknik destek ile desteklenir.'
      },
      en: {
        intro: 'CS-20 dual shaft shredder is a compact and economical solution for small-scale recycling facilities.',
        paragraph1: 'CS-20 model features 2x7.5 kW dual motor system with 400 mm rotor length and 200 mm rotor diameter. With 300-500 kg/hour processing capacity, it meets daily waste processing needs of small and medium-sized businesses.',
        paragraph2: 'Equipped with easy-to-use control panel and safety systems, CS-20 operates efficiently even in limited spaces. With 32 replaceable blades and adjustable screen system (30-80 mm), it adapts to different material types.',
        paragraph3: 'MT Makina CS-20 is ideal for small plastic recycling workshops, paper-cardboard collection centers, packaging waste processing units and local waste management centers.'
      },
      ru: {
        intro: 'Двухвальный измельчитель CS-20 - компактное и экономичное решение для малых предприятий по переработке.',
        paragraph1: 'Модель CS-20 оснащена системой с двумя двигателями 2x7,5 кВт с длиной ротора 400 мм и диаметром ротора 200 мм. С производительностью обработки 300-500 кг/час она отвечает ежедневным потребностям малых и средних предприятий.',
        paragraph2: 'Оснащенный простой панелью управления и системами безопасности, CS-20 эффективно работает даже в ограниченном пространстве. С 32 сменными ножами и регулируемой системой сит (30-80 мм) адаптируется к различным типам материалов.',
        paragraph3: 'MT Makina CS-20 идеально подходит для небольших мастерских по переработке пластика, центров сбора бумаги и картона, подразделений по переработке упаковочных отходов.'
      },
      ar: {
        intro: 'آلة التمزيق ثنائية العمود CS-20 هي حل مدمج واقتصادي لمرافق إعادة التدوير صغيرة الحجم.',
        paragraph1: 'يتميز طراز CS-20 بنظام محرك مزدوج 2×7.5 كيلووات مع طول دوار 400 مم وقطر دوار 200 مم. بسعة معالجة 300-500 كجم/ساعة، يلبي احتياجات معالجة النفايات اليومية للشركات الصغيرة والمتوسطة.',
        paragraph2: 'مجهز بلوحة تحكم سهلة الاستخدام وأنظمة السلامة، يعمل CS-20 بكفاءة حتى في المساحات المحدودة. مع 32 شفرة قابلة للاستبدال ونظام شاشة قابل للتعديل (30-80 مم).',
        paragraph3: 'MT Makina CS-20 مثالي لورش إعادة تدوير البلاستيك الصغيرة ومراكز جمع الورق والكرتون ووحدات معالجة نفايات التعبئة والتغليف.'
      }
    },
    'CS-40': {
      tr: {
        intro: 'CS-40 çift şaftlı parçalama makinesi, orta ölçekli işletmeler için güvenilir ve verimli bir parçalama çözümüdür.',
        paragraph1: 'CS-40 model, 2x11 kW çift motor gücü ile 600 mm rotor uzunluğu ve 250 mm rotor çapı sunarak dengeli parçalama performansı sağlar. 500-800 kg/saat işleme kapasitesi ile plastik şişeler, PP-PE malzemeler, karton kutular, ahşap paletler ve hafif metal atıkların işlenmesinde üstün verimlilik gösterir.',
        paragraph2: 'Yarı-otomatik kontrol sistemi, aşırı yük koruması ve acil durdurma butonu ile donatılmış CS-40, güvenli çalışma ortamı sunar. 48 adet yüksek mukavemetli bıçak ve ayarlanabilir elek sistemi (30-100 mm) ile farklı çıkış boyutları elde edilebilir.',
        paragraph3: 'CS-40, plastik toplama merkezleri, ambalaj atığı işleme tesisleri, ahşap atık geri dönüşümü ve karma atık ön işleme üniteleri için optimize edilmiştir. Kompakt boyutlara rağmen sağlam çelik gövde yapısı uzun ömür garantisi verir.'
      },
      en: {
        intro: 'CS-40 dual shaft shredder is a reliable and efficient shredding solution for medium-sized businesses.',
        paragraph1: 'CS-40 model provides balanced shredding performance with 2x11 kW dual motor power, 600 mm rotor length and 250 mm rotor diameter. With 500-800 kg/hour processing capacity, it shows superior efficiency.',
        paragraph2: 'Equipped with semi-automatic control system, overload protection and emergency stop button, CS-40 offers safe working environment. Different output sizes can be obtained with 48 high-strength blades.',
        paragraph3: 'CS-40 is optimized for plastic collection centers, packaging waste processing facilities, wood waste recycling and mixed waste pre-processing units.'
      },
      ru: {
        intro: 'Двухвальный измельчитель CS-40 - надежное и эффективное решение для предприятий среднего размера.',
        paragraph1: 'Модель CS-40 обеспечивает сбалансированную производительность измельчения с мощностью двойного двигателя 2x11 кВт, длиной ротора 600 мм и диаметром ротора 250 мм.',
        paragraph2: 'Оснащенный полуавтоматической системой управления, защитой от перегрузки и кнопкой аварийного останова, CS-40 обеспечивает безопасную рабочую среду.',
        paragraph3: 'CS-40 оптимизирован для центров сбора пластика, предприятий по переработке упаковочных отходов, переработки древесных отходов.'
      },
      ar: {
        intro: 'آلة التمزيق ثنائية العمود CS-40 هي حل تمزيق موثوق وفعال للشركات متوسطة الحجم.',
        paragraph1: 'يوفر طراز CS-40 أداء تمزيق متوازنًا بقوة محرك مزدوج 2×11 كيلووات وطول دوار 600 مم وقطر دوار 250 مم.',
        paragraph2: 'مجهز بنظام تحكم شبه أوتوماتيكي وحماية من الحمل الزائد وزر إيقاف طوارئ، يوفر CS-40 بيئة عمل آمنة.',
        paragraph3: 'تم تحسين CS-40 لمراكز جمع البلاستيك ومرافق معالجة نفايات التعبئة والتغليف وإعادة تدوير نفايات الخشب.'
      }
    },
    'CS-60': {
      tr: {
        intro: 'CS-60 çift şaftlı parçalama makinesi, endüstriyel atık yönetiminde yüksek verimlilik sunan kompakt ve güçlü bir çözümdür.',
        paragraph1: 'CS-60 model, 2x15 kW çift motor konfigürasyonu ile 800 mm rotor uzunluğu ve 300 mm rotor çapına sahiptir. 800-1500 kg/saat işleme kapasitesi ile plastik, metal, lastik, ahşap, cam ve evsel atıkların güvenli şekilde parçalanmasını sağlar. Düşük hız - yüksek tork prensibi ile çalışan CS-60, zorlu malzemeleri bile kolayca işler ve enerji verimliliği sunar.',
        paragraph2: 'Gelişmiş PLC kontrol sistemi, otomatik ters çalışma fonksiyonu ve acil durum güvenlik sistemleri ile donatılmış CS-60, kesintisiz üretim garantisi verir. 64 adet özel alaşımlı bıçak ve değiştirilebilel elek sistemi (40-120 mm) ile farklı çıkış boyutları elde edebilirsiniz. Senkronize çalışan çift şaft yapısı, malzeme sıkışmalarını önler ve dengeli kesim işlemi sağlar.',
        paragraph3: 'MT Makina CS-60 çift şaftlı parçalama makinesi, plastik geri dönüşüm tesisleri, metal hurda işleme merkezleri, lastik parçalama üniteleri, ahşap atık işleme ve evsel atık yönetim merkezleri için idealdir. Kompakt tasarımı sayesinde orta ölçekli tesislere kolayca entegre edilir. CE sertifikalı güvenlik standartları ve 2 yıl garanti ile desteklenir.'
      },
      en: {
        intro: 'CS-60 dual shaft shredder is a compact and powerful solution offering high efficiency in industrial waste management.',
        paragraph1: 'CS-60 model features 2x15 kW dual motor configuration with 800 mm rotor length and 300 mm rotor diameter. With 800-1500 kg/hour processing capacity, it ensures safe shredding of plastic, metal, tire, wood, glass and household waste.',
        paragraph2: 'Equipped with advanced PLC control system, automatic reverse function and emergency safety systems, CS-60 guarantees uninterrupted production. Different output sizes can be obtained with 64 special alloy blades.',
        paragraph3: 'MT Makina CS-60 dual shaft shredder is ideal for plastic recycling facilities, metal scrap processing centers, tire shredding units, wood waste processing and household waste management centers.'
      },
      ru: {
        intro: 'Двухвальный измельчитель CS-60 - компактное и мощное решение, обеспечивающее высокую эффективность в управлении промышленными отходами.',
        paragraph1: 'Модель CS-60 оснащена конфигурацией двойного двигателя 2x15 кВт с длиной ротора 800 мм и диаметром ротора 300 мм. С производительностью обработки 800-1500 кг/час.',
        paragraph2: 'Оснащенный усовершенствованной системой управления ПЛК, функцией автоматического реверса и системами аварийной безопасности, CS-60 гарантирует бесп��ребойное производство.',
        paragraph3: 'Двухвальный измельчитель MT Makina CS-60 идеально подходит для предприя��ий по переработке пластика, центров обработки металлолома.'
      },
      ar: {
        intro: 'آلة التمزيق ثنائية العمود CS-60 هي حل مدمج وقوي يوفر كفاءة عالية في إدارة النفايات الصناعية.',
        paragraph1: 'يتميز طراز CS-60 بتكوين محرك مزدوج 2×15 كيلووات مع طول دوار 800 مم وقطر دوار 300 مم. بسعة معالجة 800-1500 كجم/ساعة.',
        paragraph2: 'مجهز بنظام تحكم PLC متقدم ووظيفة عكسية تلقائية وأنظمة السلامة في حالات الطوارئ، يضمن CS-60 إنتاجًا متواصلاً.',
        paragraph3: 'آلة التمزيق ثنائية العمود MT Makina CS-60 مثالية لمرافق إعادة تدوير البلاستيك ومراكز معالجة الخردة المعدنية.'
      }
    },
    'CS-80': {
      tr: {
        intro: 'CS-80 çift şaftlı parçalama makinesi, yüksek hacimli atık işleme gerektiren tesisler için güçlü ve dayanıklı bir çözümdür.',
        paragraph1: 'CS-80 model, 2x22 kW yüksek performanslı çift motor sistemi ile 1000 mm rotor uzunluğu ve 350 mm rotor çapı sunarak ağır hizmet tipi uygulamalar için tasarlanmıştır. 1500-2500 kg/saat işleme kapasitesi ile endüstriyel plastik konteynerler, kalın duvarlı borular, büyük ahşap paletler, otomotiv parçaları ve kompozit malzemelerin parçalanmasında üstün performans gösterir.',
        paragraph2: 'Tam otomatik PLC kontrol paneli, gerçek zamanlı yük izleme, otomatik aşırı yük koruması ve çift yönlü ters çalışma fonksiyonu ile donatılmış CS-80, 7/24 kesintisiz çalışma kapasitesine sahiptir. 80 adet premium kalite bıçak ve çift elek sistemi (50-150 mm) ile hem kaba hem de orta boy parçalama yapılabilir.',
        paragraph3: 'CS-80, büyük plastik geri dönüşüm tesisleri, otomotiv hurda işleme merkezleri, ahşap palet parçalama üniteleri için optimize edilmiştir. Modüler yapısı sayesinde konveyör besleyici ile entegre edilebilir.'
      },
      en: {
        intro: 'CS-80 dual shaft shredder is a powerful and durable solution for facilities requiring high-volume waste processing.',
        paragraph1: 'CS-80 model is designed for heavy-duty applications with 2x22 kW high-performance dual motor system. With 1500-2500 kg/hour processing capacity, it shows superior performance.',
        paragraph2: 'Equipped with fully automatic PLC control panel, real-time load monitoring, automatic overload protection, CS-80 has 7/24 uninterrupted operation capacity.',
        paragraph3: 'CS-80 is optimized for large plastic recycling facilities, automotive scrap processing centers, wooden pallet shredding units.'
      },
      ru: {
        intro: 'Двухвальный измельчитель CS-80 - мощное и долговечное решение для объектов, требующих обработки больших объемов отходов.',
        paragraph1: 'Модель CS-80 разработана для тяжелых условий эксплуатации с высокопроизводительной системой двойного двигателя 2x22 кВт.',
        paragraph2: 'Оснащенный полностью автоматической панелью управления ПЛК, мониторингом нагрузки в реальном времени, CS-80 имеет возможность непрерывной работы 7/24.',
        paragraph3: 'CS-80 оптимизирован для крупных предприятий по переработке пластика, центров обработки автомобильного лома.'
      },
      ar: {
        intro: 'آلة التمزيق ثنائية العمود CS-80 هي حل قوي ومتين للمرافق التي تتطلب معالجة نفايات كبيرة الحجم.',
        paragraph1: 'تم تصميم طراز CS-80 للتطبيقات الثقيلة بنظام محرك مزدوج عالي الأداء 2×22 كيلووات.',
        paragraph2: 'مجهز بلوحة تحكم PLC أوتوماتيكية بالكامل ومراقبة الحمل في الوقت الفعلي، يتمتع CS-80 بقدرة تشغيل متواصل 7/24.',
        paragraph3: 'تم تحسين CS-80 لمرافق إعادة تدوير البلاستيك الكبيرة ومراكز معالجة خردة السيارات.'
      }
    },
    'CS-100': {
      tr: {
        intro: 'CS-100 çift şaftlı parçalama makinesi, yüksek kapasiteli endüstriyel uygulamalar için güçlü tork ve üstün performans sunar.',
        paragraph1: 'CS-100 model, 2x30 kW endüstriyel sınıf çift motor yapısı ile 1200 mm geniş rotor uzunluğu ve 400 mm rotor çapına sahiptir. 2500-4000 kg/saat yüksek işleme kapasitesi ile büyük hacimli konteynerler, IBC tanklar, endüstriyel plastik kasalar ve evsel eşya atıklarının parçalanmasında maksimum verimlilik sağlar.',
        paragraph2: 'Siemens PLC tabanlı gelişmiş otomasyon sistemi, dokunmatik ekran operatör paneli, uzaktan izleme altyapısı ile donatılmış CS-100, endüstri 4.0 standartlarına uygundur. 96 adet özel sertleştirilmiş bıçak ve çift kademeli elek sistemi (60-180 mm) ile homojen parçalama garantisi verir.',
        paragraph3: 'CS-100, büyük kapasiteli geri dönüşüm kompleksleri, belediye katı atık yönetim tesisleri, otomotiv geri kazanım merkezleri için tasarlanmıştır. Tam otomatik besleme sistemi ile entegre edilebilir.'
      },
      en: {
        intro: 'CS-100 dual shaft shredder offers powerful torque and superior performance for high-capacity industrial applications.',
        paragraph1: 'CS-100 model features industrial-grade dual motor structure with 2x30 kW. With 2500-4000 kg/hour high processing capacity, it provides maximum efficiency.',
        paragraph2: 'Equipped with Siemens PLC-based advanced automation system, touchscreen operator panel, CS-100 complies with Industry 4.0 standards.',
        paragraph3: 'CS-100 is designed for large capacity recycling complexes, municipal solid waste management facilities, automotive recovery centers.'
      },
      ru: {
        intro: 'Двухвальный измельчитель CS-100 предлагает мощный крутящий момент и превосходную производительность.',
        paragraph1: 'Модель CS-100 оснащена двухмоторной конструкцией промышленного класса 2x30 кВт.',
        paragraph2: 'Оснащенный передовой системой автоматизации на базе ПЛК Siemens, CS-100 соответствует стандартам Индустрии 4.0.',
        paragraph3: 'CS-100 разработан для крупных комплексов переработки, муниципальных объектов управления твердыми отходами.'
      },
      ar: {
        intro: 'تقدم آلة التمزيق ثنائية العمود CS-100 عزم دوران قويًا وأداءً متفوقًا.',
        paragraph1: 'يتميز طراز CS-100 بهيكل محرك مزدوج من الدرجة الصناعية 2×30 كيلووات.',
        paragraph2: 'مجهز بنظام أتمتة متقدم قائم على PLC من Siemens، يتوافق CS-100 مع معايير الصناعة 4.0.',
        paragraph3: 'تم تصميم CS-100 لمجمعات إعادة التدوير كبيرة السعة ومرافق إدارة النفايات الصلبة البلدية.'
      }
    },
    'CS-120': {
      tr: {
        intro: 'CS-120 çift şaftlı parçalama makinesi, ağır sanayi atık yönetiminde maksimum kapasite ve performans sunan profesyonel bir sistemdir.',
        paragraph1: 'CS-120 model, 2x37 kW yüksek tork çift motor yapısı ile 1400 mm ultra geniş rotor uzunluğu ve 450 mm rotor çapı sunarak en zorlu uygulamalar için tasarlanmıştır. 4000-6000 kg/saat işleme kapasitesi ile lastik balyaları, büyük plastik tanklar ve ağır kompozit malzemelerin parçalanmasında olağanüstü performans gösterir.',
        paragraph2: 'Endüstriyel sınıf Siemens S7 PLC otomasyon, SCADA entegrasyonu, gerçek zamanlı veri analizi ve predictive maintenance modülleri ile donatılmıştır. 112 adet özel alaşımlı bıçak ve üç kademeli elek sistemi (80-200 mm) ile maksimum tork sağlar.',
        paragraph3: 'CS-120, mega ölçekli geri dönüşüm kompleksleri, belediye entegre katı atık tesisleri, lastik geri dönüşüm fabrikaları için optimize edilmiştir.'
      },
      en: {
        intro: 'CS-120 dual shaft shredder is a professional system offering maximum capacity in heavy industrial waste management.',
        paragraph1: 'CS-120 model is designed for the toughest applications with 2x37 kW high-torque dual motor. With 4000-6000 kg/hour capacity.',
        paragraph2: 'Equipped with industrial-grade Siemens S7 PLC automation, SCADA integration, real-time data analysis.',
        paragraph3: 'CS-120 is optimized for mega-scale recycling complexes, municipal integrated solid waste facilities.'
      },
      ru: {
        intro: 'Двухвальный измельчитель CS-120 - профессиональная система, обеспечивающая максимальную производительность.',
        paragraph1: 'Модель CS-120 разработана для самых сложных применений с высокомоментной конструкцией 2x37 кВт.',
        paragraph2: 'Оснащенный промышленной автоматизацией Siemens S7 PLC, интеграцией SCADA.',
        paragraph3: 'CS-120 оптимизирован для мегамасштабных комплексов переработки.'
      },
      ar: {
        intro: 'آلة التمزيق ثنائية العمود CS-120 هي نظام احترافي يوفر أقصى سعة.',
        paragraph1: 'تم تصميم طراز CS-120 لأصعب التطبيقات بهيكل محرك مزدوج عالي عزم الدوران 2×37 كيلووات.',
        paragraph2: 'مجهز بأتمتة Siemens S7 PLC من الدرجة الصناعية وتكامل SCADA.',
        paragraph3: 'تم تحسين CS-120 لمجمعات إعادة التدوير على نطاق ضخم.'
      }
    },
    'CS-150': {
      tr: {
        intro: 'CS-150 çift şaftlı parçalama makinesi, mega kapasiteli geri dönüşüm kompleksleri için tasarlanmış ultra güçlü sistemdir.',
        paragraph1: 'CS-150 model, 2x45 kW ultra yüksek tork ile 1600 mm dev rotor uzunluğu sunar. 6000-8000 kg/saat kapasite ile otobüs-kamyon lastikleri ve büyük endüstriyel konteynerler parçalar.',
        paragraph2: 'En ileri Siemens S7-1500 PLC otomasyon, yapay zeka destekli yük optimizasyonu, bulut tabanlı veri toplama ile donatılmış.',
        paragraph3: 'CS-150, mega ölçekli entegre geri dönüşüm tesisleri, lastik piroliz öncesi hazırlık tesisleri için özel olarak tasarlanmıştır.'
      },
      en: {
        intro: 'CS-150 dual shaft shredder is an ultra-powerful industrial system designed for mega-capacity recycling complexes.',
        paragraph1: 'CS-150 model features 2x45 kW ultra-high torque with 1600 mm giant rotor length. 6000-8000 kg/hour capacity.',
        paragraph2: 'Equipped with most advanced Siemens S7-1500 PLC automation, AI-assisted load optimization.',
        paragraph3: 'CS-150 is specifically designed for mega-scale integrated recycling facilities.'
      },
      ru: {
        intro: 'Двухвальный измельчитель CS-150 - сверхмощная промышленная система.',
        paragraph1: 'Модель CS-150 оснащена сверхвысоким крутящим моментом 2x45 кВт. Производительность 6000-8000 кг/час.',
        paragraph2: 'Оснащенный самой передовой автоматизацией Siemens S7-1500 PLC.',
        paragraph3: 'CS-150 специально разработан для интегрированных предприятий переработки мегамасштаба.'
      },
      ar: {
        intro: 'آلة التمزيق ثنائية العمود CS-150 هي نظام صناعي فائق القوة.',
        paragraph1: 'يتميز طراز CS-150 بعزم دوران فائق 2×45 كيلووات. سعة 6000-8000 كجم/ساعة.',
        paragraph2: 'مجهز بأكثر أنظمة الأتمتة تقدمًا Siemens S7-1500 PLC.',
        paragraph3: 'تم تصميم CS-150 خصيصًا لمرافق إعادة التدوير المتكاملة على نطاق ضخم.'
      }
    },
    'CS-180': {
      tr: {
        intro: 'CS-180 çift şaftlı parçalama makinesi, uluslararası standartlarda mega projelere yönelik ultra kapasiteli sistemdir.',
        paragraph1: 'CS-180 model, 2x55 kW ekstrem tork ile 1800 mm ultra geniş rotor sunar. 8000-12000 kg/saat muazzam kapasite ile kamyon şaseleri ve dev plastik tankları parçalar.',
        paragraph2: 'Tam entegre Siemens TIA Portal otomasyon, makine öğrenimi algoritmaları, gerçek zamanlı big data analizi ile donatılmış.',
        paragraph3: 'CS-180, uluslararası entegre geri dönüşüm kompleksleri, megakent atık yönetim merkezleri için özel mühendislik çözümü olarak tasarlanmıştır.'
      },
      en: {
        intro: 'CS-180 dual shaft shredder is an ultra-capacity industrial powerhouse for mega projects.',
        paragraph1: 'CS-180 model features 2x55 kW extreme torque with 1800 mm ultra-wide rotor. 8000-12000 kg/hour capacity.',
        paragraph2: 'Equipped with fully integrated Siemens TIA Portal automation, machine learning algorithms.',
        paragraph3: 'CS-180 is designed as special engineering solution for international integrated recycling complexes.'
      },
      ru: {
        intro: 'Двухвальный измельчитель CS-180 - ультрапроизводительная промышленная электростанция.',
        paragraph1: 'Модель CS-180 оснащена экстремальным крутящим моментом 2x55 кВт. Производительность 8000-12000 кг/час.',
        paragraph2: 'Оснащенный полностью интегрированной автоматизацией Siemens TIA Portal.',
        paragraph3: 'CS-180 разработан как специальное инженерное решение для международных комплексов переработки.'
      },
      ar: {
        intro: 'آلة التمزيق ثنائية العمود CS-180 هي محطة طاقة صناعية فائقة السعة.',
        paragraph1: 'يتميز طراز CS-180 بعزم دوران قصوى 2×55 كيلووات. سعة 8000-12000 كجم/ساعة.',
        paragraph2: 'مجهز بأتمتة متكاملة بالكامل Siemens TIA Portal.',
        paragraph3: 'تم تصميم CS-180 كحل هندسي خاص لمجمعات إعادة التدوير المتكاملة الدولية.'
      }
    },
    'CS-200': {
      tr: {
        intro: 'CS-200 çift şaftlı parçalama makinesi, MT Makina\'nın en büyük modeli olup dünya standartlarında mega kapasiteli mühendislik harikasıdır.',
        paragraph1: 'CS-200 model, 2x75 kW maksimum tork ile 2000 mm dev rotor sunar. 12000-18000 kg/saat olağanüstü kapasite ile saatte 18 tona kadar atık işler. Tren vagonları, gemi parçaları ve mega ahşap yapılar parçalar.',
        paragraph2: 'En ileri Siemens S7-1500 Failsafe PLC, derin öğrenme AI, digital twin simülasyonu, IoT sensör ağı ve cyber security ile donatılmış. 160 ultra premium bıçak ve altı kademeli akıllı elek sistemi (150-350 mm) sunar.',
        paragraph3: 'CS-200, global entegre geri dönüşüm kompleksleri, metropol atık yönetim mega projeleri için turnkey çözüm olarak tasarlanmıştır. 5 yıl platinum garanti+7/24 global teknik destek.'
      },
      en: {
        intro: 'CS-200 dual shaft shredder is MT Makina\'s largest model, an engineering marvel for mega-capacity projects in world standards.',
        paragraph1: 'CS-200 model features 2x75 kW maximum torque with 2000 mm giant rotor. 12000-18000 kg/hour capacity processing up to 18 tons per hour.',
        paragraph2: 'Equipped with most advanced Siemens S7-1500 Failsafe PLC, deep learning AI, digital twin simulation.',
        paragraph3: 'CS-200 is designed as turnkey solution for global recycling complexes. Supported by 5-year platinum warranty+24/7 global support.'
      },
      ru: {
        intro: 'Двухвальный измельчитель CS-200 - самая большая модель MT Makina, инженерное чудо мирового стандарта.',
        paragraph1: 'Модель CS-200 оснащена максимальным крутящим моментом 2x75 кВт. Производительность 12000-18000 кг/час.',
        paragraph2: 'Оснащенный самой передовой автоматизацией Siemens S7-1500 Failsafe PLC, глубоким обучением ИИ.',
        paragraph3: 'CS-200 разработан как комплексное решение для глобальных комплексов переработки.'
      },
      ar: {
        intro: 'آلة التمزيق ثنائية العمود CS-200 هي أكبر طراز من MT Makina، معجزة هندسية بمعايير عالمية.',
        paragraph1: 'يتميز طراز CS-200 بعزم دوران أقصى 2×75 كيلووات. سعة 12000-18000 كجم/ساعة.',
        paragraph2: 'مجهز بأكثر الأنظمة تقدمًا Siemens S7-1500 Failsafe PLC، الذكاء الاصطناعي للتعلم العميق.',
        paragraph3: 'تم تصميم CS-200 كحل تسليم مفتاح لمجمعات إعادة التدوير العالمية.'
      }
    }
  },
  'quad-saft': {
    'DS-80': {
      tr: {
        intro: 'DS-80 dört şaftlı parçalama makinesi, ince parçalama ve homojen çıkış boyutu gerektiren uygulamalar için profesyonel bir çözümdür.',
        paragraph1: 'DS-80 model, 4x7.5 kW (toplam 30 kW) dört motor sistemi ile 800 mm rotor uzunluğu ve dört kademeli kesim mekanizmasına sahiptir. 600-1000 kg/saat işleme kapasitesi ile plastik filmler, PET şişeler, karton-kağıt, tekstil atıkları ve elektronik atıkların ince parçalanmasında üstün performans gösterir.',
        paragraph2: 'Gelişmiş PLC kontrol sistemi, dört şaft senkronizasyonu, otomatik aşırı yük algılama ve ters çalışma fonksiyonu ile donatılmış DS-80, kesintisiz ve güvenli çalışma garantisi verir. 48 adet özel kesim bıçağı ve ayarlanabilir elek sistemi (10-40 mm) ile çıkış boyutu hassas kontrol edilebilir.',
        paragraph3: 'MT Makina DS-80, plastik geri dönüşüm tesisleri, e-atık ön işleme üniteleri, tekstil geri dönüşümü için idealdir. Kompakt tasarımı ile orta ölçekli tesislere kolayca entegre edilir. CE sertifikası ve 2 yıl garanti ile desteklenir.'
      },
      en: {
        intro: 'DS-80 four shaft shredder is a professional solution for applications requiring fine shredding and homogeneous output size.',
        paragraph1: 'DS-80 model features 4x7.5 kW (total 30 kW) four motor system with 800 mm rotor length. With 600-1000 kg/hour processing capacity, it shows superior performance.',
        paragraph2: 'Equipped with advanced PLC control system, four shaft synchronization, automatic overload detection, DS-80 guarantees uninterrupted operation.',
        paragraph3: 'MT Makina DS-80 is ideal for plastic recycling facilities, e-waste pre-processing units, textile recycling.'
      },
      ru: {
        intro: 'Четырехвальный измельчитель DS-80 - профессиональное решение для тонкого измельчения.',
        paragraph1: 'Модель DS-80 оснащена системой четырех двигателей 4x7,5 кВт (всего 30 кВт) с длиной ротора 800 мм.',
        paragraph2: 'Оснащенный системой управления ПЛК, синхронизацией четырех валов, DS-80 гарантирует бесперебойную работу.',
        paragraph3: 'MT Makina DS-80 идеально подходит для предприятий по переработке пластика.'
      },
      ar: {
        intro: 'آلة التمزيق رباعية العمود DS-80 حل احترافي للتمزيق الدقيق.',
        paragraph1: 'يتميز طراز DS-80 بنظام أربعة محركات 4×7.5 كيلووات (إجمالي 30 كيلووات).',
        paragraph2: 'مجهز بنظام تحكم PLC ومزامنة أربعة أعمدة، يضمن DS-80 تشغيلاً متواصلاً.',
        paragraph3: 'MT Makina DS-80 مثالي لمرافق إعادة تدوير البلاستيك.'
      }
    },
    'DS-100': {
      tr: {
        intro: 'DS-100 dört şaftlı parçalama makinesi, orta-yüksek kapasiteli tesisler için yüksek verimlilik sunan güçlü bir sistemdir.',
        paragraph1: 'DS-100 model, 4x11 kW (toplam 44 kW) güçlü dört motor yapısı ile 1000 mm geniş rotor uzunluğuna sahiptir. 1000-1800 kg/saat işleme kapasitesi ile endüstriyel plastik atıklar, elektronik kartlar, kablo atıkları ve kompozit malzemelerin homojen parçalanmasında mükemmel performans gösterir.',
        paragraph2: 'Siemens PLC tabanlı tam otomatik kontrol sistemi, dört şaft tam senkronizasyon ve gerçek zamanlı motor yük izleme ile donatılmış DS-100, 7/24 kesintisiz çalışma kapasitesine sahiptir. 64 adet premium kalite bıçak ve çift kademeli elek sistemi (8-35 mm) ile hassas parça kontrolü sağlar.',
        paragraph3: 'DS-100, orta-büyük plastik geri dönüşüm tesisleri, elektronik atık işleme merkezleri için optimize edilmiştir. Konveyör besleyici ile entegre edilebilir. CE standartları ve 2 yıl garanti ile desteklenir.'
      },
      en: {
        intro: 'DS-100 four shaft shredder is a powerful system offering high efficiency for medium-high capacity facilities.',
        paragraph1: 'DS-100 model features 4x11 kW (total 44 kW) powerful four motor structure with 1000 mm wide rotor. With 1000-1800 kg/hour processing capacity.',
        paragraph2: 'Equipped with Siemens PLC-based fully automatic control system, four shaft full synchronization, DS-100 has 7/24 operation capacity.',
        paragraph3: 'DS-100 is optimized for medium-large plastic recycling facilities, electronic waste processing centers.'
      },
      ru: {
        intro: 'Четырехвальный измельчитель DS-100 - мощная система для предприятий средне-высокой производительности.',
        paragraph1: 'Модель DS-100 оснащена четырехмоторной конструкцией 4x11 кВт (всего 44 кВт) с длиной ротора 1000 мм.',
        paragraph2: 'Оснащенный системой управления Siemens PLC, полной синхронизацией четырех валов, DS-100 работает 7/24.',
        paragraph3: 'DS-100 оптимизирован для средне-крупных предприятий по переработке пластика.'
      },
      ar: {
        intro: 'آلة التمزيق رباعية العمود DS-100 نظام قوي لمرافق السعة المتوسطة-العالية.',
        paragraph1: 'يتميز طراز DS-100 بهيكل أربعة محركات 4×11 كيلووات (إجمالي 44 كيلووات).',
        paragraph2: 'مجهز بنظام تحكم Siemens PLC ومزامنة كاملة لأربعة أعمدة، يعمل DS-100 بقدرة 7/24.',
        paragraph3: 'تم تحسين DS-100 لمرافق إعادة التدوير متوسطة-كبيرة الحجم.'
      }
    },
    'DS-150': {
      tr: {
        intro: 'DS-150 dört şaftlı parçalama makinesi, yüksek kapasiteli tesisler için ultra hassas parçalama performansı sunan profesyonel bir sistemdir.',
        paragraph1: 'DS-150 model, 4x18.5 kW (toplam 74 kW) yüksek güç dört motor konfigürasyonu ile 1500 mm ultra geniş rotor uzunluğuna sahiptir. 2000-3500 kg/saat yüksek işleme kapasitesi ile endüstriyel plastik konteynerler, büyük elektronik cihazlar ve kompozit malzemelerin ultra ince parçalanmasında lider performans gösterir.',
        paragraph2: 'Endüstriyel sınıf Siemens S7 PLC otomasyon, dört şaft intelligent synchronization ve predictive maintenance modülleri ile donatılmış DS-150, Endüstri 4.0 standartlarına uyumludur. 80 adet ultra dayanıklı bıçak ve üç kademeli elek sistemi (5-30 mm) ile maksimum verimlilik sağlar.',
        paragraph3: 'DS-150, büyük kapasiteli plastik geri dönüşüm kompleksleri, elektronik atık fabrikaları için tasarlanmıştır. AI destekli malzeme tanıma ile entegre edilebilir. ISO 9001 sertifikası ve 3 yıl garanti ile desteklenir.'
      },
      en: {
        intro: 'DS-150 four shaft shredder is a professional system offering ultra-precise shredding for high-capacity facilities.',
        paragraph1: 'DS-150 model features 4x18.5 kW (total 74 kW) high power four motor configuration with 1500 mm ultra-wide rotor.',
        paragraph2: 'Equipped with industrial-grade Siemens S7 PLC automation, four shaft intelligent synchronization, DS-150 complies with Industry 4.0.',
        paragraph3: 'DS-150 is designed for large capacity plastic recycling complexes, electronic waste factories.'
      },
      ru: {
        intro: 'Четырехвальный измельчитель DS-150 - профессиональная система для высокопроизводительных объектов.',
        paragraph1: 'Модель DS-150 оснащена четырехмоторной конфигурацией 4x18,5 кВт (всего 74 кВт) с длиной ротора 1500 мм.',
        paragraph2: 'Оснащенный промышленной автоматизацией Siemens S7 PLC, DS-150 соответствует стандартам Индустрии 4.0.',
        paragraph3: 'DS-150 разработан для крупных комплексов переработки пластика.'
      },
      ar: {
        intro: 'آلة التمزيق رباعية العمود DS-150 نظام احترافي للمرافق عالية السعة.',
        paragraph1: 'يتميز طراز DS-150 بتكوين أربعة محركات 4×18.5 كيلووات (إجمالي 74 كيلووات).',
        paragraph2: 'مجهز بأتمتة Siemens S7 PLC من الدرجة الصناعية، يتوافق DS-150 مع معايير الصناعة 4.0.',
        paragraph3: 'تم تصميم DS-150 لمجمعات إعادة التدوير كبيرة السعة.'
      }
    },
    'DS-200': {
      tr: {
        intro: 'DS-200 dört şaftlı parçalama makinesi, MT Makina\'nın en gelişmiş modeli olup mega kapasiteli projeler için ultra hassas teknoloji sunan mühendislik şaheseridir.',
        paragraph1: 'DS-200 model, 4x30 kW (toplam 120 kW) maksimum güç dört motor sistemi ile 2000 mm dev rotor uzunluğuna sahiptir. 3500-6000 kg/saat olağanüstü işleme kapasitesi ile büyük endüstriyel ekipmanlar, dev elektronik cihazlar ve özel kompozit malzemelerin ultra hassas parçalanmasında dünya standardında performans gösterir.',
        paragraph2: 'En ileri Siemens S7-1500 PLC otomasyon, yapay zeka destekli dört şaft senkronizasyonu, digital twin simülasyonu, IoT sensör ağı ile donatılmış DS-200, Endüstri 5.0 standartlarının öncüsüdür. 96 adet ultra premium kalite bıçak ve dört kademeli akıllı elek sistemi (3-25 mm) ile maksimum hassasiyet garantisi verir.',
        paragraph3: 'DS-200, global entegre geri dönüşüm kompleksleri, mega elektronik atık tesisleri için turnkey çözüm olarak tasarlanmıştır. Tam otonom AI destekli üretim hattı, robotik sistemler ve ERP-MES-SCADA entegrasyonu mümkündür. 5 yıl platinum garanti+7/24 global teknik destek ile desteklenir.'
      },
      en: {
        intro: 'DS-200 four shaft shredder is MT Makina\'s most advanced model, an engineering masterpiece for mega-capacity projects.',
        paragraph1: 'DS-200 model features 4x30 kW (total 120 kW) maximum power four motor system with 2000 mm giant rotor.',
        paragraph2: 'Equipped with most advanced Siemens S7-1500 PLC automation, AI-assisted four shaft synchronization, DS-200 pioneers Industry 5.0.',
        paragraph3: 'DS-200 is designed as turnkey solution for global recycling complexes. Supported by 5-year platinum warranty+24/7 support.'
      },
      ru: {
        intro: 'Четырехвальный измельчитель DS-200 - самая передовая модел�� MT Makina, инженерный шедевр.',
        paragraph1: 'Модель DS-200 оснащена системой четырех двигателей 4x30 кВт (всего 120 кВт) с длиной ротора 2000 мм.',
        paragraph2: 'Оснащенный автоматизацией Siemens S7-1500 PLC с помощью ИИ, DS-200 является пионером Индустрии 5.0.',
        paragraph3: 'DS-200 разработан как комплексное решение для глобальных комплексов переработки.'
      },
      ar: {
        intro: 'آلة التمزيق رباعية العمود DS-200 الطراز الأكثر تقدمًا من MT Makina، تحفة هندسية.',
        paragraph1: 'يتميز طراز DS-200 بنظام أربعة محركات 4×30 كيلووات (إجمالي 120 كيلووات).',
        paragraph2: 'مجهز بأتمتة Siemens S7-1500 PLC بمساعدة الذكاء الاصطناعي، يرائد DS-200 الصناعة 5.0.',
        paragraph3: 'تم تصميم DS-200 كحل تسليم مفتاح لمجمعات إعادة التدوير العالمية.'
      }
    }
  },
  'metal': {
    'RDM-100': {
      tr: {
        intro: 'RDM-100 Redmonster metal parçalama makinesi, küçük-orta ölçekli metal hurda işleme tesisleri için kompakt ve güçlü bir çözümdür.',
        paragraph1: 'RDM-100 model, 75 kW yüksek tork motor gücü ile 1000 mm rotor uzunluğu ve özel tasarım metal kesim bıçaklarına sahiptir. 1500-2500 kg/saat işleme kapasitesi ile alüminyum profiller, bakır kablolar, demir çubuklar, ince metal levhalar, bisiklet-motosiklet parçaları ve hafif metal atıkların güvenli şekilde parçalanmasını sağlar. Düşük hız-ultra yüksek tork prensibi ile zorlu metalleri bile kolayca keser.',
        paragraph2: 'PLC kontrollü otomasyon sistemi, otomatik aşırı yük koruması, acil durum durdurma ve ters çalışma fonksiyonu ile donatılmış RDM-100, güvenli ve kesintisiz üretim garantisi verir. 24 adet özel alaşımlı kesici bıçak ve güçlendirilmiş dişli kutusu ile uzun ömür ve minimum bakım gerektirir. Manyetik seperatör ile entegre edilerek farklı metal türleri ayırabilir.',
        paragraph3: 'MT Makina RDM-100, küçük metal geri dönüşüm atölyeleri, hurda toplama merkezleri, alüminyum işleme tesisleri ve yerel metal atık yönetim merkezleri için idealdir. Kompakt boyutlara rağmen endüstriyel dayanıklılık sunar. CE sertifikalı güvenlik standartları ve 2 yıl garanti ile desteklenir.'
      },
      en: {
        intro: 'RDM-100 Redmonster metal shredder is a compact and powerful solution for small-medium scale metal scrap processing facilities.',
        paragraph1: 'RDM-100 model features 75 kW high torque motor power with 1000 mm rotor length and special design metal cutting blades. With 1500-2500 kg/hour processing capacity, it safely shreds aluminum profiles, copper cables, iron bars, thin metal sheets, bicycle-motorcycle parts.',
        paragraph2: 'Equipped with PLC controlled automation system, automatic overload protection, emergency stop and reverse function, RDM-100 guarantees safe and uninterrupted production. With 24 special alloy cutting blades and reinforced gearbox.',
        paragraph3: 'MT Makina RDM-100 is ideal for small metal recycling workshops, scrap collection centers, aluminum processing facilities.'
      },
      ru: {
        intro: 'Измельчитель металла RDM-100 Redmonster - компактное и мощное решение для малых-средних предприятий по переработке металлолома.',
        paragraph1: 'Модель RDM-100 оснащена мощным двигателем 75 кВт с длиной ротора 1000 мм и специальными ножами для резки металла. Производительность 1500-2500 кг/час.',
        paragraph2: 'Оснащенный системой автоматизации ПЛК, автоматической защитой от перегрузки, RDM-100 гарантирует безопасное производство.',
        paragraph3: 'MT Makina RDM-100 идеально подходит для небольших мастерских по переработке металла, центров сбора металлолома.'
      },
      ar: {
        intro: 'آلة تمزيق المعادن RDM-100 Redmonster حل مدمج وقوي لمرافق معالجة الخردة المعدنية صغيرة-متوسطة الحجم.',
        paragraph1: 'يتميز طراز RDM-100 بقوة محرك عزم دوران عالي 75 كيلووات مع طول دوار 1000 مم. سعة معالجة 1500-2500 كجم/ساعة.',
        paragraph2: 'مجهز بنظام أتمتة PLC وحماية تلقائية من الحمل الزائد، يضمن RDM-100 إنتاجًا آمنًا.',
        paragraph3: 'MT Makina RDM-100 مثالي لورش إعادة تدوير المعادن الصغيرة ومراكز جمع الخردة.'
      }
    },
    'RDM-150': {
      tr: {
        intro: 'RDM-150 Redmonster metal parçalama makinesi, orta-büyük kapasiteli metal geri dönüşüm tesisleri için yüksek performanslı profesyonel bir sistemdir.',
        paragraph1: 'RDM-150 model, 110 kW ultra yüksek tork motor yapısı ile 1500 mm geniş rotor uzunluğu ve takviyeli kesim sistemi sahiptir. 2500-4000 kg/saat işleme kapasitesi ile kalın alüminyum bloklar, endüstriyel çelik profiller, bakır transformatörler, otomotiv motor blokları, kalın metal levhalar ve ağır metal yapıların parçalanmasında üstün performans gösterir. Hidrolik itici sistem ile sürekli besleme garantisi verir.',
        paragraph2: 'Siemens PLC tabanlı gelişmiş otomasyon, gerçek zamanlı tork izleme, otomatik aşırı yük algılama ve çift yönlü ters çalışma fonksiyonu ile donatılmış RDM-150, 7/24 kesintisiz çalışma kapasitesine sahiptir. 32 adet ultra dayanıklı kesici bıçak, güçlendirilmiş rotor şaftı ve endüstriyel dişli kutusu ile maksimum verimlilik sağlar. Manyetik ve eddy current seperatör ile entegre edilerek yüksek saflıkta metal ayırımı yapılabilir.',
        paragraph3: 'RDM-150, orta-büyük metal hurda işleme tesisleri, otomotiv geri dönüşüm merkezleri, endüstriyel metal atık işleme ve belediye metal toplama merkezleri için optimize edilmiştir. Modüler yapısı sayesinde konveyör besleyici ve seperatör sistemleri ile kolayca entegre edilir. CE ve ISO sertifikaları ile 2 yıl garanti ile desteklenir.'
      },
      en: {
        intro: 'RDM-150 Redmonster metal shredder is a high-performance professional system for medium-large capacity metal recycling facilities.',
        paragraph1: 'RDM-150 model features 110 kW ultra-high torque motor structure with 1500 mm wide rotor length. With 2500-4000 kg/hour processing capacity, it shows superior performance in shredding thick aluminum blocks, industrial steel profiles, copper transformers.',
        paragraph2: 'Equipped with Siemens PLC-based advanced automation, real-time torque monitoring, automatic overload detection, RDM-150 has 7/24 uninterrupted operation capacity.',
        paragraph3: 'RDM-150 is optimized for medium-large metal scrap processing facilities, automotive recycling centers, industrial metal waste processing.'
      },
      ru: {
        intro: 'Измельчитель металла RDM-150 Redmonster - высокопроизводительная профессиональная система для средне-крупных предприятий.',
        paragraph1: 'Модель RDM-150 оснащена сверхвысоким крутящим моментом 110 кВт с широкой длиной ротора 1500 мм. Производительность 2500-4000 кг/час.',
        paragraph2: 'Оснащенный передовой автоматизацией Siemens PLC, мониторингом крутящего момента в реальном времени, RDM-150 работает 7/24.',
        paragraph3: 'RDM-150 оптимизирован для средне-крупных предприятий по переработке металлолома, центров переработки автомобилей.'
      },
      ar: {
        intro: 'آلة تمزيق المعادن RDM-150 Redmonster نظام احترافي عالي الأداء لمرافق إعادة التدوير متوسطة-كبيرة السعة.',
        paragraph1: 'يتميز طراز RDM-150 بهيكل محرك بعزم دوران فائق 110 كيلووات مع طول دوار واسع 1500 مم. سعة معالجة 2500-4000 كجم/ساعة.',
        paragraph2: 'مجهز بأتمتة Siemens PLC المتقدمة ومراقبة عزم الدوران في الوقت الفعلي، يعمل RDM-150 بقدرة 7/24.',
        paragraph3: 'تم تحسين RDM-150 لمرافق معالجة الخردة المعدنية متوسطة-كبيرة الحجم.'
      }
    },
    'RDM-180': {
      tr: {
        intro: 'RDM-180 Redmonster metal parçalama makinesi, büyük kapasiteli endüstriyel metal geri dönüşüm kompleksleri için maksimum güç ve performans sunan profesyonel bir sistemdir.',
        paragraph1: 'RDM-180 model, 160 kW mega tork motor yapısı ile 1800 mm ultra geniş rotor uzunluğu ve ağır hizmet tipi kesim sistemi sahiptir. 4000-6000 kg/saat yüksek işleme kapasitesi ile otomotiv şaseleri, endüstriyel makine parçaları, çelik I-profiller, büyük dökme alüminyum parçalar, transformatör sacları ve ağır metal atıkların parçalanmasında olağanüstü performans gösterir. Çift hidrolik itici sistem ile kesintisiz besleme sağlar.',
        paragraph2: 'Endüstriyel sınıf Siemens S7 PLC otomasyon, SCADA entegrasyonu, gerçek zamanlı performans analizi, uzaktan izleme ve predictive maintenance modülleri ile donatılmış RDM-180, Endüstri 4.0 standartlarına tam uyumludur. 40 adet ultra premium kesici bıçak, takviyeli çelik rotor ve ağır hizmet dişli kutusu ile maksimum tork ve uzun ömür garantisi verir. Otomatik yağlama sistemi ile minimum bakım gerektirir.',
        paragraph3: 'RDM-180, büyük metal geri dönüşüm kompleksleri, otomotiv parçalama fabrikaları, endüstriyel metal hurda işleme merkezleri ve belediye entegre metal geri kazanım tesisleri için tasarlanmıştır. Tam otomatik konveyör sistemi, manyetik seperatör, eddy current ve optik seperatörler ile entegre edilebilir. ISO 9001, CE sertifikaları ve 3 yıl garanti ile desteklenir.'
      },
      en: {
        intro: 'RDM-180 Redmonster metal shredder is a professional system offering maximum power and performance for large capacity industrial metal recycling complexes.',
        paragraph1: 'RDM-180 model features 160 kW mega torque motor structure with 1800 mm ultra-wide rotor length. With 4000-6000 kg/hour high processing capacity, it shows extraordinary performance in shredding automotive chassis, industrial machine parts, steel I-profiles.',
        paragraph2: 'Equipped with industrial-grade Siemens S7 PLC automation, SCADA integration, real-time performance analysis, RDM-180 is fully compliant with Industry 4.0 standards.',
        paragraph3: 'RDM-180 is designed for large metal recycling complexes, automotive shredding factories, industrial metal scrap processing centers.'
      },
      ru: {
        intro: 'Измельчитель металла RDM-180 Redmonster - профессиональная система, обеспечивающая максимальную мощность для крупных комплексов.',
        paragraph1: 'Модель RDM-180 оснащена мегамощным двигателем 160 кВт со сверхширокой длиной ротора 1800 мм. Производительность 4000-6000 кг/час.',
        paragraph2: 'Оснащенный промышленной автоматизацией Siemens S7 PLC, интеграцией SCADA, RDM-180 полностью соответствует стандартам Индустрии 4.0.',
        paragraph3: 'RDM-180 разработан для крупных комплексов по переработке металла, заводов по измельчению автомобилей.'
      },
      ar: {
        intro: 'آلة تمزيق المعادن RDM-180 Redmonster نظام احترافي يوفر أقصى قوة وأداء لمجمعات إعادة التدوير الصناعية كبيرة السعة.',
        paragraph1: 'يتميز طراز RDM-180 بهيكل محرك بعزم دوران ضخم 160 كيلووات مع طول دوار فائق الاتساع 1800 مم. سعة معالجة 4000-6000 كجم/ساعة.',
        paragraph2: 'مجهز بأتمتة Siemens S7 PLC من الدرجة الصناعية وتكامل SCADA، يتوافق RDM-180 بالكامل مع معايير الصناعة 4.0.',
        paragraph3: 'تم تصميم RDM-180 لمجمعات إعادة تدوير المعادن الكبيرة ومصانع تمزيق السيارات.'
      }
    },
    'RDM-200': {
      tr: {
        intro: 'RDM-200 Redmonster metal parçalama makinesi, MT Makina\'nın en güçlü modeli olup mega kapasiteli projelere yönelik dünya standartlarında bir mühendislik harikasıdır.',
        paragraph1: 'RDM-200 model, 220 kW maksimum tork motor sistemi ile 2000 mm dev rotor uzunluğu ve ultra güçlü kesim teknolojisine sahiptir. 6000-10000 kg/saat olağanüstü işleme kapasitesi ile otobüs-kamyon şaseleri, endüstriyel çelik yapılar, büyük dökümhaneler, transformatör kasaları, gemi parçaları, demiryolu ekipmanları ve mega metal atık projelerinin parçalanmasında dünya lideri performans gösterir. Saatte 10 tona kadar ağır metal işleyebilme gücüne sahiptir.',
        paragraph2: 'En ileri Siemens S7-1500 PLC otomasyon, yapay zeka destekli yük optimizasyonu, gerçek zamanlı digital twin simülasyonu, IoT sensör ağı, bulut tabanlı performans izleme, predictive maintenance AI ve cyber security altyapısı ile donatılmış RDM-200, Endüstri 5.0 ve sürdürülebilir üretim standartlarının öncüsüdür. 48 adet ultra premium kalite kesici bıçak, takviyeli çelik monokok gövde, çift senkronize hidrolik itici, otomatik bıçak pozisyonlama ve endüstriyel soğutma sistemi ile maksimum performans ve sıfır planlı duruş garantisi verir.',
        paragraph3: 'RDM-200, global metal geri dönüşüm kompleksleri, mega otomotiv parçalama tesisleri, uluslararası hurda işleme merkezleri, belediye entegre metal geri kazanım fabrikaları ve özel mühendislik projeleri için turnkey çözüm olarak tasarlanmıştır. Tam otomatik AI destekli üretim hattı, robotik yükleme sistemleri, çok seviyeli seperasyon (manyetik, eddy current, optik, X-Ray), otomatik kalite kontrol ve ERP-MES-SCADA tam entegrasyonu ile endüstri 4.0+ standardında fabrika kurulumu mümkündür. Tüm küresel güvenlik ve kalite standartları (CE, UL, ISO 9001, ISO 14001, ISO 45001) ve 5 yıl platinum garanti+7/24 global teknik destek ile desteklenir.'
      },
      en: {
        intro: 'RDM-200 Redmonster metal shredder is MT Makina\'s most powerful model, a world-standard engineering marvel for mega-capacity projects.',
        paragraph1: 'RDM-200 model features 220 kW maximum torque motor system with 2000 mm giant rotor length. With 6000-10000 kg/hour extraordinary processing capacity, it shows world-leading performance in shredding bus-truck chassis, industrial steel structures, large foundries.',
        paragraph2: 'Equipped with most advanced Siemens S7-1500 PLC automation, AI-assisted load optimization, real-time digital twin simulation, RDM-200 pioneers Industry 5.0 standards.',
        paragraph3: 'RDM-200 is designed as turnkey solution for global metal recycling complexes, mega automotive shredding facilities. Supported by 5-year platinum warranty+24/7 global support.'
      },
      ru: {
        intro: 'Измельчитель металла RDM-200 Redmonster - самая мощная модель MT Makina, инженерное чудо мирового стандарта.',
        paragraph1: 'Модель RDM-200 оснащена системой двигателя максимального крутящего момента 220 кВт с гигантской длиной ротора 2000 мм. Производительность 6000-10000 кг/час.',
        paragraph2: 'Оснащенный самой передовой автоматизацией Siemens S7-1500 PLC, оптимизацией нагрузки с помощью ИИ, RDM-200 является пионером стандартов Индустрии 5.0.',
        paragraph3: 'RDM-200 разработан как комплексное решение для глобальных комплексов по переработке металла.'
      },
      ar: {
        intro: 'آلة تمزيق المعادن RDM-200 Redmonster الطراز الأقوى من MT Makina، معجزة هندسية بمعايير عالمية.',
        paragraph1: 'يتميز طراز RDM-200 بنظام محرك بعزم دوران أقصى 220 كيلووات مع طول دوار عملاق 2000 مم. سعة معالجة 6000-10000 كجم/ساعة.',
        paragraph2: 'مجهز بأكثر أنظمة الأتمتة تقدمًا Siemens S7-1500 PLC وتحسين الحمل بمساعدة الذكاء الاصطناعي، يرائد RDM-200 معايير الصناعة 5.0.',
        paragraph3: 'تم تصميم RDM-200 كحل تسليم مفتاح لمجمعات إعادة تدوير المعادن العالمية.'
      }
    }
  },
  'mobile': {
    'TSM-150': {
      tr: {
        intro: 'TSM-150 tek şaftlı mobil kırıcı, şantiye ve saha uygulamaları için taşınabilir, kompakt ve hızlı kurulum sağlayan profesyonel bir çözümdür.',
        paragraph1: 'TSM-150 model, 300 kW (400 HP) yüksek performanslı motor gücü ile 1500 mm rotor genişliği ve paletli mobil şase üzerine monte edilmiş kompakt tasarıma sahiptir. 15-25 ton/saat işleme kapasitesi ile inşaat atıkları, ahşap atıklar, evsel atıklar, organik atıklar, kağıt-karton ve ambalaj atıklarının sahada parçalanmasını sağlar. Tekerlekli veya paletli şase seçeneği ile zorlu arazilerde bile kolay taşınabilir.',
        paragraph2: 'PLC kontrollü otomasyon sistemi, uzaktan kumanda ile çalıştırma, otomatik aşırı yük koruması ve acil durum durdurma fonksiyonu ile donatılmış TSM-150, şantiye güvenliği standartlarını karşılar. 36 adet yüksek dayanıklı kesici bıçak ve hidrolik itici sistem ile kesintisiz besleme garantisi verir. Manyetik seperatör entegrasyonu ile metal ayrıştırma imkanı sunar.',
        paragraph3: 'MT Makina TSM-150, inşaat şantiyeleri, afet bölgeleri, geçici geri dönüşüm tesisleri, belediye mobil atık işleme birimleri ve olay alanlarında hızlı atık yönetimi için optimize edilmiştir. Hızlı kurulum (2-3 saat), kolay taşıma ve minimal altyapı gereksinimi ile projelere hızlı başlama imkanı sağlar. CE sertifikası ve 2 yıl garanti ile desteklenir.'
      },
      en: {
        intro: 'TSM-150 single shaft mobile crusher is a professional solution providing portable, compact and fast installation for construction site and field applications.',
        paragraph1: 'TSM-150 model features 300 kW (400 HP) high-performance motor power with 1500 mm rotor width and compact design mounted on tracked mobile chassis. With 15-25 ton/hour processing capacity, it shreds construction waste, wood waste, municipal waste, organic waste, paper-cardboard and packaging waste on-site.',
        paragraph2: 'Equipped with PLC controlled automation system, remote control operation, automatic overload protection and emergency stop function, TSM-150 meets construction site safety standards. With 36 high-durability cutting blades and hydraulic pusher system.',
        paragraph3: 'MT Makina TSM-150 is optimized for construction sites, disaster areas, temporary recycling facilities, municipal mobile waste processing units.'
      },
      ru: {
        intro: 'Мобильная дробилка TSM-150 с одним валом - профессиональное портативное компактное решение для строительных площадок.',
        paragraph1: 'Модель TSM-150 оснащена высокопроизводительным двигателем 300 кВт (400 л.с.) с шириной ротора 1500 мм. Производительность 15-25 тонн/час.',
        paragraph2: 'Оснащен системой автоматизации ПЛК, дистанционным управлением, автоматической защитой от перегрузки, TSM-150 соответствует стандартам безопасности.',
        paragraph3: 'MT Makina TSM-150 оптимизирован для строительных площадок, зон бедствия, временных перерабатывающих объектов.'
      },
      ar: {
        intro: 'كسارة TSM-150 المتنقلة أحادية العمود حل احترافي محمول ومدمج للتطبيقات الميدانية.',
        paragraph1: 'يتميز طراز TSM-150 بمحرك عالي الأداء 300 كيلووات (400 حصان) مع عرض دوار 1500 مم. سعة معالجة 15-25 طن/ساعة.',
        paragraph2: 'مجهز بنظام أتمتة PLC وتحكم عن بعد وحماية تلقائية من الحمل الزائد، يلبي TSM-150 معايير سلامة مواقع البناء.',
        paragraph3: 'تم تحسين MT Makina TSM-150 لمواقع البناء ومناطق الكوارث ومرافق إعادة التدوير المؤقتة.'
      }
    },
    'TSM-300': {
      tr: {
        intro: 'TSM-300 tek şaftlı mobil kırıcı, büyük kapasiteli saha projeleri için yüksek performans ve üstün mobilite sunan endüstriyel bir sistemdir.',
        paragraph1: 'TSM-300 model, 450 kW (600 HP) ultra güçlü motor yapısı ile 3000 mm geniş rotor uzunluğu ve takviyeli paletli mobil şase üzerine monte edilmiş gelişmiş tasarıma sahiptir. 30-50 ton/saat yüksek işleme kapasitesi ile endüstriyel inşaat atıkları, büyük ahşap parçalar, karışık belediye atıkları, endüstriyel ambalaj atıkları, organik atıklar ve hacimli atıkların sahada parçalanmasında üstün performans gösterir. Güçlendirilmiş paletli sistem ile engebeli arazilerde güvenli hareket sağlar.',
        paragraph2: 'Siemens PLC tabanlı gelişmiş otomasyon, uzaktan izleme ve kontrol, gerçek zamanlı performans analizi, otomatik aşırı yük algılama ve çift yönlü ters çalışma sistemi ile donatılmış TSM-300, 7/24 saha operasyonları için tasarlanmıştır. 48 adet ultra dayanıklı kesici bıçak, çift hidrolik itici sistem ve büyük kapasiteli hopper ile kesintisiz üretim garantisi verir. Otomatik yağlama sistemi ile minimum bakım gerektirir.',
        paragraph3: 'TSM-300, büyük inşaat projeleri, baraj şantiyeleri, maden sahaları, büyük ölçekli belediye atık yönetimi, afet sonrası enkaz temizliği ve geçici büyük kapasiteli geri dönüşüm merkezleri için optimize edilmiştir. Modüler yapısı sayesinde konveyör besleyici, seperatör sistemleri ve elek üniteleri ile kolayca entegre edilebilir. ISO 9001, CE sertifikaları ve 2 yıl garanti ile desteklenir.'
      },
      en: {
        intro: 'TSM-300 single shaft mobile crusher is an industrial system offering high performance and superior mobility for large capacity field projects.',
        paragraph1: 'TSM-300 model features 450 kW (600 HP) ultra-powerful motor structure with 3000 mm wide rotor length. With 30-50 ton/hour high processing capacity, it shows superior performance in shredding industrial construction waste, large wood pieces, mixed municipal waste.',
        paragraph2: 'Equipped with Siemens PLC-based advanced automation, remote monitoring and control, real-time performance analysis, TSM-300 is designed for 24/7 field operations.',
        paragraph3: 'TSM-300 is optimized for large construction projects, dam sites, mining fields, large-scale municipal waste management, post-disaster debris cleanup.'
      },
      ru: {
        intro: 'Мобильная дробилка TSM-300 с одним валом - промышленная система с высокой производительностью для крупных проектов.',
        paragraph1: 'Модель TSM-300 оснащена сверхмощным двигателем 450 кВт (600 л.с.) с широкой длиной ротора 3000 мм. Производительность 30-50 тонн/час.',
        paragraph2: 'Оснащен передовой автоматизацией Siemens PLC, удаленным мониторингом и управлением, TSM-300 разработан для круглосуточных полевых операций.',
        paragraph3: 'TSM-300 оптимизирован для крупных строительных проектов, плотин, горнодобывающих площадок, крупномасштабного управления отходами.'
      },
      ar: {
        intro: 'كسارة TSM-300 المتنقلة أحادية العمود نظام صناعي يوفر أداءً عاليًا وحركية فائقة للمشاريع الميدانية الكبيرة.',
        paragraph1: 'يتميز طراز TSM-300 بهيكل محرك فائق القوة 450 كيلووات (600 حصان) مع طول دوار واسع 3000 مم. سعة معالجة 30-50 طن/ساعة.',
        paragraph2: 'مجهز بأتمتة Siemens PLC المتقدمة والمراقبة والتحكم عن بعد، تم تصميم TSM-300 للعمليات الميدانية على مدار الساعة طوال أيام الأسبوع.',
        paragraph3: 'تم تحسين TSM-300 لمشاريع البناء الكبيرة ومواقع السدود وحقول التعدين وإدارة النفايات البلدية واسعة النطاق.'
      }
    },
    'CSM-150': {
      tr: {
        intro: 'CSM-150 çift şaftlı mobil kırıcı, orta kapasite saha uygulamaları için ön parçalama ve hassas boyutlandırma sunan çok yönlü bir mobil sistemdir.',
        paragraph1: 'CSM-150 model, 2x132 kW (toplam 264 kW / 350 HP) çift motor yapısı ile 1500 mm rotor uzunluğu ve paletli mobil şase üzerine entegre edilmiş çift şaft teknolojisine sahiptir. 20-35 ton/saat işleme kapasitesi ile endüstriyel plastik atıklar, ahşap paletler, karışık ambalaj atıkları, inşaat atıkları, elektronik atıklar ve kontrollü boyutlandırma gerektiren malzemelerin sahada parçalanmasını sağlar. Çift şaft sistemi ile homojen ve kontrollü parçalama garantisi verir.',
        paragraph2: 'PLC kontrollü senkronize çift şaft çalışma sistemi, uzaktan kumanda, otomatik sıkışma önleme, ters dönüş fonksiyonu ve acil durum durdurma ile donatılmış CSM-150, güvenli ve verimli saha operasyonları sağlar. 2x24 adet (toplam 48) özel alaşımlı kesici bıçak, hidrolik sıkıştırma sistemi ve değiştirilebilir elek üniteleri (20-80 mm) ile istenen çıkış boyutu ayarlanabilir. Toz kontrol sistemi ile çevre dostu çalışma sağlar.',
        paragraph3: 'MT Makina CSM-150, orta ölçekli inşaat şantiyeleri, plastik geri dönüşüm sahaları, ahşap işleme tesisleri, elektronik atık toplama merkezleri ve geçici parçalama ihtiyaçları için optimize edilmiştir. Hızlı kurulum (3-4 saat), kolay konumlama ve minimal operatör gerektiren kullanımı ile projeler arası hızlı geçiş sağlar. CE ve ISO sertifikaları ile 2 yıl garanti ile desteklenir.'
      },
      en: {
        intro: 'CSM-150 dual shaft mobile crusher is a versatile mobile system offering pre-shredding and precise sizing for medium capacity field applications.',
        paragraph1: 'CSM-150 model features 2x132 kW (total 264 kW / 350 HP) dual motor structure with 1500 mm rotor length. With 20-35 ton/hour processing capacity, it shreds industrial plastic waste, wooden pallets, mixed packaging waste, construction waste.',
        paragraph2: 'Equipped with PLC controlled synchronized dual shaft operation system, remote control, automatic jam prevention, CSM-150 provides safe and efficient field operations.',
        paragraph3: 'MT Makina CSM-150 is optimized for medium-scale construction sites, plastic recycling fields, wood processing facilities, electronic waste collection centers.'
      },
      ru: {
        intro: 'Мобильная дробилка CSM-150 с двумя валами - универсальная система для предварительного измельчения средней производительности.',
        paragraph1: 'Модель CSM-150 оснащена двойной моторной структурой 2x132 кВт (всего 264 кВт / 350 л.с.) с длиной ротора 1500 мм. Производительность 20-35 тонн/час.',
        paragraph2: 'Оснащен системой синхронизированной работы двух валов с ПЛК-управлением, дистанционным управлением, автоматическим предотвращением заклинивания.',
        paragraph3: 'MT Makina CSM-150 оптимизирован для средних строительных площадок, полей переработки пластика, деревообрабатывающих объектов.'
      },
      ar: {
        intro: 'كسارة CSM-150 المتنقلة ثنائية العمود نظام متعدد الاستخدامات للتطبيقات الميدانية متوسطة السعة.',
        paragraph1: 'يتميز طراز CSM-150 بهيكل محرك مزدوج 2x132 كيلووات (إجمالي 264 كيلووات / 350 حصان) مع طول دوار 1500 مم. سعة معالجة 20-35 طن/ساعة.',
        paragraph2: 'مجهز بنظام تشغيل عمود مزدوج متزامن بتحكم PLC وتحكم عن بعد ومنع الانسداد التلقائي.',
        paragraph3: 'تم تحسين MT Makina CSM-150 لمواقع البناء متوسطة الحجم وحقول إعادة تدوير البلاستيك.'
      }
    },
    'CSM-200': {
      tr: {
        intro: 'CSM-200 çift şaftlı mobil kırıcı, büyük kapasiteli saha operasyonları için maksimum güç ve hassas kontrol sunan profesyonel mobil bir çözümdür.',
        paragraph1: 'CSM-200 model, 2x200 kW (toplam 400 kW / 530 HP) yüksek güç çift motor sistemi ile 2000 mm ultra geniş rotor uzunluğu ve güçlendirilmiş paletli mobil şase üzerine entegre edilmiş ağır hizmet tipi çift şaft teknolojisine sahiptir. 40-60 ton/saat ultra yüksek işleme kapasitesi ile endüstriyel plastik bloklar, büyük ahşap yapılar, metal-plastik karışım atıklar, büyük inşaat atıkları, endüstriyel ambalaj atıkları ve yüksek hacimli geri dönüşüm projelerinde olağanüstü performans gösterir. Çift hidrolik itici sistem ile sürekli ve kesintisiz besleme garantisi verir.',
        paragraph2: 'Siemens PLC tabanlı ileri düzey otomasyon, SCADA entegrasyonu, uzaktan gerçek zamanlı izleme, yapay zeka destekli sıkışma önleme, otomatik bıçak koruma sistemi ve predictive maintenance modülleri ile donatılmış CSM-200, Endüstri 4.0 standartlarında saha operasyonları için tasarlanmıştır. 2x36 adet (toplam 72) ultra premium kesici bıçak, otomatik bıçak boşluk ayarı, çoklu elek sistemi (10-100 mm değiştirilebilir) ve otomatik yağlama ile maksimum verimlilik sağlar. Gelişmiş toz bastırma ve ses izolasyon sistemleri ile çevre dostu çalışma garantisi verir.',
        paragraph3: 'CSM-200, büyük endüstriyel inşaat projeleri, mega geri dönüşüm sahaları, plastik işleme tesisleri, ahşap atık işleme merkezleri, maden sahaları, afet sonrası büyük ölçekli enkaz yönetimi ve entegre mobil geri dönüşüm hatları için turnkey çözüm olarak tasarlanmıştır. Tam otomatik konveyör entegrasyonu, manyetik seperatör, eddy current ve optik seperatör eklentileri mümkündür. Modüler yapısı ile hızlı kurulum (4-6 saat), kolay taşıma ve minimal altyapı ile maksimum performans sağlar. Tüm uluslararası güvenlik standartları (CE, ISO 9001, ISO 14001) ve 3 yıl garanti+7/24 teknik destek ile desteklenir.'
      },
      en: {
        intro: 'CSM-200 dual shaft mobile crusher is a professional mobile solution offering maximum power and precise control for large capacity field operations.',
        paragraph1: 'CSM-200 model features 2x200 kW (total 400 kW / 530 HP) high-power dual motor system with 2000 mm ultra-wide rotor length. With 40-60 ton/hour ultra-high processing capacity, it shows extraordinary performance in industrial plastic blocks, large wood structures, metal-plastic mixed waste.',
        paragraph2: 'Equipped with Siemens PLC-based advanced automation, SCADA integration, real-time remote monitoring, AI-assisted jam prevention, CSM-200 is designed for Industry 4.0 standard field operations.',
        paragraph3: 'CSM-200 is designed as turnkey solution for large industrial construction projects, mega recycling fields, plastic processing facilities, wood waste processing centers. Supported by 3-year warranty+24/7 technical support.'
      },
      ru: {
        intro: 'Мобильная дробилка CSM-200 с двумя валами - профессиональное решение для крупных полевых операций.',
        paragraph1: 'Модель CSM-200 оснащена мощной двойной моторной системой 2x200 кВт (всего 400 кВт / 530 л.с.) с ультра-широкой длиной ротора 2000 мм. Производительность 40-60 тонн/час.',
        paragraph2: 'Оснащен передовой автоматизацией Siemens PLC, интеграцией SCADA, удаленным мониторингом в реальном времени, CSM-200 разработан для стандартов Индустрии 4.0.',
        paragraph3: 'CSM-200 разработан как комплексное решение для крупных промышленных проектов, мега полей переработки.'
      },
      ar: {
        intro: 'كسارة CSM-200 المتنقلة ثنائية العمود حل محمول احترافي يوفر أقصى قوة وتحكم دقيق للعمليات الميدانية الكبيرة.',
        paragraph1: 'يتميز طراز CSM-200 بنظام محرك مزدوج عالي القوة 2x200 كيلووات (إجمالي 400 كيلووات / 530 حصان) مع طول دوار فائق الاتساع 2000 مم. سعة معالجة 40-60 طن/ساعة.',
        paragraph2: 'مجهز بأتمتة Siemens PLC المتقدمة وتكامل SCADA ومراقبة عن بعد في الوقت الفعلي، تم تصميم CSM-200 لمعايير الصناعة 4.0.',
        paragraph3: 'تم تصميم CSM-200 كحل تسليم مفتاح لمشاريع البناء الصناعية الكبيرة وحقول إعادة التدوير الضخمة.'
      }
    }
  },
  // DİĞER MAKİNE TÜRLERİ (pallet, harddisk)
  // Bu modeller için çeviri metinleri henüz eklenmemiştir
};

/**
 * Get fallback description for models without specific translations
 */
const getFallbackDescription = (productType: string, modelName: string, language: Language): ModelDescription => {
  const productNames: {[key: string]: {[lang in Language]: string}} = {
    'quad-saft': {
      tr: 'Dört Şaftlı Parçalama Makinesi',
      en: 'Four Shaft Shredder',
      ru: 'Четырехвальный измельчитель',
      ar: 'آلة التقطيع رباعية العمود'
    },
    'metal': {
      tr: 'Redmonster Metal Parçalama Makinesi',
      en: 'Redmonster Metal Shredder',
      ru: 'Металлический измельчитель Redmonster',
      ar: 'آلة تقطيع المعادن Redmonster'
    },
    'pallet': {
      tr: 'Palet Parçalama Makinesi',
      en: 'Pallet Shredder',
      ru: 'Измельчитель поддонов',
      ar: 'آلة تقطيع المنصات'
    },
    'mobile': {
      tr: 'Mobil Kırıcı',
      en: 'Mobile Crusher',
      ru: 'Мобильная дробилка',
      ar: 'كسارة متنقلة'
    },
    'harddisk': {
      tr: 'Harddisk İmha Makinesi',
      en: 'Hard Disk Destroyer',
      ru: 'Уничтожитель жестких дисков',
      ar: 'آلة إتلاف الأقراص الصلبة'
    }
  };

  const productName = productNames[productType]?.[language] || productNames[productType]?.tr || '';

  const templates: {[lang in Language]: ModelDescription} = {
    tr: {
      intro: `${modelName} ${productName}, endüstriyel atık yönetimi için güçlü ve verimli bir çözüm sunar.`,
      paragraph1: `${modelName} model, yüksek performanslı motor gücü ve geniş parçalama alanı ile çeşitli atık türlerinin etkili şekilde işlenmesini sağlar. Endüstriyel dayanıklılık ve uzun ömürlü kullanım için tasarlanmıştır.`,
      paragraph2: `Gelişmiş otomasyon sistemi, kullanıcı dostu kontrol paneli ve güvenlik özellikleri ile donatılmıştır. Yüksek kaliteli bıçak sistemi ve güçlü motor, kesintisiz ve verimli çalışma garantisi verir.`,
      paragraph3: `MT Makina ${modelName}, geri dönüşüm tesisleri, atık yönetim merkezleri ve endüstriyel işletmeler için ideal bir çözümdür. Modüler yapısı sayesinde kolay bakım ve uzun ömür sunar.`
    },
    en: {
      intro: `${modelName} ${productName} offers a powerful and efficient solution for industrial waste management.`,
      paragraph1: `${modelName} model provides effective processing of various waste types with high-performance motor power and wide shredding area. Designed for industrial durability and long-lasting use.`,
      paragraph2: `Equipped with advanced automation system, user-friendly control panel and safety features. High-quality blade system and powerful motor guarantee uninterrupted and efficient operation.`,
      paragraph3: `MT Makina ${modelName} is an ideal solution for recycling facilities, waste management centers and industrial enterprises. Thanks to its modular structure, it offers easy maintenance and long life.`
    },
    ru: {
      intro: `${modelName} ${productName} предлагает мощное и эффективное решение для промышленного управления отходами.`,
      paragraph1: `Модель ${modelName} обеспечивает эффективную переработку различных типов отходов с высокопроизводительным двигателем и широкой зоной измельчения. Разработан для промышленной прочности и долговечного использования.`,
      paragraph2: `Оснащен передовой системой автоматизации, удобной панелью управления и функциями безопасности. Высококачественная система лезвий и мощный двигатель гарантируют бесперебойную и эффективную работу.`,
      paragraph3: `MT Makina ${modelName} - идеальное решение для предприятий по переработке, центров управления отходами и промышленных предприятий. Благодаря модульной конструкции обеспечивает простое обслуживание и долгий срок службы.`
    },
    ar: {
      intro: `${modelName} ${productName} يوفر حلاً قويًا وفعالاً لإدارة النفايات الصناعية.`,
      paragraph1: `يوفر طراز ${modelName} معالجة فعالة لأنواع مختلفة من النفايات بقوة محرك عالية الأداء ومنطقة تقطيع واسعة. مصمم للمتانة الصناعية والاستخدام طويل الأمد.`,
      paragraph2: `مجهز بنظام أتمتة متقدم ولوحة تحكم سهلة الاستخدام وميزات الأمان. يضمن نظام الشفرات عالي الجودة والمحرك القوي تشغيلاً متواصلاً وفعالاً.`,
      paragraph3: `MT Makina ${modelName} هو حل مثالي لمنشآت إعادة التدوير ومراكز إدارة النفايات والمؤسسات الصناعية. بفضل هيكله المعياري، يوفر صيانة سهلة وعمرًا طويلاً.`
    }
  };

  return templates[language];
};

/**
 * Get model-specific description
 * @param productType - Product type (single-saft, dual-saft, quad-saft, etc.)
 * @param modelName - Model name (TSH-60, CS-80, etc.)
 * @param language - Language code (tr, en, ru, ar) - defaults to 'tr'
 */
export const getModelDescription = (
  productType: string,
  modelName: string,
  language: Language = 'tr'
): ModelDescription | null => {
  const multiDesc = modelDescriptions[productType]?.[modelName];
  
  // If specific description exists, return it for the requested language
  if (multiDesc) {
    return multiDesc[language] || multiDesc.tr || null;
  }
  
  // If no specific description, return fallback description
  return getFallbackDescription(productType, modelName, language);
};

/**
 * Check if model has custom description
 */
export const hasModelDescription = (productType: string, modelName: string): boolean => {
  return !!modelDescriptions[productType]?.[modelName];
};