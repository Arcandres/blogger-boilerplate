// Modules
const gulp = require('gulp'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass'),
  babel = require('gulp-babel'),
  concat = require('gulp-concat'),
  plumber = require('gulp-plumber'),
  uglify = require('gulp-uglify'),
  rename = require("gulp-rename"),
  prefixer = require('gulp-autoprefixer'),

  // Config
  options = {
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
      pug: `./src/pug/`,
      sass: `./src/sass`,
      es6: `./src/es6`,
      html: `./dist/`,
      css: `./dist/css`,
      js: `./dist/js`
    }
  }

// Tasks
gulp.task('pug', () =>
  gulp
  .src(`${options.paths.pug}/index.pug`) // Only compile index
  .pipe(plumber())
  .pipe(pug(options.pug))
  .pipe(rename('template.xml'))
  .pipe(gulp.dest(options.paths.html))
)

gulp.task('sass', () =>
  gulp
  .src(options.paths.sass)
  .pipe(plumber())
  .pipe(sass(options.sass))
  .pipe(prefixer(options.prefixer))
  .pipe(gulp.dest(options.paths.css))
)

gulp.task('babel', () =>
  gulp
  .src(options.paths.es6)
  .pipe(plumber())
  .pipe(concat('bundle.js'))
  .pipe(babel(options.babel))
  .pipe(uglify())
  .pipe(gulp.dest(options.paths.js))
)

// Watchers
gulp.task('default', () => {
  gulp.watch(`${options.paths.pug}/**/*.pug`, ['pug'])
  gulp.watch(options.paths.sass, ['sass'])
  gulp.watch(options.paths.es6, ['babel'])
})