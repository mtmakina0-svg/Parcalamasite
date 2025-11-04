import React from "react";
import { motion } from "motion/react";
import { Factory, Users, Award, Target } from "lucide-react";
import { Button } from "./ui/button";
// Not: Helmet ve ArrowLeft (geri butonu) kaldırıldı, çünkü app.tsx'te yönetiliyor/kullanılmıyor.

interface AboutPageProps {
  // onBackToMain kaldırıldı, Header'dan yönetiliyor.
}

export const AboutPage = ({}: AboutPageProps) => {
  return (
    // Ana div'den min-h-screen kaldırıldı, app.tsx'teki ana layout'a güveniyoruz
    <div className="bg-[#F5F7F8]">
      {/* 🧠 SEO Metadata (Helmet) kaldırıldı. 
        Bu artık app.tsx dosyasında merkezi olarak yönetiliyor.
      */}

      {/* Header Section (Ana Sayfaya Dön butonu vs.) kaldırıldı.
        Bu artık app.tsx'teki kalıcı Header bileşeni tarafından yönetiliyor.
        Sayfanın pt-32 (padding-top) alması, Header'ın altında başlamasını sağlar.
      */}

      {/* Mission & Vision Section */}
      <section className="pt-32 pb-16 bg-white">
        {" "}
        {/* Header'ın altında başlaması için pt-32 eklendi */}
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              // 👇 KIRIK LİNK DÜZELTİLDİ
              src="https://placehold.co/800x600/45474B/F5F7F8?text=MT+Makina+Kurumsal"
              alt="MT Makina Kurumsal"
              className="rounded-2xl shadow-2xl w-full" // <-- w-full eklendi
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-[#45474B] mb-4">
              Hakkımızda
            </h2>
            <p className="text-[#45474B] mb-6 leading-relaxed">
              MT Makina, 2005 yılından bu yana parçalama, ayırma, yakma ve pres
              sistemleri üreterek atık yönetimi sektörüne yenilikçi çözümler
              sunmaktadır. Yüksek mühendislik standartları, kaliteye bağlılık ve
              müşteri memnuniyeti vizyonuyla global pazarda güvenilir bir marka
              haline gelmiştir.
            </p>
            {/* "Daha Fazla Bilgi" butonu bir yere gitmiyordu,
              geçici olarak kaldırıldı veya bir link eklenebilir.
              Şimdilik gizliyorum:
            */}
            {/* <Button className="bg-[#F4CE14] text-[#1E1E1E] hover:bg-[#F4CE14]/80">
              Daha Fazla Bilgi
            </Button> */}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F5F7F8]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] text-center">
          <h2 className="text-3xl font-bold text-[#45474B] mb-12">
            Değerlerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <Factory
                size={48}
                className="text-[#F4CE14] mx-auto mb-4"
              />
              <h3 className="font-semibold text-[#1E1E1E] mb-2">
                Yenilikçi Üretim
              </h3>
              <p className="text-[#45474B] text-sm">
                En gelişmiş üretim teknolojilerini kullanarak sektörde fark
                yaratıyoruz.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <Users size={48} className="text-[#F4CE14] mx-auto mb-4" />
              <h3 className="font-semibold text-[#1E1E1E] mb-2">
                Müşteri Odaklılık
              </h3>
              <p className="text-[#45474B] text-sm">
                Müşterilerimizin ihtiyaçlarına özel çözümler geliştiriyoruz.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <Target size={48} className="text-[#F4CE14] mx-auto mb-4" />
              <h3 className="font-semibold text-[#1E1E1E] mb-2">
                Kalite & Güven
              </h3>
              <p className="text-[#45474B] text-sm">
                Her üretim aşamasında kalite kontrol süreçlerine önem veriyoruz.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <Award size={48} className="text-[#F4CE14] mx-auto mb-4" />
              <h3 className="font-semibold text-[#1E1E1E] mb-2">Sürdürülebilirlik</h3>
              <p className="text-[#45474B] text-sm">
                Çevre dostu sistemlerle geleceğe katkı sağlamayı hedefliyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

