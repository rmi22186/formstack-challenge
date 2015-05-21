var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var paths = {
  scripts: ['js/**/*.js'],
  html: ['index.html', 'views/**/*.html']
};

gulp.task('serve', function() {
  nodemon({script: './server.js', ignore: 'node_modules/**/*.js'});
});