// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./scss/simpleUI.scss')
        .pipe(sass())
        .pipe(gulp.dest("./css"))
});