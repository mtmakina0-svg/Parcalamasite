// Google Analytics 4 Utility Module
// Measurement ID: G-V6GK4L2520

declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (...args: unknown[]) => void;
    }
}

const GA_MEASUREMENT_ID = 'G-V6GK4L2520';

// Initialize Google Analytics
export const initGA = (): void => {
    // Skip if already initialized or in development
    if (typeof window === 'undefined') return;
    if (window.gtag) return;

    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false // We'll track page views manually for SPA
    });

    console.log('✅ Google Analytics initialized');
};

// Track page view
export const trackPageView = (pagePath: string, pageTitle?: string): void => {
    if (typeof window === 'undefined' || !window.gtag) return;

    window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle || document.title,
        page_location: window.location.href
    });
};

// Track custom events
export const trackEvent = (
    eventName: string,
    params?: Record<string, string | number | boolean>
): void => {
    if (typeof window === 'undefined' || !window.gtag) return;

    window.gtag('event', eventName, params);
};

// Track Quote Form Submission
export const trackQuoteSubmission = (
    productType: string,
    modelName: string
): void => {
    trackEvent('quote_form_submit', {
        product_type: productType,
        model_name: modelName,
        conversion: true
    });
    console.log(`📊 Tracked: Quote submission for ${productType} - ${modelName}`);
};

// Track E-Catalog Download
export const trackECatalogDownload = (
    productType: string,
    modelName?: string
): void => {
    trackEvent('ecatalog_download', {
        product_type: productType,
        model_name: modelName || 'general',
        conversion: true
    });
    console.log(`📊 Tracked: E-Catalog download for ${productType}`);
};

// Track WhatsApp Click
export const trackWhatsAppClick = (
    status: 'online' | 'offline'
): void => {
    trackEvent('whatsapp_click', {
        status: status,
        conversion: true
    });
    console.log(`📊 Tracked: WhatsApp click (${status})`);
};

// Track Contact Form Submission
export const trackContactFormSubmit = (): void => {
    trackEvent('contact_form_submit', {
        conversion: true
    });
    console.log('📊 Tracked: Contact form submission');
};

// Track Product View
export const trackProductView = (
    productType: string,
    modelName?: string
): void => {
    trackEvent('view_item', {
        item_category: productType,
        item_name: modelName || productType
    });
};
