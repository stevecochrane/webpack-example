module.exports = ({ include, exclude }) => ({
	module: {
		rules: [
			{
				test: /\.js$/,
				include,
				exclude,
				loader: "babel-loader",
				options: {
					//	Enable caching for improved performance during development.
					//	It uses default OS directory by default. If you need
					//	something more custom, pass a path to it.
					//	I.e., { cacheDirectory: "<path>" }
					cacheDirectory: true
				}
			}
		]
	}
});
