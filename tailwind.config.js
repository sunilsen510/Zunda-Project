module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
  theme: {
    extend: {
      fontFamily: {
      manrope: ['var(--font-manrope)', 'sans-serif'],
      },
      colors: {
        'primary-500': '#40BFC1',
        'generic-white': '#FFFFFF',
        'black-500': '#2B2826',
        'accent-red-500': '#E74C3C',
        'black-300': '#716F6E',
        'success-green-500': '#059669',
        'danger-50': '#FEE2E2',
        "secondary-950":'#031016',
      },
      maxWidth: {
        '1372': '1372px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
