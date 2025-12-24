import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF',
          dark: '#0A1F5C',
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#A855F7',
          dark: '#7C3AED',
          light: '#C084FC',
        },
        navy: {
          DEFAULT: '#0F1B3D',
          light: '#1A2952',
          dark: '#060B1C',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-mobile': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
        'navy-gradient': 'linear-gradient(180deg, #0A1F5C 0%, #0F1B3D 100%)',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [],
}
export default config

