/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', //To disable the dark mode by default, use "Class."
  theme: {
    fontSize: {
      sm: [
        '0.875rem',
        {
          lineHeight: '1.375rem',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      lg: [
        '1.125rem',
        {
          lineHeight: '1.625rem',
        },
      ],
      xl: [
        '1.25rem',
        {
          lineHeight: '1.75rem',
        },
      ],
      '2xl': [
        '1.375rem',
        {
          lineHeight: '1.875rem',
        },
      ],
      '3xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
        },
      ],
      '4xl': [
        '1.625rem',
        {
          lineHeight: '2.125rem',
        },
      ],
      '5xl': [
        '1.75rem',
        {
          lineHeight: '2.25rem',
        },
      ],
      '6xl': [
        '2rem',
        {
          lineHeight: '2.5rem',
        },
      ],
      '7xl': [
        '2.25rem',
        {
          lineHeight: '2.875rem',
        },
      ],
      '8xl': [
        '2.5rem',
        {
          lineHeight: '2.5rem',
        },
      ],
      '9xl': [
        '2.75rem',
        {
          lineHeight: '3.375rem',
        },
      ],
    },
    button: {
      primary: '#2B388B',
      secondary: '#101744',
    },
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        primaryHeading: 'rgb(var(--primary-heading) / <alpha-value>)',
        primaryContent: 'rgb(var(--primary-content) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        secondaryContent: 'rgb(var(--secondary-content) / <alpha-value>)',
        transparent: 'var(--transparent)',
        primaryCard: 'rgb(var(--primary-card) / <alpha-value>)',
        secondaryCard: 'rgb(var(--secondary-card) / <alpha-value>)',
        primary_BG: '#ffffff',
        secondary_BG: '#006B65',
        timeline_BG: '#EBEAF1',
        card_blue: '#125e9c',
        cardline: {
          100: 'rgb(var(--card-line-100) / <alpha-value>)',
          200: 'rgb(var(--card-line-200) / <alpha-value>)',
          300: 'rgb(var(--card-line-300) / <alpha-value>)',
          400: 'rgb(var(--card-line-400) / <alpha-value>)',
          500: 'rgb(var(--card-line-500) / <alpha-value>)',
          600: 'rgb(var(--card-line-600) / <alpha-value>)',
          700: 'rgb(var(--card-line-700) / <alpha-value>)',
          800: 'rgb(var(--card-line-800) / <alpha-value>)',
          900: 'rgb(var(--card-line-900) / <alpha-value>)',
        },
        bgGray: 'rgb(var(--bg-gray) / <alpha-value>)',
        popup: 'rgb(var(--popup-card) / <alpha-value>)',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        16: '4rem',
      },
      borderRadius: {
        none: '0',
        s: '5px',
        sm: '13px',
        md: '20px',
        DEFAULT: '0',
        lg: '52px',
        full: '9999px',
      },
      fontFamily: {
        Raleway: ['Raleway', 'sans-serif'],
        Nunito: ['Nunito', 'sans-serif'],
      },
    },
    maxWidth: {
      sm: '600px',
      md: '767px',
      lg: '1100px',
      xl: '1565px',
    },

    translate: {
      center: 'translate(-50%, -50%);',
    },
  },
  plugins: [],
};
