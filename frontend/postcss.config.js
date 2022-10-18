module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-focus-visible': {
      preserve: false,
      replaceWith: '[data-focus-visible-added]',
    },
    autoprefixer: {},
  },
}
