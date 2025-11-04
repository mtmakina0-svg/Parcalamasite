import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Helmet } from "react-helmet-async";

interface ContactPageProps {
  onBackToMain: () => void;
}

export const ContactPage = ({ onBackToMain }: ContactPageProps) => {
  return (
    <div className="min-h-screen bg-[#F5F7F8]">
      <Helmet>
        <title>İletişim | MT Makina</title>
        <meta
          name="description"
          content="MT Makina ile iletişime geçin. Tüm ürünlerimiz ve projelerimiz hakkında detaylı bilgi almak için bizimle hemen iletişime geçebilirsiniz."
        />
        <link rel="canonical" href="https://www.parcalamamakinesi.com/iletisim" />
      </Helmet>

      <section className="bg-[#45474B] text-[#F5F7F8] py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Bize Ulaşın</h1>
        <p className="text-[#F4CE14]">Her zaman yanınızdayız</p>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-2xl font-bold text-[#45474B] mb-6">
              İletişim Bilgilerimiz
            </h2>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-[#45474B]">
                <MapPin className="text-[#F4CE14]" size={20} /> Cumhuriyet
                Mahallesi, Nazım Hikmet Bulvarı, 1983 Sk. Kent Palas 2 Kat: 7
                D:85-86, Esenyurt / İstanbul
              </p>
              <p className="flex items-center gap-3 text-[#45474B]">
                <Phone className="text-[#F4CE14]" size={20} /> +90 850 259 01 66
              </p>
              <p className="flex items-center gap-3 text-[#45474B]">
                <Mail className="text-[#F4CE14]" size={20} /> info@mtmakina.com.tr
              </p>
            </div>
            <div className="mt-6">
              <Button
                className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E]"
                onClick={onBackToMain}
              >
                Ana Sayfaya Dön
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              title="MT Makina Konumu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.930565943174!2d28.67910547635513!3d41.02318291858516"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="rounded-2xl shadow-xl"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
