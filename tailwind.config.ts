import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,mdx}', './content/**/*.mdx'],
  theme: {
    extend: {
      colors: {
        obsidian: '#09090b',
        graphite: '#18181b',
        iron: '#3f3f46',
        steel: '#52525b',
        fog: '#71717a',
        ash: '#a1a1aa',
        mist: '#d4d4d8',
        cloud: '#ececee',
        paper: '#f4f4f5',
        snow: '#ffffff',
        ember: '#ff5a00',
        'magenta-spark': '#fe45e2',
        ink: {
          slate: '#27272a',
        },
        surface: {
          DEFAULT: '#f4f4f5',
          card: '#ffffff',
          subtle: '#fafafa',
          dark: {
            DEFAULT: '#18181b',
            deep: '#09090b',
            raised: '#27272a',
          },
        },
      },
      fontFamily: {
        sans: [
          'DM Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      fontSize: {
        caption: ['12px', { lineHeight: '1.64' }],
        body: ['15px', { lineHeight: '1.45' }],
        'body-lg': ['18px', { lineHeight: '1.45' }],
        subheading: ['20px', { lineHeight: '1.5' }],
        'heading-sm': ['32px', { lineHeight: '1.5' }],
        heading: ['40px', { lineHeight: '1.28' }],
        'heading-lg': ['56px', { lineHeight: '1.28' }],
        display: ['64px', { lineHeight: '1.12' }],
      },
      borderRadius: {
        badge: '12px',
        input: '14px',
        button: '14px',
        card: '36px',
        pill: '10000px',
      },
      maxWidth: {
        page: '1200px',
      },
      spacing: {
        4.5: '18px',
        7: '28px',
        18: '72px',
        22: '88px',
      },
      boxShadow: {
        'btn-primary':
          'inset 0 0.5px 0 0 rgba(255,255,255,0.5), inset 0 9px 14px -5px rgba(117,123,133,0.4), 0 0 0 1.5px rgb(44,46,52), 0 4px 6px 0 rgba(0,0,0,0.14)',
        'pill-inset': 'inset 0 1px 0 0 rgb(228,228,231)',
        soft: 'rgba(0, 0, 0, 0.04) 0px 4px 12px 0px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'keyword-in': {
          '0%': { opacity: '0', transform: 'translateY(40%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'keyword-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-40%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'keyword-in': 'keyword-in 0.45s ease-out both',
        'keyword-out': 'keyword-out 0.3s ease-in both',
      },
    },
  },
  plugins: [typography],
} satisfies Config
