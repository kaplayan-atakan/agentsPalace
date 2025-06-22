# Marka İsmi Yazım Değişikliği Önerisi

**Tarih:** 22 Haziran 2025  
**Durum:** Önerildi  
**Yazan:** GitHub Copilot  
**İlgili PR Numarası:** TBD  

## Özet

Bu öneride, şirket marka isminin yazım şeklinin "AgentsPalace" formundan "Agent Palace" formuna değiştirilmesi ele alınacaktır. Bu değişiklik 22 Haziran 2025 tarihinde resmi olarak kararlaştırılmıştır.

## Değişikliğin Amacı

Marka isminin "Agent Palace" olarak yazımına geçişin temel amaçları şunlardır:

1. **Okunabilirlik:** İki kelimenin ayrı yazılması, markanın daha kolay okunmasını sağlayacaktır.
2. **Anlaşılırlık:** Birleşik yazımdaki belirsizlik giderilerek, marka adının anlaşılması kolaylaştırılacaktır.
3. **Marka Algısı:** "Agent Palace" formu, kullanıcılara daha profesyonel ve olgun bir marka imajı sunmaktadır.
4. **Global Erişim:** Uluslararası pazarlarda markayı daha erişilebilir hale getirecektir.

## Etkilenen Alanlar

Bu değişiklik aşağıdaki alanları etkileyecektir:

### Kod Tabanı
- Tüm görünür metin içeren komponentler (Hero, Footer, vb.)
- Sayfa başlıkları ve meta açıklamaları
- Kullanıcı arayüzünde görünen tüm marka referansları

### Dokümantasyon
- README.md
- docs/ klasöründeki tüm dokümanlar
- Changelog ve development-history.md
- Üretim kontrol listeleri ve talimatlar

### Mimari Diyagramlar
- Sistem mimarisi diyagramları
- Marka ağacı diyagramı
- Komponent diyagramları
- Veri akış diyagramları
- Deployment diyagramları

### Değişmeyecek Alanlar
- Alt modül teknik isimleri (AgentsFlow, AgentsTask, vb.)
- Teknik fonksiyon ve komponent isimleri
- Dosya ve klasör yapıları
- Logo, favicon ve diğer görsel öğeler

## İşlem Planı

Marka ismi değişikliği aşağıdaki adımlarla uygulanacaktır:

1. **Proposal Onayı:** Bu önerinin gerekli paydaşlar tarafından onaylanması.

2. **Kod Tabanı Güncellemesi:**
   - `landing-page/src/components/` altındaki tüm komponentlerde görünür metin değişiklikleri
   - `landing-page/src/app/` altındaki sayfa ve layout dosyaları
   - Metadata güncellemeleri (`layout.tsx`)

3. **Dokümantasyon Güncellemesi:**
   - README.md dosyasının güncellenmesi
   - docs/ klasöründeki tüm dokümanların güncellenmesi
   - Yeni bir ADR oluşturulması: `docs/adr/0003-brand-name-standardization.md`
   - development-history.md'ye değişiklik kaydının eklenmesi
   - changelog.md'ye değişiklik kaydının eklenmesi

4. **Mimari Diyagram Güncellemeleri:**
   - Marka ağacının "everything agent (şirket) → Agent Palace (ana platform)" şeklinde güncellenmesi
   - Diğer diyagramlardaki marka referanslarının güncellenmesi

5. **Test ve Kontrol:**
   - Görsel kontroller
   - Fonksiyon testleri
   - Dokümantasyon tutarlılık kontrolleri

6. **Deploy ve Takip:**
   - Değişikliklerin produktion ortamına yayınlanması
   - Geri bildirimlerin toplanması ve gerekirse düzeltmelerin yapılması

## Alt Modül Tutarlılığı

Alt modül isimleri "AgentsFlow", "AgentsTask" vb. şekilde teknik olarak değişmeden kalacak, ancak kullanıcı arayüzünde ve dokümantasyonda şu şekilde referans edilecektir:

- "Agent Palace Flow" (AgentsFlow teknik modülü için)
- "Agent Palace Task" (AgentsTask teknik modülü için)

## Zaman Çizelgesi

- **22 Haziran 2025:** Marka ismi değişikliği kararı alındı
- **22-23 Haziran 2025:** Değişiklik önerisi hazırlandı ve onaya sunuldu
- **Onayı takiben ~1-2 gün:** Tüm kod tabanı ve dokümantasyon güncellemeleri
- **Güncellemeleri takiben ~1 gün:** Test ve kontroller
- **Testleri takiben ~1 gün:** Değişikliklerin produktion ortamına yayınlanması

## Riskler ve Azaltma Stratejileri

1. **SEO Etkisi:** Marka ismi değişikliği SEO performansını etkileyebilir. Eski formdan yeni forma yönlendirmeler ile bu risk azaltılacaktır.

2. **Kullanıcı Kafa Karışıklığı:** Kullanıcılar değişiklik konusunda bilgilendirilecek ve geçiş dönemi boyunca her iki isim de kabul edilecektir.

3. **Teknik Karmaşıklık:** Teknik isimlerin değişmemesi, kodun işlevselliğini koruyacak ancak görünür metinlerin tutarlılığını sağlamak için detaylı kontroller yapılacaktır.

## Onay

Bu önerinin onaylanması durumunda, yukarıda belirtilen plan doğrultusunda gerekli değişiklikler uygulanmaya başlanacaktır.

---

**Not:** Bu öneri dokümanı sadece bir taslaktır ve gerektiğinde güncellenebilir.
