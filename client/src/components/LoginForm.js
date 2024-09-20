// インストールするモジュール
// npm install express jsonwebtoken cookie-parser cors

const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// 仮のユーザーデータ
const users = [{ id: 1, username: 'test', password: 'password' }];

// JWT シークレットキー
const JWT_SECRET = 'your_jwt_secret_key';

// ログインエンドポイント
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // JWT トークンを生成
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Logged in successfully' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// 認証チェック用のミドルウェア
const authenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });

    req.user = decoded;
    next();
  });
};

// ログイン状態を確認するエンドポイント
app.get('/check-login', authenticate, (req, res) => {
  res.json({ loggedIn: true, username: req.user.username });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
