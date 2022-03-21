const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),
    webpack = require('webpack'),
    webpackMiddleware = require('webpack-dev-middleware'),
    whrMiddleware = require('webpack-hot-middleware');

//** get the environment specific webpack config
const webpackConfig = require('./webpack.config.js')(process.env.ENV);

//** compile the webpack config
const compiler = webpack(webpackConfig);

//** setup express stack
const app = express();

//** add the webpack dev server middleware
app.use(webpackMiddleware(compiler, { 
    noInfo: true, 
    publicPath: webpackConfig.output.publicPath  
}));

//** add the webpack hot-module-reload middleware
app.use(whrMiddleware(compiler));

//** add some common middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist/dev/')));

//** start the web server
let port;
app.listen(port = process.env.PORT || 9601);
console.log(`listening on ${port}`);
