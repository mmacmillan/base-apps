module.exports = (env) => {
    //** we load a different config based on the environment; when you return a function, webpack passes in the env variable
    return require(`./config/webpack.config.${env||'dev'}.js`);
};
