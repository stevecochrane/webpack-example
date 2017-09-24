module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	extends: "eslint:recommended",
	parser: "babel-eslint",
	parserOptions: {
		sourceType: "module",
		allowImportExportEverywhere: true
	},
	rules: {
		quotes: ["error", "double"],
		semi: ["error", "always"]
	}
};
