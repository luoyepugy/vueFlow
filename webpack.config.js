
var webpack = require('webpack');
// var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config){
	var moduleExports = {
		entry: config.entry,
		output: config.output,
		module: {
			loaders: [
				{
					test: /\.vue$/,
					loaders: 'vue-loader',
					exclude: /mode_modules/
				},
				{
					test: /\.scss$/,
					loaders: ExtractTextPlugin.extract("css!sass")
				},
				{
					test: /\.js$/,
					loaders: 'babel-loader',
					exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\//,
					query: {
						presets: ['es2015'],
						plugins: ['transform-runtime']
					}
				},
				{
					test: /\.(png|jpg)$/,
					loaders: 'url-loader?limit=8192'
				}
			]
		}
		// devServer:{
		//     historyApiFallback:true,
		//     hot:false,
		//     inline:true,
		//     progress:true,
		//     port:8009 //端口你可以自定义
		// },
		// plugins:[
		// 	new ExtractTextPlugin('app.css'),
		//     new webpack.HotModuleReplacementPlugin()
		// ]
	};

	moduleExports.plugins = [
	    // new webpack.HotModuleReplacementPlugin()
	];

	return moduleExports;

}