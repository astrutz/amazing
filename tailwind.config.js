const { tailwindLayouts, defaultOptions } = require('tailwind-layouts');
const tailwindLogical = require('tailwindcss-logical');

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    tailwindLogical,
    tailwindLayouts({
      ...defaultOptions,
      useLogicalProperties: true,
      classNames: {
        ...defaultOptions.classNames,
        cluster: 'amazing-cluster',
        sidebar: 'amazing-sidebar',
        switcher: 'amazing-switcher',
        cover: 'amazing-cover',
        grid: 'amazing-grid',
        frame: 'amazing-frame',
        reel: 'amazing-reel',
        imposter: 'amazing-imposter',
        icon: 'amazing-icon',
        stack: 'amazing-stack',
      },
    }),
    tailwindLogical,
  ],
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      sans: [
        'Inter var',
        'sans-serif'
      ]
    },
    layouts: () => ({
      measure: '100%',
    }),
    extend: {
      colors: {
        'amazing-bordeaux': '#5F2234',
        'amazing-bordeaux-light': '#aa6b7e'
      },
      boxShadow: {
        inputs: '0 0 0 .2rem #aa6b7e'
      },
    },
  },
};
