const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    //** use none for no webpack optimizations for the env
    mode: 'development',

    optimization: {
        minimize: false
    },

    //** entry point; string for a main.js, object for individual bundles by keynae
    entry: {
        app: './src/app.js'
    },

    //** where app is built to
    output: {
        path: path.resolve(__dirname, '../dist/dev'),
        filename: '[name].js' //[name] is the filename, [hash] is a unique name
    },

    resolve: {
        //** this is required to fix the references to ReactDOM within the semantic-ui-react library
        alias: {
            'React': path.resolve(__dirname, '../node_modules/react'),
            'ReactDOM': path.resolve(__dirname, '../node_modules/react-dom')
        }
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

            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'

                    }
                }]
            },

            {
                test: /\.(png|jpg|jpeg|gif)/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'g/'

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
            template: './src/index.html',
            inject: 'body'
        })
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
