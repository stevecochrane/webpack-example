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
const paths              = require("./parts/paths");

const productionConfig = merge([
	{
		performance: {
			hints: "warning",
			maxEntrypointSize: 100000,
			maxAssetSize: 450000
		}
	},
	clean(paths.build),
	extractBundles([
		{
			name: "vendor",
			minChunks: ({ resource }) => (
				resource &&
				resource.indexOf("node_modules") >= 0 &&
				resource.match(/\.js$/)
			)
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
			name: "[name].[ext]"
		}
	}),
	attachRevision()
]);

module.exports = merge(commonConfig, productionConfig);
