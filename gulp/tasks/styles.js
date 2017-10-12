'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const combiner = require('stream-combiner2').obj;

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(config){
	return () => {
		return combiner(
				gulp.src(`${config.stylusPath}/template_styles.styl`),
				$.if(isDevelopment, $.sourcemaps.init()),
				$.stylus(),
				$.autoprefixer({browsers: [
					'last 3 versions',
					'> 5%'
				]}),
				$.if(isDevelopment, $.sourcemaps.write()),
				gulp.dest(config.outPath)
		).on('error', $.notify.onError( error => {
			return {
				title: 'Stylus',
				message: error.message
			}
		}));
	};
};