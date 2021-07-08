// Import the functions from encryptors.js here.
const encryptors = require('./encryptors.js');

// Encryption Functions
/////////////////////////////////////////////
const { caesarCipher, symbolCipher, reverseCipher } = encryptors;

// User Input / Output Logic
/////////////////////////////////////////////

const encryptionMethod = getEncryptionMethod();
process.stdin.on('data', (userInput) => {
  displayEncryptedMessage(encryptionMethod, userInput);
});