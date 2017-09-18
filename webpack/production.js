const merge = require("webpack-merge");

const autoprefix   = require("./parts/autoprefix");
const commonConfig = require("./common");
const extractCSS   = require("./parts/extractCSS");

const productionConfig = merge([
	extractCSS({
		use: [
			"css-loader",
			autoprefix()
		]
	})
]);

module.exports = merge(commonConfig, productionConfig);
