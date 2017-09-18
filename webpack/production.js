const merge = require("webpack-merge");

const commonConfig = require("./common");
const extractCSS   = require("./parts/extractCSS");

const productionConfig = merge([
	extractCSS({
		use: "css-loader"
	})
]);

module.exports = merge(commonConfig, productionConfig);
