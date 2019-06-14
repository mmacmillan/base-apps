const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    //** use none for no webpack optimizations for the env
    mode: 'production',

    optimization: {
        minimize: true
    },

    //** entry point; string for a main.js, object for individual bundles by keynae
    entry: {
        app: './src/app.js'
    },

    output: {
        path: path.resolve(__dirname, '../dist/prod'),
        filename: '[name]-[contenthash].js'
    },

    //** these run against each file
    module: {
        rules: [

            //** transpile our ES5/6 add JSX support for browsers, using babel
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            },

            //** this is for bundling the css with the javascript; it will minifiy, etc.  it also allows you to include it via "import css from './css/global.css' (ex)
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },


    //** these run against the whole codebase
    plugins: [

        //** injects all webpack bundles (including hashed names), into index.html; can minify and other things too
        //** https://github.com/jantimon/html-webpack-plugin#options
        new HtmlPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ],

}
