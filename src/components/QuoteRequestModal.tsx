import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, Loader2, Building2, User, Mail, Phone, MessageSquare, Scale, Trash2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import emailjs from '@emailjs/browser';

interface QuoteRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
    productType?: string;
    modelName?: string;
}

interface FormData {
    companyName: string;
    contactPerson: string;
    email: string;
    phone: string;
    dailyCapacity: string;
    wasteType: string;
    message: string;
}

// EmailJS Configuration - You need to set up at emailjs.com
const EMAILJS_SERVICE_ID = 'service_r1ibs1b'; // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'template_eh7wdyi'; // Replace with your template ID
const EMAILJS_PUBLIC_KEY = 'MoLBZYJn5CFL1TC9z'; // Replace with your public key

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
    isOpen,
    onClose,
    productType,
    modelName
}) => {
    const { language, isRTL } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState<FormData>({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        dailyCapacity: '',
        wasteType: '',
        message: ''
    });

    // Translations
    const translations = {
        tr: {
            title: 'Teklif İste',
            subtitle: 'Size özel fiyat teklifi için formu doldurun',
            companyName: 'Şirket Adı',
            contactPerson: 'Yetkili Kişi',
            email: 'E-posta Adresi',
            phone: 'Telefon Numarası',
            product: 'Talep Edilen Ürün',
            dailyCapacity: 'Günlük İşleme Kapasitesi',
            dailyCapacityPlaceholder: 'Örn: 5 ton/gün',
            wasteType: 'İşlenecek Atık Türü',
            wasteTypePlaceholder: 'Örn: Plastik, Ahşap, Metal...',
            message: 'Ek Notlar',
            messagePlaceholder: 'Ek bilgi veya özel isteklerinizi yazın...',
            submit: 'Teklif Talep Et',
            submitting: 'Gönderiliyor...',
            successTitle: 'Talebiniz Alındı!',
            successMessage: 'En kısa sürede sizinle iletişime geçeceğiz.',
            errorMessage: 'Bir hata oluştu. Lütfen tekrar deneyin.',
            close: 'Kapat',
            required: 'Zorunlu alan'
        },
        en: {
            title: 'Request Quote',
            subtitle: 'Fill the form to get a customized price quote',
            companyName: 'Company Name',
            contactPerson: 'Contact Person',
            email: 'Email Address',
            phone: 'Phone Number',
            product: 'Requested Product',
            dailyCapacity: 'Daily Processing Capacity',
            dailyCapacityPlaceholder: 'E.g.: 5 tons/day',
            wasteType: 'Waste Type to Process',
            wasteTypePlaceholder: 'E.g.: Plastic, Wood, Metal...',
            message: 'Additional Notes',
            messagePlaceholder: 'Write any additional information or special requests...',
            submit: 'Request Quote',
            submitting: 'Submitting...',
            successTitle: 'Request Received!',
            successMessage: 'We will contact you as soon as possible.',
            errorMessage: 'An error occurred. Please try again.',
            close: 'Close',
            required: 'Required field'
        },
        ru: {
            title: 'Запросить цену',
            subtitle: 'Заполните форму для получения индивидуального ценового предложения',
            companyName: 'Название компании',
            contactPerson: 'Контактное лицо',
            email: 'Электронная почта',
            phone: 'Номер телефона',
            product: 'Запрашиваемый продукт',
            dailyCapacity: 'Дневная производительность',
            dailyCapacityPlaceholder: 'Напр.: 5 тонн/день',
            wasteType: 'Тип перерабатываемых отходов',
            wasteTypePlaceholder: 'Напр.: Пластик, Дерево, Металл...',
            message: 'Дополнительные примечания',
            messagePlaceholder: 'Напишите дополнительную информацию или особые пожелания...',
            submit: 'Запросить цену',
            submitting: 'Отправка...',
            successTitle: 'Запрос получен!',
            successMessage: 'Мы свяжемся с вами в ближайшее время.',
            errorMessage: 'Произошла ошибка. Пожалуйста, попробуйте снова.',
            close: 'Закрыть',
            required: 'Обязательное поле'
        },
        ar: {
            title: 'طلب عرض سعر',
            subtitle: 'املأ النموذج للحصول على عرض سعر مخصص',
            companyName: 'اسم الشركة',
            contactPerson: 'الشخص المسؤول',
            email: 'البريد الإلكتروني',
            phone: 'رقم الهاتف',
            product: 'المنتج المطلوب',
            dailyCapacity: 'القدرة الإنتاجية اليومية',
            dailyCapacityPlaceholder: 'مثال: 5 طن/يوم',
            wasteType: 'نوع النفايات المراد معالجتها',
            wasteTypePlaceholder: 'مثال: بلاستيك، خشب، معادن...',
            message: 'ملاحظات إضافية',
            messagePlaceholder: 'اكتب أي معلومات إضافية أو طلبات خاصة...',
            submit: 'طلب عرض سعر',
            submitting: 'جاري الإرسال...',
            successTitle: 'تم استلام طلبك!',
            successMessage: 'سنتواصل معك في أقرب وقت ممكن.',
            errorMessage: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
            close: 'إغلاق',
            required: 'حقل مطلوب'
        }
    };

    const txt = translations[language as keyof typeof translations] || translations.tr;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone) {
            setError(txt.required);
            setIsSubmitting(false);
            return;
        }

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    to_email: 'info@mtmakina.com.tr',
                    company_name: formData.companyName,
                    contact_person: formData.contactPerson,
                    email: formData.email,
                    phone: formData.phone,
                    product: `${productType ? productType.replace('-', ' ').toUpperCase() : ''} - ${modelName || ''}`,
                    daily_capacity: formData.dailyCapacity,
                    waste_type: formData.wasteType,
                    message: formData.message,
                    language: language
                },
                EMAILJS_PUBLIC_KEY
            );

            setIsSuccess(true);
            setFormData({
                companyName: '',
                contactPerson: '',
                email: '',
                phone: '',
                dailyCapacity: '',
                wasteType: '',
                message: ''
            });
        } catch (err) {
            console.error('Email send error:', err);
            setError(txt.errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setIsSuccess(false);
        setError(null);
        onClose();
    };

    const getProductTypeName = (type: string | undefined): string => {
        if (!type) return '';
        const productNames: { [key: string]: { [lang: string]: string } } = {
            'single-shaft': { tr: 'Tek Şaftlı Parçalama Makinesi', en: 'Single Shaft Shredder', ru: 'Одновальный измельчитель', ar: 'آلة التقطيع أحادية العمود' },
            'dual-shaft': { tr: 'Çift Şaftlı Parçalama Makinesi', en: 'Dual Shaft Shredder', ru: 'Двухвальный измельчитель', ar: 'آلة التقطيع ثنائية العمود' },
            'quad-shaft': { tr: 'Dört Şaftlı Parçalama Makinesi', en: 'Four Shaft Shredder', ru: 'Четырехвальный измельчитель', ar: 'آلة التقطيع رباعية العمود' },
            'metal': { tr: 'Metal Parçalama Makinesi', en: 'Metal Shredder', ru: 'Измельчитель металла', ar: 'آلة تمزيق المعادن' },
            'mobile': { tr: 'Mobil Parçalama Makinesi', en: 'Mobile Shredder', ru: 'Мобильный измельчитель', ar: 'آلة التقطيع المتنقلة' },
            'pallet': { tr: 'Palet Parçalama Makinesi', en: 'Pallet Shredder', ru: 'Измельчитель поддонов', ar: 'آلة تقطيع المنصات' }
        };
        return productNames[type]?.[language] || type;
    };

    // Common styles - forced with inline
    const labelStyle: React.CSSProperties = {
        display: 'block',
        fontSize: '14px',
        fontWeight: 500,
        color: '#374151',
        marginBottom: '8px'
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '12px 16px',
        backgroundColor: '#f3f4f6',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        fontSize: '16px',
        color: '#111827',
        outline: 'none'
    };

    const iconStyle: React.CSSProperties = {
        width: '16px',
        height: '16px',
        display: 'inline',
        marginRight: '6px',
        color: '#6b7280'
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '16px',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)'
                    }}
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '600px',
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            overflow: 'hidden',
                            maxHeight: '90vh',
                            overflowY: 'auto'
                        }}
                        onClick={(e) => e.stopPropagation()}
                        dir={isRTL ? 'rtl' : 'ltr'}
                    >
                        {/* Header - Red with Mail icon */}
                        <div style={{
                            position: 'sticky',
                            top: 0,
                            zIndex: 10,
                            backgroundColor: '#dc2626',
                            padding: '16px 24px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <h2 style={{
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        color: '#ffffff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        margin: 0
                                    }}>
                                        <Mail style={{ width: '24px', height: '24px', color: '#ffffff' }} />
                                        {txt.title}
                                    </h2>
                                    <p style={{ color: '#fecaca', fontSize: '14px', marginTop: '4px', margin: 0 }}>{txt.subtitle}</p>
                                </div>
                                <button
                                    onClick={handleClose}
                                    style={{
                                        padding: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <X style={{ width: '20px', height: '20px', color: '#ffffff' }} />
                                </button>
                            </div>
                        </div>

                        {/* Success State */}
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ padding: '32px', textAlign: 'center', backgroundColor: '#ffffff' }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    backgroundColor: '#dcfce7',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 16px'
                                }}>
                                    <CheckCircle style={{ width: '40px', height: '40px', color: '#16a34a' }} />
                                </div>
                                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>{txt.successTitle}</h3>
                                <p style={{ color: '#6b7280', marginBottom: '24px' }}>{txt.successMessage}</p>
                                <button
                                    onClick={handleClose}
                                    style={{
                                        padding: '12px 24px',
                                        backgroundColor: '#dc2626',
                                        color: '#ffffff',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontWeight: 500,
                                        cursor: 'pointer'
                                    }}
                                >
                                    {txt.close}
                                </button>
                            </motion.div>
                        ) : (
                            /* Form - White background, black text */
                            <form onSubmit={handleSubmit} style={{ padding: '24px', backgroundColor: '#ffffff' }}>
                                {/* Product Info (Read-only) */}
                                {(productType || modelName) && (
                                    <div style={{
                                        backgroundColor: '#f9fafb',
                                        borderRadius: '8px',
                                        padding: '16px',
                                        marginBottom: '16px',
                                        border: '1px solid #e5e7eb'
                                    }}>
                                        <label style={{ ...labelStyle, color: '#6b7280', marginBottom: '4px' }}>
                                            {txt.product}
                                        </label>
                                        <p style={{ color: '#111827', fontWeight: 600, margin: 0 }}>
                                            {getProductTypeName(productType)} {modelName && `- ${modelName}`}
                                        </p>
                                    </div>
                                )}

                                {/* Company Name & Contact Person */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                                    <div>
                                        <label style={labelStyle}>
                                            <Building2 style={iconStyle} />
                                            {txt.companyName} <span style={{ color: '#ef4444' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            required
                                            style={inputStyle}
                                        />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>
                                            <User style={iconStyle} />
                                            {txt.contactPerson} <span style={{ color: '#ef4444' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="contactPerson"
                                            value={formData.contactPerson}
                                            onChange={handleInputChange}
                                            required
                                            style={inputStyle}
                                        />
                                    </div>
                                </div>

                                {/* Email & Phone */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                                    <div>
                                        <label style={labelStyle}>
                                            <Mail style={iconStyle} />
                                            {txt.email} <span style={{ color: '#ef4444' }}>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            style={inputStyle}
                                        />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>
                                            <Phone style={iconStyle} />
                                            {txt.phone} <span style={{ color: '#ef4444' }}>*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            style={inputStyle}
                                        />
                                    </div>
                                </div>

                                {/* Capacity & Waste Type */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                                    <div>
                                        <label style={labelStyle}>
                                            <Scale style={iconStyle} />
                                            {txt.dailyCapacity}
                                        </label>
                                        <input
                                            type="text"
                                            name="dailyCapacity"
                                            value={formData.dailyCapacity}
                                            onChange={handleInputChange}
                                            placeholder={txt.dailyCapacityPlaceholder}
                                            style={inputStyle}
                                        />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>
                                            <Trash2 style={iconStyle} />
                                            {txt.wasteType}
                                        </label>
                                        <input
                                            type="text"
                                            name="wasteType"
                                            value={formData.wasteType}
                                            onChange={handleInputChange}
                                            placeholder={txt.wasteTypePlaceholder}
                                            style={inputStyle}
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div style={{ marginBottom: '16px' }}>
                                    <label style={labelStyle}>
                                        <MessageSquare style={iconStyle} />
                                        {txt.message}
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder={txt.messagePlaceholder}
                                        rows={4}
                                        style={{
                                            ...inputStyle,
                                            resize: 'none',
                                            minHeight: '100px'
                                        }}
                                    />
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div style={{
                                        padding: '16px',
                                        backgroundColor: '#fef2f2',
                                        border: '1px solid #fecaca',
                                        borderRadius: '8px',
                                        color: '#dc2626',
                                        fontSize: '14px',
                                        marginBottom: '16px'
                                    }}>
                                        {error}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{
                                        width: '100%',
                                        padding: '16px',
                                        backgroundColor: '#dc2626',
                                        color: '#ffffff',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                        opacity: isSubmitting ? 0.7 : 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 style={{ width: '20px', height: '20px', animation: 'spin 1s linear infinite' }} />
                                            {txt.submitting}
                                        </>
                                    ) : (
                                        <>
                                            <Send style={{ width: '20px', height: '20px' }} />
                                            {txt.submit}
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default QuoteRequestModal;
