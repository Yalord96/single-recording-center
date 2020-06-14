var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var tinypng = require('gulp-tinypng-compress');
var pipeline = require('readable-stream').pipeline;
 
// gulp.task('js', function () {
//   return pipeline(
//         gulp.src('js/app.js'),
//         uglify(),
//         gulp.dest('dist/js')
//   );
// });

gulp.task('scss', function () {
  return gulp.src('src/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function(){
  gulp.watch( 'src/**/*.scss', gulp.series(['scss']));
  // gulp.watch( 'src/**.js', gulp.series(['js']))
});

gulp.task('tinypng', function () {
  gulp.src('src/**/*.{png,jpg,jpeg}')
      .pipe(tinypng({
        key: 'jWncWp7QkjTt22LnFmT0YKHRXtmLmC7W',
        sigFile: 'images/.tinypng-sigs',
        log: true
      }))
      .pipe(gulp.dest('dist/img'));
});