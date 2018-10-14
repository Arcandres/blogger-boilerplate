module.exports = options = {
  babel: {
    presets: ['env']
  },
  prefixer: {
    versions: ['last 2 browsers']
  },
  pug: {
    pretty: false
  },
  sass: {
    outputStyle: 'compressed'
  },
  paths: {
    pug: `src/pug/index.pug`,
    sass: `src/sass`,
    es6: `src/es6`,
    html: `dist/`,
    css: `dist/css`,
    js: `dist/js`
  }
}