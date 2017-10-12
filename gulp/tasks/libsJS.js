'use strict';

const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;
const $ = require('gulp-load-plugins')();

module.exports = function(config){
	return () => {
		return combiner(
			gulp.src(['node_modules/slick-carousel/slick/slick.min.js', 'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js']),
			$.concat('libs.min.js'),
			gulp.dest(config.jsPubPath)
		).on('error', $.notify.onError((error) => {
			return {
				title: 'LibsJS',
				message: error.message
			}
		}))
	}
};