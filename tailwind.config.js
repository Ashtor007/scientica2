/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Libre Baskerville"', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0f5fa',
          100: '#dce8f3',
          200: '#c0d1e7',
          300: '#92afd4',
          400: '#6486bc',
          500: '#4668a0',
          600: '#345185',
          700: '#2a406c',
          800: '#253759',
          900: '#0F172A', // Deep navy blue
        },
        secondary: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f8d0d9',
          300: '#f4aabc',
          400: '#ec7a97',
          500: '#db4d75',
          600: '#c43359',
          700: '#9F1239', // Burgundy
          800: '#881337',
          900: '#70102f',
        },
        accent: {
          50: '#fdfbed',
          100: '#fdf6d6',
          200: '#faecad',
          300: '#f6de77',
          400: '#f1cb4c',
          500: '#e3b52a',
          600: '#CA8A04', // Gold
          700: '#a16e0c',
          800: '#835310',
          900: '#6c4411',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        card: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};