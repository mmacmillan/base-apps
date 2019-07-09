const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),
    webpack = require('webpack'),
    webpackMiddleware = require('webpack-dev-middleware'),
    whrMiddleware = require('webpack-hot-middleware'),
    webpackConfig = require('./webpack.config.js')(process.env.ENV);

console.log('config: ', webpackConfig);

let compiler = webpack(webpackConfig);

//** setup express stack
const app = express();

app.use(webpackMiddleware(compiler, { 
    noInfo: true, 
    publicPath: webpackConfig.output.publicPath  
}));
app.use(whrMiddleware(compiler));

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist/dev/')));

//** start the web server
let port;
app.listen(port = process.env.PORT || 9601);
console.log(`listening on ${port}`);
