
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: {
		bundle: './src/modules/app.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),	// 在webpack命令中，生成实际文件
		publicPath: '/dist/',					// 输出基本目录，文件路径默认加上/dist/前缀,在webpack-dev-server命令行中，但是不生成实际文件
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loaders: 'vue-loader',
				exclude: /mode_modules/
			},
			{
				test: /\.scss$/,
				loaders: ExtractTextPlugin.extract({fallback: 'style-loader', use:['css-loader', 'sass-loader']})
			},
			{
				test: /\.js$/,
				loaders: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015'],
					plugins: ['transform-runtime']
				}
			}
		]
	},
	devServer:{
	    historyApiFallback:true,
	    hot:false,
	    inline:true,
	    progress:true,
	    port:8009 //端口你可以自定义
	},
	plugins:[
		new ExtractTextPlugin('app.css'),
	    new webpack.HotModuleReplacementPlugin()
	]

}