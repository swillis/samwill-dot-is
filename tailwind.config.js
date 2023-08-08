/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {

    fontFamily: {
      sans: [
        "Favorit, serif",
        // "Favorit, system, sans-serif",
        // {
        //   fontFeatureSettings: '"cv11", "ss01"',
        //   fontVariationSettings: '"opsz" 32'
        // },
      ],
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: colors.neutral,
      },
      boxShadow: {
        'test': 'rgba(124,58,237,.1) -8px -8px 40px 8px, rgba(219,39,119,.1) 8px 8px 40px 8px',
        'test-hover': 'rgba(124,58,237,.2) -8px -8px 40px 8px, rgba(219,39,119,.2) 8px 8px 40px 8px',
      }
    },
  },
  plugins: [],
}
