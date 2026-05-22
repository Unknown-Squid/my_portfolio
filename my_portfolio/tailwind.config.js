/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mp: {
          g0: 'var(--color-mp-g0)',
          g1: 'var(--color-mp-g1)',
          g2: 'var(--color-mp-g2)',
          g3: 'var(--color-mp-g3)',
          g4: 'var(--color-mp-g4)',
          mint: 'var(--color-mp-mint)',
          'mint-light': 'var(--color-mp-mint-light)',
          'mint-pale': 'var(--color-mp-mint-pale)',
          'mint-glow': 'var(--color-mp-mint-glow)',
          'mint-dark': 'var(--color-mp-mint-dark)',
          text: 'var(--color-mp-text)',
          muted: 'var(--color-mp-muted)',
          dim: 'var(--color-mp-dim)',
        },
      },
      fontFamily: {
        syne: ['var(--font-display)'],
        dm: ['var(--font-body)'],
      },
      maxWidth: {
        content: 'var(--max-content)',
      },
      transitionDuration: {
        600: 'var(--duration-scroll)',
      },
      boxShadow: {
        'mp-modal': 'var(--shadow-modal)',
      },
      keyframes: {
        'mint-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.7)' },
        },
      },
      animation: {
        'mint-pulse': 'mint-pulse var(--duration-pulse) ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
