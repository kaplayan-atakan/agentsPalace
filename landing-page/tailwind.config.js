/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Obsidian Dark Theme
        obsidian: {
          900: '#0a0f1c',
          800: '#1b213a',
          700: '#252b47',
          600: '#303651',
          500: '#3c425c',
        },
        // Electric & Neon Colors
        electric: {
          purple: '#a259f7',
          blue: '#6236ff',
        },
        cyber: {
          green: '#39ff14',
          mint: '#00ffb3',
        },
        neon: {
          orange: '#ff7e29',
          red: '#ff4e00',
          pink: '#ff007f',
          yellow: '#ffff00',
        },        // Additional utilities
        transparent: 'transparent',
        current: 'currentColor',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace'],
      },      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'blink': 'blink 1.4s infinite both',
        'data-flow': 'data-flow 10s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'radar-spin': 'radar-spin 4s linear infinite',
      },backgroundImage: {
        'cyber-grid': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        'grid': "linear-gradient(to right, rgb(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(59, 130, 246, 0.1) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'circuit-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%236236ff' fill-opacity='0.15'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'glow': '0 0 10px rgba(0, 255, 179, 0.4), 0 0 20px rgba(0, 255, 179, 0.2)',
        'neon': '0 0 5px theme(colors.electric.purple), 0 0 20px theme(colors.electric.blue)',
        'purple-glow': '0 0 10px rgba(162, 89, 247, 0.4), 0 0 20px rgba(162, 89, 247, 0.2)',
        'green-glow': '0 0 10px rgba(57, 255, 20, 0.4), 0 0 20px rgba(57, 255, 20, 0.2)',
        'orange-glow': '0 0 10px rgba(255, 126, 41, 0.4), 0 0 20px rgba(255, 126, 41, 0.2)',
      },
      dropShadow: {
        'neon-blue': '0 0 8px rgba(98, 54, 255, 0.8)',
        'neon-green': '0 0 8px rgba(57, 255, 20, 0.8)',
        'neon-purple': '0 0 8px rgba(162, 89, 247, 0.8)',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
            filter: 'brightness(1)',
          },
          '100%': { 
            textShadow: '0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor',
            filter: 'brightness(1.2)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '25%': {
            'background-size': '400% 400%',
            'background-position': 'left top'
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'right top'
          },
          '75%': {
            'background-size': '400% 400%',
            'background-position': 'right center'          }        },
        'blink': {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0.3' }
        },
        'data-flow': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        'typing': {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'radar-spin': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          }
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(98, 54, 255, 0.3), 0 0 40px rgba(98, 54, 255, 0.2)',
        'glow-lg': '0 0 30px rgba(98, 54, 255, 0.4), 0 0 60px rgba(98, 54, 255, 0.3)',
        'neon': '0 0 5px currentColor, 0 0 20px currentColor, 0 0 35px currentColor',
        'cyber': '0 0 10px rgba(57, 255, 20, 0.3), 0 0 20px rgba(57, 255, 20, 0.2)',
      },
      dropShadow: {
        'neon': [
          '0 0 10px currentColor',
          '0 0 20px currentColor',
          '0 0 30px currentColor'
        ],
        'glow': [
          '0 0 15px rgba(98, 54, 255, 0.5)',          '0 0 30px rgba(98, 54, 255, 0.3)'
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': `
          linear-gradient(rgba(98, 54, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(98, 54, 255, 0.1) 1px, transparent 1px)
        `,
        'grid': `
          linear-gradient(rgba(98, 54, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(98, 54, 255, 0.1) 1px, transparent 1px)
        `,
        'neural-network': `
          radial-gradient(circle at 25% 25%, rgba(162, 89, 247, 0.1) 0%, transparent 50%),          radial-gradient(circle at 75% 75%, rgba(98, 54, 255, 0.1) 0%, transparent 50%)
        `,
      },      backgroundSize: {
        'grid': '50px 50px',
        'grid-sm': '25px 25px',
        'grid-lg': '100px 100px'
      },
    },
  },
  plugins: []
}
