'use strict';

const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;
const $ = require('gulp-load-plugins')();

module.exports = function(config){
	return () => {
		return combiner(
			gulp.src(['node_modules/slick-carousel/slick/slick.css',
							 'node_modules/slick-carousel/slick/slick-theme.css',
							 'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
							 'node_modules/animate.css/animate.min.css']),
			$.concat('libs.css'),
			gulp.dest(config.cssPubPath)
		).on('error', $.notify.onError((error) => {
			return {
				title: 'LibsCSS',
				message: error.message
			}
		}))
	}
};