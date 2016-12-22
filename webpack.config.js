var vue = require('vue-loader');
var webpack = require('webpack');

//独立样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = function(config) {
  var moduleExports = {
    entry: config.entry,
    output: config.output,
    module: {
      loaders: [{
        test: /\.vue$/,
        loader: 'vue'
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("css!sass")
      }, {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\//,
        loader: 'babel'
      }]
    },
    vue: {
      loaders: {
        sass: ExtractTextPlugin.extract("css!sass")
      }
    },
    babel: {
      presets: ['es2015'],
      plugins: ['transform-runtime']
    }
  };

  moduleExports.devtool = '#source-map';
  moduleExports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'" + config.env + "'"
      }
    }),
    new ExtractTextPlugin("../style/webpack.css", {
      disable: false,
      allChunks: true //所有独立样式打包成一个css文件
    })
  ]

  return moduleExports
};
