const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production', 
    target: 'node', // node for node apps, web is default

    optimization: {
        minimize: true
    },

    entry: {
        app: './src/js/app.js'
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
            },

            //** make sure any fonts we encounter end up in /fonts
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: './fonts/[name].[ext]',
                    }
                }]
            },

            //** make sure any static images we encounter end up in /g
            {
                test: /\.(png|jpg|jpeg|gif)/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: './g/[name].[ext]',
                    }
                }]
            }

        ]
    },

     plugins: [
        // injects all webpack bundles (including hashed names), into index.html; can minify and other things too
        // https://github.com/jantimon/html-webpack-plugin#options
        new HtmlPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ]

 }

