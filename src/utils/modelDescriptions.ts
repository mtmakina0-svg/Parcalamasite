/**
 * Model-Specific SEO-Optimized Descriptions
 * Her makine modeli için benzersiz, SEO odaklı açıklama metinleri
 */

interface ModelDescription {
  intro: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
}

export const modelDescriptions: { [productType: string]: { [modelName: string]: ModelDescription } } = {
  'single-shaft': {
    'TSH-60': {
      intro: 'TSH-60 tek şaftlı parçalama makinesi, küçük ve orta ölçekli işletmeler için ideal çözümdür.',
      paragraph1: 'TSH-60 model, 15-30 kW motor gücü ile plastik, ahşap, kağıt, tekstil ve ambalaj atıklarının etkili şekilde parçalanmasını sağlar. 600x1100 mm parçalama alanı ve 500-800 kg/saat işleme kapasitesi ile günlük orta seviye üretim gereksinimlerini karşılar. Kompakt tasarımı sayesinde sınırlı alanlarda bile verimli çalışır.',
      paragraph2: 'PLC kontrollü otomasyon sistemi ile donatılmış TSH-60, aşırı yüklenme durumlarında otomatik ters çalışma fonksiyonu sayesinde bıçakların ömrünü uzatır ve kesintisiz üretim sağlar. Değiştirilebilir elek sistemi ile farklı çıkış boyutları elde edebilirsiniz.',
      paragraph3: 'MT Makina TSH-60 parçalama makinesi, kompakt boyutlara rağmen endüstriyel dayanıklılık sunar. 600 mm rotor uzunluğu, 24 adet değiştirilebilir bıçak ve otomatik yağlama sistemi ile minimum bakım gerektirir. Plastik geri dönüşüm tesisleri, ahşap atık işleme ve kağıt-karton tesisleri için ekonomik ve verimli bir çözümdür.'
    },
    'TSH-80': {
      intro: 'TSH-80 tek şaftlı parçalama makinesi, orta ölçekli üretim tesisleri için güçlü ve verimli bir çözüm sunar.',
      paragraph1: 'TSH-80 model, 22-45 kW motor gücü ile 800x1100 mm geniş parçalama alanına sahiptir. 800-1200 kg/saat kapasite ile günlük yüksek hacimli atık işleme gereksinimlerini karşılar. Plastik enjeksiyon atıkları, PET şişeler, PP-PE malzemeler, ahşap paletler ve endüstriyel ambalaj atıklarının parçalanmasında üstün performans gösterir.',
      paragraph2: 'Gelişmiş PLC otomasyon sistemi, gerçek zamanlı motor yükü izleme, otomatik başlatma-durdurma ve acil durum güvenlik sistemleri ile donatılmıştır. 800 mm rotor uzunluğu ve 32 adet yüksek kaliteli bıçak, homojen parçalama ve uzun ömürlü kullanım garantisi verir.',
      paragraph3: 'TSH-80, orta büyüklükteki geri dönüşüm tesisleri, plastik işleme fabrikaları ve atık yönetim merkezleri için optimize edilmiştir. Değiştirilebilel elek sistemi (20-80 mm) ile çıkış boyutu kontrolü yapılabilir. Düşük enerji tüketimi ve yüksek verimlilik oranı ile işletme maliyetlerini minimize eder.'
    },
    'TSH-100': {
      intro: 'TSH-100 tek şaftlı parçalama makinesi, yüksek kapasite gerektiren endüstriyel uygulamalar için tasarlanmış profesyonel bir sistemdir.',
      paragraph1: 'TSH-100 model, 30-75 kW güçlü motor seçenekleri ile 1000x1300 mm geniş parçalama alanı sunar. 1200-1800 kg/saat işleme kapasitesi ile büyük ölçekli üretim tesislerinin ihtiyaçlarını karşılar. Kalın duvarlı plastikler, büyük çaplı ahşap parçalar, endüstriyel konteynerler, IBC tanklar ve ağır tekstil atıklarını kolayca parçalar.',
      paragraph2: 'İleri seviye PLC kontrol paneli, touch screen operatör arayüzü, uzaktan izleme ve bakım hatırlatma sistemleri ile donatılmıştır. 1000 mm rotor, 40 adet premium kalite bıçak ve hidrolik itici sistem sayesinde sürekli ve kesintisiz üretim garantisi verir. Otomatik ters çalışma ve akıllı yük yönetimi, maksimum verimlilik sağlar.',
      paragraph3: 'MT Makina TSH-100, büyük plastik geri dönüşüm tesisleri, ahşap palet üreticileri, kompozit malzeme işleyiciler ve endüstriyel atık yönetim firmaları için ideal çözümdür. Modüler yapısı sayesinde konveyör sistemleri ve seperatörlerle entegre edilebilir. CE sertifikalı güvenlik standartları ve 2 yıl garanti ile desteklenir.'
    },
    'TSH-130': {
      intro: 'TSH-130 tek şaftlı parçalama makinesi, ağır hizmet tipi endüstriyel uygulamalar için tasarlanmış güçlü bir parçalama sistemidir.',
      paragraph1: 'TSH-130 model, 45-110 kW yüksek tork motor gücü ile 1300x1600 mm ekstra geniş parçalama alanı sunar. 1800-2500 kg/saat işleme kapasitesi ile sürekli üretim yapan büyük tesislerin gereksinimlerini karşılar. Kalın çeperli endüstriyel plastikler, büyük ahşap kütükler, yatak ve mobilya atıkları, büyük çaplı borular ve ağır endüstriyel atıkların parçalanmasında üstün performans gösterir.',
      paragraph2: 'Endüstriyel sınıf PLC otomasyon, gerçek zamanlı üretim takibi, enerji tüketim analizi ve bakım planlama modülleri içerir. 1300 mm uzun rotor, 48 adet takviyeli bıçak sistemi ve güçlendirilmiş rulman yapısı ile 7/24 kesintisiz çalışma kapasitesine sahiptir. Hidrolik besleyici ve otomatik seviye kontrol sistemi operatör müdahalesini minimize eder.',
      paragraph3: 'TSH-130, büyük kapasiteli plastik geri dönüşüm kompleksleri, ahşap işleme merkezleri, evsel eşya geri kazanım tesisleri ve ağır sanayi atık yönetimi için optimize edilmiştir. Çift elek sistemi ile hem kaba hem de ince parçalama yapılabilir. Yüksek dayanıklılık ve düşük işletme maliyeti ile yatırım geri dönüşü hızlıdır.'
    },
    'TSH-160': {
      intro: 'TSH-160 tek şaftlı parçalama makinesi, çift motor teknolojisi ile ekstra yüksek kapasite ve performans sunan endüstriyel sınıf bir sistemdir.',
      paragraph1: 'TSH-160 model, 2x 55-132 kW çift motor konfigürasyonu ile 1600x1800 mm ultra geniş parçalama alanı sunar. 3500-4500 kg/saat işleme kapasitesi ile Türkiye\'nin en yüksek kapasiteli tek şaftlı sistemlerinden biridir. Büyük hacimli endüstriyel konteynerler, otomotiv tampon ve parçaları, büyük çaplı boru sistemleri, kompozit malzemeler ve toplu atık işleme projelerinde kullanılır.',
      paragraph2: 'Siemens PLC tabanlı ileri otomasyon sistemi, SCADA entegrasyonu, uzaktan müdahale, predictive maintenance (öngörülü bakım) ve IoT bağlantı altyapısı sunar. 1600 mm ekstra uzun rotor, 64 adet özel alaşımlı bıçak ve takviyeli dişli kutusu ile maksimum tork ve dayanıklılık sağlar. Çift motor sistemi sayesinde ağır yüklerde bile kesintisiz çalışma garantisi verir.',
      paragraph3: 'MT Makina TSH-160, büyük ölçekli geri dönüşüm kompleksleri, otomotiv geri kazanım merkezleri, belediye atık yönetim tesisleri ve sanayi bölgesi ortak atık işleme merkezleri için tasarlanmıştır. Tam otomatik konveyör besleme, manyetik seperatör, hava seperatörü ve balya presi ile entegre edilebilir. Avrupa standartlarında güvenlik ve CE sertifikası ile desteklenir.'
    },
    'TSH-200': {
      intro: 'TSH-200 tek şaftlı parçalama makinesi, MT Makina\'nın en büyük ve en güçlü modeli olup maksimum kapasite gerektiren mega projeler için tasarlanmıştır.',
      paragraph1: 'TSH-200 model, 2x 75-160 kW çift motor sistemi ile 2000x2300 mm dev parçalama alanı sunar. 4500-6000 kg/saat işleme kapasitesi ile saatte 5 tona kadar atık işleyebilme gücüne sahiptir. Endüstriyel büyük hacimli konteynerler, otobüs-kamyon iç döşemeleri, büyük çaplı plastik tanklar, endüstriyel makine kasaları, büyük ahşap yapılar ve toplu elektronik atık projeleri için kullanılır.',
      paragraph2: 'En ileri PLC ve SCADA sistemi, yapay zeka destekli yük optimizasyonu, gerçek zamanlı performans analizi, uzaktan tam kontrol ve bulut tabanlı veri saklama özelliklerine sahiptir. 2000 mm ultra uzun rotor, 80 adet premium kalite bıçak, endüstriyel sınıf hidrolik sistem ve takviyeli çelik gövde ile en zorlu malzemeleri bile kolayca işler. Çift motor ve diferansiyel dişli sistemi sayesinde eşsiz tork ve verim sunar.',
      paragraph3: 'TSH-200, mega ölçekli geri dönüşüm kompleksleri, belediye entegre katı atık yönetim tesisleri, otomotiv sanayi atık merkezleri, liman ve gümrük atık işleme merkezleri için ideal çözümdür. Tam otomatik hat entegrasyonu, multi-seperatör sistemleri, otomatik paketleme ve sevkiyat sistemleri ile kombine edilebilir. 7/24 teknik destek, yerinde bakım servisi ve uzun süreli garanti ile desteklenir.'
    }
  },
  'dual-shaft': {
    'CS-20': {
      intro: 'CS-20 çift şaftlı parçalama makinesi, kompakt boyutlarda güçlü performans sunan giriş seviyesi endüstriyel shredder sistemidir.',
      paragraph1: 'CS-20 model, 2x 7.5 kW çift motor sistemi ile 400 mm rotor uzunluğu ve 200 mm rotor çapına sahiptir. 300-500 kg/saat kapasite ile küçük ve orta ölçekli işletmelerin metal, plastik, kağıt ve ahşap atık parçalama ihtiyaçlarını karşılar. Kompakt tasarımı sayesinde dar alanlarda bile verimli çalışır.',
      paragraph2: 'Çift şaft teknolojisi, malzemeyi iki yönden sıkıştırarak etkili parçalama sağlar. Düşük devir-yüksek tork prensibi ile gürültü seviyesini minimize ederken enerji verimliliği sağlar. 32 adet helisel bıçak dizilimi, homojen parçalama ve uzun ömür garantisi verir.',
      paragraph3: 'CS-20, plastik atık toplama merkezleri, küçük metal işleme atölyeleri, kağıt geri dönüşüm tesisleri ve yerel atık yönetim firmaları için ekonomik bir çözümdür. 30-80 mm elek seçenekleri ile farklı çıkış boyutları elde edilebilir.'
    },
    'CS-40': {
      intro: 'CS-40 çift şaftlı parçalama makinesi, orta kapasite gereksinimleri için tasarlanmış dayanıklı ve verimli bir parçalama sistemidir.',
      paragraph1: 'CS-40 model, 2x 11 kW çift motor konfigürasyonu ile 600 mm rotor uzunluğu ve 250 mm rotor çapı sunar. 500-800 kg/saat işleme kapasitesi ile plastik palet, metal hurda, karışık ambalaj atıkları, e-atık ve endüstriyel kompozit malzemelerin parçalanmasında etkilidir.',
      paragraph2: 'Gelişmiş çift şaft mekanizması, sert ve elastik malzemeleri eşit şekilde işler. PLC kontrollü ters çalışma sistemi, sıkışma durumlarında otomatik müdahale eder. 48 adet özel çelik bıçak, uzun ömürlü ve tekrar bilenebilir özelliktedir.',
      paragraph3: 'CS-40, orta büyüklükte geri dönüşüm tesisleri, plastik-metal ayrıştırma merkezleri ve elektronik atık işleme tesisleri için idealdir. Konveyör besleme ve manyetik seperatör ile entegre edilebilir.'
    },
    'CS-60': {
      intro: 'CS-60 çift şaftlı parçalama makinesi, yüksek tork ve dayanıklılık gerektiren zorlu malzemeler için profesyonel bir çözümdür.',
      paragraph1: 'CS-60 model, 2x 15 kW güçlü motor sistemi ile 800 mm rotor uzunluğu ve 300 mm rotor çapı sunar. 800-1200 kg/saat kapasite ile otomotiv plastikleri, lastik, kablo, metal profiller ve endüstriyel atıkların parçalanmasında üstün performans gösterir.',
      paragraph2: 'Ağır hizmet tipi çift şaft yapısı, yüksek mukavemetli malzemelerde bile kesintisiz çalışma sağlar. İleri PLC otomasyonu, touch screen kontrol ve uzaktan izleme özellikleri sunar. 64 adet takviyeli bıçak sistemi, maksimum verimlilik ve uzun ömür garantisi verir.',
      paragraph3: 'CS-60, büyük plastik geri dönüşüm tesisleri, otomotiv geri kazanım merkezleri, kablo geri dönüşüm tesisleri ve ağır endüstriyel atık işleme için tasarlanmıştır. Multi-elek sistemi ile 20-100 mm arası çıkış boyutu kontrolü yapılabilir.'
    }
  },
  'quad-shaft': {
    'QS-30': {
      intro: 'QS-30 dörtlü şaft parçalama makinesi, ultra hassas boyut kontrolü gerektiren e-atık ve değerli malzeme geri kazanımı için özel geliştirilmiş sistemdir.',
      paragraph1: 'QS-30 model, 4x 5.5 kW dörtlü motor konfigürasyonu ile 300 mm rotor uzunluğu ve 150 mm çıkış boyutu kontrolü sunar. 200-400 kg/saat kapasite ile elektronik kartlar, bilgisayar parçaları, cep telefonları ve hassas elektronik atıkların homojen parçalanmasını sağlar.',
      paragraph2: 'Dörtlü şaft teknolojisi, malzemeyi dört yönden işleyerek ultra homojen parçalama ve boyut standardizasyonu sağlar. Düşük devir-ultra yüksek tork prensibi ile elektronik komponentlere zarar vermeden ayırma imkanı verir. PLC kontrollü hassas besleme sistemi ile değerli metallerin geri kazanım oranı maksimize edilir.',
      paragraph3: 'QS-30, e-atık geri dönüşüm tesisleri, elektronik hurda işleme merkezleri, değerli metal kazanım tesisleri için optimize edilmiştir. Manyetik seperatör ve hava seperatörü ile entegre çalışarak altın, gümüş, bakır gibi değerli metallerin ayrıştırılmasını kolaylaştırır.'
    },
    'QS-50': {
      intro: 'QS-50 dörtlü şaft parçalama makinesi, orta kapasiteli hassas parçalama ve malzeme ayrıştırma projelerinde profesyonel çözüm sunar.',
      paragraph1: 'QS-50 model, 4x 7.5 kW dörtlü motor sistemi ile 500 mm rotor uzunluğu sunar. 400-700 kg/saat kapasite ile elektronik atık, plastik-metal kompozit malzemeler, multilayer ambalaj atıkları ve karışık endüstriyel atıkların hassas parçalanmasında etkilidir.',
      paragraph2: 'İleri dörtlü şaft mekanizması, farklı malzeme katmanlarını birbirinden ayırmadan homojen boyuta getirir. Touch screen PLC kontrol, otomatik boyut tespit sensörleri ve adaptif hız kontrolü ile maksimum ayrıştırma verimi sağlar. 10-50 mm hassas elek sistemi ile çıkış boyutu tam kontrol edilebilir.',
      paragraph3: 'QS-50, orta ölçekli e-atık geri dönüşüm tesisleri, multilayer ambalaj ayırma tesisleri, kompozit malzeme işleme merkezleri için tasarlanmıştır. Otomatik besleyici konveyör, vibrasyon eleme ünitesi ve multi-seperatör sistemleri ile entegre edilebilir.'
    }
  },
  'metal': {
    'MP-1000': {
      intro: 'MP-1000 metal parçalama makinesi, demir, çelik, alüminyum ve karışık metal hurdalarının yüksek verimli parçalanması için güçlü bir çözümdür.',
      paragraph1: 'MP-1000 model, 90 kW ultra güçlü motor ile 1000 mm rotor uzunluğu ve özel takviyeli bıçak sistemi sunar. 1500-2500 kg/saat kapasite ile demir profi ller, çelik saclar, alüminyum hurdalar, bakır kablolar ve karışık metal atıkların parçalanmasında üstün performans gösterir.',
      paragraph2: 'Özel sertleştirilmiş çelik bıçaklar (HRC 58-62), metal işlemede maksimum dayanıklılık sağlar. Hidrolik besleme sistemi ve otomatik yük algılama, ağır ve kalın metallerle bile sorunsuz çalışma garantisi verir. PLC kontrollü ters çalışma ve acil durdurma sistemleri operatör güvenliğini maksimize eder.',
      paragraph3: 'MP-1000, hurda metal geri dönüşüm tesisleri, otomotiv geri kazanım merkezleri, demirçelik fabrikaları ve metal işleme atölyeleri için ideal çözümdür. Manyetik seperatör ile demir-demir dışı metal ayrımı yapılabilir. CE sertifikalı yüksek güvenlik standartları ile donatılmıştır.'
    }
  },
  'granulator': {
    'GR-300': {
      intro: 'GR-300 granülatör makinesi, plastik enjeksiyon atıkları, film atıkları ve küçük plastik parçaların yüksek kaliteli granül haline getirilmesi için tasarlanmıştır.',
      paragraph1: 'GR-300 model, 15 kW yüksek devirli motor ile 300 mm rotor çapı ve keskin bıçak geometrisi sunar. 150-300 kg/saat kapasite ile PP, PE, PVC, ABS plastik türlerinin homojen granüle edilmesini sağlar. Kompakt tasarımı sayesinde enjeksiyon makinesi yanına yerleştirilebilir.',
      paragraph2: 'Hassas bıçak açı tasarımı ve yüksek devir sistemi, plastikleri ezmeden keskin şekilde granülleyerek toz oluşumunu minimize eder. Otomatik elek değiştirme sistemi ile 3-12 mm arası granül boyutu seçilebilir. Gürültü izolasyonu ve titreşim damperleri ile sessiz çalışma sağlar.',
      paragraph3: 'GR-300, plastik enjeksiyon atölyeleri, film üretim tesisleri, plastik profil üreticileri ve küçük geri dönüşüm tesisleri için ekonomik bir çözümdür. Enjeksiyon makinesine doğrudan bağlanabilir veya bağımsız çalışabilir. Kolay bakım ve hızlı bıçak değişimi özellikleri sunar.'
    }
  },
  'baler': {
    'BP-60': {
      intro: 'BP-60 balyalama makinesi, kağıt, karton, plastik ve tekstil atıklarının sıkıştırılarak depolama ve nakliye maliyetlerinin azaltılması için kompakt bir çözümdür.',
      paragraph1: 'BP-60 model, 25 ton hidrolik basınç gücü ile 800x600x1000 mm balya boyutu üretir. 150-250 kg ağırlığında balyalar oluşturarak depolama alanından %80\'e kadar tasarruf sağlar. Kağıt, karton, PET şişe, plastik film, tekstil ve köpük malzemelerin balyalanmasında etkilidir.',
      paragraph2: 'Tam otomatik PLC kontrol sistemi, balya tamamlandığında uyarı verir ve otomatik bağlama önerir. Çift etkili hidrolik silindir sistemi, hızlı sıkıştırma ve geri dönüş sağlar. Manuel bağlama sistemi ile operatör güvenliği maksimize edilmiştir.',
      paragraph3: 'BP-60, küçük ve orta ölçekli geri dönüşüm tesisleri, süpermarketler, kağıt üretim tesisleri, tekstil atölyeleri için idealdir. Kompakt boyutları sayesinde dar alanlara yerleştirilebilir. Düşük enerji tüketimi ve minimal bakım gereksinimi ile işletme maliyetlerini düşürür.'
    },
    'BP-100': {
      intro: 'BP-100 balyalama makinesi, yüksek hacimli atık işleyen tesisler için güçlü sıkıştırma kapasitesi sunan profesyonel bir balya presidir.',
      paragraph1: 'BP-100 model, 100 ton hidrolik basınç gücü ile 1100x800x1200 mm büyük balya boyutu üretir. 400-600 kg ağırlığında balyalar oluşturarak maksimum nakliye verimliliği sağlar. Karton, kağıt, PET, HDPE, tekstil, plastik film ve büyük hacimli ambalaj atıklarının sıkıştırılmasında üstün performans gösterir.',
      paragraph2: 'İleri PLC otomasyon sistemi, tam otomatik çalışma modunu destekler. Konveyör besleme entegrasyonu, otomatik dolum tespiti ve otomatik bağlama sistemi ile operatör müdahalesi minimize edilir. Çift hidrolik pompa sistemi, hızlı çevrim süresi ve yüksek üretim kapasitesi garantisi verir.',
      paragraph3: 'BP-100, büyük geri dönüşüm kompleksleri, kağıt fabrikaları, süpermarket zincirleri, lojistik merkezleri ve belediye atık yönetim tesisleri için tasarlanmıştır. Tam otomatik hat entegrasyonu, konveyör sistemleri ve SCADA bağlantısı ile kombine edilebilir. Yüksek dayanıklılık ve uzun ömür garantisi sunar.'
    }
  },
  'conveyor': {
    'CV-3M': {
      intro: 'CV-3M konveyör sistemi, 3 metre uzunluğunda kompakt malzeme taşıma çözümü sunan modüler bir taşıma bandıdır.',
      paragraph1: 'CV-3M model, 1.5 kW motor gücü ile 500 mm bant genişliği ve 0-30 m/dk ayarlanabilir hız kontrolü sunar. 500 kg/saat taşıma kapasitesi ile parçalanmış plastik, ahşap, kağıt ve hafif endüstriyel atıkların kısa mesafe transferinde kullanılır.',
      paragraph2: 'Modüler yapı tasarımı, kolay kurulum ve istenilen yüksekliğe ayarlama imkanı verir. Kayar kızak sistemi ve ayarlanabilir destek ayakları ile 0-45 derece açı ayarı yapılabilir. Kolay temizlenebilir yüzey ve hızlı bant değişimi özellikleri sunar.',
      paragraph3: 'CV-3M, küçük parçalama hatları, paketleme istasyonları, malzeme transfer noktaları için ekonomik bir çözümdür. Kompakt boyutları sayesinde dar alanlarda ve mobil uygulamalarda kullanılabilir. Düşük enerji tüketimi ve sessiz çalışma özellikleri sunar.'
    },
    'CV-5M': {
      intro: 'CV-5M konveyör sistemi, 5 metre uzunluğunda orta mesafe malzeme taşıma için güvenilir ve verimli bir çözüm sunar.',
      paragraph1: 'CV-5M model, 2.2 kW motor gücü ile 600 mm bant genişliği sunar. 800 kg/saat taşıma kapasitesi ile parçalanmış atıkların, ayrıştırılmış malzemelerin ve işlenmiş ürünlerin orta mesafe transferini sağlar. Değişken hız kontrolü ile farklı malzeme akış hızlarına uyum sağlar.',
      paragraph2: 'Galvanizli çelik konstrüksiyon ve dayanıklı rulman sistemi, uzun ömürlü kullanım garantisi verir. PLC entegrasyonu, otomatik başlatma-durdurma ve acil durdurma sistemleri ile donatılmıştır. Yan koruma bariyerleri malzeme dökülmesini önler.',
      paragraph3: 'CV-5M, orta ölçekli geri dönüşüm tesisleri, parçalama hatları arası transfer, seperatör besleme uygulamaları için idealdir. Parçalama makinesi çıkışından balyalama makinesine veya depolama alanına malzeme transferinde kullanılır.'
    },
    'CV-10M': {
      intro: 'CV-10M konveyör sistemi, 10 metre uzunluğunda endüstriyel sınıf, yüksek kapasiteli malzeme taşıma bandıdır.',
      paragraph1: 'CV-10M model, 3 kW güçlü motor ile 800 mm geniş bant ve takviyeli konstrüksiyon sunar. 1500 kg/saat taşıma kapasitesi ile ağır ve yüksek hacimli malzemelerin uzun mesafe transferinde kullanılır. Değişken frekanslı sürücü (inverter) ile hassas hız kontrolü yapılabilir.',
      paragraph2: 'Ağır hizmet tipi çelik gövde, endüstriyel rulmanlar ve çift zincir tahrik sistemi, 7/24 kesintisiz çalışma kapasitesi sağlar. PLC ve SCADA entegrasyonu, uzaktan kontrol ve otomasyon sistemlerine bağlanabilir. Bakım kolaylığı için açılabilir yan kapaklar ve hızlı müdahale noktaları mevcuttur.',
      paragraph3: 'CV-10M, büyük geri dönüşüm kompleksleri, endüstriyel üretim hatları, lojistik tesisleri ve depolama sistemleri için tasarlanmıştır. Yükseklik farkı olan uygulamalarda eğimli konveyör olarak kullanılabilir. Modüler yapısı sayesinde birden fazla ünite birleştirilerek uzatılabilir.'
    }
  },
  'separator': {
    'MS-1': {
      intro: 'MS-1 malzeme ayırıcı, manyetik ayırma teknolojisi ile demir ve ferröz metallerin plastik ve diğer malzemelerden ayrıştırılmasını sağlar.',
      paragraph1: 'MS-1 model, 1.1 kW motor gücü ve güçlü neodymium mıknatıs sistemi ile 500 mm bant genişliğinde çalışır. 800 kg/saat işleme kapasitesi ile karışık atık akışından demir, çelik ve ferröz metalleri %98 verimlilikle ayırır. Konveyör hattına kolayca entegre edilebilir.',
      paragraph2: 'Otomatik temizleme sistemi, toplanan metalleri ayrı bir toplama konveyörüne aktarır. Ayarlanabilir manyetik alan gücü, farklı metal boyutları ve ağırlıklarına göre optimize edilebilir. Kompakt tasarımı sayesinde mevcut hatlar üzerine sonradan eklenebilir.',
      paragraph3: 'MS-1, plastik geri dönüşüm tesisleri, karışık atık işleme merkezleri, e-atık ayırma tesisleri için ekonomik bir çözümdür. Parçalama makinesi çıkışına monte edilerek temiz malzeme akışı sağlar. Minimal bakım gereksinimi ve uzun ömürlü mıknatıs sistemi ile düşük işletme maliyeti sunar.'
    },
    'MS-2': {
      intro: 'MS-2 malzeme ayırıcı, hava seperatörü teknolojisi ile hafif ve ağır malzemelerin yoğunluk bazlı ayrıştırılmasını sağlayan ileri bir sistemdir.',
      paragraph1: 'MS-2 model, 5.5 kW hava üfleyici motor ve hassas hava akış kontrolü ile çalışır. 1200 kg/saat işleme kapasitesi ile plastik-metal, plastik-ahşap, kağıt-plastik gibi karışık malzemeleri yoğunluk farkına göre ayırır. Otomatik kontrol sistemi ile %95 ayırma verimliliği sağlar.',
      paragraph2: 'Çift kanal sistemi, hafif malzemeleri (plastik, kağıt, köpük) ve ağır malzemeleri (metal, cam, taş) ayrı çıkışlara yönlendirir. Ayarlanabilir hava hızı ve açı kontrolü ile farklı malzeme kombinasyonlarına uyum sağlar. Toz toplama sistemi entegrasyonu çevre dostu çalışma sağlar.',
      paragraph3: 'MS-2, ileri geri dönüşüm tesisleri, multilayer ambalaj ayırma merkezleri, kompozit malzeme işleme hatları için idealdir. Parçalama ve manyetik seperatör sonrası kullanılarak en yüksek ayırma kalitesini sağlar. Tam otomatik PLC kontrol ve SCADA entegrasyonu ile endüstri 4.0 uyumludur.'
    }
  }
};

/**
 * Get model-specific description
 */
export const getModelDescription = (productType: string, modelName: string): ModelDescription | null => {
  return modelDescriptions[productType]?.[modelName] || null;
};

/**
 * Check if model has custom description
 */
export const hasModelDescription = (productType: string, modelName: string): boolean => {
  return !!modelDescriptions[productType]?.[modelName];
};
