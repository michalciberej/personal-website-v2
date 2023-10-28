import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: '#242424',
        textD: '#f3f6f5',
        background: '#f3f6f5',
        backgroundD: '#242424',
        primary: '#F6D15A',
        secondary: '#4f4f4f',
        accent: '#ead6a6',
      },
    },
  },
  plugins: [],
};
export default config;
