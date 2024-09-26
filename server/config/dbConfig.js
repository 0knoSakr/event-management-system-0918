const mysql = require("mysql2");
const dbConfig = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "customer_db",
});
dbConfig.connect((err) => {
  if (err) {
    console.error("データベース接続エラー", err.message);
  } else {
    console.log("データベースに接続しました");
  }
});

module.exports = dbConfig;
