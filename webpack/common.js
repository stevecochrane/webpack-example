const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge             = require("webpack-merge");

const lintCSS        = require("./parts/lintCSS");
const lintJavaScript = require("./parts/lintJavaScript");
const loadCSS        = require("./parts/loadCSS");
const loadFonts      = require("./parts/loadFonts");
const paths          = require("./parts/paths");

module.exports = merge([
	{
		entry: {
			app: paths.app
		},
		output: {
			path:     paths.build,
			filename: "[name].js"
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: "Webpack demo"
			})
		]
	},
	lintJavaScript({
		include: paths.app
	}),
	lintCSS({
		include: paths.app
	}),
	loadFonts({
		options: {
			name: "[name].[ext]"
		}
	}),
	loadJavaScript({
		include: paths.app
	})
]);
