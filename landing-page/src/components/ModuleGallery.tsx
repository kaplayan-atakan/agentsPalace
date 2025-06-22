'use client';

import { motion } from 'framer-motion';
import { 
  Workflow, 
  CheckSquare, 
  Activity, 
  Map, 
  Brain, 
  Settings, 
  Mic,
  ArrowRight
} from 'lucide-react';

export default function ModuleGallery() {
  const modules = [
    {
      id: 'flow',
      name: 'AgentsFlow',
      slogan: 'Design. Trigger. Automate.',
      description: 'Akış tabanlı otomasyon, koşullu yönlendirme, görsel sürükle-bırak flow builder',
      icon: Workflow,
      color: 'var(--electric-purple)',
      features: [
        'JSON/YAML ile akış tanımı',
        'onSuccess, onError, onTimeout geçişleri',
        'Retry policy ve fallback chain',
        'Paralel/sıralı görev yönetimi',
        'Low-code workflow builder UI'
      ],
      status: 'Core Module'
    },
    {
      id: 'task',
      name: 'AgentsTask',
      slogan: 'Every Task, The Right Agent.',
      description: 'Görev tabanlı agent orchestrasyonu, task assignment ve agent matchmaking',
      icon: CheckSquare,
      color: 'var(--cyber-green)',
      features: [
        'Görev kuyruğu yönetimi',
        'Priority, deadline, resource constraint',
        'Agent göreve göre atama',
        'Feedback loop ve otomatik çözüm'
      ],
      status: 'Core Module'
    },
    {
      id: 'ops',
      name: 'AgentsOps',
      slogan: 'Zero Downtime, Maximum Insight.',
      description: 'Operasyonel yönetim, performans takibi ve sağlık izleme',
      icon: Activity,
      color: 'var(--electric-blue)',
      features: [
        'Agent health check ve loglama',
        'Hata tespiti ve auto-healing',
        'Otomatik ölçekleme',
        'Versiyonlama ve rollback'
      ],
      status: 'Core Module'
    },
    {
      id: 'map',
      name: 'AgentsMap',
      slogan: 'See Your Agents Move.',
      description: 'Lokasyon bazlı agent görünümü ve coğrafi orchestration',
      icon: Map,
      color: 'var(--neon-orange)',
      features: [
        'Harita tabanlı gösterim',
        'Agent heatmap ve hareket takibi',
        'Konum bazlı aktivite izleme',
        'Gerçek zamanlı pozisyon güncellemeleri'
      ],
      status: 'Specialized Module'
    },
    {
      id: 'brain',
      name: 'AgentsBrain',
      slogan: 'Shared Memory. Smarter Agents.',
      description: 'Ortak bilgi/bellek modülü, bağlamsal hafıza yönetimi',
      icon: Brain,
      color: 'var(--cyber-mint)',
      features: [
        'Vector DB entegrasyonu',
        'Short-term/long-term bellek yönetimi',
        'Belge ve olay hafızası',
        'Agent&apos;lar arası bilgi paylaşımı'
      ],
      status: 'AI Module'
    },
    {
      id: 'core',
      name: 'AgentsCore',
      slogan: 'Secure, Extend, Control.',
      description: 'Temel altyapı, yetkilendirme ve ortak hizmetler',
      icon: Settings,
      color: 'var(--electric-purple)',
      features: [
        'RBAC ve API token yönetimi',
        'Plugin mimarisi ve SDK',
        'Merkezi logging ve tracing',
        'Configuration management'
      ],
      status: 'Infrastructure'
    },
    {
      id: 'voice',
      name: 'AgentsVoice',
      slogan: 'Talk to Your Agents.',
      description: 'Sesli komut ve asistan entegrasyonu (opsiyonel modül)',
      icon: Mic,
      color: 'var(--neon-red)',
      features: [
        'Sesli komut tanıma',
        'Text-to-speech yanıtlar',
        'Çok dilli asistan desteği',
        'Akıllı sesli etkileşim'
      ],
      status: 'Optional Module'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Core Module': return 'var(--cyber-green)';
      case 'AI Module': return 'var(--electric-purple)';
      case 'Specialized Module': return 'var(--neon-orange)';
      case 'Infrastructure': return 'var(--electric-blue)';
      case 'Optional Module': return 'var(--cyber-mint)';
      default: return 'var(--electric-purple)';
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--obsidian-800)]/30 to-transparent"></div>
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
              Modül Galerisi
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Her işlev için özelleştirilmiş modüller - tek platformda, güçlü orchestration
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-white/30 transition-all duration-500 group-hover:glow-box">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${module.color}20, ${module.color}40)`,
                        border: `2px solid ${module.color}60`
                      }}
                    >
                      <module.icon 
                        className="w-8 h-8" 
                        style={{ color: module.color }} 
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-['Orbitron'] group-hover:glow-text">
                        {module.name}
                      </h3>
                      <p 
                        className="text-lg font-medium italic"
                        style={{ color: module.color }}
                      >
                        {module.slogan}
                      </p>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div 
                    className="px-3 py-1 rounded-full text-xs font-semibold border"
                    style={{ 
                      color: getStatusColor(module.status),
                      borderColor: getStatusColor(module.status) + '40',
                      backgroundColor: getStatusColor(module.status) + '10'
                    }}
                  >
                    {module.status}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {module.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {module.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: module.color }}
                      ></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Action Button */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm font-semibold cursor-pointer"
                  style={{ color: module.color }}
                >
                  <span>Detayları Keşfet</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>

                {/* Hover Background Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${module.color}, transparent)` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Module Interaction Demo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8 font-['Orbitron']">
            Modüller Arası Etkileşim
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Flow Triggers Task */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[var(--electric-purple)]/20 border-2 border-[var(--electric-purple)] rounded-lg flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-[var(--electric-purple)]" />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="w-12 h-12 bg-[var(--cyber-green)]/20 border-2 border-[var(--cyber-green)] rounded-lg flex items-center justify-center">
                  <CheckSquare className="w-6 h-6 text-[var(--cyber-green)]" />
                </div>
              </div>
              <p className="text-sm text-gray-300">Flow triggers Task</p>
            </div>

            {/* Task Monitored by Ops */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[var(--cyber-green)]/20 border-2 border-[var(--cyber-green)] rounded-lg flex items-center justify-center">
                  <CheckSquare className="w-6 h-6 text-[var(--cyber-green)]" />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="w-12 h-12 bg-[var(--electric-blue)]/20 border-2 border-[var(--electric-blue)] rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-[var(--electric-blue)]" />
                </div>
              </div>
              <p className="text-sm text-gray-300">Task monitored by Ops</p>
            </div>

            {/* Brain Learns from All */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[var(--electric-blue)]/20 border-2 border-[var(--electric-blue)] rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-[var(--electric-blue)]" />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="w-12 h-12 bg-[var(--cyber-mint)]/20 border-2 border-[var(--cyber-mint)] rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-[var(--cyber-mint)]" />
                </div>
              </div>
              <p className="text-sm text-gray-300">Brain learns from all</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Hangi Modüllerle Başlamak İstiyorsunuz?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neon-button px-6 py-3 bg-gradient-to-r from-[var(--electric-purple)] to-[var(--electric-blue)] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Core Modüller
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neon-button px-6 py-3 bg-transparent border-2 border-[var(--cyber-green)] text-[var(--cyber-green)] font-semibold rounded-lg hover:bg-[var(--cyber-green)] hover:text-black transition-all duration-300"
            >
              AI Modüller
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
