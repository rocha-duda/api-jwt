const express = require('express');
const router = express.Router();
const { register, login, protectedRoute } = require('../controllers/authController');
const authenticate = require('../middlewares/authMiddleware');


router.post('/register', register);
router.post('/login', login);
router.get('/protected', authenticate, protectedRoute);

module.exports = router;
