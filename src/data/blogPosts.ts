
export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    summary: string;
    content: string; // HTML content
    date: string;
    author: string;
    image: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'tibbi-atik-imhasinda-dikkat-edilmesi-gerekenler',
        title: 'Tıbbi Atık İmhasında Dikkat Edilmesi Gerekenler',
        summary: 'Hastaneler ve sağlık kuruluşları için tıbbi atık yönetimi ve güvenli imha süreçleri hakkında kapsamlı rehber.',
        date: '2025-12-08',
        author: 'MT Makina Mühendislik Ekibi',
        image: 'https://images.unsplash.com/photo-1584036561566-b45238f2e121?auto=format&fit=crop&q=80&w=1000',
        tags: ['Tıbbi Atık', 'Atık Yönetimi', 'İmha Fırını', 'Çevre Güvenliği'],
        content: `
      <h1>Tıbbi Atık İmhasında Dikkat Edilmesi Gerekenler</h1>
      <p>Sağlık kuruluşlarında ortaya çıkan atıkların yönetimi, hem halk sağlığı hem de çevre güvenliği açısından kritik bir öneme sahiptir. Tıbbi atıklar, enfeksiyöz risk taşıyan materyallerden kesici-delici aletlere kadar geniş bir yelpazeyi kapsar. Bu yazımızda, tıbbi atıkların güvenli bir şekilde nasıl imha edilmesi gerektiğini ve <strong>MT Makina</strong> olarak sunduğumuz çözümleri inceleyeceğiz.</p>

      <h2>Tıbbi Atık Nedir ve Neden Tehlikelidir?</h2>
      <p>Tıbbi atıklar; hastaneler, klinikler, laboratuvarlar ve diğer sağlık merkezlerinden kaynaklanan, insan sağlığına doğrudan tehdit oluşturabilecek atıklardır. Bu atıklar doğru yönetilmezse:</p>
      <ul>
        <li>Hastalıkların yayılmasına neden olabilir (Hepatit, HIV vb.).</li>
        <li>Toprak ve yeraltı sularını kirletebilir.</li>
        <li>Çöp toplayıcıları ve toplum için yaralanma riski oluşturur.</li>
      </ul>

      <h2>Güvenli İmha Yöntemleri: Yakma (İnsinerasyon)</h2>
      <p>Tıbbi atıkların bertaraf edilmesinde en etkili ve yaygın yöntemlerden biri <strong>yakma (insinerasyon)</strong> işlemidir. Yüksek sıcaklıklarda gerçekleştirilen bu işlem, atıkların hacmini %90-95 oranında azaltırken, zararlı mikroorganizmaları da tamamen yok eder.</p>

      <p>MT Makina olarak ürettiğimiz <a href="/tr/mobil-atik-yakma-firini" class="text-blue-600 hover:underline">Mobil Atık Yakma Fırınları</a>, özellikle yerinde imha gerektiren durumlar için idealdir. Bu sistemler, atıkları kaynağında yok ederek taşıma sırasındaki riskleri minimize eder.</p>

      <h2>Tıbbi Atık Yönetiminde Temel Adımlar</h2>
      <ol>
        <li><strong>Ayrıştırma:</strong> Atıklar kaynağında türlerine göre (evsel, tıbbi, tehlikeli) ayrıştırılmalıdır.</li>
        <li><strong>Paketleme:</strong> Tıbbi atıklar, sızdırmaz ve yırtılmaya dayanıklı kırmızı torbalarda toplanmalıdır. Kesici aletler ise delinmeye dayanıklı kutulara konulmalıdır.</li>
        <li><strong>Depolama:</strong> Atıklar, nihai imha işlemine kadar geçici depolama alanlarında (+4°C) bekletilmelidir.</li>
        <li><strong>İmha:</strong> Atıklar, lisanslı tesislerde veya mobil yakma ünitelerinde yüksek sıcaklıkta bertaraf edilmelidir.</li>
      </ol>

      <p>Daha büyük ölçekli tesisler için, atıkların ön işlemden geçirilmesi gerekebilir. Bu noktada <a href="/tr/urunler/single-shaft" class="text-blue-600 hover:underline">Tek Şaftlı Parçalama Makinelerimiz</a> devreye girerek atıkların boyutunu küçültür ve yakma işleminin verimini artırır.</p>

      <h2>Neden MT Makina Çözümlerini Tercih Etmelisiniz?</h2>
      <p>20 yılı aşkın tecrübemizle, sağlık sektörünün ihtiyaçlarına uygun, CE sertifikalı ve çevre mevzuatına tam uyumlu imha sistemleri üretiyoruz. Mobil ve sabit tip yakma fırınlarımız, emisyon standartlarını karşılayan filtre sistemleriyle donatılmıştır.</p>

      <p>Tıbbi atık yönetimi projeniz için profesyonel bir çözüm arıyorsanız, <a href="/tr/iletisim" class="text-blue-600 hover:underline">bizimle iletişime geçebilirsiniz</a>.</p>
    `
    },
    {
        id: '2',
        slug: 'cift-saftli-parcalama-makinesi-hangi-atiklar-icin-uygundur',
        title: 'Çift Şaftlı Parçalama Makinesi Hangi Atıklar İçin Uygundur?',
        summary: 'Endüstriyel atıkların hacmini küçültmek için kullanılan çift şaftlı parçalama makinelerinin (shredder) kullanım alanları ve avantajları.',
        date: '2025-12-07',
        author: 'MT Makina Teknik Servis',
        image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000',
        tags: ['Shredder', 'Geri Dönüşüm', 'Çift Şaftlı', 'Endüstriyel Makine'],
        content: `
      <h1>Çift Şaftlı Parçalama Makinesi Hangi Atıklar İçin Uygundur?</h1>
      <p>Endüstriyel geri dönüşüm sektörünün vazgeçilmezi olan <strong>Çift Şaftlı Parçalama Makineleri (Double Shaft Shredders)</strong>, yüksek torklu ve düşük devirli çalışma prensibiyle en zorlu atıkları bile kolayca parçalayabilir. "Parçalayıcı" veya "Shredder" olarak da bilinen bu makineler, atık hacmini küçültmek ve geri dönüşüm sürecini hazırlamak için kullanılır.</p>

      <h2>Çalışma Prensibi</h2>
      <p>Çift şaftlı makineler, birbirine doğru dönen iki bıçaklı şaft sayesinde malzemeyi yakalar, keser ve parçalar. Bu mekanizma, malzemenin makine içinde sıkışmasını önler ve sürekli bir akış sağlar. MT Makina'nın <a href="/tr/urunler/dual-shaft" class="text-blue-600 hover:underline">CS Serisi Çift Şaftlı Parçalama Makineleri</a>, özel alaşımlı bıçakları sayesinde uzun ömürlü kullanım sunar.</p>

      <h2>Hangi Atıklar Parçalanabilir?</h2>
      <p>Çift şaftlı shredderların kullanım alanı oldukça geniştir. İşte en yaygın kullanıldığı atık türleri:</p>

      <h3>1. Metal Atıklar</h3>
      <p>Sac levhalar, variller, beyaz eşyalar (buzdolabı, çamaşır makinesi), araba parçaları ve alüminyum profiller güçlü şaftlar arasında kolayca ezilerek parçalanır. <a href="/tr/urunler/metal" class="text-blue-600 hover:underline">Metal Parçalama</a> çözümlerimiz hakkında daha fazla bilgi alabilirsiniz.</p>

      <h3>2. Elektronik Atıklar (E-Atık)</h3>
      <p>Bilgisayar kasaları, <a href="/tr/urunler/harddisk" class="text-blue-600 hover:underline">sabit diskler (Harddisk)</a>, yazıcılar ve devre kartları, değerli metallerin geri kazanılması öncesinde boyut küçültme işlemine tabi tutulur.</p>

      <h3>3. Plastik ve Lastik</h3>
      <p>Büyük plastik bidonlar, borular, üretim fireleri ve <a href="/tr/atik-turleri/lastik-atiklari" class="text-blue-600 hover:underline">araba lastikleri</a>, çift şaftlı makinelerin yüksek torku sayesinde şeritler halinde parçalanır.</p>

      <h3>4. Ahşap ve Palet</h3>
      <p>Kullanım ömrünü tamamlamış ahşap paletler, mobilya atıkları ve ağaç kütükleri, biyokütle tesisleri için yakıt haline getirilebilir veya sunta üretimi için hammaddeye dönüştürülebilir.</p>

      <h2>Avantajları Nelerdir?</h2>
      <ul>
        <li><strong>Yüksek Tork:</strong> Zorlu ve sert malzemelerde bile duraksamadan çalışır.</li>
        <li><strong>Düşük Gürültü ve Toz:</strong> Düşük devirde çalıştığı için çevreye daha az rahatsızlık verir.</li>
        <li><strong>Otomatik Geri Dönüş:</strong> Sıkışma anında otomatik olarak ters dönerek (reverse) sistemi korur.</li>
      </ul>

      <p>İşletmeniz için en uygun kapasiteyi belirlemek ve özel tasarım çift şaftlı parçalama makinelerimizi incelemek için <a href="/tr/iletisim" class="text-blue-600 hover:underline">satış ekibimizle iletişime geçin</a>.</p>
    `
    },
    {
        id: '3',
        slug: 'mobil-atik-yakma-firinlarinin-avantajlari-nelerdir',
        title: 'Mobil Atık Yakma Fırınlarının Avantajları Nelerdir?',
        summary: 'Afet bölgeleri, şantiyeler ve uzak tesisler için taşınabilir (mobil) atık yakma fırınlarının sağladığı operasyonel kolaylıklar.',
        date: '2025-12-05',
        author: 'MT Makina Ar-Ge',
        image: 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&q=80&w=1000',
        tags: ['Mobil Fırın', 'İnsineratör', 'Afet Yönetimi', 'Şantiye'],
        content: `
      <h1>Mobil Atık Yakma Fırınlarının Avantajları Nelerdir?</h1>
      <p>Atık yönetimi her zaman sabit tesislerde yapılmak zorunda değildir. Bazı durumlarda hizmeti atığın kaynağına götürmek çok daha verimli, ekonomik ve güvenlidir. İşte bu noktada <strong>Mobil Atık Yakma Fırınları</strong> devreye girer. Römork üzerine veya konteyner içine monte edilmiş bu sistemler, tam teşekküllü bir atık bertaraf tesisi gibi çalışır.</p>

      <h2>Mobil Fırınların Kullanım Alanları</h2>
      <ul>
        <li><strong>Afet Bölgeleri:</strong> Deprem, sel gibi doğal afetler sonrasında oluşan hijyen riski taşıyan atıkların acilen imha edilmesi gerekir.</li>
        <li><strong>Askeri Üsler ve Kamplar:</strong> Şehir merkezinden uzak bölgelerde kurulan geçici yaşam alanlarının atık yönetimi için idealdir.</li>
        <li><strong>Salgın Hastalık Dönemleri:</strong> Tıbbi atıkların hastaneden çıkarılmadan veya uzak mesafelere taşınmadan olduğu yerde imha edilmesini sağlar.</li>
        <li><strong>Petrol ve Maden Şantiyeleri:</strong> Lojistik imkanların kısıtlı olduğu uzak sahalarda atık sorununu çözer.</li>
      </ul>

      <h2>Temel Avantajlar</h2>

      <h3>1. Lojistik Maliyetlerini Sıfırlar</h3>
      <p>Atıkları lisanslı bir tesise taşımak yerine, tesisi atığın yanına getirirsiniz. Bu sayede taşıma maliyetlerinden ve taşıma sırasında oluşabilecek kaza risklerinden kurtulursunuz.</p>

      <h3>2. Hızlı Kurulum ve Devreye Alma</h3>
      <p>MT Makina'nın ürettiği mobil sistemler, "Tak-Çalıştır" mantığıyla tasarlanmıştır. Sahaya ulaştığında elektrik ve yakıt bağlantısı yapılarak dakikalar içinde çalışmaya hazır hale gelir.</p>

      <h3>3. Yasal Mevzuata Uyum</h3>
      <p>Sistemlerimiz, Çevre ve Şehircilik Bakanlığı'nın emisyon standartlarına uygun filtreleme sistemlerine sahiptir. Dumansız ve kokusuz çalışarak çevreye zarar vermez.</p>
      
      <h3>4. Entegre Çözümler</h3>
      <p>Mobil fırınlarımız, gerektiğinde bir <a href="/tr/urunler/mobile" class="text-blue-600 hover:underline">Mobil Parçalayıcı (Shredder)</a> ile entegre edilerek hibrit bir çözüm sunabilir. Önce parçalanan atıklar, daha hızlı ve verimli bir şekilde yakılabilir.</p>

      <p>MT Makina olarak, ihtiyacınıza özel kapasitelerde (50 kg/saat - 500 kg/saat) mobil atık yakma sistemleri tasarlıyoruz. Detaylı teknik özellikler ve fiyat teklifi için <a href="/tr/iletisim" class="text-blue-600 hover:underline">bize ulaşın</a>.</p>
    `
    }
];
