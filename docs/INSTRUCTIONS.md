# Development History & Production-Ready Sayfası Güncelleme Talimatları

## AgentsPalace SDLC & Development Doc Standards

### 1. Proposal (Öneri) ve Onay Süreci

- **Her yeni feature, mimari değişiklik veya önemli refactor öncesinde**;
  - Yapılacak değişikliğin amacı, kapsamı, teknik etkileri, SDLC ve dokümantasyon gereksinimlerini içeren bir *proposal markdown dosyası* (`proposal/YYYY-MM-DD-feature-title.md`) hazırla.
  - Proposal dosyasını proje sahibine sun, **onay almadan kod yazma**.
  - Onaylandığında geliştirmeye başla.

### 2. Geliştirme ve Dokümantasyon

- Onay sonrası geliştirme tamamlandığında;
  - **Aşağıdaki tüm markdown dosyalarını güncelle** ve gerekirse yeni dosya ekle:
    - `docs/development-history.md`
    - `docs/production-ready-checklist.md`
    - `docs/changelog.md`
    - `docs/adr/` (her önemli teknik karar için yeni dosya)
    - `docs/architecture/` (her diyagram için ayrı dosya)
- Landing page'de, bu dosyalar otomatik olarak okunup, canlı şekilde görselleştirilir (örn. Mermaid gömülü diyagramlar, embed edilmiş SVG/PNG, timeline UI).

### 3. Diyagramlar ve Dokümantasyon

- **Her büyük değişiklikte, aşağıdaki diyagramları güncel tut:**
  - Product/Platform Overview Diagram
  - Brand/Module Tree (Marka Ağacı)
  - System Architecture Diagram
  - Deployment Diagram
  - Flow Engine Execution Diagram
  - Data Flow Diagram (DFD)
  - Message Flow Diagram
  - Component Diagram
  - Sequence Diagram
  - Class/Entity Diagram
  - OpenAPI/Swagger Spec (link/embed)
  - ERD (Entity-Relationship Diagram)
  - Monitoring/Observability Diagram
  - CI/CD Pipeline Diagram

### 4. Güncellik Talimatları

1. **Her yeni geliştirme veya büyük değişiklik öncesi:**
   - `proposal/YYYY-MM-DD-feature-title.md` dosyasını oluştur ve onay al.
   - **Onay alınmadan kod yazma.**

2. **Geliştirme tamamlandığında:**
   - `docs/development-history.md` ve `docs/production-ready-checklist.md` dosyalarını güncelle.
   - İlgili tüm teknik diyagramları (`docs/architecture/` altında) en güncel haliyle baştan oluştur veya revize et.
   - Yeni veya güncellenen ADR'leri (`docs/adr/`) ekle.
   - Gerekirse changelog'u (`docs/changelog.md`) güncelle.

3. **Diyagramlar için:**
   - Mümkünse [Mermaid.js](https://mermaid.js.org/) veya [PlantUML](https://plantuml.com/) kullan, böylece markdown içinde canlı görüntülenir.
   - draw.io veya Lucidchart ile SVG/PNG diyagramı oluşturup `docs/architecture/` altına ekle, markdown'a embed et.
   - Her diyagramı kısa açıklama ve tarih ile birlikte ekle.

4. **Sayfa otomasyonu:**
   - Yeni bir PR/commit'te, CI/CD pipeline veya pre-commit hook ile yukarıdaki dosyaların güncel olup olmadığını kontrol et.
   - Otomatik güncelleme mümkün değilse, manuel güncellemede bu talimatlara uyulmalı.

5. **Sürekli güncellik için:**
   - Her yeni feature branch'inde bu sayfada ve ilgili markdownlarda güncelleme yapmayı unutma.
   - En son production'a çıkan versiyonda sayfanın ve dokümantasyonunun eksiksiz olduğundan emin ol.

---

**Not:**  
Bu talimatlar ve markdown şablonları, landing page'deki "Development History & Production-Ready Steps" sayfasının ve tüm SDLC dokümantasyonunun her zaman güncel ve yüksek kaliteli olmasını sağlayacaktır.
