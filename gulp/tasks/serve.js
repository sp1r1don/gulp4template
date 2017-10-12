'use strict';

const gulp = require('gulp');
const bs = require('browser-sync').create();

module.exports = function(config){
	return () => {
		bs.init({
			server: config.outPath
		});
	return bs.watch(`${config.outPath}/**/*.*`).on('change', bs.reload);
	}
};