'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = function(config) {
	return () => {
		return gulp.src(`${config.cssPath}/*.css`)
		.pipe(gulp.dest(config.cssPubPath));
	}
};