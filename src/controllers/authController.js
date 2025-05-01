const { registerUser, loginUser } = require('../services/authService');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const result = await registerUser(name, email, password);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginUser(email, password);
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({ message: 'Login bem-sucedido!', token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const protectedRoute = (req, res) => {
  res.json({ message: 'Acesso à rota protegida concedido!', user: req.user });
};

module.exports = {
  register,
  login,
  protectedRoute
};
