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

const commandLineKeys = ['--enc', '--dec'];

const encrypt = data => md5(data);
const decrypt = data => reverseMd5(data).str;

const encryptUserMessage = message => 
    console.log('Your encrypted message: ', encrypt(message));
const decryptUserMessage = message =>
    console.log('Your message decrypted: ', decrypt(message));

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


// Entry Point //

((key, data) => {
    if (key && data) {
        if (commandLineKeys.includes(key)) {
            switch(key) {
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
        rl.question('Please, choose mode\n1 - Encrypt, 2 - Decrypt\nYour mode: ', chooseModeCallback);
    }
})(process.argv[2], process.argv[3]);

