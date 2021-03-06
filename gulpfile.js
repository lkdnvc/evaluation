var gulp = require('gulp');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');
var htmlmin = require('gulp-htmlmin');
var babel = require('gulp-babel');

gulp.task('html', function () {
	return gulp.src('src/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'))
});

gulp.task('style', function () {
	return gulp.src('./src/style/index.styl')
		.pipe(stylus({compress: true}))
		.pipe(gulp.dest('./dist/style'));
});

gulp.task('watch', ['default'], function () {
	gulp.watch('./src/style/**/*.styl', ['style']);
	gulp.watch('./src/**/*.html', ['html']);
	gulp.watch('./src/scripts/**/*.js', ['scripts']);
});

gulp.task('scripts', function () {
	return gulp.src('./src/scripts/**/*.js')
		.pipe(babel({presets: ['es2015'], minified: true}))
		.pipe(gulp.dest('./dist/scripts'));
});

gulp.task('default', ['style', 'html', 'scripts']);
gulp.task('start', ['watch']);
