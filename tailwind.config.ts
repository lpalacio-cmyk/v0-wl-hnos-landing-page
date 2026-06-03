import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        body: ['var(--font-open-sans)', 'Open Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        wl: {
          navy: '#102250',
          cyan: '#1595BC',
          green: '#1C913D',
          orange: '#EA5E2D',
          bg: '#f3f5f9',
          border: '#e6eaf1',
          white: '#ffffff',
          gray: '#6b7280',
          'gray-light': '#9ca3af',
        },
      },
    },
  },
  plugins: [],
}

export default config
