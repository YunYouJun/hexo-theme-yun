import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css'
import consola from 'consola'
import chalk from 'chalk'
import del from 'del'

const sass = gulpSass(dartSass)

export function buildScss() {
  return gulp.src([
    'scss/index.scss', 'scss/css-vars.scss',
  ])
    .pipe(sass())
    .pipe(cleanCSS({ debug: true }, (details) => {
      consola.info(`${chalk.cyan(details.name)}: ${chalk.yellow(`[${details.stats.originalSize / 1000} KB]`)} -> ${chalk.green(`[${details.stats.minifiedSize / 1000} KB]`)}`)
    }))
    .pipe(gulp.dest('dist/css'))
}

/**
 * clean dist
 * @returns
 */
export function clean() {
  return del(['dist'])
}

/**
 * clean and build scss
 * @returns
 */
export async function build() {
  await clean()
  return buildScss()
}

const defaultTask = gulp.series(clean, build)
export default defaultTask
