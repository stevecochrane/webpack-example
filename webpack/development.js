const merge = require("webpack-merge");

const commonConfig       = require("./common");
const devServer          = require("./parts/devServer");
const generateSourceMaps = require("./parts/generateSourceMaps");
const loadCSS            = require("./parts/loadCSS");
const loadImages         = require("./parts/loadImages");

const developmentConfig = merge([
	{
		output: {
			devtoolModuleFilenameTemplate: "webpack:///[absolute-resource-path]"
		}
	},
	generateSourceMaps({
		type: "cheap-module-eval-source-map"
	}),
	devServer({
		//	Customize host/port here if needed
		host: process.env.HOST,
		port: process.env.PORT
	}),
	loadCSS(),
	loadImages()
]);

module.exports = merge(commonConfig, developmentConfig);
