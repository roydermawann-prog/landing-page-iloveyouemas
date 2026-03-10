/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Gold Palette
        gold: {
          50: '#fdfcf8',
          100: '#f9f6ee',
          200: '#f5f0de',
          300: '#efe6c9',
          400: '#e9d9aa',
          500: '#e3cc8b',
          600: '#dbb86a',
          700: '#c6a656',
          800: '#b28c42',
          900: '#9e7532',
          950: '#5e421e',
        },
        // Dark Navy / Charcoal
        charcoal: {
          50: '#f4f4f5',
          100: '#e4e4e7',
          200: '#d4d4d8',
          300: '#a1a1aa',
          400: '#71717a',
          500: '#52525b',
          600: '#404046',
          700: '#3f3a36',
          800: '#27262a',
          900: '#181617',
          950: '#0a0a0c',
        },
        // Soft Beige
        beige: {
          50: '#faf8f3',
          100: '#f5f0e3',
          200: '#ebe4d1',
          300: '#d8cdb8',
          400: '#c7b89d',
          500: '#b6a282',
          600: '#a48d67',
          700: '#92754d',
          800: '#805f3a',
          900: '#6d4b2e',
        },
        primary: {
          light: '#dbb86a', // gold-600
          DEFAULT: '#c6a656', // gold-700
          dark: '#b28c42', // gold-800
        },
        dark: {
          bg: '#0a0a0c', // charcoal-950
          surface: '#181617', // charcoal-900
          border: '#27262a', // charcoal-800
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(214, 184, 106, 0.3)',
        'gold-lg': '0 8px 40px rgba(214, 184, 106, 0.4)',
        'dark': '0 4px 20px rgba(24, 22, 23, 0.3)',
        'dark-lg': '0 8px 40px rgba(24, 22, 23, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
