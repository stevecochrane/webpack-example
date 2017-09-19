module.exports = ({ include, exclude }) => ({
	module: {
		rules: [
			{
				test: /\.css$/,
				include,
				exclude,
				enforce: "pre",
				loader: "postcss-loader",
				options: {
					plugins: () => ([
						require("stylelint")()
					])
				}
			}
		]
	}
});
