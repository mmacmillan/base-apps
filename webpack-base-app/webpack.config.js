module.exports = (env) => {
    return require(`./config/webpack.config.${env||'dev'}.js`);
};
