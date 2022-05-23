/*
 * @Author: zhangln
 * @Date: 2019-07-24 15:36:40
 * @Description: 
 */
'use strict';
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');
const ENV = process.argv[process.argv.length - 1];
module.exports = {
	dev: {
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			'/carbon': {
				// target: 'http://net-accountant.educhainx.com/',
				target: 'http://192.168.0.12:8067/',
				// target: 'http://192.168.0.114:8080/',
				// target: 'http://localhost:8081/',
				changeOrigin: true,
				pathRewrite: {
					'^/carbon': '/carbon'
				}
			}
		},

		// Various Dev Server settings
		host: '192.168.0.96', // can be overwritten by process.env.HOST
		port: 9092, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

		// Use Eslint Loader?
		// If true, your code will be linted during bundling and
		// linting errors and warnings will be shown in the console.
		useEslint: true,
		// If true, eslint errors and warnings will also be shown in the error overlay
		// in the browser.
		showEslintErrorsInOverlay: false,

		/**
		 * Source Maps
		 */

		// https://webpack.js.org/configuration/devtool/#development
		devtool: 'cheap-module-eval-source-map',

		// If you have problems debugging vue-files in devtools,
		// set this to false - it *may* help
		// https://vue-loader.vuejs.org/en/options.html#cachebusting
		cacheBusting: true,

		cssSourceMap: true
	},

	build: {
		// Template for index.html
		index: path.resolve(__dirname, '../dist/index.html'),	//..配置项目打包路径的入口文件

		// Paths
		assetsRoot: path.resolve(__dirname, '../dist'),	//..打包文件名称
		assetsSubDirectory: 'static',	//..配置资源文件路径
		assetsPublicPath: '/carbon/',	//..配置资源文件（服务器文件夹）在项目中的引用

		/**
		 * Source Maps
		 */

		productionSourceMap: false,
		// https://webpack.js.org/configuration/devtool/#production
		devtool: false,
		// devtool: '#source-map',

		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],

		// Run the build command with an extra argument to
		// View the bundle analyzer report after build finishes:
		// `npm run build --report`
		// Set to `true` or `false` to always turn it on or off
		bundleAnalyzerReport: process.env.npm_config_report
	}
};
