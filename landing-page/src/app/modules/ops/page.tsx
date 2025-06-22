'use client';

import { motion } from 'framer-motion';
import { Activity, AlertCircle, BarChart, Zap, Server, RefreshCw, GitBranch, Database } from 'lucide-react';
import Link from 'next/link';
import MermaidDiagram from '@/components/MermaidDiagram';

export default function OpsPage() {
  return (
    <div className="bg-obsidian-900 min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-obsidian-900 bg-cyber-grid bg-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian-900/80 via-obsidian-800/60 to-obsidian-700/40" aria-hidden="true"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 animate-pulse" aria-hidden="true">
          <div className="w-4 h-4 bg-electric-blue rounded-full shadow-glow"></div>
        </div>
        <div className="absolute top-40 right-32 animate-pulse delay-300" aria-hidden="true">
          <div className="w-3 h-3 bg-cyber-green rounded-full shadow-glow"></div>
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
                <Activity className="w-16 h-16 text-electric-blue drop-shadow-neon" />
                <h1 className="text-6xl font-bold font-orbitron drop-shadow-neon bg-gradient-to-r from-electric-blue to-cyber-mint bg-clip-text text-transparent">
                  Ops
                </h1>
              </div>
              <p className="text-2xl text-electric-blue font-medium">
                Agent Palace Ops
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                Zero Downtime, Maximum Insight
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Agent Palace Ops, yapay zeka ajanlarınızın operasyonel yönetimini, performans takibini ve sağlık izlemesini sağlayarak 7/24 kesintisiz hizmet sunar.
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
                className="px-8 py-4 bg-gradient-to-r from-electric-blue to-electric-purple text-white font-semibold rounded-lg shadow-glow focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-offset-2 focus:ring-offset-obsidian-900"
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
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              Temel Özellikler
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agent Palace Ops, yapay zeka ajanlarınızın kesintisiz ve optimal performansta çalışmasını sağlayan tüm özelliklere sahiptir.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertCircle,
                title: "Proaktif Sağlık İzleme",
                description: "Ajanların ve bağlı sistemlerin sağlık durumunu sürekli ve gerçek zamanlı olarak izleyerek potansiyel sorunları önceden tespit edin.",
                color: "from-electric-blue to-cyber-mint"
              },
              {
                icon: RefreshCw,
                title: "Otomatik Hata Giderme",
                description: "Tanımlanmış hata şablonlarına göre sorunları otomatik olarak tespit edip düzelterek sistem bütünlüğünü koruyun.",
                color: "from-cyber-mint to-electric-purple"
              },
              {
                icon: GitBranch,
                title: "Akıllı Ölçekleme",
                description: "İş yükü ve sistem kaynak kullanımına göre otomatik olarak ölçeklenen bir altyapı ile her zaman optimal performans sağlayın.",
                color: "from-electric-purple to-neon-orange"
              },
              {
                icon: BarChart,
                title: "Kapsamlı Metrik ve Analiz",
                description: "Ajanlarınızın performansını, kaynak kullanımını ve etkileşimlerini detaylı olarak görselleştirin ve analiz edin.",
                color: "from-neon-orange to-electric-blue"
              },
              {
                icon: Zap,
                title: "Versiyonlama ve Rollback",
                description: "Sorun çıkması durumunda önceki kararlı versiyonlara otomatik olarak geri dönüş yaparak servis sürekliliğini sağlayın.",
                color: "from-electric-blue to-cyber-green"
              },
              {
                icon: Server,
                title: "Multi-Cluster Yönetimi",
                description: "Farklı ortamlardaki (dev, test, prod) veya coğrafi bölgelerdeki tüm ajan kümelerinizi tek bir kontrol panelinden yönetin.",
                color: "from-cyber-green to-electric-blue"
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
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              Nasıl Çalışır
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agent Palace Ops, modüler ve esnek mimarisi sayesinde tüm ajan ekosisteminizi kesintisiz izler ve yönetir.
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
    subgraph "Agent Palace Ops"
        HM[Health Monitor] --> AM[Alerting Manager]
        MM[Metrics Manager] --> AM
        AM --> RA[Remediation Automation]
        RA -->|Düzeltme Başarısız| IR[Incident Response]
        RA -->|Düzeltme Başarılı| HM
        SM[Scaling Manager] --> RA
        SM --> DC[Deployment Controller]
        DC --> LB[Load Balancer]
        LB --> HM
    end
    
    subgraph "Agent Infrastructure"
        A1[Agent 1] <--> HM
        A2[Agent 2] <--> HM
        A3[Agent 3] <--> HM
        A1 <--> MM
        A2 <--> MM
        A3 <--> MM
        A1 <--> LB
        A2 <--> LB
        A3 <--> LB
        DC --> A1
        DC --> A2
        DC --> A3
    end
    
    subgraph "External Systems"
        IR <--> NT[Notification System]
        MM <--> TS[(Time Series DB)]
        DC <--> CR[Container Registry]
    end
    
    subgraph "Other Agent Palace Modules"
        HM <--> APF[Agent Palace Flow]
        AM <--> APT[Agent Palace Task]
        RA <--> APB[Agent Palace Brain]
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
                Bileşenler
              </h3>
              <ul className="space-y-4">
                {[
                  "Health Monitor: Ajan ve sistem sağlık durumlarını sürekli kontrol eder",
                  "Metrics Manager: Performans metriklerini toplar ve analiz eder",
                  "Alerting Manager: Anormallik durumlarında uyarılar oluşturur",
                  "Remediation Automation: Tespit edilen sorunlar için otomatik çözümler uygular",
                  "Scaling Manager: Kaynak kullanımına göre ölçekleme yapar",
                  "Deployment Controller: Yeni versiyonların güvenli dağıtımını sağlar",
                  "Incident Response: Otomatik çözülemeyen sorunlar için müdahale süreçlerini yönetir"
                ].map((component, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-electric-blue text-obsidian-900 font-bold mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{component}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-obsidian-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                İş Akışı
              </h3>
              <ol className="space-y-4">
                {[
                  "Sürekli Sağlık İzleme: Health Monitor, tüm ajanların sağlık durumunu düzenli aralıklarla kontrol eder",
                  "Metrik Toplama: Metrics Manager, sistem performans metriklerini toplar ve analiz eder",
                  "Anormallik Tespiti: Toplanan veriler analiz edilir ve anormal durumlar tespit edilir",
                  "Uyarı Tetikleme: Alerting Manager, tespit edilen anormallikler için uyarılar oluşturur",
                  "Otomatik Çözüm: Remediation Automation, tanımlanmış hata şablonlarına göre çözümler uygular",
                  "Olay Yönetimi: Otomatik çözüm başarısız olursa Incident Response ekibi devreye girer",
                  "Ölçekleme: Scaling Manager, iş yüküne göre sistem kaynaklarını otomatik olarak ölçekler"
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
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-24 bg-obsidian-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              Kullanım Senaryoları
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agent Palace Ops&apos;un farklı endüstrilerde nasıl kullanılabileceğini keşfedin.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Proaktif Performans Optimizasyonu",
                description: "Büyük bir e-ticaret platformu, yoğun dönemlerde ajan sistemlerinin yavaşlaması ve hatta çökmesi sorunuyla karşı karşıya kalmaktadır.",
                steps: [
                  "Ajan kaynak kullanımının sürekli izlenmesi",
                  "Öngörücü analitik ile gelecekteki kaynak ihtiyacı tahmini",
                  "Kritik dönemler öncesinde otomatik ölçekleme",
                  "Potansiyel darboğazların önceden tespit edilmesi"
                ],
                result: "Sistem, en yoğun alışveriş günlerinde bile kesintisiz hizmet sunar ve müşteri deneyimi optimal seviyede kalır."
              },
              {
                title: "Otomatik Hata Giderme",
                description: "Bir finans kurumunun ajan tabanlı işlem onaylama sistemi, bazı durumlarda beklenmeyen hatalar vererek işlem akışını kesmektedir.",
                steps: [
                  "Anormal ajan davranışlarının gerçek zamanlı tespiti",
                  "Kritik hata uyarılarının oluşturulması",
                  "Önceden tanımlanmış düzeltme adımlarının otomatik uygulanması",
                  "Sorunlu ajanların izole edilmesi ve yedek ajanların devreye girmesi"
                ],
                result: "Müşteriler hiçbir kesinti yaşamadan işlemlerine devam ederler, operasyon ekibi sadece özet bir rapor alır."
              },
              {
                title: "Versiyon Yükseltme Güvenliği",
                description: "Geniş bir ajan ağına sahip bir telekomünikasyon şirketi, yeni özellikleri hızlı bir şekilde ancak risk almadan dağıtmak istemektedir.",
                steps: [
                  "Yeni versiyonun küçük bir ajan grubu üzerinde test edilmesi (canary deployment)",
                  "Test grubunun performans ve hata oranlarının yakından izlenmesi",
                  "Başarılı sonuçlar alındıkça dağıtımın kademeli olarak genişletilmesi",
                  "Herhangi bir sorun durumunda otomatik rollback yapılması"
                ],
                result: "Yenilikler güvenli bir şekilde uygulanır, kullanıcılar sürekli olarak iyileştirilmiş hizmetlerden yararlanır."
              },
              {
                title: "Kapasite Planlama ve Öngörü",
                description: "Bir bulut hizmet sağlayıcısı, müşterilerinin değişken iş yüklerine göre kapasitesini planlamakta zorlanmaktadır.",
                steps: [
                  "Geçmiş kullanım verilerinin makine öğrenmesi ile analiz edilmesi",
                  "Sezonluk ve günlük kullanım paternlerinin çıkarılması",
                  "Geleceğe yönelik kaynak ihtiyacı tahminlerinin oluşturulması",
                  "Proaktif ölçekleme politikalarının otomatik uygulanması"
                ],
                result: "Bulut kaynakları her zaman optimal seviyede tutularak hem maliyet kontrolü sağlanır hem de hizmet kalitesi garantilenir."
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-obsidian-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 hover:shadow-glow transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-3 text-electric-blue">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-2">Çözüm Adımları</h4>
                    {useCase.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start mb-2">
                        <span className="w-5 h-5 rounded-full border border-electric-blue text-electric-blue font-medium flex items-center justify-center mr-2 mt-0.5 text-xs">
                          {stepIndex + 1}
                        </span>
                        <span className="text-sm text-gray-300">{step}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-2">Sonuç</h4>
                    <p className="text-sm text-white bg-electric-blue/10 border border-electric-blue/20 rounded-md p-3">
                      {useCase.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Dashboard Preview Section */}
      <section className="py-24 bg-obsidian-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              Dashboard Önizlemeleri
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agent Palace Ops&apos;un güçlü izleme ve yönetim arayüzleri
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Sistem Sağlık Monitörü",
                description: "Tüm ajanların ve bağlı sistemlerin gerçek zamanlı sağlık durumu."
              },
              {
                title: "Performans Analitikleri",
                description: "Detaylı performans metrikleri, kaynak kullanımı ve darboğaz analizleri."
              },
              {
                title: "Olay Yönetim Konsolu",
                description: "Aktif olayların izlenmesi, önceliklendirilmesi ve çözümlerinin takibi."
              },
              {
                title: "Otomasyon Kontrol Merkezi",
                description: "Otomatik düzeltme kurallarının yönetimi ve etkinliğinin izlenmesi."
              }
            ].map((dashboard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-obsidian-800/30 backdrop-blur-sm border border-white/10 rounded-xl h-64 mb-4 relative overflow-hidden group-hover:border-electric-blue/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent"></div>
                  
                  {/* Dashboard mockup elements - stylized visualization */}
                  <div className="absolute inset-0 p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-electric-blue font-semibold">{dashboard.title}</div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      </div>
                    </div>
                    
                    {/* Mock visualization elements */}
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      <div className="h-2 bg-electric-blue/30 rounded"></div>
                      <div className="h-2 bg-electric-blue/60 rounded"></div>
                      <div className="h-2 bg-electric-blue/40 rounded"></div>
                      <div className="h-2 bg-electric-blue/70 rounded"></div>
                    </div>
                    
                    <div className="h-24 bg-obsidian-900/50 rounded mb-3 border border-white/5 p-2">
                      <div className="flex justify-between mb-2">
                        <div className="w-12 h-2 bg-white/20 rounded"></div>
                        <div className="w-8 h-2 bg-electric-blue/50 rounded"></div>
                      </div>
                      <div className="flex items-end h-12 gap-1">
                        {Array.from({length: 12}).map((_, i) => (
                          <div 
                            key={i}
                            className="bg-electric-blue/60 rounded-t w-full"
                            style={{ height: `${15 + Math.random() * 70}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="w-1/2 h-10 bg-obsidian-900/50 rounded border border-white/5"></div>
                      <div className="w-1/2 h-10 bg-obsidian-900/50 rounded border border-white/5"></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-obsidian-900/90 to-transparent">
                    <p className="text-lg font-medium text-white">{dashboard.title}</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  {dashboard.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technical Specs Section */}
      <section className="py-24 bg-obsidian-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              Teknik Özellikler
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agent Palace Ops&apos;un üstün performans özellikleri ve entegrasyon yetenekleri
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-obsidian-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white text-center">
              Performans Metrikleri
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  label: "Tepki Süresi",
                  value: "< 30 sn",
                  subtext: "Olaylara müdahale için"
                },
                {
                  label: "Uptime Garantisi",
                  value: "% 99.999",
                  subtext: "Yıllık kesinti < 5 dk"
                },
                {
                  label: "Ölçekleme Hızı",
                  value: "< 60 sn",
                  subtext: "Yeni ajan hazırlama"
                },
                {
                  label: "Veri Toplamada Gecikme",
                  value: "< 5 sn",
                  subtext: "Metrik güncellik süresi"
                }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-obsidian-800/70 border border-white/5 rounded-lg p-4 text-center hover:border-electric-blue/30 hover:bg-electric-blue/5 transition-all duration-300"
                >
                  <p className="text-sm text-gray-400 mb-1">{metric.label}</p>
                  <p className="text-3xl font-bold text-electric-blue mb-1">{metric.value}</p>
                  <p className="text-xs text-gray-500">{metric.subtext}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-obsidian-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Teknoloji Yığını
              </h3>
              <div className="space-y-4">
                {[
                  {
                    category: "İzleme Altyapısı",
                    items: ["Prometheus", "Grafana", "OpenTelemetry"]
                  },
                  {
                    category: "Veritabanı",
                    items: ["TimescaleDB", "InfluxDB"]
                  },
                  {
                    category: "Dağıtım",
                    items: ["Kubernetes", "Helm", "FluxCD"]
                  },
                  {
                    category: "Bildirim",
                    items: ["PagerDuty", "Slack", "Email", "SMS"]
                  }
                ].map((tech, index) => (
                  <div key={index}>
                    <h4 className="text-electric-blue mb-2">{tech.category}</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {tech.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className="bg-obsidian-800/50 border border-white/5 rounded px-3 py-2 text-sm text-center text-gray-300"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-obsidian-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Entegrasyon Yöntemleri
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-electric-blue mb-2">API Entegrasyonu</h4>
                  <div className="bg-obsidian-800/70 p-3 rounded-md font-mono text-sm text-gray-300 overflow-x-auto mb-2">
                    <code>GET /api/v1/ops/status</code>
                  </div>
                  <div className="bg-obsidian-800/70 p-3 rounded-md font-mono text-sm text-gray-300 overflow-x-auto">
                    <code>POST /api/v1/ops/agents/scale</code>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-electric-blue mb-2">Dışa Aktarma Formatları</h4>
                  <div className="flex flex-wrap gap-2">
                    {["JSON", "CSV", "Prometheus", "OpenTelemetry"].map((format, i) => (
                      <span 
                        key={i}
                        className="bg-obsidian-800/50 border border-electric-blue/20 text-electric-blue rounded px-3 py-1 text-sm"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-electric-blue mb-2">Üçüncü Parti Entegrasyonları</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {["AWS CloudWatch", "Azure Monitor", "Datadog", "New Relic", "Splunk", "PagerDuty"].map((integration, i) => (
                      <div 
                        key={i}
                        className="bg-obsidian-800/50 border border-white/10 rounded px-3 py-2 text-sm text-gray-300 text-center"
                      >
                        {integration}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pricing Plans Section */}
      <section className="py-24 bg-obsidian-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              Fiyatlandırma Planları
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Her ölçekteki operasyon için uygun fiyatlandırma seçenekleri
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border rounded-xl overflow-hidden relative border-white/10"
            >
              <div className="bg-gradient-to-br from-obsidian-700 to-obsidian-800 p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Temel Plan</h3>
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold text-white">Ücretsiz</span>
                  <span className="text-gray-300 ml-1">Core paketi ile</span>
                </div>
              </div>
              <div className="bg-obsidian-800/80 p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">Temel izleme</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">Manuel ölçekleme</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">Sınırlı metrik saklama</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">10 ajan limiti</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">E-posta desteği</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 rounded-md font-medium bg-obsidian-700 text-white hover:bg-obsidian-600 transition-all duration-300"
                  >
                    Seçin
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border rounded-xl overflow-hidden relative border-electric-blue shadow-glow z-10 scale-105"
            >
              <div className="absolute top-0 right-0 bg-electric-blue text-obsidian-900 font-semibold py-1 px-3 text-sm">
                En Popüler
              </div>
              <div className="bg-gradient-to-br from-electric-blue to-electric-purple p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Pro Plan</h3>
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold text-white">$299</span>
                  <span className="text-gray-300 ml-1">/ay</span>
                </div>
              </div>
              <div className="bg-obsidian-800/80 p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">Gelişmiş izleme</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">Otomatik ölçekleme</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">30 günlük metrik saklama</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">50 ajan limiti</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">7/24 teknik destek</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">Özel dashboard&apos;lar</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 rounded-md font-medium bg-electric-blue text-obsidian-900 hover:bg-electric-blue/90 transition-all duration-300"
                  >
                    Hemen Başlayın
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border rounded-xl overflow-hidden relative border-white/10"
            >
              <div className="bg-gradient-to-br from-cyber-green to-electric-blue p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise Plan</h3>
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold text-white">Özel</span>
                  <span className="text-gray-300 ml-1">Fiyatlandırma</span>
                </div>
              </div>
              <div className="bg-obsidian-800/80 p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">Tam özellik seti</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">Özelleştirilebilir ölçekleme</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">Sınırsız metrik saklama</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">Sınırsız ajan</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">Öncelikli destek</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">Özel entegrasyonlar</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-electric-blue mr-2">✓</span>
                    <span className="text-gray-300">Yerinde kurulum desteği</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 rounded-md font-medium bg-obsidian-700 text-white hover:bg-obsidian-600 transition-all duration-300"
                  >
                    İletişime Geçin
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Customer Testimonials Section */}
      <section className="py-24 bg-obsidian-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              Müşteri Hikayeleri
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agent Palace Ops&apos;u kullanan kurumların deneyimleri
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-obsidian-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-electric-blue/30 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-cyber-yellow">★</span>
                  ))}
                </div>
                <p className="text-gray-300 italic">
                  &ldquo;Agent Palace Ops sayesinde, 500+ yapay zeka ajanımızın performansını tek bir dashboard üzerinden izliyor ve sorunlara anında müdahale edebiliyoruz. Önceden günler süren sorun tespitleri artık saniyeler içinde çözülüyor.&rdquo;
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-electric-blue/20 flex items-center justify-center text-electric-blue font-bold text-xl mr-3">
                  AY
                </div>
                <div>
                  <p className="text-white font-medium">Ali Yılmaz</p>
                  <p className="text-gray-400 text-sm">Operasyon Direktörü, XYZ Lojistik</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-obsidian-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-electric-blue/30 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-cyber-yellow">★</span>
                  ))}
                </div>
                <p className="text-gray-300 italic">
                  &ldquo;Kritik finansal işlemleri yürüten ajanlarımız için %99.999 uptime garantisi vermemiz gerekiyordu. Agent Palace Ops ile bu hedefi aşarak yıllık sadece 5 dakikalık planlanmış bakım dışında hiç kesinti yaşamadık.&rdquo;
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-electric-purple/20 flex items-center justify-center text-electric-purple font-bold text-xl mr-3">
                  AK
                </div>
                <div>
                  <p className="text-white font-medium">Ayşe Kaya</p>
                  <p className="text-gray-400 text-sm">BT Müdürü, ABC Finans</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-obsidian-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-electric-blue/30 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-cyber-yellow">★</span>
                  ))}
                </div>
                <p className="text-gray-300 italic">
                  &ldquo;Black Friday gibi yoğun dönemlerde sistemlerimiz eskiden çökerdi. Ops modülünün akıllı ölçekleme özelliği sayesinde, trafik artışını önceden algılayıp kapasitemizi otomatik olarak artırıyor ve sorunsuz bir alışveriş deneyimi sunabiliyoruz.&rdquo;
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-cyber-green/20 flex items-center justify-center text-cyber-green font-bold text-xl mr-3">
                  MC
                </div>
                <div>
                  <p className="text-white font-medium">Mehmet Can</p>
                  <p className="text-gray-400 text-sm">E-ticaret Yöneticisi, DEF Perakende</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-obsidian-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agent Palace Ops hakkında en çok sorulan soruların yanıtları
            </p>
          </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Agent Palace Ops'u mevcut monitoring altyapımızla entegre edebilir miyim?",
                description: "Evet, Prometheus, Grafana, ELK Stack, Datadog ve New Relic gibi popüler izleme çözümleriyle tam entegrasyon sağlıyoruz. Standart API'ler ve veri formatları kullanarak kolay entegrasyon imkanı sunuyoruz."
              },
              {
                title: "Ops modülü ne kadar ölçeklenebilir?",
                description: "Modülümüz, birkaç ajandan binlerce ajana kadar sorunsuz ölçeklenir ve dağıtık mimarisi sayesinde her büyüklükteki operasyonu destekler. Yatay ve dikey ölçekleme özellikleriyle kaynak ihtiyacınıza göre büyüyebilir."
              },
              {
                title: "Özel metrikler tanımlayabilir miyim?",
                description: "Kesinlikle! Metrics Manager içerisinde özel metrikler tanımlayabilir, bunları izleyebilir ve bu metriklere dayalı uyarılar oluşturabilirsiniz. Ayrıca kendi dashboard'larınızı oluşturarak bu metrikleri görselleştirebilirsiniz."
              },
              {
                title: "On-premise deployment destekleniyor mu?",
                description: "Evet, hem bulut tabanlı hem de şirket içi dağıtım seçenekleri sunuyoruz. Ayrıca hibrit modeli de desteklemekteyiz. Kubernetes, Docker veya doğrudan sanal/fiziksel sunuculara kurulum yapabilirsiniz."
              },
              {
                title: "Ops modülünün minimum sistem gereksinimleri nelerdir?",
                description: "Temel kurulum için 2 CPU, 4GB RAM ve 20GB depolama alanı yeterlidir. Ancak büyük ölçekli dağıtımlar için daha fazla kaynak önerilir. Özellikle metrik saklama süresi ve ajan sayısı arttıkça kaynak ihtiyacı da artacaktır."
              },
              {
                title: "Uyarı bildirimleri için hangi kanalları kullanabilirim?",
                description: "E-posta, SMS, Slack, Microsoft Teams, Discord, PagerDuty, OpsGenie gibi birçok kanal üzerinden bildirim gönderebilirsiniz. Ayrıca webhook desteği sayesinde kendi bildirim sistemlerinizi de entegre edebilirsiniz."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-obsidian-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-electric-blue">
                  {faq.title}
                </h3>
                <p className="text-gray-300">
                  {faq.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-obsidian-900 via-obsidian-800 to-obsidian-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold font-orbitron mb-6 text-white">
              7/24 Kesintisiz Ajan Operasyonu
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Agent Palace Ops ile yapay zeka ajan ekosisteminizi proaktif olarak izleyin, yönetin ve optimize edin.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-electric-blue to-electric-purple text-white font-semibold rounded-lg shadow-glow hover:shadow-glow-intense transition-all duration-300"
              >
                Hemen Başlayın
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-electric-blue font-semibold rounded-lg border-2 border-electric-blue hover:bg-electric-blue/10 transition-all duration-300"
              >
                Demo Talep Edin
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Related Modules Section */}
      <section className="py-16 bg-obsidian-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold font-orbitron mb-4 text-white">
              İlgili Modüller
            </h2>
            <p className="text-gray-300">
              Ops modülüyle birlikte kullanabileceğiniz diğer Agent Palace modülleri
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Flow",
                color: "bg-electric-purple/20 border-electric-purple/40 text-electric-purple",
                link: "/modules/flow"
              },
              {
                name: "Task",
                color: "bg-cyber-green/20 border-cyber-green/40 text-cyber-green",
                link: "/modules/task"
              },
              {
                name: "Core",
                color: "bg-electric-blue/20 border-electric-blue/40 text-electric-blue",
                link: "/modules/core"
              }
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={module.link} className="block">
                  <div className={`p-6 rounded-xl border ${module.color} hover:shadow-md transition-all duration-300`}>
                    <h3 className="text-xl font-semibold text-center">
                      Agent Palace {module.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
