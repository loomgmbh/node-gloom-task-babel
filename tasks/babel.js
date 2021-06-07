const Task = require('gloom/Task');
const Gulp = require('gulp');
const Uglify = require('gulp-uglify');
const Rename = require('gulp-rename');
const Path = require('path');
const Babel = require('gulp-babel');

module.exports = class ScriptsTask extends Task {

  key() {
    return 'scripts';
  }

  tags() {
    return ['watcher'];
  }

  defaultConfig() {
    return {
      scripts: {
        files: [
          'src/comps/**/*.js',
          '!src/comps/**/_*.js'
        ],
        dest: './dist/scripts',
        watch: 'src/comps/**/*.js',
        presets: ['@babel/env'],
      },
    };
  }

  task(config, manager) {
    Gulp.task('scripts', function scriptsCompile() {
      return Gulp.src(config.scripts.files)
        .pipe(babel({
          presets: config.scripts.presets,
        }))
        .pipe(Uglify().on('error', console.log))
        .pipe(Rename(function(path) {
          path.dirname = '';
          path.extname = '.min.js';
        }))
        .pipe(Gulp.dest(config.scripts.dest));
    });

    Gulp.task('scripts:watch', Gulp.series('scripts', function scriptsWatch(cb) {
      Gulp.watch(config.scripts.watch, Gulp.parallel('scripts'))
        .on('change', function(path) {
          console.log('Trigger "scripts" by changing "' + Path.basename(path) + '"');
        });

      return cb();
    }));
  }

};
