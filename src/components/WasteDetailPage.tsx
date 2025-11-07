import React from 'react';
import { motion } from "framer-motion";
import { Button } from './ui/button';
import { ArrowLeft, Check } from 'lucide-react';

interface WasteDetailPageProps {
  categoryId: string;
  onBack: () => void;
}

const wasteData: Record<string, {
  title: string;
  heroImage: string;
  intro: string;
  paragraphs: string[];
  systems: string[];
}> = {
  evsel: {
    title: 'Evsel Atıklar',
    heroImage: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=1920&q=80',
    intro: 'Evsel atıkların geri dönüşümü, çevre sağlığı ve sürdürülebilir yaşam için kritik önem taşır.',
    paragraphs: [
      'MT Makina, evsel atıkların etkili bir şekilde parçalanması ve geri dönüşümü için özel olarak tasarlanmış makineler üretir.',
      'Her proje, yüksek dayanıklılık, düşük enerji tüketimi ve çevre dostu teknoloji prensipleriyle üretilir.',
      'Avrupa standartlarına uygun, uzun ömürlü sistemlerle çevreye katkı sağlayan çözümler sunuyoruz.'
    ],
    systems: [
      'Tek ve çift şaftlı parçalama makineleri',
      'Otomatik besleme sistemleri ve konveyör hatları',
      'Manyetik ve optik ayrıştırma sistemleri',
      'Balya presleri ve depolama çözümleri'
    ]
  },
  elektronik: {
    title: 'Elektronik Atıklar',
    heroImage: 'https://images.unsplash.com/photo-1608653206809-e6a8044173b0?w=1920&q=80',
    intro: 'Elektronik atıklar (e-atık) değerli metallerin geri kazanımı için özel işlem gerektirir.',
    paragraphs: [
      'MT Makina, bilgisayar, telefon, beyaz eşya gibi elektronik atıkların güvenli ve verimli parçalanması için gelişmiş sistemler sunar.',
      'Hassas bıçak teknolojisi ve kontrollü işlem kapasitesi ile değerli metallerin geri kazanımını optimize eder.',
      'Çevre standartlarına tam uyumlu, tehlikeli madde emisyonlarını minimize eden çözümler üretiyoruz.'
    ],
    systems: [
      'Çift şaftlı ağır hizmet tipi parçalama makineleri',
      'Kablo sıyırma ve ayırma sistemleri',
      'PCB parçalama ve değerli metal kazanım hatları',
      'Toz toplama ve filtrasyon sistemleri'
    ]
  },
  lastik: {
    title: 'Lastik Atıklar',
    heroImage: 'https://images.unsplash.com/photo-1761765030682-26f51cfbc034?w=1920&q=80',
    intro: 'Kullanılmış lastiklerin geri dönüşümü hem çevre hem de ekonomi için büyük değer yaratır.',
    paragraphs: [
      'MT Makina, otomobil, kamyon ve iş makinesi lastiklerinin granül haline getirilmesi için yüksek kapasiteli sistemler üretir.',
      'Güçlü motorlar ve özel tasarım bıçaklarla yüksek dayanıklılık sunan lastik parçalama makineleri geliştiriyoruz.',
      'Enerji verimliliği ve uzun ömürlü kullanım için optimize edilmiş teknolojiler sunuyoruz.'
    ],
    systems: [
      'Ön kesim ve birincil parçalama makineleri',
      'İkincil granül parçalama sistemleri',
      'Tel ayırma ve manyetik seperasyon hatları',
      'Toz ve granül boyutlandırma ekipmanları'
    ]
  },
  metal: {
    title: 'Metal Atıklar',
    heroImage: 'https://images.unsplash.com/photo-1625662276901-4a7ec44fbeed?w=1920&q=80',
    intro: 'Metal atıkların geri dönüşümü, doğal kaynakların korunması için en etkili yöntemlerden biridir.',
    paragraphs: [
      'MT Makina, demir, alüminyum, bakır ve diğer metallerin parçalanması için endüstriyel güçte makineler üretir.',
      'Ağır hizmet tipi yapı ve dayanıklı bıçak sistemleriyle yüksek verimlilik sağlar.',
      'Otomotiv, beyaz eşya ve inşaat sektörlerinden kaynaklanan metal atıklar için özel çözümler sunuyoruz.'
    ],
    systems: [
      'Dört şaftlı ağır hizmet tipi parçalama makineleri',
      'Krokodil makasları ve giyotinler',
      'Manyetik seperasyon ve sınıflandırma sistemleri',
      'Hidrolik balya presleri ve paketleme hatları'
    ]
  },
  cam: {
    title: 'Cam Atıklar',
    heroImage: 'https://images.unsplash.com/photo-1706468808971-ee72122572b6?w=1920&q=80',
    intro: 'Cam atıkların geri dönüşümü %100 oranında mümkündür ve enerji tasarrufu sağlar.',
    paragraphs: [
      'MT Makina, şişe, cam elyaf ve pencere camı gibi farklı cam türlerinin kırılması ve granülize edilmesi için özel sistemler geliştirir.',
      'Toz kontrol sistemleri ve güvenlik önlemleri ile çalışan güvenliği önceliklendirir.',
      'Yüksek verimlilik ve düşük işletme maliyeti için optimize edilmiş çözümler sunuyoruz.'
    ],
    systems: [
      'Tek şaftlı cam kırma makineleri',
      'Titreşimli elek ve boyutlandırma sistemleri',
      'Toz toplama ve filtreleme üniteleri',
      'Renk ayırma ve optik sensör sistemleri'
    ]
  },
  kagit: {
    title: 'Kağıt Karton Atıklar',
    heroImage: 'https://images.unsplash.com/photo-1757078059269-0ccbd674b1e4?w=1920&q=80',
    intro: 'Kağıt ve karton atıkların geri dönüşümü orman kaynaklarının korunmasına katkı sağlar.',
    paragraphs: [
      'MT Makina, ofis atıklarından endüstriyel ambalaj kartonlarına kadar geniş yelpazede kağıt parçalama çözümleri sunar.',
      'Yüksek kapasiteli balya açma ve parçalama sistemleri ile işlem verimliliğini artırır.',
      'Hamur haline getirme öncesi hazırlık süreçleri için optimize edilmiş makineler üretiyoruz.'
    ],
    systems: [
      'Balya açma ve ön hazırlık sistemleri',
      'Tek ve çift şaftlı kağıt parçalama makineleri',
      'Konveyör ve otomatik besleme hatları',
      'Yabancı madde ayırma ve temizleme sistemleri'
    ]
  },
  plastik: {
    title: 'Plastik Atıklar',
    heroImage: 'https://images.unsplash.com/photo-1669065514428-b96035a3faf2?w=1920&q=80',
    intro: 'Plastik atıkların geri dönüşümü petrol tüketimini azaltır ve çevre kirliliğini önler.',
    paragraphs: [
      'MT Makina, PET, HDPE, PP, PVC gibi farklı plastik türlerinin parçalanması için özel tasarlanmış makineler üretir.',
      'Film plastiklerden sert plastiklere kadar geniş yelpazede işlem kapasitesi sunar.',
      'Granül boyutlandırma ve yıkama sistemleri ile entegre çözümler geliştiriyoruz.'
    ],
    systems: [
      'Tek ve çift şaftlı plastik kırma makineleri',
      'Film ve şişe ön kırma sistemleri',
      'Yıkama, kurutma ve granül hatları',
      'Aglomerasyon ve yoğunlaştırma sistemleri'
    ]
  },
  organik: {
    title: 'Organik Atıklar',
    heroImage: 'https://images.unsplash.com/photo-1592484773536-263bf52e81fc?w=1920&q=80',
    intro: 'Organik atıkların kompostlanması doğal gübre üretimi ve çevre sağlığı için önemlidir.',
    paragraphs: [
      'MT Makina, gıda atıkları, bahçe atıkları ve tarımsal artıkların parçalanması için hijyenik ve verimli sistemler sunar.',
      'Biyogaz üretimi ve kompostlama süreçlerine hazırlık için optimize edilmiş makineler üretir.',
      'Paslanmaz çelik yapı ve kolay temizleme özellikleri ile hijyen standartlarını karşılar.'
    ],
    systems: [
      'Organik atık parçalama makineleri',
      'Biyogaz ön işleme ve homojenizasyon sistemleri',
      'Kompostlama için hacim küçültme ekipmanları',
      'Koku kontrolü ve filtreleme sistemleri'
    ]
  },
  tibbi: {
    title: 'Tıbbi Atıklar',
    heroImage: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1920&q=80',
    intro: 'Tıbbi atıkların güvenli bertarafı halk sağlığı için kritik öneme sahiptir.',
    paragraphs: [
      'MT Makina, hastane ve sağlık kuruluşlarından kaynaklanan tıbbi atıkların sterilizasyon öncesi parçalanması için özel sistemler geliştirir.',
      'Hijyen standartlarına tam uyumlu, paslanmaz çelik yapı ve kolay sterilize edilebilir tasarım sunar.',
      'Kapalı sistem çalışma ve hava filtreleme özellikleri ile operatör güvenliğini maksimize eder.'
    ],
    systems: [
      'Tıbbi atık parçalama ve dezenfeksiyon sistemleri',
      'Otoklav entegrasyonlu işlem hatları',
      'HEPA filtreli hava temizleme sistemleri',
      'Otomatik besleme ve güvenli boşaltma mekanizmaları'
    ]
  },
  agac: {
    title: 'Ağaç Kökü Atıkları',
    heroImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80',
    intro: 'Ağaç kökleri ve bahçe atıklarının parçalanması biyomas enerjisi için değerli hammadde sağlar.',
    paragraphs: [
      'MT Makina, ağaç kökleri, dallar ve peyzaj atıklarının parçalanması için yüksek torklu makineler üretir.',
      'Zorlu malzemeleri işleyebilecek dayanıklılıkta bıçak sistemleri ve güçlü motor yapıları geliştirir.',
      'Biyomas yakıtı üretimi ve kompost yapımı için optimum boyutlandırma sağlar.'
    ],
    systems: [
      'Ağır hizmet tipi ağaç kırma makineleri',
      'Mobil kırma ve öğütme sistemleri',
      'Çok kademeli boyutlandırma ekipmanları',
      'Konveyör ve depolama çözümleri'
    ]
  },
  hayvan: {
    title: 'Hayvan Atıkları',
    heroImage: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=80',
    intro: 'Hayvansal atıkların uygun şekilde işlenmesi hijyen ve çevre sağlığı için zorunludur.',
    paragraphs: [
      'MT Makina, mezbaha, çiftlik ve gıda işleme tesislerinden kaynaklanan hayvansal atıkların parçalanması için hijyenik sistemler sunar.',
      'Paslanmaz çelik yapı, kolay temizleme ve dezenfeksiyon özellikleri ile sağlık standartlarını karşılar.',
      'Biyogaz üretimi ve gübre yapımı süreçlerine hazırlık için özel çözümler geliştiriyoruz.'
    ],
    systems: [
      'Paslanmaz çelik hayvansal atık kırma makineleri',
      'Biyogaz ön işleme ve homojenizasyon sistemleri',
      'Yağ ayırma ve sıvı-katı seperasyon üniteleri',
      'Koku kontrol ve havalandırma sistemleri'
    ]
  },
  ambalaj: {
    title: 'Ambalaj Atıkları',
    heroImage: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=1920&q=80',
    intro: 'Ambalaj atıkları plastik, kağıt ve metal bileşenlerinin ayrıştırılmasını gerektirir.',
    paragraphs: [
      'MT Makina, çok katmanlı ambalajlar ve kompozit malzemelerin parçalanması için özel tasarlanmış sistemler üretir.',
      'Farklı malzemelerin ayrıştırılması ve geri kazanımı için entegre hatlar geliştirir.',
      'Yüksek verimlilik ve minimum kayıp ile geri dönüşüm süreçlerini optimize eder.'
    ],
    systems: [
      'Çok katmanlı ambalaj parçalama makineleri',
      'Optik ve hava seperasyon sistemleri',
      'Yıkama ve kurutma hatları',
      'Malzeme bazında sınıflandırma ekipmanları'
    ]
  },
  palet: {
    title: 'Palet Atıkları',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80',
    intro: 'Ahşap paletlerin parçalanması ahşap tozu ve biyomas yakıtı üretimi için önemlidir.',
    paragraphs: [
      'MT Makina, kullanılmış ahşap paletlerin kırılması ve boyutlandırılması için yüksek kapasiteli makineler üretir.',
      'Metal bağlantı elemanlarının otomatik ayrıştırılması için manyetik seperasyon sistemleri entegre eder.',
      'Ahşap tozu, pellet ve biyomas yakıtı üretimi için optimum boyutlarda kırma sağlar.'
    ],
    systems: [
      'Ağır hizmet tipi palet kırma makineleri',
      'Manyetik metal ayırma sistemleri',
      'Çok kademeli boyutlandırma ekipmanları',
      'Toz toplama ve paketleme sistemleri'
    ]
  },
  tekstil: {
    title: 'Tekstil Atıkları',
    heroImage: 'https://images.unsplash.com/photo-1610910160298-45c99e1e0b2f?w=1920&q=80',
    intro: 'Tekstil atıklarının geri dönüşümü doğal kaynakların korunması ve atık azaltımı için kritiktir.',
    paragraphs: [
      'MT Makina, giysi, kumaş ve ev tekstili atıklarının parçalanması için özel kesici sistemler geliştirir.',
      'Lif geri kazanımı ve yeniden kullanım süreçleri için optimize edilmiş makineler üretir.',
      'Yüksek hacimli işlem kapasitesi ve düşük enerji tüketimi ile ekonomik çözümler sunar.'
    ],
    systems: [
      'Tekstil parçalama ve lif açma makineleri',
      'Düğme ve fermuar ayırma sistemleri',
      'Renk bazında sınıflandırma ekipmanları',
      'Lif toplayıcı ve paketleme sistemleri'
    ]
  },
  aty: {
    title: 'ATY (Atık Türevli Yakıt) Atıkları',
    heroImage: 'https://images.unsplash.com/photo-1566976370648-80b3fb37f411?w=1920&q=80',
    intro: 'ATY üretimi geri dönüşüme uygun olmayan atıkların enerji kaynağına dönüştürülmesini sağlar.',
    paragraphs: [
      'MT Makina, atık türevli yakıt (RDF/SRF) üretimi için yüksek kapasiteli parçalama ve homojenizasyon sistemleri geliştirir.',
      'Karma atıkların yüksek ısıl değerli yakıta dönüştürülmesi için optimize edilmiş işlem hatları sunar.',
      'Çimento fabrikaları ve enerji santralleri için uygun yakıt boyutlandırması sağlar.'
    ],
    systems: [
      'Birincil ve ikincil ATY parçalama makineleri',
      'Ağır materyal ayırma ve eleme sistemleri',
      'Boyutlandırma ve homojenizasyon ekipmanları',
      'Kalori değeri ölçüm ve kalite kontrol sistemleri'
    ]
  }
};

export const WasteDetailPage = ({ categoryId, onBack }: WasteDetailPageProps) => {
  // URL to wasteData key mapping
  const urlToKeyMap: Record<string, string> = {
    'evsel-atiklar': 'evsel',
    'lastik-atiklari': 'lastik',
    'cam-atiklar': 'cam',
    'plastik-atiklar': 'plastik',
    'tibbi-atiklar': 'tibbi',
    'elektronik-atiklar': 'elektronik',
    'metal-atiklar': 'metal',
    'kagit-karton-atiklar': 'kagit',
    'organik-atiklar': 'organik',
    'hayvan-atiklari': 'hayvan',
    // Multi-language support
    'household-waste': 'evsel',
    'tire-waste': 'lastik',
    'glass-waste': 'cam',
    'plastic-waste': 'plastik',
    'medical-waste': 'tibbi',
    'electronic-waste': 'elektronik',
    'metal-waste': 'metal',
    'paper-cardboard-waste': 'kagit',
    'organic-waste': 'organik',
    'animal-waste': 'hayvan',
    // Russian
    'bytovye-othody': 'evsel',
    'shinnye-othody': 'lastik',
    'steklyannye-othody': 'cam',
    'plastikovye-othody': 'plastik',
    'meditsinskie-othody': 'tibbi',
    'elektronnye-othody': 'elektronik',
    'metallicheskie-othody': 'metal',
    'bumazhnye-othody': 'kagit',
    'organicheskie-othody': 'organik',
    'zhivotnye-othody': 'hayvan',
    // Arabic
    'nفايات-منزلية': 'evsel',
    'نفايات-الاطارات': 'lastik',
    'نفايات-زجاجية': 'cam',
    'نفايات-بلاستيكية': 'plastik',
    'نفايات-طبية': 'tibbi',
    'نفايات-الكترونية': 'elektronik',
    'نفايات-معدنية': 'metal',
    'نفايات-ورقية': 'kagit',
    'نفايات-عضوية': 'organik',
    'نفايات-حيوانية': 'hayvan'
  };

  // Get the actual data key from URL
  const dataKey = urlToKeyMap[categoryId] || categoryId;
  const data = wasteData[dataKey];

  // If category not found, redirect back to waste categories
  React.useEffect(() => {
    if (!data) {
      onBack();
    }
  }, [data, onBack]);

  if (!data) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#F5F7F8]" style={{ fontFamily: 'Mulish, sans-serif' }}>
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30,30,30,0.5), rgba(69,71,75,0.7)), url('${data.heroImage}')`,
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block bg-[#F4CE14] px-8 py-4 rounded-lg"
          >
            <h1 className="text-4xl md:text-5xl text-[#1E1E1E]">{data.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="max-w-5xl mx-auto">
            
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Button
                onClick={onBack}
                variant="outline"
                className="border-[#45474B] text-[#45474B] hover:bg-[#45474B]/10"
              >
                <ArrowLeft size={18} className="mr-2" />
                Tüm Atık Türleri
              </Button>
            </motion.div>

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-10 shadow-md mb-8"
            >
              <h2 className="text-2xl md:text-3xl text-[#1E1E1E] mb-6">
                Yerel Üretim, Çevre Dostu Çözümler
              </h2>
              <p className="text-lg text-[#45474B] mb-6 italic leading-relaxed">
                {data.intro}
              </p>
              <div className="space-y-4 text-base text-[#45474B] leading-relaxed">
                {data.paragraphs.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Systems List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-[#45474B] to-[#35373A] rounded-lg p-10 shadow-lg mb-10"
            >
              <h3 className="text-2xl text-[#F4CE14] mb-6">
                Üretimini Gerçekleştirdiğimiz Başlıca Sistemler:
              </h3>
              <ul className="space-y-3">
                {data.systems.map((system, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start text-[#F5F7F8] text-lg"
                  >
                    <Check size={24} className="text-[#F4CE14] mr-3 flex-shrink-0 mt-0.5" />
                    <span>{system}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-lg p-10 shadow-md text-center"
            >
              <p className="text-xl text-[#45474B] mb-6 leading-relaxed">
                Detaylı bilgi ve teklif almak için hemen bizimle iletişime geçin.
              </p>
              <Button
                onClick={() => window.open('https://wa.me/905423109930?text=Merhaba%20MT%20Makina%2C%20' + data.title + '%20hakkında%20bilgi%20almak%20istiyorum.', '_blank')}
                size="lg"
                className="bg-[#F4CE14] text-[#1E1E1E] hover:bg-[#F4CE14]/90 hover:shadow-lg transition-all px-12 py-6 text-lg"
              >
                Hemen Teklif Al!
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#45474B] to-[#35373A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <h2 className="text-3xl text-[#F4CE14] mb-12 text-center">Bize Ulaşın</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#F4CE14] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" fill="#1E1E1E" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl text-[#F5F7F8] mb-3">Adres</h3>
              <p className="text-[#F5F7F8]/90 leading-relaxed">
                Cumhuriyet Mah. 1983 Sk. Kent Palas 2 K:7 D:85-86 PK:34512 Esenyurt / İstanbul / TÜRKİYE
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#F4CE14] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" fill="#1E1E1E" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-xl text-[#F5F7F8] mb-3">Telefon</h3>
              <p className="text-[#F5F7F8]/90 text-lg">+90 212 613 31 82</p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#F4CE14] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" fill="#1E1E1E" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-xl text-[#F5F7F8] mb-3">E-Posta</h3>
              <p className="text-[#F5F7F8]/90 text-lg">info@mtmakina.com.tr</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Kurumsal */}
            <div>
              <h3 className="text-xl text-[#F4CE14] mb-4">Kurumsal</h3>
              <ul className="space-y-2 text-[#F5F7F8]/80">
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer" onClick={onBack}>Ana Sayfa</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Hakkımızda</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Belgelerimiz</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Fuar</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Referanslarımız</li>
              </ul>
            </div>

            {/* Ürünler */}
            <div>
              <h3 className="text-xl text-[#F4CE14] mb-4">Ürünler</h3>
              <ul className="space-y-2 text-[#F5F7F8]/80">
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Parçalama Makineleri</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Ayrıştırma Sistemleri</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Yakma Fırınları</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Balya Presleri</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Tesisler</li>
              </ul>
            </div>

            {/* Bize Ulaşın */}
            <div>
              <h3 className="text-xl text-[#F4CE14] mb-4">Bize Ulaşın</h3>
              <ul className="space-y-2 text-[#F5F7F8]/80">
                <li>E: info@mtmakina.com.tr</li>
                <li>T: +90 212 613 31 82</li>
                <li>M: +90 542 310 99 30</li>
                <li className="pt-2 leading-relaxed">
                  Cumhuriyet Mah. 1983 Sk. Kent Palas 2 K:7 D:85-86 PK:34512 Esenyurt / İstanbul / TÜRKİYE
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-[#F5F7F8]/20 pt-8">
            <div className="flex justify-center items-center gap-6 mb-6">
              <a href="https://www.linkedin.com/company/mtmakina" target="_blank" rel="noopener noreferrer" className="text-[#F5F7F8]/80 hover:text-[#F4CE14] transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@MTMakinaofficial" target="_blank" rel="noopener noreferrer" className="text-[#F5F7F8]/80 hover:text-[#F4CE14] transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/mtmakina" target="_blank" rel="noopener noreferrer" className="text-[#F5F7F8]/80 hover:text-[#F4CE14] transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <p className="text-center text-[#F5F7F8]/60">© 2025 MT Makina Ltd. Şti. - Tüm Hakları Saklıdır</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
