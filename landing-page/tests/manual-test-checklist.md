# AgentsPalace Landing Page - Test Checklist

## 🧪 Manual Test Scenarios

### 1. Visual & Design Tests
- [ ] Hero section animasyonları çalışıyor mu?
- [ ] Neon glow efektleri görünüyor mu?
- [ ] Font'lar doğru yükleniyor mu? (Space Grotesk, Orbitron)
- [ ] Renk paleti tutarlı mı? (Obsidyen, elektrik morları, siber yeşil)
- [ ] Scroll animasyonları smooth çalışıyor mu?

### 2. Responsive Design Tests
- [ ] Mobile (320px-768px): Navigation, hero, cards responsive mi?
- [ ] Tablet (768px-1024px): Grid layoutları düzgün mü?
- [ ] Desktop (1024px+): Full design görünüyor mu?
- [ ] Ultra-wide (1440px+): İçerik merkezleniyor mu?

### 3. Interaction Tests
- [ ] CTA butonları hover efektleri çalışıyor mu?
- [ ] Module kartları hover animasyonları var mı?
- [ ] Form inputları focus durumları doğru mu?
- [ ] Scroll to top butonu çalışıyor mu?
- [ ] Smooth scroll navigation çalışıyor mu?

### 4. Content Tests
- [ ] Tüm metinler Türkçe mi?
- [ ] README'deki tüm modül bilgileri mevcut mu?
- [ ] Use case'ler gerçekçi mi?
- [ ] CTA mesajları net mi?
- [ ] SEO meta tagları doğru mu?

### 5. Performance Tests
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 4s
- [ ] Animation lag'i yok mu?
- [ ] Bundle size < 200KB
- [ ] Image optimization yapılmış mı?

### 6. Accessibility Tests
- [ ] Keyboard navigation çalışıyor mu?
- [ ] Screen reader uyumlu mu?
- [ ] Color contrast yeterli mi?
- [ ] Alt textler mevcut mu?
- [ ] Focus indicators görünüyor mu?

### 7. Browser Compatibility Tests
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### 8. Functional Tests
- [ ] Newsletter signup form çalışıyor mu?
- [ ] Contact form validation var mı?
- [ ] External linkler doğru mu?
- [ ] Social media iconları çalışıyor mu?

## 🔧 Performance Optimization Checklist

### 1. Bundle Analysis
```bash
npm run build
npm run analyze # Bundle analyzer
```

### 2. Image Optimization
- [ ] WebP format kullanılıyor mu?
- [ ] Lazy loading implementé mi?
- [ ] Responsive images var mı?

### 3. Code Splitting
- [ ] Dynamic imports kullanılıyor mu?
- [ ] Route-based splitting var mı?

### 4. Caching Strategy
- [ ] Static assets cache edilmiş mi?
- [ ] Service worker var mı?

## 🚀 Deployment Checklist

### 1. Environment Variables
- [ ] Production env variables set edilmiş mi?
- [ ] API endpoints doğru mu?

### 2. Security
- [ ] HTTPS redirect var mı?
- [ ] Security headers implementé mi?
- [ ] XSS protection aktif mi?

### 3. Monitoring
- [ ] Analytics implementé mi?
- [ ] Error tracking var mı?
- [ ] Performance monitoring aktif mi?

## 📊 Test Results

### Performance Metrics
- First Contentful Paint: ___s
- Largest Contentful Paint: ___s
- Time to Interactive: ___s
- Bundle Size: ___KB

### Browser Test Results
- Chrome: ✅/❌
- Firefox: ✅/❌
- Safari: ✅/❌
- Edge: ✅/❌

### Mobile Test Results
- iPhone: ✅/❌
- Android: ✅/❌
- Tablet: ✅/❌

## 🐛 Bug Report Template

### Bug: [Kısa açıklama]
- **Reproduction Steps:**
  1. 
  2. 
  3. 

- **Expected Behavior:** 
- **Actual Behavior:** 
- **Browser/Device:** 
- **Screenshot:** 

---

### Notes
Testten sonra bulgular buraya not edilecek.
