'use strict';

const gulp = require('gulp');
const config = require('./config.json');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

const _task = require('./gulp/func/_lazy');

_task('styles', config);
_task('clean', config);
_task('img-min', config);
_task('serve', config);
_task('watch', config);
_task('fonts', config);
_task('pug', config);
_task('libsJS', config);
_task('copyJS', config);
_task('copyCSS', config);
_task('libsCSS', config);
_task('svgSprite', config);

gulp.task('bild', gulp.series(
		'clean',
		gulp.parallel('styles', 'img-min', 'fonts', 'pug', 'libsJS', 'copyJS', 'copyCSS', 'libsCSS'))
);

gulp.task('dev',
		gulp.series('bild', gulp.parallel('watch', 'serve')));
