# MT Makina — Parcalamasite Proje Talimatları

> **🚨 ZORUNLU:** Bu proje `skills/` klasöründe 940+ uzmanlaşmış beceri modülü barındırmaktadır. **Hiçbir işlem skill okumadan yapılamaz.** Skill kullanmadan yapılan iş KABUL EDİLMEZ.

---

## 📋 Proje Teknoloji Yığını

| Teknoloji | Detay                                             |
| --------- | ------------------------------------------------- |
| Framework | React 18 + Vite 6                                 |
| Dil       | TypeScript                                        |
| CSS       | Tailwind CSS v4                                   |
| Animasyon | Framer Motion (`motion`)                          |
| 3D        | Three.js + React Three Fiber                      |
| Hosting   | Vercel                                            |
| i18n      | 4 dil: TR (varsayılan), EN, RU, AR (RTL)          |
| Proje     | Endüstriyel parçalama makineleri web sitesi (B2B) |
| Domain    | parcalamamakinesi.com / mtmakina.com.tr           |

---

## 🚨 ZORUNLU KURAL: Skill Olmadan İşlem Yapılmaz

```
HER İŞLEME BAŞLAMADAN ÖNCE → İLGİLİ SKILL DOSYASINI OKU → UYGULA → DOĞRULA
```

### Skill Kullanım Akışı

1. **Görevi analiz et** → Hangi alan? (SEO / Çeviri / Katalog / Frontend / Debug)
2. **İlgili skill'i belirle** → Aşağıdaki haritaları kullan
3. **`SKILL.md` dosyasını oku** → `skills/<skill-adı>/SKILL.md`
4. **Talimatları uygula** → Skill'deki iş akışlarını ve kuralları takip et
5. **Tamamlama öncesi doğrula** → Build, çeviri kontrolü, SEO kontrolü

---

## 🔍 SEO ODAKLI SKİLLER (ZORUNLU)

> **⚠️ SEO bu proje için en kritik konudur. Aşağıdaki skill'lerin tamamı, SEO ile ilgili HER işlemde kullanılmalıdır.**

| Skill                              | Yol                                                | Kullanım Alanı                                                                                     |
| ---------------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `google-search-console-automation` | `skills/google-search-console-automation/SKILL.md` | Search analytics, URL inspection, sitemap yönetimi, indeksleme durumu kontrolü                     |
| `semrush-automation`               | `skills/semrush-automation/SKILL.md`               | Anahtar kelime araştırma, domain organik keyword analizi, backlink profili, keyword difficulty     |
| `ahrefs-automation`                | `skills/ahrefs-automation/SKILL.md`                | Site explorer metrikleri, backlink analizi, keyword araştırma, rakip analizi, domain rating takibi |
| `google-analytics-automation`      | `skills/google-analytics-automation/SKILL.md`      | GA4 raporlama, trafik analizi, funnel raporları, dönüşüm takibi                                    |
| `neuronwriter-automation`          | `skills/neuronwriter-automation/SKILL.md`          | İçerik SEO optimizasyonu, NLP tabanlı içerik analizi                                               |
| `ravenseotools-automation`         | `skills/ravenseotools-automation/SKILL.md`         | SEO denetim toolkit otomasyonu                                                                     |
| `moz-automation`                   | `skills/moz-automation/SKILL.md`                   | Domain authority, link kalitesi analizi                                                            |

### SEO Zorunlu Kontrol Listesi

Her sayfa değişikliğinde şunları kontrol et:

- [ ] `google-search-console-automation` ile URL inspection yapıldı mı?
- [ ] `semrush-automation` ile hedef keyword'ler analiz edildi mi?
- [ ] `ahrefs-automation` ile backlink durumu kontrol edildi mi?
- [ ] `google-analytics-automation` ile trafik etkisi değerlendirildi mi?
- [ ] Meta title ve description optimize edildi mi?
- [ ] Alt text'ler SEO uyumlu mu?
- [ ] Heading hiyerarşisi doğru mu? (tek `<h1>`, ardışık `<h2>`, `<h3>`)
- [ ] Schema markup (JSON-LD) güncel mi?
- [ ] Sitemap'e yeni sayfalar eklendi mi?
- [ ] Canonical URL'ler doğru mu?

---

## 🌍 ÇEVİRİ VE LOKALİZASYON SKİLLERİ (ZORUNLU)

> **⚠️ Bu projede 4 dilde içerik üretiliyor. Çeviri kalitesi kritik öneme sahiptir. Aşağıdaki skill'ler çeviri işlemlerinde MUTLAKA kullanılmalıdır.**

| Skill                  | Yol                                    | Kullanım Alanı                                                        |
| ---------------------- | -------------------------------------- | --------------------------------------------------------------------- |
| `crowdin-automation`   | `skills/crowdin-automation/SKILL.md`   | Çeviri yönetim platformu, toplu çeviri otomasyonu, çeviri tutarlılığı |
| `linguapop-automation` | `skills/linguapop-automation/SKILL.md` | Dil analizi, çeviri kalitesi doğrulama                                |
| `tisane-automation`    | `skills/tisane-automation/SKILL.md`    | NLP tabanlı dil analizi, metin kalitesi kontrolü, dil algılama        |
| `amara-automation`     | `skills/amara-automation/SKILL.md`     | Video içerik çevirisi, altyazı otomasyonu                             |

### Çeviri Zorunlu Kuralları

1. **4 DİL HER ZAMAN GÜNCELLENİR:**
   - 🇹🇷 Türkçe (TR) — ana dil, varsayılan
   - 🇬🇧 İngilizce (EN)
   - 🇷🇺 Rusça (RU)
   - 🇸🇦 Arapça (AR) — RTL desteği zorunlu

2. **SADECE BAŞLIK DEĞİL, TÜM METİN ÇEVRİLİR:**
   - ❌ Yalnızca `<h2>`, `<h3>` başlıkları çevirmek YASAKTIR
   - ✅ Paragraflar, feature-box'lar, liste öğeleri, callout-box'lar, spec label'ları, contact bilgileri dahil TÜM metin çevrilmelidir

3. **ARAPÇA (AR) İÇİN ÖZEL KURALLAR:**
   - `<html lang="ar" dir="rtl">` olmalı
   - CSS'de `direction: rtl` ve `text-align: right` uygulanmalı
   - Sayfa numaraları (01, 02, ...) LTR kalabilir

4. **ÇEVİRİ DOĞRULAMA KONTROL LİSTESİ:**
   - [ ] Türkçe anahtar kelimelerin çevrilmiş dosyalarda kalıp kalmadığı kontrol edildi mi?
   - [ ] `tisane-automation` ile dil algılama yapıldı mı?
   - [ ] `crowdin-automation` ile çeviri tutarlılığı doğrulandı mı?
   - [ ] AR dosyalarda RTL düzeni test edildi mi?
   - [ ] Teknik terimler doğru çevrildi mi? (Motor Gücü ↔ Motor Power ↔ Мощность двигателя ↔ قدرة المحرك)

---

## 📝 İÇERİK VE TEST SKİLLERİ

| Skill                     | Yol                                       | Kullanım Alanı                                                         |
| ------------------------- | ----------------------------------------- | ---------------------------------------------------------------------- |
| `content-research-writer` | `skills/content-research-writer/SKILL.md` | Blog yazımı, ürün açıklamaları, içerik araştırma, kaynak yönetimi      |
| `webapp-testing`          | `skills/webapp-testing/SKILL.md`          | Playwright ile web app testleri, görsel doğrulama, tarayıcı otomasyonu |

---

## 📄 KATALOG HTML ŞABLON YAPISI

> **⚠️ Bu bölüm, yeni katalog oluştururken veya mevcut katalogları çevirirken MUTLAKA okunmalıdır.**

### Dosya Yapısı

```
public/catalogs/
├── <kategori>/          # single-shaft, dual-shaft, quad-shaft, metal, harddisk,
│   │                    # mobile, pallet, tree-root, wood, glass
│   └── <model>/         # TSH-60, CS-20, DS-80, TSV-200 vb.
│       ├── catalog.html      # 🇹🇷 Türkçe (varsayılan)
│       ├── catalog-en.html   # 🇬🇧 İngilizce
│       ├── catalog-ru.html   # 🇷🇺 Rusça
│       ├── catalog-ar.html   # 🇸🇦 Arapça (RTL)
│       └── images/           # Ürün görselleri (webp)
└── assets/                   # Ortak kaynaklar
    ├── Mt Makina-Logo.png
    ├── logoicon.png
    └── referanslar/          # Referans logo görselleri
```

### 7 Sayfalık Katalog Yapısı

Her katalog HTML dosyası 7 sayfadan oluşur. **Bu yapı TÜM modeller için standarttır.**

#### SAYFA 1: KAPAK (`<!-- PAGE 1: COVER -->`)

```html
<div class="page">
  <div class="cover-page">
    <div class="cover-top-block"></div>
    <div class="cover-bottom-block"></div>
    <img class="cover-logo" />
    <!-- ../../assets/Mt Makina-Logo.png -->
    <div class="cover-content">
      <img class="cover-img" />
      <!-- images/<model-gorsel>.webp -->
      <h1 class="cover-model">MODEL</h1>
      <p class="cover-title">Ürün Tipi Adı</p>
      <!-- ÇEVRİLECEK -->
      <p class="cover-subtitle">Product Type Name</p>
      <!-- ÇEVRİLECEK -->
      <div class="cover-series">ÜRÜN KATALOĞU</div>
      <!-- ÇEVRİLECEK -->
    </div>
  </div>
</div>
```

#### SAYFA 2: ÜRÜN TANITIMI (`<!-- PAGE 2: PRODUCT INTRO -->`)

Çevrilecek alanlar:

- `<h2>` — Bölüm başlığı (Ürün Tanıtımı / Product Introduction / ...)
- `<p>` — Ana açıklama paragrafı (TÜM metin çevrilecek)
- `.highlight-box h3` + `p` — Neden [MODEL]? kutusu
- `.feature-box h4` + `p` — 4 özellik kutusu (başlık + açıklama)
- `.material-list li` — Parçalanabilir malzeme listesi

#### SAYFA 3: UYGULAMA ALANLARI (`<!-- PAGE 3: APPLICATION AREAS -->`)

Çevrilecek alanlar:

- Bölüm başlığı, açıklama paragrafı
- `.app-card h4` + `p` — Uygulama kartları (4 adet)
- `.highlight-box` — Avantajlar kutusu

#### SAYFA 4: TEKNİK DETAYLAR (`<!-- PAGE 4: TECHNICAL DETAILS -->`)

Çevrilecek alanlar:

- Bölüm başlığı
- `.callout-box strong` + `span` — Teknik özellik kutuları (4 adet)
- `.spec-label` etiketleri — Gövde Malzemesi, Bıçak Malzemesi vb.
- Standart/Opsiyonel donanım başlıkları ve etiketler

#### SAYFA 5: TEKNİK KİMLİK KARTI (`<!-- PAGE 5: SPEC SHEET -->`)

Çevrilecek alanlar:

- Bölüm başlığı, model alt başlığı
- `.big-spec-item .label` — Motor Gücü, Parçalama Alanı, Rotor Boyu
- `.spec-card-header h3` — Detaylı Teknik Özellikler
- `.spec-row .label` — Tüm teknik etiketler
- `.highlight-box` — Not kutusu

#### SAYFA 6: REFERANSLAR (`<!-- PAGE 6: REFERENCES -->`)

Çevrilecek alanlar:

- Bölüm başlığı
- `.references-intro p` — Referans tanıtım metni
- `.references-count` — "40+ Referans" sayısı
- `.highlight-box` — "Güvenilir Çözüm Ortağınız" kutusu

#### SAYFA 7: OPSİYONEL ÖZELLİKLER VE İLETİŞİM (`<!-- PAGE 7: OPTIONAL FEATURES & CONTACT -->`)

Çevrilecek alanlar:

- Bölüm başlığı
- `.optional-features li` — Opsiyonel özellik listesi (7 madde)
- `.contact-section h3` — "Bizimle İletişime Geçin"
- `.contact-group-title` — ADRES, TELEFON, WHATSAPP, E-POSTA etiketleri

### Önemli Teknik Kurallar

1. **UTF-8 BOM'suz encoding** — `[System.Text.UTF8Encoding]($false)` kullan
2. **CSS ilk 670 satır** — `<style>` bloğu tüm stillemedir, DOKUNMA
3. **Model-spesifik veriler** — Motor gücü, rotor boyu, parçalama alanı her modelde farklıdır
4. **Görsel yolları göreceli** — `images/`, `../../assets/`

---

## 🏭 ÜRÜN KATEGORİLERİ VE MODELLER

| Kategori Slug  | Türkçe Ad             | Modeller                                                           |
| -------------- | --------------------- | ------------------------------------------------------------------ |
| `single-shaft` | Tek Şaftlı Parçalama  | TSH-60, TSH-80, TSH-100, TSH-130, TSH-160, TSH-200                 |
| `dual-shaft`   | Çift Şaftlı Parçalama | CS-20, CS-40, CS-60, CS-80, CS-100, CS-120, CS-150, CS-180, CS-200 |
| `quad-shaft`   | Dört Şaftlı Parçalama | DS-80, DS-100, DS-150, DS-200                                      |
| `metal`        | Metal Parçalama       | RDM-100, RDM-150, RDM-180, RDM-200                                 |
| `harddisk`     | Evrak İmha            | DATABER-S, DATABER-D, DATABER-T                                    |
| `mobile`       | Mobil Parçalama       | TSM-150, TSM-300, CSM-150, CSM-200                                 |
| `pallet`       | Palet Parçalama       | TSV-140, TSV-200, TSVX-200                                         |
| `tree-root`    | Ağaç / Kök Parçalama  | TW-100, TW-150, TW-200                                             |
| `wood`         | Ahşap Parçalama       | TSY-100, TSY-150, TSY-200                                          |
| `glass`        | Cam Parçalama         | CK-200, CK-400, CKS-400, GB-300                                    |

---

## 🔴 KRİTİK KURALLAR

### ❌ ASLA YAPMA

- ❌ SKILL okumadan kod yazma veya içerik üretme
- ❌ Çeviri yaparken sadece başlıkları çevirip gövde metnini Türkçe bırakma
- ❌ SEO etkisini düşünmeden sayfa yapısı değiştirme
- ❌ Alt text, meta tag olmadan görsel ekleme
- ❌ Katalog şablonundaki CSS/stil bloğuna müdahale etme
- ❌ Hardcoded Türkçe string bırakma — tüm dillerde güncellenecek
- ❌ `any` TypeScript tipi kullanma
- ❌ Doğrulamadan işi tamamlandı olarak bildirme
- ❌ Var olmayan skill referansı kullanma

### ✅ HER ZAMAN YAP

- ✅ İlgili skill'in SKILL.md dosyasını oku, sonra başla
- ✅ SEO işlemlerinde `semrush-automation`, `ahrefs-automation`, `google-search-console-automation` kullan
- ✅ Çevirilerde `crowdin-automation`, `linguapop-automation`, `tisane-automation` ile doğrula
- ✅ İçerik üretiminde `content-research-writer` skill'ini referans al
- ✅ Test yaparken `webapp-testing` skill'ini uygula
- ✅ Her yeni katalog oluşturulduğunda 4 dilde birden oluştur
- ✅ Çeviri sonrası Türkçe anahtar kelime kontrolü yap
- ✅ Build başarılı → Doğrula → Sonra tamamla
- ✅ `google-analytics-automation` ile trafik etkisini izle
- ✅ `neuronwriter-automation` ile içerik SEO skorunu kontrol et

---

## 📂 ÖNEMLİ DİZİNLER

| Dizin                     | Açıklama                                                  |
| ------------------------- | --------------------------------------------------------- |
| `src/`                    | React bileşenleri ve uygulama kodu                        |
| `src/data/`               | Ürün verileri, açıklamalar, katalog verileri              |
| `src/utils/`              | SEO config, model config, image config, i18n yardımcıları |
| `public/catalogs/`        | Ürün katalog HTML dosyaları (HTML → PDF)                  |
| `public/catalogs/assets/` | Ortak görsel kaynaklar (logo, referans logoları)          |
| `skills/`                 | 940+ AI beceri modülü                                     |
| `vercel.json`             | Dağıtım, yönlendirme ve redirect yapılandırması           |

---

## 📌 SKILL ARAMA REHBERİ

940+ skill mevcut. Anahtar kelimeyle arama:

```bash
ls skills/ | grep "anahtar-kelime"
```

### Proje İçin Kritik Skill Grupları

**SEO (7 skill — TÜM SEO İŞLEMLERİNDE ZORUNLU):**

- `google-search-console-automation` — Arama performansı, sitemap, URL inspection
- `semrush-automation` — Keyword araştırma, domain analiz, backlink
- `ahrefs-automation` — Backlink, keyword, domain rating, rakip
- `google-analytics-automation` — GA4 trafik, dönüşüm, funnel
- `neuronwriter-automation` — İçerik SEO optimizasyonu
- `ravenseotools-automation` — SEO denetim araçları
- `moz-automation` — Domain authority, link analiz

**ÇEVİRİ (4 skill — TÜM ÇEVİRİ İŞLEMLERİNDE ZORUNLU):**

- `crowdin-automation` — Çeviri yönetimi
- `linguapop-automation` — Dil analizi
- `tisane-automation` — NLP dil analiz
- `amara-automation` — Video çeviri

**İÇERİK:**

- `content-research-writer` — Araştırma ve içerik yazım

**TEST:**

- `webapp-testing` — Playwright ile test

---

## 📌 SONUÇ

**Bu dosya, her yeni oturumda ve her görev başlangıcında okunmalıdır.**

Skill kullanmak opsiyonel değil, **ZORUNLUDUR**. Her görev, ilgili skill'in rehberliğinde profesyonel standartlarda tamamlanmalıdır.

> "Skill okumadan yapılan iş, temelsiz yapılan bina gibidir."
