const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		bundle: './src/index.js',
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'To-Do-List',
			filename: 'index.html',
			template: 'src/template.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},

			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};