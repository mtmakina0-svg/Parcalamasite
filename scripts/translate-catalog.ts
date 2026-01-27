/**
 * Catalog Translation Script v2
 * Complete translation of Turkish HTML catalog content to English, Russian, and Arabic
 * Uses regex patterns to handle multiline text and HTML entities
 */

import * as fs from 'fs';
import * as path from 'path';

// Complete translation mappings for TSH-60 catalog content
const translations = {
    en: {
        // HTML lang attribute
        'lang="tr"': 'lang="en"',

        // Title tag
        'TSH-60 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu': 'TSH-60 Single Shaft Shredder | MT Makina Product Catalog',
        'TSH-80 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu': 'TSH-80 Single Shaft Shredder | MT Makina Product Catalog',
        'TSH-100 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu': 'TSH-100 Single Shaft Shredder | MT Makina Product Catalog',
        'TSH-130 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu': 'TSH-130 Single Shaft Shredder | MT Makina Product Catalog',
        'TSH-160 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu': 'TSH-160 Single Shaft Shredder | MT Makina Product Catalog',

        // Cover page
        'Tek Şaftlı Parçalama Makinesi': 'Single Shaft Shredder',
        'Single Shaft Shredder</p>': '</p>', // Remove duplicate subtitle
        'ÜRÜN KATALOĞU': 'PRODUCT CATALOG',
        'Kompakt Güç, Yüksek Verim': 'Compact Power, High Efficiency',

        // Section headers
        'Ürün Tanıtımı': 'Product Introduction',
        'Uygulama Alanları': 'Application Areas',
        'Teknik Detaylar': 'Technical Details',
        'Teknik Kimlik Kartı': 'Technical Specifications',
        'Referanslarımız': 'Our References',
        'Boyutlar ve İletişim': 'Dimensions & Contact',
        'Detaylı Teknik Özellikler': 'Detailed Technical Specifications',

        // Product intro paragraphs - shorter patterns
        'serinin en kompakt ve seri modelidir': 'is the most compact and efficient model in the series',
        'Özellikle küçük': 'Especially small',
        've orta ölçekli işletmelerde plastik takoz, üretim firesi ve kağıt atıkların yerinde imhası için': 'and medium-sized enterprises for on-site destruction of plastic blocks, production waste and paper waste',
        'tasarlanmıştır': 'is designed',
        'Enerji tasarrufu sağlayan hidrolik itici (Hydraulic Ram) sistemi ve dayanıklı rotor': 'Energy-saving hydraulic ram system and durable rotor',
        'yapısı ile kesintisiz çalışma performansı sunar': 'structure provides uninterrupted working performance',

        // Why section
        'Neden TSH-60?': 'Why TSH-60?',
        'Neden TSH-80?': 'Why TSH-80?',
        'Neden TSH-100?': 'Why TSH-100?',
        'Neden TSH-130?': 'Why TSH-130?',
        'Neden TSH-160?': 'Why TSH-160?',
        'Kompakt boyutları sayesinde sınırlı alanlara kolayca yerleşir': 'Thanks to its compact dimensions, it easily fits in limited spaces',
        'Düşük enerji tüketimi ile işletme': 'With low energy consumption, operating',
        'maliyetlerini minimize eder': 'costs are minimized',
        'Tek operatör ile kullanılabilir, bakım ve temizliği kolaydır': 'Can be operated by a single operator, easy to maintain and clean',
        'Küçük': 'Small',
        'tesisler için ideal başlangıç makinesidir': 'is the ideal starter machine for facilities',

        // Feature boxes
        'Kompakt Tasarım': 'Compact Design',
        'Küçük alanlara sığan, taşınabilir boyutlarda endüstriyel parçalama çözümü': 'Industrial shredding solution in portable dimensions that fits small spaces',
        'Hidrolik İtici': 'Hydraulic Pusher',
        'Otomatik besleme ile sürekli ve düzenli parçalama performansı': 'Continuous and regular shredding performance with automatic feeding',
        'Düşük Enerji Tüketimi': 'Low Energy Consumption',
        'motor gücü ile ekonomik işletme maliyeti': 'motor power for economical operating costs',
        'Kolay Bakım': 'Easy Maintenance',
        'Modüler bıçak sistemi ile hızlı değişim ve minimum duruş süresi': 'Quick change and minimum downtime with modular blade system',

        // Materials list header
        'ile Parçalanabilir Malzemeler': 'Shreddable Materials',
        'Plastik Takoz &amp; Blok': 'Plastic Blocks & Lumps',
        'Plastik Takoz & Blok': 'Plastic Blocks & Lumps',
        'Üretim Fireleri': 'Production Waste',
        'Kağıt Bobinleri': 'Paper Rolls',
        'Karton Atıklar': 'Cardboard Waste',
        'İnce Kablolar': 'Thin Cables',
        'Tekstil Parçaları': 'Textile Pieces',
        'Plastik Kasalar': 'Plastic Crates',
        'Ambalaj Malzemeleri': 'Packaging Materials',

        // Application areas intro
        'kompakt yapısı sayesinde özellikle küçük ve orta ölçekli işletmelerde tercih edilmektedir': 'is preferred especially in small and medium-sized enterprises due to its compact structure',
        'Aşağıda başlıca kullanım alanları yer almaktadır': 'Below are the main areas of use',

        // Application cards
        'Plastik Üretim Tesisleri': 'Plastic Production Facilities',
        'Enjeksiyon ve ekstrüzyon üretim hatlarında oluşan firelerin yerinde imhası': 'On-site destruction of waste from injection and extrusion production lines',
        'Plastik takoz ve': 'Plastic blocks and',
        'blokların granül boyutuna indirgenmesi': 'blocks reduced to granule size',
        'Matbaa &amp; Ambalaj': 'Printing & Packaging',
        'Matbaa & Ambalaj': 'Printing & Packaging',
        'Kağıt bobinleri, karton kutular ve baskı atıklarının parçalanarak geri dönüşüme hazır hale': 'Paper rolls, cardboard boxes and printing waste shredded and made ready for',
        'getirilmesi': 'recycling',
        'Tekstil Atölyeleri': 'Textile Workshops',
        'Kumaş parçaları, iplik atıkları ve tekstil firelerinin elyaf formuna dönüştürülmesi': 'Converting fabric pieces, yarn waste and textile scraps into fiber form',
        'Küçük Geri Dönüşüm Tesisleri': 'Small Recycling Facilities',
        'Sınırlı alanda çalışan geri dönüşüm tesisleri için ideal başlangıç makinesi': 'Ideal starter machine for recycling facilities operating in limited space',

        // Advantages
        'Avantajları': 'Advantages',
        'Küçük alanlara kolay yerleşim': 'Easy installation in small spaces',
        'Tek operatör ile kullanım': 'Single operator operation',
        'Düşük işletme': 'Low operating',
        'maliyeti': 'cost',
        'Hızlı kurulum ve devreye alma': 'Fast installation and commissioning',
        'Minimum bakım gereksinimi': 'Minimum maintenance requirement',

        // Technical details - callout boxes
        'Hidrolik İtici (Hydraulic Ram)': 'Hydraulic Ram',
        'Malzemeyi rotora iterek sürekli ve düzenli besleme sağlar': 'Provides continuous and regular feeding by pushing material to the rotor',
        'Operatör müdahalesine gerek': 'No operator intervention',
        'kalmadan otomatik çalışır': 'required, works automatically',
        'Akıllı PLC &amp; Otomatik Geri Dönüş (Auto-Reverse)': 'Smart PLC & Auto-Reverse',
        'Akıllı PLC & Otomatik Geri Dönüş (Auto-Reverse)': 'Smart PLC & Auto-Reverse',
        'Aşırı yükte rotor otomatik olarak geri döner, bıçakları korur ve malzeme sıkışmasını': 'The rotor automatically reverses under overload, protects blades and prevents material',
        'önler': 'jamming',
        'Değiştirilebilir Elek (Screen)': 'Replaceable Screen',
        'İstenilen granül boyutuna göre kolayca değişen elek sistemi': 'Screen system that can be easily changed according to desired granule size',
        'arası': 'range',
        'seçenekler': 'options',
        'Hardox Bıçaklar': 'Hardox Blades',
        'adet yüksek aşınma dirençli Hardox 500 çelik kesici uç': 'high wear-resistant Hardox 500 steel cutting tips',
        'Uzun ömürlü ve': 'Long-lasting and',
        'değiştirilebilir': 'replaceable',

        // Standard equipment
        'Standart Donanım': 'Standard Equipment',
        'Gövde Malzemesi': 'Body Material',
        'St-52 Çelik': 'St-52 Steel',
        'Bıçak Malzemesi': 'Blade Material',
        'Tahrik Sistemi': 'Drive System',
        'Redüktörlü Motor': 'Geared Motor',
        'Hidrolik Ünite': 'Hydraulic Unit',
        'Dahili': 'Built-in',

        // Optional features
        'Opsiyonel Özellikler': 'Optional Features',
        'PLC Kontrol': 'PLC Control',
        'HMI Panel': 'HMI Panel',
        'Dokunmatik': 'Touchscreen',
        'Uzaktan İzleme': 'Remote Monitoring',
        'IoT Modülü': 'IoT Module',
        'Çıkış Konveyörü': 'Output Conveyor',
        'Opsiyonel': 'Optional',

        // Spec labels
        'Model': 'Model',
        'Motor Gücü': 'Motor Power',
        'Rotor Çapı': 'Rotor Diameter',
        'Rotor Uzunluğu': 'Rotor Length',
        'Kapasite': 'Capacity',
        'Bıçak Sayısı': 'Number of Blades',
        'Besleme Ağzı': 'Feeding Opening',
        'Makine Ağırlığı': 'Machine Weight',
        'Ağırlık': 'Weight',
        'Adet': 'Pieces',

        // Note section
        'Not': 'Note',
        'Kapasite değerleri malzeme türüne, boyutuna ve yoğunluğuna göre değişiklik gösterebilir': 'Capacity values may vary depending on material type, size and density',
        'Projenize': 'For your project',
        'özel teknik detaylar için satış ekibimizle iletişime geçiniz': 'please contact our sales team for specific technical details',

        // References
        "Türkiye'nin ve dünyanın önde gelen kurum ve kuruluşları MT Makina'yı tercih ediyor": "Turkey's and the world's leading institutions choose MT Makina",
        '40+ Referans': '40+ References',
        'Güvenilir Çözüm Ortağınız': 'Your Reliable Solution Partner',
        '20 yılı aşkın tecrübemizle kamu kurumları, özel sektör ve uluslararası firmalar için endüstriyel': 'With more than 20 years of experience, we provide industrial solutions for public institutions, private sector and international companies',
        'parçalama çözümleri sunuyoruz': 'shredding solutions',

        // Dimensions
        'Boyutları': 'Dimensions',
        'Toplam Uzunluk (A)': 'Total Length (A)',
        'Toplam Genişlik (B)': 'Total Width (B)',
        'Toplam Yükseklik (C)': 'Total Height (C)',

        // Contact section
        'Bizimle İletişime Geçin': 'Contact Us',
        'ADRES': 'ADDRESS',
        'Cumhuriyet Mahallesi, Nazım Hikmet Bulvarı, 1983 Sk. Kent Palas 2': 'Cumhuriyet Mahallesi, Nazım Hikmet Bulvarı, 1983 Sk. Kent Palas 2',
        'Kat: 7 D: 85 - 86, PK.: 34512 Esenyurt / İSTANBUL': 'Floor: 7 D: 85 - 86, PK: 34512 Esenyurt / ISTANBUL',
        'GENEL MERKEZ': 'HEADQUARTERS',
        'SATIŞ': 'SALES',
        'WHATSAPP': 'WHATSAPP',
        'E-POSTA': 'E-MAIL',
        'Ücretsiz Keşif': 'Free Site Survey',
        'İhtiyaçlarınıza uygun çözüm için ücretsiz keşif hizmetimizden': 'Take advantage of our free site survey service for',
        'yararlanın': 'a solution that suits your needs',

        // HTML comments
        'SAYFA 1: KAPAK': 'PAGE 1: COVER',
        'SAYFA 2: ÜRÜN TANITIMI': 'PAGE 2: PRODUCT INTRODUCTION',
        'SAYFA 3: UYGULAMA ALANLARI': 'PAGE 3: APPLICATION AREAS',
        'SAYFA 4: TEKNİK DETAYLAR': 'PAGE 4: TECHNICAL DETAILS',
        'SAYFA 5: TEKNİK KİMLİK KARTI (SPEC SHEET)': 'PAGE 5: TECHNICAL SPECIFICATIONS',
        'SAYFA 6: REFERANSLARIMIZ': 'PAGE 6: OUR REFERENCES',
        'SAYFA 7: BOYUTLAR & İLETİŞİM': 'PAGE 7: DIMENSIONS & CONTACT',
        'Firma Logosu': 'Company Logo',
        'Satır': 'Row',
        'Detay Görsel': 'Detail Image',
        'Genel Görünüm': 'General View',
        'Teknik Detay': 'Technical Detail',
        'Uygulama': 'Application',
        'Boyut Görseli': 'Dimension Image',

        // Image alt texts
        'Tek Şaftlı Parçalama Makinesi': 'Single Shaft Shredder',
    },

    ru: {
        // HTML lang attribute
        'lang="tr"': 'lang="ru"',

        // Title tag
        'TSH-60 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu': 'TSH-60 Одновальный Шредер | MT Makina Каталог',
        'TSH-80 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu': 'TSH-80 Одновальный Шредер | MT Makina Каталог',
        'TSH-100 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu': 'TSH-100 Одновальный Шредер | MT Makina Каталог',
        'TSH-130 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu': 'TSH-130 Одновальный Шредер | MT Makina Каталог',
        'TSH-160 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu': 'TSH-160 Одновальный Шредер | MT Makina Каталог',

        // Cover page
        'Tek Şaftlı Parçalama Makinesi': 'Одновальный Шредер',
        'Single Shaft Shredder</p>': '</p>',
        'ÜRÜN KATALOĞU': 'КАТАЛОГ ПРОДУКЦИИ',
        'Kompakt Güç, Yüksek Verim': 'Компактная мощность, высокая эффективность',

        // Section headers
        'Ürün Tanıtımı': 'Описание продукта',
        'Uygulama Alanları': 'Области применения',
        'Teknik Detaylar': 'Технические детали',
        'Teknik Kimlik Kartı': 'Технические характеристики',
        'Referanslarımız': 'Наши рекомендации',
        'Boyutlar ve İletişim': 'Размеры и контакты',
        'Detaylı Teknik Özellikler': 'Подробные технические характеристики',

        // Product intro
        'serinin en kompakt ve seri modelidir': 'самая компактная и эффективная модель серии',
        'Özellikle küçük': 'Особенно для малых',
        've orta ölçekli işletmelerde plastik takoz, üretim firesi ve kağıt atıkların yerinde imhası için': 'и средних предприятий для уничтожения пластиковых блоков, производственных отходов и бумаги',
        'tasarlanmıştır': 'разработан',
        'Enerji tasarrufu sağlayan hidrolik itici (Hydraulic Ram) sistemi ve dayanıklı rotor': 'Энергосберегающая гидравлическая система и прочный ротор',
        'yapısı ile kesintisiz çalışma performansı sunar': 'обеспечивают бесперебойную работу',

        // Why section
        'Neden TSH-60?': 'Почему TSH-60?',
        'Neden TSH-80?': 'Почему TSH-80?',
        'Neden TSH-100?': 'Почему TSH-100?',
        'Neden TSH-130?': 'Почему TSH-130?',
        'Neden TSH-160?': 'Почему TSH-160?',
        'Kompakt boyutları sayesinde sınırlı alanlara kolayca yerleşir': 'Компактные размеры позволяют легко разместить в ограниченном пространстве',
        'Düşük enerji tüketimi ile işletme': 'Низкое энергопотребление снижает эксплуатационные',
        'maliyetlerini minimize eder': 'расходы',
        'Tek operatör ile kullanılabilir, bakım ve temizliği kolaydır': 'Может управляться одним оператором, легко обслуживается',
        'Küçük': 'Малые',
        'tesisler için ideal başlangıç makinesidir': 'предприятия - идеальная стартовая машина',

        // Feature boxes
        'Kompakt Tasarım': 'Компактный дизайн',
        'Küçük alanlara sığan, taşınabilir boyutlarda endüstriyel parçalama çözümü': 'Промышленное решение для измельчения в компактных размерах',
        'Hidrolik İtici': 'Гидравлический толкатель',
        'Otomatik besleme ile sürekli ve düzenli parçalama performansı': 'Непрерывная подача с автоматической загрузкой',
        'Düşük Enerji Tüketimi': 'Низкое энергопотребление',
        'motor gücü ile ekonomik işletme maliyeti': 'мощность двигателя для экономичной эксплуатации',
        'Kolay Bakım': 'Простое обслуживание',
        'Modüler bıçak sistemi ile hızlı değişim ve minimum duruş süresi': 'Быстрая замена и минимальное время простоя благодаря модульной системе ножей',

        // Materials
        'ile Parçalanabilir Malzemeler': 'Измельчаемые материалы',
        'Plastik Takoz &amp; Blok': 'Пластиковые блоки',
        'Plastik Takoz & Blok': 'Пластиковые блоки',
        'Üretim Fireleri': 'Производственные отходы',
        'Kağıt Bobinleri': 'Бумажные рулоны',
        'Karton Atıklar': 'Картонные отходы',
        'İnce Kablolar': 'Тонкие кабели',
        'Tekstil Parçaları': 'Текстильные изделия',
        'Plastik Kasalar': 'Пластиковые ящики',
        'Ambalaj Malzemeleri': 'Упаковочные материалы',

        // Application areas
        'kompakt yapısı sayesinde özellikle küçük ve orta ölçekli işletmelerde tercih edilmektedir': 'благодаря компактной конструкции предпочитается малыми и средними предприятиями',
        'Aşağıda başlıca kullanım alanları yer almaktadır': 'Ниже приведены основные области применения',
        'Plastik Üretim Tesisleri': 'Предприятия по производству пластика',
        'Enjeksiyon ve ekstrüzyon üretim hatlarında oluşan firelerin yerinde imhası': 'Уничтожение отходов на линиях литья и экструзии',
        'Plastik takoz ve': 'Пластиковые блоки и',
        'blokların granül boyutuna indirgenmesi': 'измельчение до гранул',
        'Matbaa &amp; Ambalaj': 'Типография и упаковка',
        'Matbaa & Ambalaj': 'Типография и упаковка',
        'Kağıt bobinleri, karton kutular ve baskı atıklarının parçalanarak geri dönüşüme hazır hale': 'Измельчение бумажных рулонов, картонных коробок и печатных отходов для',
        'getirilmesi': 'переработки',
        'Tekstil Atölyeleri': 'Текстильные мастерские',
        'Kumaş parçaları, iplik atıkları ve tekstil firelerinin elyaf formuna dönüştürülmesi': 'Преобразование тканей и текстильных отходов в волокно',
        'Küçük Geri Dönüşüm Tesisleri': 'Малые перерабатывающие предприятия',
        'Sınırlı alanda çalışan geri dönüşüm tesisleri için ideal başlangıç makinesi': 'Идеальная стартовая машина для предприятий с ограниченным пространством',

        // Advantages
        'Avantajları': 'Преимущества',
        'Küçük alanlara kolay yerleşim': 'Легкая установка в небольших помещениях',
        'Tek operatör ile kullanım': 'Управление одним оператором',
        'Düşük işletme': 'Низкие эксплуатационные',
        'maliyeti': 'расходы',
        'Hızlı kurulum ve devreye alma': 'Быстрая установка и ввод в эксплуатацию',
        'Minimum bakım gereksinimi': 'Минимальное обслуживание',

        // Technical details
        'Hidrolik İtici (Hydraulic Ram)': 'Гидравлический толкатель',
        'Malzemeyi rotora iterek sürekli ve düzenli besleme sağlar': 'Обеспечивает непрерывную подачу материала к ротору',
        'Operatör müdahalesine gerek': 'Без вмешательства оператора',
        'kalmadan otomatik çalışır': 'работает автоматически',
        'Akıllı PLC &amp; Otomatik Geri Dönüş (Auto-Reverse)': 'Умный ПЛК и авто-реверс',
        'Akıllı PLC & Otomatik Geri Dönüş (Auto-Reverse)': 'Умный ПЛК и авто-реверс',
        'Aşırı yükte rotor otomatik olarak geri döner, bıçakları korur ve malzeme sıkışmasını': 'Ротор автоматически реверсирует при перегрузке, защищает ножи и предотвращает',
        'önler': 'заклинивание',
        'Değiştirilebilir Elek (Screen)': 'Сменное сито',
        'İstenilen granül boyutuna göre kolayca değişen elek sistemi': 'Сито легко меняется в зависимости от нужного размера гранул',
        'arası': 'диапазон',
        'seçenekler': 'варианты',
        'Hardox Bıçaklar': 'Ножи Hardox',
        'adet yüksek aşınma dirençli Hardox 500 çelik kesici uç': 'износостойких ножей Hardox 500',
        'Uzun ömürlü ve': 'Долговечные и',
        'değiştirilebilir': 'сменные',

        // Standard equipment
        'Standart Donanım': 'Стандартное оборудование',
        'Gövde Malzemesi': 'Материал корпуса',
        'St-52 Çelik': 'Сталь St-52',
        'Bıçak Malzemesi': 'Материал ножей',
        'Tahrik Sistemi': 'Привод',
        'Redüktörlü Motor': 'Мотор-редуктор',
        'Hidrolik Ünite': 'Гидроблок',
        'Dahili': 'Встроенный',

        // Optional features
        'Opsiyonel Özellikler': 'Дополнительные опции',
        'PLC Kontrol': 'ПЛК управление',
        'HMI Panel': 'HMI Панель',
        'Dokunmatik': 'Сенсорный',
        'Uzaktan İzleme': 'Удаленный мониторинг',
        'IoT Modülü': 'IoT Модуль',
        'Çıkış Konveyörü': 'Выходной конвейер',
        'Opsiyonel': 'Опционально',

        // Spec labels
        'Motor Gücü': 'Мощность двигателя',
        'Rotor Çapı': 'Диаметр ротора',
        'Rotor Uzunluğu': 'Длина ротора',
        'Kapasite': 'Производительность',
        'Bıçak Sayısı': 'Количество ножей',
        'Besleme Ağzı': 'Загрузочное отверстие',
        'Makine Ağırlığı': 'Вес машины',
        'Ağırlık': 'Вес',
        'Adet': 'шт.',

        // Note section
        'Not': 'Примечание',
        'Kapasite değerleri malzeme türüne, boyutuna ve yoğunluğuna göre değişiklik gösterebilir': 'Производительность может варьироваться в зависимости от типа, размера и плотности материала',
        'Projenize': 'Для вашего проекта',
        'özel teknik detaylar için satış ekibimizle iletişime geçiniz': 'свяжитесь с нашим отделом продаж для получения технических деталей',

        // References
        "Türkiye'nin ve dünyanın önde gelen kurum ve kuruluşları MT Makina'yı tercih ediyor": "Ведущие организации Турции и мира выбирают MT Makina",
        '40+ Referans': '40+ Клиентов',
        'Güvenilir Çözüm Ortağınız': 'Ваш надежный партнер',
        '20 yılı aşkın tecrübemizle kamu kurumları, özel sektör ve uluslararası firmalar için endüstriyel': 'С более чем 20-летним опытом предоставляем промышленные решения для государственных учреждений и компаний',
        'parçalama çözümleri sunuyoruz': 'решения для измельчения',

        // Dimensions
        'Boyutları': 'Размеры',
        'Toplam Uzunluk (A)': 'Общая длина (A)',
        'Toplam Genişlik (B)': 'Общая ширина (B)',
        'Toplam Yükseklik (C)': 'Общая высота (C)',

        // Contact section
        'Bizimle İletişime Geçin': 'Свяжитесь с нами',
        'ADRES': 'АДРЕС',
        'Kat: 7 D: 85 - 86, PK.: 34512 Esenyurt / İSTANBUL': 'Этаж: 7 D: 85-86, 34512 Esenyurt / СТАМБУЛ',
        'GENEL MERKEZ': 'ГЛАВНЫЙ ОФИС',
        'SATIŞ': 'ПРОДАЖИ',
        'E-POSTA': 'ЭЛ. ПОЧТА',
        'Ücretsiz Keşif': 'Бесплатный осмотр',
        'İhtiyaçlarınıza uygun çözüm için ücretsiz keşif hizmetimizden': 'Воспользуйтесь нашим бесплатным осмотром для',
        'yararlanın': 'подбора решения под ваши нужды',

        // HTML comments
        'SAYFA 1: KAPAK': 'СТРАНИЦА 1: ОБЛОЖКА',
        'SAYFA 2: ÜRÜN TANITIMI': 'СТРАНИЦА 2: ОПИСАНИЕ',
        'SAYFA 3: UYGULAMA ALANLARI': 'СТРАНИЦА 3: ПРИМЕНЕНИЕ',
        'SAYFA 4: TEKNİK DETAYLAR': 'СТРАНИЦА 4: ТЕХНИЧЕСКАЯ ИНФОРМАЦИЯ',
        'SAYFA 5: TEKNİK KİMLİK KARTI (SPEC SHEET)': 'СТРАНИЦА 5: ХАРАКТЕРИСТИКИ',
        'SAYFA 6: REFERANSLARIMIZ': 'СТРАНИЦА 6: НАШИ КЛИЕНТЫ',
        'SAYFA 7: BOYUTLAR & İLETİŞİM': 'СТРАНИЦА 7: РАЗМЕРЫ И КОНТАКТЫ',
        'Firma Logosu': 'Логотип компании',
        'Satır': 'Ряд',
        'Detay Görsel': 'Детальное изображение',
        'Genel Görünüm': 'Общий вид',
        'Teknik Detay': 'Технические детали',
        'Uygulama': 'Применение',
        'Boyut Görseli': 'Изображение размеров',
    },

    ar: {
        // HTML lang attribute and direction
        'lang="tr"': 'lang="ar" dir="rtl"',

        // Title tag
        'TSH-60 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu': 'TSH-60 آلة تمزيق ذات عمود واحد | كتالوج MT Makina',
        'TSH-80 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu': 'TSH-80 آلة تمزيق ذات عمود واحد | كتالوج MT Makina',
        'TSH-100 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu': 'TSH-100 آلة تمزيق ذات عمود واحد | كتالوج MT Makina',
        'TSH-130 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu': 'TSH-130 آلة تمزيق ذات عمود واحد | كتالوج MT Makina',
        'TSH-160 Tek Şaftlı Parçalama Makinesi | MT Makina Ürün Kataloğu': 'TSH-160 آلة تمزيق ذات عمود واحد | كتالوج MT Makina',

        // Cover page
        'Tek Şaftlı Parçalama Makinesi': 'آلة تمزيق ذات عمود واحد',
        'Single Shaft Shredder</p>': '</p>',
        'ÜRÜN KATALOĞU': 'كتالوج المنتج',
        'Kompakt Güç, Yüksek Verim': 'قوة مدمجة، كفاءة عالية',

        // Section headers
        'Ürün Tanıtımı': 'وصف المنتج',
        'Uygulama Alanları': 'مجالات التطبيق',
        'Teknik Detaylar': 'التفاصيل الفنية',
        'Teknik Kimlik Kartı': 'المواصفات الفنية',
        'Referanslarımız': 'مراجعنا',
        'Boyutlar ve İletişim': 'الأبعاد والاتصال',
        'Detaylı Teknik Özellikler': 'المواصفات الفنية المفصلة',

        // Product intro
        'serinin en kompakt ve seri modelidir': 'هو النموذج الأكثر إحكاما وكفاءة في السلسلة',
        'Özellikle küçük': 'خاصة للشركات',
        've orta ölçekli işletmelerde plastik takoz, üretim firesi ve kağıt atıkların yerinde imhası için': 'الصغيرة والمتوسطة لإتلاف الكتل البلاستيكية ونفايات الإنتاج والورق',
        'tasarlanmıştır': 'مصمم',
        'Enerji tasarrufu sağlayan hidrolik itici (Hydraulic Ram) sistemi ve dayanıklı rotor': 'نظام الدفع الهيدروليكي الموفر للطاقة والدوار المتين',
        'yapısı ile kesintisiz çalışma performansı sunar': 'يوفران أداء تشغيل مستمر',

        // Why section
        'Neden TSH-60?': 'لماذا TSH-60؟',
        'Neden TSH-80?': 'لماذا TSH-80؟',
        'Neden TSH-100?': 'لماذا TSH-100؟',
        'Neden TSH-130?': 'لماذا TSH-130؟',
        'Neden TSH-160?': 'لماذا TSH-160؟',
        'Kompakt boyutları sayesinde sınırlı alanlara kolayca yerleşir': 'بفضل أبعاده المدمجة، يمكن تركيبه بسهولة في المساحات المحدودة',
        'Düşük enerji tüketimi ile işletme': 'استهلاك منخفض للطاقة يقلل من تكاليف',
        'maliyetlerini minimize eder': 'التشغيل',
        'Tek operatör ile kullanılabilir, bakım ve temizliği kolaydır': 'يمكن تشغيله بواسطة مشغل واحد، صيانة وتنظيف سهل',
        'Küçük': 'صغير',
        'tesisler için ideal başlangıç makinesidir': 'آلة بداية مثالية للمنشآت',

        // Feature boxes
        'Kompakt Tasarım': 'تصميم مدمج',
        'Küçük alanlara sığan, taşınabilir boyutlarda endüstriyel parçalama çözümü': 'حل تمزيق صناعي بأبعاد محمولة يناسب المساحات الصغيرة',
        'Hidrolik İtici': 'دافع هيدروليكي',
        'Otomatik besleme ile sürekli ve düzenli parçalama performansı': 'أداء تمزيق مستمر ومنتظم مع التغذية التلقائية',
        'Düşük Enerji Tüketimi': 'استهلاك منخفض للطاقة',
        'motor gücü ile ekonomik işletme maliyeti': 'قوة المحرك لتكاليف تشغيل اقتصادية',
        'Kolay Bakım': 'صيانة سهلة',
        'Modüler bıçak sistemi ile hızlı değişim ve minimum duruş süresi': 'تغيير سريع ووقت توقف أدنى مع نظام الشفرات المعياري',

        // Materials
        'ile Parçalanabilir Malzemeler': 'المواد القابلة للتمزيق',
        'Plastik Takoz &amp; Blok': 'الكتل البلاستيكية',
        'Plastik Takoz & Blok': 'الكتل البلاستيكية',
        'Üretim Fireleri': 'نفايات الإنتاج',
        'Kağıt Bobinleri': 'لفات الورق',
        'Karton Atıklar': 'نفايات الكرتون',
        'İnce Kablolar': 'الكابلات الرقيقة',
        'Tekstil Parçaları': 'قطع النسيج',
        'Plastik Kasalar': 'الصناديق البلاستيكية',
        'Ambalaj Malzemeleri': 'مواد التعبئة',

        // Application areas
        'kompakt yapısı sayesinde özellikle küçük ve orta ölçekli işletmelerde tercih edilmektedir': 'مفضل خاصة في الشركات الصغيرة والمتوسطة بفضل هيكله المدمج',
        'Aşağıda başlıca kullanım alanları yer almaktadır': 'فيما يلي مجالات الاستخدام الرئيسية',
        'Plastik Üretim Tesisleri': 'مصانع إنتاج البلاستيك',
        'Enjeksiyon ve ekstrüzyon üretim hatlarında oluşan firelerin yerinde imhası': 'إتلاف النفايات في خطوط إنتاج الحقن والبثق',
        'Plastik takoz ve': 'الكتل البلاستيكية و',
        'blokların granül boyutuna indirgenmesi': 'تحويل الكتل إلى حبيبات',
        'Matbaa &amp; Ambalaj': 'الطباعة والتعبئة',
        'Matbaa & Ambalaj': 'الطباعة والتعبئة',
        'Kağıt bobinleri, karton kutular ve baskı atıklarının parçalanarak geri dönüşüme hazır hale': 'تمزيق لفات الورق والكراتين ونفايات الطباعة للتحضير',
        'getirilmesi': 'لإعادة التدوير',
        'Tekstil Atölyeleri': 'ورش النسيج',
        'Kumaş parçaları, iplik atıkları ve tekstil firelerinin elyaf formuna dönüştürülmesi': 'تحويل قطع القماش ونفايات الخيوط إلى ألياف',
        'Küçük Geri Dönüşüm Tesisleri': 'مرافق إعادة التدوير الصغيرة',
        'Sınırlı alanda çalışan geri dönüşüm tesisleri için ideal başlangıç makinesi': 'آلة بداية مثالية لمرافق إعادة التدوير في المساحات المحدودة',

        // Advantages
        'Avantajları': 'المزايا',
        'Küçük alanlara kolay yerleşim': 'تركيب سهل في المساحات الصغيرة',
        'Tek operatör ile kullanım': 'تشغيل بواسطة مشغل واحد',
        'Düşük işletme': 'تكاليف تشغيل',
        'maliyeti': 'منخفضة',
        'Hızlı kurulum ve devreye alma': 'تركيب وتشغيل سريع',
        'Minimum bakım gereksinimi': 'الحد الأدنى من الصيانة',

        // Technical details
        'Hidrolik İtici (Hydraulic Ram)': 'الدافع الهيدروليكي',
        'Malzemeyi rotora iterek sürekli ve düzenli besleme sağlar': 'يوفر تغذية مستمرة ومنتظمة بدفع المواد إلى الدوار',
        'Operatör müdahalesine gerek': 'لا يحتاج تدخل المشغل',
        'kalmadan otomatik çalışır': 'يعمل تلقائياً',
        'Akıllı PLC &amp; Otomatik Geri Dönüş (Auto-Reverse)': 'PLC ذكي والعكس التلقائي',
        'Akıllı PLC & Otomatik Geri Dönüş (Auto-Reverse)': 'PLC ذكي والعكس التلقائي',
        'Aşırı yükte rotor otomatik olarak geri döner, bıçakları korur ve malzeme sıkışmasını': 'الدوار يعكس تلقائياً عند الحمل الزائد، يحمي الشفرات ويمنع',
        'önler': 'الانحشار',
        'Değiştirilebilir Elek (Screen)': 'غربال قابل للاستبدال',
        'İstenilen granül boyutuna göre kolayca değişen elek sistemi': 'نظام غربال يمكن تغييره بسهولة حسب حجم الحبيبات المطلوب',
        'arası': 'نطاق',
        'seçenekler': 'خيارات',
        'Hardox Bıçaklar': 'شفرات Hardox',
        'adet yüksek aşınma dirençli Hardox 500 çelik kesici uç': 'رؤوس قطع فولاذية Hardox 500 عالية المقاومة للتآكل',
        'Uzun ömürlü ve': 'طويلة العمر و',
        'değiştirilebilir': 'قابلة للاستبدال',

        // Standard equipment
        'Standart Donanım': 'المعدات القياسية',
        'Gövde Malzemesi': 'مادة الهيكل',
        'St-52 Çelik': 'فولاذ St-52',
        'Bıçak Malzemesi': 'مادة الشفرات',
        'Tahrik Sistemi': 'نظام الدفع',
        'Redüktörlü Motor': 'محرك مع مخفض',
        'Hidrolik Ünite': 'الوحدة الهيدروليكية',
        'Dahili': 'مدمج',

        // Optional features
        'Opsiyonel Özellikler': 'الميزات الاختيارية',
        'PLC Kontrol': 'تحكم PLC',
        'HMI Panel': 'لوحة HMI',
        'Dokunmatik': 'شاشة لمس',
        'Uzaktan İzleme': 'المراقبة عن بعد',
        'IoT Modülü': 'وحدة IoT',
        'Çıkış Konveyörü': 'ناقل الخروج',
        'Opsiyonel': 'اختياري',

        // Spec labels
        'Motor Gücü': 'قوة المحرك',
        'Rotor Çapı': 'قطر الدوار',
        'Rotor Uzunluğu': 'طول الدوار',
        'Kapasite': 'السعة',
        'Bıçak Sayısı': 'عدد الشفرات',
        'Besleme Ağzı': 'فتحة التغذية',
        'Makine Ağırlığı': 'وزن الآلة',
        'Ağırlık': 'الوزن',
        'Adet': 'قطعة',

        // Note section
        'Not': 'ملاحظة',
        'Kapasite değerleri malzeme türüne, boyutuna ve yoğunluğuna göre değişiklik gösterebilir': 'قد تختلف قيم السعة حسب نوع المادة وحجمها وكثافتها',
        'Projenize': 'لمشروعك',
        'özel teknik detaylar için satış ekibimizle iletişime geçiniz': 'يرجى الاتصال بفريق المبيعات للحصول على التفاصيل الفنية',

        // References
        "Türkiye'nin ve dünyanın önde gelen kurum ve kuruluşları MT Makina'yı tercih ediyor": "المؤسسات الرائدة في تركيا والعالم تختار MT Makina",
        '40+ Referans': '40+ عميل',
        'Güvenilir Çözüm Ortağınız': 'شريكك الموثوق',
        '20 yılı aşkın tecrübemizle kamu kurumları, özel sektör ve uluslararası firmalar için endüstriyel': 'مع أكثر من 20 عاماً من الخبرة نقدم حلولاً صناعية للمؤسسات الحكومية والقطاع الخاص',
        'parçalama çözümleri sunuyoruz': 'حلول التمزيق',

        // Dimensions
        'Boyutları': 'الأبعاد',
        'Toplam Uzunluk (A)': 'الطول الكلي (A)',
        'Toplam Genişlik (B)': 'العرض الكلي (B)',
        'Toplam Yükseklik (C)': 'الارتفاع الكلي (C)',

        // Contact section
        'Bizimle İletişime Geçin': 'اتصل بنا',
        'ADRES': 'العنوان',
        'Kat: 7 D: 85 - 86, PK.: 34512 Esenyurt / İSTANBUL': 'الطابق: 7 D: 85-86، 34512 Esenyurt / اسطنبول',
        'GENEL MERKEZ': 'المقر الرئيسي',
        'SATIŞ': 'المبيعات',
        'E-POSTA': 'البريد الإلكتروني',
        'Ücretsiz Keşif': 'فحص مجاني',
        'İhtiyaçlarınıza uygun çözüm için ücretsiz keşif hizmetimizden': 'استفد من خدمة الفحص المجاني للحصول على',
        'yararlanın': 'حل يناسب احتياجاتك',

        // HTML comments
        'SAYFA 1: KAPAK': 'صفحة 1: الغلاف',
        'SAYFA 2: ÜRÜN TANITIMI': 'صفحة 2: وصف المنتج',
        'SAYFA 3: UYGULAMA ALANLARI': 'صفحة 3: مجالات التطبيق',
        'SAYFA 4: TEKNİK DETAYLAR': 'صفحة 4: التفاصيل الفنية',
        'SAYFA 5: TEKNİK KİMLİK KARTI (SPEC SHEET)': 'صفحة 5: المواصفات',
        'SAYFA 6: REFERANSLARIMIZ': 'صفحة 6: عملاؤنا',
        'SAYFA 7: BOYUTLAR & İLETİŞİM': 'صفحة 7: الأبعاد والاتصال',
        'Firma Logosu': 'شعار الشركة',
        'Satır': 'صف',
        'Detay Görsel': 'صورة تفصيلية',
        'Genel Görünüm': 'منظر عام',
        'Teknik Detay': 'تفاصيل فنية',
        'Uygulama': 'تطبيق',
        'Boyut Görseli': 'صورة الأبعاد',
    }
};

function translateCatalog(sourceFile: string, targetLang: 'en' | 'ru' | 'ar'): void {
    let content = fs.readFileSync(sourceFile, 'utf-8');

    // Normalize line endings and spaces for better matching
    // content = content.replace(/\r\n/g, '\n');

    // Apply translations - sort by length (longer first) to avoid partial replacements
    const langTranslations = translations[targetLang];
    const sortedKeys = Object.keys(langTranslations).sort((a, b) => b.length - a.length);

    for (const turkish of sortedKeys) {
        const translation = langTranslations[turkish as keyof typeof langTranslations];
        // Use global replace for all occurrences
        content = content.split(turkish).join(translation);
    }

    // Generate target filename
    const dir = path.dirname(sourceFile);
    const targetFile = path.join(dir, `catalog-${targetLang}.html`);

    fs.writeFileSync(targetFile, content, 'utf-8');
    console.log(`✅ Created: ${path.basename(dir)}/${path.basename(targetFile)}`);
}

// Main execution
async function main() {
    const catalogDir = path.join(__dirname, '..', 'public', 'catalogs', 'tsh');
    const models = ['tsh-60', 'tsh-80', 'tsh-100', 'tsh-130', 'tsh-160'];
    const languages: Array<'en' | 'ru' | 'ar'> = ['en', 'ru', 'ar'];

    console.log('🌍 Translating catalogs v2...\n');

    for (const model of models) {
        const sourceFile = path.join(catalogDir, model, 'catalog.html');
        if (fs.existsSync(sourceFile)) {
            console.log(`📄 Processing ${model.toUpperCase()}...`);
            for (const lang of languages) {
                translateCatalog(sourceFile, lang);
            }
            console.log('');
        } else {
            console.log(`⚠️ Source file not found: ${sourceFile}`);
        }
    }

    console.log('✅ All catalogs translated!');
}

main().catch(console.error);
