'use client';

import { motion } from 'framer-motion';
import { CheckSquare, GitBranch, Zap, Users, Clock, BarChart, Database, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import MermaidDiagram from '@/components/MermaidDiagram';

export default function TaskPage() {
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
                <CheckSquare className="w-16 h-16 text-cyber-green drop-shadow-neon" />
                <h1 className="text-6xl font-bold font-orbitron drop-shadow-neon bg-gradient-to-r from-cyber-green to-cyber-mint bg-clip-text text-transparent">
                  Task
                </h1>
              </div>
              <p className="text-2xl text-cyber-green font-medium">
                Agent Palace Task
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                Her Görev, Doğru Agent
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Agent Palace Task, görev tabanlı agent orchestrasyonuyla karmaşık iş süreçlerini parçalara ayırır, doğru agent'lara atar ve tüm sürecin izlenmesini sağlar.
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
                className="px-8 py-4 bg-gradient-to-r from-cyber-green to-cyber-mint text-black font-semibold rounded-lg shadow-glow focus:outline-none focus:ring-2 focus:ring-cyber-green focus:ring-offset-2 focus:ring-offset-obsidian-900"
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
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-cyber-green to-cyber-mint bg-clip-text text-transparent">
              Temel Özellikler
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agent Palace Task, görev yönetimi ve agent orchestrasyonu için ihtiyacınız olan tüm özellikleri sunar.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GitBranch,
                title: "Görev Kuyruğu Yönetimi",
                description: "Öncelik, son tarih ve kaynak kısıtlamalarına göre dinamik olarak sıralanan akıllı görev kuyrukları.",
                color: "from-cyber-green to-cyber-mint"
              },
              {
                icon: Users,
                title: "Agent Matchmaking",
                description: "Görev gereksinimleri ve agent özellikleri analiz edilerek en uygun agent'a otomatik atama.",
                color: "from-cyber-mint to-electric-blue"
              },
              {
                icon: Zap,
                title: "Paralel & Sıralı Çalıştırma",
                description: "Görevleri bağımlılıklarına göre optimum şekilde paralel veya sıralı olarak yürütme.",
                color: "from-electric-blue to-electric-purple"
              },
              {
                icon: AlertCircle,
                title: "Retry Mekanizması",
                description: "Hata durumlarında exponential backoff ve circuit breaker gibi akıllı yeniden deneme stratejileri.",
                color: "from-electric-purple to-neon-orange"
              },
              {
                icon: Clock,
                title: "İlerleme Takibi",
                description: "Görevlerin gerçek zamanlı durum, ilerleme ve performans metriklerinin izlenmesi.",
                color: "from-neon-orange to-cyber-green"
              },
              {
                icon: BarChart,
                title: "İstatistik ve Raporlama",
                description: "Görev tamamlanma oranları, agent performansı ve darboğaz analizini içeren detaylı raporlama.",
                color: "from-cyber-green to-cyber-mint"
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
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-cyber-green to-cyber-mint bg-clip-text text-transparent">
              Nasıl Çalışır
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agent Palace Task, modüler ve esnek mimarisi sayesinde karmaşık görev yönetimini basitleştirir.
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
                definition={`flowchart TB
  subgraph "Task Module"
    TQ[Task Queue] --> TS[Task Scheduler]
    TS --> AM[Agent Matcher]
    AM --> EE[Execution Engine]
    EE -->|Success| SM[State Manager]
    EE -->|Failure| EH[Error Handler]
    EH -->|Retry| AM
    EH -->|Critical Error| SM
    SM -->|Complete| TQ
  end

  subgraph "External"
    API[API Gateway] --> TQ
    EE <--> Agents[Agent Pool]
    SM --> DB[(Task Database)]
    SM --> Flow[Flow Module]
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
                  "Task Queue: Görevleri öncelik ve bağımlılıklarına göre tutar",
                  "Task Scheduler: Görevleri ne zaman yürütüleceğini planlar",
                  "Agent Matcher: En uygun agent'ı belirler ve görevi atar",
                  "Execution Engine: Görevin yürütülmesini kontrol eder",
                  "State Manager: Görev durumunu ve sonuçlarını yönetir",
                  "Error Handler: Hataları analiz eder ve iyileştirme stratejileri uygular"
                ].map((component, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyber-green text-obsidian-900 font-bold mr-3 flex-shrink-0">
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
                Görev Yaşam Döngüsü
              </h3>
              <ol className="space-y-4">
                {[
                  "Görev Oluşturma: API veya Flow modülü aracılığıyla yeni görev oluşturulur",
                  "Sıralama: Görev öncelik ve bağımlılıklarına göre kuyruğa alınır",
                  "Agent Eşleştirme: Görev gereksinimlerine en uygun agent seçilir",
                  "Yürütme: Agent görevi yürütür ve sonuçları bildirir",
                  "Durum Yönetimi: Görevin durumu ve sonuçları kaydedilir",
                  "Hata İşleme: Başarısız görevler için retry veya alternatif stratejiler uygulanır",
                  "Tamamlama: Görev sonuçları ilgili sistemlere iletilir"
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyber-green text-obsidian-900 font-bold mr-3 flex-shrink-0">
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
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-cyber-green to-cyber-mint bg-clip-text text-transparent">
              Kullanım Senaryoları
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agent Palace Task'ın farklı endüstrilerde nasıl kullanılabileceğini keşfedin.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Veri Toplama ve Analiz",
                description: "Çoklu kaynaklardan veri toplama, temizleme, birleştirme ve analiz etme görevlerinin otomatize edilmesi.",
                steps: [
                  "Farklı API'lerden veri toplama görevleri oluşturma",
                  "Toplanan verilerin temizlenmesi ve normalleştirilmesi",
                  "Verilerin birleştirilmesi ve analizi",
                  "Sonuçların raporlanması ve ilgili kişilere iletilmesi"
                ]
              },
              {
                title: "İş Akışı Otomasyonu",
                description: "Departmanlar arası belge işleme, onay süreçleri ve raporlama gibi iş akışlarının otomatizasyonu.",
                steps: [
                  "Belgelerin alınması ve işlenmesi",
                  "İlgili kişilere onay görevlerinin atanması",
                  "Onay sürecinin izlenmesi ve hatırlatıcıların gönderilmesi",
                  "Onaylanan belgelerin arşivlenmesi ve ilgili sistemlere iletilmesi"
                ]
              },
              {
                title: "Müşteri Hizmetleri Otomasyonu",
                description: "Müşteri taleplerinin analizi, kategorizasyonu ve uygun temsilcilere yönlendirilmesi süreci.",
                steps: [
                  "Müşteri taleplerinin alınması ve analizi",
                  "Taleplerin kategorizasyonu ve önceliklendirilmesi",
                  "Uygun müşteri hizmetleri temsilcilerine atanması",
                  "Yanıtların takibi ve müşteri memnuniyetinin ölçülmesi"
                ]
              },
              {
                title: "Dağıtık Hesaplama",
                description: "Büyük hesaplama görevlerinin alt parçalara bölünerek paralel yürütülmesi ve sonuçların birleştirilmesi.",
                steps: [
                  "Hesaplama görevinin analizi ve alt parçalara bölünmesi",
                  "Alt görevlerin uygun işlem kaynaklarına atanması",
                  "Paralel yürütmenin izlenmesi ve hata yönetimi",
                  "Alt görev sonuçlarının birleştirilmesi ve nihai sonucun oluşturulması"
                ]
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
                <h3 className="text-2xl font-semibold mb-3 text-cyber-green">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-2">İş Akışı</h4>
                  {useCase.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start">
                      <span className="w-5 h-5 rounded-full border border-cyber-green text-cyber-green font-medium flex items-center justify-center mr-2 mt-0.5 text-xs">
                        {stepIndex + 1}
                      </span>
                      <span className="text-sm text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* UI Mockups Section */}
      <section className="py-24 bg-obsidian-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-cyber-green to-cyber-mint bg-clip-text text-transparent">
              UI Mockupları
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Task modülünün kullanıcı arayüzü tasarım örnekleri.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Task Dashboard",
                description: "Tüm görevlerin durumunu ve performans metriklerini bir bakışta görüntüleyin."
              },
              {
                title: "Agent Atama Paneli",
                description: "Agent'ların yeteneklerini ve mevcut görevlerini görüntüleyin, manuel atamalar yapın."
              },
              {
                title: "Görev Oluşturma Ekranı",
                description: "Yeni görevleri tanımlayın, parametrelerini ayarlayın ve bağımlılıkları belirleyin."
              },
              {
                title: "İlerleme İzleme Ekranı",
                description: "Görevlerin gerçek zamanlı ilerlemesini ve sonuçlarını izleyin."
              }
            ].map((mockup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-obsidian-800/30 backdrop-blur-sm border border-white/10 rounded-xl h-64 mb-4 relative overflow-hidden group-hover:border-cyber-green/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-cyber-green/10 flex items-center justify-center">
                      <CheckSquare className="w-10 h-10 text-cyber-green/40" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-obsidian-900/90 to-transparent">
                    <p className="text-lg font-medium text-white">{mockup.title}</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  {mockup.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Integrations Section */}
      <section className="py-24 bg-obsidian-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-orbitron mb-4 bg-gradient-to-r from-cyber-green to-cyber-mint bg-clip-text text-transparent">
              Entegrasyonlar
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Task modülü diğer Agent Palace modülleri ve üçüncü parti hizmetlerle kusursuz entegre olur.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-obsidian-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Diğer Agent Palace Modülleri
              </h3>
              <div className="space-y-6">
                {[
                  {
                    name: "Flow Modülü",
                    description: "Flow modülünden görevlerin otomatik oluşturulması ve tetiklenmesi."
                  },
                  {
                    name: "Ops Modülü",
                    description: "Task performansı izleme ve hata tespiti/iyileştirme."
                  },
                  {
                    name: "Brain Modülü",
                    description: "Geçmiş görevlerden öğrenme ve gelecek görevler için optimizasyon."
                  },
                  {
                    name: "Map Modülü",
                    description: "Konum bazlı görev atama ve coğrafi olarak dağıtılmış agent yönetimi."
                  }
                ].map((integration, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-cyber-green/20 border border-cyber-green/40 flex items-center justify-center flex-shrink-0 mr-4">
                      <div className="w-4 h-4 rounded-full bg-cyber-green"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-cyber-green mb-1">{integration.name}</h4>
                      <p className="text-sm text-gray-300">{integration.description}</p>
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
                Üçüncü Parti Entegrasyonları
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "GitHub Actions",
                  "Jenkins",
                  "Jira",
                  "Asana",
                  "Slack",
                  "MS Teams",
                  "Salesforce",
                  "HubSpot"
                ].map((tool, index) => (
                  <div key={index} className="bg-obsidian-800/70 border border-white/5 rounded-lg p-3 hover:border-cyber-green/30 transition-all duration-300">
                    <p className="text-white text-center">{tool}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-obsidian-700/30 border border-white/10 rounded-lg">
                <h4 className="text-lg font-medium text-white mb-2">API Entegrasyonu</h4>
                <div className="bg-obsidian-900/70 p-3 rounded-md font-mono text-sm text-gray-300 overflow-x-auto">
                  <code>POST /api/v1/task/create</code>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-obsidian-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white text-center">
              Teknik Özellikler
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: Database,
                  title: "Ölçeklenebilirlik",
                  description: "Yatay ölçeklenebilir mimari ile milyon ölçeğinde görev yönetimi"
                },
                {
                  icon: AlertCircle,
                  title: "Dayanıklılık",
                  description: "Sistem kesintilerinde otomatik kurtarma ve sürekli görev durumu takibi"
                },
                {
                  icon: Zap,
                  title: "Performans",
                  description: "100ms altında görev atama gecikme süresi ve yüksek verimli yürütme"
                },
                {
                  icon: CheckSquare,
                  title: "Güvenlik",
                  description: "Görev yürütme izolasyonu ve detaylı yetkilendirme kontrolleri"
                }
              ].map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-obsidian-800/70 border border-white/5 rounded-lg p-4"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-md bg-cyber-green/20 flex items-center justify-center mr-3">
                      <spec.icon className="w-4 h-4 text-cyber-green" />
                    </div>
                    <h4 className="text-white font-medium">{spec.title}</h4>
                  </div>
                  <p className="text-sm text-gray-300">{spec.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Agent Palace Task ile İş Süreçlerinizi Dönüştürün
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Karmaşık iş süreçlerini otomatikleştirin, görevleri akıllıca yönetin ve agent'lardan maksimum verim alın.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyber-green to-cyber-mint text-black font-semibold rounded-lg shadow-glow hover:shadow-glow-intense transition-all duration-300"
              >
                Hemen Başlayın
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-cyber-green font-semibold rounded-lg border-2 border-cyber-green hover:bg-cyber-green/10 transition-all duration-300"
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
              Task modülüyle birlikte kullanabileceğiniz diğer Agent Palace modülleri
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
                name: "Ops",
                color: "bg-electric-blue/20 border-electric-blue/40 text-electric-blue",
                link: "/modules/ops"
              },
              {
                name: "Brain",
                color: "bg-cyber-mint/20 border-cyber-mint/40 text-cyber-mint",
                link: "/modules/brain"
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
