# ADR 0003: Marka İsmi Standartlaştırması

## Durum
Kabul edildi

## Bağlam
"AgentsPalace" olarak birleşik yazılan marka isminin "Agent Palace" olarak iki ayrı kelime şeklinde yazılmasının daha doğru olacağı değerlendirilmiştir. Bu değişiklik, markanın daha kolay okunmasını, anlaşılmasını ve global pazarlarda daha erişilebilir olmasını sağlayacaktır.

## Karar
Marka isminin "Agent Palace" olarak yazılmasına ve tüm kod tabanı, dokümantasyon ve görünür metinlerde bu standardın uygulanmasına karar verilmiştir. Bu karar 22 Haziran 2025 tarihinde alınmıştır.

## Sonuçlar
- Kod tabanında ve tüm görünür metinlerde "AgentsPalace" yerine "Agent Palace" kullanılacaktır.
- Teknik modül isimleri değişmeyecek (örn: AgentsFlow), ancak kullanıcı arayüzünde "Agent Palace Flow" olarak gösterilecektir.
- Bu değişiklik, kullanıcılar için daha tutarlı ve anlaşılır bir deneyim sunacaktır.
- Marka kimliği daha net ve profesyonel hale gelecektir.

## İlişkili Diğer ADR'ler
- ADR 0001: Next.js Framework Selection
- ADR 0002: TailwindCSS & Framer Motion Stack

## Uygulama Notları
- Bu değişiklik, tüm kod tabanında ve dokümantasyonda yapılacak search-and-replace işlemleri ile uygulanacaktır.
- Kullanıcı arayüzünde görünen yerler (components/, app/, metadata) önceliklendirilecektir.
- Alt modüller için UI gösterim şekli standardize edilecektir (AgentsFlow → Agent Palace Flow).

## Tarihçe
- 22.06.2025: Karar alındı ve onaylandı
- 22.06.2025: Marka ismi değişikliği önerisi oluşturuldu
- 23.06.2025: Uygulama başladı
