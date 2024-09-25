// 必要なモジュールのインポート
const db = require('../config/dbConfig');  // データベース接続を設定するためのカスタム設定ファイル
const bcrypt = require('bcrypt');  // パスワードのハッシュ化と比較を行うためのライブラリ

// ユーザー作成機能の実装
const createUser = (username, email, password, callback) => {
  // パスワードをハッシュ化
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      // ハッシュ化中にエラーが発生した場合、コールバック関数にエラーを渡す
      callback(err);
    } else {
      // ハッシュ化が成功した場合、ユーザー情報をデータベースに挿入
      db.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, hash],  // プレースホルダを使用してクエリに変数を安全に挿入
        (err, results) => {
          if (err) {
            // データベース操作中にエラーが発生した場合、コールバック関数にエラーを渡す
            callback(err);
          } else {
            // データベース操作が成功した場合、コールバック関数に結果を渡す
            callback(null, results);
          }
        }
      );
    }
  });
};

// ユーザー名でユーザーを検索する機能の実装
const findUserByUsername = (username, callback) => {
  // データベースからユーザー名に基づいてユーザー情報を取得
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      // データベース操作中にエラーが発生した場合、コールバック関数にエラーを渡す
      callback(err);
    } else {
      // ユーザーが見つかった場合、コールバック関数にユーザー情報を渡す
      callback(null, results[0]);
    }
  });
};

// モジュールとしてエクスポート
module.exports = {
  createUser,
  findUserByUsername,
};
