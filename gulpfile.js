var
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create(),
  useref = require('gulp-useref'),
  uglify = require('gulp-uglify'),
  gulpIf = require('gulp-if'),
  cssnano = require('gulp-cssnano'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  del = require('del'),
  runSequence = require('run-sequence'),
  pngquant = require('imagemin-pngquant');

// File locations
var
  source = 'app/',
  dest = 'dist/',

  images = {
    in: source + 'images/*.*',
    out: dest + 'images/'
  };

// clear the dist folder
gulp.task('clean', function() {
  del([
    dest + '*'
  ]);
});

// SASS tasks
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())  // converts sass to css with gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))

});

// concatenate js & css files added to html files into one minified file
gulp.task('useref', function(){
  return gulp.src('app/**/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    // add the minified file to the dist folder
    .pipe(gulp.dest('dist'))
});

// Optimise images

gulp.task('images', function(){
  return gulp.src(images.in)
  // Caching images that ran through imagemin
    .pipe(imagemin({progressive: true,svgoPlugins: [{removeViewBox: false}],use: [pngquant()]}))
    .pipe(gulp.dest(images.out));
});

// Copy fonts folder to dist
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})


// APP web server - Spin up a web server with sync & refesh on file changes
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: source
    },
  })
})

// dist web server - Spin up a web server with sync & refesh on file changes
gulp.task('build-browserSync', function() {
  browserSync.init({
    server: {
      baseDir: dest
    },
  })
})



// Gulp Watch folders & files for changes
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);

})


gulp.task('build', function (callback) {
  runSequence('clean',
    ['sass', 'useref', 'images', 'fonts', 'build-browserSync'],
    callback
  )
})
gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})
