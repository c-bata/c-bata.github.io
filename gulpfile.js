var gulp       = require('gulp');
var typescript = require('gulp-typescript');
var browserify = require('browserify');
var babelify   = require('babelify');
var uglify     = require('gulp-uglify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var watchify   = require('gulp-watchify');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  BUILD: "./public/js/",
  SRC: "./src/ts/",
  OUT: "bundle.js",
  ES6_SRC: "./src/js/",
  ES6_OUT: "es6bundle.js",
};

gulp.task('tsc', function() {
    gulp.src(paths.SRC)
        .pipe(typescript({module:"commonjs"}))
        .pipe(gulp.dest(paths.SRC));
});

gulp.task('browserify', function() {
    browserify({entries: [paths.SRC + "main.js"]})
        .bundle()
        .on('error', function(err) {
            console.log(err.message);
            this.emit('end');
        })
        .pipe(source(paths.OUT))
        .pipe(gulp.dest(paths.BUILD));
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
    gulp.watch('./src/{js,ts}/*', ['tsc', 'browserify', 'es6-build'])
});

gulp.task('default', ['tsc', 'browserify', 'es6-build', 'watch']);

