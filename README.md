# AES Crypt

## Descrição

O **AES Crypt** é um projeto simples para gerar uma chave AES, criptografar dados e descriptografar dados utilizando JavaScript. Ele contém três scripts principais para cada uma dessas funcionalidades.

## Estrutura do Projeto
```shell
├───📁 src/
│   ├───📄 decrypt_data.js
│   ├───📄 encrypt_data.js
│   └───📄 generate_aes_key.js
└───📄 package.json
```

### Arquivos

- **`src/decrypt_data.js`**: Script para descriptografar dados usando a chave AES.
- **`src/encrypt_data.js`**: Script para criptografar dados usando a chave AES.
- **`src/generate_aes_key.js`**: Script para gerar uma chave AES.

## Instalação

1. Clone o repositório para o seu ambiente local:
```shell
git clone git@github.com:ricksonthompson/aes-crypt.git
cd aes-crypt
```
## Uso

### Gerar uma Chave AES

Para gerar uma chave AES, execute o seguinte comando:
```shell
npm run generate:key
```
Isso irá gerar e exibir uma chave AES que pode ser usada para criptografar e descriptografar dados.

### Criptografar Dados

Para criptografar dados, utilize o comando:
```shell
npm run encrypt:data
```
Certifique-se de especificar os dados e a chave AES corretamente dentro do script `encrypt_data.js`.

### Descriptografar Dados

Para descriptografar dados, utilize o comando:
```shell
npm run decrypt:data
```
Certifique-se de especificar os dados criptografados e a chave AES corretamente dentro do script `decrypt_data.js`.

## Autor

Rickson Thompson

## Licença

Este projeto está licenciado sob a licença ISC. Consulte o arquivo LICENSE para obter mais informações.