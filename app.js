const readline = require('readline');
const md5 = require('md5');
const ReverseMd5 = require('reverse-md5');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const reverseMd5 = ReverseMd5({
    lettersUpper: false,
    lettersLower: true,
    numbers: true,
    special: false,
    whitespace: true,
    maxLen: 12
});

const encryptUserMessage = data => 
    console.log('Your encrypted message: ', md5(data));
const decryptUserMessage = data =>
    console.log('Your message decrypted: ', reverseMd5(data).str);

const chooseModeCallback = mode => {
    switch (mode) {
        case '1':
            console.log('You choosen Encrypt mode');
            rl.question(`Enter your message to encrypt: `, encryptUserMessage);
            break;
        case '2':
            console.log('You choosen Decrypt mode');
            rl.question(`Enter message to decrypt: `, decryptUserMessage);
            break;
        default:
            console.log('Incorrect input');
    }
}

rl.question('Please, choose mode\n1 - Encrypt, 2 - Decrypt\nYour mode: ', chooseModeCallback);