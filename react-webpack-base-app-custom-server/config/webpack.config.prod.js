const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none', // production, development, none; for internal optimizers
    target: 'node', // node for node apps, web is default

    entry: {
        app: './src/js/app.js'
    },

    plugins: [
        // injects all webpack bundles (including hashed names), into index.html; can minify and other things too
        // https://github.com/jantimon/html-webpack-plugin#options
        new HtmlPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ],

    module: {
        // pass all js through babel for ES5, 6, etc
        // https://babeljs.io/setup
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    
    output: {
        path: path.resolve(__dirname, '../dist/prod'),
        filename: '[name]-[contenthash].js'
    },

    optimization: {
        minimize: true
    }
}
