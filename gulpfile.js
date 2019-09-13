const gulp = require('gulp')
const clean = require('gulp-clean')
const less = require('gulp-less')

gulp.task('lib', () =>
    gulp.src('lib/**/*', { read: false }).pipe(clean({ force: true }))
)
gulp.task('build', gulp.series('lib'))

gulp.task('assets', () =>
    gulp.src('assets/**/*', { read: false }).pipe(clean({ force: true }))
)
gulp.task('copy', () => gulp.src('src/styles.less').pipe(gulp.dest('lib/')))
gulp.task('less', () =>
    gulp
        .src('src/styles.less')
        .pipe(less())
        .pipe(gulp.dest('lib/'))
)
gulp.task('docs', gulp.series('assets', 'copy', 'less'))

gulp.task('default', gulp.series('build', 'docs'))
