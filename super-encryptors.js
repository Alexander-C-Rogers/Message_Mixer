// Import the encryptors functions here.
const { caesarCipher, symbolCipher, reverseCipher } = require('./encryptors.js');

const encodeMessage = (str) => {
    // Use the encryptor functions here.
    return reverseCipher(symbolCipher(caesarCipher(str, 6)));
}

const decodeMessage = (str) => {
    // Use the encryptor functions here.
    return caesarCipher(symbolCipher(reverseCipher(str)), -6);
}