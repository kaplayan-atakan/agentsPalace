/** @type {import('tailwindcss').Config} */
module.exports = {  content: [
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
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
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
            'background-position': 'right center'          }
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
