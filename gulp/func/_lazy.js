'use strict';

const gulp = require('gulp');
const path = require('path');

module.exports = function lazyRequireTask(taskName, config) {

	gulp.task(taskName, function(callback){
		let task = require(path.resolve(`${config.taskPath}/${taskName}`)).call(this, config, taskName);

		return task(callback);
	});

};