'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    {
      title: "Dağıtık Agent Yönetimi Kaotik",
      description: "Farklı sistemlerde çalışan agent'ları koordine etmek ve takip etmek son derece zor.",
      icon: "⚡"
    },
    {
      title: "Çok Dilli Entegrasyon Zorluğu",
      description: "Node.js, .NET, Python, Go ile yazılmış agent'ları tek platformda birleştirmek karmaşık.",
      icon: "🔧"
    },
    {
      title: "Hata Yönetimi & Takip",
      description: "Koşullu yönlendirme, hata yakalama ve sistem takibi manuel ve verimsiz.",
      icon: "❌"
    }
  ];

  const solutions = [
    {
      title: "JSON/YAML Tabanlı Akış Tanımı",
      description: "Tüm agent akışlarınızı basit, okunabilir dosyalarla tanımlayın.",
      icon: "📄"
    },
    {
      title: "Akıllı Yönlendirme Sistemi",
      description: "OnSuccess, OnError, OnTimeout ve koşullu geçişlerle tam kontrol.",
      icon: "🔄"
    },
    {
      title: "Merkezi İzleme & Yönetim",
      description: "Tek UI, gerçek zamanlı loglama, retry policy ve fallback chain desteği.",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
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
            <span className="text-[var(--neon-red)]">Problem</span> → <span className="text-[var(--cyber-green)]">Çözüm</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Geleneksel agent yönetiminin karmaşıklığından, modern orchestration çözümüne
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problems Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-[var(--neon-red)]" />
                <h3 className="text-3xl font-bold text-[var(--neon-red)] font-['Orbitron']">
                  PROBLEMLER
                </h3>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-[var(--neon-red)] to-transparent rounded-full"></div>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-black/40 backdrop-blur-sm border border-[var(--neon-red)]/30 rounded-lg p-6 hover:border-[var(--neon-red)] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{problem.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-[var(--neon-red)] transition-colors">
                          {problem.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arrow Transition */}
          <div className="hidden lg:flex justify-center">
            <motion.div
              animate={{ 
                x: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl"
            >
              <ArrowRight className="w-16 h-16 text-[var(--electric-purple)] glow-text" />
            </motion.div>
          </div>

          {/* Solutions Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-[var(--cyber-green)]" />
                <h3 className="text-3xl font-bold text-[var(--cyber-green)] font-['Orbitron']">
                  ÇÖZÜMLER
                </h3>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-[var(--cyber-green)] to-transparent rounded-full"></div>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="relative group"
                >
                  <div className="bg-black/40 backdrop-blur-sm border border-[var(--cyber-green)]/30 rounded-lg p-6 hover:border-[var(--cyber-green)] hover:glow-box transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{solution.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-[var(--cyber-green)] transition-colors">
                          {solution.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[var(--electric-purple)]/20 to-[var(--cyber-green)]/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              AgentsPalace ile Farkı Hissedin
            </h3>            <p className="text-gray-300 mb-6">
              Tek bir kontrol panelinden tüm agent&apos;larınızı yönetin, izleyin ve ölçeklendirin
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neon-button px-8 py-3 bg-gradient-to-r from-[var(--electric-purple)] to-[var(--cyber-green)] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Platformu Keşfet
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
