/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,html}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#144651',
          dark: '#0E323A',
        },
        secondary: {
          DEFAULT: '#266B8A',
          light: '#328CB4',
        },
        ink: '#000000',
        body: {
          DEFAULT: '#1A1A1A',
          strong: '#000000',
        },
        muted: '#4D4D4D',
        hairline: {
          DEFAULT: '#E3E3E3',
          strong: '#C9C9C9',
        },
        canvas: '#FFFFFF',
        surface: {
          card: '#FFFFFF',
          elevated: '#F3F6F6',
          soft: '#FAFBFC',
        },
        on: {
          primary: '#FFFFFF',
          dark: '#FFFFFF',
        },
        semantic: {
          warning: '#B45309',
          success: '#15803D',
        }
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        nav: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['48px', { lineHeight: '1.15', fontWeight: '700' }],
        'display-lg': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'display-md': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'display-sm': ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        'title-lg': ['18px', { lineHeight: '1.35', fontWeight: '600' }],
        'title-md': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        'title-sm': ['15px', { lineHeight: '1.4', fontWeight: '500' }],
        'label-uppercase': ['13px', { lineHeight: '1.3', letterSpacing: '0.06em', fontWeight: '600' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['13px', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '400' }],
        'button': ['15px', { lineHeight: '1', fontWeight: '600' }],
        'nav-link': ['15px', { lineHeight: '1.4', fontWeight: '500' }],
      },
      borderRadius: {
        none: '0px',
        xs: '4px',
        sm: '8px',
        md: '10px',
        lg: '16px',
        full: '9999px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        'section': '96px',
        'xxl': '64px',
        'xl': '40px',
        'lg': '24px',
      },
      maxWidth: {
        'container': '1240px',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #144651 0%, #266B8A 100%)',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(20, 70, 81, 0.08)',
        'card-hover': '0 8px 16px rgba(20, 70, 81, 0.12)',
      }
    }
  },
  plugins: []
}
