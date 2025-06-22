'use client';

import { motion } from 'framer-motion';
import { 
  Network, 
  Globe, 
  Container, 
  MessageSquare, 
  Settings, 
  BarChart3,
  Code2,
  Shield
} from 'lucide-react';

export default function PlatformFeatures() {  
  const features = [
    {
      icon: Network,
      title: "Microservice Mimarisi",
      description: "Her modül bağımsız Docker container olarak çalışır ve ölçeklenir",
      className: "text-electric-purple",
      color: "#a259f7",
      delay: 0
    },
    {
      icon: Code2,
      title: "Çoklu Dil Desteği",
      description: "Node.js öncelikli, .NET, Python ve Go agent geliştirme desteği",
      className: "text-cyber-green",
      color: "#39ff14",
      delay: 0.1
    },    {
      icon: Container,
      title: "Docker Tabanlı Runtime",
      description: "Containerized deployment ve otomatik scaling desteği",
      className: "text-electric-blue",
      color: "#6236ff",
      delay: 0.2
    },
    {
      icon: MessageSquare,
      title: "Kafka Message Bus",
      description: "Yüksek performanslı, güvenilir event-driven komunikasyon",
      className: "text-neon-orange",
      color: "#ff7e29",
      delay: 0.3
    },
    {
      icon: Settings,
      title: "Merkezi Konfigürasyon",
      description: "Tek noktadan tüm agent'lar ve akışlar için yapılandırma yönetimi",
      className: "text-cyber-mint",
      color: "#00ffb3",
      delay: 0.4
    },
    {
      icon: BarChart3,
      title: "Gerçek Zamanlı İzleme",
      description: "Canlı dashboard, metrikler ve performans takibi",
      className: "text-neon-red",
      color: "#ff4e00",
      delay: 0.5
    },
    {
      icon: Globe,
      title: "Ölçeklenebilir Altyapı",
      description: "Yük artışında otomatik scaling ve load balancing",
      className: "text-electric-purple",
      color: "#a259f7",
      delay: 0.6
    },
    {
      icon: Shield,
      title: "Güvenlik & Yetkilendirme",
      description: "RBAC, API token yönetimi ve güvenli agent iletişimi",
      className: "text-cyber-green",
      color: "#39ff14",
      delay: 0.7
    }
  ];  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden" aria-label="Platform özellikleri bölümü">
      {/* Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-obsidian-800/50 to-transparent"></div>
        <div className="cyber-grid opacity-10 bg-cyber-grid bg-grid"></div>
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
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-6" id="platform-features">
            <span className="bg-gradient-to-r from-electric-purple to-cyber-green bg-clip-text text-transparent">
              Platform Özellikleri
            </span>
          </h2>          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Modern microservice mimarisi ile güçlendirilmiş, enterprise-ready agent orchestration platformu
          </p>
        </motion.div>

        {/* Core Architecture Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-white mb-8 font-orbitron">
              Core Architecture
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Left: Languages */}
              <div className="text-center">
                <div className="flex justify-center items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse"></div>
                  <span className="text-cyber-green font-semibold">Multi-Language</span>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-300">Node.js (Primary)</div>
                  <div className="text-sm text-gray-300">.NET Core</div>
                  <div className="text-sm text-gray-300">Python</div>
                  <div className="text-sm text-gray-300">Go</div>
                </div>
              </div>

              {/* Center: AgentsPalace Core */}
              <div className="text-center">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(98, 54, 255, 0.3)',
                      '0 0 40px rgba(162, 89, 247, 0.5)',
                      '0 0 20px rgba(98, 54, 255, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-r from-electric-purple to-electric-blue rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4"
                >
                  <Network className="w-16 h-16 text-white" />
                </motion.div>
                <h4 className="text-lg font-bold text-white">AgentsPalace</h4>
                <p className="text-sm text-gray-300">Orchestration Hub</p>
              </div>

              {/* Right: Deployment */}
              <div className="text-center">
                <div className="flex justify-center items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-neon-orange rounded-full animate-pulse"></div>
                  <span className="text-neon-orange font-semibold">Deployment</span>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-300">Docker Containers</div>
                  <div className="text-sm text-gray-300">Kubernetes Ready</div>
                  <div className="text-sm text-gray-300">Auto Scaling</div>
                  <div className="text-sm text-gray-300">Load Balancing</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >              <div 
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-white/30 transition-all duration-300 group-hover:shadow-glow"
                role="region"
                aria-labelledby={`feature-${feature.title.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                    <feature.icon 
                      className={`w-6 h-6 ${feature.className}`}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 
                  className="text-lg font-semibold text-white mb-3 group-hover:drop-shadow-neon transition-all"
                  id={`feature-${feature.title.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  {feature.title}
                </h3>                <p className="text-gray-200 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-current to-transparent"
                  aria-hidden="true"
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-obsidian-800 to-obsidian-700 backdrop-blur-sm border border-electric-purple/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
              Developer-First Yaklaşım
            </h3>
            <p className="text-gray-300 mb-6">
              SDK, API, CLI ve açık kaynak konnektörlerle hızlı geliştirme ve kolay entegrasyon
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['SDK', 'REST API', 'CLI Tools', 'Open Source'].map((tool) => (
                <span 
                  key={tool}
                  className="px-4 py-2 bg-electric-purple/20 border border-electric-purple/40 rounded-full text-electric-purple text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
