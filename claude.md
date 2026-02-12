# MT Makina - Parcalamasite Proje Talimatları

> **DİKKAT:** Bu proje `skills/` klasöründe 620+ uzmanlaşmış beceri modülü barındırmaktadır. **HİÇBİR İŞLEM, skill kullanmadan yapılmamalıdır.** Her göreve başlarken ilgili skill'in `SKILL.md` dosyasını oku ve talimatlarına uy.

---

## 🚨 ZORUNLU KURAL: Skill Olmadan İş Yapılmaz

```
HER İŞLEME BAŞLAMADAN ÖNCE İLGİLİ SKILL DOSYASINI OKU VE UYGULA
```

Bu proje kapsamında yapılan her iş, ilgili skill'in (beceri modülünün) talimatlarına uygun olarak yürütülmelidir. Skill kullanmadan yapılan iş **kabul edilmez**.

### Skill Kullanım Akışı

1. **Görevi analiz et** → Hangi alanla ilgili? (Frontend, SEO, debugging, i18n vb.)
2. **İlgili skill'i belirle** → Aşağıdaki haritayı kullan
3. **SKILL.md dosyasını oku** → `skills/<skill-adı>/SKILL.md`
4. **Talimatları uygula** → Skill'deki adımları takip et
5. **Tamamlama öncesi doğrula** → `verification-before-completion` skill'ini uygula

---

## 📋 Proje Teknoloji Yığını

| Teknoloji | Versiyon/Detay |
|-----------|---------------|
| Framework | React + Vite |
| Dil | TypeScript |
| Animasyon | Framer Motion |
| Hosting | Vercel |
| i18n | Çoklu dil (TR, EN, RU, AR) |
| Proje Tipi | Endüstriyel makine üreticisi web sitesi |

---

## 🗺️ Görev → Skill Eşleştirme Haritası

### Frontend Geliştirme

| Görev | Kullanılacak Skill | Yol |
|-------|-------------------|-----|
| React bileşen yazma/düzenleme | `react-best-practices` | `skills/react-best-practices/SKILL.md` |
| TypeScript hataları, tip sorunları | `typescript-expert` | `skills/typescript-expert/SKILL.md` |
| UI/UX tasarımı, görsel iyileştirme | `frontend-design` | `skills/frontend-design/SKILL.md` |
| Web performans optimizasyonu | `web-performance-optimization` | `skills/web-performance-optimization/SKILL.md` |
| Erişilebilirlik (accessibility) | `accessibility-compliance-accessibility-audit` | `skills/accessibility-compliance-accessibility-audit/SKILL.md` |

### SEO & İçerik

| Görev | Kullanılacak Skill | Yol |
|-------|-------------------|-----|
| SEO denetimi/analizi | `seo-audit` | `skills/seo-audit/SKILL.md` |
| SEO içerik yazımı | `seo-content-writer` | `skills/seo-content-writer/SKILL.md` |
| Meta tag optimizasyonu | `seo-meta-optimizer` | `skills/seo-meta-optimizer/SKILL.md` |
| İçerik yapısı, başlık hiyerarşisi | `seo-structure-architect` | `skills/seo-structure-architect/SKILL.md` |
| Schema markup (JSON-LD) | `schema-markup` | `skills/schema-markup/SKILL.md` |

### Çoklu Dil (i18n)

| Görev | Kullanılacak Skill | Yol |
|-------|-------------------|-----|
| Çeviri, yerelleştirme, RTL desteği | `i18n-localization` | `skills/i18n-localization/SKILL.md` |

### Hata Ayıklama & Kalite

| Görev | Kullanılacak Skill | Yol |
|-------|-------------------|-----|
| Bug tespiti, hata ayıklama | `systematic-debugging` | `skills/systematic-debugging/SKILL.md` |
| Kod incelemesi | `code-review-excellence` | `skills/code-review-excellence/SKILL.md` |
| İşi tamamlamadan önce doğrulama | `verification-before-completion` | `skills/verification-before-completion/SKILL.md` |

### Git & Dağıtım

| Görev | Kullanılacak Skill | Yol |
|-------|-------------------|-----|
| Git commit & push | `git-pushing` | `skills/git-pushing/SKILL.md` |

---

## ⚡ İşlem Başlatma Protokolü

Her yeni görev için aşağıdaki kontrol listesini uygula:

### 1. Ön Analiz
- [ ] Görev hangi kategoriye giriyor? (Frontend / SEO / i18n / Debug / Git)
- [ ] İlgili skill(ler) belirlendi mi?
- [ ] Skill'in SKILL.md dosyası okundu mu?

### 2. Uygulama
- [ ] Skill'deki talimatlar ve en iyi pratikler uygulanıyor mu?
- [ ] Projenin mevcut yapısına uyumlu mu?
- [ ] TypeScript tip güvenliği sağlandı mı? (`typescript-expert`)
- [ ] i18n: Tüm diller (TR, EN, RU, AR) dikkate alındı mı? (`i18n-localization`)

### 3. Tamamlama Öncesi Doğrulama
- [ ] `verification-before-completion` skill'i uygulandı mı?
- [ ] Build çalışıyor mu? (`npm run build` başarılı mı?)
- [ ] Değişiklikler diğer sayfaları/bileşenleri bozmuyor mu?
- [ ] SEO etkisi değerlendirildi mi? (`seo-audit`)

---

## 🔴 Kritik Kurallar

### Asla Yapma
- ❌ Skill okumadan kod yazma
- ❌ Bug'ı anlamadan rastgele düzeltme deneme (`systematic-debugging` kullan)
- ❌ Doğrulamadan "bitti" deme (`verification-before-completion` kullan)
- ❌ Hardcoded string bırakma — çeviri anahtarları kullan (`i18n-localization`)
- ❌ SEO etkisini düşünmeden sayfa yapısı değiştirme (`seo-audit` kullan)
- ❌ Alt text, meta tag olmadan görsel ekleme (`seo-meta-optimizer` kullan)
- ❌ any tipi kullanma — doğru tip tanımları yap (`typescript-expert`)

### Her Zaman Yap
- ✅ İlgili skill'i oku, sonra işe başla
- ✅ Hata varsa sistematik debug uygula (`systematic-debugging`)
- ✅ Her bileşen değişikliğinde React best practices kontrol et (`react-best-practices`)
- ✅ Her yeni içerikte SEO kontrol listesini uygula (`seo-content-writer`)
- ✅ Web performansını ölç ve iyileştir (`web-performance-optimization`)
- ✅ Schema markup'ı doğrula ve Google uyumluluğunu kontrol et (`schema-markup`)
- ✅ Build başarılı → Doğrula → Sonra tamamla

---

## 📂 Skill Arama Kılavuzu

620+ skill mevcut. Tüm listeyi görmek için:

```bash
ls skills/
```

Anahtar kelimeyle aramak için:

```bash
ls skills/ | grep "anahtar-kelime"
```

### Sık Kullanılan Ek Skill'ler

| Skill | Ne Zaman |
|-------|----------|
| `brainstorming` | Yeni özellik tasarımı öncesi |
| `writing-plans` | Karmaşık implementasyon planlaması |
| `clean-code` | Kod kalitesi iyileştirme |
| `seo-keyword-strategist` | Anahtar kelime stratejisi |
| `seo-content-refresher` | Mevcut içeriği güncelleme |
| `seo-cannibalization-detector` | İçerik çakışması tespiti |
| `programmatic-seo` | Ölçeklenebilir sayfa oluşturma |
| `analytics-tracking` | Analitik kurulumu |
| `deployment-procedures` | Dağıtım prosedürleri |

---

## 🏭 Proje Bağlamı

**MT Makina** — Endüstriyel parçalama makineleri üreticisi. Web sitesi ürün tanıtımı, katalog sunumu ve çoklu dil desteği ile B2B müşterilere hizmet verir.

### Desteklenen Diller
- 🇹🇷 Türkçe (varsayılan)
- 🇬🇧 İngilizce
- 🇷🇺 Rusça
- 🇸🇦 Arapça (RTL)

### Önemli Dizinler
- `src/` — React bileşenleri ve uygulama kodu
- `public/catalogs/` — Ürün katalog dosyaları (HTML → PDF)
- `skills/` — 620+ AI beceri modülü
- `vercel.json` — Dağıtım ve yönlendirme yapılandırması

---

## 📌 Sonuç

**Bu dosya, her yeni oturumda ve her görev başlangıcında okunmalıdır.**

Skill kullanmak opsiyonel değil, **zorunludur**. Her görev, ilgili skill'in rehberliğinde profesyonel standartlarda tamamlanmalıdır.

> "Skill okumadan yapılan iş, temelsiz yapılan bina gibidir."
