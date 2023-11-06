import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "spotify-black4": "#121212",
        "mid-gray": "#A7A7A7",
        "dark-gray": "#242424",
        "spotify-black": '#0f0f0f',
        "spotify-black2": '#090909',
        "spotify-gray": '#9f9f9f',
        "spotify-gray2": '#1c1c1c',
        "spotify-gray3": '#b3b3b3',
        "spotify-black5": "#181818",
        "spotify-gray4": "#575757"
      }
    },
  },
  plugins: [],
}
export {config}
