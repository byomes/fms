import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060912',
          900: '#0a0f1e',
          800: '#0f172a',
          700: '#1e2a45',
          600: '#2d3f66',
        },
        slate: { light: '#94a3b8' },
        gold: {
          500: '#d4a843',
          400: '#e2bc5f',
        },
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
