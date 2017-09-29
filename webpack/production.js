const merge   = require("webpack-merge");
const webpack = require("webpack");

const attachRevision     = require("./parts/attachRevision");
const autoprefix         = require("./parts/autoprefix");
const clean              = require("./parts/clean");
const commonConfig       = require("./common");
const extractBundles     = require("./parts/extractBundles");
const extractCSS         = require("./parts/extractCSS");
const generateSourceMaps = require("./parts/generateSourceMaps");
const loadImages         = require("./parts/loadImages");
const minifyCSS          = require("./parts/minifyCSS");
const minifyJavaScript   = require("./parts/minifyJavaScript");
const paths              = require("./parts/paths");
const setFreeVariable    = require("./parts/setFreeVariable");

const productionConfig = merge([
	{
		output: {
			chunkFilename: "[name].[chunkhash].js",
			filename: "[name].[chunkhash].js"
		},
		performance: {
			hints: "warning",
			maxEntrypointSize: 100000,
			maxAssetSize: 450000
		},
		plugins: [
			new webpack.HashedModuleIdsPlugin()
		]
	},
	clean(paths.build),
	minifyJavaScript(),
	minifyCSS({
		options: {
			discardComments: {
				removeAll: true
			},
			safe: true
		}
	}),
	extractBundles([
		{
			name: "vendor",
			minChunks: ({ resource }) => (
				resource &&
				resource.indexOf("node_modules") >= 0 &&
				resource.match(/\.js$/)
			)
		},
		{
			name: "manifest",
			minChunks: Infinity
		}
	]),
	generateSourceMaps({
		type: "source-map"
	}),
	extractCSS({
		use: [
			"css-loader",
			autoprefix()
		]
	}),
	loadImages({
		options: {
			limit: 15000,
			name: "[name].[hash].[ext]"
		}
	}),
	attachRevision(),
	setFreeVariable(
		"process.env.NODE_ENV",
		"production"
	)
]);

module.exports = merge(commonConfig, productionConfig);
