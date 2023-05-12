const ENV = process.env.ENV;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const path = require('path');

//** setup express stack
const app = express();

if(ENV == 'dev') {

    //** setup the webpack stack for HMR
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config.js')(process.env.ENV);
    const webpackMiddleware = require('webpack-dev-middleware');
    const whrMiddleware = require('webpack-hot-middleware');

    //** compile the webpack config
    const compiler = webpack(webpackConfig);

    //** add the webpack dev server middleware
    app.use(webpackMiddleware(compiler, { 
        noInfo: true, 
        publicPath: webpackConfig.output.publicPath  
    }));

    //** add the webpack hot-module-reload middleware
    app.use(whrMiddleware(compiler));

}

//** add some common middleware
app.use((req, res, next) => { req.path == '/favicon.ico' ? res.end() : next() })
app.use(compression());
app.use(cors({ credentials: true })); //** allows cookies to be passed via cors authorized hosts
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist/dev/')));

//** start the web server
let port;
app.listen(port = process.env.PORT || 9601);
console.log(`listening on ${port}`);

