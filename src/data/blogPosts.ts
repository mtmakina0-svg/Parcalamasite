
export type Language = 'tr' | 'en' | 'ru' | 'ar';

export interface LocalizedContent {
  tr: string;
  en: string;
  ru: string;
  ar: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: LocalizedContent;
  summary: LocalizedContent;
  content: LocalizedContent;
  date: string;
  author: LocalizedContent;
  image: string;
  tags: LocalizedContent[];
}

// Helper to get localized value
export const getLocalizedValue = (content: LocalizedContent, lang: Language): string => {
  return content[lang] || content.tr;
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'tibbi-atik-imhasinda-dikkat-edilmesi-gerekenler',
    title: {
      tr: 'Tıbbi Atık İmhasında Dikkat Edilmesi Gerekenler',
      en: 'Key Considerations for Medical Waste Disposal',
      ru: 'Важные аспекты утилизации медицинских отходов',
      ar: 'الاعتبارات الرئيسية للتخلص من النفايات الطبية'
    },
    summary: {
      tr: 'Hastaneler ve sağlık kuruluşları için tıbbi atık yönetimi ve güvenli imha süreçleri hakkında kapsamlı rehber.',
      en: 'A comprehensive guide on medical waste management and safe disposal processes for hospitals and healthcare facilities.',
      ru: 'Комплексное руководство по управлению медицинскими отходами и безопасным процессам утилизации для больниц и медицинских учреждений.',
      ar: 'دليل شامل حول إدارة النفايات الطبية وعمليات التخلص الآمن للمستشفيات والمرافق الصحية.'
    },
    date: '2025-12-08',
    author: {
      tr: 'MT Makina Mühendislik Ekibi',
      en: 'MT Makina Engineering Team',
      ru: 'Инженерная команда MT Makina',
      ar: 'فريق هندسة MT Makina'
    },
    image: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=1000',
    tags: [
      { tr: 'Tıbbi Atık', en: 'Medical Waste', ru: 'Медицинские отходы', ar: 'النفايات الطبية' },
      { tr: 'Atık Yönetimi', en: 'Waste Management', ru: 'Управление отходами', ar: 'إدارة النفايات' },
      { tr: 'İmha Fırını', en: 'Incinerator', ru: 'Инсинератор', ar: 'محرقة' },
      { tr: 'Çevre Güvenliği', en: 'Environmental Safety', ru: 'Экологическая безопасность', ar: 'السلامة البيئية' }
    ],
    content: {
      tr: `
      <h1>Tıbbi Atık İmhasında Dikkat Edilmesi Gerekenler</h1>
      <p>Sağlık kuruluşlarında ortaya çıkan atıkların yönetimi, hem halk sağlığı hem de çevre güvenliği açısından kritik bir öneme sahiptir. Tıbbi atıklar, enfeksiyöz risk taşıyan materyallerden kesici-delici aletlere kadar geniş bir yelpazeyi kapsar. Bu yazımızda, tıbbi atıkların güvenli bir şekilde nasıl imha edilmesi gerektiğini ve <strong>MT Makina</strong> olarak sunduğumuz çözümleri inceleyeceğiz.</p>

      <h2>Tıbbi Atık Nedir ve Neden Tehlikelidir?</h2>
      <p>Tıbbi atıklar; hastaneler, klinikler, laboratuvarlar ve diğer sağlık merkezlerinden kaynaklanan, insan sağlığına doğrudan tehdit oluşturabilecek atıklardır. Bu atıklar doğru yönetilmezse:</p>
      <ul>
        <li>Hastalıkların yayılmasına neden olabilir (Hepatit, HIV vb.).</li>
        <li>Toprak ve yeraltı sularını kirletebilir.</li>
        <li>Çöp toplayıcıları ve toplum için yaralanma riski oluşturur.</li>
      </ul>

      <h2>Güvenli İmha Yöntemleri: Yakma (İnsinerasyon)</h2>
      <p>Tıbbi atıkların bertaraf edilmesinde en etkili ve yaygın yöntemlerden biri <strong>yakma (insinerasyon)</strong> işlemidir. Yüksek sıcaklıklarda gerçekleştirilen bu işlem, atıkların hacmini %90-95 oranında azaltırken, zararlı mikroorganizmaları da tamamen yok eder.</p>

      <h2>Tıbbi Atık Yönetiminde Temel Adımlar</h2>
      <ol>
        <li><strong>Ayrıştırma:</strong> Atıklar kaynağında türlerine göre (evsel, tıbbi, tehlikeli) ayrıştırılmalıdır.</li>
        <li><strong>Paketleme:</strong> Tıbbi atıklar, sızdırmaz ve yırtılmaya dayanıklı kırmızı torbalarda toplanmalıdır.</li>
        <li><strong>Depolama:</strong> Atıklar, nihai imha işlemine kadar geçici depolama alanlarında (+4°C) bekletilmelidir.</li>
        <li><strong>İmha:</strong> Atıklar, lisanslı tesislerde veya mobil yakma ünitelerinde yüksek sıcaklıkta bertaraf edilmelidir.</li>
      </ol>

      <h2>Neden MT Makina Çözümlerini Tercih Etmelisiniz?</h2>
      <p>20 yılı aşkın tecrübemizle, sağlık sektörünün ihtiyaçlarına uygun, CE sertifikalı ve çevre mevzuatına tam uyumlu imha sistemleri üretiyoruz.</p>
    `,
      en: `
      <h1>Key Considerations for Medical Waste Disposal</h1>
      <p>The management of waste generated in healthcare facilities is critically important for both public health and environmental safety. Medical waste covers a wide range from infectious materials to sharps. In this article, we will examine how medical waste should be safely disposed of and the solutions offered by <strong>MT Makina</strong>.</p>

      <h2>What is Medical Waste and Why is it Dangerous?</h2>
      <p>Medical waste originates from hospitals, clinics, laboratories, and other healthcare centers, and can pose a direct threat to human health. If this waste is not properly managed:</p>
      <ul>
        <li>It can cause the spread of diseases (Hepatitis, HIV, etc.).</li>
        <li>It can contaminate soil and groundwater.</li>
        <li>It poses an injury risk to waste collectors and the public.</li>
      </ul>

      <h2>Safe Disposal Methods: Incineration</h2>
      <p>One of the most effective and common methods for disposing of medical waste is <strong>incineration</strong>. This process, performed at high temperatures, reduces waste volume by 90-95% while completely destroying harmful microorganisms.</p>

      <h2>Basic Steps in Medical Waste Management</h2>
      <ol>
        <li><strong>Segregation:</strong> Waste should be separated at the source according to type (domestic, medical, hazardous).</li>
        <li><strong>Packaging:</strong> Medical waste should be collected in leak-proof, tear-resistant red bags.</li>
        <li><strong>Storage:</strong> Waste should be kept in temporary storage areas (+4°C) until final disposal.</li>
        <li><strong>Disposal:</strong> Waste should be disposed of at high temperatures in licensed facilities or mobile incineration units.</li>
      </ol>

      <h2>Why Choose MT Makina Solutions?</h2>
      <p>With over 20 years of experience, we produce disposal systems that meet the needs of the healthcare sector, are CE certified, and fully comply with environmental regulations.</p>
    `,
      ru: `
      <h1>Важные аспекты утилизации медицинских отходов</h1>
      <p>Управление отходами, образующимися в медицинских учреждениях, имеет критическое значение как для общественного здоровья, так и для экологической безопасности. Медицинские отходы охватывают широкий спектр от инфекционных материалов до острых предметов. В этой статье мы рассмотрим, как следует безопасно утилизировать медицинские отходы и какие решения предлагает <strong>MT Makina</strong>.</p>

      <h2>Что такое медицинские отходы и почему они опасны?</h2>
      <p>Медицинские отходы образуются в больницах, клиниках, лабораториях и других медицинских центрах и могут представлять прямую угрозу здоровью человека. Если эти отходы неправильно управляются:</p>
      <ul>
        <li>Они могут вызвать распространение заболеваний (гепатит, ВИЧ и т.д.).</li>
        <li>Они могут загрязнять почву и грунтовые воды.</li>
        <li>Они создают риск травмирования для сборщиков отходов и населения.</li>
      </ul>

      <h2>Безопасные методы утилизации: сжигание</h2>
      <p>Одним из наиболее эффективных и распространенных методов утилизации медицинских отходов является <strong>сжигание (инсинерация)</strong>. Этот процесс, проводимый при высоких температурах, уменьшает объем отходов на 90-95%, полностью уничтожая вредные микроорганизмы.</p>

      <h2>Основные этапы управления медицинскими отходами</h2>
      <ol>
        <li><strong>Сортировка:</strong> Отходы должны разделяться в источнике по типу (бытовые, медицинские, опасные).</li>
        <li><strong>Упаковка:</strong> Медицинские отходы должны собираться в герметичные, устойчивые к разрыву красные пакеты.</li>
        <li><strong>Хранение:</strong> Отходы должны храниться во временных хранилищах (+4°C) до окончательной утилизации.</li>
        <li><strong>Утилизация:</strong> Отходы должны утилизироваться при высоких температурах на лицензированных объектах или мобильных установках.</li>
      </ol>

      <h2>Почему стоит выбрать решения MT Makina?</h2>
      <p>С более чем 20-летним опытом мы производим системы утилизации, соответствующие потребностям сектора здравоохранения, сертифицированные CE и полностью соответствующие экологическим нормам.</p>
    `,
      ar: `
      <h1>الاعتبارات الرئيسية للتخلص من النفايات الطبية</h1>
      <p>تُعد إدارة النفايات الناتجة في المرافق الصحية أمراً بالغ الأهمية لكل من الصحة العامة والسلامة البيئية. تغطي النفايات الطبية نطاقاً واسعاً من المواد المعدية إلى الأدوات الحادة. في هذا المقال، سنتناول كيفية التخلص الآمن من النفايات الطبية والحلول التي تقدمها <strong>MT Makina</strong>.</p>

      <h2>ما هي النفايات الطبية ولماذا هي خطيرة؟</h2>
      <p>تنشأ النفايات الطبية من المستشفيات والعيادات والمختبرات والمراكز الصحية الأخرى، ويمكن أن تشكل تهديداً مباشراً لصحة الإنسان. إذا لم تُدار هذه النفايات بشكل صحيح:</p>
      <ul>
        <li>يمكن أن تسبب انتشار الأمراض (التهاب الكبد، فيروس نقص المناعة البشرية، إلخ).</li>
        <li>يمكن أن تلوث التربة والمياه الجوفية.</li>
        <li>تشكل خطر الإصابة لجامعي النفايات والجمهور.</li>
      </ul>

      <h2>طرق التخلص الآمنة: الحرق</h2>
      <p>إحدى أكثر الطرق فعالية وشيوعاً للتخلص من النفايات الطبية هي <strong>الحرق</strong>. هذه العملية، التي تتم في درجات حرارة عالية، تقلل حجم النفايات بنسبة 90-95٪ مع تدمير الكائنات الحية الدقيقة الضارة بالكامل.</p>

      <h2>الخطوات الأساسية في إدارة النفايات الطبية</h2>
      <ol>
        <li><strong>الفصل:</strong> يجب فصل النفايات في المصدر حسب النوع (منزلية، طبية، خطرة).</li>
        <li><strong>التعبئة:</strong> يجب جمع النفايات الطبية في أكياس حمراء مقاومة للتسرب والتمزق.</li>
        <li><strong>التخزين:</strong> يجب حفظ النفايات في مناطق تخزين مؤقتة (+4 درجة مئوية) حتى التخلص النهائي.</li>
        <li><strong>التخلص:</strong> يجب التخلص من النفايات في درجات حرارة عالية في مرافق مرخصة أو وحدات حرق متنقلة.</li>
      </ol>

      <h2>لماذا تختار حلول MT Makina؟</h2>
      <p>مع أكثر من 20 عاماً من الخبرة، ننتج أنظمة تخلص تلبي احتياجات قطاع الرعاية الصحية، حاصلة على شهادة CE ومتوافقة تماماً مع اللوائح البيئية.</p>
    `
    }
  },
  {
    id: '2',
    slug: 'cift-saftli-parcalama-makinesi-hangi-atiklar-icin-uygundur',
    title: {
      tr: 'Çift Şaftlı Parçalama Makinesi Hangi Atıklar İçin Uygundur?',
      en: 'Which Waste Types Are Suitable for Double Shaft Shredders?',
      ru: 'Для каких типов отходов подходят двухвальные шредеры?',
      ar: 'ما هي أنواع النفايات المناسبة لآلات التقطيع ذات العمودين؟'
    },
    summary: {
      tr: 'Endüstriyel atıkların hacmini küçültmek için kullanılan çift şaftlı parçalama makinelerinin (shredder) kullanım alanları ve avantajları.',
      en: 'Usage areas and advantages of double shaft shredders used to reduce the volume of industrial waste.',
      ru: 'Области применения и преимущества двухвальных измельчителей, используемых для уменьшения объема промышленных отходов.',
      ar: 'مجالات الاستخدام ومزايا آلات التقطيع ذات العمودين المستخدمة لتقليل حجم النفايات الصناعية.'
    },
    date: '2025-12-07',
    author: {
      tr: 'MT Makina Teknik Servis',
      en: 'MT Makina Technical Service',
      ru: 'Техническая служба MT Makina',
      ar: 'الخدمة الفنية MT Makina'
    },
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000',
    tags: [
      { tr: 'Shredder', en: 'Shredder', ru: 'Шредер', ar: 'آلة التقطيع' },
      { tr: 'Geri Dönüşüm', en: 'Recycling', ru: 'Переработка', ar: 'إعادة التدوير' },
      { tr: 'Çift Şaftlı', en: 'Double Shaft', ru: 'Двухвальный', ar: 'ثنائي العمود' },
      { tr: 'Endüstriyel Makine', en: 'Industrial Machine', ru: 'Промышленное оборудование', ar: 'الآلات الصناعية' }
    ],
    content: {
      tr: `
      <h1>Çift Şaftlı Parçalama Makinesi Hangi Atıklar İçin Uygundur?</h1>
      <p>Endüstriyel geri dönüşüm sektörünün vazgeçilmezi olan <strong>Çift Şaftlı Parçalama Makineleri (Double Shaft Shredders)</strong>, yüksek torklu ve düşük devirli çalışma prensibiyle en zorlu atıkları bile kolayca parçalayabilir.</p>

      <h2>Çalışma Prensibi</h2>
      <p>Çift şaftlı makineler, birbirine doğru dönen iki bıçaklı şaft sayesinde malzemeyi yakalar, keser ve parçalar. Bu mekanizma, malzemenin makine içinde sıkışmasını önler ve sürekli bir akış sağlar.</p>

      <h2>Hangi Atıklar Parçalanabilir?</h2>
      <h3>1. Metal Atıklar</h3>
      <p>Sac levhalar, variller, beyaz eşyalar, araba parçaları ve alüminyum profiller güçlü şaftlar arasında kolayca parçalanır.</p>

      <h3>2. Elektronik Atıklar (E-Atık)</h3>
      <p>Bilgisayar kasaları, sabit diskler, yazıcılar ve devre kartları, değerli metallerin geri kazanılması öncesinde boyut küçültme işlemine tabi tutulur.</p>

      <h3>3. Plastik ve Lastik</h3>
      <p>Büyük plastik bidonlar, borular, üretim fireleri ve araba lastikleri, çift şaftlı makinelerin yüksek torku sayesinde şeritler halinde parçalanır.</p>

      <h3>4. Ahşap ve Palet</h3>
      <p>Kullanım ömrünü tamamlamış ahşap paletler, mobilya atıkları ve ağaç kütükleri, biyokütle tesisleri için yakıt haline getirilebilir.</p>

      <h2>Avantajları Nelerdir?</h2>
      <ul>
        <li><strong>Yüksek Tork:</strong> Zorlu ve sert malzemelerde bile duraksamadan çalışır.</li>
        <li><strong>Düşük Gürültü ve Toz:</strong> Düşük devirde çalıştığı için çevreye daha az rahatsızlık verir.</li>
        <li><strong>Otomatik Geri Dönüş:</strong> Sıkışma anında otomatik olarak ters dönerek sistemi korur.</li>
      </ul>
    `,
      en: `
      <h1>Which Waste Types Are Suitable for Double Shaft Shredders?</h1>
      <p>An indispensable part of the industrial recycling sector, <strong>Double Shaft Shredders</strong> can easily shred even the most challenging waste with their high torque and low speed operating principle.</p>

      <h2>Operating Principle</h2>
      <p>Double shaft machines capture, cut, and shred material with two blade shafts rotating towards each other. This mechanism prevents material from jamming inside the machine and ensures continuous flow.</p>

      <h2>What Waste Can Be Shredded?</h2>
      <h3>1. Metal Waste</h3>
      <p>Sheet metal, barrels, white goods, car parts, and aluminum profiles are easily shredded between the powerful shafts.</p>

      <h3>2. Electronic Waste (E-Waste)</h3>
      <p>Computer cases, hard drives, printers, and circuit boards undergo size reduction before precious metal recovery.</p>

      <h3>3. Plastic and Rubber</h3>
      <p>Large plastic drums, pipes, production waste, and car tires are shredded into strips thanks to the high torque of double shaft machines.</p>

      <h3>4. Wood and Pallets</h3>
      <p>End-of-life wooden pallets, furniture waste, and tree stumps can be converted into fuel for biomass plants.</p>

      <h2>What Are the Advantages?</h2>
      <ul>
        <li><strong>High Torque:</strong> Works without hesitation even on tough and hard materials.</li>
        <li><strong>Low Noise and Dust:</strong> Causes less environmental disturbance due to low-speed operation.</li>
        <li><strong>Auto Reverse:</strong> Automatically reverses during jamming to protect the system.</li>
      </ul>
    `,
      ru: `
      <h1>Для каких типов отходов подходят двухвальные шредеры?</h1>
      <p><strong>Двухвальные шредеры</strong> — незаменимая часть промышленного сектора переработки, способные легко измельчать даже самые сложные отходы благодаря принципу работы с высоким крутящим моментом и низкой скоростью.</p>

      <h2>Принцип работы</h2>
      <p>Двухвальные машины захватывают, режут и измельчают материал с помощью двух ножевых валов, вращающихся навстречу друг другу. Этот механизм предотвращает заклинивание материала внутри машины и обеспечивает непрерывный поток.</p>

      <h2>Какие отходы можно измельчать?</h2>
      <h3>1. Металлические отходы</h3>
      <p>Листовой металл, бочки, бытовая техника, автозапчасти и алюминиевые профили легко измельчаются между мощными валами.</p>

      <h3>2. Электронные отходы (E-отходы)</h3>
      <p>Корпуса компьютеров, жесткие диски, принтеры и печатные платы проходят уменьшение размера перед извлечением драгоценных металлов.</p>

      <h3>3. Пластик и резина</h3>
      <p>Большие пластиковые бочки, трубы, производственные отходы и автомобильные шины измельчаются в полосы благодаря высокому крутящему моменту двухвальных машин.</p>

      <h3>4. Дерево и поддоны</h3>
      <p>Отслужившие деревянные поддоны, мебельные отходы и пни можно преобразовать в топливо для биомассовых установок.</p>

      <h2>Каковы преимущества?</h2>
      <ul>
        <li><strong>Высокий крутящий момент:</strong> Работает без колебаний даже на жестких и твердых материалах.</li>
        <li><strong>Низкий уровень шума и пыли:</strong> Меньше беспокойства для окружающей среды благодаря низкоскоростной работе.</li>
        <li><strong>Автореверс:</strong> Автоматически переключается на обратный ход при заклинивании для защиты системы.</li>
      </ul>
    `,
      ar: `
      <h1>ما هي أنواع النفايات المناسبة لآلات التقطيع ذات العمودين؟</h1>
      <p><strong>آلات التقطيع ذات العمودين</strong> جزء لا غنى عنه في قطاع إعادة التدوير الصناعي، قادرة على تقطيع حتى أصعب النفايات بسهولة بفضل مبدأ التشغيل عالي العزم ومنخفض السرعة.</p>

      <h2>مبدأ التشغيل</h2>
      <p>تلتقط الآلات ذات العمودين المادة وتقطعها وتفتتها بواسطة عمودين من الشفرات يدوران باتجاه بعضهما البعض. تمنع هذه الآلية انحشار المادة داخل الآلة وتضمن التدفق المستمر.</p>

      <h2>ما هي النفايات التي يمكن تقطيعها؟</h2>
      <h3>1. النفايات المعدنية</h3>
      <p>الصفائح المعدنية والبراميل والأجهزة المنزلية وقطع غيار السيارات وبروفيلات الألمنيوم يتم تقطيعها بسهولة بين الأعمدة القوية.</p>

      <h3>2. النفايات الإلكترونية</h3>
      <p>علب الكمبيوتر والأقراص الصلبة والطابعات ولوحات الدوائر تخضع لتقليل الحجم قبل استعادة المعادن الثمينة.</p>

      <h3>3. البلاستيك والمطاط</h3>
      <p>البراميل البلاستيكية الكبيرة والأنابيب ونفايات الإنتاج وإطارات السيارات يتم تقطيعها إلى شرائح بفضل العزم العالي لآلات التقطيع ذات العمودين.</p>

      <h3>4. الخشب والمنصات</h3>
      <p>المنصات الخشبية المنتهية الصلاحية ونفايات الأثاث وجذوع الأشجار يمكن تحويلها إلى وقود لمحطات الكتلة الحيوية.</p>

      <h2>ما هي المزايا؟</h2>
      <ul>
        <li><strong>عزم دوران عالي:</strong> يعمل بدون تردد حتى على المواد الصلبة والقاسية.</li>
        <li><strong>ضوضاء وغبار منخفضان:</strong> يسبب إزعاجاً أقل للبيئة بسبب التشغيل منخفض السرعة.</li>
        <li><strong>الرجوع التلقائي:</strong> ينعكس تلقائياً أثناء الانحشار لحماية النظام.</li>
      </ul>
    `
    }
  },
  {
    id: '3',
    slug: 'mobil-atik-yakma-firinlarinin-avantajlari-nelerdir',
    title: {
      tr: 'Mobil Atık Yakma Fırınlarının Avantajları Nelerdir?',
      en: 'What Are the Advantages of Mobile Waste Incinerators?',
      ru: 'Каковы преимущества мобильных мусоросжигателей?',
      ar: 'ما هي مزايا محارق النفايات المتنقلة؟'
    },
    summary: {
      tr: 'Afet bölgeleri, şantiyeler ve uzak tesisler için taşınabilir (mobil) atık yakma fırınlarının sağladığı operasyonel kolaylıklar.',
      en: 'Operational conveniences provided by portable (mobile) waste incinerators for disaster areas, construction sites, and remote facilities.',
      ru: 'Эксплуатационные удобства, предоставляемые мобильными мусоросжигателями для зон бедствий, строительных площадок и удаленных объектов.',
      ar: 'التسهيلات التشغيلية التي توفرها محارق النفايات المتنقلة لمناطق الكوارث ومواقع البناء والمرافق البعيدة.'
    },
    date: '2025-12-05',
    author: {
      tr: 'MT Makina Ar-Ge',
      en: 'MT Makina R&D',
      ru: 'НИОКР MT Makina',
      ar: 'قسم البحث والتطوير MT Makina'
    },
    image: 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&q=80&w=1000',
    tags: [
      { tr: 'Mobil Fırın', en: 'Mobile Incinerator', ru: 'Мобильный инсинератор', ar: 'محرقة متنقلة' },
      { tr: 'İnsineratör', en: 'Incinerator', ru: 'Инсинератор', ar: 'محرقة' },
      { tr: 'Afet Yönetimi', en: 'Disaster Management', ru: 'Управление бедствиями', ar: 'إدارة الكوارث' },
      { tr: 'Şantiye', en: 'Construction Site', ru: 'Строительная площадка', ar: 'موقع البناء' }
    ],
    content: {
      tr: `
      <h1>Mobil Atık Yakma Fırınlarının Avantajları Nelerdir?</h1>
      <p>Atık yönetimi her zaman sabit tesislerde yapılmak zorunda değildir. Bazı durumlarda hizmeti atığın kaynağına götürmek çok daha verimli, ekonomik ve güvenlidir. İşte bu noktada <strong>Mobil Atık Yakma Fırınları</strong> devreye girer.</p>

      <h2>Mobil Fırınların Kullanım Alanları</h2>
      <ul>
        <li><strong>Afet Bölgeleri:</strong> Deprem, sel gibi doğal afetler sonrasında oluşan hijyen riski taşıyan atıkların acilen imha edilmesi gerekir.</li>
        <li><strong>Askeri Üsler ve Kamplar:</strong> Şehir merkezinden uzak bölgelerde kurulan geçici yaşam alanlarının atık yönetimi için idealdir.</li>
        <li><strong>Salgın Hastalık Dönemleri:</strong> Tıbbi atıkların hastaneden çıkarılmadan olduğu yerde imha edilmesini sağlar.</li>
        <li><strong>Petrol ve Maden Şantiyeleri:</strong> Lojistik imkanların kısıtlı olduğu uzak sahalarda atık sorununu çözer.</li>
      </ul>

      <h2>Temel Avantajlar</h2>
      <h3>1. Lojistik Maliyetlerini Sıfırlar</h3>
      <p>Atıkları lisanslı bir tesise taşımak yerine, tesisi atığın yanına getirirsiniz.</p>

      <h3>2. Hızlı Kurulum ve Devreye Alma</h3>
      <p>MT Makina'nın ürettiği mobil sistemler, "Tak-Çalıştır" mantığıyla tasarlanmıştır.</p>

      <h3>3. Yasal Mevzuata Uyum</h3>
      <p>Sistemlerimiz, Çevre ve Şehircilik Bakanlığı'nın emisyon standartlarına uygun filtreleme sistemlerine sahiptir.</p>

      <h3>4. Entegre Çözümler</h3>
      <p>Mobil fırınlarımız, gerektiğinde bir Mobil Parçalayıcı (Shredder) ile entegre edilerek hibrit bir çözüm sunabilir.</p>
    `,
      en: `
      <h1>What Are the Advantages of Mobile Waste Incinerators?</h1>
      <p>Waste management doesn't always have to be done at fixed facilities. In some cases, bringing the service to the source of waste is much more efficient, economical, and safe. This is where <strong>Mobile Waste Incinerators</strong> come into play.</p>

      <h2>Usage Areas of Mobile Incinerators</h2>
      <ul>
        <li><strong>Disaster Areas:</strong> Waste carrying hygiene risks that form after natural disasters like earthquakes and floods needs to be urgently destroyed.</li>
        <li><strong>Military Bases and Camps:</strong> Ideal for waste management of temporary living areas established in regions far from city centers.</li>
        <li><strong>Epidemic Periods:</strong> Enables medical waste to be disposed of on-site without being removed from the hospital.</li>
        <li><strong>Oil and Mining Sites:</strong> Solves the waste problem in remote areas where logistics are limited.</li>
      </ul>

      <h2>Key Advantages</h2>
      <h3>1. Eliminates Logistics Costs</h3>
      <p>Instead of transporting waste to a licensed facility, you bring the facility to the waste.</p>

      <h3>2. Quick Setup and Commissioning</h3>
      <p>Mobile systems produced by MT Makina are designed with a "Plug-and-Play" approach.</p>

      <h3>3. Regulatory Compliance</h3>
      <p>Our systems have filtration systems that comply with the Ministry of Environment emission standards.</p>

      <h3>4. Integrated Solutions</h3>
      <p>Our mobile incinerators can be integrated with a Mobile Shredder when needed to offer a hybrid solution.</p>
    `,
      ru: `
      <h1>Каковы преимущества мобильных мусоросжигателей?</h1>
      <p>Управление отходами не всегда должно осуществляться на стационарных объектах. В некоторых случаях доставка услуги к источнику отходов намного эффективнее, экономичнее и безопаснее. Здесь в игру вступают <strong>мобильные мусоросжигатели</strong>.</p>

      <h2>Области применения мобильных инсинераторов</h2>
      <ul>
        <li><strong>Зоны бедствий:</strong> Отходы, несущие гигиенические риски после стихийных бедствий, таких как землетрясения и наводнения, требуют срочного уничтожения.</li>
        <li><strong>Военные базы и лагеря:</strong> Идеально подходит для управления отходами временных жилых зон, созданных в отдаленных от городских центров районах.</li>
        <li><strong>Периоды эпидемий:</strong> Позволяет утилизировать медицинские отходы на месте, не вывозя их из больницы.</li>
        <li><strong>Нефтяные и горнодобывающие объекты:</strong> Решает проблему отходов в отдаленных районах с ограниченной логистикой.</li>
      </ul>

      <h2>Ключевые преимущества</h2>
      <h3>1. Устраняет логистические затраты</h3>
      <p>Вместо транспортировки отходов на лицензированный объект вы доставляете объект к отходам.</p>

      <h3>2. Быстрая установка и ввод в эксплуатацию</h3>
      <p>Мобильные системы производства MT Makina разработаны по принципу «подключи и работай».</p>

      <h3>3. Соответствие нормативным требованиям</h3>
      <p>Наши системы имеют фильтрующие системы, соответствующие стандартам выбросов Министерства окружающей среды.</p>

      <h3>4. Интегрированные решения</h3>
      <p>Наши мобильные инсинераторы при необходимости могут быть интегрированы с мобильным шредером для предоставления гибридного решения.</p>
    `,
      ar: `
      <h1>ما هي مزايا محارق النفايات المتنقلة؟</h1>
      <p>لا يجب أن تتم إدارة النفايات دائماً في منشآت ثابتة. في بعض الحالات، يكون نقل الخدمة إلى مصدر النفايات أكثر كفاءة واقتصادية وأماناً بكثير. هنا تدخل <strong>محارق النفايات المتنقلة</strong> في اللعب.</p>

      <h2>مجالات استخدام المحارق المتنقلة</h2>
      <ul>
        <li><strong>مناطق الكوارث:</strong> النفايات التي تحمل مخاطر صحية بعد الكوارث الطبيعية مثل الزلازل والفيضانات تحتاج إلى التدمير العاجل.</li>
        <li><strong>القواعد العسكرية والمخيمات:</strong> مثالية لإدارة النفايات في مناطق المعيشة المؤقتة البعيدة عن مراكز المدن.</li>
        <li><strong>فترات الأوبئة:</strong> تمكن من التخلص من النفايات الطبية في الموقع دون إخراجها من المستشفى.</li>
        <li><strong>مواقع النفط والتعدين:</strong> تحل مشكلة النفايات في المناطق النائية حيث اللوجستيات محدودة.</li>
      </ul>

      <h2>المزايا الرئيسية</h2>
      <h3>1. القضاء على تكاليف اللوجستيات</h3>
      <p>بدلاً من نقل النفايات إلى منشأة مرخصة، تجلب المنشأة إلى النفايات.</p>

      <h3>2. الإعداد والتشغيل السريع</h3>
      <p>الأنظمة المتنقلة التي تنتجها MT Makina مصممة بنهج "التوصيل والتشغيل".</p>

      <h3>3. الامتثال التنظيمي</h3>
      <p>أنظمتنا تحتوي على أنظمة ترشيح تتوافق مع معايير الانبعاثات لوزارة البيئة.</p>

      <h3>4. الحلول المتكاملة</h3>
      <p>يمكن دمج محارقنا المتنقلة مع آلة تقطيع متنقلة عند الحاجة لتقديم حل هجين.</p>
    `
    }
  }
];
