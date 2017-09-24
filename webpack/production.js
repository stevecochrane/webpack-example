const merge   = require("webpack-merge");
const webpack = require("webpack");

const autoprefix         = require("./parts/autoprefix");
const commonConfig       = require("./common");
const extractBundles     = require("./parts/extractBundles");
const extractCSS         = require("./parts/extractCSS");
const generateSourceMaps = require("./parts/generateSourceMaps");
const loadImages         = require("./parts/loadImages");

const productionConfig = merge([
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
	})
]);

module.exports = merge(commonConfig, productionConfig);
