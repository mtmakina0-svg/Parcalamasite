# 🚀 MT Makina SEO Deployment Guide
## Google-First SEO Optimizasyon Rehberi

> **Son Güncelleme:** Kasım 2024  
> **Amaç:** Google arama sonuçlarında 1. sayfa sıralaması  
> **Hedef Diller:** Türkçe, İngilizce, Rusça, Arapça

---

## 📋 İçindekiler
1. [SEO Altyapısı Özeti](#seo-altyapısı-özeti)
2. [Google Search Console Kurulumu](#google-search-console-kurulumu)
3. [Sitemap ve Robots.txt](#sitemap-ve-robotstxt)
4. [Structured Data (JSON-LD)](#structured-data-json-ld)
5. [Çok Dilli SEO](#çok-dilli-seo-hreflang)
6. [Sayfa Hızı Optimizasyonu](#sayfa-hızı-optimizasyonu)
7. [Content SEO Checklist](#content-seo-checklist)
8. [Sosyal Medya Entegrasyonu](#sosyal-medya-entegrasyonu)
9. [Analytics ve Takip](#analytics-ve-takip)
10. [Sürekli İyileştirme](#sürekli-iyileştirme)

---

## ✅ SEO Altyapısı Özeti

### Otomatik SEO Özellikleri (Hazır)

#### 🎯 Meta Tags
- ✅ **Dynamic Titles:** Her sayfa için unique, optimize edilmiş başlıklar
- ✅ **Meta Descriptions:** Her ürün/sayfa için benzersiz açıklamalar
- ✅ **Keywords:** Hedef anahtar kelimeler otomatik ekleniyor
- ✅ **Canonical URLs:** Duplicate content önleme
- ✅ **Robots Meta:** Index/follow direktifleri

#### 🌍 Çok Dilli Destek
- ✅ **4 Dil:** Türkçe (tr), İngilizce (en), Rusça (ru), Arapça (ar)
- ✅ **Hreflang Tags:** Google için dil alternatifleri
- ✅ **RTL Support:** Arapça için tam RTL desteği
- ✅ **Language Switcher:** Kullanıcı dostu dil değiştirici

#### 📱 Open Graph & Social Media
- ✅ **Facebook/LinkedIn:** OG tags tam entegre
- ✅ **Twitter/X Cards:** Summary large image kartları
- ✅ **Image Optimization:** Sosyal medya için optimize görseller (1200x630)
- ✅ **Locale Support:** Her dil için doğru locale

#### 🏗️ Structured Data (Schema.org)
- ✅ **Organization Schema:** İşletme bilgileri
- ✅ **Product Schema:** Ürün detayları (ready to implement)
- ✅ **BreadcrumbList:** Navigasyon yapısı
- ✅ **LocalBusiness:** Yerel arama optimizasyonu

#### ⚡ Performance
- ✅ **Preconnect:** External domain preconnection
- ✅ **DNS Prefetch:** Hız optimizasyonu
- ✅ **Lazy Loading:** Görsel optimize yükleme
- ✅ **Image Fallbacks:** Yedek görsel sistemi

---

## 🔧 Google Search Console Kurulumu

### 1. Search Console'a Site Ekle

```bash
# Adım 1: Google Search Console'a git
https://search.google.com/search-console/

# Adım 2: "Add Property" → URL Prefix seç
https://www.parcalamamakinesi.com
```

### 2. Site Doğrulama

**Seçenek A: HTML Meta Tag (Önerilen)**
```html
<!-- SEOHead.tsx dosyasında zaten hazır -->
<!-- Sadece YOUR_GOOGLE_VERIFICATION_CODE_HERE kısmını değiştir -->

<!-- components/SEOHead.tsx - Line 74 -->
updateMetaTag('meta[name="google-site-verification"]', 'name', 'YOUR_GOOGLE_VERIFICATION_CODE_HERE');
```

**Seçenek B: HTML File Upload**
```html
<!-- Public klasörüne ekle: google[code].html -->
```

### 3. Sitemap Gönder

```bash
# Search Console → Sitemaps bölümüne git
# URL'yi ekle:
https://www.parcalamamakinesi.com/sitemap.xml
```

---

## 🗺️ Sitemap ve Robots.txt

### Sitemap.xml Oluşturma

```typescript
// utils/sitemapGenerator.ts kullanarak sitemap oluştur

import { generateSitemapXML, generateRobotsTxt } from './utils/sitemapGenerator';

// Sitemap XML
const sitemapContent = generateSitemapXML();
// public/sitemap.xml dosyasına kaydet

// Robots.txt
const robotsContent = generateRobotsTxt();
// public/robots.txt dosyasına kaydet
```

### Sitemap İçeriği
✅ **134+ URLs:**
- 8 Ana sayfa (Home, About, Products, Contact, vb.)
- 8 Ürün kategorisi (Single-shaft, Dual-shaft, vb.)
- 40+ Ürün modelleri (TSH-60, CS-80, vb.)
- 9 Atık kategorisi
- Her sayfa için 4 dil versiyonu

### Robots.txt Örnek
```txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://www.parcalamamakinesi.com/sitemap.xml

User-agent: Googlebot
Allow: /
```

---

## 📊 Structured Data (JSON-LD)

### Organization Schema (Homepage)
```typescript
// utils/seoConfig.ts - generateOrganizationStructuredData()
// Bu otomatik olarak homepage'e ekleniyor

{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MT Makina",
  "url": "https://www.parcalamamakinesi.com",
  "logo": "https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cumhuriyet Mahallesi, Nazım Hikmet Bulvarı, 1983 Sk.",
    "addressLocality": "Esenyurt",
    "addressRegion": "İstanbul",
    "postalCode": "34512",
    "addressCountry": "TR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-542-310-99-30",
    "contactType": "Sales",
    "availableLanguage": ["tr", "en", "ru", "ar"]
  }
}
```

### Product Schema (Ürün Sayfaları)
```typescript
// utils/seoConfig.ts - generateProductStructuredData()
// Her ürün detay sayfasında kullan

import { generateProductStructuredData, insertStructuredData } from '../utils/seoConfig';

// Component içinde:
useEffect(() => {
  const structuredData = generateProductStructuredData('single-shaft', 'TSH-60');
  insertStructuredData(structuredData);
}, [productType, modelName]);
```

### Test Araçları
```bash
# Google Rich Results Test
https://search.google.com/test/rich-results

# Schema.org Validator
https://validator.schema.org/
```

---

## 🌐 Çok Dilli SEO (Hreflang)

### Otomatik Hreflang Tags
```html
<!-- SEOHead.tsx otomatik olarak ekliyor: -->
<link rel="alternate" hreflang="tr" href="https://www.parcalamamakinesi.com/...?lang=tr" />
<link rel="alternate" hreflang="en" href="https://www.parcalamamakinesi.com/...?lang=en" />
<link rel="alternate" hreflang="ru" href="https://www.parcalamamakinesi.com/...?lang=ru" />
<link rel="alternate" hreflang="ar" href="https://www.parcalamamakinesi.com/...?lang=ar" />
<link rel="alternate" hreflang="x-default" href="https://www.parcalamamakinesi.com/..." />
```

### Dil URL Yapısı
```typescript
// Mevcut URL yapısı:
https://www.parcalamamakinesi.com/tek-shaftli-parcalama-makinesi?lang=en
https://www.parcalamamakinesi.com/tek-shaftli-parcalama-makinesi?lang=ru
https://www.parcalamamakinesi.com/tek-shaftli-parcalama-makinesi?lang=ar

// SEO için önerilen (gelecekte):
https://www.parcalamamakinesi.com/tr/tek-shaftli-parcalama-makinesi
https://www.parcalamamakinesi.com/en/single-shaft-shredder
https://www.parcalamamakinesi.com/ru/odnovalnyj-izmelchitel
https://www.parcalamamakinesi.com/ar/[arabic-slug]
```

### Google Notranslate
```html
<!-- Otomatik çeviriyi önle (SEOHead.tsx'de aktif) -->
<meta name="google" content="notranslate">
```

---

## ⚡ Sayfa Hızı Optimizasyonu

### Mevcut Optimizasyonlar
✅ **Preconnect:** i.ibb.co, YouTube, Google Fonts  
✅ **DNS Prefetch:** Google Analytics  
✅ **Lazy Loading:** Görseller için ImageWithFallback  
✅ **Image Optimization:** ImgBB CDN kullanımı

### Ek Optimizasyon Önerileri

#### 1. Image Optimization
```bash
# ImgBB'de görselleri optimize et:
- WebP formatı kullan
- Responsive images (srcset)
- Max genişlik: 1920px
- Sıkıştırma: 80-85%
```

#### 2. Font Optimization
```css
/* styles/globals.css */
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700&display=swap');
/* display=swap zaten aktif ✅ */
```

#### 3. Code Splitting (Production)
```typescript
// React.lazy kullan
const ProductDetailPage = React.lazy(() => import('./components/ProductDetailPage'));
```

#### 4. Minification
```bash
# Production build otomatik minify ediyor
npm run build
```

### Speed Test Araçları
```bash
# Google PageSpeed Insights
https://pagespeed.web.dev/

# GTmetrix
https://gtmetrix.com/

# WebPageTest
https://www.webpagetest.org/
```

**Hedef Skorlar:**
- ✅ PageSpeed Desktop: 90+
- ✅ PageSpeed Mobile: 80+
- ✅ First Contentful Paint: < 1.8s
- ✅ Largest Contentful Paint: < 2.5s

---

## 📝 Content SEO Checklist

### Her Sayfa İçin Kontrol Listesi

#### ✅ Meta Tags
- [ ] **Title:** 50-60 karakter, hedef keyword içeriyor
- [ ] **Description:** 150-160 karakter, call-to-action var
- [ ] **Keywords:** 5-10 hedef keyword
- [ ] **Canonical URL:** Doğru ve unique
- [ ] **OG Image:** 1200x630px, optimize edilmiş

#### ✅ Content Quality
- [ ] **H1 Tag:** Sayfada sadece 1 adet, keyword içeriyor
- [ ] **H2-H6 Tags:** Hiyerarşik yapı
- [ ] **Keyword Density:** 1-2% (doğal kullanım)
- [ ] **Internal Links:** İlgili sayfalara linkler
- [ ] **External Links:** Güvenilir kaynaklara linkler
- [ ] **Alt Text:** Tüm görsellerde açıklayıcı alt text

#### ✅ Technical SEO
- [ ] **Mobile Responsive:** Mobil uyumlu
- [ ] **Page Speed:** 3 saniyeden hızlı yükleniyor
- [ ] **HTTPS:** SSL sertifikası aktif
- [ ] **No Broken Links:** 404 hatası yok
- [ ] **Structured Data:** Schema markup var

### Anahtar Kelime Stratejisi

#### Ana Hedef Kelimeler
**Türkçe:**
- parçalama makinesi (yüksek hacim)
- shredder machine
- plastik kırma makinesi
- metal parçalama makinesi
- tek şaftlı parçalama
- çift şaftlı parçalama

**İngilizce:**
- industrial shredder
- single shaft shredder
- dual shaft shredder
- plastic shredding machine
- metal shredder

#### Long-tail Keywords
- "parçalama makinesi fiyatları"
- "tek şaftlı parçalama makinesi nedir"
- "plastik kırma makinesi fiyat teklifi"
- "endüstriyel parçalama sistemleri"

#### Ürün Specific Keywords
Her ürün modeli için:
- Model adı (TSH-60, CS-80)
- Kapasite (500-800 kg/saat)
- Motor gücü (15-30 kW)
- Kullanım alanı (plastik, metal, ahşap)

---

## 📱 Sosyal Medya Entegrasyonu

### Open Graph Tags (Otomatik)
```html
<!-- Facebook, LinkedIn için -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png">
<meta property="og:url" content="...">
<meta property="og:type" content="website">
<meta property="og:locale" content="tr_TR">
<meta property="og:site_name" content="MT Makina">
```

### Twitter Cards (Otomatik)
```html
<!-- Twitter/X için -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
<meta name="twitter:creator" content="@mtmakina">
```

### Social Share Test
```bash
# Facebook Debugger
https://developers.facebook.com/tools/debug/

# Twitter Card Validator
https://cards-dev.twitter.com/validator

# LinkedIn Post Inspector
https://www.linkedin.com/post-inspector/
```

---

## 📈 Analytics ve Takip

### Google Analytics 4 Setup

```html
<!-- public/index.html'e ekle -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Event Tracking (Önemli Aksiyonlar)

```typescript
// Teklif butonu tıklama
gtag('event', 'quote_request', {
  'product_type': 'single-shaft',
  'model': 'TSH-60',
  'language': 'tr'
});

// E-katalog indirme
gtag('event', 'catalog_download', {
  'language': 'tr'
});

// Ürün detay görüntüleme
gtag('event', 'product_view', {
  'product_type': 'dual-shaft',
  'model': 'CS-80'
});

// Dil değiştirme
gtag('event', 'language_change', {
  'from': 'tr',
  'to': 'en'
});
```

### Conversion Tracking

**Hedef Dönüşümler:**
1. ✅ İletişim formu gönderimi
2. ✅ Teklif talebi
3. ✅ E-katalog indirme
4. ✅ Telefon numarası tıklama
5. ✅ WhatsApp mesaj başlatma
6. ✅ YouTube video izleme
7. ✅ Ürün detay sayfası ziyareti (30+ saniye)

---

## 🔄 Sürekli İyileştirme

### Haftalık Kontroller
- [ ] Google Search Console → Performans raporu
- [ ] Organik trafik artışı/azalışı
- [ ] En çok trafik alan sayfalar
- [ ] Click-through rate (CTR) analizi
- [ ] Pozisyon değişiklikleri

### Aylık Kontroller
- [ ] Keyword ranking takibi
- [ ] Backlink analizi
- [ ] Competitor analizi
- [ ] Content güncellemeleri
- [ ] Technical SEO audit

### Quarterly (3 Ayda Bir)
- [ ] Sitemap güncelleme
- [ ] Content expansion (yeni blog/makaleler)
- [ ] Video content ekleme
- [ ] Case studies/referans detayları
- [ ] FAQ bölümü genişletme

### SEO Tools (Önerilen)

**Ücretsiz:**
- ✅ Google Search Console
- ✅ Google Analytics
- ✅ Google PageSpeed Insights
- ✅ Bing Webmaster Tools

**Ücretli (Önerilen):**
- Ahrefs / SEMrush → Keyword & competitor analizi
- Screaming Frog → Technical SEO audit
- Moz Pro → All-in-one SEO platform

---

## 🎯 İlk 30 Gün Action Plan

### Week 1: Setup & Verification
- [ ] Google Search Console kurulumu
- [ ] Google Analytics kurulumu
- [ ] Sitemap.xml yükleme
- [ ] Robots.txt yükleme
- [ ] Site doğrulama

### Week 2: Content Optimization
- [ ] Tüm sayfa başlıklarını kontrol
- [ ] Meta descriptions optimize et
- [ ] Alt text'leri kontrol/ekle
- [ ] Internal linking yapısı kur
- [ ] Broken link kontrolü

### Week 3: Technical SEO
- [ ] Page speed optimization
- [ ] Mobile responsive test
- [ ] Structured data implement
- [ ] HTTPS kontrolü
- [ ] Canonical URL kontrolü

### Week 4: Promotion & Tracking
- [ ] Social media paylaşımları
- [ ] İlk backlink çalışmaları
- [ ] Analytics event tracking
- [ ] Initial ranking check
- [ ] Performance baseline

---

## 📞 Destek ve Kaynaklar

### Resmi Dokümantasyon
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

### MT Makina SEO Dosyaları
- `/utils/seoConfig.ts` → SEO metadata ve URL yapısı
- `/utils/sitemapGenerator.ts` → Sitemap ve robots.txt
- `/components/SEOHead.tsx` → SEO component
- `/SEO_GUIDE.md` → Temel SEO rehberi
- `/DEPLOYMENT.md` → Deployment talimatları

---

## ✅ Deployment Checklist

Son kontroller (Production'a almadan önce):

### Critical
- [ ] Google verification code eklendi
- [ ] Sitemap.xml yüklendi
- [ ] Robots.txt yüklendi
- [ ] Analytics tracking code eklendi
- [ ] SSL/HTTPS aktif
- [ ] Tüm sayfalarda canonical URL var

### Important
- [ ] All images have alt text
- [ ] No broken links
- [ ] Page speed > 80 (mobile)
- [ ] Mobile responsive test passed
- [ ] Structured data validate edildi
- [ ] Hreflang tags doğru

### Nice to Have
- [ ] Social media meta tags test edildi
- [ ] Rich snippets preview kontrol edildi
- [ ] 404 error page tasarlandı
- [ ] Breadcrumb navigation eklendi
- [ ] FAQ schema eklendi

---

## 🚀 Sonuç

MT Makina websitesi, Google'da en iyi sıralamalara ulaşmak için gerekli tüm SEO altyapısına sahip:

✅ **Technical SEO:** Optimize edilmiş meta tags, hreflang, canonical URLs  
✅ **Content SEO:** Unique, keyword-optimized content her sayfada  
✅ **Performance:** Fast loading, mobile-optimized  
✅ **Multilingual:** 4 dil tam desteği  
✅ **Structured Data:** Schema markup ready  
✅ **Social Media:** OG tags ve Twitter cards

**Sonraki Adımlar:**
1. Google Search Console kurulumu
2. Sitemap gönderimi
3. Analytics tracking
4. İlk 30 gün action plan takibi

**Başarılar! 🎉**

---

*Son güncelleme: Kasım 2024*  
*MT Makina - Industrial Shredding Solutions*
