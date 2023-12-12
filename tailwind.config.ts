import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Colores decorativos
        'decorative-lavender': '#B37DFF',
        'decorative-light-lavender': '#D9BEFF',
        'decorative-pale-lavender': '#F0E5FF',
        'decorative-sky-blue': '#8AF1FF',
        'decorative-light-sky-blue': '#B3F6FF',
        'decorative-pale-sky-blue': '#D6FAFF',
        'decorative-sunny-yellow': '#FFE959',
        'decorative-light-yellow': '#FFF29B',
        'decorative-pale-yellow': '#FFF8C5',
        'decorative-mint': '#76F7AE',
        'decorative-light-mint': '#ADFACE',
        'decorative-pale-mint': '#CFFCE3',
        'custom-pink': '#FFE2F3',
        'custom-pink-strong': '#FFC6E7',
        // Colores de fondo
        'background-cream': '#FFFBF4',
        'background-white': '#FFFFFF',
        // Colores de retroalimentación
        'feedback-red': '#FF5454',
        'feedback-orange': '#FF9F69',
        'feedback-green': '#3CD39D',
      }
    }
  },
  plugins: [],
}
export default config
