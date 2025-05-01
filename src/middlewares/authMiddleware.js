const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
  try {
    console.log('Headers recebidos:', req.headers); // 👈 Debug: verifique todos os headers

    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    console.log('Header Authorization:', authHeader); // 👈 Debug: verifique se o header existe

    if (!authHeader) {
      return res.status(401).json({ error: 'Token não fornecido' });
    }

    const token = authHeader.split(' ')[1];
    console.log('Token extraído:', token); // 👈 Debug: verifique o token após extração

    if (!token) {
      return res.status(401).json({ error: 'Formato de token inválido' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    console.error('Erro no middleware:', error.message); // 👈 Debug: log detalhado
    return res.status(401).json({ error: 'Token inválido ou expirado' });
  }
};

module.exports = authenticate;