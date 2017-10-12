'use strict';

const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;
const $ = require('gulp-load-plugins')();

module.exports = function(config) {
	return () => {
		return combiner(
				gulp.src(`${config.pugPath}/pages/*.pug`),
				$.pug({
					pretty: '\t'
				}),
				gulp.dest(config.outPath)
		).on('error', $.notify.onError(
				function(error){
					return {
						title: 'Pug',
						message: error.message
					};
				}))
	}
};