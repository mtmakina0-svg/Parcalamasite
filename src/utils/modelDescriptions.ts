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
        paragraph2: 'Оснащенный системой автоматизации с ПЛК-управлением, TSH-60 продлевает срок службы ножей и обеспечивает бесперебойное производство благодаря автоматической функции реверса в случае перегрузки. С заменяемой системой сит можно получить ��азличные размеры на выходе.',
        paragraph3: 'Измельчитель MT Makina TSH-60 обладает промышленной прочностью, несмотря на компактный размер. С длиной ротора 600 мм, 24 сменными ножами и автоматической системой смазки требует минимального обслуживания. Это экономичное и эффективное решение для предприятий по переработке пластика, обработке древесных отходов и картонно-бумажных предприятий.'
      },
      ar: {
        intro: 'آلة التقطيع أحادية العمود TSH-60 هي الحل الأمثل للشركات الصغيرة والمتوسطة.',
        paragraph1: 'يوفر طراز TSH-60 تقطيعًا فعالاً للبلاستيك والخشب والورق والمنسوجات ونفايات التعبئة والتغليف بقوة محرك 15-30 كيلووات. بمنطقة تقطيع 600×1100 مم وسعة معالجة 500-800 كجم/ساعة، يلبي متطلبات الإنتاج اليومية متوسطة المستوى. بفضل تصميمه المدمج، يعمل بكفاءة حتى في المساحات المحدودة.',
        paragraph2: 'مجهز بنظام أت��تة يتحكم فيه PLC، يطيل TSH-60 عمر الشفرات ويضمن إنتاجًا مستمرًا من خلال وظيفة الرجوع التلقائي في حالة الحمل الزائد. يمكن الحصول على أحجام مخرجات مختلفة بنظام الشاشة القابل للاستبدال.',
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
        paragraph3: 'تم تحسين TSH-80 لمرافق إعادة التدوير متوسطة الحجم ومصانع معالجة البلاستيك ومراكز إدارة النفايات. يمكن التحكم في حجم المخرجات باستخدام نظام الشاشة القابل للاستبدال (20-80 مم). يقلل من تكاليف التشغيل بفضل انخفاض استهلاك الطاقة ونسبة الكفاءة العالية.'
      }
    },
    'TSH-100': {
      tr: {
        intro: 'TSH-100 tek şaftlı parçalama makinesi, yüksek kapasite gerektiren endüstriyel uygulamalar için tasarlanmış profesyonel bir sistemdir.',
        paragraph1: 'TSH-100 model, 30-75 kW güçlü motor seçenekleri ile 1000x1300 mm geniş parçalama alanı sunar. 1200-1800 kg/saat işleme kapasitesi ile büyük ölçekli üretim tesislerinin ihtiyaçlarını karşılar. Kalın duvarlı plastikler, büyük çaplı ahşap parçalar, endüstriyel konteynerler, IBC tanklar ve ağır tekstil atıklarını kolayca parçalar.',
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
        paragraph2: 'مجهز بلوحة تحكم PLC متقدمة وواجهة مشغل شاشة تعمل باللمس وأنظمة المراقبة عن بُعد وتذكير الصيانة. مع دوار 1000 مم و40 شفرة عالية الجودة ونظام دفع هيدروليكي، يضمن إنت��جًا مستمرًا ومتواصلاً. توفر العملية العكسية التلقائية وإدارة الحمل الذكية أقصى كفاءة.',
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
        paragraph1: 'Модель TSH-130 предлагает сверхширокую зону измельчения 1300x1600 мм с высокомоментным двигателем 45-110 кВт. С производительностью обработки 1800-2500 кг/час она отвечает требованиям крупных предприятий с непрерывным производством. Показывает превосходную производительность при измельчении толстостенного промышленного пластика, крупных деревянных бревен, отходов мебели и кроватей, труб большого диаметра и тяжелых промышленных отходов.',
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
        paragraph2: 'يوفر نظام الأتمتة المتقدم القائم على PLC من Siemens تكامل SCADA والتدخل عن بُعد والصيانة التنبؤية والبنية التحتية لاتصال إنترنت الأشياء. مع دوار طويل إضافي 1600 مم و64 شفرة سبائك خاصة وعلبة تروس معززة، يوفر أقصى عزم دوران ومتانة. بفضل نظام المحرك المزدوج، يضمن تشغيلاً متواصلاً حتى تحت الأحمال الثقيلة.',
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
        paragraph2: 'Самая передовая система ПЛК и SCADA включает оптимизацию нагрузки с помощью ИИ, анализ производительности в реальном времени, полное дистанционное управление и облачное хранение данных. С ультрадлинным ротором 2000 мм, 80 ножами премиум-качества, гидравлической системой промышленного класса и усиленным стальным корпусом легко обрабатывает даже самые прочные материалы. Обеспечивает уникальный крутящий момент и эффективность благодаря системе с двумя двигателями и дифференциальной передачей.',
        paragraph3: 'TSH-200 - идеальное решение для мегамасштабных комплексов переработки, муниципальных интегрированных объектов управления твердыми отходами, центров промышленных отходов автомобильной промышленности, портовых и таможенных центров переработки отходов. Может комбинироваться с полностью автоматической интеграцией линии, мультисепараторными системами, автоматическими системами упаковки и отгрузки. Поддерживается круглосуточной технической поддержкой, сервисом обслуживания на месте и долгосрочной гарантией.'
      },
      ar: {
        intro: 'آلة التقطيع أحادية العمود TSH-200 هي أكبر وأقوى طراز من MT Makina، مصممة للمشاريع الضخمة التي تتطلب أقصى سعة.',
        paragraph1: 'يوفر طراز TSH-200 منطقة تقطيع عملاقة 2000×2300 مم مع نظام محرك مزدوج 2×75-160 كيلووات. بسعة معالجة 4500-6000 كجم/ساعة، لديها القدرة على معالجة ما يصل إلى 5 أطنان من النفايات في الساعة. يستخدم للحاويات الصناعية كبيرة الحجم وتشطيبات الحافلات والشاحنات الداخلية وخزانات البلاستيك ذات القطر الكبير وهياكل الآلات الصناعية والهياكل الخشبية الكبيرة ومشاريع النفايات الإلكترونية بالجملة.',
        paragraph2: 'يتميز نظام PLC وSCADA الأكثر تقدمًا بتحسين الحمل بمساعدة الذكاء الاصطناعي وتحليل الأداء في الوقت الفعلي والتحكم الكامل عن بُعد وتخزين البيانات المستند إلى السحابة. مع دوار فائق الطول 2000 مم و80 شفرة عالية الجودة ونظام هيدروليكي بدرجة صناعية وهيكل فولاذي معزز، يعالج بسهولة حتى أصعب المواد. يوفر عزم دوران وكفاءة فريدة بفضل نظام المحرك المزدوج ونظام التروس التفاضلي.',
        paragraph3: 'TSH-200 هو الحل الأمثل لمجمعات إعادة التدوير على نطاق ضخم ومرافق الإدارة المتكاملة للنفايات الصلبة البلدية ومراكز النفايات الصناعية للسيارات ومراكز معالجة نفايات الموانئ والجمارك. يمكن دمجه مع التكامل الآلي الكامل للخط وأنظمة الفصل المتعددة وأنظمة التعبئة والشحن التلقائية. مدعوم بدعم فني على مدار 24/7 وخدمة صيانة في الموقع وضمان طويل الأجل.'
      }
    }
  },
  // DİĞER MAKİNE TÜRLERİ (dual-saft, quad-saft, metal, pallet, mobile, harddisk)
  // Bu modeller için çeviri metinleri henüz eklenmemiştir
  // getModelDescription fonksiyonu bu modeller için genel fallback metinler döndürecektir
};

/**
 * Get fallback description for models without specific translations
 */
const getFallbackDescription = (productType: string, modelName: string, language: Language): ModelDescription => {
  const productNames: {[key: string]: {[lang in Language]: string}} = {
    'dual-saft': {
      tr: 'Çift Şaftlı Parçalama Makinesi',
      en: 'Dual Shaft Shredder',
      ru: 'Двухвальный измельчитель',
      ar: 'آلة التقطيع ثنائية العمود'
    },
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