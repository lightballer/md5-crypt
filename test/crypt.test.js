const { encrypt, decrypt } = require('../lib/crypt');

const test = (before, after, fn) => input => after(fn(before(input)));

const before = data => {
    console.time('Compilation time');
    return data;
};

const after = data => {
    console.timeEnd('Compilation time');
    return data;
};

const count = 10000000;  //can change on let and determinate with own test
const repeat = input => encrypt(input.repeat(count));

const wrapped = test(before, after, repeat);


// Tests
console.log(wrapped('123'));
console.log(wrapped('abcd'));

