import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,mdx}', './content/**/*.mdx'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#8B5CF6',
          foreground: '#ffffff',
          muted: '#A78BFA',
        },
        surface: {
          DEFAULT: '#F9FAFB',
          dark: {
            DEFAULT: '#181818',
            deep: '#141414',
            raised: '#202020',
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [typography],
} satisfies Config
