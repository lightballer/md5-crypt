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

const encrypt = data => md5(data);
const decrypt = data => reverseMd5(data).str;

module.exports = { encrypt, decrypt };
