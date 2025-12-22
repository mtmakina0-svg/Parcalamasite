import { Language, ModelDescription, MultilingualModelDescription } from '../types/descriptionTypes';
import { availableModels } from './modelConfig';

// Import fallback descriptions from a separate strategy or keep them minimal here? 
// The original file had getFallbackDescription. I'll preserve it.

// Map of product types to their lazy loader functions
const descriptionLoaders: { [key: string]: () => Promise<any> } = {
  'single-shaft': () => import('./descriptions/single-shaft'),
  'dual-shaft': () => import('./descriptions/dual-shaft'),
  'quad-shaft': () => import('./descriptions/quad-shaft'),
  'metal': () => import('./descriptions/metal'),
  'mobile': () => import('./descriptions/mobile'),
  'pallet': () => import('./descriptions/pallet'),
  'harddisk': () => import('./descriptions/harddisk'),
  'tree-root': () => import('./descriptions/tree-root'),
  'wood': () => import('./descriptions/wood'),
  'glass': () => import('./descriptions/glass'),
};

/**
 * Get fallback description for models without specific translations
 */
const getFallbackDescription = (productType: string, modelName: string, language: Language): ModelDescription => {
  const productNames: { [key: string]: { [lang in Language]: string } } = {
    'quad-shaft': {
      tr: 'Dört Şaftlı Parçalama Makinesi',
      en: 'Four Shaft Shredder',
      ru: 'Четырехвальный измельчитель',
      ar: 'آلة التقطيع رباعية العمود'
    },
    'metal': {
      tr: 'Redmonster Metal Parçalama Makinesi',
      en: 'Redmonster Metal Shredder',
      ru: 'Металлический измельчитель Redmonster',
      ar: 'آلة تقطيع المعادن Redmonster'
    },
    'pallet': {
      tr: 'Palet Parçalama Makinesi',
      en: 'Pallet Shredder',
      ru: 'Измельчитель поддонов',
      ar: 'آلة تقطيع المنصات'
    },
    'mobile': {
      tr: 'Mobil Kırıcı',
      en: 'Mobile Crusher',
      ru: 'Мобильная дробилка',
      ar: 'كسارة متنقلة'
    },
    'harddisk': {
      tr: 'Harddisk İmha Makinesi',
      en: 'Hard Disk Destroyer',
      ru: 'Уничтожитель жестких дисков',
      ar: 'آلة إتلاف الأقراص الصلبة'
    }
  };

  const productName = productNames[productType]?.[language] || productNames[productType]?.tr || '';

  const templates: { [lang in Language]: ModelDescription } = {
    tr: {
      intro: `${modelName} ${productName}, endüstriyel atık yönetimi için güçlü ve verimli bir çözüm sunar.`,
      paragraph1: `${modelName} model, yüksek performanslı motor gücü ve geniş parçalama alanı ile çeşitli atık türlerinin etkili şekilde işlenmesini sağlar. Endüstriyel dayanıklılık ve uzun ömürlü kullanım için tasarlanmıştır.`,
      paragraph2: `Gelişmiş otomasyon sistemi, kullanıcı dostu kontrol paneli ve güvenlik özellikleri ile donatılmıştır. Yüksek kaliteli bıçak sistemi ve güçlü motor, kesintisiz ve verimli çalışma garantisi verir.`,
      paragraph3: `MT Makina ${modelName}, geri dönüşüm tesisleri, atık yönetim merkezleri ve endüstriyel işletmeler için ideal bir çözümdür. Modüler yapısı sayesinde kolay bakım ve uzun ömür sunar.`
    },
    en: {
      intro: `${modelName} ${productName} offers a powerful and efficient solution for industrial waste management.`,
      paragraph1: `${modelName} model provides effective processing of various waste types with high-performance motor power and wide shredding area. Designed for industrial durability and long-lasting use.`,
      paragraph2: `Equipped with advanced automation system, user-friendly control panel and safety features. High-quality blade system and powerful motor guarantee uninterrupted and efficient operation.`,
      paragraph3: `MT Makina ${modelName} is an ideal solution for recycling facilities, waste management centers and industrial enterprises. Thanks to its modular structure, it offers easy maintenance and long life.`
    },
    ru: {
      intro: `${modelName} ${productName} предлагает мощное и эффективное решение для промышленного управления отходами.`,
      paragraph1: `Модель ${modelName} обеспечивает эффективную переработку различных типов отходов с высокопроизводительным двигателем и широкой зоной измельчения. Разработан для промышленной прочности и долговечного использования.`,
      paragraph2: `Оснащен передовой системой автоматизации, удобной панелью управления и функциями безопасности. Высококачественная система лезвий и мощный двигатель гарантируют бесперебойную и эффективную работу.`,
      paragraph3: `MT Makina ${modelName} - идеальное решение для предприятий по переработке, центров управления отходами и промышленных предприятий. Благодаря модульной конструкции обеспечивает простое обслуживание и долгий срок службы.`
    },
    ar: {
      intro: `${modelName} ${productName} يوفر حلاً قويًا وفعالاً لإدارة النفايات الصناعية.`,
      paragraph1: `يوفر طراز ${modelName} معالجة فعالة لأنواع مختلفة من النفايات بقوة محرك عالية الأداء ومنطقة تقطيع واسعة. مصمم للمتانة الصناعية والاستخدام طويل الأمد.`,
      paragraph2: `مجهز بنظام أتمتة متقدم ولوحة تحكم سهلة الاستخدام وميزات الأمان. يضمن نظام الشفرات عالي الجودة والمحرك القوي تشغيلاً متواصلاً وفعالاً.`,
      paragraph3: `MT Makina ${modelName} هو حل مثالي لمنشآت إعادة التدوير ومراكز إدارة النفايات والمؤسسات الصناعية. بفضل هيكله المعياري، يوفر صيانة سهلة وعمرًا طويلاً.`
    }
  };

  return templates[language];
};

/**
 * Get model-specific description asynchronously
 * @param productType - Product type (single-shaft, dual-shaft, etc.)
 * @param modelName - Model name (TSH-60, CS-80, etc.)
 * @param language - Language code (tr, en, ru, ar) - defaults to 'tr'
 */
export const getModelDescriptionAsync = async (
  productType: string,
  modelName: string,
  language: Language = 'tr'
): Promise<ModelDescription | null> => {
  try {
    const loader = descriptionLoaders[productType];
    if (!loader) {
      return getFallbackDescription(productType, modelName, language);
    }

    const module = await loader();

    let multiDesc: MultilingualModelDescription | undefined;

    for (const key in module) {
      const potentialMap = module[key] as { [key: string]: MultilingualModelDescription };
      if (potentialMap && potentialMap[modelName]) {
        multiDesc = potentialMap[modelName];
        break;
      }
    }

    if (multiDesc) {
      return multiDesc[language] || multiDesc.tr || null;
    }

    return getFallbackDescription(productType, modelName, language);
  } catch (error) {
    console.error(`Error loading description for ${productType}/${modelName}:`, error);
    return getFallbackDescription(productType, modelName, language);
  }
};

/**
 * Check if model has custom description (Synchronous check based on config)
 */
export const hasModelDescription = (productType: string, modelName: string): boolean => {
  // We check if the model is in our availableModels config.
  // Ideally we should assume if it's in config, we might have a description or we will fetch it.
  // The previous implementation checked the actual data availability.
  // Since we lazy load, we can assume true if it's a known model, 
  // and let the async loader return fallback if missing.
  return availableModels[productType]?.includes(modelName) ?? false;
};
