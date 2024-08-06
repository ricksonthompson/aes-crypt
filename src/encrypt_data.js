const crypto = require("node:crypto");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const algorithm = "aes-192-cbc";

function encrypt(text, key) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return `${iv.toString("hex")}:${encrypted}`;
}

rl.question(
  "Digite a chave AES de 192 bits (48 caracteres hexadecimais): ",
  (keyHex) => {
    const key = Buffer.from(keyHex, "hex");

    if (key.length !== 24) {
      console.error("A chave deve ter 192 bits (48 caracteres hexadecimais).");
      rl.close();
      return;
    }

    rl.question("Digite os dados a serem criptografados: ", (plainText) => {
      const encryptedText = encrypt(plainText, key);
      console.log("Texto Criptografado:", encryptedText);
      rl.close();
    });
  }
);
