module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      colors:{
        blue:'#1d9bf0',
        black:'#14171A',
        'dark-gray':'#657786',
        'light-gray':'#AAB8C2',
        'xlight-gray':'#E1E8ED',
        'xxlight-gray':'#F5F8FA',
        white:'#FFFFFF',
      },
      screens: {
        'short': { 'raw': '(max-height: 600px)' },
        'average': { 'raw': '(max-height: 700px)' },
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  plugins: [],
}
