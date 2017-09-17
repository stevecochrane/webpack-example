const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge             = require("webpack-merge");

const lintJavaScript = require("./parts/lintJavaScript");
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
	})
]);
