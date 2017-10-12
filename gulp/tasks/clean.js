'use strict';

const gulp = require('gulp');
const del = require('del');


module.exports = function(config) {
	return () => {
		return del(config.outPath);
	}
};