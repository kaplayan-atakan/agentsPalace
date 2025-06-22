'use client';

import { 
  Network, 
  Globe, 
  Cpu
} from 'lucide-react';

export default function StyleGuide() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-orbitron font-bold mb-8 text-glow-purple">AgentsPalace Style Guide</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-orbitron mb-6 text-electric-purple">Color System</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-obsidian-900 mb-2"></div>
            <span className="text-sm font-mono">obsidian-900</span>
            <span className="text-xs font-mono text-gray-400">#0a0f1c</span>
          </div>
          <div className="p-4 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-obsidian-800 mb-2"></div>
            <span className="text-sm font-mono">obsidian-800</span>
            <span className="text-xs font-mono text-gray-400">#1b213a</span>
          </div>
          <div className="p-4 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-electric-purple mb-2"></div>
            <span className="text-sm font-mono">electric-purple</span>
            <span className="text-xs font-mono text-gray-400">#a259f7</span>
          </div>
          <div className="p-4 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-electric-blue mb-2"></div>
            <span className="text-sm font-mono">electric-blue</span>
            <span className="text-xs font-mono text-gray-400">#6236ff</span>
          </div>
          <div className="p-4 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-cyber-green mb-2"></div>
            <span className="text-sm font-mono">cyber-green</span>
            <span className="text-xs font-mono text-gray-400">#39ff14</span>
          </div>
          <div className="p-4 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-cyber-mint mb-2"></div>
            <span className="text-sm font-mono">cyber-mint</span>
            <span className="text-xs font-mono text-gray-400">#00ffb3</span>
          </div>
          <div className="p-4 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-neon-orange mb-2"></div>
            <span className="text-sm font-mono">neon-orange</span>
            <span className="text-xs font-mono text-gray-400">#ff7e29</span>
          </div>
          <div className="p-4 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-neon-pink mb-2"></div>
            <span className="text-sm font-mono">neon-pink</span>
            <span className="text-xs font-mono text-gray-400">#ff007f</span>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-orbitron mb-6 text-electric-purple">Typography</h2>
        
        <div className="space-y-6">
          <div>
            <h1 className="font-orbitron text-4xl mb-2">Orbitron (Headings)</h1>
            <p className="text-gray-400">Used for titles, headings, and feature names</p>
          </div>
          
          <div>
            <p className="font-space text-xl mb-2">Space Grotesk (Body)</p>
            <p className="text-gray-400">Used for body text, descriptions, and content</p>
          </div>
          
          <div className="mt-6">
            <p className="text-glow-purple text-xl mb-1">Text Glow Purple</p>
            <p className="text-glow-blue text-xl mb-1">Text Glow Blue</p>
            <p className="text-glow-green text-xl mb-1">Text Glow Green</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-orbitron mb-6 text-electric-purple">Shadows & Effects</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-obsidian-700 shadow-glow mb-2"></div>
            <span className="text-sm font-mono">shadow-glow</span>
          </div>
          
          <div className="p-6 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-obsidian-700 shadow-purple-glow mb-2"></div>
            <span className="text-sm font-mono">shadow-purple-glow</span>
          </div>
          
          <div className="p-6 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-obsidian-700 shadow-green-glow mb-2"></div>
            <span className="text-sm font-mono">shadow-green-glow</span>
          </div>
          
          <div className="p-6 rounded flex flex-col items-center">
            <Network className="w-16 h-16 text-electric-purple drop-shadow-neon-purple mb-2" />
            <span className="text-sm font-mono">drop-shadow-neon-purple</span>
          </div>
          
          <div className="p-6 rounded flex flex-col items-center">
            <Globe className="w-16 h-16 text-cyber-green drop-shadow-neon-green mb-2" />
            <span className="text-sm font-mono">drop-shadow-neon-green</span>
          </div>
          
          <div className="p-6 rounded flex flex-col items-center">
            <Cpu className="w-16 h-16 text-electric-blue drop-shadow-neon-blue mb-2" />
            <span className="text-sm font-mono">drop-shadow-neon-blue</span>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-orbitron mb-6 text-electric-purple">Animations</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-cyber-green animate-pulse-slow mb-2"></div>
            <span className="text-sm font-mono">animate-pulse-slow</span>
          </div>
          
          <div className="p-6 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-electric-purple animate-float mb-2"></div>
            <span className="text-sm font-mono">animate-float</span>
          </div>
          
          <div className="p-6 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-electric-blue animate-glow mb-2"></div>
            <span className="text-sm font-mono">animate-glow</span>
          </div>
          
          <div className="p-6 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-neon-orange animate-blink mb-2"></div>
            <span className="text-sm font-mono">animate-blink</span>
          </div>
          
          <div className="p-6 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-neon-pink animate-radar-spin mb-2"></div>
            <span className="text-sm font-mono">animate-radar-spin</span>
          </div>
          
          <div className="p-6 rounded flex flex-col items-center">
            <div className="w-16 h-16 rounded bg-cyber-mint animate-fade-in-down mb-2"></div>
            <span className="text-sm font-mono">animate-fade-in-down</span>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-orbitron mb-6 text-electric-purple">Background Patterns</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 h-40 bg-cyber-grid rounded relative overflow-hidden">
            <span className="text-sm font-mono absolute bottom-4 left-4 bg-obsidian-900 px-2 py-1 rounded">bg-cyber-grid</span>
          </div>
          
          <div className="p-6 h-40 bg-circuit-pattern rounded relative overflow-hidden">
            <span className="text-sm font-mono absolute bottom-4 left-4 bg-obsidian-900 px-2 py-1 rounded">bg-circuit-pattern</span>
          </div>
          
          <div className="p-6 h-40 bg-grid rounded bg-obsidian-800 relative overflow-hidden">
            <span className="text-sm font-mono absolute bottom-4 left-4 bg-obsidian-900 px-2 py-1 rounded">bg-grid</span>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-orbitron mb-6 text-electric-purple">Custom Components</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="terminal-text">
            <p className="mb-2">$ initialize_agents</p>
            <p className="mb-2">$ loading modules...</p>
            <p className="mb-2 text-electric-purple">$ agents_ready: true</p>
            <p>$ system_online</p>
            <p className="mt-4 text-sm text-gray-400">terminal-text class</p>
          </div>
          
          <div className="flex flex-col items-center justify-center p-8">
            <button className="cyber-button px-8 py-3 text-electric-purple font-orbitron">
              LAUNCH AGENTS
            </button>
            <p className="mt-4 text-sm text-gray-400">cyber-button class</p>
          </div>
          
          <div className="glassmorphism p-8 rounded-lg">
            <h3 className="font-orbitron text-xl mb-4 text-cyber-green">Agent Status</h3>
            <div className="flex items-center justify-between mb-2">
              <span>Processing Units</span>
              <span className="text-cyber-green">Online</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Neural Networks</span>
              <span className="text-cyber-green">Training</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Decision Engine</span>
              <span className="text-cyber-green">Active</span>
            </div>
            <p className="mt-4 text-sm text-gray-400">glassmorphism class</p>
          </div>
          
          <div className="clip-path-slanted bg-gradient-to-r from-electric-purple to-electric-blue p-8">
            <h3 className="font-orbitron text-xl mb-2">Slanted Shape</h3>
            <p>This uses the clip-path-slanted utility class</p>
          </div>
        </div>
      </section>
      
      <section className="mt-16 border-t border-gray-800 pt-8">
        <h2 className="text-xl font-orbitron mb-4 text-electric-purple">Usage Guidelines</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use Orbitron for headings and Space Grotesk for body text</li>
          <li>Primary accent colors are electric-purple and electric-blue</li>
          <li>Use cyber-green for success states and highlights</li>
          <li>Use neon colors sparingly for accent elements only</li>
          <li>Maintain consistent spacing using Tailwind&apos;s spacing scale</li>
          <li>Use glassmorphism for floating panels and cards</li>
          <li>Apply animations thoughtfully to avoid overwhelming the user</li>
        </ul>
      </section>
    </div>
  );
}
