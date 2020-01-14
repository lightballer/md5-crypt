const { encrypt, decrypt } = require('../lib/crypt');

//Wrap
const wrapper = (before, after, fn) => input => after(fn(before(input)));

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

const wrapped = wrapper(before, after, repeat);


//Tests
const test1 = wrapped('123');
console.log(test1);

const test2 = wrapped('abcd');
console.log(test2);



