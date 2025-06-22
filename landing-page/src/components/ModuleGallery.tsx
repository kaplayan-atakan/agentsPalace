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
import Link from 'next/link';

export default function ModuleGallery() {
  const modules = [    {      id: 'flow',
      name: 'Agent Palace Flow',
      slogan: 'Design. Trigger. Automate.',
      description: 'Akış tabanlı otomasyon, koşullu yönlendirme, görsel sürükle-bırak flow builder',
      icon: Workflow,      className: "text-electric-purple",
      color: "#a259f7",
      features: [
        'JSON/YAML ile akış tanımı',
        'onSuccess, onError, onTimeout geçişleri',
        'Retry policy ve fallback chain',
        'Paralel/sıralı görev yönetimi',
        'Low-code workflow builder UI'
      ],
      status: 'Core Module'
    },    {      id: 'task',
      name: 'Agent Palace Task',
      slogan: 'Every Task, The Right Agent.',
      description: 'Görev tabanlı agent orchestrasyonu, task assignment ve agent matchmaking',
      icon: CheckSquare,      className: "text-cyber-green",
      color: "#39ff14",
      features: [
        'Görev kuyruğu yönetimi',
        'Priority, deadline, resource constraint',
        'Agent göreve göre atama',
        'Feedback loop ve otomatik çözüm'
      ],
      status: 'Core Module'
    },
    {      id: 'ops',
      name: 'Agent Palace Ops',
      slogan: 'Zero Downtime, Maximum Insight.',
      description: 'Operasyonel yönetim, performans takibi ve sağlık izleme',
      icon: Activity,
      className: "text-electric-blue",
      color: "#6236ff",
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
      className: "text-neon-orange",
      color: "#ff7e29",
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
      className: "text-cyber-mint",
      color: "#00ffb3",
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
      className: "text-electric-purple",
      color: "#a259f7",
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
      className: "text-neon-red",
      color: "#ff4e00",
      features: [
        'Sesli komut tanıma',
        'Text-to-speech yanıtlar',
        'Çok dilli asistan desteği',
        'Akıllı sesli etkileşim'
      ],
      status: 'Optional Module'    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Core Module': return 'border-cyber-green text-cyber-green bg-cyber-green/10';
      case 'AI Module': return 'border-electric-purple text-electric-purple bg-electric-purple/10';
      case 'Specialized Module': return 'border-neon-orange text-neon-orange bg-neon-orange/10';
      case 'Infrastructure': return 'border-electric-blue text-electric-blue bg-electric-blue/10';
      case 'Optional Module': return 'border-cyber-mint text-cyber-mint bg-cyber-mint/10';
      default: return 'border-electric-purple text-electric-purple bg-electric-purple/10';
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden" aria-label="Modül galerisi bölümü">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-800/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-6">
            <span className="bg-gradient-to-r from-electric-purple to-cyber-green bg-clip-text text-transparent">
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
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-white/30 transition-all duration-500 group-hover:shadow-glow">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">                  <div className="flex items-center gap-4">                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20">
                      <module.icon 
                        className={`w-8 h-8 ${module.className}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-orbitron group-hover:drop-shadow-neon">
                        {module.name}
                      </h3>
                      <p className={`text-lg font-medium italic ${module.className}`}>
                        {module.slogan}
                      </p>
                    </div>
                  </div>
                    {/* Status Badge */}
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(module.status)}`}>
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
                    >                      <div className={`w-2 h-2 rounded-full ${module.className.replace('text-', 'bg-')}`}></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Action Button */}                <Link href={`/modules/${module.id}`}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-2 text-sm font-semibold cursor-pointer ${module.className}`}
                  >
                    <span>Detayları Keşfet</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>{/* Hover Background Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br from-current to-transparent"></div>
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
          <h3 className="text-2xl font-bold text-center text-white mb-8 font-orbitron">
            Modüller Arası Etkileşim
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Flow Triggers Task */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-electric-purple/20 border-2 border-electric-purple rounded-lg flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-electric-purple" />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="w-12 h-12 bg-cyber-green/20 border-2 border-cyber-green rounded-lg flex items-center justify-center">
                  <CheckSquare className="w-6 h-6 text-cyber-green" />
                </div>
              </div>
              <p className="text-sm text-gray-300">Flow triggers Task</p>
            </div>

            {/* Task Monitored by Ops */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-cyber-green/20 border-2 border-cyber-green rounded-lg flex items-center justify-center">
                  <CheckSquare className="w-6 h-6 text-cyber-green" />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="w-12 h-12 bg-electric-blue/20 border-2 border-electric-blue rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-electric-blue" />
                </div>
              </div>
              <p className="text-sm text-gray-300">Task monitored by Ops</p>
            </div>

            {/* Brain Learns from All */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-electric-blue/20 border-2 border-electric-blue rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-electric-blue" />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="w-12 h-12 bg-cyber-mint/20 border-2 border-cyber-mint rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-cyber-mint" />
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
              className="px-6 py-3 bg-gradient-to-r from-electric-purple to-electric-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Core Modüller
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent border-2 border-cyber-green text-cyber-green font-semibold rounded-lg hover:bg-cyber-green hover:text-black transition-all duration-300"
            >
              AI Modüller
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
