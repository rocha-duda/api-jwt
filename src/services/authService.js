const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Função de registro de usuário
const registerUser = async (name, email, password) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('E-mail já cadastrado');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword
  });

  await newUser.save();
  return { message: 'Usuário registrado com sucesso!' };
};

// Função de login de usuário
const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Senha incorreta');
  }

  return user;
};

module.exports = {
  registerUser,
  loginUser
};
