var gulp = require('gulp');
var markdown = require('gulp-markdown');
var jshint = require('gulp-jshint');


gulp.task('jshint', function () {
    gulp.src(['./lib/*.js', './test/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('default', ['jshint'], function () {
    gulp.src('README.md')
        .pipe(markdown())
        .pipe(gulp.dest('docs'))

    gulp.watch(['./lib/*.js', './test/*.js'], ['jshint']);
});