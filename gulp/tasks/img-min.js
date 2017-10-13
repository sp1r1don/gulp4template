'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const combiner = require('stream-combiner2').obj;
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(config, taskName){
	return () => {
		return combiner(
				gulp.src(`${config.imgPath}/*.*`, {since: gulp.lastRun(taskName)}),
				$.newer(config.imgPubPath),
				$.if(!isDevelopment, $.tinypng('7nR_ZAz-WFr7NCjmcYOVuLy6W6AWOGjI')),
				gulp.dest(config.imgPubPath)
			)
	}
};