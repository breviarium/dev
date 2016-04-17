'use strict';

const gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('compile', [
    'compile-bin'
]);

gulp.task('compile-bin', () => {
    return gulp.src('bin/*')
            .pipe(babel({
                presets: [ 'es2015' ],
                plugins: [
                    'transform-runtime',
                    'syntax-async-functions',
                    'transform-async-to-generator'
                ]
            }))
            .pipe(gulp.dest('build/bin'));
});

gulp.task('default', [ 'compile' ]);
