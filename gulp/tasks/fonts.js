'use strict';

const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;
const $ = require('gulp-load-plugins')();

module.exports = function(config){
	return () => {
		return combiner(
				gulp.src(`${config.fontPath}/**/*.*`),
				$.newer(`${config.fontPubPath}`),
				gulp.dest(`${config.fontPubPath}`)
		)
	}
};