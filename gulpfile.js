var gulp = require('gulp'),
    concat = require('gulp-concat'),

gulp.task('scripts', function () {
    gulp.src([
        './node_modules/angular/angular.min.js',
        './src/app.js',
        './src/**/*.js'
    ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./prod'))
});

gulp.task('watch', function() {
   gulp.watch('./src/**/*.js', ['scripts'])
});

gulp.task('default', ['scripts', 'watch']);