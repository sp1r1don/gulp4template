'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = function(config, taskName){
	return () => {
		return gulp.src(`${config.imgPath}/*.{png, jpg}`, {since: gulp.lastRun(taskName)})
		.pipe($.newer(config.imgPubPath))
		.pipe(gulp.dest(config.imgPubPath));
	}
};