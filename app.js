var md5 = require('md5');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(
    `Please, choose mode
1 - Encrypt, 2 - Decrypt
Your mode: `, (chooseMode) => {
    if (chooseMode == '1') {
        console.log('You choosen Encrypt mode');
        encrypt();
    } else if (chooseMode == '2') {
        console.log('You choosen Decrypt mode');
        decrypt();
    } else {
        console.log('Incorrect input');
    }

    rl.close();
});

function encrypt() {
    rl.question('Enter your message to encrypt: ', (encryptMessage) => {
        console.log('Your encrypted message: ', md5(encryptMessage));
    });
}
function decrypt(){
    rl.question('Enter message to decrypt: ', (decryptMessage) =>{
        console.log('Your message decrypted: ', decrypt(decryptMessage));
    });
}