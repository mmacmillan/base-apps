module.exports = {
    someFunc1(cb) {
        console.log('some func 1');
        cb && cb();
    }
}
