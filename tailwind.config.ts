import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'construction-bg': "url('/images/construction/background-lines.png')",
        'subs-dark-lines': "url('/images/subs/dark-lines-subs.webp')",
        'subs-lines': "url('/images/subs/lines-subs.webp')",
        'subs-lines-desk': "url('/images/subs/lines-sub-desk.webp')",
        'fio-fibra-bg': "url('/images/group/bg-group.webp')",
        'lines-footer': "url('/images/footer/lines-footer.webp')",
        'bg-padrao': "url('/images/bg.svg')",
      },
      fontFamily: {
        sans: ['var(--font-neometric)', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: '#282829',
        light: '#FEFEFE',
        zcom: {
          200: '#0E46B9',
          500: '#0E46B9',
          700: '#20325d',
        },
      },
    },
  },
  plugins: [animate],
};

export default config;
