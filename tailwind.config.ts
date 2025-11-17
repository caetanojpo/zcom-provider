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
        'bg-5g': "url('/images/5g/bg-5g.webp')",
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
      screens: {
        // Mobile devices
        xs: '375px', // iPhone SE, iPhone 12/13 mini
        sm: '390px', // iPhone 12/13/14 Pro, iPhone 14
        md: '428px', // iPhone 14 Pro Max, iPhone 14 Plus
        mdMini: '744px', // iPad mini (portrait)
        mdAir: '820px', // iPad Air (portrait)
        mdPro: '1023px', // iPad Pro 11" (portrait) / Tablets landscape
        xl: '1366px', // Notebooks padrão
        '2xl': '1920px', // Desktop Full HD
        '3xl': '2560px', // Desktop 2K/QHD
      },
    },
  },
  plugins: [animate],
};

export default config;
