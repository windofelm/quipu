var gulp = require('gulp');
const mocha = require('gulp-mocha');
var minify = require('gulp-minify');


gulp.task('default', ['testModule', 'compress'], function () {

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
        .pipe(gulp.dest('dist'))
});