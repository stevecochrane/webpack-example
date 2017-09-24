const GitRevisionPlugin = require("git-revision-webpack-plugin");
const webpack           = require("webpack");

module.exports = () => ({
	plugins: [
		new webpack.BannerPlugin({
			banner: new GitRevisionPlugin().version()
		})
	]
});
