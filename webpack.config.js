const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	devServer: {
		contentBase: [
			path.resolve(__dirname, "public"),
			path.resolve(__dirname, "node_modules")
		],
		publicPath:  "/",
		port:process.env.PORT,
		historyApiFallback: {
		  index: 'index.html'
		}
	},
	entry: {
		bundle: ['./src/main.ts']
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte'),
			"@slick-for/svelte": path.resolve('node_modules', '@slick-for/svelte/dist/src/slick-for-svelte-factory'),
		},
		extensions: ['.mjs', '.js', '.svelte','.ts'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true
					}
				}
			},
			{
				test: /\.ts$/,
				use: {
					loader: 'awesome-typescript-loader',
					options: {
						transpileOnly:true //make life easy
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	devtool: prod ? false: 'source-map'
};
