import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface WasteDetailPageProps {
  categoryId: string;
  onBack: () => void;
}

export const WasteDetailPage = ({ categoryId, onBack }: WasteDetailPageProps) => {
  const { t } = useLanguage();
  
  // Get translated waste data
  const getWasteData = (key: string) => {
    const wasteDataMap: Record<string, any> = {
      evsel: {
        title: t('waste_household'),
        heroImage: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=1920&q=80',
        intro: t('waste_evsel_intro'),
        paragraphs: [t('waste_evsel_para1'), t('waste_evsel_para2'), t('waste_evsel_para3')],
        systems: [t('waste_evsel_system1'), t('waste_evsel_system2'), t('waste_evsel_system3'), t('waste_evsel_system4')]
      },
      elektronik: {
        title: t('waste_electronic'),
        heroImage: 'https://images.unsplash.com/photo-1608653206809-e6a8044173b0?w=1920&q=80',
        intro: t('waste_elektronik_intro'),
        paragraphs: [t('waste_elektronik_para1'), t('waste_elektronik_para2'), t('waste_elektronik_para3')],
        systems: [t('waste_elektronik_system1'), t('waste_elektronik_system2'), t('waste_elektronik_system3'), t('waste_elektronik_system4')]
      },
      lastik: {
        title: t('waste_tire'),
        heroImage: 'https://images.unsplash.com/photo-1761765030682-26f51cfbc034?w=1920&q=80',
        intro: t('waste_lastik_intro'),
        paragraphs: [t('waste_lastik_para1'), t('waste_lastik_para2'), t('waste_lastik_para3')],
        systems: [t('waste_lastik_system1'), t('waste_lastik_system2'), t('waste_lastik_system3'), t('waste_lastik_system4')]
      },
      metal: {
        title: t('waste_metal'),
        heroImage: 'https://images.unsplash.com/photo-1625662276901-4a7ec44fbeed?w=1920&q=80',
        intro: t('waste_metal_intro'),
        paragraphs: [t('waste_metal_para1'), t('waste_metal_para2'), t('waste_metal_para3')],
        systems: [t('waste_metal_system1'), t('waste_metal_system2'), t('waste_metal_system3'), t('waste_metal_system4')]
      },
      cam: {
        title: t('waste_glass'),
        heroImage: 'https://images.unsplash.com/photo-1706468808971-ee72122572b6?w=1920&q=80',
        intro: t('waste_cam_intro'),
        paragraphs: [t('waste_cam_para1'), t('waste_cam_para2'), t('waste_cam_para3')],
        systems: [t('waste_cam_system1'), t('waste_cam_system2'), t('waste_cam_system3'), t('waste_cam_system4')]
      },
      kagit: {
        title: t('waste_paper'),
        heroImage: 'https://images.unsplash.com/photo-1757078059269-0ccbd674b1e4?w=1920&q=80',
        intro: t('waste_kagit_intro'),
        paragraphs: [t('waste_kagit_para1'), t('waste_kagit_para2'), t('waste_kagit_para3')],
        systems: [t('waste_kagit_system1'), t('waste_kagit_system2'), t('waste_kagit_system3'), t('waste_kagit_system4')]
      },
      plastik: {
        title: t('waste_plastic'),
        heroImage: 'https://images.unsplash.com/photo-1669065514428-b96035a3faf2?w=1920&q=80',
        intro: t('waste_plastik_intro'),
        paragraphs: [t('waste_plastik_para1'), t('waste_plastik_para2'), t('waste_plastik_para3')],
        systems: [t('waste_plastik_system1'), t('waste_plastik_system2'), t('waste_plastik_system3'), t('waste_plastik_system4')]
      },
      organik: {
        title: t('waste_organic'),
        heroImage: 'https://images.unsplash.com/photo-1592484773536-263bf52e81fc?w=1920&q=80',
        intro: t('waste_organik_intro'),
        paragraphs: [t('waste_organik_para1'), t('waste_organik_para2'), t('waste_organik_para3')],
        systems: [t('waste_organik_system1'), t('waste_organik_system2'), t('waste_organik_system3'), t('waste_organik_system4')]
      },
      tibbi: {
        title: t('waste_medical'),
        heroImage: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1920&q=80',
        intro: t('waste_tibbi_intro'),
        paragraphs: [t('waste_tibbi_para1'), t('waste_tibbi_para2'), t('waste_tibbi_para3')],
        systems: [t('waste_tibbi_system1'), t('waste_tibbi_system2'), t('waste_tibbi_system3'), t('waste_tibbi_system4')]
      },
      agac: {
        title: t('waste_tree_root'),
        heroImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80',
        intro: t('waste_agac_intro'),
        paragraphs: [t('waste_agac_para1'), t('waste_agac_para2'), t('waste_agac_para3')],
        systems: [t('waste_agac_system1'), t('waste_agac_system2'), t('waste_agac_system3'), t('waste_agac_system4')]
      },
      hayvan: {
        title: t('waste_animal'),
        heroImage: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=80',
        intro: t('waste_hayvan_intro'),
        paragraphs: [t('waste_hayvan_para1'), t('waste_hayvan_para2'), t('waste_hayvan_para3')],
        systems: [t('waste_hayvan_system1'), t('waste_hayvan_system2'), t('waste_hayvan_system3'), t('waste_hayvan_system4')]
      },
      ambalaj: {
        title: t('waste_packaging'),
        heroImage: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=1920&q=80',
        intro: t('waste_ambalaj_intro'),
        paragraphs: [t('waste_ambalaj_para1'), t('waste_ambalaj_para2'), t('waste_ambalaj_para3')],
        systems: [t('waste_ambalaj_system1'), t('waste_ambalaj_system2'), t('waste_ambalaj_system3'), t('waste_ambalaj_system4')]
      },
      palet: {
        title: t('waste_pallet'),
        heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80',
        intro: t('waste_palet_intro'),
        paragraphs: [t('waste_palet_para1'), t('waste_palet_para2'), t('waste_palet_para3')],
        systems: [t('waste_palet_system1'), t('waste_palet_system2'), t('waste_palet_system3'), t('waste_palet_system4')]
      },
      tekstil: {
        title: t('waste_textile'),
        heroImage: 'https://images.unsplash.com/photo-1610910160298-45c99e1e0b2f?w=1920&q=80',
        intro: t('waste_tekstil_intro'),
        paragraphs: [t('waste_tekstil_para1'), t('waste_tekstil_para2'), t('waste_tekstil_para3')],
        systems: [t('waste_tekstil_system1'), t('waste_tekstil_system2'), t('waste_tekstil_system3'), t('waste_tekstil_system4')]
      },
      aty: {
        title: t('waste_aty'),
        heroImage: 'https://images.unsplash.com/photo-1566976370648-80b3fb37f411?w=1920&q=80',
        intro: t('waste_aty_intro'),
        paragraphs: [t('waste_aty_para1'), t('waste_aty_para2'), t('waste_aty_para3')],
        systems: [t('waste_aty_system1'), t('waste_aty_system2'), t('waste_aty_system3'), t('waste_aty_system4')]
      }
    };
    return wasteDataMap[key];
  };
  
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
  const data = getWasteData(dataKey);

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
                {t('waste_back_button')}
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
                {t('waste_local_production')}
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
                {t('waste_systems_title')}
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
                {t('waste_cta_text')}
              </p>
              <Button
                onClick={() => window.open('https://wa.me/905423109930?text=Merhaba%20MT%20Makina%2C%20' + data.title + '%20hakkında%20bilgi%20almak%20istiyorum.', '_blank')}
                size="lg"
                className="bg-[#F4CE14] text-[#1E1E1E] hover:bg-[#F4CE14]/90 hover:shadow-lg transition-all px-12 py-6 text-lg"
              >
                {t('waste_quote_button')}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#45474B] to-[#35373A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <h2 className="text-3xl text-[#F4CE14] mb-12 text-center">{t('tech_contact_title')}</h2>
          
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
              <h3 className="text-xl text-[#F5F7F8] mb-3">{t('tech_contact_address')}</h3>
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
              <h3 className="text-xl text-[#F5F7F8] mb-3">{t('tech_contact_phone')}</h3>
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
              <h3 className="text-xl text-[#F5F7F8] mb-3">{t('tech_contact_email')}</h3>
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
              <h3 className="text-xl text-[#F4CE14] mb-4">{t('footer_corporate')}</h3>
              <ul className="space-y-2 text-[#F5F7F8]/80">
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer" onClick={onBack}>{t('footer_home')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_about')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_certificates')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_fair')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_references')}</li>
              </ul>
            </div>

            {/* Ürünler */}
            <div>
              <h3 className="text-xl text-[#F4CE14] mb-4">{t('footer_products')}</h3>
              <ul className="space-y-2 text-[#F5F7F8]/80">
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_shredders')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_separation')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_incinerators')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_balers')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_facilities')}</li>
              </ul>
            </div>

            {/* Bize Ulaşın */}
            <div>
              <h3 className="text-xl text-[#F4CE14] mb-4">{t('footer_contact')}</h3>
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
            <p className="text-center text-[#F5F7F8]/60">{t('footer_copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
