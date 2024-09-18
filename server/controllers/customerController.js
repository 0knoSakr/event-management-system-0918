// /server/controllers/customerController.js
const db = require('../utils/db'); // データベース接続モジュールをインポート

// 顧客一覧を取得する関数
exports.getCustomers = (req, res) => {
  db.query('SELECT * FROM customers', (err, results) => {
    if (err) return res.status(500).json({ error: err.message }); // エラー時のレスポンス
    res.json(results); // 取得した顧客データをレスポンスとして返す
  });
};

// 特定の顧客情報を取得する関数
exports.getCustomerById = (req, res) => {
  const { id } = req.params; // URLパラメータから顧客IDを取得
  db.query('SELECT * FROM customers WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message }); // エラー時のレスポンス
    res.json(results[0]); // 取得した顧客データの最初の結果をレスポンスとして返す
  });
};

// 新規顧客を追加する関数
exports.addCustomer = (req, res) => {
  const { companyName, contactPerson, email, phone } = req.body; // リクエストボディから顧客情報を取得
  db.query(
    'INSERT INTO customers (companyName, contactPerson, email, phone) VALUES (?, ?, ?, ?)', // 顧客情報を挿入するSQLクエリ
    [companyName, contactPerson, email, phone], // SQLクエリに挿入するデータ
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message }); // エラー時のレスポンス
      res.status(201).json({ message: '顧客が追加されました' }); // 成功時のレスポンス
    }
  );
};

// 顧客情報を更新する関数
exports.updateCustomer = (req, res) => {
  const { id } = req.params; // URLパラメータから顧客IDを取得
  const { companyName, contactPerson, email, phone } = req.body; // リクエストボディから更新する顧客情報を取得
  db.query(
    'UPDATE customers SET companyName = ?, contactPerson = ?, email = ?, phone = ? WHERE id = ?', // 顧客情報を更新するSQLクエリ
    [companyName, contactPerson, email, phone, id], // SQLクエリに挿入するデータ
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message }); // エラー時のレスポンス
      res.json({ message: '顧客情報が更新されました' }); // 成功時のレスポンス
    }
  );
};
