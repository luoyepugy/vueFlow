var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var webpack = require('webpack');

//本地调试服务插件
var connect = require('connect');
var http = require('http');
var serveIndex = require('serve-index');
var serveStatic = require('serve-static');
var cLivereload = require('connect-livereload');
var fs = require('fs');
var _p = require('path');

var argv = require('yargs')
    .default('env', 'develop')
    .argv;

var del = require('del'); //删除文件
var pngquant = require('imagemin-pngquant'); //压缩png图片

// API Configure
var apis = {
	'test': 'http://172.18.84.243:8080/agent_cloud/',
	'luoyy': 'http://172.18.84.23:8080/agent_cloud/'
};

var paths = {
	root: './app/',
	index: './app/index.html',
	rest: './app/views/rest.js',
	vue: './app/**/*.vue',
	sass: './app/assets/sass/',
	views: './app/views/',
	images: './app/assets/images/',
	icons: './app/assets/images/icons/',
	sassEntry: './app/assets/sass/app.scss',
	lib: [
		'./app/assets/js/lib/zepto.js',
        './app/assets/js/lib/event.js',
        './app/assets/js/lib/ajax.js'
	],
	target: {
		root: './www/',
		views: './www/views/',
		lib: './www/assets/js/lib/',
		css: './www/assets/css/',
		images: './www/assets/images/'
	},
	build: {
		root: './build/',
		views: './build/views/'
	},
	zip: {
		root: './zip/'
	}
};

// webpack config
var config = {
	env: argv.env,
	entry: paths.views + 'app.js',
	output: {
		path: paths.target.views,
		publicPath: paths.target.root,
		filename: 'build.js'
	},
	styleOutputPath: paths.target.css
};

// A callback function to handle error
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
};

// webpack packaging
var webpackConfig = require('./webpack.config')(config);
gulp.task('webpack', function(callback) {
	webpack(webpackConfig, function(err, status) {
		if(err) throw new $.util.PluginError('webpack', err);
		$.util.log('[webpack]', status.toString({

		}));
		callback();
	});
});

// lib
gulp.task('lib', function() {
	return gulp.src(paths.lib)
        .pipe($.insert.append(';'))
        .pipe($.concat('lib.js'))
		.pipe($.uglify())
		.pipe($.rename({extname: '.min.js'}))
		.on('error', handleError)
		.pipe(gulp.dest(paths.target.lib));
});

// image
gulp.task('image', function() {
	return gulp.src([paths.images + '**/*.*'])
		.pipe($.imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.on('errpr', handleError)
		.pipe(gulp.dest(paths.target.images))
		.pipe($.livereload());
});

// index.html
gulp.task('index', function() {
	return gulp.src(paths.index)
		.pipe($.minifyHtml({
			conditionals: true,
			spare: true
		}))
		.pipe(gulp.dest(paths.target.root))
		.pipe($.livereload());
});

// sass
gulp.task('sass', function() {
	return gulp.src(paths.sassEntry)
		.pipe($.sass())
		.on('error', handleError)
		.pipe($.autoprefixer({
			browsers: ['> 1%', 'last 2 versions', 'Firefox 26', 'chrome 19', 'Opera 12.1', 'ios_saf 4', 'Android 4']
		}))
		.pipe($.cleanCss({
			keepSpecialComments: 0
		}))
		.pipe(gulp.dest(paths.target.css))
		.pipe($.livereload());
});

// clean
gulp.task('clean', function() {
	return del([paths.target.root, paths.build.root, paths.zip.root], function(paths) {
		console.log('deleted files and folders:\n', paths.join('\n'));
	});
});

// watch
gulp.task('watch', function() {
	$.livereload.listen();
	gulp.watch(paths.index, ['index']);
	gulp.watch([paths.rest, paths.root + '**/*.*', '!' + paths.root + 'assets/' + '**/*.*'], ['webpack']);
	gulp.watch(paths.sass + '**/*.scss', ['sass']);
	gulp.watch(paths.images + '**/*.*', ['image']);
	gulp.watch(paths.target.views + '**/*.*', function() {
		$.livereload.changed(paths.target.views);
	});
});

// build
gulp.task('build', ['lib', 'index', 'sass'], function() {
	return gulp.src([paths.target.root + '**/*.*'], { base: paths.target.root })
		.pipe(gulp.dest(paths.buid.root));
});

// zip
gulp.task('zip', ['build'], function() {
	return gulp.src(paths.build.root + '**/*.*')
		.pipe(zip.dest(paths.zip.root + 'package.zip'));
});

// default
gulp.task('default', ['lib', 'webpack', 'index', 'sass', 'watch'], function() {
	var app = connect()
		.use(cLivereload({ port: 35729 }))
		.use(serveStatic(paths.target.root, {
			index: 'index.html'
		}));
	http.createServer(app)
		.listen(8009)
		.on('listening', function() {
			console.log('web server started on http://localhost:8009');
		});
	$.livereload.listen();
});
