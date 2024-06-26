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
      gridTemplateColumns: true,
      gridTemplateRows: true,
      gridAutoColumns: true,
      gridAutoRows: true,
      gridArea: true,
      gridRow: true,
      gridColumn: true,
      gridRowStart: true,
      gridColumnStart: true,
      gridRowEnd: true,
      gridColumnEnd: true,
      gridRowSpan: true,
      gridColumnSpan: true,
      gridRowGroup: true,
      gridColumnGroup: true,
      gridTemplateAreas: true,
      gridTemplate: true,
      gridTemplateColumns: true,
    },
  },
}
