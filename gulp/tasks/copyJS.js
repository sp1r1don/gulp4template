'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = function(config) {
	return () => {
		return gulp.src(`${config.jsPath}/*.js`)
		.pipe($.newer(config.jsPubPath))
		.pipe(gulp.dest(config.jsPubPath));
	}
};