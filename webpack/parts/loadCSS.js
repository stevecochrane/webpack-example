const autoprefix = require("./autoprefix");

module.exports = ({ include, exclude } = {}) => ({
	module: {
		rules: [
			{
				test: /\.css$/,
				include,
				exclude,
				use: [
					"style-loader",
					"css-loader",
					autoprefix()
				]
			}
		]
	}
});
