'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Network, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian-900 bg-cyber-grid bg-grid" aria-label="Hero section">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian-900/80 via-obsidian-800/60 to-obsidian-700/40" aria-hidden="true"></div>
      {/* Floating Network Nodes */}
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
          {/* Logo & Brand */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center mb-4" aria-hidden="true">
              <div className="relative">
                <Network className="w-16 h-16 text-electric-blue drop-shadow-neon" aria-hidden="true" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2"
                  aria-hidden="true"
                >
                  <Cpu className="w-8 h-8 text-cyber-green" />
                </motion.div>
              </div>
            </div>            <h1 className="text-6xl md:text-8xl font-bold font-orbitron drop-shadow-neon bg-gradient-to-r from-electric-purple to-cyber-mint bg-clip-text text-transparent">
              Agent Palace
            </h1>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >            <h2 className="text-2xl md:text-4xl font-medium text-white mb-4">
              <span className="text-electric-purple">Orchestrate</span> the{' '}
              <span className="text-cyber-green">Future</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Deploy, coordinate, and scale <span className="text-electric-blue font-semibold">autonomous agents</span>{' '}
              across your stack — with one unified control plane.
            </p>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >            {[
              { icon: Network, text: 'Microservice Architecture', color: 'text-electric-purple' },
              { icon: Zap, text: 'Real-time Orchestration', color: 'text-cyber-green' },
              { icon: Cpu, text: 'Multi-language Support', color: 'text-neon-orange' }
            ].map((feature) => (
              <motion.div
                key={feature.text}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full"
                role="presentation"
              >
                <feature.icon className={`w-5 h-5 ${feature.color}`} aria-hidden="true" />
                <span className="text-white font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-electric-purple to-electric-blue text-white font-semibold rounded-lg border-2 border-transparent hover:border-cyber-green transition-all duration-300 shadow-glow focus:outline-none focus:ring-2 focus:ring-cyber-green focus:ring-offset-2 focus:ring-offset-obsidian-900"
              aria-label="Try Demo"
            >
              <span className="flex items-center gap-2">
                Try Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-cyber-green font-semibold rounded-lg border-2 border-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyber-green focus:ring-offset-2 focus:ring-offset-obsidian-900"
              aria-label="Request Early Access"
            >
              Request Early Access
            </motion.button>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 text-gray-400 text-lg"
          >
            Where Agents Come Alive • Your Central Command for Autonomous Systems
          </motion.p>
        </div>
      </div>      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        aria-hidden="true"
        role="presentation"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-electric-purple rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-electric-purple rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
