'use client';

import { motion } from 'framer-motion';
import { 
  Truck, 
  Headphones, 
  Wifi, 
  Building2,
  ArrowRight,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';

export default function UseCases() {
  const useCases = [
    {
      id: 'logistics',
      title: 'Lojistik & Tedarik Zinciri',
      subtitle: 'AI agent&apos;larla otomatik iş akışı yönetimi',
      icon: Truck,
      color: 'var(--electric-purple)',
      description: 'Lojistik firmaları AgentsPalace ile tüm operasyonlarını tek merkezden yönetiyor.',
      flow: [
        'Sipariş alındığında otomatik route optimization',
        'Driver agent&apos;lar ile real-time koordinasyon',
        'Hava durumu/trafik şartlarına göre akış değişikliği',
        'Müşteri bilgilendirme ve ETA güncellemeleri'
      ],
      metrics: {
        efficiency: '+45% Operasyonel Verimlilik',
        cost: '-30% Operasyon Maliyeti',
        satisfaction: '+60% Müşteri Memnuniyeti'
      }
    },
    {
      id: 'support',
      title: 'Müşteri Destek Sistemleri',
      subtitle: 'Akıllı task-based agent dağıtımı',
      icon: Headphones,
      color: 'var(--cyber-green)',
      description: 'Müşteri destek ekipleri AgentsTask ile doğru agentta doğru görevler.',
      flow: [
        'Müşteri isteği kategorize edilir',
        'En uygun agent otomatik atanır',
        'Escalation kuralları devreye girer',
        'Çözüm tracking&apos;i ve feedback loop'
      ],
      metrics: {
        efficiency: '+70% Çözüm Hızı',
        cost: '-40% Agent Workload',
        satisfaction: '+55% CSAT Score'
      }
    },
    {
      id: 'iot',
      title: 'IoT & RTLS Sistemleri',
      subtitle: 'Gerçek zamanlı lokasyon bazlı orchestration',
      icon: Wifi,
      color: 'var(--neon-orange)',
      description: 'RTLS altyapılı IoT sistemlerde AgentsMap ile coğrafi agent koordinasyonu.',
      flow: [
        'Sensör verilerinden lokasyon tespiti',
        'Proximity-based agent aktivasyonu',
        'Zone-based business rule execution',
        'Heat map analizi ve predictive routing'
      ],
      metrics: {
        efficiency: '+85% Response Time',
        cost: '-25% Energy Consumption',
        satisfaction: '+50% System Reliability'
      }
    },
    {
      id: 'enterprise',
      title: 'Kurumsal Karar Destek',
      subtitle: 'Real-time decision flow automation',
      icon: Building2,
      color: 'var(--electric-blue)',
      description: 'Büyük kurumlarda AgentsFlow ile karmaşık karar ağaçları ve onay süreçleri.',
      flow: [
        'Multi-departman approval chain',
        'Conditional branching ve escalation',
        'SLA monitoring ve timeout handling',
        'Audit trail ve compliance reporting'
      ],
      metrics: {
        efficiency: '+60% Process Speed',
        cost: '-35% Administrative Overhead',
        satisfaction: '+40% Employee Satisfaction'
      }
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--obsidian-900)] via-[var(--obsidian-800)] to-[var(--obsidian-900)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-['Orbitron'] text-white mb-6">
            <span className="bg-gradient-to-r from-[var(--electric-purple)] to-[var(--cyber-green)] bg-clip-text text-transparent">
              Kullanım Senaryoları
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Gerçek dünya problemlerine AI orchestration çözümleri
          </p>
        </motion.div>

        {/* Use Cases */}
        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${useCase.color}20, ${useCase.color}40)`,
                      border: `2px solid ${useCase.color}60`
                    }}
                  >
                    <useCase.icon 
                      className="w-8 h-8" 
                      style={{ color: useCase.color }} 
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-['Orbitron']">
                      {useCase.title}
                    </h3>
                    <p 
                      className="text-lg"
                      style={{ color: useCase.color }}
                    >
                      {useCase.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Flow Steps */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">İş Akışı:</h4>
                  {useCase.flow.map((step, stepIndex) => (
                    <motion.div
                      key={stepIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + stepIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold mt-0.5"
                           style={{ color: useCase.color }}>
                        {stepIndex + 1}
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(useCase.metrics).map(([key, value]) => (
                    <div key={key} className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-400 mb-1 capitalize">{key}</div>
                      <div 
                        className="font-semibold"
                        style={{ color: useCase.color }}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  {/* Main Visual Container */}
                  <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:glow-box transition-all duration-500">
                    {/* Flow Diagram */}
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Agent Orchestration Flow</h4>
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-current to-transparent"
                             style={{ color: useCase.color }}></div>
                      </div>

                      {/* Flow Nodes */}
                      <div className="space-y-4">
                        {useCase.flow.slice(0, 3).map((_, flowIndex) => (
                          <motion.div
                            key={flowIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.2 + flowIndex * 0.15 }}
                            className="flex items-center gap-4"
                          >
                            <div 
                              className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                              style={{ 
                                borderColor: useCase.color,
                                backgroundColor: `${useCase.color}20`
                              }}
                            >
                              <CheckCircle className="w-6 h-6" style={{ color: useCase.color }} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <Clock className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-400">Step {flowIndex + 1}</span>
                              </div>
                              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: '100%' }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: index * 0.2 + flowIndex * 0.2 }}
                                  className="h-full rounded-full"
                                  style={{ backgroundColor: useCase.color }}
                                />
                              </div>
                            </div>
                            {flowIndex < 2 && (
                              <ArrowRight className="w-5 h-5 text-gray-400" />
                            )}
                          </motion.div>
                        ))}
                      </div>

                      {/* Status Indicators */}
                      <div className="flex justify-center gap-4 pt-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" style={{ color: useCase.color }} />
                          <span className="text-sm text-gray-300">Active Agents</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: useCase.color }}
                          ></div>
                          <span className="text-sm text-gray-300">Live Processing</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 w-8 h-8 rounded-full"
                    style={{ backgroundColor: useCase.color }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[var(--obsidian-800)] to-[var(--obsidian-700)] backdrop-blur-sm border border-[var(--electric-purple)]/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-['Orbitron']">
              Sizin Use Case&apos;iniz Nedir?
            </h3>
            <p className="text-gray-300 mb-6">
              AgentsPalace ile kendi sektörünüzde nasıl devrim yaratacağınızı keşfedin
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neon-button px-8 py-3 bg-gradient-to-r from-[var(--electric-purple)] to-[var(--cyber-green)] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Özel Demo Talep Et
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
