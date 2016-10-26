/**
 * Created by Kacper on 20.09.2016.
 */
'use strict'
var gulp=require('gulp'),
    sass=require('gulp-sass');

gulp.task('test',function(){
    console.log('test');
});

gulp.task('sass',function(){
    return gulp.src('scss/**/index.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('public_html/css'));
});
gulp.task('sass:watch',function(){
    gulp.watch('scss/**/*.scss',['sass']);
});