# MT Makina SEO Implementation Guide

## 📋 Genel Bakış

MT Makina web sitesi, Google ve diğer arama motorlarında üst sıralarda yer almak için kapsamlı SEO optimizasyonu içerir.

## 🎯 SEO Özellikleri

### 1. URL Yapısı (Temiz URL'ler)
Tüm sayfalar SEO dostu URL'lere sahiptir:

```
Ana Sayfa: parcalamamakinesi.com/
Kurumsal: parcalamamakinesi.com/kurumsal
Ürünler: parcalamamakinesi.com/urunler
Teknoloji: parcalamamakinesi.com/teknoloji
Referanslar: parcalamamakinesi.com/referanslar
İletişim: parcalamamakinesi.com/iletisim
```

### 2. Ürün Sayfaları URL'leri

**Kategori Sayfaları:**
```
Tek Şaftlı: /tek-shaftli-parcalama-makinesi
Çift Şaftlı: /cift-shaftli-parcalama-makinesi
Dörtlü Şaft: /dort-shaftli-parcalama-makinesi
Metal Kırıcı: /metal-parcalama-makinesi
Granülatör: /granulator-makinesi
Balyalama: /balyalama-makinesi
Konveyör: /konveyor-sistemi
Ayırıcı: /ayristirma-makinesi
```

**Model Detay Sayfaları:**
```
TSH-60: /tek-shaftli-parcalama-makinesi/tsh-60
TSH-80: /tek-shaftli-parcalama-makinesi/tsh-80
CS-20: /cift-shaftli-parcalama-makinesi/cs-20
QS-80: /dort-shaftli-parcalama-makinesi/qs-80
... ve tüm diğer modeller
```

### 3. Meta Tags

Her sayfa için unique meta tags:
- **Title Tag:** Her sayfa için özel, anahtar kelime optimize edilmiş başlık (50-60 karakter)
- **Meta Description:** Her sayfa için unique açıklama (150-160 karakter)
- **Meta Keywords:** İlgili anahtar kelimeler
- **Canonical URL:** Duplicate content önleme
- **Open Graph Tags:** Sosyal medya paylaşımları için
- **Twitter Cards:** Twitter paylaşımları için

### 4. Structured Data (JSON-LD)

**Ana Sayfa:**
- Organization schema (şirket bilgileri)
- LocalBusiness schema (adres, telefon)

**Ürün Sayfaları:**
- Product schema (ürün detayları)
- BreadcrumbList schema (breadcrumb navigation)

**Kategori Sayfaları:**
- ItemList schema (ürün listesi)
- BreadcrumbList schema

### 5. Sitemap ve Robots.txt

**Sitemap.xml Oluşturma:**
```typescript
import { generateSitemapXML } from './utils/sitemapGenerator';
const sitemapContent = generateSitemapXML();
// Bu içeriği /public/sitemap.xml dosyasına kaydedin
```

**Robots.txt Oluşturma:**
```typescript
import { generateRobotsTxt } from './utils/sitemapGenerator';
const robotsContent = generateRobotsTxt();
// Bu içeriği /public/robots.txt dosyasına kaydedin
```

## 📊 Anahtar Kelime Stratejisi

### Ana Anahtar Kelimeler:
1. **parçalama makinesi** (yüksek hacim)
2. **shredder** (sektörel terim)
3. **geri dönüşüm makinesi**
4. **endüstriyel parçalama**
5. **MT Makina**

### Ürün Spesifik Kelimeler:
1. **tek şaftlı parçalama makinesi**
2. **çift şaftlı shredder**
3. **metal kırıcı**
4. **plastik parçalama**
5. **granülatör makinesi**
6. **balyalama makinesi**

### Long-tail Keywords (Model bazlı):
- "TSH-60 tek şaftlı parçalama makinesi fiyat"
- "CS-20 çift şaftlı shredder teknik özellikleri"
- "plastik parçalama makinesi 500 kg saat"
- "endüstriyel metal kırıcı satış"

## 🚀 Deployment Checklist

### 1. Server Konfigürasyonu (URL Rewriting)

**Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # HTTPS yönlendirmesi
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
  
  # www olmayan versiyona yönlendirme (tercihli)
  RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
  RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
  
  # React Router için tüm istekleri index.html'e yönlendir
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

**Nginx:**
```nginx
server {
    listen 80;
    server_name parcalamamakinesi.com www.parcalamamakinesi.com;
    
    # HTTPS yönlendirme
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.parcalamamakinesi.com;
    
    # www olmadan yönlendirme
    return 301 https://parcalamamakinesi.com$request_uri;
}

server {
    listen 443 ssl http2;
    server_name parcalamamakinesi.com;
    
    root /var/www/mtmakina;
    index index.html;
    
    # SSL sertifikası
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
    
    # React Router için
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 2. Google Search Console Kurulumu

1. [Google Search Console](https://search.google.com/search-console)'a gidin
2. "Mülk Ekle" → "URL Ön Eki" → `https://parcalamamakinesi.com`
3. Doğrulama yöntemlerinden birini seçin:
   - HTML dosyası yükleme
   - HTML meta tag
   - Google Analytics
   - Google Tag Manager

4. Sitemap gönderimi:
   - Search Console → Sitemaps
   - `https://parcalamamakinesi.com/sitemap.xml` ekleyin

### 3. Google Analytics 4 (GA4) Kurulumu

**Tracking Code Ekleme:**

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**React Component olarak:**
```typescript
// /components/GoogleAnalytics.tsx
export const GoogleAnalytics = () => {
  useEffect(() => {
    // GA4 tracking code
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
};
```

### 4. Google My Business

1. [Google My Business](https://www.google.com/business/) hesabı oluşturun
2. İşletme bilgilerini ekleyin:
   - İsim: MT Makina
   - Kategori: Makine Üreticisi, Endüstriyel Ekipman Tedarikçisi
   - Adres
   - Telefon
   - Website: parcalamamakinesi.com
   - Çalışma saatleri
3. Fotoğraflar ekleyin (Logo, Fabrika, Ürünler)
4. İşletmeyi doğrulayın

### 5. Schema Markup Test

Structured data'yı test edin:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

### 6. Page Speed Optimization

**Kontrol Araçları:**
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

**Optimizasyon Önerileri:**
- ✅ Görseller optimize edilmiş (ImgBB CDN kullanılıyor)
- ✅ Lazy loading uygulanmış
- ✅ Code splitting (React)
- ⚠️ Minification (build sırasında)
- ⚠️ Gzip compression (server config)
- ⚠️ Browser caching (server config)

### 7. Mobile-First Indexing

Site tamamen responsive olarak tasarlandı:
- ✅ Mobile viewport meta tag
- ✅ Responsive tasarım (Tailwind CSS)
- ✅ Touch-friendly navigation
- ✅ Mobile-optimized images
- ✅ Fast mobile loading

## 📈 SEO Monitoring

### Haftalık Kontroller:
1. Google Search Console'da hataları kontrol edin
2. Arama sorgularını ve tıklama oranlarını inceleyin
3. Hangi sayfaların performans gösterdiğini analiz edin

### Aylık Kontroller:
1. Google Analytics'te trafik analizi yapın
2. Anahtar kelime sıralamalarını takip edin
3. Backlink profilini kontrol edin (Ahrefs, SEMrush)
4. Rakip analizi yapın

### Önerilen SEO Araçları:
- **Ahrefs** - Backlink analizi ve anahtar kelime araştırması
- **SEMrush** - Kapsamlı SEO analizi
- **Ubersuggest** - Ücretsiz anahtar kelime aracı
- **Screaming Frog** - Site crawling ve teknik SEO
- **Google Trends** - Anahtar kelime trendleri

## 🎨 Content Strategy

### Blog/İçerik Önerileri (Gelecek için):
1. "Parçalama Makinesi Seçim Rehberi"
2. "Plastik Geri Dönüşümde En İyi Uygulamalar"
3. "Metal Kırıcı Bakım ve Onarım İpuçları"
4. "Endüstriyel Atık Yönetimi Çözümleri"
5. "TSH Serisi Detaylı İnceleme ve Karşılaştırma"

### Her içerik için:
- ✅ 1000+ kelime (kapsamlı)
- ✅ H1, H2, H3 başlıklar (anahtar kelime optimize)
- ✅ Görseller (alt text ile)
- ✅ İç linkler (diğer ürün sayfalarına)
- ✅ CTA (Teklif Al butonu)
- ✅ Schema markup (Article)

## 🔗 Backlink Strategy

### Kaliteli Backlink Kaynakları:
1. Sanayi ve ticaret odası üyelikleri
2. Sektörel directory'ler
3. B2B platformları (TurkishExporter, Made-in-Turkey)
4. Referans müşteri web siteleri
5. Endüstri blogları ve forumlar

### Link Building Taktikleri:
- ✅ Müşteri success stories (case studies)
- ✅ Sektörel etkinliklere katılım
- ✅ Press release'ler
- ✅ Guest blogging
- ✅ İnfografikler

## ✅ Yapılması Gerekenler (Deployment Öncesi)

- [ ] Server'da URL rewriting konfigürasyonu
- [ ] sitemap.xml dosyası oluştur ve yükle
- [ ] robots.txt dosyası oluştur ve yükle
- [ ] Google Search Console'a site ekle
- [ ] Sitemap'i Google'a gönder
- [ ] Google Analytics 4 kurulumu
- [ ] Google My Business profili oluştur
- [ ] SSL sertifikası kurulumu (HTTPS)
- [ ] 301 redirects (www → non-www veya tersi)
- [ ] Page speed testleri yap ve optimize et
- [ ] Mobile-friendly test
- [ ] Structured data test
- [ ] Tüm sayfalarda meta tags kontrolü

## 📞 Destek

SEO ile ilgili sorularınız için:
- Email: info@mtmakina.com
- Telefon: +90 542 310 9930

---

**Son Güncelleme:** 2024
**Versiyon:** 1.0
