module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      colors:{
        blue:'#1d9bf0',
        'dark-blue': '#1a8cd8',
        black:'#14171A',
        'dark-gray':'#657786',
        'light-gray':'#AAB8C2',
        'xlight-gray':'#E1E8ED',
        'xxlight-gray':'#F5F8FA',
        white:'#FFFFFF',
      },
      screens: {
        'short': { 'raw': '(max-height: 630px)' },
        'average': { 'raw': '(max-height: 700px)' },
        // => @media (min-height: 800px) { ... }
      },
      dropShadow: {
        'a': '1px -1px 1px rgba(207, 217, 222,1)',
      },
      boxShadow: {
        'a': '0px 0px 15px rgba(101, 119, 134, 0.2), 0px 0px 3px 1px rgba(101, 119, 134, 0.15)',
      },
    },
  },
  plugins: [],
}
