const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    //** use none for no webpack optimizations for the env
    mode: 'none',

    optimization: {
        minimize: false
    },


    //** entry point; string for a main.js, object for individual bundles by keynae
    entry: {
        app: ['webpack-hot-middleware/client', './src/pages/app.js']
    },

    //** where app is built to
    output: {
        path: path.resolve(__dirname, '../dist/dev'),
        filename: '[name].js' //[name] is the filename, [hash] is a unique name
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
            },

            //** make sure any fonts we encounter end up in /fonts
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: './fonts/[name].[ext]'
                    }
                }]
            },

            //** make sure any static images we encounter end up in /g
            {
                test: /\.(png|jpg|jpeg|gif)/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: './g/[name].[ext]'
                    }
                }]
            }
        ]
    },


    //** these run against the whole codebase
    plugins: [

        //** injects all webpack bundles (including hashed names), into index.html; can minify and other things too
        //** https://github.com/jantimon/html-webpack-plugin#options
        new HtmlPlugin({
            template: './src/pages/app.html',
            filename: 'index.html',
            chunks: ['app'],
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    //** dev server settings
    devServer: {
        contentBase: path.join(__dirname, 'dist', 'dev'),
        port: 9010,
        open: true, //** open the browser when we start
        overlay: false, //** overlay any compile warnings in the browser window
        hot: true //** enable HMR
    }
}
