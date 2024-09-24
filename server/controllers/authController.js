const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/dbConfig');

exports.signup = (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, hashedPassword], (err, result) => {
    if (err) return res.status(500).send('Error registering user.');
    res.status(201).send('User registered successfully');
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) return res.status(500).send('Error on the server.');
    if (results.length === 0) return res.status(404).send('User not found.');

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) return res.status(401).send('Invalid password.');

    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: 86400 });
    res.status(200).send({ auth: true, token });
  });
};
