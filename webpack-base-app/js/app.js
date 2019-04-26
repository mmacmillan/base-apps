import lib1 from './lib1'
import lib2 from './lib2'

let X = { a: 'a', b: 'b' };
let {a, b} = X;

console.log(a, b);

lib1.someFunc1(() => {
    return 'hello 1';
});

lib2.someFunc2(() => {
    return 'hello 2';
});
