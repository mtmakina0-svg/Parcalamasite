# 🌍 MT Makina - Çok Dilli SEO Uygulama Rehberi

## 📊 Mevcut Durum ve Sorun

### ❌ Şu Anki Yapı (YANLIŞ):
```
parcalamamakinesi.com/urunler          → Tüm diller aynı URL
parcalamamakinesi.com/tek-saftli-...   → Dil seçimi sadece JavaScript ile
```

**Sorun:** Google her dil versiyonunu ayrı indexleyemiyor çünkü URL'ler aynı.

---

## ✅ Doğru Çok Dilli SEO Yapısı

### 1. URL Yapısı (Subdirectory Yaklaşımı - Önerilen)

```
Ana Sayfa:
https://parcalamamakinesi.com/tr/              (Türkçe)
https://parcalamamakinesi.com/en/              (English)
https://parcalamamakinesi.com/ru/              (Русский)
https://parcalamamakinesi.com/ar/              (العربية)

Ürünler Sayfası:
https://parcalamamakinesi.com/tr/urunler
https://parcalamamakinesi.com/en/products
https://parcalamamakinesi.com/ru/produkty
https://parcalamamakinesi.com/ar/products

Tek Şaftlı Kategori:
https://parcalamamakinesi.com/tr/tek-saftli-parcalama-makinesi
https://parcalamamakinesi.com/en/single-shaft-shredder
https://parcalamamakinesi.com/ru/odnovalnaya-drobilka
https://parcalamamakinesi.com/ar/single-shaft-shredder

Model Detay:
https://parcalamamakinesi.com/tr/tek-saftli-parcalama-makinesi/tsh-60
https://parcalamamakinesi.com/en/single-shaft-shredder/tsh-60
https://parcalamamakinesi.com/ru/odnovalnaya-drobilka/tsh-60
https://parcalamamakinesi.com/ar/single-shaft-shredder/tsh-60
```

---

## 🔧 Teknik Uygulama

### A. HREFLANG Tags (Her Sayfada Olmalı)

```html
<!-- Türkçe sayfa head'inde -->
<link rel="alternate" hreflang="tr" href="https://parcalamamakinesi.com/tr/urunler" />
<link rel="alternate" hreflang="en" href="https://parcalamamakinesi.com/en/products" />
<link rel="alternate" hreflang="ru" href="https://parcalamamakinesi.com/ru/produkty" />
<link rel="alternate" hreflang="ar" href="https://parcalamamakinesi.com/ar/products" />
<link rel="alternate" hreflang="x-default" href="https://parcalamamakinesi.com/tr/urunler" />
```

### B. Canonical URL (Her Dil İçin Kendi Sayfası)

```html
<!-- Türkçe sayfa -->
<link rel="canonical" href="https://parcalamamakinesi.com/tr/urunler" />

<!-- İngilizce sayfa -->
<link rel="canonical" href="https://parcalamamakinesi.com/en/products" />
```

### C. Sitemap.xml (Her Dil İçin Ayrı URL'ler)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- Ana Sayfa - Türkçe -->
  <url>
    <loc>https://parcalamamakinesi.com/tr/</loc>
    <xhtml:link rel="alternate" hreflang="tr" href="https://parcalamamakinesi.com/tr/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://parcalamamakinesi.com/en/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="https://parcalamamakinesi.com/ru/"/>
    <xhtml:link rel="alternate" hreflang="ar" href="https://parcalamamakinesi.com/ar/"/>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  
  <!-- Ana Sayfa - English -->
  <url>
    <loc>https://parcalamamakinesi.com/en/</loc>
    <xhtml:link rel="alternate" hreflang="tr" href="https://parcalamamakinesi.com/tr/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://parcalamamakinesi.com/en/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="https://parcalamamakinesi.com/ru/"/>
    <xhtml:link rel="alternate" hreflang="ar" href="https://parcalamamakinesi.com/ar/"/>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  
  <!-- Her ürün sayfası için 4 dil... -->
</urlset>
```

---

## 🎯 Google Search Console Ayarları

### 1. Sitemap Gönderimi
```
https://parcalamamakinesi.com/sitemap.xml
```

### 2. International Targeting
- Search Console → Settings → International Targeting
- Her dil için hreflang hatalarını kontrol edin

### 3. URL Inspection Tool
Her dilde test URL'leri kontrol edin:
- `/tr/urunler` indexlendi mi?
- `/en/products` indexlendi mi?
- `/ru/produkty` indexlendi mi?
- `/ar/products` indexlendi mi?

---

## 📱 Robots.txt

```txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

# Sitemap
Sitemap: https://parcalamamakinesi.com/sitemap.xml
Sitemap: https://parcalamamakinesi.com/sitemap-tr.xml
Sitemap: https://parcalamamakinesi.com/sitemap-en.xml
Sitemap: https://parcalamamakinesi.com/sitemap-ru.xml
Sitemap: https://parcalamamakinesi.com/sitemap-ar.xml
```

---

## 🚀 Vercel/Netlify Deployment Ayarları

### vercel.json
```json
{
  "rewrites": [
    { "source": "/tr/:path*", "destination": "/index.html" },
    { "source": "/en/:path*", "destination": "/index.html" },
    { "source": "/ru/:path*", "destination": "/index.html" },
    { "source": "/ar/:path*", "destination": "/index.html" }
  ],
  "redirects": [
    {
      "source": "/",
      "destination": "/tr/",
      "permanent": false
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Language",
          "value": "tr, en, ru, ar"
        }
      ]
    }
  ]
}
```

### netlify.toml
```toml
[[redirects]]
  from = "/"
  to = "/tr/"
  status = 302

[[redirects]]
  from = "/tr/*"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/en/*"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/ru/*"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/ar/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    Content-Language = "tr, en, ru, ar"
```

---

## 📊 SEO Performans Kontrol Listesi

### ✅ Kontrol Edilecekler:

1. **URL Yapısı**
   - [ ] Her dil için ayrı URL'ler var mı?
   - [ ] URL'ler dilde mi? (ör: /en/products, /tr/urunler)
   - [ ] Model numaraları tutarlı mı? (TSH-60 her dilde aynı)

2. **Meta Tags**
   - [ ] Her dilde unique title var mı?
   - [ ] Her dilde unique description var mı?
   - [ ] Canonical URL doğru mu?

3. **Hreflang**
   - [ ] Her sayfada hreflang tags var mı?
   - [ ] x-default tanımlandı mı?
   - [ ] Bidirectional links doğru mu?

4. **Sitemap**
   - [ ] Sitemap.xml oluşturuldu mu?
   - [ ] Her dil için URL'ler var mı?
   - [ ] Hreflang annotations ekli mi?
   - [ ] Google Search Console'a gönderildi mi?

5. **Robots.txt**
   - [ ] Tüm diller izin veriliyor mu?
   - [ ] Sitemap referansı var mı?

6. **Server Ayarları**
   - [ ] Content-Language header doğru mu?
   - [ ] Redirects çalışıyor mu?
   - [ ] Rewrites doğru mu?

---

## 🔍 Test Araçları

1. **Google Search Console**
   - URL Inspection Tool
   - Coverage Report
   - International Targeting

2. **Hreflang Validator**
   - https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/
   - https://technicalseo.com/tools/hreflang/

3. **Sitemap Validator**
   - https://www.xml-sitemaps.com/validate-xml-sitemap.html

4. **Rich Results Test**
   - https://search.google.com/test/rich-results

---

## 📈 Beklenen Sonuçlar

### Doğru Uygulamadan Sonra:

1. **Google Arama Sonuçları:**
   - Türkiye'den arama: Türkçe sayfalar çıkar
   - ABD'den arama: İngilizce sayfalar çıkar
   - Rusya'dan arama: Rusça sayfalar çıkar
   - Arap ülkelerinden: Arapça sayfalar çıkar

2. **Indexleme:**
   - Her dilde 40+ sayfa indexlenir
   - Toplam 160+ unique URL (4 dil x 40 sayfa)

3. **Organic Traffic:**
   - Her ülkeden lokal trafikte artış
   - Brand awareness artışı
   - Conversion rate iyileşmesi

---

## ⚠️ Yaygın Hatalar

### ❌ YAPMAYIN:

1. **Aynı URL, farklı içerik**
   ```
   parcalamamakinesi.com/products → JavaScript ile dil değiştirme
   ```
   ❌ Google bunu görmez!

2. **Cookie/Session ile dil seçimi**
   ```
   Cookie: lang=en
   ```
   ❌ Google cookie okumaz!

3. **IP bazlı redirect**
   ```
   if (ip.country === 'US') redirect('/en/')
   ```
   ❌ Google ABD IP'lerinden gelir, her zaman İngilizce görecek!

4. **Client-side rendering only**
   ❌ Google JavaScript'i her zaman tam render edemeyebilir!

### ✅ YAPIN:

1. **Subdirectory ile URL yapısı**
   ```
   /tr/urunler
   /en/products
   ```

2. **SSR veya Pre-rendering**
   - Vercel/Netlify otomatik yapıyor
   - React kodunuz statik HTML oluşturuyor

3. **Hreflang tags**
   - Her sayfada olmalı
   - Bidirectional olmalı

---

## 🎓 Kaynaklar

- [Google Multi-regional and multilingual sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)
- [Google Hreflang Guidelines](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Vercel i18n Routing](https://vercel.com/docs/concepts/next-js/internationalization)

---

## 🆘 Yardım Lazımsa

Eğer kodu güncellemekte zorlanırsanız, ben tüm dosyaları sizin için hazırlayabilirim:
1. URL routing yapısını güncellerim
2. Hreflang tags'leri eklerim
3. Çok dilli sitemap oluştururum
4. vercel.json/netlify.toml yapılandırırım

**Hemen başlayalım mı? 🚀**
