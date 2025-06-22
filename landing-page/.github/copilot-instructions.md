# AgentsPalace Landing Page - Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

Bu proje, AgentsPalace AI Agent Orchestration Hub için bir Next.js landing page'idir. Blade Runner 2049 estetiği ile siber-fütüristik tasarım benimsenmiştir.

## Design System

### Renk Paleti
- **Obsidian**: #0a0f1c (primary dark), #1b213a (secondary dark)
- **Electric**: #a259f7 (purple), #6236ff (blue)
- **Cyber**: #39ff14 (green), #00ffb3 (mint)
- **Neon**: #ff7e29 (orange), #ff4e00 (red)

### Typography
- **Primary Font**: Space Grotesk (sans-serif)
- **Display Font**: Orbitron (monospace, headers)

### Animation Guidelines
- Framer Motion kullanılır
- Glow efektleri ve neon ışık animasyonları
- Hover states için scale ve position değişimleri
- Scroll-triggered animations

## Component Structure

### Bileşen Hiyerarşisi
1. **Hero** - Ana giriş, logo, CTA butonları
2. **ProblemSolution** - Problem/çözüm karşılaştırması
3. **PlatformFeatures** - Teknik özellikler
4. **ModuleGallery** - AgentsPalace modülleri
5. **UseCases** - Kullanım senaryoları
6. **CTAInvestor** - Yatırımcı/geliştirici/kullanıcı CTA'ları
7. **Footer** - İletişim ve linkler

### Styling Conventions
- TailwindCSS utility classes
- CSS custom properties for brand colors
- Responsive design (mobil-first)
- Glass morphism effects (backdrop-blur)
- Neon glow effects

## Content Guidelines

### Tone of Voice
- Türkçe içerik
- Teknik ama anlaşılır
- Vizyoner ve güçlü
- B2B enterprise odaklı

### Key Messages
- "Orchestrate the Future"
- "Where Agents Come Alive"
- AI agent orchestration hub
- Microservice architecture
- Multi-language support

## Technical Specifications

### Dependencies
- Next.js 15+ (App Router)
- Framer Motion (animations)
- Lucide React (icons)
- TailwindCSS (styling)

### Performance
- Optimized images
- Lazy loading
- Smooth scroll behavior
- Responsive animations

## Development Notes

- Tüm bileşenler 'use client' direktifi kullanır
- TypeScript strict mode
- ESLint rules compliance
- Accessibility considerations (WCAG)

Bu proje README.md dosyasındaki AgentsPalace vizyonu ve teknik detayları ile tam uyumlu olmalıdır.
