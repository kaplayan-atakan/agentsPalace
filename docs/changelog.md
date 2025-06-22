# Change Log

Tüm önemli değişiklikler, yeni feature'lar ve bugfix'ler burada listelenir.

## [v0.3.0] - 2025-01-22
### Added
- **SDLC Dokümantasyon Sistemi** - Kapsamlı dokümantasyon altyapısı
  - `docs/INSTRUCTIONS.md` - Geliştirme talimatları
  - `docs/production-ready-checklist.md` - Production hazırlık kontrol listesi
  - `docs/changelog.md` - Değişiklik geçmişi
  - `proposals/` klasörü - Feature önerileri için şablon sistemi
  - `docs/adr/` klasörü - Architecture Decision Records
  - `docs/architecture/` klasörü - Teknik diyagramlar
- **Architecture Diagrams** - Mermaid.js ile canlı diyagramlar
  - System Architecture Diagram
  - Brand/Module Tree
  - Data Flow Diagram
  - Component Diagram
  - Deployment Diagram
- **Example Proposal** - Önernek proposal dosyası şablonu
- **Example ADR** - Architecture Decision Record örneği

### Updated
- `docs/development-history.md` - Yeni SDLC formatına uygun güncelleme
- Tüm dokümantasyon referansları birbirine bağlandı

---

## [v0.2.0] - 2025-01-22
### Added
- **Landing Page Bileşenleri** - Blade Runner 2049 temalı modern tasarım
  - `Hero.tsx` - Ana hero bölümü
  - `ProblemSolution.tsx` - Problem-çözüm sunumu
  - `PlatformFeatures.tsx` - Platform özellikleri
  - `ModuleGallery.tsx` - Modül galerisi
  - `UseCases.tsx` - Kullanım senaryoları
  - `CTAInvestor.tsx` - Yatırımcı çağrısı
  - `Footer.tsx` - Alt bilgi bölümü
- **Test Framework** - Kapsamlı test dokümantasyonu
  - `tests/manual-test-checklist.md` - Manuel test kontrol listesi
  - `tests/accessibility-test.md` - Erişilebilirlik testleri
  - `tests/test-results.md` - Test sonuçları dokümantasyonu
- **Build Optimizations** - Bundle analyzer ve SEO optimizasyonları
  - Next.js bundle analyzer entegrasyonu
  - SEO meta tags ve OpenGraph desteği
  - Performance optimizasyonları

### Updated
- `globals.css` - Blade Runner temalı custom CSS styles
- `tailwind.config.js` - Özel renk paleti ve animasyonlar
- `next.config.ts` - Bundle analyzer ve performance ayarları

---

## [v0.1.0] - 2025-01-22
### Added
- **Proje İlk Kurulum** - Next.js + TailwindCSS + Framer Motion
  - Next.js 15 framework kurulumu
  - TailwindCSS styling sistemi
  - Framer Motion animasyon kütüphanesi
  - Lucide React icon kütüphanesi
- **Temel Proje Yapısı**
  - `package.json` - Dependency yönetimi
  - `README.md` - Proje dokümantasyonu
  - `.github/copilot-instructions.md` - AI assistant talimatları
  - `.vscode/tasks.json` - VS Code görevleri
- **Development Environment** - Geliştirme ortamı kurulumu
  - Development server konfigürasyonu
  - Build ve production ayarları
  - Git repository kurulumu

---

## Naming Convention

- **Major Version (x.0.0)**: Breaking changes, major feature additions
- **Minor Version (0.x.0)**: New features, significant updates
- **Patch Version (0.0.x)**: Bug fixes, minor improvements

## Categories

- **Added**: Yeni özellikler
- **Changed**: Mevcut özelliklerde değişiklikler
- **Deprecated**: Yakında kaldırılacak özellikler
- **Removed**: Kaldırılan özellikler
- **Fixed**: Bug düzeltmeleri
- **Security**: Güvenlik ile ilgili değişiklikler
