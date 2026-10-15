/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      colors: {
        ink: {
          50: '#f6f8fc',
          100: '#e9edf5',
          800: '#111a2c',
          900: '#0b1220',
          950: '#060b16'
        }
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'fade-up': 'fade-up .7s cubic-bezier(.22,.61,.36,1) both',
        blink: 'blink 1.1s steps(1) infinite',
        float: 'float 7s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
