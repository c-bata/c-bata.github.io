var gulp       = require('gulp');
var typescript = require('gulp-typescript');
var browserify = require('browserify');
var babelify   = require('babelify');
var uglify     = require('gulp-uglify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var watchify   = require('gulp-watchify');
var sourcemaps = require('gulp-sourcemaps');
var tscConfig  = require('./tsconfig.json');

var paths = {
  BUILD: "./public/js/",
  SRC: "./src/ts/",
  OUT: "bundle.js",
  // ES6用
  ES6_SRC: "./src/js/",
  ES6_OUT: "es6bundle.js"
};

gulp.task('compile', function () {
  return gulp.src(tscConfig.files)
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.BUILD));
});

gulp.task('copy:libs', function() {
  return gulp.src([
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.js'
    ])
    .pipe(gulp.dest(paths.BUILD))
});

gulp.task('es6-build', function() {
  watchify(browserify(paths.ES6_SRC + 'main.js', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source(paths.ES6_OUT))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.BUILD))
)});

gulp.task('watch', function() {
    gulp.watch('./src/{js,ts}/*', ['compile', 'es6-build'])
});

gulp.task('default', ['copy:libs', 'watch']);
