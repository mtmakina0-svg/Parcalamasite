# 🌐 Dil Değiştirme URL Slug Çevirisi - DÜZELTİLDİ

## ❌ Önceki Sorun

Kullanıcı dil değiştirdiğinde, URL'deki slug çevrilmiyordu:

```
ÖRNEK 1:
- Bulunduğunuz sayfa: /tr/harddisk-imha-makinesi
- İngilizce'ye geç
- ❌ YANLIŞ: /en/harddisk-imha-makinesi (Türkçe slug)
- ✅ DOĞRU: /en/harddisk-destroyer (İngilizce slug)

ÖRNEK 2:
- Bulunduğunuz sayfa: /tr/tek-saftli-parcalama-makinesi/tsh-60
- Rusça'ya geç
- ❌ YANLIŞ: /ru/tek-saftli-parcalama-makinesi/tsh-60
- ✅ DOĞRU: /ru/odnovalnaya-drobilka/tsh-60
```

## ✅ Çözüm

### Güncellenen Dosya: `/components/LanguageContext.tsx`

**`changeLanguage` fonksiyonu tamamen yeniden yazıldı:**

#### 1. **URL Parsing**
```typescript
const pathWithoutLang = currentPath.replace(/^\/(tr|en|ru|ar)\//, '');
const pathParts = pathWithoutLang.split('/').filter(p => p);
```
- Mevcut URL'den dil prefix'ini çıkar
- Path'i parçalara ayır (sayfa, ürün, model vs.)

#### 2. **Slug Mapping'ler**
```typescript
const import_slugsByLanguage = {
  about: { tr: 'kurumsal', en: 'about', ru: 'o-kompanii', ar: 'about' },
  products: { tr: 'urunler', en: 'products', ru: 'produkty', ar: 'products' },
  // ... tüm statik sayfalar
};

const import_productCategorySlugs = {
  'single-saft': { 
    tr: 'tek-saftli-parcalama-makinesi', 
    en: 'single-shaft-shredder', 
    ru: 'odnovalnaya-drobilka', 
    ar: 'single-shaft-shredder' 
  },
  // ... tüm ürün kategorileri
};
```

#### 3. **Akıllı URL Yeniden Oluşturma**
```typescript
// 1. Statik sayfa mı kontrol et
for (const [pageKey, slugs] of Object.entries(import_slugsByLanguage)) {
  if (slugs[currentLang] === firstPart) {
    newPath = `/${newLang}/${slugs[newLang]}`;
    break;
  }
}

// 2. Ürün kategorisi mi kontrol et
for (const [productKey, slugs] of Object.entries(import_productCategorySlugs)) {
  if (slugs[currentLang] === firstPart) {
    newPath = `/${newLang}/${slugs[newLang]}`;
    
    // Model varsa ekle (TSH-60, CS-20 vs.)
    if (pathParts.length > 1) {
      newPath += `/${pathParts[1]}`;
    }
    break;
  }
}
```

## 📊 Test Senaryoları

### Senaryo 1: Statik Sayfa
```
1. Sayfa: /tr/kurumsal
2. İngilizce'ye geç
3. ✅ Yeni URL: /en/about
```

### Senaryo 2: Ürün Kategorisi
```
1. Sayfa: /tr/tek-saftli-parcalama-makinesi
2. Rusça'ya geç
3. ✅ Yeni URL: /ru/odnovalnaya-drobilka
```

### Senaryo 3: Ürün Detay Sayfası
```
1. Sayfa: /tr/cift-saftli-parcalama-makinesi/cs-60
2. İngilizce'ye geç
3. ✅ Yeni URL: /en/dual-shaft-shredder/cs-60
```

### Senaryo 4: Harddisk Destroyer
```
1. Sayfa: /tr/harddisk-imha-makinesi
2. İngilizce'ye geç
3. ✅ Yeni URL: /en/harddisk-destroyer
```

### Senaryo 5: Harddisk Model
```
1. Sayfa: /tr/harddisk-imha-makinesi/databer-s
2. Rusça'ya geç
3. ✅ Yeni URL: /ru/unichtozhitel-zhestkikh-diskov/databer-s
```

## 🎯 Nasıl Çalışıyor?

### Adım 1: URL'i Parse Et
```
URL: /tr/harddisk-imha-makinesi/databer-s
↓
currentLang: 'tr'
pathWithoutLang: 'harddisk-imha-makinesi/databer-s'
pathParts: ['harddisk-imha-makinesi', 'databer-s']
firstPart: 'harddisk-imha-makinesi'
```

### Adım 2: Slug'ı Tanı
```
import_productCategorySlugs['harddisk'] = {
  tr: 'harddisk-imha-makinesi',  ← MATCH!
  en: 'harddisk-destroyer',
  ru: 'unichtozhitel-zhestkikh-diskov',
  ar: 'harddisk-destroyer'
}
```

### Adım 3: Yeni URL Oluştur
```
newLang: 'en'
newPath: /en + /harddisk-destroyer + /databer-s
Result: /en/harddisk-destroyer/databer-s ✅
```

## 🔄 Tüm Dil Çevirmeleri

### Ana Sayfa
| TR | EN | RU | AR |
|----|----|----|-----|
| `/tr` | `/en` | `/ru` | `/ar` |

### Kurumsal
| TR | EN | RU | AR |
|----|----|----|-----|
| `/tr/kurumsal` | `/en/about` | `/ru/o-kompanii` | `/ar/about` |

### Ürünler
| TR | EN | RU | AR |
|----|----|----|-----|
| `/tr/urunler` | `/en/products` | `/ru/produkty` | `/ar/products` |

### Tek Şaftlı
| TR | EN | RU | AR |
|----|----|----|-----|
| `/tr/tek-saftli-parcalama-makinesi` | `/en/single-shaft-shredder` | `/ru/odnovalnaya-drobilka` | `/ar/single-shaft-shredder` |

### Çift Şaftlı
| TR | EN | RU | AR |
|----|----|----|-----|
| `/tr/cift-saftli-parcalama-makinesi` | `/en/dual-shaft-shredder` | `/ru/dvukhvalnaya-drobilka` | `/ar/dual-shaft-shredder` |

### Harddisk
| TR | EN | RU | AR |
|----|----|----|-----|
| `/tr/harddisk-imha-makinesi` | `/en/harddisk-destroyer` | `/ru/unichtozhitel-zhestkikh-diskov` | `/ar/harddisk-destroyer` |

### Metal
| TR | EN | RU | AR |
|----|----|----|-----|
| `/tr/metal-parcalama-makinesi` | `/en/metal-shredder` | `/ru/drobilka-metalla` | `/ar/metal-shredder` |

### Mobil
| TR | EN | RU | AR |
|----|----|----|-----|
| `/tr/mobil-kirici` | `/en/mobile-shredder` | `/ru/mobilnaya-drobilka` | `/ar/mobile-shredder` |

### Palet
| TR | EN | RU | AR |
|----|----|----|-----|
| `/tr/palet-parcalama-makinesi` | `/en/pallet-shredder` | `/ru/drobilka-poddonov` | `/ar/pallet-shredder` |

## ✨ Ek Özellikler

### Model İsimleri Korunur
Model isimleri (TSH-60, CS-20, DATABER-S vs.) tüm dillerde aynı kalır:
```
/tr/tek-saftli-parcalama-makinesi/tsh-60
       ↓ dil değiştir (EN)
/en/single-shaft-shredder/tsh-60
                          ↑ model ismi aynı
```

### Fallback Mekanizması
Eğer slug mapping'de bulunamazsa, sadece dil prefix'i değişir:
```
/tr/bilinmeyen-sayfa
       ↓
/en/bilinmeyen-sayfa
```

## 🚀 Sonuç

Artık kullanıcı header'dan dil değiştirdiğinde:
- ✅ URL tamamen o dilde oluşur
- ✅ Slug'lar çevrilir
- ✅ Model isimleri korunur
- ✅ SEO için her dil unique URL'e sahip
- ✅ Hreflang tags doğru çalışır
- ✅ Google her dili ayrı indexleyebilir

## 📝 Örnek Kullanım

```typescript
// Header component'te:
<button onClick={() => setLanguage('en')}>
  English
</button>

// Otomatik olarak:
// 1. URL parse edilir
// 2. Slug mapping'den çeviriler bulunur
// 3. Yeni URL oluşturulur
// 4. Sayfa yenilenir
// 5. Aynı sayfada, farklı dilde devam edilir ✨
```

---

## 🎉 TAMAMLANDI!

MT Makina web sitesi artık tam çok dilli:
- 🌍 4 dil (TR, EN, RU, AR)
- 🔗 Her dil için unique, translate edilmiş URL'ler
- 🎯 Dil değiştirme sırasında slug çevirisi
- 📊 SEO-friendly URL yapısı
- 🚀 International SEO ready!
