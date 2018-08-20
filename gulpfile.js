var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var shell = require('gulp-shell');

// Static Server + watching scss/html files
gulp.task('default', ['sass'], function () {
  browserSync.init({
    server: "./",
    tunnel: "test"
  });
  gulp.watch(["src/sass/**/*.sass"]).on('change', browserSync.reload)
  gulp.watch(["index.html", "public/html/**/*.html"]).on('change', browserSync.reload);
  gulp.watch(["./public/js/**/*.js"]).on("change", browserSync.reload)
});

gulp.task('sass', shell.task('sass --watch src/sass:public/css &'));