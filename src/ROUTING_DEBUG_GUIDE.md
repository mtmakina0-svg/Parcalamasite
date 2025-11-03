# 🔍 Routing Debug Guide - MT Makina

## 🎯 Sorun: URL'leri Direkt Yazdığımda 404 Hatası

### 📋 Yapılan Düzeltmeler

#### 1. **_redirects Dosyası Düzeltildi** ✅
- ❌ **Önceki durum:** `/public/_redirects` KLASÖR olarak vardı ve içinde `.tsx` dosyaları vardı
- ✅ **Yeni durum:** `/public/_redirects` TEXT DOSYASI olarak oluşturuldu

```
# /public/_redirects
/*    /index.html   200
```

#### 2. **vercel.json Güncellendi** ✅
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

#### 3. **404.html Optimize Edildi** ✅
- Redirect süresi kaldırıldı (hemen yönlendirme)
- Console.log eklendi (debug için)
- SessionStorage mantığı korundu

#### 4. **App.tsx Debug Logs Eklendi** ✅
- `parseUrl()` fonksiyonuna her adımda console.log eklendi
- Initial mount logic'ine debug logs eklendi
- SessionStorage redirect path logic'i optimize edildi

---

## 🧪 Test Senaryoları

### Local Development Test (npm run dev)

#### Test 1: Ana Sayfa
```
URL: http://localhost:5173/
Beklenen: Ana sayfa yüklenmeli
Kontrol: Console'da "parseUrl - Detected: main/home page" görmeli
```

#### Test 2: Ürünler Sayfası
```
URL: http://localhost:5173/urunler
Beklenen: Ürünler listesi sayfası yüklenmeli
Kontrol: Console'da "parseUrl - Detected: products-overview page" görmeli
```

#### Test 3: Ürün Kategorisi
```
URL: http://localhost:5173/tek-shaftli-parcalama-makinesi
Beklenen: Tek şaftlı parçalama makinesi kategori sayfası
Kontrol: Console'da "parseUrl - Detected: product-category page, product: single-shaft" görmeli
```

#### Test 4: Ürün Detay
```
URL: http://localhost:5173/tek-shaftli-parcalama-makinesi/tsh-60
Beklenen: TSH-60 model detay sayfası
Kontrol: Console'da "parseUrl - Detected: product-detail page, product: single-shaft, model: TSH-60" görmeli
```

#### Test 5: İletişim Sayfası
```
URL: http://localhost:5173/iletisim
Beklenen: İletişim sayfası yüklenmeli
Kontrol: Console'da "parseUrl - Detected: contact page" görmeli
```

---

### Production Build Test (npm run build && npm run preview)

#### Test 6: Build + Preview
```bash
# Build yap
npm run build

# Preview server başlat
npm run preview

# Test URL'leri:
http://localhost:4173/
http://localhost:4173/urunler
http://localhost:4173/tek-shaftli-parcalama-makinesi
http://localhost:4173/tek-shaftli-parcalama-makinesi/tsh-60
http://localhost:4173/iletisim
```

**Beklenen:**
- Tüm URL'ler çalışmalı
- Console'da routing logs görülmeli
- Hiçbir sayfada 404 hatası olmamalı

---

### Vercel Production Test

#### Test 7: Vercel Deploy Sonrası
```
1. Vercel'e deploy et
2. Bu URL'leri test et:

https://[your-app].vercel.app/
https://[your-app].vercel.app/urunler
https://[your-app].vercel.app/tek-shaftli-parcalama-makinesi
https://[your-app].vercel.app/tek-shaftli-parcalama-makinesi/tsh-60
https://[your-app].vercel.app/iletisim
https://[your-app].vercel.app/kurumsal
https://[your-app].vercel.app/referanslar
https://[your-app].vercel.app/sertifikalar
https://[your-app].vercel.app/e-katalog
https://[your-app].vercel.app/teknoloji
```

**Beklenen:**
- ✅ Tüm URL'ler direkt çalışmalı (404.html'e düşmeden)
- ✅ vercel.json rewrites sayesinde her URL index.html'e yönlendirilmeli
- ✅ React router logic doğru sayfayı render etmeli

---

## 🔍 Debug Adımları

### Adım 1: Browser Console Kontrol

Chrome DevTools → Console açın ve şu log'ları kontrol edin:

```
App.tsx - Initializing, current pathname: /urunler
parseUrl - Parsing path: /urunler
parseUrl - Detected: products-overview page
App.tsx - Parsed URL state: {page: "products-overview"}
```

### Adım 2: SessionStorage Kontrol

Chrome DevTools → Application → Session Storage

```
Key: spa_redirect_path
Value: (boş olmalı, çünkü redirect tamamlandı)
```

Eğer value varsa ve sürekli doluysa, redirect logic'inde sonsuz döngü var demektir.

### Adım 3: Network Tab Kontrol

Chrome DevTools → Network → Reload

```
1. İlk istek: /urunler → Status: 200 (vercel.json sayesinde)
2. Response: index.html (React app bundle)
3. JS bundle yüklenir: main.tsx, App.tsx
4. React mount olur
5. parseUrl() çalışır
6. Doğru sayfa render edilir
```

### Adım 4: URL Bar Kontrol

Browser'ın URL bar'ına manuel olarak URL yazın ve Enter'a basın:

```
https://[your-app].vercel.app/urunler
```

**Senaryolar:**

#### Senaryo A: ✅ Doğru Çalışıyor
```
1. URL: /urunler
2. Sayfa: Ürünler listesi gösteriliyor
3. Console: "parseUrl - Detected: products-overview page"
4. Title: "Parçalama Makineleri | Ürünler - MT Makina"
```

#### Senaryo B: ❌ 404 Hatası
```
1. URL: /urunler
2. Sayfa: 404 sayfası gösteriliyor (MT Makina logo + spinner)
3. Console: "404.html - Redirecting from: /urunler"
4. 1 saniye sonra: "/" URL'ine redirect
5. Sonuç: Ana sayfa gösteriliyor (ürünler değil!)
```

**Çözüm:**
- vercel.json veya netlify.toml config'i düzgün okunamıyor
- Redeploy yapılması gerekiyor

#### Senaryo C: ❌ Ana Sayfa Yükleniyor
```
1. URL: /urunler
2. Sayfa: Ana sayfa gösteriliyor (ürünler değil!)
3. Console: "parseUrl - Detected: main/home page"
4. URL bar: /urunler (doğru görünüyor)
```

**Çözüm:**
- App.tsx parseUrl() logic'i yanlış
- `/urunler` path'i catch edilmiyor
- Default case'e düşüyor

---

## 🛠️ Olası Sorunlar ve Çözümleri

### Sorun 1: "vercel.json okumadı"

**Belirti:**
- Vercel'de deploy edince tüm deep link'ler 404 veriyor

**Çözüm:**
```bash
# 1. vercel.json dosyasının root dizinde olduğunu kontrol et
ls -la vercel.json

# 2. Dosya içeriğini kontrol et
cat vercel.json

# 3. Git'e commit et ve push et
git add vercel.json
git commit -m "Fix: Vercel routing config"
git push origin main

# 4. Vercel otomatik redeploy yapar, yoksa manuel redeploy:
# Vercel Dashboard → Deployments → Latest → ⋯ → Redeploy
```

### Sorun 2: "SessionStorage sonsuz döngü"

**Belirti:**
- Sayfa sürekli reload oluyor
- Console'da "404.html - Redirecting from: ..." sürekli tekrar ediyor

**Çözüm:**
```javascript
// App.tsx - useEffect'e break condition ekle
useEffect(() => {
  const redirectCount = sessionStorage.getItem('redirect_count') || '0';
  if (parseInt(redirectCount) > 3) {
    console.error('Too many redirects, stopping...');
    sessionStorage.removeItem('redirect_count');
    sessionStorage.removeItem('spa_redirect_path');
    return;
  }
  
  const savedPath = sessionStorage.getItem('spa_redirect_path');
  if (savedPath) {
    sessionStorage.setItem('redirect_count', (parseInt(redirectCount) + 1).toString());
    sessionStorage.removeItem('spa_redirect_path');
    window.history.replaceState({}, '', savedPath);
  } else {
    sessionStorage.removeItem('redirect_count');
  }
  
  const urlState = parseUrl();
  setCurrentPage(urlState.page);
  // ...
}, []);
```

### Sorun 3: "parseUrl() yanlış sayfa döndürüyor"

**Belirti:**
- URL: `/urunler`
- Sayfa: Ana sayfa görünüyor
- Console: "parseUrl - No match found, defaulting to main page"

**Çözüm:**
```typescript
// App.tsx - parseUrl() içinde path matching'i kontrol et
function parseUrl() {
  const path = window.location.pathname;
  console.log('parseUrl - Raw path:', path);
  console.log('parseUrl - Path length:', path.length);
  console.log('parseUrl - Path charCodes:', Array.from(path).map(c => c.charCodeAt(0)));
  
  // Trim ve normalize et
  const normalizedPath = path.trim().toLowerCase();
  console.log('parseUrl - Normalized path:', normalizedPath);
  
  if (normalizedPath === '/urunler') {
    console.log('parseUrl - Matched: products-overview');
    return { page: 'products-overview' };
  }
  
  // ...
}
```

### Sorun 4: "Netlify'da çalışmıyor"

**Belirti:**
- Vercel'de çalışıyor ama Netlify'da 404 veriyor

**Çözüm:**
```bash
# 1. _redirects dosyasının public/ klasöründe olduğunu kontrol et
ls -la public/_redirects

# 2. Dosya içeriğini kontrol et (TAB veya SPACE olmamalı)
cat -A public/_redirects

# Doğru format:
/*    /index.html   200
#     ^^^^ 4 SPACE (veya 1 TAB)

# 3. netlify.toml kontrol et
cat netlify.toml

# 4. Redeploy
git add public/_redirects netlify.toml
git commit -m "Fix: Netlify routing"
git push origin main
```

---

## 🎯 Son Kontrol Listesi

Deployment öncesi bu listeyi kontrol et:

### Dosya Varlığı
- [x] `/vercel.json` var ve doğru
- [x] `/netlify.toml` var ve doğru
- [x] `/public/_redirects` var (DOSYA, klasör değil!)
- [x] `/public/404.html` var
- [x] `/App.tsx` parseUrl() fonksiyonu doğru

### Git Durumu
```bash
# Tüm değişiklikler commit edildi mi?
git status

# Son commit'ler
git log --oneline -5

# Remote'a push edildi mi?
git push origin main
```

### Build Test
```bash
# Local build başarılı mı?
npm run build

# Preview çalışıyor mu?
npm run preview

# Test URL'leri preview'da çalışıyor mu?
# http://localhost:4173/urunler
# http://localhost:4173/iletisim
```

### Production Test
```bash
# Vercel/Netlify'da deploy edildi mi?
# URL'ler çalışıyor mu?

# Browser console temiz mi? (error yok)
# Network tab'de 404 hatası yok mu?
# Meta tags doğru yükleniyor mu?
```

---

## 📊 Expected Console Output

### Başarılı Routing:

```
App.tsx - Initializing, current pathname: /urunler
parseUrl - Parsing path: /urunler
parseUrl - Detected: products-overview page
App.tsx - Parsed URL state: {page: "products-overview"}
```

### Başarılı 404 Redirect:

```
404.html - Redirecting from: /urunler?lang=en
404.html - Saved redirect path: /urunler?lang=en
App.tsx - Initializing, current pathname: /
App.tsx - Found saved redirect path: /urunler?lang=en
parseUrl - Parsing path: /urunler
parseUrl - Detected: products-overview page
App.tsx - Parsed URL state: {page: "products-overview"}
```

---

## 🚀 Hızlı Fix Komutları

Eğer hala sorun varsa, şu komutları sırayla çalıştır:

```bash
# 1. Cache temizle
rm -rf node_modules package-lock.json dist .vercel .netlify
npm install

# 2. Build test
npm run build
npm run preview

# 3. Git'e push
git add .
git commit -m "Fix: Complete routing overhaul with debug logs"
git push origin main

# 4. Vercel/Netlify'da redeploy
# Dashboard'dan manuel redeploy yap veya:
vercel --prod
# netlify deploy --prod
```

---

## 🎉 Başarı Kriterleri

✅ **Routing tamamen çalışıyor demektir eğer:**

1. ✅ `/urunler` yazınca → Ürünler sayfası açılıyor
2. ✅ `/tek-shaftli-parcalama-makinesi` → Kategori sayfası açılıyor
3. ✅ `/tek-shaftli-parcalama-makinesi/tsh-60` → Model detay açılıyor
4. ✅ `/iletisim` → İletişim sayfası açılıyor
5. ✅ Browser back/forward butonları çalışıyor
6. ✅ URL bar'da doğru path görünüyor
7. ✅ Meta tags (title, description) doğru
8. ✅ Sayfa refresh'te aynı sayfa açılıyor (404 yok)
9. ✅ Console'da routing logs görünüyor
10. ✅ Mobile'da da çalışıyor

---

**Test et ve başarılı olursa debug log'larını kaldır!** 🚀

*Son güncelleme: Kasım 2024*
