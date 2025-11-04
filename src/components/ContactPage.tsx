import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Send, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useLanguage } from './LanguageContext';

interface ContactPageProps {
  onBackToMain: () => void;
}

export const ContactPage = ({ onBackToMain }: ContactPageProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare email body
    const emailSubject = encodeURIComponent('İletişim Formu - MT Makina');
    const emailBody = encodeURIComponent(
      `Ad Soyad: ${formData.name}\n` +
      `E-posta: ${formData.email}\n` +
      `Telefon: ${formData.phone}\n\n` +
      `Mesaj:\n${formData.message}`
    );
    
    // Open email client (frontend implementation)
    // Backend will handle actual email sending in production
    window.location.href = `mailto:info@mtmakina.com.tr?subject=${emailSubject}&body=${emailBody}`;
    
    // Show success message
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F7F8]" style={{ fontFamily: 'Mulish, sans-serif' }}>
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#45474B] via-[#3A3C3F] to-[#2F3032]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-[1440px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Mail size={48} className="text-[#F4CE14]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#F5F7F8] mb-8" style={{ fontWeight: 700 }}>
              İletişim
            </h1>
            
            {/* Animated Yellow Divider - Two lines meeting in center */}
            <div className="relative w-[200px] h-[4px] mx-auto mb-6 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
                className="absolute left-0 top-0 w-[100px] h-full bg-[#F4CE14]"
              ></motion.div>
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
                className="absolute right-0 top-0 w-[100px] h-full bg-[#F4CE14]"
              ></motion.div>
            </div>

            <p className="text-xl md:text-2xl text-[#F5F7F8]/90 max-w-3xl mx-auto">
              Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-10"
            >
              <h2 className="text-3xl text-[#45474B] mb-6" style={{ fontWeight: 700 }}>
                Bize Ulaşın
              </h2>
              <p className="text-[#555555] mb-8">
                Formu doldurun, en kısa sürede size dönüş yapalım.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm text-[#45474B] mb-2" style={{ fontWeight: 600 }}>
                    Ad Soyad *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınız ve soyadınız"
                    className="w-full border-[#45474B]/20 focus:border-[#F4CE14] focus:ring-[#F4CE14] text-[#000000] placeholder:text-[#999999]"
                    style={{ fontFamily: 'Mulish, sans-serif', fontSize: '16px', fontWeight: 400 }}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm text-[#45474B] mb-2" style={{ fontWeight: 600 }}>
                    E-posta *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ornek@email.com"
                    className="w-full border-[#45474B]/20 focus:border-[#F4CE14] focus:ring-[#F4CE14] text-[#000000] placeholder:text-[#999999]"
                    style={{ fontFamily: 'Mulish, sans-serif', fontSize: '16px', fontWeight: 400 }}
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm text-[#45474B] mb-2" style={{ fontWeight: 600 }}>
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+90 5XX XXX XX XX"
                    className="w-full border-[#45474B]/20 focus:border-[#F4CE14] focus:ring-[#F4CE14] text-[#000000] placeholder:text-[#999999]"
                    style={{ fontFamily: 'Mulish, sans-serif', fontSize: '16px', fontWeight: 400 }}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm text-[#45474B] mb-2" style={{ fontWeight: 600 }}>
                    Mesajınız *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesajınızı buraya yazın..."
                    rows={6}
                    className="w-full border-[#45474B]/20 focus:border-[#F4CE14] focus:ring-[#F4CE14] resize-none text-[#000000] placeholder:text-[#999999]"
                    style={{ fontFamily: 'Mulish, sans-serif', fontSize: '16px', fontWeight: 400 }}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#F4CE14] text-[#1E1E1E] hover:bg-[#F4CE14]/90 py-6 text-lg flex items-center justify-center gap-2"
                  style={{ fontWeight: 600 }}
                >
                  <Send size={20} />
                  Gönder
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl text-[#45474B] mb-8" style={{ fontWeight: 700 }}>
                  {t('page_title_contact_info')}
                </h2>

                {/* Address */}
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#45474B]/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F4CE14] to-[#E5BF12] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#1E1E1E]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#45474B] mb-2" style={{ fontWeight: 600 }}>
                      Adres
                    </h3>
                    <p className="text-[#555555] leading-relaxed">
                      Cumhuriyet Mahallesi, Nazım Hikmet Bulvarı,<br />
                      1983 Sk. Kent Palas 2 Kat: 7 D: 85 - 86,<br />
                      PK.: 34512 Esenyurt / İSTANBUL
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#45474B]/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F4CE14] to-[#E5BF12] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#1E1E1E]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#45474B] mb-2" style={{ fontWeight: 600 }}>
                      Telefon
                    </h3>
                    <p className="text-[#555555] mb-1"><strong>Genel Merkez:</strong></p>
                    <p className="text-[#555555] mb-2">+90 850 259 01 66 / +90 212 613 31 82</p>
                    <p className="text-[#555555] mb-1"><strong>Satış ve WhatsApp:</strong></p>
                    <p className="text-[#555555]">+90 542 310 99 30 / +90 212 671 74 55 / +90 212 671 74 56</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#F4CE14] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-[#1E1E1E]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#45474B] mb-2" style={{ fontWeight: 600 }}>
                      E-posta
                    </h3>
                    <p className="text-[#555555]">info@mtmakina.com.tr</p>
                    <p className="text-[#555555]">satis@mtmakina.com.tr</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6 border-t border-[#45474B]/10">
                  <h3 className="text-lg text-[#45474B] mb-4" style={{ fontWeight: 600 }}>
                    Sosyal Medya
                  </h3>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://www.linkedin.com/company/mtmakina"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-[#45474B] rounded-full flex items-center justify-center hover:bg-[#F4CE14] transition-colors"
                    >
                      <Linkedin size={20} className="text-white" />
                    </motion.a>
                    <motion.a
                      href="https://www.youtube.com/@MTMakinaofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-[#45474B] rounded-full flex items-center justify-center hover:bg-[#F4CE14] transition-colors"
                    >
                      <Youtube size={20} className="text-white" />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/mtmakina"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-[#45474B] rounded-full flex items-center justify-center hover:bg-[#F4CE14] transition-colors"
                    >
                      <Instagram size={20} className="text-white" />
                    </motion.a>
                    <motion.a
                      href="https://www.facebook.com/mtmakine"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-[#45474B] rounded-full flex items-center justify-center hover:bg-[#F4CE14] transition-colors"
                    >
                      <Facebook size={20} className="text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-gradient-to-br from-[#F4CE14] to-[#E5BF12] rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl text-[#1E1E1E] mb-4" style={{ fontWeight: 700 }}>
                  Çalışma Saatleri
                </h3>
                <p className="text-[#1E1E1E]/90 leading-relaxed">
                  <strong>Hafta içi:</strong> 09:00 - 18:00<br />
                  <strong>Hafta sonu:</strong> Kapalı
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-[#45474B] mb-4" style={{ fontWeight: 700 }}>
              {t('page_title_location')}
            </h2>
            <p className="text-xl text-[#555555]">
              {t('desc_location')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden shadow-2xl"
            style={{ borderRadius: '10px' }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Cumhuriyet+Mahallesi,+Naz%C4%B1m+Hikmet+Bulvar%C4%B1,+1983+Sk.+Kent+Palas+2+Kat:+7+D:+85-86,+34512+Esenyurt+%C4%B0stanbul&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="500"
              style={{ border: 0, boxShadow: '0px 5px 15px rgba(0,0,0,0.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('desc_map_label')}
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#45474B] to-[#35373A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-[#F5F7F8] mb-6">
              Projeniz İçin Hemen İletişime Geçin
            </h2>
            <p className="text-xl text-[#F5F7F8]/90 mb-8 max-w-3xl mx-auto">
              Uzman ekibimiz size en uygun çözümü sunmak için hazır
            </p>
            <Button
              onClick={onBackToMain}
              size="lg"
              className="bg-[#F4CE14] text-[#1E1E1E] hover:bg-[#F4CE14]/90 px-12 py-6 text-lg"
              style={{ fontWeight: 600 }}
            >
              Ana Sayfaya Dön
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
