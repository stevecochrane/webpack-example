const merge = require("webpack-merge");

const commonConfig = require("./common");
const devServer    = require("./parts/devServer");
const loadCSS      = require("./parts/loadCSS");
const loadImages   = require("./parts/loadImages");

const developmentConfig = merge([
	devServer({
		//	Customize host/port here if needed
		host: process.env.HOST,
		port: process.env.PORT
	}),
	loadCSS(),
	loadImages()
]);

module.exports = merge(commonConfig, developmentConfig);
