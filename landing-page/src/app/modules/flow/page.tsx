'use client';

import { motion } from 'framer-motion';
import { Network, Workflow, Code, Zap, GitBranch, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import MermaidDiagram from '@/components/MermaidDiagram';

export default function FlowPage() {
  return (
    <div className="bg-obsidian-900 min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-obsidian-900 bg-cyber-grid bg-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian-900/80 via-obsidian-800/60 to-obsidian-700/40" aria-hidden="true"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 animate-pulse" aria-hidden="true">
          <div className="w-4 h-4 bg-cyber-green rounded-full shadow-glow"></div>
        </div>
        <div className="absolute top-40 right-32 animate-pulse delay-300" aria-hidden="true">
          <div className="w-3 h-3 bg-electric-purple rounded-full shadow-glow"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-pulse delay-700" aria-hidden="true">
          <div className="w-5 h-5 bg-neon-orange rounded-full shadow-glow"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <Workflow className="w-16 h-16 text-electric-blue drop-shadow-neon" />
                <h1 className="text-6xl font-bold font-orbitron drop-shadow-neon bg-gradient-to-r from-electric-purple to-cyber-mint bg-clip-text text-transparent">
                  Flow
                </h1>
              </div>
              <p className="text-2xl text-electric-blue font-medium">
                Agent Palace Flow
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                Akışkan Zeka, Kusursuz Operasyon
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Agent Palace Flow, karmaşık iş akışlarını kolayca tasarlama, otomatikleştirme ve izleme imkanı sağlayan kapsamlı bir orkestrasyon çözümüdür.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-electric-purple to-electric-blue text-white font-semibold rounded-lg shadow-glow focus:outline-none focus:ring-2 focus:ring-cyber-green focus:ring-offset-2 focus:ring-offset-obsidian-900"
              >
                Demoyu Görüntüle
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-cyber-green font-semibold rounded-lg border-2 border-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyber-green focus:ring-offset-2 focus:ring-offset-obsidian-900"
              >
                Dokümantasyonu İncele
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-electric-blue font-semibold rounded-lg border-2 border-electric-blue hover:bg-electric-blue hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-offset-2 focus:ring-offset-obsidian-900"
              >
                Ücretsiz Deneme
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-obsidian-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-electric-purple to-cyber-mint bg-clip-text text-transparent">
              Temel Özellikler
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agent Palace Flow, iş süreçlerinizi otomatikleştirmek ve optimize etmek için ihtiyacınız olan tüm özellikleri sunar.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Workflow,
                title: "Görsel Akış Tasarımcısı",
                description: "Kod yazmadan, sürükle-bırak arayüzü ile karmaşık iş akışlarını dakikalar içinde tasarlayın.",
                color: "from-electric-purple to-electric-blue"
              },
              {
                icon: Zap,
                title: "Gerçek Zamanlı İzleme",
                description: "Tüm akış adımlarını anlık olarak takip edin, darboğazları tespit edin ve aktif akışlara anında müdahale edin.",
                color: "from-cyber-green to-cyber-mint"
              },
              {
                icon: AlertCircle,
                title: "Akıllı Hata Yönetimi",
                description: "Önceden tanımlanmış kurallar ve tam yapılandırılabilir hata yönetim stratejileri ile sistem kesintilerini minimuma indirin.",
                color: "from-neon-orange to-electric-purple"
              },
              {
                icon: GitBranch,
                title: "Dinamik Yönlendirme",
                description: "Değişken koşullara göre akışları farklı kollara ayırın, veri tabanlı kararlar alın ve kaynakları optimum şekilde kullanın.",
                color: "from-electric-blue to-cyber-green"
              },
              {
                icon: Code,
                title: "Gelişmiş Tetikleyiciler",
                description: "Zamana bağlı, olaya bağlı veya veri durumuna bağlı tetikleyicilerle akışlarınızı başlatın ve sonlandırın.",
                color: "from-neon-orange to-electric-red"
              },
              {
                icon: Network,
                title: "Tam Entegrasyon",
                description: "Diğer Agent Palace modülleri ve üçüncü parti servislerle sorunsuz entegrasyon sayesinde eksiksiz bir otomasyon ekosistemi.",
                color: "from-electric-purple to-cyber-mint"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-obsidian-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-glow`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-24 bg-obsidian-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-electric-purple to-cyber-mint bg-clip-text text-transparent">
              Nasıl Çalışır
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agent Palace Flow, modüler ve esnek mimarisi sayesinde karmaşık iş süreçlerini kolayca yönetilebilir hale getirir.
            </p>
          </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-obsidian-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-10 overflow-x-auto"
          >
            <div className="min-w-[800px]">
              {/* Mermaid diyagramı burada render edilecek */}
              <MermaidDiagram 
                definition={`graph TD
    subgraph "Agent Palace Flow"
        TB[Trigger Builder] --> FE[Flow Engine]
        WB[Workflow Builder] --> FE
        FE --> CR[Conditional Router]
        CR -->|Koşul 1| T1[Task 1]
        CR -->|Koşul 2| T2[Task 2]
        CR -->|Koşul 3| T3[Task 3]
        T1 --> EH[Error Handler]
        T2 --> EH
        T3 --> EH
        EH -->|Başarılı| CS[Complete Status]
        EH -->|Başarısız| RM[Retry Mechanism]
        RM --> FE
    end
    
    subgraph "External Systems"
        FE <-->|Data Exchange| ES[External Service]
        FE <-->|Events| EQ[Event Queue]
        FE <-->|State Management| DB[(Database)]
    end
    
    subgraph "Other Agent Palace Modules"
        FE <--> APT[Agent Palace Task]
        FE <--> APB[Agent Palace Brain]
        EH <--> APO[Agent Palace Ops]
    end`}
                className="bg-obsidian-900 p-4 rounded-lg shadow-glow min-h-[400px]"
              />
            </div>
          </motion.div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-obsidian-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Adım Adım İşleyiş
              </h3>
              <ol className="space-y-4">
                {[
                  "Tetikleyici Tanımlama: Workflow Builder ile tetikleyiciler tanımlanır.",
                  "Akış Tasarımı: Görsel arayüz kullanılarak, akış adımları, görevler ve koşullar belirlenir.",
                  "Koşul Yönetimi: Conditional Router, gelen verilere göre akışı farklı kollara ayırır.",
                  "Görev Yürütme: Task modülü ile entegre çalışarak belirlenen görevleri yürütür.",
                  "Hata Kontrolü: Görev yürütmeleri sürekli izlenir, hata durumunda Error Handler devreye girer.",
                  "Yeniden Deneme: Gerektiğinde belirli adımlar otomatik olarak tekrarlanır.",
                  "Tamamlama: Başarılı tamamlanan akışlar raporlanır ve arşivlenir."
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-electric-blue text-obsidian-900 font-bold mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-obsidian-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Entegrasyon
              </h3>
              <p className="text-gray-300 mb-4">
                Agent Palace Flow, diğer modüllerle tam entegrasyon içinde çalışır:
              </p>
              <ul className="space-y-4">
                {[
                  { module: "Task Modülü", purpose: "Görevlerin yürütülmesi için" },
                  { module: "Brain Modülü", purpose: "Karar verme süreçlerini optimize etmek için" },
                  { module: "Ops Modülü", purpose: "İzleme ve müdahale için" },
                  { module: "Map Modülü", purpose: "Coğrafi konuma dayalı akışlar için" }
                ].map((integration, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyber-green mr-2">•</span>
                    <span>
                      <strong className="text-electric-purple">{integration.module}:</strong>
                      <span className="text-gray-300 ml-2">{integration.purpose}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Sub-Modules Section */}
      <section className="py-24 bg-obsidian-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-electric-purple to-cyber-mint bg-clip-text text-transparent">
              Alt Modüller
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agent Palace Flow&apos;un güçlü özellikleri, birbiriyle entegre çalışan alt modüllerden gelir.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Flow Engine",
                description: "Tasarlanmış akışları yürüten ana motor. Yüksek performanslı işlem yürütme, thread yönetimi, state persistence ve recovery, ileri düzey logging ve debug özellikleri.",
                color: "cyber-green"
              },
              {
                name: "Workflow Builder",
                description: "Akışların görsel olarak tasarlandığı arayüz. Sürükle-bırak UI, şablon kütüphanesi, versiyon kontrolü, kolaboratif tasarım imkanı ve import/export özellikleri.",
                color: "electric-purple"
              },
              {
                name: "Trigger Manager",
                description: "Akışların başlamasını tetikleyen olayları yöneten sistem. Zaman bazlı tetikleyiciler (CRON), olay bazlı tetikleyiciler, veri durumu bazlı tetikleyiciler, kuyruklama ve öncelik belirleme.",
                color: "neon-orange"
              },
              {
                name: "Conditional Router",
                description: "Dinamik koşullara göre akış dallandırma sistemi. Karmaşık koşul mantığı, A/B testing, istatistiksel yönlendirme ve yük dengeleme.",
                color: "electric-blue"
              },
              {
                name: "Error Handler",
                description: "Akış sırasında oluşan hataları yöneten sistem. Hata sınıflandırma, otomatik düzeltme stratejileri, yeniden deneme politikaları, failover mekanizmaları, bildirim ve alarm sistemi.",
                color: "cyber-mint"
              }
            ].map((submodule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-obsidian-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <h3 className={`text-2xl font-semibold mb-4 text-${submodule.color}`}>
                  {submodule.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {submodule.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-24 bg-obsidian-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-electric-purple to-cyber-mint bg-clip-text text-transparent">
              Kullanım Senaryoları
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agent Palace Flow&apos;un çeşitli sektörlerde ve kullanım alanlarındaki başarılı uygulamaları.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {[
              {
                title: "Çoklu Departman İçeren Müşteri Onboarding Süreci",
                industry: "Fintech",
                problem: "Bir fintech şirketi, yeni müşterilerin onboarding sürecinde çoklu departmanların (uyum, risk, müşteri hizmetleri) onaylarını gerektiren karmaşık bir sürece sahip. Manuel işlemler hatalara ve gecikmelere neden oluyor.",
                solution: "Agent Palace Flow ile tasarlanan otomatik bir akış: müşteri kaydında tetikleniyor, belge doğrulama otomatize ediliyor, ilgili departmanlara paralel görevler atanıyor, onaylar takip ediliyor, eksik bilgi/belge durumları otomatik yönetiliyor.",
                result: "Onboarding süresi %70 azaldı, müşteri memnuniyeti arttı, operasyonel hatalar %90 oranında düştü."
              },
              {
                title: "Üretim Hattı Kalite Kontrol Otomasyonu",
                industry: "Üretim",
                problem: "Bir üretim tesisinde, ürünlerin kalite kontrol süreçleri manuel yürütülüyor, insan hatasına açık ve zaman alıyor.",
                solution: "IoT sensörlerinden gelen verileri gerçek zamanlı analiz eden, belirli eşik değerlerin aşılması durumunda özel kontrol rutinlerini başlatan, kalite sorunlarını otomatik olarak sınıflandırıp doğru departmana bildirim gönderen ve düzeltici aksiyonları takip eden bir akış.",
                result: "Kalite kontrol maliyeti %40 düştü, ürün kusurları %25 azaldı, üretim hızı %15 arttı."
              },
              {
                title: "Dinamik Fiyatlandırma Stratejisi",
                industry: "E-Ticaret",
                problem: "E-ticaret şirketi, rakip fiyatları, envanter durumu ve talep dinamiklerine göre fiyatlarını güncellemek istiyor ancak manuel süreç çok zaman alıyor.",
                solution: "Rekabet analizi yapan crawler'lar tarafından tetiklenen, envanter seviyesi ve satış hızını analiz eden, belirli kurallara göre optimum fiyatı hesaplayan, kar marjı kontrollerini otomatik yapan ve onay sonrası fiyatları otomatik güncelleyen bir akış.",
                result: "Fiyat güncelleme süresi saatlerden dakikalara indi, kar marjı %12 arttı, stok tükenme oranı %30 azaldı."
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-obsidian-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8"
              >
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {useCase.title}
                  </h3>
                  <span className="px-3 py-1 bg-obsidian-700 rounded-full text-sm text-electric-blue">
                    {useCase.industry}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-neon-orange mb-2">Problem</h4>
                    <p className="text-gray-300">{useCase.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-cyber-green mb-2">Çözüm</h4>
                    <p className="text-gray-300">{useCase.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-electric-purple mb-2">Sonuç</h4>
                    <p className="text-gray-300">{useCase.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* UI Mockup Section */}
      <section className="py-24 bg-obsidian-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-electric-purple to-cyber-mint bg-clip-text text-transparent">
              Demo ve Ekran Görüntüleri
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agent Palace Flow&apos;un sezgisel ve güçlü arayüzünü keşfedin.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-obsidian-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 overflow-hidden"
            >
              <h3 className="text-xl font-semibold mb-4 text-electric-blue text-center">
                Workflow Builder UI
              </h3>
              <div className="bg-obsidian-900 border border-white/5 rounded-lg p-2 overflow-x-auto">
                <pre className="text-xs md:text-sm font-mono text-gray-300 whitespace-pre overflow-x-scroll">
{`+-----------------------------------------------------------------------+
|  Agent Palace Flow - Workflow Builder                           [-][x] |
+-----------------------------------------------------------------------+
| [Save] [Deploy] [Test]     | My Workflow v1.2                         |
+---------------------------+ +---------------------------------------+ |
| Components                | |                                       | |
| +-----------------------+ | |    +--------+      +-----------+      | |
| | Triggers              | | |    |        |      |           |      | |
| | [Event Trigger     ] >| | |    | Start  |----->| Check     |      | |
| | [Schedule Trigger  ] >| | |    | Event  |      | Condition |      | |
| | [Data Trigger      ] >| | |    |        |      |           |      | |
| +-----------------------+ | |    +--------+      +-----------+      | |
| | Steps                 | | |                         |             | |
| | [Task              ] >| | |                         |             | |
| | [Decision Point    ] >| | |                         V             | |
| | [Parallel Tasks    ] >| | |     +-----------+   +-----------+     | |
| | [Join              ] >| | |     |           |   |           |     | |
| +-----------------------+ | |     | Process A |<--| Decision   |     | |
| | Error Handlers        | | |     |           |   | Point      |     | |
| | [Retry            ]  >| | |     +-----------+   +-----------+     | |
| | [Skip             ]  >| | |                         |             | |
| | [Alternate Path   ]  >| | |                         V             | |
| +-----------------------+ | |     +-----------+                     | |
| | Integrations          | | |     |           |                     | |
| | [API Call         ]  >| | |     | Process B |                     | |
| | [DB Operation     ]  >| | |     |           |                     | |
| | [Message Queue    ]  >| | |     +-----------+                     | |
| +-----------------------+ | |                         |             | |
|                           | |                         V             | |
| Properties                | |     +-----------+                     | |
| +----------------+        | |     |           |                     | |
| | Name: Process A|        | |     | Complete  |                     | |
| | Type: Task     |        | |     |           |                     | |
| | Timeout: 30s   |        | |     +-----------+                     | |
| | Retry: 3       |        | |                                       | |
| | Priority: High |        | +---------------------------------------+ |
| +----------------+        |                                           |
+---------------------------+-------------------------------------------+`}
                </pre>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-obsidian-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 overflow-hidden"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyber-green text-center">
                Monitoring Dashboard
              </h3>
              <div className="bg-obsidian-900 border border-white/5 rounded-lg p-2 overflow-x-auto">
                <pre className="text-xs md:text-sm font-mono text-gray-300 whitespace-pre overflow-x-scroll">
{`+-----------------------------------------------------------------------+
|  Agent Palace Flow - Monitor                                     [-][x] |
+-----------------------------------------------------------------------+
| Active Flows: 128 | Completed: 2,456 | Failed: 32                      |
+----------+--------+----------------+---------------+------------------+|
| Status   | Flow Name             | Started          | Duration        ||
+----------+------------------------+-----------------+------------------+|
| [ACTIVE] | customer-onboarding-34 | 22/06/25 14:23  | 12m 34s         ||
| [ERROR]  | payment-verification-56| 22/06/25 14:20  | 15m 08s         ||
| [ACTIVE] | order-fulfillment-112  | 22/06/25 14:18  | 17m 22s         ||
| [PAUSED] | inventory-update-28    | 22/06/25 14:15  | 20m 47s         ||
| [ACTIVE] | marketing-campaign-7   | 22/06/25 14:10  | 25m 03s         ||
+----------+------------------------+-----------------+------------------+|
|                                                                       ||
| [Flow Details: customer-onboarding-34]                                ||
|                                                                       ||
|  +--------+      +-----------+     +---------+     +-----------+      ||
|  | Verify |      | Credit    |     | Account |     | Welcome   |      ||
|  | Docs   |--✓-->| Check     |--✓->| Setup   |---->| Email     |      ||
|  +--------+      +-----------+     +---------+     +-----------+      ||
|                                                                       ||
| Current Step: Account Setup (3/4)                                     ||
| Step Status: IN_PROGRESS - Running for: 4m 12s                        ||
| Variables:                                                            ||
| - customer_id: "C-38291"                                              ||
| - verification_level: "full"                                          ||
| - credit_score: 720                                                   ||
|                                                                       ||
| [Resume] [Pause] [Terminate] [Modify Variables]                       ||
+-----------------------------------------------------------------------+`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-obsidian-800 to-obsidian-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-obsidian-700/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold font-orbitron mb-6 bg-gradient-to-r from-electric-blue to-cyber-green bg-clip-text text-transparent">
              İş Akışlarınızı Dönüştürmeye Hazır mısınız?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Agent Palace Flow ile süreçlerinizi otomatikleştirin, verimliliği artırın ve geleceğin iş akışlarını bugünden tasarlayın.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-electric-purple to-electric-blue text-white font-semibold rounded-lg shadow-glow text-lg focus:outline-none focus:ring-2 focus:ring-cyber-green focus:ring-offset-2 focus:ring-offset-obsidian-900"
              >
                Ücretsiz Demo Planlayın
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-transparent text-cyber-green font-semibold rounded-lg border-2 border-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-cyber-green focus:ring-offset-2 focus:ring-offset-obsidian-900"
              >
                Teknik Dokümantasyon
              </motion.button>
            </div>
          </motion.div>
          
          <div className="mt-16 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-electric-blue hover:text-cyber-mint transition-colors">
              <span>Ana Sayfaya Dön</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
