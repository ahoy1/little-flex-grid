'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('styles', function() {
    gulp.src('scss/bicep.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        }))
        .pipe(minifyCSS({compatibility: 'ie8'}))
        .pipe(rename('bicep.min.css'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default',function() {
    gulp.watch('scss/bicep.scss',['styles']);
});


