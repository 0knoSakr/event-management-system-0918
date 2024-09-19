import React, { useState } from "react";
import '../App.css';

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ name: "", password: "" });

  // 名前の入力変更を処理
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // passwoedの入力変更を処理
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // フォームの送信時にバリデーションを実施
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let errorObj = { name: "", passwoed: "" };

    // 名前が空かどうかのチェック
    if (name.trim() === "") {
      errorObj.name = "名前を入力してください";
      valid = false;
    }

    // passwordのフォーマットをチェック
    if (password.length < 6) {
      errorObj.password = "パスワードは6文字以上である必要があります";
      valid = false;
    }else if(!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
      errorObj.password = "パスワードは英字と数字を含む必要があります";
      valid = false;
    }

    if (valid) {
      // バリデーション成功時の処理（データ送信など）
      alert("フォームが送信されました");
    } else {
      setError(errorObj);
    }
  };

  return (
    <div className="App">
      <h1>ログインページ</h1>
      <form className="textBox" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">ユーザー名</label>
          <input type="text" value={name} onChange={handleNameChange} />
          {error.name && <p style={{ color: "red" }}>{ error.name }</p> }
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input type="password" valuue={password} onChange={handlePasswordChange} />
          {error.password && <p style={{ color: "red" }}>{ error.password }</p>}
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default LoginPage;
