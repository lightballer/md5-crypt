const readline = require('readline');
const { encrypt, decrypt } = require('./lib/crypt');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const commandLineKeys = ['--enc', '--dec'];

const encryptUserMessage = message =>
  console.log('Your encrypted message: ', encrypt(message));
const decryptUserMessage = message =>
  console.log('Your message decrypted: ', decrypt(message));

const chooseModeCallback = mode => {
  switch (mode) {
  case '1':
    console.log('You choosen Encrypt mode');
    rl.question('Enter your message to encrypt: ', encryptUserMessage);
    break;
  case '2':
    console.log('You choosen Decrypt mode');
    rl.question('Enter message to decrypt: ', decryptUserMessage);
    break;
  default:
    console.log('Incorrect input');
  }
};


// Entry Point //

((key, data) => {
  if (key && data) {
    if (commandLineKeys.includes(key)) {
      switch (key) {
      case '--enc':
        console.log(encrypt(data));
        break;
      case '--dec':
        console.log(decrypt(data));
        break;
      }
      rl.close();
    } else {
      console.log('Unknown command!');
    }
  } else {
    const entryMessage = 'Please, choose mode\n' +
        '1 - Encrypt, 2 - Decrypt\nYour mode: ';
    rl.question(entryMessage, chooseModeCallback);
  }
})(process.argv[2], process.argv[3]);
