'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

module.exports = gulp.task('scripts', function () {
return gulp.src(config.paths.src.scripts)
    .pipe(concat(config.filenames.scripts))
    .pipe(ngAnnotate())
    .pipe(gulpif(release,uglify())) 
    .pipe(gulpif(release,gulp.dest(config.paths.dest.phonegap.scripts),gulp.dest(config.paths.dest.build.scripts)));
});
