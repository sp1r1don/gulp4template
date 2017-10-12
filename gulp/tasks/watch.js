'use strict';

const gulp = require('gulp');

module.exports = function(config){
	return () => {
		gulp.watch(`${config.pugPath}/**/*.pug`, gulp.series('pug'));
		gulp.watch(`${config.stylusPath}/**/*.styl`, gulp.series('styles'));
		gulp.watch(`${config.imgPath}/*.{png, jpg}`, gulp.series('img-min'));
		gulp.watch(`${config.jsPath}/*.js`, gulp.series('copyJS'));
		gulp.watch(`${config.cssPath}/*.js`, gulp.series('copyCSS'));
	}
};