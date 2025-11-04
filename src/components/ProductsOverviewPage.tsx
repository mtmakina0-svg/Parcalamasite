import React from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Button } from "./ui/button";
import { Settings } from "lucide-react";

interface ProductsOverviewPageProps {
  onBackToMain: () => void;
  onProductClick: (productType: string) => void;
}

export const ProductsOverviewPage = ({
  onBackToMain,
  onProductClick,
}: ProductsOverviewPageProps) => {
  return (
    <div className="min-h-screen bg-[#F5F7F8]">
      <Helmet>
        <title>Ürünler | MT Makina</title>
        <meta
          name="description"
          content="MT Makina'nın yüksek performanslı parçalama makineleri, konveyör sistemleri ve geri dönüşüm çözümlerini keşfedin."
        />
        <link rel="canonical" href="https://www.parcalamamakinesi.com/urunler" />
      </Helmet>

      <section className="bg-[#45474B] text-[#F5F7F8] py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Ürünlerimiz</h1>
        <p className="text-[#F4CE14]">
          Parçalama, ayırma ve pres sistemlerinde güçlü çözümler
        </p>
      </section>

      <section className="py-20 container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl p-8 shadow-lg cursor-pointer"
            onClick={() => onProductClick("single-shaft")}
          >
            <Settings size={64} className="text-[#F4CE14] mx-auto mb-4" />
            <h3 className="text-[#45474B] font-semibold mb-2">
              Tek Şaftlı Parçalama Makinesi
            </h3>
            <p className="text-[#45474B] text-sm">
              Güçlü rotor yapısı ile yüksek torklu parçalama performansı.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl p-8 shadow-lg cursor-pointer"
            onClick={() => onProductClick("dual-shaft")}
          >
            <Settings size={64} className="text-[#F4CE14] mx-auto mb-4" />
            <h3 className="text-[#45474B] font-semibold mb-2">
              Çift Şaftlı Parçalama Makinesi
            </h3>
            <p className="text-[#45474B] text-sm">
              Zorlu endüstriyel atıklar için optimize edilmiş dayanıklı sistem.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl p-8 shadow-lg cursor-pointer"
            onClick={() => onProductClick("quad-shaft")}
          >
            <Settings size={64} className="text-[#F4CE14] mx-auto mb-4" />
            <h3 className="text-[#45474B] font-semibold mb-2">
              Dört Şaftlı Parçalama Makinesi
            </h3>
            <p className="text-[#45474B] text-sm">
              Yüksek hacimli malzemeler için tam otomatik parçalama çözümü.
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={onBackToMain}
            className="bg-[#F4CE14] text-[#1E1E1E] hover:bg-[#F4CE14]/80"
          >
            Ana Sayfaya Dön
          </Button>
        </div>
      </section>
    </div>
  );
};
