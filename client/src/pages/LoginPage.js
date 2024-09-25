import React, { useState, useEffect } from "react";
import api from "../services/api";
import '../App.css';

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ name: "", password: "" });
  const [message, setMessage] = useState("");

  // 名前の入力変更を処理
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // パスワードの入力変更を処理
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // APIリクエスト関数
  const mockApiRequest = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (data.name === "testuser" && data.password === "Password123") {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  // フォームの送信時にバリデーションを実施
  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    let errorObj = { name: "", password: "" };

    // 名前が空かどうかのチェック
    if (name.trim() === "") {
      errorObj.name = "名前を入力してください";
      valid = false;
    }

    // パスワードのフォーマットをチェック
    if (password.length < 6) {
      errorObj.password = "パスワードは6文字以上である必要があります";
      valid = false;
    } else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
      errorObj.password = "パスワードは英字と数字を含む必要があります";
      valid = false;
    }

    if (valid) {
      // 仮のAPIリクエストを送信
      const response = await mockApiRequest({ name, password });
      if (response.success) {
        setMessage("ログイン成功");
      } else {
        setMessage("ログイン失敗");
      }
    } else {
      setError(errorObj);
      setMessage(""); // エラーメッセージが出る場合、ログインメッセージをクリア
    }

    
  };

  return (
    <div className="App">
      <h1>ログインページ</h1>
      <form className="textBox" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">ユーザー名</label>
          <input type="text" value={name} onChange={handleNameChange} />
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        </div>
        <button type="submit">ログイン</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;
