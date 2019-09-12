const gulp = require('gulp')
const clean = require('gulp-clean')

gulp.task('lib', () =>
    gulp.src('lib/**/*', { read: false }).pipe(clean({ force: true }))
)

gulp.task('assets', () =>
    gulp.src('assets/**/*', { read: false }).pipe(clean({ force: true }))
)

gulp.task('default', gulp.series('lib', 'assets'))
