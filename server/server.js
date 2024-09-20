const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); // cookie-parserを追加
const customerRoutes = require('./routes/customerRoutes.js');
const authRoutes = require('./routes/authRoutes'); // 認証用のルートをインポート
const jwt = require('jsonwebtoken'); // JWT関連のモジュールもインポート

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser()); // cookie-parserを追加

// JWT シークレットキー
const JWT_SECRET = 'your_jwt_secret_key'; // 適切な場所に置きます

// 仮のユーザーデータ
const users = [{ id: 1, username: 'test', password: 'password' }];

// ログインエンドポイント
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
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

// 既存の顧客ルートを追加
app.use('/api/customers', customerRoutes);
app.use('/auth', authRoutes); // 認証用のルートを追加

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
