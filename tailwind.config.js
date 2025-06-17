/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Precise Kamelizer-inspired color system
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'surface': 'var(--surface)',
        'surface-hover': 'var(--surface-hover)',
        'surface-elevated': 'var(--surface-elevated)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'accent': 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'accent-light': 'var(--accent-light)',
        'secondary-accent': 'var(--secondary-accent-color)',
        'secondary-accent-light': 'var(--secondary-accent-light)',
        'tertiary-accent': 'var(--tertiary-accent-color)',
        'border': 'var(--border)',
        'border-light': 'var(--border-light)',
        'prayer-bg': 'var(--prayer-bg)',
        'quran-bg': 'var(--quran-bg)',
        
        // Status colors (theme-aware)
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'error': 'var(--error)',

        // Direct Kamelizer colors for special use
        'kamelizer-sand': 'var(--base-background)',
        'kamelizer-sage': 'var(--primary-accent)',
        'kamelizer-coral': 'var(--secondary-accent)',
        'kamelizer-teal': 'var(--tertiary-accent)',
        'kamelizer-warm-beige': 'var(--card-background)',
        'kamelizer-deep-charcoal': 'var(--main-text)',
        'kamelizer-contrast-white': 'var(--contrast-white)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        arabic: ['Amiri', 'Times New Roman', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      transitionDuration: {
        '300': '300ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'gradient-shift': 'gradientShift 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'kamelizer': '0 8px 32px rgba(90, 111, 94, 0.15)',
        'kamelizer-lg': '0 16px 64px rgba(90, 111, 94, 0.2)',
        'atmospheric': '0 8px 32px rgba(90, 111, 94, 0.1), inset 0 1px 0 rgba(248, 245, 238, 0.2)',
      },
    },
  },
  plugins: [],
};