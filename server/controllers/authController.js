// 必要なモジュールをインポート
const jwt = require('jsonwebtoken'); // JWTを生成および検証するためのライブラリ
const bcrypt = require('bcrypt'); // パスワードをハッシュ化および比較するためのライブラリ
const userModel = require('../models/userModel'); // ユーザーに関連するデータベース操作を行うモデル

// サインアップ機能の実装
const signup = (req, res) => {
  // リクエストからユーザー名、メールアドレス、パスワードを取得
  const { username, email, password } = req.body;

  // ユーザーを作成するためにuserModelのcreateUserメソッドを呼び出し
  userModel.createUser(username, email, password, (err, results) => {
    if (err) {
      // エラーが発生した場合、500エラーを返す
      res.status(500).json({ error: 'サインアップ中にエラーが発生しました' });
    } else {
      // 成功した場合、201ステータスと成功メッセージを返す
      res.status(201).json({ message: 'ユーザーが作成されました' });
    }
  });
};

// ログイン機能の実装
const login = (req, res) => {
  // リクエストからユーザー名とパスワードを取得
  const { username, password } = req.body;

  // ユーザー名を基にユーザー情報を取得するためにuserModelのfindUserByUsernameメソッドを呼び出し
  userModel.findUserByUsername(username, (err, user) => {
    if (err || !user) {
      // ユーザーが見つからないかエラーが発生した場合、401エラーを返す
      res.status(401).json({ error: '無効なユーザー名またはパスワード' });
    } else {
      // パスワードを比較するためにbcryptのcompareメソッドを使用
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          // パスワードが一致する場合、JWTを生成
          const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h', // トークンの有効期限を1時間に設定
          });
          // トークンと成功メッセージを返す
          res.json({ message: 'ログイン成功', token });
        } else {
          // パスワードが一致しない場合、401エラーを返す
          res.status(401).json({ error: '無効なユーザー名またはパスワード' });
        }
      });
    }
  });
};

// モジュールとしてエクスポート
module.exports = {
  signup,
  login,
};
