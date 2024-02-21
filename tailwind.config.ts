import type { Config } from 'tailwindcss';

const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = withMT({
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        xcard: 'box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'third-color': 'var(--third-color)',
        'forth-color': 'var(--forth-color)',
        'fifth-color': 'var(--fifth-color)',
        'font-color': 'var(--font-color)',
        'alice-blue': 'var(--alice-blue)',
        'powder-blue': 'var(--powder-blue)',
        'cool-gray': 'var(--cool-gray)',
        'davy-gray': 'var(--davy-gray)',
        'outer-space': 'var(--outer-space)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
});
export default config;
