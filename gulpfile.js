let gulp = require('gulp');
let babel = require('gulp-babel');
const mocha = require('gulp-mocha');
let minify = require('gulp-minify');


// gulp.task('default', ['compress', 'testModule'], function () {
//     console.log("All process completed successfully.");
// });

gulp.task('default', ['compress'], function () {
    console.log("All process completed successfully.");
});

gulp.task('compress', function() {
    gulp.src('src/*.js')
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
        .pipe(gulp.dest('dist'));
});

/*gulp.task('testModule', function () {
    return gulp.src('test/*.js', { read: false })
        .pipe(mocha({ reporter: 'nyan' }));
});*/