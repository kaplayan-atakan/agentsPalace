'use client';

import { motion } from 'framer-motion';
import { 
  Rocket, 
  TrendingUp, 
  Users, 
  Code, 
  Mail, 
  Calendar,
  LinkedinIcon,
  Github,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function CTAInvestor() {
  const stakeholders = [
    {
      type: 'Yatırımcı',
      title: 'Geleceğin AI Altyapısına Yatırım Yapın',
      description: 'Sürdürülebilir, modüler ve yüksek büyüme potansiyeli olan AI orchestration platformu',
      icon: TrendingUp,
      className: "text-neon-orange",
      color: "#ff7e29",
      features: [
        'Enterprise-ready B2B SaaS model',
        'Recurring revenue & scalable architecture',
        'Multi-billion dollar market opportunity',
        'Strong technical moat & defensibility'
      ],
      cta: 'Yatırım Fırsatını İncele'
    },
    {
      type: 'Geliştirici',
      title: 'Alpha Sürümde Yer Alın',
      description: 'Esnek, çok dilli microservice mimarisiyle hızlı geliştirme imkanı',
      icon: Code,
      className: "text-cyber-green",
      color: "#39ff14",
      features: [
        'Multi-language SDK (Node.js, .NET, Python, Go)',
        'Docker-first development experience',
        'Extensive API & plugin ecosystem',
        'Open-source community contributions'
      ],
      cta: 'Early Access İsteğinde Bulun'
    },
    {
      type: 'İlk Kullanıcı',
      title: 'Pilot Projede Yer Alın',
      description: 'Gerçek iş senaryolarında hızlı değer sunan, düşük giriş maliyetli platform deneyimi',
      icon: Rocket,
      className: "text-electric-purple",
      color: "#a259f7",
      features: [
        'Free pilot program & onboarding',
        'Dedicated success manager',
        'Custom integration support',
        'Priority feature requests'
      ],
      cta: 'Pilot Programa Katıl'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="animated-gradient opacity-20"></div>
        <div className="cyber-grid opacity-10"></div>
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-cyber-green" />
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-white">
              <span className="bg-gradient-to-r from-electric-purple to-cyber-green bg-clip-text text-transparent">
                Büyümeye Katılın
              </span>
            </h2>
            <Sparkles className="w-8 h-8 text-electric-purple" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Yapay zekanın üretim gücünü yöneten yeni bir çağ başlıyor. Sizin yeriniz neresi?
          </p>
        </motion.div>

        {/* Stakeholder Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.type}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-white/30 transition-all duration-500 group-hover:shadow-glow">
                {/* Header */}                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20">
                    <stakeholder.icon 
                      className={`w-10 h-10 ${stakeholder.className}`}
                    />
                  </div>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${stakeholder.className} border border-current/40 ${stakeholder.className.replace('text-', 'bg-')}/20`}>
                    {stakeholder.type}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:drop-shadow-neon">
                    {stakeholder.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {stakeholder.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {stakeholder.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div 
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: stakeholder.color }}
                      ></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${stakeholder.className} border-2 border-current/60 ${stakeholder.className.replace('text-', 'bg-')}/20`}
                >
                  {stakeholder.cta}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br from-current to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-obsidian-800 to-obsidian-700 backdrop-blur-sm border border-electric-purple/30 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
                İletişime Geçin
              </h3>
              <p className="text-gray-300">
                AgentsPalace ekibi ile direkt bağlantı kurun ve geleceği birlikte inşa edin
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Hızlı İletişim</h4>
                <div className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Adınız"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-electric-purple focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="E-mail adresiniz"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-electric-purple focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white focus:border-electric-purple focus:outline-none transition-colors">
                      <option value="">İlgi alanınızı seçin</option>
                      <option value="investor">Yatırımcı</option>
                      <option value="developer">Geliştirici</option>
                      <option value="early-user">İlk Kullanıcı</option>
                      <option value="partner">İş Ortaklığı</option>
                    </select>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-electric-purple to-electric-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Mesaj Gönder
                  </motion.button>
                </div>
              </div>

              {/* Direct Contact */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Direkt Bağlantı</h4>
                <div className="space-y-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-3 p-4 bg-black/30 border border-white/10 rounded-lg hover:border-cyber-green transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 text-cyber-green" />
                    <div>
                      <div className="text-white font-medium">Demo Randevusu</div>
                      <div className="text-sm text-gray-400">Calendly bağlantısı</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-3 p-4 bg-black/30 border border-white/10 rounded-lg hover:border-electric-blue transition-all duration-300"
                  >
                    <LinkedinIcon className="w-5 h-5 text-electric-blue" />
                    <div>
                      <div className="text-white font-medium">LinkedIn</div>
                      <div className="text-sm text-gray-400">Profesyonel ağ</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-3 p-4 bg-black/30 border border-white/10 rounded-lg hover:border-neon-orange transition-all duration-300"
                  >
                    <Github className="w-5 h-5 text-neon-orange" />
                    <div>
                      <div className="text-white font-medium">GitHub</div>
                      <div className="text-sm text-gray-400">Açık kaynak projeleri</div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-orbitron">
            <span className="text-cyber-green">Yapay Zeka</span> Çağının{' '}
            <span className="text-electric-purple">Liderleri</span> Olun
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            AgentsPalace ile geleceği bugünden inşa etmeye başlayın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-electric-purple to-cyber-green text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Hemen Başla
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-cyber-green text-cyber-green font-semibold rounded-lg hover:bg-cyber-green hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              Topluluğa Katıl
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
