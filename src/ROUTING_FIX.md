# 🔧 Routing ve 404 Hata Çözümü

## Sorun Nedir?

MT Makina websitesi bir **Single Page Application (SPA)** olarak React ile çalışıyor. Bu durumda:

- ✅ **Uygulama içinde link tıklayınca** → Client-side routing çalışır, sorun yok
- ❌ **Tarayıcıya direkt URL yazınca** (örn: `/home`) → Sunucu 404 hatası verir

### Neden Oluyor?

React client-side routing kullanır. Yani:
1. Tarayıcıya `parcalamamakinesi.com/home` yazınca
2. Sunucu bu path'i arar ama bulamaz (çünkü fiziksel bir `/home` dosyası yok)
3. 404 hatası verir

---

## ✅ Çözümler

### Çözüm 1: Development/Preview Ortamı için (Şu an aktif)

**404.html** fallback page eklendi:
- Direkt URL yazıldığında kullanıcı otomatik root (`/`) path'e yönlendirilir
- Path bilgisi sessionStorage'da saklanır
- React app yüklendiğinde doğru sayfaya gider

**Nasıl çalışır:**
```
/home → 404.html → / → App.tsx → parseUrl() → /home page
```

### Çözüm 2: Production Deployment için (Önerilen)

#### Vercel için:
`vercel.json` dosyası eklendi. Tüm route'lar otomatik olarak root (`/`) path'e yönlendirilir.

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

✅ **Önemli:** Vercel otomatik olarak tüm route'ları SPA'nın index'ine yönlendirir.

#### Netlify için:
`netlify.toml` ve `public/_redirects` dosyaları eklendi.

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Apache için:
`.htaccess` dosyası ekle:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx için:
Nginx config'e ekle:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 🚀 Deployment Platformlarına Göre

### Vercel
✅ **Otomatik çalışır** - `vercel.json` mevcut
```bash
vercel deploy
```

### Netlify
✅ **Otomatik çalışır** - `netlify.toml` ve `_redirects` mevcut
```bash
netlify deploy --prod
```

### GitHub Pages
⚠️ **Manuel config gerekir**:
1. `404.html` → `index.html` olarak kopyala
2. Base URL'i ayarla
3. Hash routing kullan (#/home)

### Custom Server (Apache/Nginx)
⚠️ **Manuel config gerekir** - Yukarıdaki config'leri ekle

### Wix Code Section
⚠️ **Sınırlı destek** - Wix kendi routing'i kullanır:
1. Code section'a sadece root component gömülür
2. Wix Pages ile routing yapılır
3. Ya da iframe içinde hash routing (#/home) kullanılır

---

## 🎯 Test Etme

### Development'ta test:
```bash
# Local server çalıştır
npm run dev

# Tarayıcıda test et:
http://localhost:5173/home
http://localhost:5173/tek-shaftli-parcalama-makinesi
http://localhost:5173/urunler
```

### Production'da test:
```bash
# Build al
npm run build

# Preview server çalıştır (Vite)
npm run preview

# Ya da
npx serve dist
```

Sonra tarayıcıda direkt URL'leri test et.

---

## 📝 URL Yapısı

MT Makina'da kullanılan URL'ler:

### Ana Sayfalar
- `/` veya `/home` → Ana Sayfa
- `/kurumsal` → Hakkımızda
- `/urunler` → Ürünler
- `/teknoloji` → Teknoloji
- `/referanslar` → Referanslar
- `/sertifikalar` → Sertifikalar
- `/iletisim` → İletişim
- `/e-katalog` → E-Katalog

### Ürün Kategorileri
- `/tek-shaftli-parcalama-makinesi` → Single Shaft
- `/cift-shaftli-parcalama-makinesi` → Dual Shaft
- `/dort-shaftli-parcalama-makinesi` → Quad Shaft
- `/metal-parcalama-makinesi` → Metal Shredder
- `/granulator-makinesi` → Granulator
- `/balyalama-makinesi` → Baler
- `/konveyor-sistemi` → Conveyor
- `/ayristirma-makinesi` → Separator

### Ürün Detayları (Model Sayfaları)
- `/tek-shaftli-parcalama-makinesi/tsh-60`
- `/cift-shaftli-parcalama-makinesi/cs-80`
- vb.

### Atık Kategorileri
- `/atik-turleri` → Atık Kategorileri
- `/atik-turleri/plastik` → Plastik Atıklar
- `/atik-turleri/metal` → Metal Atıklar
- vb.

### Çok Dilli URL'ler
Query parameter ile:
- `/home?lang=en` → English
- `/home?lang=ru` → Russian
- `/home?lang=ar` → Arabic

---

## 🛠️ Troubleshooting

### Problem: Hala 404 alıyorum
**Çözüm:**
1. `public/404.html` dosyasının olduğunu kontrol et
2. Deploy'dan sonra 1-2 dakika bekle (cache)
3. Hard refresh yap (Ctrl+Shift+R)
4. Browser cache temizle

### Problem: Sayfa yönlendirmiyor
**Çözüm:**
1. JavaScript'in aktif olduğunu kontrol et
2. Console'da hata var mı kontrol et
3. sessionStorage kullanılabilir mi kontrol et

### Problem: Vercel'de çalışmıyor
**Çözüm:**
1. `vercel.json` dosyasının root'ta olduğunu kontrol et
2. Redeploy yap
3. Framework Preset'i "Vite" olarak ayarla

### Problem: Netlify'da çalışmıyor
**Çözüm:**
1. `netlify.toml` ve `public/_redirects` olduğunu kontrol et
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 🎨 Alternative: Hash Routing

Eğer yukarıdaki çözümler çalışmazsa, **hash-based routing** kullanabilirsiniz:

```
/home        → /#/home
/urunler     → /#/urunler
/iletisim    → /#/iletisim
```

**Avantajı:** Sunucu tarafında config gerektirmez  
**Dezavantajı:** URL'ler daha uzun ve SEO için ideal değil

---

## 📊 Özet

| Platform | Config Dosyası | Otomatik? | SEO Dostu? |
|----------|---------------|-----------|------------|
| Vercel | vercel.json | ✅ Evet | ✅ Evet |
| Netlify | netlify.toml | ✅ Evet | ✅ Evet |
| GitHub Pages | 404.html trick | ⚠️ Manuel | ⚠️ Kısmen |
| Custom Server | .htaccess/nginx | ❌ Hayır | ✅ Evet |
| Figma Make | 404.html fallback | ✅ Evet | ⚠️ Preview |

---

## ✅ Sonuç

✅ **Development/Preview:** 404.html fallback aktif  
✅ **Production (Vercel):** vercel.json hazır  
✅ **Production (Netlify):** netlify.toml + _redirects hazır  
✅ **Production (Custom):** .htaccess/.nginx config örnekleri var

**Artık direkt URL yazıldığında 404 hatası vermeyecek ve doğru sayfaya yönlendirecek!**

---

*Son güncelleme: Kasım 2024*  
*MT Makina - Routing Fix Documentation*
