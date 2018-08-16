var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('default', ['sass'], function () {

  browserSync.init({
    server: "./",
    tunnel: "test"
  });

  gulp.watch("src/sass/*.sass", ['sass'])
  // .on('change', browserSync.reload);
  gulp.watch(["index.html", "public/html/*.html"]).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src("src/sass/*.sass")
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest("public/css"))
    .pipe(browserSync.stream());
});