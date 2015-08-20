var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var imagemin = require('gulp-imagemin');
var del = require('del');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('build.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/js'))
    .pipe(notify({ message: 'scripts task finished!' }));
});

gulp.task('less', function() {

  gulp.watch('./src/less/*.less', ['less']);
  return gulp.src('./src/less/*.less')
      .pipe(less())
      .pipe(concatCss('bundle.css')) // name of concated css.
      .pipe(minifyCSS())
      .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('image', function() {
  return gulp.src('./src/img/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./dist/assets/img'))
    .pipe(notify({ message: 'images compression finished!' }));
});

gulp.task('clean', function(cb) {
  del(['./dist/assets'], cb);
});

gulp.task('default', ['less', 'image', 'js']);
