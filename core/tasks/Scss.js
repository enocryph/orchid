import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import nodeSass from 'sass';

export default class Scss {
  constructor(config, browserSync) {
    this.config = config;
    this.browserSync = browserSync;
    this.sass = gulpSass(nodeSass);
    this.init();
  }

  init() {
    gulp.task('scss', this.compile.bind(this, this.config.src, this.config.tmp));
    gulp.task('scss:build', this.compile.bind(this, this.config.src, this.config.dest));
  }

  compile(source, dest) {
    return gulp.src(`${source}/styles/*.scss`)
      .pipe(this.sass().on('error', this.sass.logError))
      .pipe(gulp.dest(`${dest}/css`))
      .pipe(this.browserSync.reload())
  }
}
