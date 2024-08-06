const crypto = require('node:crypto');

const key = crypto.randomBytes(24).toString('hex');

console.log('Chave AES de 192 bits:', key);
