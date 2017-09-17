const merge = require("webpack-merge");

const commonConfig = require("./common");

const productionConfig = merge([]);

module.exports = merge(commonConfig, productionConfig);
