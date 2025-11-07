import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from './LanguageContext';
import { MapPin, Phone, Mail, MessageCircle, Globe2, Calculator, HelpCircle } from 'lucide-react';

export const ContactSection = () => {
  const { t, isRTL } = useLanguage();

  const headquarters = {
    id: 'headquarters',
    title: 'Genel Merkez',
    icon: MapPin,
    info: 'Cumhuriyet Mahallesi, Nazım Hikmet Bulvarı, 1983 Sk. Kent Palas 2 Kat: 7 D: 85 - 86, PK.: 34512 Esenyurt / İSTANBUL',
  };

  const contactItems = [
    {
      id: 'sales',
      title: 'Satış',
      icon: Mail,
      info: 'info@mtmakina.com.tr',
    },
    {
      id: 'export',
      title: 'Dış Ticaret',
      icon: Globe2,
      info: 'export@mtmakina.com.tr',
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      icon: MessageCircle,
      info: '+90 542 310 99 30',
    },
    {
      id: 'accounting',
      title: 'Muhasebe',
      icon: Calculator,
      info: 'muhasebe@mtmakina.com.tr',
    },
    {
      id: 'consulting',
      title: 'Danışma',
      icon: HelpCircle,
      info: 'danisma@mtmakina.com.tr',
    },
  ];

  return (
    <section
      id="contact"
      className="py-32 bg-[#F5F7F8] relative"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-[#1E1E1E] mb-6"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
          >
            {t('contact_title')}
          </h2>
        </motion.div>

        {/* Headquarters Card - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-[1200px] mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-[#F4CE14] transition-all border-2 border-transparent">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Icon - Orange/Yellow gradient matching other icons */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#F4CE14] to-[#E5BF12] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <MapPin size={32} className="text-[#1E1E1E]" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl text-[#1E1E1E] mb-3" style={{ fontWeight: 700 }}>
                  {headquarters.title}
                </h3>
                <p className="text-lg text-[#45474B] leading-relaxed">
                  {headquarters.info}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Contact Cards - Single Row */}
        <div className="flex flex-wrap justify-center gap-6 max-w-[1400px] mx-auto">
          {contactItems.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
                style={{ width: '220px' }}
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:border-[#F4CE14] transition-all border-2 border-transparent h-full flex flex-col items-center justify-center min-h-[220px]">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#F4CE14] to-[#E5BF12] rounded-full flex items-center justify-center mb-4 shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-[#1E1E1E]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg text-[#1E1E1E] mb-3 text-center" style={{ fontWeight: 600 }}>
                    {contact.title}
                  </h3>

                  {/* Contact Info */}
                  <div className="text-sm text-[#45474B] leading-relaxed text-center break-words w-full px-2">
                    {contact.info}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
