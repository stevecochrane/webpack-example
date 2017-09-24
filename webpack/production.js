const merge = require("webpack-merge");

const autoprefix         = require("./parts/autoprefix");
const commonConfig       = require("./common");
const extractCSS         = require("./parts/extractCSS");
const generateSourceMaps = require("./parts/generateSourceMaps");
const loadImages         = require("./parts/loadImages");

const productionConfig = merge([
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
