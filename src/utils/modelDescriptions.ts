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
        paragraph1: 'يتميز طراز TSH-80 بمنطقة تقطيع واسعة 800×1100 مم بقوة محرك 22-45 كيلووات. بسعة 800-1200 كجم/ساعة، يلبي متطلبات معالجة النفايات اليو��ية ذات الحجم الكبير. يظهر أداءً متفوقًا في تقطيع نفايات حقن البلاستيك وزجاجات PET ومواد PP-PE والمنصات الخشبية ونفايات التعبئة والتغليف الصناعية.',
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
        paragraph3: 'MT Makina TSH-100 - идеальное решение для крупных предприятий по переработке пл��стика, производителей деревянных поддонов, переработчиков композитных материалов и компаний по управлению промышленными отходами. Благодаря модульной структуре может быть интегрирован с конвейерными системами и сепараторами. Поддерживается сертифицированными стандартами безопасности CE и 2-летней гарантией.'
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
        paragraph3: 'TSH-130 оптимизирован для крупных комплексов по переработке пластика, центров обработки древесины, предприятий по утилизации бытовой техники и управления отходами тяжелой промышленности. Возможно как грубое, так и тонкое измельчение с двойной сист��мой сит. Быстрая окупаемость инвестиций благодаря высокой долговечности и низким эксплуатационным расходам.'
      },
      ar: {
        intro: 'آلة التقطيع أحادية العمود TSH-130 هي نظام تقطيع قوي مصمم للتطبيقات الصناعية الثقيلة.',
        paragraph1: 'يوفر طراز TSH-130 منطقة تقطيع واسعة للغاية 1300×1600 مم مع قوة محرك عزم دوران عالية 45-110 كيلووات. بسعة معالجة 1800-2500 كجم/ساعة، يلبي متطلبات المنشآت الكبيرة ذات الإنتاج المستمر. يظهر أداءً متفوقًا في تقطيع البلاستيك الصناعي ذو الجدران السميكة وجذوع الخشب الكبيرة ونفايات الأسرة والأثاث والأنابيب ذات القطر الكبير والنفايات الصناعية الثقيلة.',
        paragraph2: 'تتضمن أتمتة PLC الصناعية تتبع الإنتاج في الوقت الفعلي وتحليل استهلاك الطاقة ووحدات تخطيط الصيانة. مع دوار طويل 1300 مم ونظام 48 شفرة معززة وهيكل محمل معزز، لديه قدرة تشغيل متواصل 7/24. يقلل المغذي الهيدروليكي ونظام ا��تحكم في المستوى التلقائي من تدخل المشغل.',
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
        paragraph3: 'MT Makina TSH-160 разработан для крупномасштабных комплексов переработки, центров восстановления автомобилей, муниципальных объектов по управлению отходами и совмес��ных центров переработки отходов промышленных зон. Может быть интегрирован с полностью автоматической конвейерной подачей, магнитным сепаратором, воздушным сепаратором и пресс-подборщиком. Поддерживается европейскими стандартами безопасности и сертификацией CE.'
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
        paragraph3: 'MT Makina CS-20 идеально подходит для небольших мастерских по переработке пластика, центров сбора бумаги и картона, подразделений по перераб��тке упаковочных отходов.'
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
        paragraph1: 'Модель CS-40 обеспечивает сбалансированную производительность измельчения с мощностью двойного двигателя 2x11 кВт, длиной рот��ра 600 мм и диаметром ротора 250 мм.',
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
        intro: 'Двухвальный измельчитель CS-60 - компактное и мощн��е решение, обеспечивающее высокую эффективность в управлении промышленными отходами.',
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
        paragraph3: 'DS-150 разработан для крупных комплексов переработки пласт��ка.'
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
        paragraph1: 'يتميز طراز RDM-150 بهيكل محرك بع��م دوران فائق 110 كيلووات مع طول دوار واسع 1500 مم. سعة معالجة 2500-4000 كجم/ساعة.',
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
        intro: 'كسارة TSM-150 المتنقلة أحادية العمود حل احترافي محمول ومدمج للتطبيقات ��لميدانية.',
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
  'pallet': {
    'TSV-140': {
      tr: {
        intro: 'TSV-140 palet parçalama makinesi, küçük ve orta ölçekli palet geri dönüşüm tesisleri için özel olarak tasarlanmış kompakt ve güçlü bir çözümdür.',
        paragraph1: 'TSV-140 model, 30 kW yüksek torklu motor ile 1400x400 mm parçalama alanına sahiptir. 1-3 ton/saat işleme kapasitesi ile ahşap Euro paletler, plastik paletler, çivili paletler ve ahşap ambalaj malzemelerinin etkili parçalanmasını sağlar. Kompakt boyutları sayesinde sınırlı alanlarda bile verimli çalışır ve kolay entegrasyon sağlar. Tek şaftlı tasarımı ile çivili ve metal aksamlı paletleri güvenle işler.',
        paragraph2: 'Entegre mıknatıs seperatör sistemi ile çiviler ve metal parçalar otomatik olarak ayrılır, böylece temiz ahşap/plastik çıktı elde edilir. PLC kontrollü otomasyon, otomatik ters çalışma ve aşırı yük koruma sistemleri ile kesintisiz üretim garantisi verir. 1400 mm rotor uzunluğu ve 20 adet yüksek karbonlu çelik bıçak ile homojen parçalama sağlar. Değiştirilebilir elek sistemi (30-100 mm) ile istediğiniz çıkış boyutunu ayarlayabilirsiniz.',
        paragraph3: 'MT Makina TSV-140, küçük ahşap işleme tesisleri, palet üretim firmaları, geri dönüşüm merkezleri ve lojistik şirketleri için ideal çözümdür. Düşük enerji tüketimi, minimal gürültü seviyesi ve kolay bakım ile işletme maliyetlerini minimize eder. CE sertifikalı güvenlik standartları ve 2 yıl garanti ile desteklenir. Biyokütle yakıt üretimi, ahşap panel hammaddesi ve kompozit malzeme üretimi için mükemmel sonuçlar verir.'
      },
      en: {
        intro: 'TSV-140 pallet shredder is a compact and powerful solution specially designed for small and medium-scale pallet recycling facilities.',
        paragraph1: 'TSV-140 model has a shredding area of 1400x400 mm with 30 kW high-torque motor. With 1-3 ton/hour processing capacity, it provides effective shredding of wooden Euro pallets, plastic pallets, nailed pallets and wooden packaging materials. Thanks to its compact size, it works efficiently even in limited spaces and provides easy integration. Single shaft design safely processes nailed and metal-fitted pallets.',
        paragraph2: 'Integrated magnetic separator system automatically separates nails and metal parts, thus obtaining clean wood/plastic output. PLC controlled automation, automatic reverse operation and overload protection systems guarantee uninterrupted production. 1400 mm rotor length and 20 high carbon steel blades provide homogeneous shredding. You can adjust the desired output size with replaceable screen system (30-100 mm).',
        paragraph3: 'MT Makina TSV-140 is the ideal solution for small wood processing facilities, pallet manufacturing companies, recycling centers and logistics companies. It minimizes operating costs with low energy consumption, minimal noise level and easy maintenance. Supported by CE certified safety standards and 2-year warranty. It gives excellent results for biomass fuel production, wood panel raw materials and composite material production.'
      },
      ru: {
        intro: 'Измельчитель поддонов TSV-140 - компактное и мощное решение, специально разработанное для малых и средних предприятий по переработке поддонов.',
        paragraph1: 'Модель TSV-140 имеет зону измельчения 1400x400 мм с высокомоментным двигателем 30 кВт. С производительностью 1-3 тонны/час обеспечивает эффективное измельчение деревянных европоддонов, пластиковых поддонов, поддонов с гвоздями и деревянных упаковочных материалов. Благодаря компактным размерам эффективно работает даже в ограниченном пространстве и обеспечивает легкую интеграцию. Одновальная конструкция безопасно обрабатывает поддоны с гвоздями и металлическими элементами.',
        paragraph2: 'Интегрированная система магнитного сепаратора автоматически отделяет гвозди и металлические части, получая чистый деревянный/пластиковый выход. ПЛК-управление, автоматический реверс и системы защиты от перегрузки гарантируют бесперебойное производство. Длина ротора 1400 мм и 20 ножей из высокоуглеродистой стали обеспечивают однородное измельчение. Вы можете регулировать желаемый размер выхода с помощью заменяемой системы сит (30-100 мм).',
        paragraph3: 'MT Makina TSV-140 - идеальное решение для небольших деревообрабатывающих предприятий, производителей поддонов, центров переработки и логистических компаний. Минимизирует эксплуатационные расходы с низким энергопотреблением, минимальным уровнем шума и простым обслуживанием. Поддерживается стандартами безопасности CE и 2-летней гарантией. Дает отличные результаты для производства биомассового топлива, сырья для древесных панелей и производства композитных материалов.'
      },
      ar: {
        intro: 'آلة تقطيع المنصات TSV-140 هي حل مدمج وقوي مصمم خصيصًا لمرافق إعادة تدوير المنصات صغيرة ومتوسطة الحجم.',
        paragraph1: 'يتميز طراز TSV-140 بمنطقة تقطيع 1400×400 مم مع محرك عالي العزم 30 كيلووات. مع سعة معالجة 1-3 طن/ساعة، يوفر تقطيعًا فعالاً للمنصات الخشبية الأوروبية والمنصات البلاستيكية والمنصات المسمرة ومواد التعبئة الخشبية. بفضل حجمه المدمج، يعمل بكفاءة حتى في المساحات المحدودة ويوفر تكاملًا سهلاً. يعالج التصميم أحادي العمود المنصات المسمرة والمجهزة بالمعادن بأمان.',
        paragraph2: 'يفصل نظام الفاصل المغناطيسي المدمج المسامير والأجزاء المعدنية تلقائيًا، وبالتالي الحصول على مخرجات خشبية/بلاستيكية نظيفة. يضمن التحكم الآلي بـ PLC والتشغيل العكسي التلقائي وأنظمة الحماية من الحمل الزائد إنتاجًا مستمرًا. يوفر طول الدوار 1400 مم و20 شفرة فولاذية عالية الكربون تقطيعًا متجانسًا. يمكنك ضبط حجم المخرجات المطلوب بنظام الشاشة القابل للاستبدال (30-100 مم).',
        paragraph3: 'MT Makina TSV-140 هو الحل الأمثل لمرافق معالجة الخشب الصغيرة وشركات تصنيع المنصات ومراكز إعادة التدوير وشركات اللوجستيات. يقلل من تكاليف التشغيل مع استهلاك منخفض للطاقة ومستوى ضوضاء ضئيل وصيانة سهلة. مدعوم بمعايير السلامة المعتمدة من CE وضمان لمدة عامين. يعطي نتائج ممتازة لإنتاج وقود الكتلة الحيوية والمواد الخام للوحات الخشبية وإنتاج المواد المركبة.'
      }
    },
    'TSV-200': {
      tr: {
        intro: 'TSV-200 palet parçalama makinesi, orta ve büyük ölçekli palet geri dönüşüm operasyonları için yüksek kapasite ve verimlilik sunan profesyonel bir sistemdir.',
        paragraph1: 'TSV-200 model, 45-55 kW güçlü motor seçenekleri ile 2000x600 mm geniş parçalama alanına sahiptir. 3-7 ton/saat yüksek işleme kapasitesi ile standart Euro paletler, EPAL paletler, endüstriyel büyük paletler, çift katlı paletler, plastik blok paletler ve karma ahşap-plastik paletlerin hızlı ve etkili parçalanmasını sağlar. 2000 mm ultra geniş rotor, büyük boyutlu paletleri tek geçişte işleyebilir.',
        paragraph2: 'Çift mıknatıs seperatör sistemi (rotor üstü + konveyör bandı) ile %99 oranında çivi ve metal parça ayrımı sağlar. Gelişmiş PLC otomasyon, touch screen operatör paneli, otomatik besleme kontrolü ve hidrolik itici sistem ile tam otomatik çalışma modu sunar. 2000 mm rotor uzunluğu ve 28 adet premium kalite bıçak ile saatte yüzlerce palet işleme kapasitesi. Çift elek sistemi (30-80 mm kaba parça, 10-30 mm ince parça) ile iki farklı çıkış boyutu aynı anda üretilebilir.',
        paragraph3: 'MT Makina TSV-200, büyük palet üretim tesisleri, lojistik depolar, endüstriyel geri dönüşüm merkezleri ve ahşap işleme fabrikaları için ideal çözümdür. Konveyör bant entegrasyonu, otomatik besleme hunisi ve çıkış bandı seçenekleri ile tam otomasyon hattı kurulabilir. Enerji verimli motor teknolojisi ile düşük işletme maliyeti sağlar. Parçalanmış palet atıkları biyokütle yakıt, yonga levha üretimi, hayvan altlığı ve kompozit malzeme hammaddesi olarak kullanılabilir. CE, ISO 9001 sertifikaları ve 2 yıl garanti ile desteklenir.'
      },
      en: {
        intro: 'TSV-200 pallet shredder is a professional system offering high capacity and efficiency for medium and large-scale pallet recycling operations.',
        paragraph1: 'TSV-200 model has a wide shredding area of 2000x600 mm with powerful motor options of 45-55 kW. With 3-7 ton/hour high processing capacity, it provides fast and effective shredding of standard Euro pallets, EPAL pallets, industrial large pallets, double-deck pallets, plastic block pallets and mixed wood-plastic pallets. 2000 mm ultra-wide rotor can process large-sized pallets in a single pass.',
        paragraph2: 'Provides 99% nail and metal part separation with dual magnetic separator system (over rotor + conveyor belt). Offers fully automatic operation mode with advanced PLC automation, touch screen operator panel, automatic feeding control and hydraulic pusher system. 2000 mm rotor length and 28 premium quality blades provide capacity to process hundreds of pallets per hour. Two different output sizes can be produced simultaneously with dual screen system (30-80 mm coarse, 10-30 mm fine).',
        paragraph3: 'MT Makina TSV-200 is the ideal solution for large pallet production facilities, logistics warehouses, industrial recycling centers and wood processing factories. Full automation line can be established with conveyor belt integration, automatic feeding hopper and output belt options. Provides low operating costs with energy-efficient motor technology. Shredded pallet waste can be used as biomass fuel, chipboard production, animal bedding and composite material raw materials. Supported by CE, ISO 9001 certificates and 2-year warranty.'
      },
      ru: {
        intro: 'Измельчитель поддонов TSV-200 - профессиональная система, предлагающая высокую производительность и эффективность для средних и крупномасштабных операций по переработке поддонов.',
        paragraph1: 'Модель TSV-200 имеет широкую зону измельчения 2000x600 мм с мощными вариантами двигателей 45-55 кВт. С высокой производительностью 3-7 тонн/час обеспечивает быструю и эффективную переработку стандартных европоддонов, EPAL поддонов, промышленных крупных поддонов, двухъярусных поддонов, пластиковых блочных поддонов и смешанных дерево-пластиковых поддонов. Ультра-широкий ротор 2000 мм может обрабатывать крупногабаритные поддоны за один проход.',
        paragraph2: 'Обеспечивает 99% отделение гвоздей и металлических частей с двойной системой магнитного сепаратора (над ротором + конвейерная лента). Предлагает полностью автоматический режим работы с передовой автоматизацией ПЛК, сенсорной панелью оператора, автоматическим контролем подачи и гидравлической толкающей системой. Длина ротора 2000 мм и 28 ножей премиум-качества обеспечивают производительность обработки сотен поддонов в час. Два разных размера выхода могут производиться одновременно с двойной системой сит (30-80 мм крупная, 10-30 мм мелкая фракция).',
        paragraph3: 'MT Makina TSV-200 - идеальное решение для крупных производственных предприятий поддонов, логистических складов, промышленных центров переработки и деревообрабатывающих заводов. Полная линия автоматизации может быть установлена с интеграцией конвейерной ленты, автоматической загрузочной воронкой и выходной лентой. Обеспечивает низкие эксплуатационные расходы с энергоэффективной технологией двигателя. Измельченные отходы поддонов могут использоваться как биотопливо, производство ДСП, подстилка для животных и сырье для композитных материалов. Поддерживается сертификатами CE, ISO 9001 и 2-летней гарантией.'
      },
      ar: {
        intro: 'آلة تقطيع المنصات TSV-200 هي نظام احترافي يوفر سعة عالية وكفاءة لعمليات إعادة تدوير المنصات متوسطة وكبيرة الحجم.',
        paragraph1: 'يتميز طراز TSV-200 بمنطقة تقطيع واسعة 2000×600 مم مع خيارات محرك قوية 45-55 كيلووات. مع سعة معالجة عالية 3-7 طن/ساعة، يوفر تقطيعًا سريعًا وفعالاً للمنصات الأوروبية القياسية ومنصات EPAL والمنصات الصناعية الكبيرة والمنصات ذات الطابقين ومنصات الكتلة البلاستيكية والمنصات المختلطة خشب-بلاستيك. يمكن للدوار فائق الاتساع 2000 مم معالجة المنصات كبيرة الحجم في تمريرة واحدة.',
        paragraph2: 'يوفر فصل 99% للمسامير والأجزاء المعدنية مع نظام الفاصل المغناطيسي المزدوج (فوق الدوار + حزام ناقل). يوفر وضع تشغيل أوتوماتيكي بالكامل مع أتمتة PLC المتقدمة ولوحة تشغيل شاشة لمس والتحكم التلقائي في التغذية ونظام الدفع الهيدروليكي. يوفر طول الدوار 2000 مم و28 شفرة ممتازة الجودة سعة لمعالجة مئات المنصات في الساعة. يمكن إنتاج حجمين مختلفين من المخرجات في وقت واحد بنظام الشاشة المزدوجة (30-80 مم خشنة، 10-30 مم ناعمة).',
        paragraph3: 'MT Makina TSV-200 هو الحل الأمثل لمرافق إنتاج المنصات الكبيرة ومستودعات اللوجستيات ومراكز إعادة التدوير الصناعية ومصانع معالجة الخشب. يمكن إنشاء خط أتمتة كامل مع تكامل الحزام الناقل وقادوس التغذية التلقائي وخيارات حزام الإخراج. يوفر تكاليف تشغيل منخفضة مع تكنولوجيا المحرك الموفرة للطاقة. يمكن استخدام نفايات المنصات المقطعة كوقود حيوي وإنتاج ألواح خشبية وفراش للحيوانات ومواد خام للمواد المركبة. مدعوم بشهادات CE وISO 9001 وضمان لمدة عامين.'
      }
    },
    'TSVX-200': {
      tr: {
        intro: 'TSVX-200 ağır hizmet tipi palet parçalama makinesi, endüstriyel ölçekte yüksek hacimli palet geri dönüşümü için maksimum güç ve dayanıklılık sunan premium bir çözümdür.',
        paragraph1: 'TSVX-200 model, 75-90 kW ultra güçlü motor ile 2000x800 mm ekstra geniş parçalama alanına sahiptir. 8-15 ton/saat ultra yüksek işleme kapasitesi ile standart paletler, ağır endüstriyel paletler, üç katlı blok paletler, büyük ahşap kasalar, cable drums (kablo makaraları), büyük ahşap ambalaj sandıkları ve kombine ahşap-metal yapıların parçalanmasında olağanüstü performans gösterir. Extra geniş 800 mm açıklık, oversize paletleri ve atipik ahşap yapıları kolayca işler.',
        paragraph2: 'Üçlü mıknatıs seperatör konfigürasyonu (rotor üstü + çift konveyör bandı) ile endüstriyel çivi, vida, zımba ve metal parçaların %99.9 temiz ayrımı. Siemens PLC tabanlı endüstri 4.0 otomasyon sistemi, SCADA entegrasyonu, uzaktan izleme, predictive maintenance modülü, otomatik yağlama sistemi ve çift hidrolik itici sistem ile 7/24 kesintisiz üretim garantisi. 2000 mm ultra güçlendirilmiş rotor, 36 adet ekstra kalın (25 mm) premium bıçak ve otomatik bıçak boşluk ayar sistemi ile maksimum verimlilik sağlar. Üç kademeli elek sistemi (10-30 mm ince / 30-60 mm orta / 60-100 mm kaba) ile aynı anda üç farklı granül boyutu üretilebilir.',
        paragraph3: 'MT Makina TSVX-200, mega palet üretim fabrikaları, uluslararası lojistik hubları, büyük ahşap geri dönüşüm tesisleri, biyokütle enerji santralleri ve entegre atık yönetim tesisleri için turnkey çözümdür. Tam otomatik hat entegrasyonu ile saatte 200+ palet işleme kapasitesi. Modüler konveyör sistemleri, otomatik besleme platformu, toz bastırma sistemi, akustik izolasyon kabini ile endüstriyel entegrasyon sağlar. Parçalanmış çıktılar biyokütle yakıt pelleti, MDF-OSB üretimi, beton kalıp sektörü ve yüksek değerli kompozit malzeme üretimi için kullanılabilir. Tüm AB güvenlik standartları (CE, ATEX opsiyonel), ISO 9001, ISO 14001 sertifikaları ve 3 yıl premium garanti + 7/24 teknik destek ile desteklenir.'
      },
      en: {
        intro: 'TSVX-200 heavy-duty pallet shredder is a premium solution offering maximum power and durability for industrial-scale high-volume pallet recycling.',
        paragraph1: 'TSVX-200 model has an extra-wide shredding area of 2000x800 mm with ultra-powerful 75-90 kW motor. With 8-15 ton/hour ultra-high processing capacity, it shows extraordinary performance in shredding standard pallets, heavy industrial pallets, three-deck block pallets, large wooden crates, cable drums, large wooden packaging boxes and combined wood-metal structures. Extra-wide 800 mm opening easily processes oversize pallets and atypical wooden structures.',
        paragraph2: 'Triple magnetic separator configuration (over rotor + dual conveyor belt) provides 99.9% clean separation of industrial nails, screws, staples and metal parts. Industry 4.0 automation system based on Siemens PLC, SCADA integration, remote monitoring, predictive maintenance module, automatic lubrication system and dual hydraulic pusher system guarantee 24/7 uninterrupted production. 2000 mm ultra-reinforced rotor, 36 extra-thick (25 mm) premium blades and automatic blade gap adjustment system provide maximum efficiency. Three different granule sizes can be produced simultaneously with three-stage screen system (10-30 mm fine / 30-60 mm medium / 60-100 mm coarse).',
        paragraph3: 'MT Makina TSVX-200 is a turnkey solution for mega pallet production factories, international logistics hubs, large wood recycling facilities, biomass power plants and integrated waste management facilities. Capacity to process 200+ pallets per hour with fully automatic line integration. Provides industrial integration with modular conveyor systems, automatic feeding platform, dust suppression system, acoustic isolation cabin. Shredded outputs can be used for biomass fuel pellets, MDF-OSB production, concrete formwork sector and high-value composite material production. Supported by all EU safety standards (CE, ATEX optional), ISO 9001, ISO 14001 certificates and 3-year premium warranty + 24/7 technical support.'
      },
      ru: {
        intro: 'Измельчитель поддонов TSVX-200 для тяжелых условий эксплуатации - это премиальное решение, предлагающее максимальную мощность и долговечность для крупномасштабной переработки поддонов в промышленных объемах.',
        paragraph1: 'Модель TSVX-200 имеет сверхширокую зону измельчения 2000x800 мм с ультрамощным двигателем 75-90 кВт. С ультравысокой производительностью 8-15 тонн/час показывает выдающуюся производительность при измельчении стандартных поддонов, тяжелых промышленных поддонов, трехъярусных блочных поддонов, больших деревянных ящиков, кабельных барабанов, больших деревянных упаковочных коробок и комбинированных дерево-металлических конструкций. Сверхширокое отверстие 800 мм легко обрабатывает негабаритные поддоны и нетипичные деревянные конструкции.',
        paragraph2: 'Тройная конфигурация магнитного сепаратора (над ротором + двойная конвейерная лента) обеспечивает 99,9% чистое отделение промышленных гвоздей, винтов, скоб и металлических частей. Система автоматизации Индустрии 4.0 на базе Siemens PLC, интеграция SCADA, удаленный мониторинг, модуль прогнозного обслуживания, автоматическая система смазки и двойная гидравлическая толкающая система гарантируют круглосуточное бесперебойное производство. Ультра-усиленный ротор 2000 мм, 36 сверхтолстых (25 мм) ножей премиум-класса и автоматическая система регулировки зазора ножей обеспечивают максимальную эффективность. Три разных размера гранул могут производиться одновременно с трехступенчатой системой сит (10-30 мм мелкая / 30-60 мм средняя / 60-100 мм крупная фракция).',
        paragraph3: 'MT Makina TSVX-200 - это комплексное решение для мега заводов по производству поддонов, международных логистических хабов, крупных предприятий по переработке древесины, биомассовых электростанций и интегрированных предприятий по управлению отходами. Производительность обработки 200+ поддонов в час с полностью автоматической интеграцией линии. Обеспечивает промышленную интеграцию с модульными конвейерными системами, автоматической платформой подачи, системой пылеподавления, акустической изоляционной кабиной. Измельченные отходы могут использоваться для производства топливных пеллет из биомассы, производства МДФ-ОСБ, сектора бетонной опалубки и производства высококачественных композитных материалов. Поддерживается всеми стандартами безопасности ЕС (CE, ATEX опционально), сертификатами ISO 9001, ISO 14001 и 3-летней премиум-гарантией + круглосуточной технической поддержкой.'
      },
      ar: {
        intro: 'آلة تقطيع المنصات TSVX-200 للخدمة الشاقة هي حل متميز يوفر أقصى قدر من القوة والمتانة لإعادة تدوير المنصات عالية الحجم على النطاق الصناعي.',
        paragraph1: 'يتميز طراز TSVX-200 بمنطقة تقطيع واسعة للغاية 2000×800 مم مع محرك فائق القوة 75-90 كيلووات. مع سعة معالجة فائقة الارتفاع 8-15 طن/ساعة، يُظهر أداءً استثنائيًا في تقطيع المنصات القياسية والمنصات الصناعية الثقيلة ومنصات الكتلة ثلاثية الطوابق والصناديق الخشبية الكبيرة وبكرات الكابلات وصناديق التعبئة الخشبية الكبيرة والهياكل المشتركة خشب-معدن. الفتحة فائقة الاتساع 800 مم تعالج بسهولة المنصات كبيرة الحجم والهياكل الخشبية غير النمطية.',
        paragraph2: 'توفر تكوين الفاصل المغناطيسي الثلاثي (فوق الدوار + حزام ناقل مزدوج) فصلًا نظيفًا بنسبة 99.9% للمسامير والبراغي والدبابيس والأجزاء المعدنية الصناعية. نظام أتمتة الصناعة 4.0 القائم على Siemens PLC وتكامل SCADA والمراقبة عن بعد ووحدة الصيانة التنبؤية ونظام التشحيم التلقائي ونظام الدفع الهيدروليكي المزدوج يضمن إنتاجًا مستمرًا على مدار الساعة طوال أيام الأسبوع. يوفر الدوار فائق التعزيز 2000 مم و36 شفرة فائقة السُمك (25 مم) ممتازة الجودة ونظام ضبط فجوة الشفرة التلقائي أقصى قدر من الكفاءة. يمكن إنتاج ثلاثة أحجام حبيبية مختلفة في وقت واحد بنظام الشاشة ثلاثي المراحل (10-30 مم ناعمة / 30-60 مم متوسطة / 60-100 مم خشنة).',
        paragraph3: 'MT Makina TSVX-200 هو حل تسليم مفتاح لمصانع إنتاج المنصات الضخمة ومراكز اللوجستيات الدولية ومرافق إعادة تدوير الخشب الكبيرة ومحطات طاقة الكتلة الحيوية ومرافق إدارة النفايات المتكاملة. سعة معالجة أكثر من 200 منصة في الساعة مع تكامل خط أوتوماتيكي بالكامل. يوفر تكاملًا صناعيًا مع أنظمة ناقلة معيارية ومنصة تغذية أوتوماتيكية ونظام قمع الغبار وكابينة عزل صوتي. يمكن استخدام المخرجات المقطعة لإنتاج حبيبات الوقود الحيوي وإنتاج MDF-OSB وقطاع القوالب الخرسانية وإنتاج المواد المركبة عالية القيمة. مدعوم بجميع معايير السلامة الأوروبية (CE، ATEX اختياري) وشهادات ISO 9001 وISO 14001 وضمان متميز لمدة 3 سنوات + دعم فني على مدار الساعة طوال أيام الأسبوع.'
      }
    }
  },
  'harddisk': {
    'DATABER-S': {
      tr: {
        intro: 'DATABER-S harddisk imha makinesi, küçük ve orta ölçekli kurumlar için güvenli fiziksel veri imhası sağlayan kompakt ve ekonomik bir çözümdür.',
        paragraph1: 'DATABER-S model, 3-11 kW motor gücü ile 150x150 mm parçalama alanına sahip tek aşamalı fiziksel veri imha sistemidir. 2.5" ve 3.5" tüm harddisk türlerini, SSD diskleri, USB bellekleri, SD kartları, devre kartlarını ve elektronik veri depolama ünitelerini geri dönüşümsüz şekilde parçalar. GDPR, KVKK ve ISO 27001 uyumlu fiziksel imha sağlar. Saatte 50-100 adet disk işleme kapasitesi ile küçük-orta ölçekli veri merkezi ve ofisler için idealdir.',
        paragraph2: 'Tek aşamalı kırma teknolojisi ile harddiski 4-8 parçaya böler, manyetik plakayı deforme ederek veri kurtarmayı imkansız hale getirir. Otomatik güvenlik sensörleri, acil durdurma butonu ve çift el kontrol sistemi ile operatör güvenliği maksimum seviyededir. PLC kontrollü çalışma modu, otomatik sayaç sistemi ve imha raporu çıktısı ile tam dokümantasyon sağlar. Gürültü izolasyonlu kabin sayesinde ofis ortamlarında sessiz çalışma imkanı.',
        paragraph3: 'MT Makina DATABER-S, küçük IT şirketleri, muhasebe ofisleri, avukatlık büroları, sağlık kuruluşları ve orta ölçekli veri merkezleri için tasarlanmıştır. GDPR, KVKK, HIPAA ve SOX uyumluluk raporları otomatik oluşturulur. Kompakt tasarımı (50x60x120 cm) sayesinde dar alanlara sığar ve kolay taşınabilir. Bakım gerektirmeyen dayanıklı yapı, düşük enerji tüketimi ile işletme maliyetlerini minimize eder. CE ve ISO sertifikaları ile güvenlik standartlarına tam uyum sağlar.'
      },
      en: {
        intro: 'DATABER-S hard disk destroyer is a compact and economical solution providing secure physical data destruction for small and medium-sized organizations.',
        paragraph1: 'DATABER-S model is a single-stage physical data destruction system with 150x150 mm shredding area and 3-11 kW motor power. It irreversibly shreds all 2.5" and 3.5" hard disk types, SSD disks, USB drives, SD cards, circuit boards and electronic data storage units. Provides GDPR, KVKK and ISO 27001 compliant physical destruction. Ideal for small-medium scale data centers and offices with capacity to process 50-100 disks per hour.',
        paragraph2: 'Single-stage crushing technology breaks the hard disk into 4-8 pieces, deforming the magnetic platter making data recovery impossible. Operator safety is at maximum level with automatic safety sensors, emergency stop button and dual hand control system. Provides full documentation with PLC controlled operation mode, automatic counter system and destruction report output. Silent operation in office environments thanks to noise isolation cabin.',
        paragraph3: 'MT Makina DATABER-S is designed for small IT companies, accounting offices, law firms, healthcare institutions and medium-scale data centers. GDPR, KVKK, HIPAA and SOX compliance reports are automatically generated. Thanks to its compact design (50x60x120 cm), it fits in narrow spaces and is easily portable. Maintenance-free durable structure and low energy consumption minimize operating costs. Full compliance with safety standards with CE and ISO certificates.'
      },
      ru: {
        intro: 'DATABER-S уничтожитель жестких дисков - это компактное и экономичное решение, обеспечивающее безопасное физическое уничтожение данных для малых и средних организаций.',
        paragraph1: 'Модель DATABER-S представляет собой одноступенчатую систему физического уничтожения данных с зоной измельчения 150x150 мм и мощностью двигателя 3-11 кВт. Необратимо измельчает все типы жестких дисков 2,5" и 3,5", SSD-диски, USB-накопители, SD-карты, печатные платы и электронные устройства хранения данных. Обеспечивает физическое уничтожение в соответствии с GDPR, KVKK и ISO 27001. Идеально подходит для малых и средних центров обработки данных и офисов с производительностью 50-100 дисков в час.',
        paragraph2: 'Технология одноступенчатого дробления разбивает жесткий диск на 4-8 частей, деформируя магнитную пластину, делая восстановление данных невозможным. Безопасность оператора находится на максимальном уровне благодаря автоматическим датчикам безопасности, кнопке аварийной остановки и системе управления двумя руками. Обеспечивает полную документацию с режимом работы с управлением ПЛК, системой автоматического подсчета и выводом отчета об уничтожении. Бесшумная работа в офисных помещениях благодаря кабине шумоизоляции.',
        paragraph3: 'MT Makina DATABER-S разработан для небольших IT-компаний, бухгалтерских офисов, юридических фирм, медицинских учреждений и центров обработки данных среднего масштаба. Отчеты о соответствии GDPR, KVKK, HIPAA и SOX генерируются автоматически. Благодаря компактной конструкции (50x60x120 см) помещается в узких пространствах и легко переносится. Не требующая обслуживания прочная конструкция и низкое энергопотребление минимизируют эксплуатационные расходы. Полное соответствие стандартам безопасности с сертификатами CE и ISO.'
      },
      ar: {
        intro: 'آلة تدمير الأقراص الصلبة DATABER-S هي حل مدمج واقتصادي يوفر تدميرًا ماديًا آمنًا للبيانات للمؤسسات الصغيرة والمتوسطة.',
        paragraph1: 'طراز DATABER-S هو نظام تدمير بيانات مادي أحادي المرحلة بمنطقة تقطيع 150×150 مم وقوة محرك 3-11 كيلووات. يقطع بشكل لا رجعة فيه جميع أنواع الأقراص الصلبة 2.5 بوصة و3.5 بوصة وأقراص SSD ومحركات USB وبطاقات SD ولوحات الدوائر ووحدات تخزين البيانات الإلكترونية. يوفر تدميرًا ماديًا متوافقًا مع GDPR وKVKK وISO 27001. مثالي لمراكز البيانات والمكاتب صغيرة ومتوسطة الحجم مع سعة معالجة 50-100 قرص في الساعة.',
        paragraph2: 'تقنية التكسير أحادية المرحلة تكسر القرص الصلب إلى 4-8 قطع، مما يشوه اللوحة المغناطيسية مما يجعل استعادة البيانات مستحيلة. سلامة المشغل في أقصى مستوى مع أجهزة استشعار السلامة التلقائية وزر التوقف في حالات الطوارئ ونظام التحكم بيدين. يوفر وثائق كاملة مع وضع التشغيل المتحكم فيه بواسطة PLC ونظام العداد التلقائي وإخراج تقرير التدمير. تشغيل صامت في بيئات المكاتب بفضل كابينة عزل الضوضاء.',
        paragraph3: 'تم تصميم MT Makina DATABER-S لشركات تكنولوجيا المعلومات الصغيرة ومكاتب المحاسبة ومكاتب المحاماة والمؤسسات الصحية ومراكز البيانات متوسطة الحجم. يتم إنشاء تقارير الامتثال لـ GDPR وKVKK وHIPAA وSOX تلقائيًا. بفضل تصميمه المدمج (50×60×120 سم)، يتناسب مع المساحات الضيقة وسهل النقل. هيكل متين لا يحتاج إلى صيانة واستهلاك منخفض للطاقة يقلل من تكاليف التشغيل. امتثال كامل لمعايير السلامة مع شهادات CE وISO.'
      }
    },
    'DATABER-D': {
      tr: {
        intro: 'DATABER-D harddisk imha makinesi, çift aşamalı parçalama teknolojisi ile yüksek güvenlikli veri imhası gerektiren kurumlar için profesyonel bir çözümdür.',
        paragraph1: 'DATABER-D model, 5.5-18.5 kW güçlü motor ile 200x200 mm geniş parçalama alanına sahip çift kademeli fiziksel veri imha sistemidir. İlk aşamada diski 4-6 parçaya böler, ikinci aşamada bu parçaları 2-4 cm parçacıklara ayırarak tam güvenli imha sağlar. 2.5", 3.5" harddiskler, SSD, NVMe diskler, sunucu diskleri, RAID dizileri, endüstriyel depolama üniteleri ve tüm manyetik/elektronik medyaları işler. Saatte 100-200 disk kapasitesi ile orta-büyük veri merkezleri için idealdir.',
        paragraph2: 'Çift aşamalı kırma ve parçalama teknolojisi sayesinde DoD 5220.22-M, NIST 800-88 ve NATO standardlarına uygun veri imhası sağlar. Banka, sigorta, kamu kurumları ve savunma sektörü için sertifikalı güvenlik seviyesi. Gelişmiş PLC otomasyon sistemi, her diskin seri numarasını kaydeder, video dokümantasyon ile imha sürecini izler ve blockchain tabanlı imha sertifikası oluşturur. Çift koruma kabin, otomatik kilitleme sistemi ve yetkisiz erişim alarmı ile maksimum güvenlik.',
        paragraph3: 'MT Makina DATABER-D, bankalar, sigorta şirketleri, telekomünikasyon firmaları, kamu kurumları, büyük veri merkezleri ve savunma sanayi için tasarlanmıştır. Otomatik besleme konveyörü, manyetik seperatör ve metal toplama sistemi ile tam otomasyon imkanı. Her imha edilen disk için QR kodlu, blockchain doğrulamalı dijital sertifika üretir. GDPR Madde 17 (Unutulma Hakkı), KVKK uyumluluk, SOC 2 Type II ve PCI-DSS standartlarını karşılar. 3 yıl garanti ve 7/24 teknik destek ile desteklenir.'
      },
      en: {
        intro: 'DATABER-D hard disk destroyer is a professional solution for institutions requiring high-security data destruction with dual-stage shredding technology.',
        paragraph1: 'DATABER-D model is a dual-stage physical data destruction system with 200x200 mm wide shredding area and 5.5-18.5 kW powerful motor. In the first stage, it breaks the disk into 4-6 pieces, in the second stage it separates these pieces into 2-4 cm particles providing fully secure destruction. Processes 2.5", 3.5" hard disks, SSD, NVMe disks, server disks, RAID arrays, industrial storage units and all magnetic/electronic media. Ideal for medium-large data centers with capacity of 100-200 disks per hour.',
        paragraph2: 'Thanks to dual-stage crushing and shredding technology, it provides data destruction compliant with DoD 5220.22-M, NIST 800-88 and NATO standards. Certified security level for banking, insurance, public institutions and defense sector. Advanced PLC automation system records serial number of each disk, monitors destruction process with video documentation and creates blockchain-based destruction certificate. Maximum security with dual protection cabin, automatic locking system and unauthorized access alarm.',
        paragraph3: 'MT Makina DATABER-D is designed for banks, insurance companies, telecommunication companies, public institutions, large data centers and defense industry. Full automation capability with automatic feeding conveyor, magnetic separator and metal collection system. Produces QR-coded, blockchain-verified digital certificate for each destroyed disk. Meets GDPR Article 17 (Right to be Forgotten), KVKK compliance, SOC 2 Type II and PCI-DSS standards. Supported by 3-year warranty and 24/7 technical support.'
      },
      ru: {
        intro: 'DATABER-D уничтожитель жестких дисков - это профессиональное решение для учреждений, требующих высокозащищенного уничтожения данных с двухступенчатой технологией измельчения.',
        paragraph1: 'Модель DATABER-D представляет собой двухступенчатую систему физического уничтожения данных с широкой зоной измельчения 200x200 мм и мощным двигателем 5,5-18,5 кВт. На первом этапе диск разбивается на 4-6 частей, на втором этапе эти части разделяются на частицы 2-4 см, обеспечивая полностью безопасное уничтожение. Обрабатывает жесткие диски 2,5", 3,5", SSD, NVMe диски, серверные диски, массивы RAID, промышленные устройства хранения и все магнитные/электронные носители. Идеально подходит для средних и крупных центров обработки данных с производительностью 100-200 дисков в час.',
        paragraph2: 'Благодаря двухступенчатой технологии дробления и измельчения обеспечивает уничтожение данных в соответствии со стандартами DoD 5220.22-M, NIST 800-88 и NATO. Сертифицированный уровень безопасности для банковского, страхового, государственного секторов и оборонной промышленности. Усовершенствованная система автоматизации ПЛК записывает серийный номер каждого диска, отслеживает процесс уничтожения с видеодокументацией и создает сертификат уничтожения на основе блокчейна. Максимальная безопасность с двойной защитной кабиной, системой автоматической блокировки и сигнализацией несанкционированного доступа.',
        paragraph3: 'MT Makina DATABER-D разработан для банков, страховых компаний, телекоммуникационных компаний, государственных учреждений, крупных центров обработки данных и оборонной промышленности. Полная автоматизация с автоматическим конвейером подачи, магнитным сепаратором и системой сбора металла. Производит цифровой сертификат с QR-кодом и блокчейн-проверкой для каждого уничтоженного диска. Соответствует статье 17 GDPR (Право на забвение), соответствию KVKK, стандартам SOC 2 Type II и PCI-DSS. Поддерживается 3-летней гарантией и круглосуточной технической поддержкой.'
      },
      ar: {
        intro: 'آلة تدمير الأقراص الصلبة DATABER-D هي حل احترافي للمؤسسات التي تتطلب تدميرًا عالي الأمان للبيانات بتقنية التقطيع ثنائية المرحلة.',
        paragraph1: 'طراز DATABER-D هو نظام تدمير بيانات مادي ثنائي المرحلة بمنطقة تقطيع واسعة 200×200 مم ومحرك قوي 5.5-18.5 كيلووات. في المرحلة الأولى، يكسر القرص إلى 4-6 قطع، في المرحلة الثانية يفصل هذه القطع إلى جزيئات 2-4 سم مما يوفر تدميرًا آمنًا تامًا. يعالج الأقراص الصلبة 2.5 بوصة و3.5 بوصة وأقراص SSD وNVMe وأقراص الخادم ومصفوفات RAID ووحدات التخزين الصناعية وجميع الوسائط المغناطيسية/الإلكترونية. مثالي لمراكز البيانات المتوسطة والكبيرة بسعة 100-200 قرص في الساعة.',
        paragraph2: 'بفضل تقنية التكسير والتقطيع ثنائية المرحلة، يوفر تدمير البيانات المتوافق مع معايير DoD 5220.22-M وNIST 800-88 وNATO. مستوى أمان معتمد للقطاع المصرفي والتأميني والمؤسسات العامة وقطاع الدفاع. يسجل نظام الأتمتة المتقدم PLC الرقم التسلسلي لكل قرص، ويراقب عملية التدمير بالتوثيق بالفيديو وينشئ شهادة تدمير قائمة على blockchain. أقصى قدر من الأمان مع كابينة حماية مزدوجة ونظام قفل تلقائي وإنذار الوصول غير المصرح به.',
        paragraph3: 'تم تصميم MT Makina DATABER-D للبنوك وشركات التأمين وشركات الاتصالات والمؤسسات العامة ومراكز البيانات الكبيرة والصناعة الدفاعية. إمكانية أتمتة كاملة مع ناقل تغذية تلقائي وفاصل مغناطيسي ونظام جمع المعادن. ينتج شهادة رقمية برمز QR ومصادق عليها بـ blockchain لكل قرص مدمر. يلبي متطلبات المادة 17 من GDPR (الحق في النسيان) والامتثال لـ KVKK ومعايير SOC 2 Type II وPCI-DSS. مدعوم بضمان لمدة 3 سنوات ودعم فني على مدار الساعة طوال أيام الأسبوع.'
      }
    },
    'DATABER-T': {
      tr: {
        intro: 'DATABER-T harddisk imha makinesi, üç aşamalı ultra güvenli parçalama teknolojisi ile askeri ve kritik altyapılar için maksimum güvenlik seviyesinde veri imhası sağlayan premium çözümdür.',
        paragraph1: 'DATABER-T model, 11-30 kW ultra güçlü motor ile 250x250 mm ekstra geniş parçalama alanına sahip üç kademeli fiziksel veri imha sistemidir. Birinci aşamada diski 6-8 parçaya böler, ikinci aşamada bu parçaları 1-2 cm boyutuna parçalar, üçüncü aşamada granül haline getirerek (3-8 mm) askeri standardlarda veri kurtarma imkansızlığı garantisi verir. 2.5"-3.5" harddiskler, enterprise SSD/NVMe, sunucu RAID dizileri, tape sürücüler, askeri-endüstriyel depolama sistemleri ve tüm elektronik veri taşıyıcılarını işler. Saatte 200-400 disk ultra yüksek kapasite.',
        paragraph2: 'Üç aşamalı total destruction teknolojisi NSA/CSS EPL, DoD 5220.22-M (Enhanced), NIST 800-88 R1 Purge Level, NATO SECRET seviyesi ve Common Criteria EAL 4+ standartlarına uygundur. Askeri üsler, istihbarat teşkilatları, kritik altyapı operatörleri ve çok gizli devlet kurumları için onaylıdır. Siemens S7 PLC, AI destekli tam otomasyon, her parçacığın optik taraması, X-ray doğrulama, blockchain ve quantum-safe kriptografi ile imha sertifikası üretir. Her disk için video kayıt, seri numarası tracking, ağırlık ölçümü ve parçacık boyutu doğrulama ile %100 güvenlik garantisi.',
        paragraph3: 'MT Makina DATABER-T, askeri üsler, istihbarat servisleri, nükleer santral operatörleri, kritik devlet kurumları, defense contractors, çok uluslu bankalar ve tier 1 veri merkezleri için tasarlanmıştır. Tam otomatik hat entegrasyonu, robot kol besleme, multi-spektral tarama ve nanometre seviyesi parçacık analizi yapabilir. Her imha işlemi için notarized blockchain sertifika, video evidence package ve forensic analiz raporu üretir. NATO STANAG 4580, FIPS 140-3, CC EAL 5+ ve tüm askeri güvenlik standartlarına tam uyum. 5 yıl premium garanti, yerinde bakım ve 7/24 stratejik destek ile güvence altındadır.'
      },
      en: {
        intro: 'DATABER-T hard disk destroyer is a premium solution providing maximum security level data destruction for military and critical infrastructure with triple-stage ultra-secure shredding technology.',
        paragraph1: 'DATABER-T model is a three-stage physical data destruction system with 250x250 mm extra wide shredding area and 11-30 kW ultra-powerful motor. First stage breaks disk into 6-8 pieces, second stage shreds these pieces to 1-2 cm size, third stage granulates them (3-8 mm) guaranteeing military-standard impossibility of data recovery. Processes 2.5"-3.5" hard disks, enterprise SSD/NVMe, server RAID arrays, tape drives, military-industrial storage systems and all electronic data carriers. Ultra high capacity of 200-400 disks per hour.',
        paragraph2: 'Three-stage total destruction technology complies with NSA/CSS EPL, DoD 5220.22-M (Enhanced), NIST 800-88 R1 Purge Level, NATO SECRET level and Common Criteria EAL 4+ standards. Approved for military bases, intelligence agencies, critical infrastructure operators and classified government institutions. Siemens S7 PLC, AI-assisted full automation, optical scanning of each particle, X-ray verification, blockchain and quantum-safe cryptography produces destruction certificate. 100% security guarantee with video recording, serial number tracking, weight measurement and particle size verification for each disk.',
        paragraph3: 'MT Makina DATABER-T is designed for military bases, intelligence services, nuclear plant operators, critical government institutions, defense contractors, multinational banks and tier 1 data centers. Can perform full automatic line integration, robotic arm feeding, multi-spectral scanning and nanometer level particle analysis. Produces notarized blockchain certificate, video evidence package and forensic analysis report for each destruction operation. Full compliance with NATO STANAG 4580, FIPS 140-3, CC EAL 5+ and all military security standards. Secured with 5-year premium warranty, on-site maintenance and 24/7 strategic support.'
      },
      ru: {
        intro: 'DATABER-T уничтожитель жестких дисков - это премиальное решение, обеспечивающее максимальный уровень безопасности уничтожения данных для военных и критической инфраструктуры с трехступенчатой технологией ультра-безопасного измельчения.',
        paragraph1: 'Модель DATABER-T представляет собой трехступенчатую систему физического уничтожения данных со сверхширокой зоной измельчения 250x250 мм и ультрамощным двигателем 11-30 кВт. Первый этап разбивает диск на 6-8 частей, второй этап измельчает эти части до размера 1-2 см, третий этап гранулирует их (3-8 мм), гарантируя невозможность восстановления данных по военным стандартам. Обрабатывает жесткие диски 2,5"-3,5", корпоративные SSD/NVMe, серверные массивы RAID, ленточные накопители, военно-промышленные системы хранения и все электронные носители данных. Ультравысокая производительность 200-400 дисков в час.',
        paragraph2: 'Трехступенчатая технология полного уничтожения соответствует стандартам NSA/CSS EPL, DoD 5220.22-M (Enhanced), NIST 800-88 R1 Purge Level, уровню NATO SECRET и Common Criteria EAL 4+. Одобрено для военных баз, разведывательных агентств, операторов критической инфраструктуры и секретных правительственных учреждений. Siemens S7 PLC, полная автоматизация с поддержкой ИИ, оптическое сканирование каждой частицы, рентгеновская проверка, блокчейн и квантово-безопасная криптография создают сертификат уничтожения. 100% гарантия безопасности с видеозаписью, отслеживанием серийного номера, измерением веса и проверкой размера частиц для каждого диска.',
        paragraph3: 'MT Makina DATABER-T разработан для военных баз, разведывательных служб, операторов атомных станций, критических государственных учреждений, оборонных подрядчиков, транснациональных банков и центров обработки данных уровня 1. Может выполнять полную автоматическую интеграцию линии, подачу роботизированной рукой, мультиспектральное сканирование и анализ частиц на нанометровом уровне. Производит нотариально заверенный сертификат блокчейн, пакет видеодоказательств и отчет о судебно-медицинской экспертизе для каждой операции уничтожения. Полное соответствие NATO STANAG 4580, FIPS 140-3, CC EAL 5+ и всем военным стандартам безопасности. Обеспечено 5-летней премиум-гарантией, обслуживанием на месте и круглосуточной стратегической поддержкой.'
      },
      ar: {
        intro: 'آلة تدمير الأقراص الصلبة DATABER-T هي حل متميز يوفر أقصى مستوى أمان لتدمير البيانات للبنية التحتية ال��سكرية والحرجة بتقنية التقطيع ثلاثية المراحل فائقة الأمان.',
        paragraph1: 'طراز DATABER-T هو نظام تدمير بيانات مادي ثلاثي المراحل بمنطقة تقطيع واسعة للغاية 250×250 مم ومحرك فائق القوة 11-30 كيلووات. المرحلة الأولى تكسر القرص إلى 6-8 قطع، المرحلة الثانية تقطعها إلى حجم 1-2 سم، المرحلة الثالثة تحببها (3-8 مم) مما يضمن استحالة استعادة البيانات وفقًا للمعايير العسكرية. يعالج الأقراص الصلبة 2.5 بوصة-3.5 بوصة، وأقراص SSD/NVMe للمؤسسات، ومصفوفات RAID للخوادم، ومحركات الأشرطة، وأنظمة التخزين العسكرية الصناعية وجميع ناقلات البيانات الإلكترونية. سعة فائقة الارتفاع 200-400 قرص في الساعة.',
        paragraph2: 'تتوافق تقنية التدمير الكامل ثلاثية المراحل مع معايير NSA/CSS EPL وDoD 5220.22-M (محسّن) وNIST 800-88 R1 Purge Level ومستوى NATO SECRET وCommon Criteria EAL 4+. معتمد للقواعد العسكرية ووكالات الاستخبارات ومشغلي البنية التحتية الحرجة والمؤسسات الحكومية السرية. Siemens S7 PLC، أتمتة كاملة بمساعدة الذكاء الاصطناعي، مسح بصري لكل جسيم، تحقق بالأشعة السينية، blockchain وتشفير آمن كمومي ينتج شهادة تدمير. ضمان أمان 100% مع تسجيل فيديو وتتبع الرقم التسلسلي وقياس الوزن والتحقق من حجم الجسيمات لكل قرص.',
        paragraph3: 'تم تصميم MT Makina DATABER-T للقواعد العسكرية وخدمات الاستخبارات ومشغلي المحطات النووية والمؤسسات الحكومية الحرجة ومقاولي الدفاع والبنوك المتعددة الجنسيات ومراكز البيانات من المستوى الأول. يمكن إجراء تكامل خط أوتوماتيكي كامل وتغذية ذراع روبوتية ومسح متعدد الأطياف وتحليل جسيمات بمستوى النانومتر. ينتج شهادة blockchain موثقة ومجموعة أدلة فيديو وتقرير تحليل جنائي لكل عملية تدمير. امتثال كامل لـ NATO STANAG 4580 وFIPS 140-3 وCC EAL 5+ وجميع معايير الأمن العسكري. مضمون بضمان متميز لمدة 5 سنوات وصيانة في الموقع ودعم استراتيجي على مدار الساعة طوال أيام الأسبوع.'
      }
    }
  },
  'tree-root': {
    'TW-100': {
      tr: {
        intro: 'TW-100 ağaç kökü parçalama makinesi, orta ölçekli ağaç kökü ve odunsu atık işleme için tasarlanmış güçlü ve verimli bir çözümdür.',
        paragraph1: 'TW-100 model, 132-160 kW yüksek tork motor ile Ø 1000 mm parçalama alanı ve 500 mm rotor boyuna sahiptir. Çok bıçaklı rotor yapısı ve besleme dişleri sistemi ile ağaç kökleri, kalın dallar, hurda tahta, ahşap palet, MDF-sunta atıkları ve odunsu materyallerin etkili parçalanmasını sağlar. Yüksek tork - düşük hız kombinasyonu sayesinde zorlu malzemeleri hızla işler. Rotor aşırı yüklendiğinde besleme haznesinin otomatik ters dönmesi ile sıkışma önlenir ve kesintisiz çalışma garantisi verir.',
        paragraph2: 'Besleme haznesine monte edilmiş özel tasarım besleme dişleri, malzemelerin kontrollü şekilde rotora iletilmesini sağlar. Aşırı yüklenme durumunda otomatik ters çalışma sistemi devreye girer ve güvenli operasyon sağlar. Dayanıklı bıçak yapısı uzun ömürlü kullanım garantisi verir. Enerji verimli motor teknolojisi ile düşük işletme maliyeti sağlanır. Kullanıcı dostu kontrol paneli ile kolay operasyon ve bakım imkanı sunar.',
        paragraph3: 'MT Makina TW-100, orta ölçekli orman yönetimi, belediye park ve bahçe işletmeleri, ahşap işleme tesisleri ve geri dönüşüm merkezleri için ideal çözümdür. Parçalanan malzemeler biyokütle yakıt üretimi, kompozit malzeme hammaddesi, hayvan altlığı ve organik gübre olarak değerlendirilebilir. Opsiyonel dizel motor, mobil tasarım ve farklı elek seçenekleri ile ihtiyaca özel yapılandırılabilir. CE sertifikası ve 2 yıl garanti ile desteklenir.'
      },
      en: {
        intro: 'TW-100 tree root shredder is a powerful and efficient solution designed for medium-scale tree root and woody waste processing.',
        paragraph1: 'TW-100 model has Ø 1000 mm shredding area and 500 mm rotor length with 132-160 kW high-torque motor. Multi-blade rotor structure and feeding teeth system provide effective shredding of tree roots, thick branches, scrap wood, wooden pallets, MDF-chipboard waste and woody materials. Thanks to high torque - low speed combination, it quickly processes tough materials. Automatic reverse rotation of feeding hopper when rotor is overloaded prevents jamming and guarantees uninterrupted operation.',
        paragraph2: 'Specially designed feeding teeth mounted on feeding hopper ensure controlled feeding of materials to rotor. Automatic reverse operation system activates in case of overload and provides safe operation. Durable blade structure guarantees long-lasting use. Energy-efficient motor technology provides low operating costs. User-friendly control panel offers easy operation and maintenance.',
        paragraph3: 'MT Makina TW-100 is the ideal solution for medium-scale forest management, municipal park and garden operations, wood processing facilities and recycling centers. Shredded materials can be used as biomass fuel production, composite material raw materials, animal bedding and organic fertilizer. Can be configured to specific needs with optional diesel engine, mobile design and different screen options. Supported by CE certificate and 2-year warranty.'
      },
      ru: {
        intro: 'TW-100 измельчитель корней деревьев - это мощное и эффективное решение, разработанное для переработки корней деревьев и древесных отходов среднего масштаба.',
        paragraph1: 'Модель TW-100 имеет зону измельчения Ø 1000 мм и длину ротора 500 мм с высокомоментным двигателем 132-160 кВт. Многолопастная конструкция ротора и система подающих зубьев обеспечивают эффективное измельчение корней деревьев, толстых ветвей, обрезков древесины, деревянных поддонов, отходов МДФ-ДСП и древесных материалов. Благодаря комбинации высокого крутящего момента и низкой скорости быстро обрабатывает прочные материалы. Автоматическое обратное вращение загрузочного бункера при перегрузке ротора предотвращает заклинивание и гарантирует бесперебойную работу.',
        paragraph2: 'Специально разработанные подающие зубья, установленные на загрузочном бункере, обеспечивают контролируемую подачу материалов к ротору. Система автоматической реверсивной работы активируется в случае перегрузки и обеспечивает безопасную работу. Прочная конструкция ножей гарантирует долговечное использование. Энергоэффективная технология двигателя обеспечивает низкие эксплуатационные расходы. Удобная панель управления обеспечивает легкую эксплуатацию и обслуживание.',
        paragraph3: 'MT Makina TW-100 - идеальное решение для управления лесами среднего масштаба, муниципальных парковых и садовых хозяйств, деревообрабатывающих предприятий и центров переработки. Измельченные материалы могут использоваться для производства биомассового топлива, сырья для композитных материалов, подстилки для животных и органических удобрений. Может быть настроен в соответствии с конкретными потребностями с опциональным дизельным двигателем, мобильной конструкцией и различными вариантами сит. Поддерживается сертификатом CE и 2-летней гарантией.'
      },
      ar: {
        intro: 'آلة تقطيع جذور الأشجار TW-100 هي حل قوي وفعال مصمم لمعالجة جذور الأشجار والنفايات الخشبية متوسطة الحجم.',
        paragraph1: 'يتميز طراز TW-100 بمنطقة تقطيع Ø 1000 مم وطول دوار 500 مم مع محرك عالي العزم 132-160 كيلووات. يوفر هيكل الدوار متعدد الشفرات ونظام أسنان التغذية تقطيعًا فعالاً لجذور الأشجار والفروع السميكة وخردة الخشب والمنصات الخشبية ونفايات MDF-اللوح الحبيبي والمواد الخشبية. بفضل مزيج العزم العالي والسرعة المنخفضة، تعالج بسرعة المواد الصلبة. يمنع الدوران العكسي التلقائي لقادوس التغذية عند تحميل الدوار الزائد الانحشار ويضمن تشغيلًا مستمرًا.',
        paragraph2: 'تضمن أسنان التغذية المصممة خصيصًا والمركبة على قادوس التغذية التغذية المتحكم فيها للمواد إلى الدوار. ينشط نظام التشغيل العكسي التلقائي في حالة الحمل الزائد ويوفر تشغيلًا آمنًا. يضمن هيكل الشفرة المتين استخدامًا طويل الأمد. توفر تقنية المحرك الموفرة للطاقة تكاليف تشغيل منخفضة. توفر لوحة التحكم سهلة الاستخدام تشغيلًا وصيانة سهلة.',
        paragraph3: 'MT Makina TW-100 هو الحل الأمثل لإدارة الغابات متوسطة الحجم وعمليات الحدائق والمتنزهات البلدية ومرافق معالجة الخشب ومراكز إعادة التدوير. يمكن استخدام المواد المقطعة كإنتاج وقود الكتلة الحيوية والمواد الخام للمواد المركبة وفراش للحيوانات والأسمدة العضوية. يمكن تكوينه وفقًا للاحتياجات المحددة مع محرك ديزل اختياري وتصميم محمول وخيارات شاشة مختلفة. مدعوم بشهادة CE وضمان لمدة عامين.'
      }
    },
    'TW-150': {
      tr: {
        intro: 'TW-150 ağaç kökü parçalama makinesi, büyük ölçekli ağaç kökü ve ağır odunsu malzeme işleme için yüksek performans sunan profesyonel bir sistemdir.',
        paragraph1: 'TW-150 model, 160-220 kW güçlü motor ile Ø 1500 mm geniş parçalama alanı ve 800 mm rotor boyuna sahiptir. Güçlendirilmiş çok bıçaklı rotor ve çift sıra besleme dişleri sistemi ile kalın ağaç kökleri, büyük çaplı gövdeler, sanayi palet atıkları, ağır MDF-kontrplak kalıntıları ve sert odun türlerinin parçalanmasında üstün performans gösterir. Yüksek kapasiteli işleme ile saatte büyük miktarda malzeme parçalayabilir. Hidrolik destekli besleme sistemi ağır malzemelerin kolay yüklenmesini sağlar.',
        paragraph2: 'Gelişmiş PLC otomasyon sistemi, gerçek zamanlı yük izleme ve otomatik ters çalışma fonksiyonu ile operatör müdahalesini minimize eder. Takviyeli besleme haznesi ve özel alaşımlı bıçaklar uzun ömürlü kullanım garantisi verir. 800 mm rotor boyu ve 28-32 adet premium kalite bıçak ile homojen parçalama sağlar. Otomatik yağlama sistemi bakım maliyetlerini azaltır. Toz bastırma sistemi ile çevre dostu çalışma imkanı sunar.',
        paragraph3: 'MT Makina TW-150, büyük orman işletmeleri, endüstriyel ahşap geri dönüşüm tesisleri, belediye katı atık yönetim merkezleri ve biyoenerji üretim tesisleri için ideal çözümdür. Opsiyonel mobil paletli tasarım ile farklı lokasyonlarda kullanılabilir. Rotor soğutma sistemi, farklı ölçülerde elek ve besleme konveyörü seçenekleri ile tam otomatik hat kurulabilir. Parçalanan materyaller pellet yakıt, OSB-MDF üretimi ve enerji eldesi için kullanılabilir. CE ve ISO 9001 sertifikaları ile desteklenir.'
      },
      en: {
        intro: 'TW-150 tree root shredder is a professional system offering high performance for large-scale tree root and heavy woody material processing.',
        paragraph1: 'TW-150 model has Ø 1500 mm wide shredding area and 800 mm rotor length with 160-220 kW powerful motor. Reinforced multi-blade rotor and double-row feeding teeth system show superior performance in shredding thick tree roots, large diameter trunks, industrial pallet waste, heavy MDF-plywood remnants and hardwood species. Can shred large amounts of material per hour with high-capacity processing. Hydraulically assisted feeding system facilitates loading of heavy materials.',
        paragraph2: 'Advanced PLC automation system minimizes operator intervention with real-time load monitoring and automatic reverse function. Reinforced feeding hopper and special alloy blades guarantee long-lasting use. 800 mm rotor length and 28-32 premium quality blades provide homogeneous shredding. Automatic lubrication system reduces maintenance costs. Offers environmentally friendly operation with dust suppression system.',
        paragraph3: 'MT Makina TW-150 is the ideal solution for large forest operations, industrial wood recycling facilities, municipal solid waste management centers and bioenergy production facilities. Can be used in different locations with optional mobile tracked design. Full automatic line can be established with rotor cooling system, screens in different sizes and feeding conveyor options. Shredded materials can be used for pellet fuel, OSB-MDF production and energy generation. Supported by CE and ISO 9001 certificates.'
      },
      ru: {
        intro: 'TW-150 измельчитель корней деревьев - это профессиональная система, обеспечивающая высокую производительность для крупномасштабной обработки корней деревьев и тяжелых древесных материалов.',
        paragraph1: 'Модель TW-150 имеет широкую зону измельчения Ø 1500 мм и длину ротора 800 мм с мощным двигателем 160-220 кВт. Усиленный многолопастный ротор и система подающих зубьев с двойным рядом показывают превосходную производительность при измельчении толстых корней деревьев, стволов большого диаметра, промышленных отходов поддонов, тяжелых остатков МДФ-фанеры и твердых пород древесины. Может измельчать большое количество материала в час при высокопроизводительной обработке. Гидравлическая система подачи облегчает загрузку тяжелых материалов.',
        paragraph2: 'Усовершенствованная система автоматизации ПЛК минимизирует вмешательство оператора с мониторингом нагрузки в реальном времени и автоматической функцией реверса. Усиленный загрузочный бункер и ножи из специального сплава гарантируют долговечное использование. Длина ротора 800 мм и 28-32 ножа премиум-качества обеспечивают однородное измельчение. Система автоматической смазки снижает расходы на обслуживание. Предлагает экологически чистую работу с системой пылеподавления.',
        paragraph3: 'MT Makina TW-150 - идеальное решение для крупных лесных хозяйств, промышленных предприятий по переработке древесины, муниципальных центров управления твердыми отходами и предприятий по производству биоэнергии. Может использоваться в разных местах с опциональной мобильной гусеничной конструкцией. Полная автоматическая линия может быть установлена с системой охлаждения ротора, ситами разных размеров и опциями конвейера подачи. Измельченные материалы могут использоваться для производства пеллетного топлива, производства OSB-МДФ и выработки энергии. Поддерживается сертификатами CE и ISO 9001.'
      },
      ar: {
        intro: 'آلة تقطيع جذور الأشجار TW-150 هي نظام احترافي يوفر أداءً عاليًا لمعالجة جذور الأشجار والمواد الخشبية الثقيلة على نطاق واسع.',
        paragraph1: 'يتميز طراز TW-150 بمنطقة تقطيع واسعة Ø 1500 مم وطول دوار 800 مم مع محرك قوي 160-220 كيلووات. يُظهر الدوار متعدد الشفرات المعزز ونظام أسنان التغذية ذو الصف المزدوج أداءً متفوقًا في تقطيع جذور الأشجار السميكة وجذوع القطر الكبير ونفايات المنصات الصناعية وبقايا MDF-الخشب الرقائقي الثقيلة وأنواع الخشب الصلب. يمكن تقطيع كميات كبيرة من المواد في الساعة مع معالجة عالية السعة. يسهل نظام التغذية بالمساعدة الهيدروليكية تحميل المواد الثقيلة.',
        paragraph2: 'يقلل نظام الأتمتة المتقدم PLC من تدخل المشغل مع مراقبة الحمل في الوقت الفعلي ووظيفة الرجوع التلقائي. يضمن قادوس التغذية المعزز والشفرات من السبائك الخاصة استخدامًا طويل الأمد. يوفر طول الدوار 800 مم و28-32 شفرة عالية الجودة تقطيعًا متجانسًا. يقلل نظام التشحيم التلقائي من تكاليف الصيانة. يوفر تشغيلًا صديقًا للبيئة مع نظام قمع الغبار.',
        paragraph3: 'MT Makina TW-150 هو الحل الأمثل لعمليات الغابات الكبيرة ومرافق إعادة تدوير الخشب الصناعية ومراكز إدارة النفايات الصلبة البلدية ومرافق إنتاج الطاقة الحيوية. يمكن استخدامه في مواقع مختلفة مع تصميم مجنزر متنقل اختياري. يمكن إنشاء خط أوتوماتيكي كامل مع نظام تبريد الدوار والشاشات بأحجام مختلفة وخيارات الناقل المغذي. يمكن استخدام المواد المقطعة لوقود الحبيبات وإنتاج OSB-MDF وتوليد الطاقة. مدعوم بشهادات CE وISO 9001.'
      }
    },
    'TW-200': {
      tr: {
        intro: 'TW-200 ağaç kökü parçalama makinesi, endüstriyel ölçekte ultra yüksek kapasiteli ağaç kökü ve ağır odun işleme için maksimum güç sunan premium bir çözümdür.',
        paragraph1: 'TW-200 model, 220-315 kW ultra güçlü motor ile Ø 2000 mm ekstra geniş parçalama alanı ve 1000 mm uzun rotor boyuna sahiptir. Ağır hizmet tipi çok bıçaklı rotor sistemi ve hidrolik destekli çift besleme haznesi ile dev ağaç kökleri, kalın gövdeler (Ø 80+ cm), endüstriyel ahşap atık blokları, hurda ahşap yapılar, demiryolu traversleri ve en sert odun türlerinin parçalanmasında olağanüstü performans gösterir. Saatte 8-15 ton işleme kapasitesi ile büyük ölçekli projeler için idealdir. Çift hidrolik itici sistem ile sürekli besleme garantisi verir.',
        paragraph2: 'Siemens PLC tabanlı endüstri 4.0 otomasyon sistemi, SCADA entegrasyonu, uzaktan izleme ve bakım takip modülleri ile donatılmıştır. 1000 mm ultra uzun rotor, 36-40 adet ekstra kalın (30 mm) premium bıçak ve otomatik bıçak boşluk ayarı ile maksimum verimlilik sağlar. Çift otomatik yağlama sistemi, rotor soğutma ünitesi ve toz bastırma sistemi ile 7/24 kesintisiz çalışma kapasitesi. Gelişmiş sensör sistemi ile aşırı yüklenme, titreşim ve sıcaklık kontrolü yapılır.',
        paragraph3: 'MT Makina TW-200, mega orman yönetim projeleri, büyük biyoenerji santralleri, endüstriyel ahşap geri dönüşüm kompleksleri ve devlet kurumlarının ağır hizmet uygulamaları için turnkey çözümdür. Mobil paletli/tekerlekli tasarım seçeneği ile farklı sahalarda kullanılabilir. Tam otomatik hat entegrasyonu ile besleme konveyörü, manyetik seperatör, farklı elek sistemleri ve çıkış bandı entegre edilebilir. Parçalanan çıktılar biyokütle yakıt pelleti, endüstriyel enerji üretimi, OSB-MDF hammaddesi ve organik gübre üretimi için kullanılabilir. Tüm AB güvenlik standartları, CE, ISO 9001, ISO 14001 sertifikaları ve 3 yıl premium garanti ile güvence altındadır.'
      },
      en: {
        intro: 'TW-200 tree root shredder is a premium solution offering maximum power for industrial-scale ultra-high capacity tree root and heavy wood processing.',
        paragraph1: 'TW-200 model has Ø 2000 mm extra wide shredding area and 1000 mm long rotor length with 220-315 kW ultra-powerful motor. Heavy-duty multi-blade rotor system and hydraulically assisted dual feeding hopper show extraordinary performance in shredding giant tree roots, thick trunks (Ø 80+ cm), industrial wood waste blocks, scrap wood structures, railway sleepers and hardest wood species. Ideal for large-scale projects with 8-15 ton/hour processing capacity. Dual hydraulic pusher system guarantees continuous feeding.',
        paragraph2: 'Equipped with Siemens PLC-based Industry 4.0 automation system, SCADA integration, remote monitoring and maintenance tracking modules. 1000 mm ultra-long rotor, 36-40 extra-thick (30 mm) premium blades and automatic blade gap adjustment provide maximum efficiency. Dual automatic lubrication system, rotor cooling unit and dust suppression system enable 24/7 uninterrupted operation capacity. Advanced sensor system performs overload, vibration and temperature control.',
        paragraph3: 'MT Makina TW-200 is a turnkey solution for mega forest management projects, large bioenergy plants, industrial wood recycling complexes and heavy-duty applications of government institutions. Can be used in different sites with mobile tracked/wheeled design option. With full automatic line integration, feeding conveyor, magnetic separator, different screen systems and output belt can be integrated. Shredded outputs can be used for biomass fuel pellets, industrial energy production, OSB-MDF raw materials and organic fertilizer production. Secured by all EU safety standards, CE, ISO 9001, ISO 14001 certificates and 3-year premium warranty.'
      },
      ru: {
        intro: 'TW-200 измельчитель корней деревьев - это премиальное решение, обеспечивающее максимальную мощность для промышленной обработки корней деревьев и тяжелой древесины ультра-высокой производительности.',
        paragraph1: 'Модель TW-200 имеет сверхширокую зону измельчения Ø 2000 мм и длинный ротор 1000 мм с ультрамощным двигателем 220-315 кВт. Роторная система для тяжелых условий эксплуатации с несколькими лопастями и двойной загрузочный бункер с гидравлической поддержкой показывают выдающуюся производительность при измельчении гигантских корней деревьев, толстых стволов (Ø 80+ см), промышленных блоков древесных отходов, конструкций из лома древесины, железнодорожных шпал и самых твердых пород древесины. Идеально подходит для крупномасштабных проектов с производительностью 8-15 тонн/час. Двойная гидравлическая толкающая система гарантирует непрерывную подачу.',
        paragraph2: 'Оснащен системой автоматизации Индустрии 4.0 на базе Siemens PLC, интеграцией SCADA, удаленным мониторингом и модулями отслеживания обслуживания. Ультрадлинный ротор 1000 мм, 36-40 сверхтолстых (30 мм) ножей премиум-класса и автоматическая регулировка зазора ножей обеспечивают максимальную эффективность. Двойная система автоматической смазки, блок охлаждения ротора и система пылеподавления обеспечивают круглосуточную бесперебойную работу. Усовершенствованная сенсорная система выполняет контроль перегрузки, вибрации и температуры.',
        paragraph3: 'MT Makina TW-200 - это комплексное решение для мега проектов управления лесами, крупных биоэнергетических заводов, промышленных комплексов переработки древесины и тяжелых применений государственных учреждений. Может использоваться на разных площадках с опцией мобильной гусеничной/колесной конструкции. С полной автоматической интеграцией линии может быть интегрирован конвейер подачи, магнитный сепаратор, различные системы сит и выходная лента. Измельченные отходы могут использоваться для производства топливных пеллет из биомассы, промышленного производства энергии, сырья OSB-МДФ и производства органических удобрений. Обеспечено всеми стандартами безопасности ЕС, сертификатами CE, ISO 9001, ISO 14001 и 3-летней премиум-гарантией.'
      },
      ar: {
        intro: 'آلة تقطيع جذور الأشجار TW-200 هي حل متميز يوفر أقصى قدر من القوة لمعالجة جذور الأشجار والخشب الثقيل عالي السعة على النطاق الصناعي.',
        paragraph1: 'يتميز طراز TW-200 بمنطقة تقطيع واسعة للغاية Ø 2000 مم وطول دوار طويل 1000 مم مع محرك فائق القوة 220-315 كيلووات. يُظهر نظام الدوار متعدد الشفرات للخدمة الشاقة وقادوس التغذية المزدوج بمساعدة هيدروليكية أداءً استثنائيًا في تقطيع جذور الأشجار العملاقة وجذوع سميكة (Ø 80+ سم) وكتل نفايات الخشب الصناعية وهياكل خشب الخردة وعوارض السكك الحديدية وأصلب أنواع الخشب. مثالي للمشاريع واسعة النطاق بسعة معالجة 8-15 طن/ساعة. يضمن نظام الدفع الهيدروليكي المزدوج التغذية المستمرة.',
        paragraph2: 'مجهز بنظام أتمتة الصناعة 4.0 القائم على Siemens PLC وتكامل SCADA ومراقبة عن بعد ووحدات تتبع الصيانة. يوفر الدوار فائق الطول 1000 مم و36-40 شفرة فائقة السُمك (30 مم) ممتازة الجودة وضبط فجوة الشفرة التلقائي أقصى قدر من الكفاءة. يتيح نظام التشحيم التلقائي المزدوج ووحدة تبريد الدوار ونظام قمع الغبار قدرة تشغيل مستمر على مدار الساعة طوال أيام الأسبوع. يؤدي نظام الاستشعار المتقدم تحكم الحمل الزائد والاهتزاز ودرجة الحرارة.',
        paragraph3: 'MT Makina TW-200 هو حل تسليم مفتاح لمشاريع إدارة الغابات الضخمة ومحطات الطاقة الحيوية الكبيرة ومجمعات إعادة تدوير الخشب الصناعية والتطبيقات الثقيلة للمؤسسات الحكومية. يمكن استخدامه في مواقع مختلفة مع خيار التصميم المتنقل المجنزر/بالعجلات. مع تكامل خط أوتوماتيكي كامل، يمكن دمج ناقل التغذية والفاصل المغناطيسي وأنظمة الشاشة المختلفة وحزام الإخراج. يمكن استخدام المخرجات المقطعة لحبيبات وقود الكتلة الحيوية وإنتاج الطاقة الصناعية والمواد الخام OSB-MDF وإنتاج الأسمدة العضوية. مضمون بجميع معايير السلامة الأوروبية وشهادات CE وISO 9001 وISO 14001 وضمان متميز لمدة 3 سنوات.'
      }
    }
  },
  'wood': {
    'TSY-100': {
      tr: {
        intro: 'TSY-100 yatay ağaç parçalama makinesi, 1000 mm rotor boyu ve 55-90 kW (2X) çift motor gücü ile orta ölçekli işletmeler için güçlü bir çözümdür.',
        paragraph1: 'TSY-100 model, 55-90 kW (2X) çift motor konfigürasyonu ile ağaç dalları, hurma lifli atıklar, bahçe budama artıkları ve odunsu malzemelerin güçlü parçalanmasını sağlar. 1000 mm rotor boyu ile orta ölçekli tarım kooperatifleri, belediye park bakım işletmeleri, biyokütle yakıt üretim tesisleri için ideal performans sunar. Yatay beslemeli hidrolik piston sistemi, uzun dalların kolayca işlenmesini sağlar.',
        paragraph2: 'TSY-100, özel tasarım rotor bıçakları ile lifli ve nemli malzemelerde yüksek performans gösterir. PLC kontrollü akıllı besleme sistemi, otomatik yük algılama ve ters çalışma fonksiyonu ile sıkışmaları önler. Değiştirilebilir elek sistemi ile farklı çıkış boyutları elde edilir. Hidrolik açılan elek sistemi bakım süresini minimize eder.',
        paragraph3: 'MT Makina TSY-100, çift motorlu tasarım standardında gelir. Opsiyonel özellikler: Kayış kasnaklı hidrolik kaplin, volanlı tasarım, rotor soğutma sistemi, otomatik yağlama ünitesi, farklı ölçülerde elek, hidrolik açılan elek sistemi, çıkış için helezon/konveyör/taşıma fanı uygulamaları. CE sertifikalı.'
      },
      en: {
        intro: 'TSY-100 horizontal wood shredder is an excellent entry-level solution for small and medium-sized businesses.',
        paragraph1: 'TSY-100 model provides efficient shredding of tree branches, palm fibrous waste, garden pruning residues and woody materials up to 20 cm diameter with 37-55 kW motor power. With a processing capacity of 2-3 tons per hour, it is ideal for small-scale agricultural cooperatives, municipal park maintenance operations, small biomass fuel production facilities and local farms. The horizontal feed hydraulic piston system allows easy processing of long branches and maximizes operator safety.',
        paragraph2: 'Despite its compact structure, TSY-100 offers industrial durability and shows high performance in fibrous and moist materials with special design rotor blades with 2-3 mm wall thickness. The PLC-controlled intelligent feeding system prevents jamming and ensures uninterrupted production with automatic load detection and reverse function. Different output sizes can be obtained with the replaceable 30-50 mm screen system. The hydraulically opening screen box minimizes maintenance time.',
        paragraph3: 'MT Makina TSY-100 wood shredder can be installed even in limited spaces thanks to its compact dimensions (approximately 2.5x1.8x2.2 m). Higher efficiency is achieved with dual motor design option. Automatic lubrication unit, rotor cooling system and dust suppression spray system are offered optionally. It is an economical and reliable solution for palm tree shredding, palm branch processing, garden waste recycling and small-scale biomass fuel production. CE certified, 2 years warranty.'
      },
      ru: {
        intro: 'Горизонтальный измельчитель древесины TSY-100 - отличное начальное решение для малых и средних предприятий.',
        paragraph1: 'Модель TSY-100 обеспечивает эффективное измельчение веток деревьев, волокнистых отходов пальм, садовых обрезков и древесных материалов диаметром до 20 см при мощности двигателя 37-55 кВт. При производительности 2-3 тонны в час идеально подходит для мелкомасштабных сельскохозяйственных кооперативов, муниципальных парковых служб, небольших заводов по производству биомассового топлива и местных ферм. Горизонтальная система подачи с гидравлическим поршнем обеспечивает легкую обработку длинных веток и максимальную безопасность оператора.',
        paragraph2: 'Несмотря на компактную конструкцию, TSY-100 обладает промышленной прочностью и показывает высокую производительность на волокнистых и влажных материалах благодаря специальным роторным ножам толщиной стенки 2-3 мм. Интеллектуальная система подачи с ПЛК-управлением предотвращает заклинивание и обеспечивает бесперебойное производство с автоматическим определением нагрузки и функцией реверса. Различные размеры на выходе можно получить с заменяемой системой сит 30-50 мм. Гидравлически открывающийся ящик сита минимизирует время обслуживания.',
        paragraph3: 'Измельчитель древесины MT Makina TSY-100 может быть установлен даже в ограниченном пространстве благодаря компактным размерам (примерно 2.5x1.8x2.2 м). Более высокая эффективность достигается с опцией двухмоторной конструкции. Автоматический блок смазки, система охлаждения ротора и система подавления пыли предлагаются опционально. Это экономичное и надежное решение для измельчения пальм, обработки пальмовых веток, переработки садовых отходов и мелкомасштабного производства биомассового топлива. Сертифицировано CE, гарантия 2 года.'
      },
      ar: {
        intro: 'آلة تقطيع الخشب الأفقية TSY-100 هي حل ممتاز للمبتدئين للشركات الصغيرة والمتوسطة.',
        paragraph1: 'يوفر طراز TSY-100 تقطيعًا فعالاً لأغصان الأشجار ونفايات النخيل الليفية وبقايا تقليم الحدائق والمواد الخشبية بقطر يصل إلى 20 سم بقوة محرك 37-55 كيلووات. بسعة معالجة 2-3 طن في الساعة، فهو مثالي للتعاونيات الزراعية صغيرة النطاق وعمليات صيانة المتنزهات البلدية ومرافق إنتاج وقود الكتلة الحيوية الصغيرة والمزارع المحلية. يتيح نظام المكبس الهيدروليكي للتغذية الأفقية معالجة سهلة للفروع الطويلة ويزيد من سلامة المشغل إلى أقصى حد.',
        paragraph2: 'على الرغم من هيكلها المدمج، تقدم TSY-100 متانة صناعية وتظهر أداءً عاليًا في المواد الليفية والرطبة مع شفرات دوار ذات تصميم خاص بسمك جدار 2-3 مم. يمنع نظام التغذية الذكي المتحكم فيه بواسطة PLC الانحشار ويضمن إنتاجًا مستمرًا مع الكشف التلقائي عن الحمل ووظيفة الرجوع. يمكن الحصول على أحجام مخرجات مختلفة مع نظام الشاشة القابل للاستبدال 30-50 مم. يقلل صندوق الشاشة الذي يفتح هيدروليكيًا من وقت الصيانة إلى الحد الأدنى.',
        paragraph3: 'يمكن تركيب آلة تقطيع الخشب MT Makina TSY-100 حتى في المساحات المحدودة بفضل أبعادها المدمجة (تقريبًا 2.5×1.8×2.2 م). يتم تحقيق كفاءة أعلى مع خيار التصميم ثنائي المحرك. يتم تقديم وحدة التشحيم التلقائي ونظام تبريد الدوار ونظام قمع الغبار بالرش اختياريًا. إنه حل اقتصادي وموثوق لتقطيع أشجار النخيل ومعالجة فروع النخيل وإعادة تدوير نفايات الحدائق وإنتاج وقود الكتلة الحيوية على نطاق صغير. معتمد CE، ضمان لمدة عامين.'
      }
    },
    'TSY-150': {
      tr: {
        intro: 'TSY-150 yatay ağaç parçalama makinesi, 1500 mm rotor boyu ve 75-110 kW (2X) yüksek motor gücü ile endüstriyel ölçekte üstün performans sağlar.',
        paragraph1: 'TSY-150 model, 75-110 kW (2X) güçlü çift motor ile ağaç gövdeleri, kalın dallar, hurma kütükleri ve yoğun odunsu atıkların hızlı parçalanmasını sağlar. 1500 mm rotor boyu ile büyük ölçekli tarım işletmeleri, biyokütle enerji santralleri, mobilya fabrikası atık geri dönüşümü ve odun pelet üretim tesisleri için mükemmel bir çözümdür. Çift hidrolik pistonlu besleme sistemi, ağır ve uzun malzemelerin güvenli işlenmesini garanti eder.',
        paragraph2: 'TSY-150, gelişmiş rotor tasarımı ve yüksek kaliteli çelik bıçaklar ile sert ahşap türleri, çam, meşe ve tropik ağaç türlerinde üstün performans gösterir. PLC tabanlı otomasyon sistemi, gerçek zamanlı yük izleme ve akıllı ters çalışma algoritması ile enerji verimliliği sağlar. Hidrolik açılır elek kasası ve hızlı bakım sistemi ile operasyonel süre minimumda tutulur.',
        paragraph3: 'MT Makina TSY-150, çift motorlu tasarım ile standart olarak gelir. Opsiyonel özellikler: Kayış kasnaklı hidrolik kaplin, volanlı tasarım, rotor soğutma sistemi, otomatik yağlama ünitesi, farklı ölçülerde elek seçenekleri, hidrolik açılan elek sistemi, çıkış için helezon/konveyör/taşıma fanı entegrasyonu. Hurma çiftlikleri, zeytinlik bakımı, orman işletmeleri ve endüstriyel biomass tesisleri için güvenilir çözüm. CE sertifikalı.'
      },
      en: {
        intro: 'TSY-150 horizontal wood shredder is a professional solution offering high capacity and efficiency for medium-scale industrial facilities.',
        paragraph1: 'TSY-150 model provides fast shredding of tree trunks, thick branches, palm logs and dense woody waste up to 30 cm diameter with 55-75 kW powerful motor. With a processing capacity of 4-6 tons per hour, it is ideal for medium-scale biomass power plants, large agricultural operations, furniture factory waste recycling and wood pellet production facilities. The dual hydraulic piston feeding system guarantees safe and continuous processing of heavy and long materials.',
        paragraph2: 'With advanced rotor design and 3 mm thick Premium quality steel blades, TSY-150 shows superior performance in hard wood types, pine, oak and tropical tree species. Siemens PLC-based automation system reduces energy consumption by 25% with real-time load monitoring, automatic speed adjustment and intelligent reverse algorithm. Maintenance time is minimal with hydraulically opening screen box and quick blade change system. With 40-80 mm replaceable screen options, pellet production, biochar raw material and garden mulch production can be made.',
        paragraph3: 'MT Makina TSY-150 wood shredder provides long-lasting performance even in heavy use with durable steel construction and vibration-preventing infrastructure. Energy efficiency is increased with flywheel design option. Rotor cooling system, automatic lubrication unit, dust suppression fan system and output conveyor integration are available. It is a highly efficient and reliable solution for palm farms, olive grove maintenance, forestry operations and industrial biomass facilities. CE and ISO 9001 certified, 3 years warranty.'
      },
      ru: {
        intro: 'Горизонтальный измельчитель древесины TSY-150 - профессиональное решение, обеспечивающее высокую производительность и эффективность для средних промышленных объектов.',
        paragraph1: 'Модель TSY-150 обеспечивает быстрое измельчение стволов деревьев, толстых веток, бревен пальм и плотных древесных отходов диаметром до 30 см с мощным двигателем 55-75 кВт. При производительности 4-6 тонн в час идеально подходит для средних биомассовых электростанций, крупных сельскохозяйственных операций, переработки отходов мебельных фабрик и заводов по производству древесных пеллет. Система подачи с двумя гидравлическими поршнями гарантирует безопасную и непрерывную обработку тяжелых и длинных материалов.',
        paragraph2: 'Благодаря усовершенствованной конструкции ротора и стальным ножам премиум-класса толщиной 3 мм, TSY-150 показывает превосходную производительность на твердых породах дерева, сосне, дубе и тропических видах деревьев. Система автоматизации на базе Siemens PLC снижает энергопотребление на 25% благодаря мониторингу нагрузки в реальном времени, автоматической регулировке скорости и интеллектуальному алгоритму реверса. Время обслуживания минимально благодаря гидравлически открывающемуся ящику сита и системе быстрой замены ножей. С заменяемыми опциями сит 40-80 мм можно производить пеллеты, сырье для биоугля и садовую мульчу.',
        paragraph3: 'Измельчитель древесины MT Makina TSY-150 обеспечивает долговечную работу даже при интенсивном использовании благодаря прочной стальной конструкции и виброгасящей инфраструктуре. Энергоэффективность повышается с опцией конструкции с маховиком. Доступны система охлаждения ротора, автоматический блок смазки, система подавления пыли с вентилятором и интеграция выходного конвейера. Это высокоэффективное и надежное решение для пальмовых ферм, обслуживания оливковых рощ, лесных хозяйств и промышленных биомассовых объектов. Сертифицировано CE и ISO 9001, гарантия 3 года.'
      },
      ar: {
        intro: 'آلة تقطيع الخشب الأفقية TSY-150 هي حل احترافي يوفر سعة عالية وكفاءة للمرافق الصناعية متوسطة الحجم.',
        paragraph1: 'يوفر طراز TSY-150 تقطيعًا سريعًا لجذوع الأشجار والفروع السميكة وجذوع النخيل والنفايات الخشبية الكثيفة بقطر يصل إلى 30 سم بمحرك قوي 55-75 كيلووات. بسعة معالجة 4-6 طن في الساعة، فهو مثالي لمحطات طاقة الكتلة الحيوية متوسطة الحجم والعمليات الزراعية الكبيرة وإعادة تدوير نفايات مصانع الأثاث ومرافق إنتاج حبيبات الخشب. يضمن نظام التغذية ذو المكبس الهيدروليكي المزدوج معالجة آمنة ومستمرة للمواد الثقيلة والطويلة.',
        paragraph2: 'مع تصميم دوار متقدم وشفرات فولاذية ممتازة الجودة بسمك 3 مم، يُظهر TSY-150 أداءً فائقًا في أنواع الخشب الصلب والصنوبر والبلوط وأنواع الأشجار الاستوائية. يقلل نظام الأتمتة القائم على Siemens PLC من استهلاك الطاقة بنسبة 25٪ مع مراقبة الحمل في الوقت الفعلي وضبط السرعة التلقائي وخوارزمية عكسية ذكية. وقت الصيانة في حده الأدنى مع صندوق الشاشة الذي يفتح هيدروليكيًا ونظام تغيير الشفرة السريع. مع خيارات الشاشة القابلة للاستبدال 40-80 مم، يمكن إنتاج الحبيبات ومواد الفحم الحيوي الخام والنشارة الحديقة.',
        paragraph3: 'توفر آلة تقطيع الخشب MT Makina TSY-150 أداءً طويل الأمد حتى في الاستخدام المكثف مع بناء فولاذي متين وبنية تحتية تمنع الاهتزاز. تزداد كفاءة الطاقة مع خيار تصميم دولاب الموازنة. تتوفر أنظمة تبريد الدوار ووحدة التشحيم التلقائي ونظام قمع الغبار بالمروحة وتكامل ناقل الإخراج. إنه حل فعال للغاية وموثوق به لمزارع النخيل وصيانة بساتين الزيتون وعمليات الغابات والمرافق الصناعية للكتلة الحيوية. معتمد CE و ISO 9001، ضمان 3 سنوات.'
      }
    },
    'TSY-200': {
      tr: {
        intro: 'TSY-200 yatay ağaç parçalama makinesi, 2000 mm rotor boyu ve 90-200 kW (2X) ultra güçlü motorları ile endüstriyel ölçekte maksimum kapasite sağlar.',
        paragraph1: 'TSY-200 model, 90-200 kW (2X) ultra güçlü çift motor ile ağaç kütükleri, kalın gövdeler, hurma ağacı gövdeleri ve en sert odunsu atıkların yoğun işlenmesini sağlar. 2000 mm rotor boyu ile büyük biyokütle enerji santralleri, endüstriyel odun pelet fabrikaları, kereste fabrikası atık yönetimi ve geniş ölçekli orman işletmeleri için ideal çözümdür. Üçlü hidrolik pistonlu besleme sistemi ve geniş besleme ağzı, çok büyük malzemelerin kesintisiz işlenmesini garanti eder.',
        paragraph2: 'Premium segment TSY-200, özel alaşımlı çelik rotor bıçakları ve takviyeli rotor gövdesi ile tropik sert ağaçlar, egzotik ahşap türleri ve en yoğun odunsu malzemelerde mükemmel kesim performansı gösterir. Gelişmiş PLC ve HMI dokunmatik panel ile otomasyon, gerçek zamanlı performans izleme, enerji optimizasyonu ve bakım hatırlatıcıları sunar. Hızlı açılır elek sistemi ve modüler bakım teknolojisi ile operasyonel verimlilik maksimize edilir.',
        paragraph3: 'MT Makina TSY-200, ağır hizmet tipi çelik şase ve çift yataklı rotor sistemi ile 7/24 kesintisiz çalışma kapasitesine sahiptir. Çift motorlu tasarım standart gelir. Tüm opsiyonel özellikler mevcuttur: Kayış kasnaklı hidrolik kaplin, volanlı tasarım, rotor soğutma sistemi, çift hatlı otomatik yağlama, toz bastırma ve aspirasyon sistemi, çıkış için helezon/konveyör/taşıma fanı entegrasyonu. Biyokütle pelet üretimi, biyokömür sanayii, MDF-OSB hammadde hazırlama için turnkey çözüm. CE-ISO 9001 sertifikalı.'
      },
      en: {
        intro: 'TSY-200 horizontal wood shredder is a Premium segment solution providing maximum performance for industrial-scale facilities requiring high capacity.',
        paragraph1: 'TSY-200 model provides intensive processing of tree logs, thick trunks, palm tree trunks and hardest woody waste up to 40 cm diameter with 90-132 kW ultra-powerful motor. With a processing capacity of 8-12 tons per hour, it is ideal for large biomass power plants, industrial wood pellet factories, lumber mill waste management and large-scale forestry operations. Triple hydraulic piston feeding system and wide feed opening (1200 mm) guarantee uninterrupted processing of very large materials.',
        paragraph2: 'Premium segment TSY-200 shows excellent cutting performance in tropical hardwoods, exotic wood species and densest woody materials with 4 mm thick special alloy steel rotor blades and reinforced rotor body. Advanced automation with Siemens S7-1200 PLC and HMI touch panel offers real-time performance monitoring, energy optimization (30% saving), maintenance reminders and remote monitoring capacity. Operational efficiency is maximized with quick-opening screen system (50-100 mm options) and modular blade change technology.',
        paragraph3: 'MT Makina TSY-200 wood shredder has 24/7 continuous operation capacity with heavy-duty steel chassis, anti-vibration dampers and dual bearing rotor system. Dual motor design is offered as standard. Rotor cooling system, dual-line automatic lubrication, dust suppression and aspiration system, auger/conveyor/blower fan integration for output are available. Turnkey solution for biomass pellet production, biochar industry, MDF-OSB raw material preparation and industrial compost production. Industry 4.0 ready, CE-ISO 9001-ISO 14001 certified, 5 years Premium warranty.'
      },
      ru: {
        intro: 'Горизонтальный измельчитель древесины TSY-200 - это решение премиум-сегмента, обеспечивающее максимальную производительность для промышленных объектов, требующих высокой производительности.',
        paragraph1: 'Модель TSY-200 обеспечивает интенсивную обработку бревен, толстых стволов, стволов пальм и самых твердых древесных отходов диаметром до 40 см с ультрамощным двигателем 90-132 кВт. При производительности 8-12 тонн в час идеально подходит для крупных биомассовых электростанций, промышленных заводов по производству древесных пеллет, управления отходами лесопильных заводов и крупномасштабных лесных хозяйств. Система подачи с тройным гидравлическим поршнем и широкое отверстие подачи (1200 мм) гарантируют непрерывную обработку очень больших материалов.',
        paragraph2: 'TSY-200 премиум-сегмента показывает отличную производительность резки на тропических твердых породах, экзотических видах дерева и самых плотных древесных материалах благодаря роторным ножам из специальной легированной стали толщиной 4 мм и усиленному корпусу ротора. Передовая автоматизация с Siemens S7-1200 PLC и сенсорной панелью HMI предлагает мониторинг производительности в реальном времени, оптимизацию энергопотребления (экономия 30%), напоминания о техническом обслуживании и возможность удаленного мониторинга. Операционная эффективность максимизируется благодаря быстро открывающейся системе сит (варианты 50-100 мм) и модульной технологии замены ножей.',
        paragraph3: 'Измельчитель древесины MT Makina TSY-200 имеет круглосуточную непрерывную работу со сверхпрочным стальным шасси, антивибрационными амортизаторами и роторной системой с двойными подшипниками. Конструкция с двумя двигателями предлагается в стандартной комплектации. Доступны система охлаждения ротора, двухлинейная автоматическая смазка, система подавления пыли и аспирации, интеграция шнека/конвейера/вентилятора для выхода. Комплексное решение для производства биомассовых пеллет, промышленности биоугля, подготовки сырья МДФ-ОСБ и промышленного производства компоста. Готов к Индустрии 4.0, сертифицирован CE-ISO 9001-ISO 14001, премиум-гарантия 5 лет.'
      },
      ar: {
        intro: 'آلة تقطيع الخشب الأفقية TSY-200 هي حل من الفئة الممتازة يوفر أقصى أداء للمرافق الصناعية التي تتطلب سعة عالية.',
        paragraph1: 'يوفر طراز TSY-200 معالجة مكثفة لجذوع الأشجار والجذوع السميكة وجذوع أشجار النخيل وأصعب النفايات الخشبية بقطر يصل إلى 40 سم بمحرك فائق القوة 90-132 كيلووات. بسعة معالجة 8-12 طن في الساعة، فهو مثالي لمحطات طاقة الكتلة الحيوية الكبيرة ومصانع حبيبات الخشب الصناعية وإدارة نفايات مصانع الأخشاب وعمليات الغابات واسعة النطاق. يضمن نظام التغذية بالمكبس الهيدروليكي الثلاثي وفتحة التغذية الواسعة (1200 مم) معالجة مستمرة للمواد الكبيرة جدًا.',
        paragraph2: 'يُظهر TSY-200 من الفئة الممتازة أداء قطع ممتازًا في الأخشاب الصلبة الاستوائية وأنواع الخشب الغريبة وأكثف المواد الخشبية مع شفرات دوار من الفولاذ المقاوم للصدأ بسمك 4 مم وجسم دوار معزز. توفر الأتمتة المتقدمة مع Siemens S7-1200 PLC ولوحة اللمس HMI مراقبة الأداء في الوقت الفعلي وتحسين الطاقة (توفير 30٪) وتذكيرات الصيانة وقدرة المراقبة عن بعد. يتم زيادة الكفاءة التشغيلية إلى أقصى حد مع نظام الشاشة سريع الفتح (خيارات 50-100 مم) وتقنية تغيير الشفرة المعيارية.',
        paragraph3: 'تتميز آلة تقطيع الخشب MT Makina TSY-200 بقدرة تشغيل مستمر على مدار الساعة طوال أيام الأسبوع مع هيكل فولاذي للخدمة الشاقة ومخمدات مضادة للاهتزاز ونظام دوار بمحمل مزدوج. يتم تقديم التصميم ثنائي المحرك كمعيار. تتوفر أنظمة تبريد الدوار والتشحيم التلقائي ثنائي الخط ونظام قمع الغبار والشفط وتكامل اللولب/الناقل/مروحة المنفاخ للإخراج. حل جاهز لإنتاج حبيبات الكتلة الحيوية وصناعة الفحم الحيوي وإعداد المواد الخام MDF-OSB وإنتاج السماد الصناعي. جاهز للصناعة 4.0، معتمد CE-ISO 9001-ISO 14001، ضمان ممتاز لمدة 5 سنوات.'
      }
    }
  },
  // DİĞER MAKİNE TÜRLERİ (glass)
  // Bu modeller için çeviri metinleri gerektiğinde eklenecektir
};

/**
 * Get fallback description for models without specific translations
 */
const getFallbackDescription = (productType: string, modelName: string, language: Language): ModelDescription => {
  const productNames: { [key: string]: { [lang in Language]: string } } = {
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

  const templates: { [lang in Language]: ModelDescription } = {
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