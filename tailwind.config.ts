import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bone: '#F1EBDE',
        graphite: '#141414',
        smoke: '#88847A',
        amberdeep: '#D59F4A'
      },
      boxShadow: {
        luxe: '0 10px 40px rgba(0,0,0,.45)'
      }
    },
  },
  plugins: [],
} satisfies Config;
