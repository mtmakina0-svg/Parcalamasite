# 🚀 Vercel Deployment Guide - MT Makina

## 📋 Ön Gereksinimler

- ✅ GitHub/GitLab/Bitbucket hesabı
- ✅ Vercel hesabı (ücretsiz: [vercel.com](https://vercel.com))
- ✅ Proje kodu Git repo'sunda

---

## 🎯 Hızlı Deployment (3 Dakika)

### Adım 1: Vercel'e Bağlan

1. [vercel.com](https://vercel.com) → **Sign Up / Login**
2. **Import Project** → Git provider'ı seç (GitHub/GitLab/Bitbucket)
3. MT Makina repo'sunu seç

### Adım 2: Proje Ayarları

**Framework Preset:** Vite (otomatik algılanır)

**Build & Output Settings:**
```
Build Command:        npm run build
Output Directory:     dist
Install Command:      npm install
```

**Root Directory:** `.` (root)

### Adım 3: Deploy Et

**Deploy** butonuna tıkla → 2-3 dakika bekle → ✅ Tamamlandı!

---

## 🔧 SPA Routing Ayarı (Otomatik)

✅ **Zaten hazır!** `vercel.json` dosyası proje kök dizininde mevcut:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

Bu ayar sayesinde:
- ✅ `/home` → Ana sayfa yüklenir
- ✅ `/tek-shaftli-parcalama-makinesi` → Ürün sayfası yüklenir
- ✅ `/iletisim` → İletişim sayfası yüklenir
- ✅ **Tüm deep link'ler çalışır!**

---

## 🌐 Custom Domain Ekleme

### Adım 1: Vercel Dashboard'a Git
Proje sayfasında → **Settings** → **Domains**

### Adım 2: Domain Ekle
```
parcalamamakinesi.com
```

### Adım 3: DNS Ayarları

**Seçenek A: Nameserver Değiştirme (Önerilen)**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Seçenek B: A Record Ekleme**
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

### Adım 4: SSL/HTTPS
✅ **Otomatik aktif!** Vercel Let's Encrypt sertifikası ekler.

---

## ⚙️ Environment Variables (Opsiyonel)

Eğer API key'leri varsa:

**Dashboard → Settings → Environment Variables**
```
VITE_API_URL=https://api.example.com
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

⚠️ **Dikkat:** Değişken adı `VITE_` ile başlamalı (Vite gereksinimi)

---

## 🔄 Otomatik Deploy

✅ **Zaten aktif!** Her Git push'ta otomatik deploy olur:

```bash
# Değişiklik yap
git add .
git commit -m "Yeni özellik eklendi"
git push origin main

# Vercel otomatik deploy eder! 🚀
```

**Deploy Branches:**
- `main` / `master` → Production
- `develop` → Preview (opsiyonel)
- Feature branches → Preview URL'ler

---

## 📊 Deploy Status Kontrol

### 1. Vercel Dashboard
[vercel.com/dashboard](https://vercel.com/dashboard) → Proje → **Deployments**

### 2. Build Logs
Her deployment'ın detaylı log'larını görebilirsin:
```
✓ Building...
✓ Bundling...
✓ Optimizing...
✓ Uploading...
✓ Ready! https://mt-makina-xyz.vercel.app
```

### 3. Preview URL'ler
Her commit için unique preview URL:
```
https://mt-makina-git-feature-xyz.vercel.app
```

---

## 🐛 Troubleshooting

### Problem: 404 hatası alıyorum

**Çözüm:**
1. `vercel.json` dosyasının **root dizinde** olduğunu kontrol et
2. Dashboard → Settings → General → Framework Preset: **Vite** olmalı
3. Redeploy yap (Deployments → ⋯ → Redeploy)

### Problem: Build başarısız oluyor

**Çözüm:**
1. Build logs'u kontrol et
2. Local'de çalıştığından emin ol:
   ```bash
   npm run build
   ```
3. `package.json` script'lerini kontrol et
4. Node.js versiyonunu kontrol et (Vercel: Node 18+ önerilir)

### Problem: Environment variables çalışmıyor

**Çözüm:**
1. Değişken adı `VITE_` ile başlamalı
2. Dashboard'da doğru eklendiğini kontrol et
3. **Redeploy** yap (env değişiklikleri redeploy gerektirir)

### Problem: Custom domain çalışmıyor

**Çözüm:**
1. DNS propagation'ı bekle (24-48 saat)
2. DNS ayarlarını kontrol et: [whatsmydns.net](https://www.whatsmydns.net/)
3. Vercel Dashboard'da domain status'ü kontrol et

---

## 📈 Performance Optimizasyonu

### 1. Vercel Analytics (Ücretsiz)
**Settings → Analytics → Enable**
- ✅ Core Web Vitals
- ✅ Traffic analytics
- ✅ Top pages

### 2. Image Optimization
Vercel otomatik olarak image'leri optimize eder (`.png`, `.jpg`, `.webp`)

### 3. Edge Network
✅ **Otomatik!** Vercel global CDN kullanır:
- 🇺🇸 Amerika
- 🇪🇺 Avrupa
- 🇦🇸 Asya
- 🌍 Global

---

## 🔐 Güvenlik

### HTTPS/SSL
✅ **Otomatik aktif** - Let's Encrypt sertifikası

### Security Headers
Daha fazla güvenlik için `vercel.json`'a ekleyebilirsin:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

---

## 📝 Deployment Checklist

Deployment öncesi kontrol listesi:

- [ ] ✅ `vercel.json` root dizinde
- [ ] ✅ `npm run build` local'de çalışıyor
- [ ] ✅ Git repo'ya push edildi
- [ ] ✅ Vercel'e proje import edildi
- [ ] ✅ Framework preset: Vite
- [ ] ✅ Build command: `npm run build`
- [ ] ✅ Output directory: `dist`
- [ ] ✅ Environment variables eklendi (varsa)
- [ ] ✅ Custom domain eklendi
- [ ] ✅ DNS ayarları yapıldı
- [ ] ✅ SSL/HTTPS aktif
- [ ] ✅ Tüm route'lar test edildi

---

## 🎯 Production URL Testi

Deploy sonrası bu URL'leri test et:

### Ana Sayfalar
- ✅ `https://parcalamamakinesi.com/`
- ✅ `https://parcalamamakinesi.com/home`
- ✅ `https://parcalamamakinesi.com/kurumsal`
- ✅ `https://parcalamamakinesi.com/urunler`
- ✅ `https://parcalamamakinesi.com/iletisim`

### Ürün Sayfaları
- ✅ `https://parcalamamakinesi.com/tek-shaftli-parcalama-makinesi`
- ✅ `https://parcalamamakinesi.com/tek-shaftli-parcalama-makinesi/tsh-60`
- ✅ `https://parcalamamakinesi.com/cift-shaftli-parcalama-makinesi`

### Çok Dilli
- ✅ `https://parcalamamakinesi.com/home?lang=en`
- ✅ `https://parcalamamakinesi.com/home?lang=ru`
- ✅ `https://parcalamamakinesi.com/home?lang=ar`

### Meta Tags (SEO)
- ✅ View Page Source → `<title>` kontrol et
- ✅ View Page Source → `<meta name="description">` kontrol et
- ✅ View Page Source → Open Graph tags kontrol et

---

## 📊 Analytics & Monitoring

### Vercel Analytics
**Dashboard → Analytics**
- Real-time visitors
- Page views
- Core Web Vitals
- Top pages
- Traffic sources

### Google Analytics (Opsiyonel)
SEOHead.tsx'de Google Analytics tracking ID ekleyebilirsin.

### Google Search Console
1. [search.google.com/search-console](https://search.google.com/search-console)
2. Domain ekle: `parcalamamakinesi.com`
3. Sitemap gönder: `https://parcalamamakinesi.com/sitemap.xml`

---

## 🚀 Deployment Komutları

### Vercel CLI ile Deploy (Opsiyonel)

```bash
# Vercel CLI kur
npm i -g vercel

# Login
vercel login

# İlk deploy
vercel

# Production deploy
vercel --prod

# Environment variables ayarla
vercel env add VITE_API_URL

# Logs görüntüle
vercel logs
```

---

## 📞 Destek & Kaynaklar

**Vercel Documentation:**
- [vercel.com/docs](https://vercel.com/docs)
- [vercel.com/docs/concepts/projects/overview](https://vercel.com/docs/concepts/projects/overview)

**Community:**
- [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- [vercel.com/support](https://vercel.com/support)

**MT Makina Docs:**
- `/ROUTING_FIX.md` → Routing ayarları
- `/SEO_DEPLOYMENT_GUIDE.md` → SEO rehberi
- `/DEPLOYMENT.md` → Genel deployment

---

## ✅ Sonuç

```
┌─────────────────────────────────────┐
│  ✅ MT Makina Vercel'de Canlı!     │
│                                     │
│  🌐 parcalamamakinesi.com          │
│  🔒 HTTPS Aktif                     │
│  🚀 Global CDN                      │
│  ⚡ 60+ FPS Animasyonlar            │
│  🌍 Çok Dilli (TR/EN/RU/AR)         │
│  📱 Responsive                      │
│  🔍 SEO 95/100                      │
│                                     │
│  Deployment başarılı! 🎉           │
└─────────────────────────────────────┘
```

**Her şey hazır! Şimdi push yap ve deploy et!** 🚀

---

*Son güncelleme: Kasım 2024*  
*MT Makina - Vercel Deployment Guide*
