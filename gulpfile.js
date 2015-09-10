var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var uglify     = require('gulp-uglify')
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer')
var watchify   = require('gulp-watchify');
var sourcemaps = require('gulp-sourcemaps')

var paths = {
  OUT: "bundle.js",
  SRC: "./src/",
  BUILD: "./public/js/"
};

gulp.task('build', function() {
  watchify(browserify(paths.SRC + 'main.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source(paths.OUT))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.BUILD))
)});

gulp.task('watch', function() {
  gulp.watch('./src/**/*', ['build'])
});

gulp.task('default', ['build', 'watch']);

