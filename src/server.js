const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const connectDatabase = require('./database/database');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middlewares
app.use(express.json());

// Rotas
app.use('/api', authRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Tratamento de erros global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

// Conexão com o banco e inicialização do servidor
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Falha ao iniciar o servidor:', error);
    process.exit(1);
  }
};

startServer();