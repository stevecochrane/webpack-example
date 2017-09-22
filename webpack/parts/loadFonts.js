module.exports = ({ include, exclude, options } = {}) => ({
	module: {
		rules: [
			test: /\.(woff|woff2)$/,
			include,
			exclude,
			use: {
				loader: "file-loader",
				options
			}
		]
	}
});
