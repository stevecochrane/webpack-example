const merge = require("webpack-merge");

const commonConfig = require("./common");
const devServer    = require("./parts/devServer");

const developmentConfig = merge([
	devServer({
		//	Customize host/port here if needed
		host: process.env.HOST,
		port: process.env.PORT
	})
]);

module.exports = merge(commonConfig, developmentConfig);
