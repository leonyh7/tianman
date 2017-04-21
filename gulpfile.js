const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', () =>
    gulp.src('./assets/css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 2 versions','>1%'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
);