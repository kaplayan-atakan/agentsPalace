# AgentsPalace Landing Page

🚀 **AI Agent Orchestration Hub** için modern, siber-fütüristik landing page

## 🎨 Tasarım Konsepti

- **Estetik**: Blade Runner 2049 tarzı karanlık, neon vurgulu
- **Renk Paleti**: Obsidyen maviler, elektrik morları, siber yeşil
- **Tipografi**: Space Grotesk + Orbitron fonts
- **Animasyonlar**: Framer Motion ile glow ve hover efektleri

## 🛠️ Teknoloji Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: TailwindCSS + Custom CSS Properties
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Space Grotesk, Orbitron)
- **TypeScript**: Tam type safety

## 📦 Kurulum

```bash
# Dependency'leri yükle
npm install

# Development server'ı başlat
npm run dev

# Build al
npm run build

# Production build'i çalıştır
npm start
```

## 🎯 Özellikler

### 📄 Sayfa Bölümleri
1. **Hero Section** - Ana giriş, brand messaging
2. **Problem/Solution** - Mevcut sorunlar vs AgentsPalace çözümleri
3. **Platform Features** - Teknik özellikler ve mimari
4. **Module Gallery** - AgentsPalace modül showcase
5. **Use Cases** - Gerçek dünya senaryoları
6. **CTA & Investor** - Yatırımcı/geliştirici/kullanıcı hedefli CTA'lar
7. **Footer** - İletişim ve linkler

### 🎨 Görsel Özellikler
- Cyber grid background patterns
- Neon glow effects
- Glassmorphism (backdrop blur)
- Smooth scroll animations
- Responsive design
- Accessibility compliance

### 🔧 Teknik Özellikler
- Server-side rendering (SSR)
- Static site generation (SSG) ready
- Optimized images
- SEO friendly
- Performance optimized
- Mobile-first responsive

## 🌟 Kullanım

Landing page otomatik olarak tüm bölümleri yükler:

```typescript
// src/app/page.tsx
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
// ... diğer bileşenler

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      {/* ... */}
    </main>
  );
}
```

## 🎨 Stil Rehberi

### Renk Paleti
```css
:root {
  --obsidian-900: #0a0f1c;
  --obsidian-800: #1b213a;
  --electric-purple: #a259f7;
  --electric-blue: #6236ff;
  --cyber-green: #39ff14;
  --cyber-mint: #00ffb3;
  --neon-orange: #ff7e29;
  --neon-red: #ff4e00;
}
```

### Animasyon Sınıfları
- `.glow-text` - Metin glow efekti
- `.glow-box` - Kutu glow efekti
- `.neon-button` - Neon buton efekti
- `.cyber-grid` - Siber grid arka plan

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## 🔗 Bağlantılar

- **Ana Repo**: [AgentsPalace](https://github.com/kaplayan-atakan/agentsPalace)
- **Demo**: http://localhost:3000
- **Docs**: README.md dosyası

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje **everything agent** şirketi tarafından geliştirilmiştir.

---

**AgentsPalace** - *Orchestrate the Future* 🚀
