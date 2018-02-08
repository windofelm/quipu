var gulp = require('gulp');
var babel = require('gulp-babel');
const mocha = require('gulp-mocha');
var minify = require('gulp-minify');


gulp.task('default', ['compress', 'testModule'], function () {
    console.log("All process completed successfully.");
});

gulp.task('testModule', function () {
    return gulp.src('test/*.js', { read: false })
        .pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('compress', function() {
    gulp.src('lib/*.js')
        .pipe(minify({
            ext:{
                src:'.js',
                min:'.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'))
});