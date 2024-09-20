const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key';

const users = [{ id: 1, username: 'test', password: 'password' }];

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Logged in successfully' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

exports.checkLogin = (req, res) => {
  res.json({ loggedIn: true, username: req.user.username });
};
