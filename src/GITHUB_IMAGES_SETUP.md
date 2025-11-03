# GitHub Public Klasörü Görsel Sistemi

## 🎯 Sistem Nasıl Çalışıyor?

Sistem **üç katmanlı fallback** yapısına sahip:

### 1️⃣ Priority: GitHub Raw URLs (Ana Kaynak)
```
https://raw.githubusercontent.com/mtmakina0/parcalamasite/main/public/TEK ŞAFTLI PARÇALAMA MAKİNESİ/TSH-60/1.png
```

### 2️⃣ Fallback 1: Manuel URL'ler (ImgBB)
```typescript
// /utils/imageConfig.ts içinde
const MANUAL_IMAGE_URLS = {
  'single-shaft': {
    'TSH-60': {
      main: 'https://i.ibb.co/Hf47H3b1/1-1.png',
      // ...
    }
  }
}
```

### 3️⃣ Fallback 2: Unsplash (Genel Placeholder)
```typescript
FALLBACK_IMAGES['single-shaft'] = 'https://images.unsplash.com/...'
```

---

## 📁 GitHub Klasör Yapısı

```
parcalamasite/
└── public/
    ├── logo/
    │   └── mt-logo.png
    ├── certificates/
    │   ├── cert1.png
    │   └── ...
    ├── TEK ŞAFTLI PARÇALAMA MAKİNESİ/
    │   ├── TSH-60/
    │   │   ├── 1.png
    │   │   ├── 2.png
    │   │   ├── 3.png
    │   │   └── 4.png
    │   ├── TSH-80/
    │   ├── TSH-100/
    │   ├── TSH-120/
    │   └── TSH-150/
    ├── ÇİFT ŞAFTLI PARÇALAMA MAKİNESİ/
    │   ├── CS-20/
    │   ├── CS-40/
    │   └── ...
    └── DÖRT ŞAFTLI PARÇALAMA MAKİNESİ/
        ├── QS-80/
        ├── QS-100/
        └── ...
```

---

## 🚀 GitHub'a Görsel Yükleme

### Adım 1: Lokal Repository'ye Git
```bash
cd C:\Users\PC\Documents\GitHub\Parcalamasite
```

### Adım 2: Git Status Kontrol
```bash
git status
```

### Adım 3: Public Klasörünü Ekle
```bash
git add public/
```

### Adım 4: Commit
```bash
git commit -m "Add product images to public folder"
```

### Adım 5: Push to GitHub
```bash
git push origin main
```

**⚠️ Eğer branch 'master' ise:**
```bash
git push origin master
```

---

## ✅ Doğrulama

### Test URL'si (TSH-60 için):
Tarayıcınızda açın:
```
https://raw.githubusercontent.com/mtmakina0/parcalamasite/main/public/TEK%20%C5%9EAFTLI%20PAR%C3%87ALAMA%20MAK%C4%B0NES%C4%B0/TSH-60/1.png
```

**✅ Görsel görünüyorsa:** Sistem çalışıyor!  
**❌ 404 hatası alıyorsanız:**
1. Branch'i kontrol edin (`main` vs `master`)
2. `git push` yaptığınızdan emin olun
3. Klasör isimlerinin doğru olduğunu kontrol edin

---

## 🔧 Konfigürasyon

### Branch Değiştirme (Gerekirse)

`/utils/imageConfig.ts` dosyasında:

```typescript
const IMAGE_CONFIG = {
  useGitHubFirst: true,
  github: {
    username: 'mtmakina0',
    repo: 'parcalamasite',
    branch: 'main', // ⬅️ Burası 'master' olabilir
    basePath: 'public'
  }
};
```

### Manuel URL Ekleme (Geçici Test)

ImgBB veya başka servise yüklediyseniz:

```typescript
const MANUAL_IMAGE_URLS = {
  'single-shaft': {
    'TSH-80': {
      main: 'https://i.ibb.co/XXXXXXX/1.png',
      detail1: 'https://i.ibb.co/YYYYYYY/2.png',
      detail2: 'https://i.ibb.co/ZZZZZZZ/3.png',
      detail3: 'https://i.ibb.co/AAAAAAA/4.png',
      detail4: ''
    }
  }
};
```

---

## 🎨 Görsellerin Kullanımı

Sistemde otomatik olarak çağrılır:

```typescript
// Otomatik olarak GitHub'dan çeker
const images = getModelImages('single-shaft', 'TSH-60');

// images.main → GitHub URL (veya fallback)
// images.detail1 → GitHub URL (veya fallback)
// images.detail2 → GitHub URL (veya fallback)
// images.detail3 → GitHub URL (veya fallback)
```

---

## 📊 Hangi Görseller Gerekli?

### Her model için 4-5 görsel:
- **1.png** - Ana ürün görseli (Hero section)
- **2.png** - Detay 1 (Performans bölümü)
- **3.png** - Detay 2 (Performans bölümü)
- **4.png** - Detay 3 (Performans bölümü)
- **5.png** - Ek detay (opsiyonel)

### Görsel formatı:
- ✅ Format: PNG veya JPG
- ✅ İsim: 1.png, 2.png, 3.png, 4.png
- ✅ Boyut: Optimize edilmiş (maks 2MB)
- ✅ Çözünürlük: En az 1920x1080px önerilir

---

## 🔄 Fallback Sistemi Nasıl Çalışır?

```
GitHub URL yüklenmeye çalışıyor
    ↓
[BAŞARILI] → Görsel gösterilir ✅
    ↓
[BAŞARISIZ] → Manuel URL denenecek (ImgBB)
    ↓
[BAŞARILI] → Görsel gösterilir ✅
    ↓
[BAŞARISIZ] → Unsplash placeholder gösterilir 📷
```

---

## 🐛 Sorun Giderme

### Sorun: Görseller yüklenmiyor
**Çözüm:**
1. Console'u açın (F12) ve hataları kontrol edin
2. Network tab'ında hangi URL'lerin yüklendiğini görün
3. Test URL'sini tarayıcıda açıp kontrol edin

### Sorun: 404 hatası
**Çözüm:**
```bash
# Branch'i kontrol edin
git branch

# Push edilmiş mi kontrol edin
git log --oneline

# Public klasörünü kontrol edin
ls public/
```

### Sorun: Türkçe karakterler sorunu
**Çözüm:**
Sistem otomatik olarak URL encode yapıyor:
- `TEK ŞAFTLI` → `TEK%20%C5%9EAFTLI`
- Klasör isimlerini değiştirmeyin!

---

## 💡 İpuçları

1. **Git push sonrası 1-2 dakika bekleyin** - GitHub cache'i güncellenir
2. **Manuel URL'leri sadece test için kullanın** - Production'da GitHub kullanın
3. **Tüm modeller için görselleri topluca yükleyin** - Tek seferde commit edin
4. **Görsel boyutlarını optimize edin** - Site performansı için önemli

---

## 📞 Hızlı Referans

| Dosya | Açıklama |
|-------|----------|
| `/utils/imageConfig.ts` | Tüm görsel URL'leri ve konfigürasyon |
| `/components/figma/ImageWithFallback.tsx` | Otomatik fallback bileşeni |
| `/components/ProductDetailPage.tsx` | Görsellerin kullanıldığı sayfa |

---

**Son güncelleme:** Kasım 2025  
**Durum:** ✅ Aktif - GitHub + ImgBB fallback çalışıyor
