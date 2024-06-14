export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie >= 11'],
      grid: true,
      flexbox: true,
      gridAutoFlow: true,
      flexWrap: true,
      gridGap: true,
      
    },
  },
}
