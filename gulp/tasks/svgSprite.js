'use strict';

const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;
const $ = require('gulp-load-plugins')();

module.exports = function(config) {
	return () => {
		return combiner(
			gulp.src(config.svgPath),
			$.svgSprite({
				mode: {
					css: {
						render: {
							css: true
						}
					}
				}
			}),
			gulp.dest(config.svgPubPath)
		).on('error', $.notify.onError(
				function(error){
					return {
						title: 'svgSprite',
						message: error.message
					};
				}
		))
		}
};