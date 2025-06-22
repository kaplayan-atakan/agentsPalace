'use client';

import { motion } from 'framer-motion';
import { 
  Network, 
  Github, 
  LinkedinIcon, 
  Mail, 
  ExternalLink,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const modules = [
    { name: 'AgentsFlow', href: '#flow' },
    { name: 'AgentsTask', href: '#task' },
    { name: 'AgentsOps', href: '#ops' },
    { name: 'AgentsMap', href: '#map' },
    { name: 'AgentsBrain', href: '#brain' },
    { name: 'AgentsCore', href: '#core' },
    { name: 'AgentsVoice', href: '#voice' }
  ];

  const resources = [
    { name: 'Dokümantasyon', href: '#docs' },
    { name: 'API Referansı', href: '#api' },
    { name: 'SDK İndirme', href: '#sdk' },
    { name: 'Topluluk Forumu', href: '#community' },
    { name: 'Blog', href: '#blog' },
    { name: 'Destek', href: '#support' }
  ];

  const company = [
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Kariyer', href: '#careers' },
    { name: 'Yatırımcılar', href: '#investors' },
    { name: 'Basın Kiti', href: '#press' },
    { name: 'Gizlilik', href: '#privacy' },
    { name: 'Koşullar', href: '#terms' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian-900 border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <Network className="w-10 h-10 text-electric-blue drop-shadow-neon" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-cyber-green rounded-full opacity-80"
                    ></motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-orbitron">
                    AgentsPalace
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  AI Agent Orchestration Hub. Where agents come alive and autonomous systems reach their full potential.
                </p>
                
                {/* Social Links */}
                <div className="flex gap-4">                  {[
                    { icon: Github, href: '#github', className: "text-cyber-green", color: "#39ff14" },
                    { icon: LinkedinIcon, href: '#linkedin', className: "text-electric-blue", color: "#6236ff" },
                    { icon: Mail, href: '#email', className: "text-neon-orange", color: "#ff7e29" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/30 border border-white/10 rounded-lg flex items-center justify-center hover:border-white/30 transition-all duration-300"
                    >                      <social.icon 
                        className={`w-5 h-5 ${social.className}`}
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Modules */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-lg font-semibold text-white mb-6 font-orbitron">
                  <span className="text-electric-purple">Modüller</span>
                </h4>
                <nav className="space-y-3">
                  {modules.map((module) => (
                    <motion.a
                      key={module.name}
                      href={module.href}
                      whileHover={{ x: 5 }}
                      className="block text-gray-300 hover:text-electric-purple transition-colors duration-200"
                    >
                      {module.name}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            </div>

            {/* Resources */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold text-white mb-6 font-orbitron">
                  <span className="text-cyber-green">Kaynaklar</span>
                </h4>
                <nav className="space-y-3">
                  {resources.map((resource) => (
                    <motion.a
                      key={resource.name}
                      href={resource.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-gray-300 hover:text-cyber-green transition-colors duration-200"
                    >
                      {resource.name}
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            </div>

            {/* Company */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold text-white mb-6 font-orbitron">
                  <span className="text-neon-orange">Şirket</span>
                </h4>
                <nav className="space-y-3">
                  {company.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      whileHover={{ x: 5 }}
                      className="block text-gray-300 hover:text-neon-orange transition-colors duration-200"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-white mb-4">
              AgentsPalace Güncellemelerini Kaçırmayın
            </h4>
            <p className="text-gray-300 mb-6">
              Yeni özellikler, use case&apos;ler ve AI orchestration dünyasındaki gelişmeler
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-mail adresiniz"
                className="flex-1 px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-electric-purple focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-electric-purple to-electric-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Abone Ol
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-sm"
          >
            © 2025 everything agent. Tüm hakları saklıdır. AgentsPalace™
          </motion.div>

          <div className="flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-400 text-sm"
            >
              Made with ❤️ for the future of AI
            </motion.div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gradient-to-r from-electric-purple to-electric-blue rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-electric-purple rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-10 right-1/4 w-1 h-1 bg-neon-orange rounded-full animate-pulse delay-1000"></div>
    </footer>
  );
}
