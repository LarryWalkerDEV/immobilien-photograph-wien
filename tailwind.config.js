/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#DCDCD0',
          light: '#F7F7EE'
        },
        olive: {
          DEFAULT: '#292919',
          medium: '#5C5C4E',
          light: '#909083'
        },
        gold: {
          DEFAULT: '#C9A55C'
        },
        trust: {
          DEFAULT: '#2E5EAA'
        },
        success: {
          DEFAULT: '#00C49A'
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(60px, 10vw, 140px)',
        section: 'clamp(48px, 8vw, 120px)',
        'narrative-lg': 'clamp(24px, 3vw, 38px)',
      },
      screens: {
        xs: '375px',
        sm: '768px',
        md: '1024px',
        lg: '1440px',
        xl: '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
