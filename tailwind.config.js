/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066cc',
          hover: '#004d99',
        },
        secondary: '#2a2a2a',
        accent: '#f5f5f5',
        success: '#2ecc71',
        warning: '#f1c40f',
        danger: '#e74c3c',
        text: {
          muted: '#666666',
        },
      },
      fontFamily: {
        sans: ['var(--font-satoshi)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.5' }],
        '4xl': ['2.25rem', { lineHeight: '1.5' }],
        '5xl': ['3rem', { lineHeight: '1.5' }],
        '6xl': ['3.75rem', { lineHeight: '1.5' }],
        '7xl': ['4.5rem', { lineHeight: '1.5' }],
        '8xl': ['6rem', { lineHeight: '1.5' }],
        '9xl': ['8rem', { lineHeight: '1.5' }],
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}
