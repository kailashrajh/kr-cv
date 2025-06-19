/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      colors: {
        // Kanagawa color palette
        primary: {
          50: '#f7f3f0',
          100: '#ede4d3',
          200: '#dcd5c0',
          300: '#c8b99c',
          400: '#b6a082',
          500: '#a3956b', // Main kanagawa beige
          600: '#8a7c5a',
          700: '#6f6247',
          800: '#54493a',
          900: '#3c342c',
        },
        kanagawa: {
          // Dark theme colors
          bg: '#1f1f28', // sumiInk0
          bgDark: '#16161d', // sumiInk1
          bgLight: '#2a2a37', // sumiInk3
          fg: '#dcd7ba', // fujiWhite
          fgDark: '#c8c093', // oldWhite
          // Accent colors
          wave: '#223249', // waveBlue1
          waveLight: '#2d4f67', // waveBlue2
          red: '#c34043', // samuraiRed
          orange: '#ffa066', // roninYellow
          yellow: '#c0a36e', // carpYellow
          green: '#76946a', // springGreen
          blue: '#7e9cd8', // crystalBlue
          purple: '#957fb8', // oniViolet
          pink: '#d27e99', // sakuraPink
          teal: '#7aa89f', // waveAqua1
        },
        gray: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#a8a8a8',
          500: '#7f7f7f',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
