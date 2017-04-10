var gulp = require('gulp');
var gulpSass = require('gulp-sass');

gulp.task('default', function() {
    gulp.src('./test.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('./'));
});
