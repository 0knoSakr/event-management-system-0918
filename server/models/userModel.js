// models/userModel.js
const db = require('../config/dbConfig'); // MySQL接続の設定をインポート
const bcrypt = require('bcrypt');

const User = {
  // ユーザー作成
  create: async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
      db.query(query, [username, hashedPassword], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  },

  // ユーザー取得
  findByUsername: (username) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE username = ?';
      db.query(query, [username], (err, result) => {
        if (err) return reject(err);
        resolve(result[0]); // 1人のユーザーを取得
      });
    });
  },
};

module.exports = User;
