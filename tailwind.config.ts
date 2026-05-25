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
        blue: {
          950: '#0a1628',
          900: '#0f2044',
          800: '#1a3460',
          700: '#1e4080',
          600: '#2563b0',
          500: '#3b82f6',
        },
        gray: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          600: '#475569',
          700: '#334155',
          900: '#0f172a',
        },
        gold: {
          500: '#c2852a',
          400: '#d4962f',
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
