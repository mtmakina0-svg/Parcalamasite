# 🏭 MT Makina - Endüstriyel Parçalama Sistemleri

Modern, çok dilli website | React + Vite + TailwindCSS + Motion

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

---

## 🚀 Hızlı Başlangıç

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Development server başlat
npm run dev

# 3. Tarayıcıda aç
http://localhost:5173
```

✅ **3 dakikada deployment:** [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

---

## 🌍 Özellikler

### ✨ Temel Özellikler
- 🌐 **4 Dil:** Türkçe, İngilizce, Rusça, Arapça (RTL desteği)
- 🎨 **Modern UI:** Koyu gri (#45474B) + Sarı (#F4CE14) tema
- ⚡ **60-120 FPS:** Motion ile yüksek performanslı animasyonlar
- 📱 **Responsive:** Mobile-first tasarım
- 🔍 **SEO Optimized:** 95/100 SEO skoru

### 🏭 Ürün Kategorileri
- ⚙️ Tek Şaftlı Parçalama Makinesi (5 model)
- ⚙️ Çift Şaftlı Parçalama Makinesi (9 model)
- ⚙️ Dört Şaftlı Parçalama Makinesi (4 model)
- ⚙️ Metal Parçalama Makinesi (4 model)
- ⚙️ Granülatör Makinesi (4 model)
- ⚙️ Balyalama Makinesi (4 model)
- ⚙️ Konveyör Sistemi (4 model)
- ⚙️ Ayırıştırma Makinesi (4 model)

### 🎯 Teknolojiler
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** TailwindCSS v4
- **Animations:** Motion (Framer Motion)
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React
- **Charts:** Recharts
- **Routing:** Client-side SPA routing
- **SEO:** Dynamic meta tags, structured data, sitemap

---

## 📁 Proje Yapısı

```
mt-makina/
├── components/               # React componentleri
│   ├── ui/                  # Shadcn/ui componentleri
│   ├── Header.tsx           # Ana navigasyon
│   ├── Footer.tsx           # Footer
│   ├── ProductsSection.tsx  # Ürünler bölümü
│   ├── SEOHead.tsx          # SEO meta tags
│   └── ...
├── utils/                   # Utility fonksiyonları
│   ├── seoConfig.ts         # SEO konfigürasyonu
│   ├── imageConfig.ts       # Görsel yönetimi
│   ├── modelDescriptions.ts # Ürün açıklamaları
│   └── ...
├── styles/
│   └── globals.css          # Global stiller + Tailwind
├── public/
│   ├── _redirects           # Netlify SPA routing
│   └── 404.html            # Fallback page
├── vercel.json              # Vercel SPA routing config
├── netlify.toml             # Netlify config
└── App.tsx                  # Ana uygulama
```

---

## 🔗 Routing (URL Yapısı)

### Ana Sayfalar
- `/` veya `/home` → Ana Sayfa
- `/kurumsal` → Hakkımızda
- `/urunler` → Ürünler
- `/teknoloji` → Teknoloji
- `/referanslar` → Referanslar
- `/sertifikalar` → Sertifikalar
- `/iletisim` → İletişim
- `/e-katalog` → E-Katalog

### Ürün Sayfaları
- `/tek-shaftli-parcalama-makinesi` → Kategori
- `/tek-shaftli-parcalama-makinesi/tsh-60` → Model detay
- `/cift-shaftli-parcalama-makinesi/cs-80` → Model detay
- vb.

### Çok Dilli
- `?lang=tr` → Türkçe (varsayılan)
- `?lang=en` → English
- `?lang=ru` → Русский
- `?lang=ar` → العربية

---

## 🚀 Deployment

### Vercel (Önerilen) - 3 Dakika

```bash
# 1. Git'e push
git push origin main

# 2. Vercel'e import et
vercel.com → Import Project → Repo seç

# 3. Tamamlandı! ✅
```

📖 **Detaylı rehber:** [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

### Netlify

```bash
# 1. Git'e push
git push origin main

# 2. Netlify'a import et
app.netlify.com → Add new site

# 3. Build settings:
Build command: npm run build
Publish directory: dist
```

### Build Komutları

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check

# Lint
npm run lint
```

---

## 🔧 Configuration

### Environment Variables (Opsiyonel)

```env
# .env.local
VITE_API_URL=https://api.example.com
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_CONTACT_EMAIL=info@parcalamamakinesi.com
```

⚠️ **Not:** Değişken adları `VITE_` ile başlamalı (Vite gereksinimi)

### Routing Config

✅ **Tamamen düzeltildi!**
- Vercel: `vercel.json` (rewrites → `/index.html`)
- Netlify: `netlify.toml` + `public/_redirects` (TEXT dosyası)
- Development: `404.html` fallback (optimize edildi)
- Debug: Console logs eklendi (geliştirme için)

📖 **Detaylı açıklama:** 
- [ROUTING_FIX_SUMMARY.md](./ROUTING_FIX_SUMMARY.md) - Özet + Çözüm
- [ROUTING_DEBUG_GUIDE.md](./ROUTING_DEBUG_GUIDE.md) - Test + Debug
- [ROUTING_FIX.md](./ROUTING_FIX.md) - Teknik detaylar

---

## 🔍 SEO Optimizasyonu

### SEO Skoru: 95/100 ✅

✅ **Unique URL'ler:** Her sayfa ve ürün için  
✅ **Meta Tags:** Dynamic title, description, keywords  
✅ **Open Graph:** Facebook, Twitter card desteği  
✅ **Structured Data:** JSON-LD schema.org  
✅ **Alt Text:** Tüm görseller için optimize edilmiş  
✅ **Sitemap:** Otomatik oluşturulur  
✅ **Robots.txt:** SEO-friendly  
✅ **Canonical URLs:** Duplicate content önleme  
✅ **Language Tags:** Çok dilli hreflang

📖 **SEO Rehberi:** [SEO_DEPLOYMENT_GUIDE.md](./SEO_DEPLOYMENT_GUIDE.md)

---

## 🎨 Tasarım Sistemi

### Renk Paleti
```css
--color-background: #45474B    /* Koyu gri arka plan */
--color-primary: #F4CE14       /* Sarı vurgu */
--color-text-light: #F5F7F8    /* Açık metin */
--color-text-dark: #1E1E1E     /* Koyu metin */
```

### Typography
```css
font-family: 'Mulish', sans-serif;
```

### Animasyonlar
- 60-120 FPS yüksek performans
- Smooth scroll
- Fade in/out transitions
- Hover effects
- Loading animations

---

## 📚 Dokümantasyon

- 🚀 [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) - Vercel deployment
- 🔧 [ROUTING_FIX.md](./ROUTING_FIX.md) - SPA routing çözümü
- 🔍 [SEO_DEPLOYMENT_GUIDE.md](./SEO_DEPLOYMENT_GUIDE.md) - SEO rehberi
- 🎯 [SEO_SUMMARY.md](./SEO_SUMMARY.md) - SEO özeti
- 📦 [DEPLOYMENT.md](./DEPLOYMENT.md) - Genel deployment
- 📸 [GITHUB_IMAGES_SETUP.md](./GITHUB_IMAGES_SETUP.md) - GitHub görseller
- 📝 [CHANGELOG.md](./CHANGELOG.md) - Değişiklik geçmişi

---

## 🛠️ Development

### Gereksinimler
- Node.js 18+
- npm veya yarn
- Git

### Kurulum
```bash
# Clone repo
git clone https://github.com/mtmakina0/parcalamasite.git
cd parcalamasite

# Install
npm install

# Start dev server
npm run dev
```

### Component Geliştirme

```tsx
// components/MyComponent.tsx
import { useLanguage } from './LanguageContext';

export function MyComponent() {
  const { language, isRTL } = useLanguage();
  
  return (
    <div className="bg-[#45474B] text-[#F5F7F8]">
      {/* Component içeriği */}
    </div>
  );
}
```

---

## 🐛 Troubleshooting

### Problem: 404 hatası alıyorum
**Çözüm:** [ROUTING_FIX.md](./ROUTING_FIX.md) dosyasına bak

### Problem: Build başarısız
```bash
# Cache temizle
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Problem: Görseller yüklenmiyor
- ImgBB URL'lerinin geçerli olduğunu kontrol et
- `utils/imageConfig.ts` dosyasını kontrol et

---

## 📞 İletişim & Destek

**MT Makina**
- 🌐 Website: [parcalamamakinesi.com](https://parcalamamakinesi.com)
- 📧 Email: info@parcalamamakinesi.com
- 📱 Tel: +90 (XXX) XXX XX XX
- 📍 Konya, Türkiye

**Developer Support:**
- 📖 Dokümantasyon: `/docs` klasörü
- 🐛 Issues: GitHub Issues
- 💬 Discussions: GitHub Discussions

---

## 📄 Lisans

© 2024 MT Makina. Tüm hakları saklıdır.

---

## 🎉 Teşekkürler

Bu proje aşağıdaki açık kaynak kütüphaneleri kullanmaktadır:
- React
- Vite
- TailwindCSS
- Motion (Framer Motion)
- Shadcn/ui
- Lucide React
- Recharts

---

**Yapımcı:** MT Makina Development Team  
**Son Güncelleme:** Kasım 2024  
**Versiyon:** 1.0.0

```
┌────────────────────────────────────┐
│  🏭 MT Makina                     │
│  Endüstriyel Parçalama Sistemleri │
│                                    │
│  ⚡ Modern • Hızlı • Güvenilir    │
└────────────────────────────────────┘
```
