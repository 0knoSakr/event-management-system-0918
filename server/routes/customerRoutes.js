// /server/routes/customerRoutes.js
const express = require('express'); // Expressフレームワークをインポート
const router = express.Router(); // Expressのルーターモジュールを使用してルートを定義
const customerController = require('../controllers/customerController'); // 顧客関連の処理を行うコントローラをインポート

// 顧客一覧を取得するルート
router.get('/', customerController.getCustomers);

// 特定の顧客情報をIDで取得するルート
router.get('/:id', customerController.getCustomerById);

// 新規顧客を追加するルート
router.post('/', customerController.addCustomer);

// 顧客情報をIDで更新するルート
router.put('/:id', customerController.updateCustomer);

module.exports = router; // 定義したルートをエクスポートして他のモジュールで使用可能にする
