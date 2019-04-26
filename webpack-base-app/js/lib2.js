module.exports = {
    someFunc2(cb) {
        console.log('some func 2');
        cb && cb();
    }
}
