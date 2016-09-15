'use strict';
const webpack = require('webpack');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const CssSourcemapPlugin = require('css-sourcemaps-webpack-plugin');

const src_path = __dirname + '/src';

const config = {
	context: __dirname + '/src',
	entry: [
		'./index.js',
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080/'
		],
	output: {
		path: __dirname + '/src',
		publicPath: '/src',
		filename: 'bundle.js'
	},
	resolve: {
	    extensions: ['', '.min.js', '.js', '.ts'],
        // alias: {
        //     "ag-grid-root" : __dirname + "/node_modules/ag-grid"
        // }
    },
	plugins:[
		new webpack.DefinePlugin({
			ON_TEST: process.env.NODE_ENV === 'test'
		}),
		new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here
        }),
        new CssSourcemapPlugin(),
		new webpack.HotModuleReplacementPlugin()
       //new webpack.optimize.CommonsChunkPlugin('common.js')
	],

	module:{
		preloaders: [
			{test: /\.js$/, loader: 'jshint-loader', include: src_path}
		],
		loaders:[
			{test: /\.css$/, loader: 'style!css', include: src_path},
			{test: /\.less$/,loader: "style!css!less", include: src_path},
			{test: /\.scss$/, loader: 'style!css!sass', include: src_path},
			{test: /\.js$/, loader: 'babel', include: src_path, query: {compact: false}},
			{test: /\.html$/, loader: 'raw', include: src_path},
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=5000000', include: src_path},
			{test: /\.(eot|svg|ttf|woff|woff2)$/, loader:'file?name=public/fonts/[name].[ext]'},
			{test: /\.json$/, loader: 'json', include: src_path},
			{test: require.resolve("ag-grid"), loader: "imports?importedAngular=angular" }
		]
	},

	devtool: 'eval-cheap-module-source-map',

	devServer: {
		inline: true,
		stats: 'minimal',
		historyApiFallback: true,
	}

	//sassResources: [ './src/main/layout/scss/_variables.scss', './src/main/layout/scss/layout.scss' ]

};



if(process.env.NODE_ENV === 'production'){
	config.output.path = __dirname + '/dist';
	config.plugins.push(new webpack.optimize.UglifyJsPlugin());
	config.plugins.push(new CssSourcemapPlugin({disable: true}));
	config.devtool = 'source-map';
}

module.exports = config;