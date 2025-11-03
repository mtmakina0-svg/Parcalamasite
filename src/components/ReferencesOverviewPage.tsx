import React from 'react';
import { motion } from 'motion/react';
import { Award, Globe, ThumbsUp, Building2, Factory, Briefcase, Landmark } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ReferencesOverviewPageProps {
  onBackToMain: () => void;
}

interface Partner {
  name: string;
  logo: string;
  category: 'industry' | 'government' | 'defense' | 'global';
  alt: string;
}

// Comprehensive partner list with SEO-optimized categorization
const partners: Partner[] = [
  // Global Corporations
  { name: 'BP', logo: 'https://i.ibb.co/84Y2j2yB/bp-logo-png-seeklogo-21836.png', category: 'global', alt: 'BP - British Petroleum Logo' },
  { name: 'Castrol', logo: 'https://i.ibb.co/XfcXKXVQ/castrollogo.png', category: 'global', alt: 'Castrol Motor Yağları Logo' },
  { name: 'PepsiCo', logo: 'https://i.ibb.co/PGmvrMtt/Pepsi-Co-logo-svg.png', category: 'global', alt: 'PepsiCo Logo' },
  { name: 'Mercedes-Benz', logo: 'https://i.ibb.co/W4zzSD4P/1200px-Mercedes-Benz-Logo-11.jpg', category: 'global', alt: 'Mercedes-Benz Logo' },
  { name: 'Bosch', logo: 'https://i.ibb.co/JWsYZqCK/Bosch-logo-svg.png', category: 'global', alt: 'Bosch Logo' },
  
  // Industry & Manufacturing
  { name: 'Golden Rose', logo: 'https://i.ibb.co/whyptjcT/golden-rose.png', category: 'industry', alt: 'Golden Rose Kozmetik Logo' },
  { name: 'Betek Boya', logo: 'https://i.ibb.co/FqcdPgpG/betek-boya-logo-brandlogos-net-slepl.png', category: 'industry', alt: 'Betek Boya Logo' },
  { name: 'Melodi Çikolata', logo: 'https://i.ibb.co/7xYjc2rx/melodi-cikolata-logo-png-seeklogo-223826.png', category: 'industry', alt: 'Melodi Çikolata Logo' },
  { name: 'Hun Holding', logo: 'https://i.ibb.co/MmD6MPg/hun-holdng.jpg', category: 'industry', alt: 'Hun Holding Logo' },
  { name: 'Acarsan Holding', logo: 'https://i.ibb.co/k2jDLSJB/Acarsan-Holding-Logo.png', category: 'industry', alt: 'Acarsan Holding Logo' },
  { name: 'Max Royal', logo: 'https://i.ibb.co/FLSK0Ff6/MAXROYAL.jpg', category: 'industry', alt: 'Max Royal Logo' },
  { name: 'TAV', logo: 'https://i.ibb.co/FbS339kJ/TAV.jpg', category: 'industry', alt: 'TAV Havalimanları Holding Logo' },
  { name: 'İGA', logo: 'https://i.ibb.co/JjkZmQry/GA-Havaliman-letmesi-A-logo-svg.png', category: 'industry', alt: 'İstanbul Havalimanı İşletmesi Logo' },
  { name: 'Türk Hava Yolları', logo: 'https://i.ibb.co/Zp88MHGw/TE-Logo.png', category: 'industry', alt: 'Türk Hava Yolları Logo' },
  { name: 'SYM', logo: 'https://i.ibb.co/q3pJKw3x/SYM-svg.png', category: 'industry', alt: 'SYM Logo' },
  { name: 'Artvin', logo: 'https://i.ibb.co/Lz3wyzzZ/ARTV-Nlogo.png', category: 'industry', alt: 'Artvin Logo' },
  { name: 'Humana', logo: 'https://i.ibb.co/k2H5WRHV/Humana-svg.png', category: 'industry', alt: 'Humana Logo' },

  // Defense & High-Tech
  { name: 'ASELSAN', logo: 'https://i.ibb.co/jkW22W0n/ASELSAN-logo-svg.png', category: 'defense', alt: 'ASELSAN - Türk Savunma Sanayi Logo' },
  { name: 'Türk Silahlı Kuvvetleri', logo: 'https://i.ibb.co/JwXgDhdV/Seal-of-the-Turkish-Armed-Forces.png', category: 'defense', alt: 'Türk Silahlı Kuvvetleri Logo' },
  { name: 'MİT', logo: 'https://i.ibb.co/8Lrdgt3Z/Mitlogo-1.png', category: 'defense', alt: 'Milli İstihbarat Teşkilatı Logo' },

  // Government & Public Institutions
  { name: 'T.C. Sağlık Bakanlığı', logo: 'https://i.ibb.co/RpvwTLhw/Logo-of-Ministry-of-Health-Turkey.png', category: 'government', alt: 'T.C. Sağlık Bakanlığı Logo' },
  { name: 'T.C. Adalet Bakanlığı', logo: 'https://i.ibb.co/0v8k8Vt/Logo-of-Ministry-of-Justice-Turkey-svg.png', category: 'government', alt: 'T.C. Adalet Bakanlığı Logo' },
  { name: 'T.C. İçişleri Bakanlığı', logo: 'https://i.ibb.co/dwy09MJy/turkiye-cumhuriyeti-icisleri-bakanligi-logo-png-seeklogo-345237.png', category: 'government', alt: 'T.C. İçişleri Bakanlığı Logo' },
  { name: 'T.C. Merkez Bankası', logo: 'https://i.ibb.co/rGqLYbyc/turkiye-cumhuriyet-merkez-bankasi-logo-png-seeklogo-181809.png', category: 'government', alt: 'T.C. Merkez Bankası Logo' },
  { name: 'Makine ve Kimya Endüstrisi Kurumu', logo: 'https://i.ibb.co/jvPsx5XB/Makine-ve-Kimya-End-strisi-Kurumu-logo-svg.png', category: 'government', alt: 'MESS - Makine ve Kimya Endüstrisi Kurumu Logo' }
];

const categories = [
  { 
    id: 'global', 
    title: 'Küresel Şirketler', 
    icon: Globe, 
    description: 'Dünya çapında tanınan uluslararası şirketler',
    color: 'from-blue-500 to-blue-600'
  },
  { 
    id: 'industry', 
    title: 'Endüstri ve Üretim', 
    icon: Factory, 
    description: 'Sanayi ve üretim sektöründeki önde gelen firmalar',
    color: 'from-orange-500 to-orange-600'
  },
  { 
    id: 'defense', 
    title: 'Savunma ve Yüksek Teknoloji', 
    icon: Briefcase, 
    description: 'Savunma sanayi ve ileri teknoloji kuruluşları',
    color: 'from-red-500 to-red-600'
  },
  { 
    id: 'government', 
    title: 'Kamu Kurumları', 
    icon: Landmark, 
    description: 'Devlet kurumları ve kamu kuruluşları',
    color: 'from-green-500 to-green-600'
  }
];

export const ReferencesOverviewPage = ({ onBackToMain }: ReferencesOverviewPageProps) => {
  const [activeCategory, setActiveCategory] = React.useState<string>('all');

  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F5F7F8]" style={{ fontFamily: 'Mulish, sans-serif' }}>
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#45474B] via-[#3A3C3F] to-[#2F3032]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #F4CE14 2px, transparent 2px), radial-gradient(circle at 80% 80%, #F4CE14 2px, transparent 2px)',
            backgroundSize: '100px 100px',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-[1440px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-24 bg-[#F4CE14] rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Award size={48} className="text-[#1E1E1E]" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#F5F7F8] mb-6">
              İş Ortaklarımız
            </h1>
            <p className="text-xl md:text-2xl text-[#F5F7F8]/90 max-w-4xl mx-auto leading-relaxed">
              Dünya çapında güvenilir iş birliklerimiz ve başarı hikayelerimiz
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#F4CE14] to-[#E5BF12] rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp size={32} className="text-[#1E1E1E]" />
              </div>
              <h3 className="text-5xl text-[#45474B] mb-2">500+</h3>
              <p className="text-lg text-[#45474B]/70">Tamamlanan Proje</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#F4CE14] to-[#E5BF12] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} className="text-[#1E1E1E]" />
              </div>
              <h3 className="text-5xl text-[#45474B] mb-2">35+</h3>
              <p className="text-lg text-[#45474B]/70">İhracat Yapılan Ülke</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#F4CE14] to-[#E5BF12] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 size={32} className="text-[#1E1E1E]" />
              </div>
              <h3 className="text-5xl text-[#45474B] mb-2">250+</h3>
              <p className="text-lg text-[#45474B]/70">İş Ortağı</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#F4CE14] to-[#E5BF12] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-[#1E1E1E]" />
              </div>
              <h3 className="text-5xl text-[#45474B] mb-2">%98</h3>
              <p className="text-lg text-[#45474B]/70">Müşteri Memnuniyeti</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-b from-white to-[#F5F7F8]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl text-[#1E1E1E] mb-4">
              Kategorilere Göre Referanslar
            </h2>
            <p className="text-lg text-[#45474B]/70 max-w-3xl mx-auto">
              Farklı sektörlerden önde gelen kurumlarla çalışıyoruz
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#F4CE14] text-[#1E1E1E] shadow-lg'
                  : 'bg-white text-[#45474B] hover:bg-[#F4CE14]/20'
              }`}
            >
              Tümü ({partners.length})
            </motion.button>
            {categories.map((category) => {
              const count = partners.filter(p => p.category === category.id).length;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg transition-all flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-[#F4CE14] text-[#1E1E1E] shadow-lg'
                      : 'bg-white text-[#45474B] hover:bg-[#F4CE14]/20'
                  }`}
                >
                  <category.icon size={20} />
                  {category.title} ({count})
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-[#F5F7F8]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          {/* Show category description if filtered */}
          {activeCategory !== 'all' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-12 text-center"
            >
              {(() => {
                const cat = categories.find(c => c.id === activeCategory);
                if (!cat) return null;
                const Icon = cat.icon;
                return (
                  <>
                    <div className={`w-16 h-16 bg-gradient-to-br ${cat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl text-[#1E1E1E] mb-2">{cat.title}</h3>
                    <p className="text-[#45474B]/70">{cat.description}</p>
                  </>
                );
              })()}
            </motion.div>
          )}

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all group"
              >
                <div className="aspect-square flex items-center justify-center p-4 bg-[#F5F7F8] rounded-lg group-hover:bg-white transition-colors mb-3">
                  <ImageWithFallback
                    src={partner.logo}
                    alt={partner.alt}
                    className="w-full h-full object-contain"
                    fallbackSrc="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400"
                  />
                </div>
                <h3 className="text-center text-sm text-[#1E1E1E] line-clamp-2">
                  {partner.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-[#45474B] to-[#35373A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="#F4CE14" className="mx-auto mb-6 opacity-50">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
            </svg>
            <p className="text-2xl md:text-3xl text-[#F5F7F8] mb-6 italic leading-relaxed">
              "MT Makina ile çalışmak, yüksek kaliteli ürünler ve güvenilir hizmet almak demektir. 
              Projelerimizde her zaman yanımızda oldular. Parçalama sistemlerindeki uzmanlıkları sayesinde 
              üretim verimliliğimizi %40 artırdık."
            </p>
            <div className="h-1 w-24 bg-[#F4CE14] mx-auto mb-4"></div>
            <p className="text-lg text-[#F5F7F8]/80">— Değerli İş Ortağımız</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#F4CE14] to-[#E5BF12] rounded-3xl p-12 text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl text-[#1E1E1E] mb-6">
              Siz de İş Ortaklarımıza Katılın
            </h2>
            <p className="text-xl text-[#1E1E1E]/80 mb-8 max-w-3xl mx-auto">
              Endüstriyel parçalama sistemleri için güvenilir çözüm ortağınız olmaktan mutluluk duyarız
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1E1E1E] text-[#F4CE14] px-8 py-4 rounded-xl text-lg hover:bg-[#2F3032] transition-colors"
            >
              İletişime Geçin
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#45474B]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <h2 className="text-3xl text-[#F4CE14] mb-12 text-center">Bize Ulaşın</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/15 transition-all"
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
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/15 transition-all"
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
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/15 transition-all"
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
    </div>
  );
};
