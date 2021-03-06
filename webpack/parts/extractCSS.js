const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = ({ include, exclude, use }) => {
	//	Output extracted CSS to a file
	const plugin = new ExtractTextPlugin({
		filename: "[name].[contenthash].css"
	});

	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					include,
					exclude,
					use: plugin.extract({
						use,
						fallback: "style-loader"
					})
				}
			]
		},
		plugins: [ plugin ]
	};
};
