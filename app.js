var md5 = require('md5');
const readline = require('readline');
var ReverseMd5 = require('reverse-md5');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var reverseMd5 = ReverseMd5({
	lettersUpper: false,
	lettersLower: true,
	numbers: true,
	special: false,
	whitespace: true,
	maxLen: 12
});

rl.question(
    `Please, choose mode
1 - Encrypt, 2 - Decrypt
Your mode: `, (chooseMode) => {
    if (chooseMode == '1') {
        console.log('You choosen Encrypt mode');
        rl.question(`Enter your message to encrypt: `, (encryptMessage) => {
            console.log('Your encrypted message: ', md5(encryptMessage));
            rl.close();
        });
    } else if (chooseMode == '2') {
        console.log('You choosen Decrypt mode');
        rl.question(`Enter message to decrypt: `, (decryptMessage) =>{
            console.log('Your message decrypted: ', reverseMd5(decryptMessage).str);
            rl.close();
        });
    } else {
        console.log('Incorrect input');
        rl.close();
    }
});