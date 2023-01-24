module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js',
    './app/components/**/*.html.erb',
    './app/components/**/*.js',
    './app/components/**/*.rb',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'title': '46px'
      },
      width: {
        '964': '964px',
        '428': '428px',
      },
      height: {
        '899': '899px',
        '70': '70px'
      },
      colors: {
        'jamp-blue': '#1627A5',
        'jamp-gray': {
          light: '#FBFBFB',
          medium: '#EFEFEF',
          dark: '#1F1D1D'
        },
      },
      lineHeight: {
        'title': '4rem'
      },
      borderRadius: {
        button: '32px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ]
}
