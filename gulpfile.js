const gulp = require('gulp');
const fs = require("fs");
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const sync = require('run-sequence');
const gutil = require('gulp-util');
const stripCssComments = require('gulp-strip-css-comments');



gulp.task('css', () => {
  return gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'public/css/body.css',
      'public/css/lists.css',
      'public/css/container.css',
       'public/css/closet.css',
      'public/css/loader.css'
    ])
    .pipe(stripCssComments())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('public/dist'))
});


// gulp.task('scripts', () => {
//   return gulp.src([
//       'public/js//vendor/canvasjs.min.js',
//       'public/dist/bundle.js'
//     ])
//     .pipe(concat('app.js'))
//     .pipe(gulp.dest('public/dist'));
// });
gulp.task('default', (done) => {
  //sync( 'css', 'scripts', done);
  sync( 'css', done);
});