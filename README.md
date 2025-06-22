# AgentsPalace Landing Page & Product Suite - README

## Proje Vizyonu

**AgentsPalace**, modern yapay zeka ve otonom sistemler çağında, dağıtık ve çok dilli (Node.js, .NET, Python, Go) microservice mimarisiyle geliştirilen, tüm agent'ların merkezi yönetimini sağlayan bir "AI Agent Orchestration Hub"dır. Platform; gerçek zamanlı akışlar, koşullu yönlendirme, gelişmiş hata yönetimi ve ölçeklenebilirlik vaat eden, yatırımcı, geliştirici ve ilk kullanıcıları için yüksek potansiyel barındıran bir inovasyon merkezidir.

---

## Kapsam

- Ana Platform: **AgentsPalace**
- Modüller: AgentsFlow, AgentsTask, AgentsOps, AgentsMap, AgentsBrain, AgentsCore, AgentsVoice (isteğe bağlı)
- Sub-modüller: Modüller altında, işlev ve ihtiyaca özel Node.js öncelikli, fakat .NET, Python ve Go tabanlı geliştirilebilen Docker microservisleri
- Tek UI & Tek GitHub Reposu
- Microservice Architecture, Kafka Message Bus, Docker tabanlı runtime, JSON/YAML flow config, merkezi konfigürasyon sistemi

---

## Sloganlar

### Genel Platform
- **AgentsPalace:**  
  “Orchestrate the Future.”  
  “Where Agents Come Alive.”  
  “Your Central Command for Autonomous Systems.”

### Modül Bazlı Sloganlar
- **AgentsFlow:**  
  “Design. Trigger. Automate.”  
  “Flows That Think.”
- **AgentsTask:**  
  “Every Task, The Right Agent.”  
  “Delegate Anything.”
- **AgentsOps:**  
  “Zero Downtime, Maximum Insight.”  
  “Operate with Confidence.”
- **AgentsMap:**  
  “See Your Agents Move.”  
  “Geography Meets Intelligence.”
- **AgentsBrain:**  
  “Shared Memory. Smarter Agents.”
- **AgentsCore:**  
  “Secure, Extend, Control.”
- **AgentsVoice:**  
  “Talk to Your Agents.”

---

## Teknik Açıklamalar

### Genel Mimari
- Microservice tabanlı, Node.js öncelikli ama .NET, Python, Go agent/sub-modül desteği
- Her modül Docker container olarak izole ve bağımsız çalışır
- Mesajlaşma altyapısı için Kafka kullanılır
- Akış (flow) tanımları JSON/YAML ile, her adım için onSuccess/onError/onTimeout/if/retry/fallback özellikleriyle
- Tüm modüller tek bir modern UI paneliyle yönetilir
- Tek bir monorepo altında, ölçeklenebilir ve sürdürülebilir geliştirme akışı

### Modül Özeti
#### AgentsFlow
- Akış tabanlı otomasyon, koşullu yönlendirme, paralel/sıralı adımlar
- Görsel sürükle-bırak flow builder UI
#### AgentsTask
- Görev bazlı agent yönetimi, matchmaking, geri bildirim döngüsü
#### AgentsOps
- Agent health check, otomatik ölçekleme, izleme & rollback
#### AgentsMap
- Agent’ların harita/konum tabanlı görselleştirilmesi
#### AgentsBrain
- Vector DB ile bağlamsal hafıza & bilgi paylaşımı
#### AgentsCore
- Ortak altyapı, yetkilendirme, plugin desteği
#### AgentsVoice (opsiyonel)
- Sesli komut ve asistan entegrasyonu

---

## Görsel Yapı Önerileri

### 1. Ana Platform (AgentsPalace)
- **Mockup Dashboard:**  
  Ortada merkezi bir “Palace” (komuta merkezi) ikonuyla, etrafında modüller ve agent ikonları dairesel şekilde gösterilebilir.
- **Akış Diyagramı:**  
  Bir akış çizelgesi, farklı agent ikonlarıyla, success/error/timeout durumlarını gösteren renkli oklar.
- **Microservice Topolojisi:**  
  Her modülün ayrı Docker container olarak gösterildiği, aralarında Kafka ile bağlantı çizgileri olan mimari şema.

### 2. Modül Kartları
- Her modül için ayrı bir kart:  
  - Üstte modül simgesi
  - Altında kısa slogan
  - Orta alanda ana fonksiyonları/avantajları
- Kartlar animasyonlu veya hover efektiyle öne çıkabilir

### 3. Kullanım Senaryoları
- User journey şeması:  
  - Bir iş akışı adım adım izlenerek (örn. müşteri kaydı → doğrulama → görev atanması → raporlama) agent ikonlarıyla görselleştirilebilir

### 4. Teknik Mimariler
- **Flow Yapısı**  
  - JSON/YAML örnekleriyle görsel şema
  - Paralel ve koşullu adımların renkli bloklarla gösterilmesi
- **Node.js tabanlı ana platform**  
  - Node.js logosu, etrafında farklı dil logoları (.NET, Python, Go) ve Docker ikonları
- **Kafka Integration**  
  - Agent ve modüller arası iletişimde Kafka simgesiyle bağlantı hatları

### 5. CTA & Demo Bölümü
- Öne çıkan “Try Demo” butonu
- Demo ekranında gerçek zamanlı bir agent akışının animasyonu

---

## Landing Page (Kurumsal Web) Blok/Sayfa Yapısı

### 1. Hero / Introduction
- **Slogan:** The AI Agent Orchestration Hub
- **Açıklama:** Deploy, coordinate, and scale autonomous agents across your stack — with one unified control plane.
- **CTA:** Try Demo | Request Early Access
- **Görsel:** Akış/agent orchestrasyonu animasyonu veya mockup

### 2. Problem & Çözüm Blokları
- **Problem:** 
  - Dağıtık agent yönetimi kaotik ve verimsiz
  - Farklı dillerde yazılmış agent’ları bütünleştirmek zor
  - Koşullu yönlendirme, hata yönetimi ve takip zor
- **Çözüm:**
  - JSON/YAML tabanlı akış tanımı
  - OnSuccess / OnError / OnTimeout / Koşullu yönlendirme
  - Retry policy + fallback chain
  - Tek UI, gerçek zamanlı izleme, merkezi loglama

### 3. Platform Özellikleri (Core Architecture)
- Microservice-mimari
- Çoklu dil desteği (Node.js öncelikli, .NET, Python, Go)
- Docker tabanlı runtime
- Kafka Message Bus entegrasyonu
- Tek UI, merkezi konfigürasyon
- Her modül bağımsız geliştirilip deploy edilebilir
- Genişleyebilir ve sürdürülebilir modül seti

### 4. Modül Galerisi

#### AgentsFlow
- **Amaç:** Otonom süreçlerin akış bazlı yönetimi, koşullu yönlendirme, akış şeması editörü
- **Özellikler:** 
  - JSON/YAML ile akış tanımı
  - onSuccess, onError, onTimeout, koşullu geçişler (if/else)
  - Retry policy, fallback chain
  - Paralel/sıralı görev yönetimi
  - Low-code workflow builder UI

#### AgentsTask
- **Amaç:** Görev tabanlı agent orchestrasyonu, task assignment, agent matchmaking
- **Özellikler:**
  - Görev kuyruğu yönetimi (priority, deadline, resource constraint)
  - Agent göreve göre atanır
  - Feedback loop, otomatik task çözümü

#### AgentsOps
- **Amaç:** Operasyonel yönetim ve izleme, performans ve sağlık takibi
- **Özellikler:**
  - Agent health check, loglama, hata tespiti
  - Ölçeklenebilirlik, auto-scaling
  - Versiyonlama, rollback, auto-healing

#### AgentsMap
- **Amaç:** Lokasyon bazlı agent görünümü
- **Özellikler:**
  - Harita/tabanlı gösterim
  - Agent heatmap, hareket takibi
  - Konum bazlı aktivite izleme

#### AgentsBrain
- **Amaç:** Ortak bilgi/bellek modülü
- **Özellikler:**
  - Vector DB entegrasyonu
  - Bellek yönetimi (short-term/long-term)
  - Belge, geçmiş işlem ve olay hafızası

#### AgentsCore
- **Amaç:** Tüm agent’ların bağlı olduğu temel altyapı
- **Özellikler:**
  - Yetkilendirme, API token, RBAC
  - Plugin mimarisi, ortak SDK
  - Logging, tracing altyapısı

#### AgentsVoice (opsiyonel)
- **Amaç:** Sesli komut, sesli asistan entegrasyonu

---

### 5. Kullanım Senaryoları (Use Cases)
- Lojistik firmasının AI agent’larla iş akışlarını yönetmesi
- RTLS altyapılı IoT sistemlerde agent orchestrator kullanımı
- Müşteri destek sistemlerinde task-based agent dağıtımı
- Gerçek zamanlı karar destek sistemlerinde akış tabanlı otomasyon

---

### 6. CTA + Yatırımcı / Early Adopter Kaydı
- “Yapay zekanın üretim gücünü yöneten yeni bir çağ başlıyor.”
- “Yatırımcı mısınız? Bizimle büyümek ister misiniz?”
- “Developer mısınız? İlk sürümde yer alın.”
- Email formu, Calendly bağlantısı, LinkedIn

---

### 7. (Ekstra) Demo & Dokümantasyon
- **Demo:** demo.agentspalace.com (mock veriyle)
- **Docs:** docs.agentspalace.com
- **Blog:** Vizyon ve teknik gelişmeleri paylaşmak için

---

## Teknik Detaylar - Özelleştirilmiş Notlar

- **Tüm çekirdek platform ve modüller**: Node.js öncelikli geliştirilir, sub-modüller/agentlar için .NET, Python, Go desteği.
- **Runtime:** Docker container’ları ile izole çalışma, merkezi orchestrasyon AgentsPalace ile.
- **Mesajlaşma:** Kafka ile yüksek hızlı, güvenilir event/event-driven akış.
- **Genişletilebilirlik:** Her modül bağımsız olarak geliştirilebilir, deploy edilebilir ve sürdürülebilir şekilde büyütülebilir.
- **Akış Tanımı:** JSON/YAML ile, her adım için onSuccess/onError/onTimeout/if/retry/fallback gibi yönlendirme ve hata yakalama.
- **UI:** Tek çatı altında tüm modülleri yöneten, modern ve gerçek zamanlı yönetim paneli.
- **Geliştirici Dostu:** SDK, API, CLI, açık kaynak konnektörler
- **Tek GitHub Reposu:** Tüm platform ve modüller tek bir monorepo altında, açık ve sürdürülebilir geliştirme akışı

---

## Geliştirici ve Yatırımcı için Faydalar

- **Yatırımcı:** Sürdürülebilir, modüler, yüksek büyüme potansiyeli olan, geleceğin AI altyapısı
- **Geliştirici:** Esnek, çok dilli, microservice mimarisiyle hızlı geliştirme ve entegrasyon
- **İlk Kullanıcı:** Gerçek iş senaryolarında hızlı değer sunan, düşük giriş maliyetli, developer-first platform

---

## Marka Ağacı (Özet)

```
everything agent (şirket)
│
└── AgentsPalace (ana platform)
    ├── AgentsFlow      (süreç bazlı kontrol)
    ├── AgentsTask      (görev bazlı yürütme)
    ├── AgentsOps       (operasyonel takip)
    ├── AgentsMap       (lokasyon bazlı görünüm)
    ├── AgentsBrain     (ortak bilgi belleği)
    ├── AgentsCore      (altyapı bileşenleri)
    └── AgentsVoice     (isteğe bağlı ses entegrasyonu)
```

---

## Devamı & Özelleştirme

- Her modül için özel landing/metin/dokümantasyon blokları istenirse eklenebilir.
- Teknik mimari diyagramları, UI mockup örnekleri ve modül bazlı içerik blokları için ek dökümanlar hazırlanabilir.
- Yatırımcı sunumu ve pitch deck için özet metinler ayrıca üretilebilir.

---

**Proje sahibi için not:**  
Bu README, AgentsPalace ve modülleri için landing page ve kurumsal kimlik projesinin hem teknik hem pazarlama ihtiyaçlarını kapsayacak şekilde özelleştirilmiştir. Blok/sayfa yapısı, vizyon, teknik detay ve yatırımcı hedefleri arasında bütünlük sağlar.

---