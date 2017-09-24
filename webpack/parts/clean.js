const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = (path) => ({
	plugins: [
		new CleanWebpackPlugin([path], {
			root: process.cwd()
		})
	]
});
