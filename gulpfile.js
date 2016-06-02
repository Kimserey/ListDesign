var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('sass', function () {
  gulp.src('*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
  gulp.watch('*.scss', ['sass']);
});

gulp.task('webserver', function () {
    gulp.src('app')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});