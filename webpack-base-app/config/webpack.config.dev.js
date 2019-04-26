const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.common.js');

module.exports = Merge(CommonConfig, {
    output: {
        path: path.resolve(__dirname, '../dist/dev'),
        filename: '[name].js'
    },
    optimization: {
        minimize: false
    }
});
