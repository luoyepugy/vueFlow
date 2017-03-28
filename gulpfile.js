
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    cLivereload = require('connect-livereload'),
    serveStatic = require('serve-static')
    http = require('http')
    connect = require('connect'),
    webpack = require('webpack');

// 样式
gulp.task('css', ['images'], function () {
  return gulp.src('src/assets/sass/*.scss')
    .pipe($.sass())
    .pipe($.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe($.rename({suffix: '.min'}))
    .pipe($.cleanCss({keepSpecialComments: '*'}))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe($.livereload());
});

// 脚本
// gulp.task('js', function() {
//   return gulp.src('src/modules/app.js')
//     .pipe($.webpack(require('./webpack.config.js')))
//     .pipe(gulp.dest('dist/modules'))
//     .pipe($.livereload());
// });


var config = {
  // env: argv.env,
  //webpack.config
  entry: './src/modules/' + 'app.js',
  output: {
    path: __dirname + '/dist/modules/',
    publicPath: '/modules/',
    filename: 'bundle.js'
  },
  styleOutputPath: 'dist/assets/css'
};

// Webpack packaging
var webpackConfig = require('./webpack.config')(config);
gulp.task("webpack", function(callback) {
  // run webpack
  webpack(webpackConfig, function(err, stats) {
    if (err) throw new $.util.PluginError("webpack", err);
    $.util.log("[webpack]", stats.toString({
      // output options
    }));
    callback();
  });
});

gulp.task('webpackReload', ['webpack'], function() {
  return gulp.src('dist/modules/')
    .on('error', handleError)
    .pipe(gulp.dest('dist/modules'))
    .pipe($.livereload());
});

// lib
gulp.task('lib', function() {
  return gulp.src('src/assets/js/lib/**/*.js')
    .pipe($.insert.append(';'))
    .pipe($.concat('lib.js'))
    .pipe($.uglify())
    .pipe($.rename({ extname: '.min.js' }))
    .on('error', handleError)
    .pipe(gulp.dest('dist/assets/js/lib'));
});

// 图片
gulp.task('images', function() {
  return gulp.src('src/assets/images/**/*')
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/assets/images'))
    .pipe($.livereload());;
});

//index.html
gulp.task('index', function() {
  return gulp.src('src/index.html')
    .pipe($.minifyHtml({
      conditionals: true,
      spare: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe($.livereload());
}); 

// clean
gulp.task('clean', function() {
  return gulp.src(['dist/assets'], {read: false})
    .pipe($.clean());
});

// 监听
gulp.task('watch', function() {
  $.livereload.listen();
  gulp.watch('src/index.html', ['index']);
  gulp.watch('src/assets/sass/**/*.scss', ['css']);
  gulp.watch('src/assets/js/**/*.js', ['lib']);
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch(['src/' + '**/*.*', '!' + 'src/' + 'assets/' + '**/*.*'], ['webpackReload']);
  // gulp.watch('src/modules/' + '**/*.*', function() {
  //   $.livereload.changed('dist/modules');
  // });
});

gulp.task('s', ['index', 'lib', 'css', 'webpackReload', 'watch'], function() {
  var app = connect()
    .use(cLivereload({ port: 35729 }))
    .use(serveStatic('dist/', {
      index: 'index.html'
    }));
  http.createServer(app)
    .listen(8009)
    .on('listening', function() {
      console.log('Web server started on http://localhost:8009')
    });
  $.livereload.listen();
});


// A callback function to handle error
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}
