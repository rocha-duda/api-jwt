const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // carrega as variáveis de ambiente

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);  // Certifique-se de usar MONGODB_URI
    console.log('MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1); // encerra a aplicação se não conectar
  }
};

module.exports = connectDatabase;
