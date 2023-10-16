const { watch, series, src, dest } = require('gulp');
const rollup = require('rollup');
const rollupResolve = require('@rollup/plugin-node-resolve');
const postcss = require('gulp-postcss');
const livereload = require('gulp-livereload');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;

const js = async (cb) => {
	const build = await rollup.rollup({
		input: './assets/js/main.js',
		plugins: [rollupResolve()]
	});

	await build.write({
		file: './assets/dist/main.js',
		name: 'index',
		format: 'iife',
		sourcemap: !argv.production
	});

	livereload.changed('./assets/dist/main.js');

	cb();
};

const css = (cb) => {
	src('./assets/css/main.css')
		.pipe(postcss())
		.pipe(dest('./assets/dist'))
		.pipe(livereload());

	cb();
};

const hbs = async (cb) => {
	await src(['*.hbs', 'partials/**/*.hbs'])
		.pipe(livereload({
		reloadPage: true
	}))
	cb();
}

exports.default = (cb) => {
	livereload.listen({
		start: true
	});
	watch(['assets/css/**/*.css', 'assets/css/parts/**/*.css'], css);
	watch('assets/js/**/*js', js);
	watch(['*.hbs', 'partials/**/*.hbs'], hbs);
	cb();
}

exports.build = series(css, js);
