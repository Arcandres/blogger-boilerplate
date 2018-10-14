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
  options = require('./config/options')

// Tasks
gulp.task('pug', () => 
  gulp
    .src(options.paths.pug) // Only compile the index
    .pipe(plumber())
    .pipe(pug(options.pug))
    .pipe(rename('template.xml'))
    .pipe(gulp.dest(options.paths.html))
)

// Watchers
gulp.task('default', () => {
  gulp.watch(options.paths.pug, ['pug'])
  // gulp.watch(options.paths.sass, ['sass'])
  // gulp.watch(options.paths.es6, ['babel'])
})

