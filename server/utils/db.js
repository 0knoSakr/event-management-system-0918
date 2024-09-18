const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'customer_db',
})

connection.connect((err) => {
  if (err) {
    console.error('データベース接続エラー', err.message);
  } else {
    console.log('データベースに接続しました');
  }
})

module.exports = connection;
