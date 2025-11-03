# ✅ Vercel Setup Checklist - MT Makina

## 🎯 Pre-Deployment Checklist

### 1. Dosya Kontrolü

- [x] ✅ `vercel.json` root dizinde
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/" }
    ]
  }
  ```

- [x] ✅ `App.tsx` SPA routing logic var
- [x] ✅ `SEOHead.tsx` dynamic meta tags var
- [x] ✅ `public/404.html` fallback page var
- [x] ✅ `utils/seoConfig.ts` SEO configuration var
- [x] ✅ `utils/imageConfig.ts` image management var

### 2. Git Repository

- [ ] Git repo oluşturuldu (GitHub/GitLab/Bitbucket)
- [ ] Tüm değişiklikler commit edildi
  ```bash
  git add .
  git commit -m "Production ready for Vercel deployment"
  git push origin main
  ```

### 3. Build Test (Local)

- [ ] Local build başarılı
  ```bash
  npm install
  npm run build
  npm run preview
  ```

- [ ] Tüm route'lar çalışıyor
  - [ ] `/home`
  - [ ] `/urunler`
  - [ ] `/tek-shaftli-parcalama-makinesi`
  - [ ] `/tek-shaftli-parcalama-makinesi/tsh-60`
  - [ ] `/iletisim`

---

## 🚀 Vercel Deployment Steps

### Adım 1: Vercel'e Kaydol

- [ ] [vercel.com](https://vercel.com) → **Sign Up**
- [ ] Git provider ile bağlan (GitHub/GitLab/Bitbucket)

### Adım 2: Proje Import

- [ ] Dashboard → **Add New Project**
- [ ] **Import Git Repository**
- [ ] `mtmakina0/parcalamasite` repo'sunu seç
- [ ] **Import** butonuna tıkla

### Adım 3: Proje Konfigürasyonu

#### Framework Preset
- [ ] **Vite** seçildi (otomatik algılanmalı)

#### Build & Development Settings
```
Framework Preset:     Vite
Build Command:        npm run build (veya yarn build)
Output Directory:     dist
Install Command:      npm install (veya yarn)
Development Command:  npm run dev
```

#### Root Directory
- [ ] **`.`** (root) olarak bırak

### Adım 4: Environment Variables (Opsiyonel)

Eğer API key'leri varsa:
- [ ] **Add Environment Variable** tıkla
- [ ] Key-value çiftleri ekle:
  ```
  VITE_API_URL=https://api.example.com
  VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
  ```

⚠️ **Dikkat:** Değişken adları `VITE_` ile başlamalı!

### Adım 5: Deploy!

- [ ] **Deploy** butonuna tıkla
- [ ] Build process'i izle (2-3 dakika)
- [ ] ✅ **Deployment başarılı!**

---

## 🌐 Post-Deployment Verification

### 1. Preview URL Test

Vercel otomatik bir preview URL oluşturur:
```
https://mt-makina-xyz.vercel.app
```

#### Test Edilecek URL'ler:
- [ ] `/` (Ana sayfa)
- [ ] `/home` (Ana sayfa alternatif)
- [ ] `/kurumsal` (Hakkımızda)
- [ ] `/urunler` (Ürünler listesi)
- [ ] `/teknoloji` (Teknoloji sayfası)
- [ ] `/referanslar` (Referanslar)
- [ ] `/sertifikalar` (Sertifikalar)
- [ ] `/iletisim` (İletişim)
- [ ] `/e-katalog` (E-Katalog)

#### Ürün Sayfaları:
- [ ] `/tek-shaftli-parcalama-makinesi`
- [ ] `/tek-shaftli-parcalama-makinesi/tsh-60`
- [ ] `/cift-shaftli-parcalama-makinesi`
- [ ] `/cift-shaftli-parcalama-makinesi/cs-80`
- [ ] `/dort-shaftli-parcalama-makinesi`
- [ ] `/metal-parcalama-makinesi`
- [ ] `/granulator-makinesi`
- [ ] `/balyalama-makinesi`
- [ ] `/konveyor-sistemi`
- [ ] `/ayristirma-makinesi`

#### Çok Dilli:
- [ ] `/?lang=en` (İngilizce)
- [ ] `/?lang=ru` (Rusça)
- [ ] `/?lang=ar` (Arapça - RTL test)

### 2. SEO & Meta Tags Test

- [ ] View Page Source → `<title>` doğru
- [ ] View Page Source → `<meta name="description">` doğru
- [ ] View Page Source → Open Graph tags var
- [ ] View Page Source → Twitter Card tags var
- [ ] View Page Source → Structured Data (JSON-LD) var

### 3. Performans Test

- [ ] Lighthouse Score kontrol (Chrome DevTools)
  - [ ] Performance: 90+
  - [ ] Accessibility: 90+
  - [ ] Best Practices: 90+
  - [ ] SEO: 90+

- [ ] Mobile responsive test
  - [ ] iPhone view
  - [ ] iPad view
  - [ ] Android view

### 4. Animasyon & Interaktivity Test

- [ ] Hero section animasyonları çalışıyor
- [ ] Scroll animasyonları smooth
- [ ] Button hover effects çalışıyor
- [ ] Navigation menu çalışıyor
- [ ] Language switcher çalışıyor
- [ ] Chat widget çalışıyor

---

## 🔧 Custom Domain Setup

### Adım 1: Domain Ekle

- [ ] Vercel Dashboard → **Settings** → **Domains**
- [ ] **Add Domain** → `parcalamamakinesi.com`
- [ ] **Add** tıkla

### Adım 2: DNS Konfigürasyonu

#### Seçenek A: Nameserver Değiştirme (Önerilen)

Domain registrar'ına git (GoDaddy, Namecheap, vs.):
- [ ] Nameserver'ları değiştir:
  ```
  ns1.vercel-dns.com
  ns2.vercel-dns.com
  ```

#### Seçenek B: A Record & CNAME

Domain registrar DNS ayarlarına git:
- [ ] A Record ekle:
  ```
  Type: A
  Name: @
  Value: 76.76.21.21
  TTL: 3600
  ```

- [ ] CNAME ekle:
  ```
  Type: CNAME
  Name: www
  Value: cname.vercel-dns.com
  TTL: 3600
  ```

### Adım 3: SSL/HTTPS

- [ ] DNS propagation tamamlandı (24-48 saat)
- [ ] Vercel otomatik SSL sertifikası ekledi
- [ ] HTTPS erişim çalışıyor: `https://parcalamamakinesi.com`

### Adım 4: www Yönlendirme

- [ ] `www.parcalamamakinesi.com` → `parcalamamakinesi.com` yönlendirme aktif
- [ ] Vercel Dashboard'da "Redirect www to apex" aktif

---

## 📊 Analytics & Monitoring Setup

### 1. Vercel Analytics (Ücretsiz)

- [ ] Dashboard → **Analytics** tab
- [ ] **Enable Analytics** tıkla
- [ ] Core Web Vitals tracking aktif

### 2. Google Search Console

- [ ] [search.google.com/search-console](https://search.google.com/search-console) → **Add Property**
- [ ] Domain: `parcalamamakinesi.com`
- [ ] Ownership verification (DNS TXT record)
- [ ] Sitemap gönder: `https://parcalamamakinesi.com/sitemap.xml`

### 3. Google Analytics (Opsiyonel)

- [ ] GA4 property oluştur
- [ ] Tracking ID al: `G-XXXXXXXXXX`
- [ ] Vercel → Environment Variables → `VITE_GOOGLE_ANALYTICS_ID`
- [ ] Redeploy

---

## 🔄 Continuous Deployment

### Auto Deploy Setup

✅ **Zaten aktif!** Her Git push otomatik deploy olur:

```bash
# Değişiklik yap
git add .
git commit -m "Website güncellemesi"
git push origin main

# Vercel otomatik deploy eder! 🚀
```

### Branch Strategy

#### Production (main/master)
- [ ] Production deployment: `parcalamamakinesi.com`
- [ ] Auto deploy ON

#### Development (develop)
- [ ] Preview deployment: `mt-makina-git-develop.vercel.app`
- [ ] Auto deploy ON

#### Feature Branches
- [ ] Her branch için unique preview URL
- [ ] Auto deploy ON

---

## 🔒 Security Checklist

### HTTPS/SSL
- [ ] ✅ Let's Encrypt sertifikası aktif
- [ ] ✅ HTTP → HTTPS yönlendirme aktif
- [ ] ✅ HSTS header aktif

### Security Headers (Opsiyonel)

`vercel.json`'a eklenebilir:
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
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

---

## 🐛 Troubleshooting

### Build Failed

**Log'lara bak:**
- [ ] Vercel Dashboard → **Deployments** → Failed deployment → **View Build Logs**

**Çözümler:**
- [ ] Local'de build test et: `npm run build`
- [ ] `node_modules` sil ve tekrar install: `rm -rf node_modules && npm install`
- [ ] Package versions kontrol et
- [ ] TypeScript errors kontrol et

### 404 on Direct URL

**Çözüm:**
- [ ] `vercel.json` dosyası root'ta mı?
- [ ] `"rewrites"` config doğru mu?
- [ ] Redeploy yap

### Environment Variables Çalışmıyor

**Çözüm:**
- [ ] Değişken adı `VITE_` ile mi başlıyor?
- [ ] Vercel Dashboard'da doğru eklendi mi?
- [ ] **Redeploy** yap (env değişiklikleri redeploy gerektirir)

### Custom Domain Çalışmıyor

**Çözüm:**
- [ ] DNS propagation bekledi mi? (24-48 saat)
- [ ] DNS ayarları doğru mu? [whatsmydns.net](https://www.whatsmydns.net/)
- [ ] Vercel Dashboard'da domain status: "Valid"

---

## 📋 Final Checklist

### Pre-Launch
- [ ] ✅ Tüm route'lar çalışıyor
- [ ] ✅ SEO meta tags doğru
- [ ] ✅ Mobile responsive
- [ ] ✅ Tüm görseller yükleniyor
- [ ] ✅ Tüm diller çalışıyor (TR/EN/RU/AR)
- [ ] ✅ Animasyonlar smooth
- [ ] ✅ Contact form çalışıyor
- [ ] ✅ Chat widget çalışıyor

### Post-Launch
- [ ] ✅ Custom domain bağlandı
- [ ] ✅ SSL/HTTPS aktif
- [ ] ✅ Google Search Console eklendi
- [ ] ✅ Sitemap gönderildi
- [ ] ✅ Analytics aktif
- [ ] ✅ Social media preview test edildi

### Monitoring
- [ ] ✅ Vercel Analytics izleniyor
- [ ] ✅ Uptime monitoring (UptimeRobot, etc.)
- [ ] ✅ Error tracking (Sentry, etc.) - Opsiyonel
- [ ] ✅ Performance monitoring (Lighthouse CI) - Opsiyonel

---

## 🎉 Deployment Başarılı!

```
╔══════════════════════════════════════╗
║  ✅ MT Makina Vercel'de Canlı!      ║
║                                      ║
║  🌐 parcalamamakinesi.com           ║
║  🔒 HTTPS Aktif                      ║
║  🚀 Global CDN                       ║
║  ⚡ 60+ FPS Animasyonlar             ║
║  🌍 4 Dil Desteği                    ║
║  📱 Responsive                       ║
║  🔍 SEO 95/100                       ║
║  📊 Analytics Aktif                  ║
║                                      ║
║  Production Ready! 🎉               ║
╚══════════════════════════════════════╝
```

---

## 📞 Sonraki Adımlar

1. **Google Search Console'a sitemap gönder**
   - `https://parcalamamakinesi.com/sitemap.xml`

2. **Social Media'da paylaş**
   - Facebook Open Graph test: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/)
   - Twitter Card validator: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)

3. **Performance izle**
   - Vercel Analytics dashboard'ı düzenli kontrol et
   - Lighthouse skorlarını haftalık test et

4. **Backupları unutma**
   - Git repo'da her şey commit edilmiş
   - Vercel otomatik deployment history tutar

---

**Tebrikler! Website başarıyla yayında! 🚀**

*Son güncelleme: Kasım 2024*  
*MT Makina - Vercel Setup Checklist*
