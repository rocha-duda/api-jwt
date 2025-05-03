# 🛡️ API de Autenticação com JWT

Este projeto é uma API backend desenvolvida com Node.js, Express e MongoDB, com autenticação de usuários via token JWT. Foi criada como parte de uma atividade avaliativa, seguindo a arquitetura de camadas.

## 📁 Estrutura do Projeto

src/
├── controllers/
├── database/
├── middlewares/
├── models/
├── routes/
├── services/
├── server.js
.env


### 🔓 Rotas públicas

- `POST /register`: Cria um novo usuário (nome, email e senha).
- `POST /login`: Autentica o usuário e retorna um token JWT.

### 🔒 Rotas protegidas (necessário token válido)

- `GET /protected`: Retorna mensagem de acesso autorizado.

## 🔧 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (com Mongoose)
- JWT (jsonwebtoken)
- Bcrypt
- dotenv

  ## Video utilizando
  https://youtu.be/_tPo-9f7FiI
  
