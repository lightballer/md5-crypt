const md5 = require('md5');
const ReverseMd5 = require('reverse-md5');

const reverseMd5 = ReverseMd5({
  lettersUpper: false,
  lettersLower: true,
  numbers: true,
  special: false,
  whitespace: true,
  maxLen: 12
});

const mEncrypt = fn => {
  const cache = {};
  return data => {
    const value = cache[data];
    if (value) return value;
    const result = fn(data);
    cache[data] = result;
    return result;
  };
};

const encrypt = mEncrypt(md5);
const decrypt = data => reverseMd5(data).str;

module.exports = { encrypt, decrypt };
