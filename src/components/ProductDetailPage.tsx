import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Settings, RotateCcw, Volume2, FileDown, Play, ArrowLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

// Import product images - Single Shaft
import productImage1 from 'figma:asset/35db235c624f5e626db1cd10c8e71b50bbc7ee57.png';
import productImage2 from 'figma:asset/4efe444ccda46f683f05552e2cbc00d96f53f4dd.png';
import productImage3 from 'figma:asset/927e7a027be0c24722e57bcd3107c6b0f70d7725.png';

// Import product images - Dual Shaft
import dualShaftImage1 from 'figma:asset/8abf2452262b075bacaabb37025e9454d18741ad.png';
import dualShaftImage2 from 'figma:asset/869d8b67badadc366a27941c16a34669291eee34.png';
import dualShaftImage3 from 'figma:asset/0bbf61886f9582b367d72ef91f45d5df929dec4e.png';

interface ProductDetailPageProps {
  productType: string;
  onBackToMain: () => void;
  onECatalogClick: () => void;
  onProductDetailClick?: (productType: string) => void;
}

export const ProductDetailPage = ({ productType, onBackToMain, onECatalogClick, onProductDetailClick }: ProductDetailPageProps) => {
  const { t, isRTL } = useLanguage();

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productType]);

  // Single Shaft Product Data
  if (productType === 'single-shaft') {
    return (
      <div className="min-h-screen bg-[#F5F7F8]" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Back Button */}
        <div className="bg-[#45474B] py-4">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.button
              onClick={onBackToMain}
              whileHover={{ x: isRTL ? 5 : -5 }}
              className="flex items-center gap-2 text-[#F4CE14] hover:text-[#F5F7F8] transition-colors"
            >
              <ArrowLeft size={20} className={isRTL ? 'rotate-180' : ''} />
              <span>{t('nav_home')}</span>
            </motion.button>
          </div>
        </div>

        {/* Hero Section with Main Image */}
        <section className="relative py-16 bg-gradient-to-b from-[#45474B] to-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-[#F4CE14] mb-4">{t('single_shaft_main_title')}</h1>
              <p className="text-[#F5F7F8] text-xl max-w-3xl mx-auto">
                {t('single_shaft_subtitle')}
              </p>
            </motion.div>

            {/* Main Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <img
                src={productImage1}
                alt={t('single_shaft_main_title')}
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Product Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-[#45474B] leading-relaxed mb-6">
                {t('single_shaft_description_1')}
              </p>
              <p className="text-[#45474B] leading-relaxed mb-6">
                {t('single_shaft_description_2')}
              </p>
              <p className="text-[#45474B] leading-relaxed">
                {t('single_shaft_description_3')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-[#F4CE14] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#45474B] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#45474B] rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#1E1E1E] mb-16"
            >
              {t('single_shaft_advantages_title')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Advantage 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-[#45474B] rounded-xl flex items-center justify-center mb-6">
                  <Settings size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t('single_shaft_adv_1_title')}</h3>
                <p className="text-[#45474B]">{t('single_shaft_adv_1_desc')}</p>
              </motion.div>

              {/* Advantage 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-[#45474B] rounded-xl flex items-center justify-center mb-6">
                  <RotateCcw size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t('single_shaft_adv_2_title')}</h3>
                <p className="text-[#45474B]">{t('single_shaft_adv_2_desc')}</p>
              </motion.div>

              {/* Advantage 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-[#45474B] rounded-xl flex items-center justify-center mb-6">
                  <Volume2 size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t('single_shaft_adv_3_title')}</h3>
                <p className="text-[#45474B]">{t('single_shaft_adv_3_desc')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Performance Section with 3 Images */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-16"
            >
              {t('single_shaft_performance_title')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Performance Image 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg mb-4">
                  <motion.img
                    src={productImage1}
                    alt={t('single_shaft_perf_1')}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-center text-[#45474B]">{t('single_shaft_perf_1')}</p>
              </motion.div>

              {/* Performance Image 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg mb-4">
                  <motion.img
                    src={productImage2}
                    alt={t('single_shaft_perf_2')}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-center text-[#45474B]">{t('single_shaft_perf_2')}</p>
              </motion.div>

              {/* Performance Image 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg mb-4">
                  <motion.img
                    src="figma:asset/927e7a027be0c24722e57bcd3107c6b0f70d7725.png"
                    alt={t('single_shaft_perf_3')}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-center text-[#45474B]">{t('single_shaft_perf_3')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('single_shaft_tech_specs_title')}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-[#F5F7F8]">
                    <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('single_shaft_tech_model')}</td>
                    <td className="px-8 py-4 text-[#1E1E1E]">{t('single_shaft_tech_model_value')}</td>
                  </tr>
                  <tr className="border-b border-[#F5F7F8]">
                    <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('single_shaft_tech_motor')}</td>
                    <td className="px-8 py-4 text-[#1E1E1E]">{t('single_shaft_tech_motor_value')}</td>
                  </tr>
                  <tr className="border-b border-[#F5F7F8]">
                    <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('single_shaft_tech_rotor_length')}</td>
                    <td className="px-8 py-4 text-[#1E1E1E]">{t('single_shaft_tech_rotor_length_value')}</td>
                  </tr>
                  <tr className="border-b border-[#F5F7F8]">
                    <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('single_shaft_tech_rotor_diameter')}</td>
                    <td className="px-8 py-4 text-[#1E1E1E]">{t('single_shaft_tech_rotor_diameter_value')}</td>
                  </tr>
                  <tr className="border-b border-[#F5F7F8]">
                    <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('single_shaft_tech_blade_count')}</td>
                    <td className="px-8 py-4 text-[#1E1E1E]">{t('single_shaft_tech_blade_count_value')}</td>
                  </tr>
                  <tr className="border-b border-[#F5F7F8]">
                    <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('single_shaft_tech_weight')}</td>
                    <td className="px-8 py-4 text-[#1E1E1E]">{t('single_shaft_tech_weight_value')}</td>
                  </tr>
                  <tr className="border-b border-[#F5F7F8]">
                    <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('single_shaft_tech_feed_opening')}</td>
                    <td className="px-8 py-4 text-[#1E1E1E]">{t('single_shaft_tech_feed_opening_value')}</td>
                  </tr>
                  <tr className="border-b border-[#F5F7F8]">
                    <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('single_shaft_tech_control')}</td>
                    <td className="px-8 py-4 text-[#1E1E1E]">{t('single_shaft_tech_control_value')}</td>
                  </tr>
                  <tr>
                    <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('single_shaft_tech_capacity')}</td>
                    <td className="px-8 py-4 text-[#1E1E1E]">{t('single_shaft_tech_capacity_value')}</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            {/* E-Catalog Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                onClick={onECatalogClick}
                className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-8 py-6 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <FileDown size={24} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('single_shaft_ecatalog_btn')}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('single_shaft_faq_title')}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('single_shaft_faq_q1')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('single_shaft_faq_a1')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('single_shaft_faq_q2')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('single_shaft_faq_a2')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('single_shaft_faq_q3')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('single_shaft_faq_a3')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('single_shaft_faq_q4')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('single_shaft_faq_a4')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('single_shaft_faq_q5')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('single_shaft_faq_a5')}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('single_shaft_video_title')}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative bg-[#45474B] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" style={{ height: '400px' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-[#F4CE14] rounded-full flex items-center justify-center"
                  >
                    <Play size={32} className="text-[#1E1E1E] ml-1" />
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/50 to-transparent"></div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-6"
              >
                <Button
                  className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-6 py-3 rounded-xl"
                >
                  {t('single_shaft_watch_video')}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Similar Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('single_shaft_similar_products')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Similar Product 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => onProductDetailClick?.('dual-shaft')}
                className="bg-[#F5F7F8] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <div className="h-48 bg-[#45474B] flex items-center justify-center">
                  <Settings size={64} className="text-[#F4CE14]" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#45474B] mb-2 group-hover:text-[#F4CE14] transition-colors">
                    {t('product_dual_shaft')}
                  </h3>
                  <div className="flex items-center text-[#F4CE14] group-hover:gap-2 transition-all">
                    <span className="text-sm">{t('btn_view_details')}</span>
                    <ChevronRight size={16} className={isRTL ? 'rotate-180' : ''} />
                  </div>
                </div>
              </motion.div>

              {/* Similar Product 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10 }}
                onClick={() => onProductDetailClick?.('quad-shaft')}
                className="bg-[#F5F7F8] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <div className="h-48 bg-[#45474B] flex items-center justify-center">
                  <Settings size={64} className="text-[#F4CE14]" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#45474B] mb-2 group-hover:text-[#F4CE14] transition-colors">
                    {t('product_quad_shaft')}
                  </h3>
                  <div className="flex items-center text-[#F4CE14] group-hover:gap-2 transition-all">
                    <span className="text-sm">{t('btn_view_details')}</span>
                    <ChevronRight size={16} className={isRTL ? 'rotate-180' : ''} />
                  </div>
                </div>
              </motion.div>

              {/* Similar Product 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -10 }}
                onClick={() => onProductDetailClick?.('metal')}
                className="bg-[#F5F7F8] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <div className="h-48 bg-[#45474B] flex items-center justify-center">
                  <Settings size={64} className="text-[#F4CE14]" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#45474B] mb-2 group-hover:text-[#F4CE14] transition-colors">
                    {t('product_metal')}
                  </h3>
                  <div className="flex items-center text-[#F4CE14] group-hover:gap-2 transition-all">
                    <span className="text-sm">{t('btn_view_details')}</span>
                    <ChevronRight size={16} className={isRTL ? 'rotate-180' : ''} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Dual Shaft Product Page
  if (productType === 'dual-shaft') {
    return (
      <div className="min-h-screen bg-[#F5F7F8]" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Back Button */}
        <div className="bg-[#45474B] py-4">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.button
              onClick={onBackToMain}
              whileHover={{ x: isRTL ? 5 : -5 }}
              className="flex items-center gap-2 text-[#F4CE14] hover:text-[#F5F7F8] transition-colors"
            >
              <ArrowLeft size={20} className={isRTL ? 'rotate-180' : ''} />
              <span>{t('nav_home')}</span>
            </motion.button>
          </div>
        </div>

        {/* Hero Section with Main Image */}
        <section className="relative py-16 bg-gradient-to-b from-[#45474B] to-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-[#F4CE14] mb-4">{t('dual_shaft_main_title')}</h1>
              <p className="text-[#F5F7F8] text-xl max-w-3xl mx-auto">
                {t('dual_shaft_subtitle')}
              </p>
            </motion.div>

            {/* Main Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <img
                src={dualShaftImage1}
                alt={t('dual_shaft_main_title')}
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Product Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-[#45474B] leading-relaxed mb-6">
                {t('dual_shaft_description_1')}
              </p>
              <p className="text-[#45474B] leading-relaxed mb-6">
                {t('dual_shaft_description_2')}
              </p>
              <p className="text-[#45474B] leading-relaxed mb-6">
                {t('dual_shaft_description_3')}
              </p>
              <p className="text-[#45474B] leading-relaxed mb-6">
                {t('dual_shaft_description_4')}
              </p>
              <p className="text-[#45474B] leading-relaxed">
                {t('dual_shaft_description_5')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-[#F4CE14] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#45474B] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#45474B] rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#1E1E1E] mb-16"
            >
              {t('dual_shaft_advantages_title')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Advantage 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-[#45474B] rounded-xl flex items-center justify-center mb-6">
                  <Settings size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t('dual_shaft_adv_1_title')}</h3>
                <p className="text-[#45474B]">{t('dual_shaft_adv_1_desc')}</p>
              </motion.div>

              {/* Advantage 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-[#45474B] rounded-xl flex items-center justify-center mb-6">
                  <RotateCcw size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t('dual_shaft_adv_2_title')}</h3>
                <p className="text-[#45474B]">{t('dual_shaft_adv_2_desc')}</p>
              </motion.div>

              {/* Advantage 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-[#45474B] rounded-xl flex items-center justify-center mb-6">
                  <Volume2 size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t('dual_shaft_adv_3_title')}</h3>
                <p className="text-[#45474B]">{t('dual_shaft_adv_3_desc')}</p>
              </motion.div>

              {/* Advantage 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-[#45474B] rounded-xl flex items-center justify-center mb-6">
                  <Settings size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t('dual_shaft_adv_4_title')}</h3>
                <p className="text-[#45474B]">{t('dual_shaft_adv_4_desc')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Performance Section with 3 Images */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-16"
            >
              {t('dual_shaft_performance_title')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Performance Image 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg mb-4">
                  <motion.img
                    src={dualShaftImage1}
                    alt={t('dual_shaft_perf_1')}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-center text-[#45474B]">{t('dual_shaft_perf_1')}</p>
              </motion.div>

              {/* Performance Image 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg mb-4">
                  <motion.img
                    src={dualShaftImage2}
                    alt={t('dual_shaft_perf_2')}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-center text-[#45474B]">{t('dual_shaft_perf_2')}</p>
              </motion.div>

              {/* Performance Image 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg mb-4">
                  <motion.img
                    src={dualShaftImage3}
                    alt={t('dual_shaft_perf_3')}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-center text-[#45474B]">{t('dual_shaft_perf_3')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Specifications - CS Series Table */}
        <section className="py-20 bg-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('dual_shaft_tech_specs_title')}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-x-auto"
            >
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-[#F4CE14]">
                    <th className="px-4 py-4 text-left text-[#1E1E1E]">{t('dual_shaft_tech_motor')}</th>
                    <th className="px-4 py-4 text-center text-[#1E1E1E]">CS-60</th>
                    <th className="px-4 py-4 text-center text-[#1E1E1E]">CS-80</th>
                    <th className="px-4 py-4 text-center text-[#1E1E1E]">CS-100</th>
                    <th className="px-4 py-4 text-center text-[#1E1E1E]">CS-120</th>
                    <th className="px-4 py-4 text-center text-[#1E1E1E]">CS-150</th>
                    <th className="px-4 py-4 text-center text-[#1E1E1E]">CS-170</th>
                    <th className="px-4 py-4 text-center text-[#1E1E1E]">CS-200</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#F5F7F8]">
                    <td className="px-4 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('dual_shaft_tech_motor')}</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">22 + 22 kW</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">30 + 30 kW</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">37 + 37 kW</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">45 + 45 kW</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">55 + 55 kW</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">75 + 75 kW</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">90 + 90 kW</td>
                  </tr>
                  <tr className="border-b border-[#F5F7F8]">
                    <td className="px-4 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('dual_shaft_tech_rotor_speed')}</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">22 rpm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">20 rpm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">18 rpm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">17 rpm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">16 rpm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">15 rpm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">14 rpm</td>
                  </tr>
                  <tr className="border-b border-[#F5F7F8]">
                    <td className="px-4 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('dual_shaft_tech_blade_count')}</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">36</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">40</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">44</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">48</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">52</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">56</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">60</td>
                  </tr>
                  <tr className="border-b border-[#F5F7F8]">
                    <td className="px-4 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('dual_shaft_tech_rotor_length')}</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">600 mm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">800 mm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">1000 mm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">1200 mm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">1500 mm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">1700 mm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">2000 mm</td>
                  </tr>
                  <tr className="border-b border-[#F5F7F8]">
                    <td className="px-4 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('dual_shaft_tech_blade_thickness')}</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">25 mm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">30 mm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">35 mm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">40 mm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">45 mm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">50 mm</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">55 mm</td>
                  </tr>
                  <tr className="border-b border-[#F5F7F8]">
                    <td className="px-4 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('dual_shaft_tech_capacity')}</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">500 kg/sa</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">800 kg/sa</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">1200 kg/sa</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">1600 kg/sa</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">2000 kg/sa</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">2500 kg/sa</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">3000 kg/sa</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-[#45474B] bg-[#F4CE14]/10">{t('dual_shaft_tech_weight')}</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">2500 kg</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">3200 kg</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">4000 kg</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">5200 kg</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">6500 kg</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">8200 kg</td>
                    <td className="px-4 py-4 text-center text-[#1E1E1E]">9500 kg</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            {/* E-Catalog Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                onClick={onECatalogClick}
                className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-8 py-6 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <FileDown size={24} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('dual_shaft_ecatalog_btn')}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('dual_shaft_faq_title')}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('dual_shaft_faq_q1')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('dual_shaft_faq_a1')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('dual_shaft_faq_q2')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('dual_shaft_faq_a2')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('dual_shaft_faq_q3')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('dual_shaft_faq_a3')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('dual_shaft_faq_q4')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('dual_shaft_faq_a4')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('dual_shaft_faq_q5')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('dual_shaft_faq_a5')}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('dual_shaft_video_title')}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative bg-[#45474B] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-[#F4CE14] rounded-full flex items-center justify-center"
                  >
                    <Play size={32} className="text-[#1E1E1E] ml-1" />
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/50 to-transparent"></div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-6"
              >
                <Button
                  className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-6 py-3 rounded-xl"
                >
                  {t('dual_shaft_watch_video')}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Similar Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('dual_shaft_similar_products')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Similar Product 1 - Single Shaft */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => onProductDetailClick?.('single-shaft')}
                className="bg-[#F5F7F8] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <div className="h-48 bg-[#45474B] flex items-center justify-center">
                  <Settings size={64} className="text-[#F4CE14]" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#45474B] mb-2 group-hover:text-[#F4CE14] transition-colors">
                    {t('product_single_shaft')}
                  </h3>
                  <div className="flex items-center text-[#F4CE14] group-hover:gap-2 transition-all">
                    <span className="text-sm">{t('btn_view_details')}</span>
                    <ChevronRight size={16} className={isRTL ? 'rotate-180' : ''} />
                  </div>
                </div>
              </motion.div>

              {/* Similar Product 2 - Quad Shaft */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10 }}
                onClick={() => onProductDetailClick?.('quad-shaft')}
                className="bg-[#F5F7F8] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <div className="h-48 bg-[#45474B] flex items-center justify-center">
                  <Settings size={64} className="text-[#F4CE14]" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#45474B] mb-2 group-hover:text-[#F4CE14] transition-colors">
                    {t('product_quad_shaft')}
                  </h3>
                  <div className="flex items-center text-[#F4CE14] group-hover:gap-2 transition-all">
                    <span className="text-sm">{t('btn_view_details')}</span>
                    <ChevronRight size={16} className={isRTL ? 'rotate-180' : ''} />
                  </div>
                </div>
              </motion.div>

              {/* Similar Product 3 - Metal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -10 }}
                onClick={() => onProductDetailClick?.('metal')}
                className="bg-[#F5F7F8] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <div className="h-48 bg-[#45474B] flex items-center justify-center">
                  <Settings size={64} className="text-[#F4CE14]" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#45474B] mb-2 group-hover:text-[#F4CE14] transition-colors">
                    {t('product_metal')}
                  </h3>
                  <div className="flex items-center text-[#F4CE14] group-hover:gap-2 transition-all">
                    <span className="text-sm">{t('btn_view_details')}</span>
                    <ChevronRight size={16} className={isRTL ? 'rotate-180' : ''} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Default fallback for other product types
  return (
    <div className="min-h-screen bg-[#F5F7F8] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-[#45474B] mb-4">Ürün detay sayfası hazırlanıyor...</h2>
        <Button onClick={onBackToMain} className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E]">
          Ana Sayfaya Dön
        </Button>
      </div>
    </div>
  );
};
