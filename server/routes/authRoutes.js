const express = require('express');
const { login, checkLogin } = require('../controllers/authController');
const authenticate = require('../middleware/authMiddleware'); // ミドルウェアを分けた場合

const router = express.Router();

router.post('/login', login);
router.get('/check-login', authenticate, checkLogin);

module.exports = router;
