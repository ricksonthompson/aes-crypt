const crypto = require('node:crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const algorithm = 'aes-192-cbc';

function decrypt(encryptedText, key) {
  const [ivHex, encrypted] = encryptedText.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

rl.question('Digite a chave AES de 192 bits (48 caracteres hexadecimais): ', (keyHex) => {
  const key = Buffer.from(keyHex, 'hex');

  if (key.length !== 24) {
    console.error('A chave deve ter 192 bits (48 caracteres hexadecimais).');
    rl.close();
    return;
  }

  rl.question('Digite os dados a serem decriptografados: ', (encryptedText) => {
    const decryptedText = decrypt(encryptedText, key);
    console.log('Texto Descriptografado:', decryptedText);
    rl.close();
  });
});
