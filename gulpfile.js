var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

var paths = {
  scripts: ['js/**/*.js'],
  html: ['index.html', 'views/**/*.html']
};

gulp.task('default', ['browser-sync'], function() {
});


gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
      files: ["js/**/*.js", "views/**/*.html","styles/**/*.css"],
      browser: "google chrome",
      port:7000
  });
});

gulp.task('nodemon', function(cb) {
  nodemon({
    script: './server.js', ignore: 'node_modules/**/*.js'
  }).on('start', function () {
    cb();
  });
});