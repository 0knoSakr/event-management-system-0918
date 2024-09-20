import React, { useState } from 'react';
import '../App.css';

const SignupPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({ userName: "", email: "", password: "", confirmPassword: "" });
  const [message, setMessage] = useState("");

  // 入力変更を処理
  const handleNameChange = (e) => setUserName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordConfirmation = (e) => setConfirmPassword(e.target.value);

  // 仮のAPIリクエスト関数
  const mockApiRequest = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (data.email && data.password) {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  // フォーム送信時の処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    let errorObj = { userName: "", email: "", password: "", confirmPassword: "" };

    // バリデーション処理
    if (userName.trim() === "") {
      errorObj.userName = "名前を入力して下さい";
      valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email)) {
      errorObj.email = "メールアドレスが間違っています";
      valid = false;
    }
    
    if (password.length < 6) {
      errorObj.password = "パスワードは6文字以上である必要があります";
      valid = false;
    } else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
      errorObj.password = "パスワードはアルファベットと数字を含む必要があります";
      valid = false;
    }

    if (password !== confirmPassword) {
      errorObj.confirmPassword = "パスワードが一致しません";
      valid = false;
    } else if (confirmPassword === "") {
      errorObj.confirmPassword = "入力してください";
      valid = false;
    }

    if (valid) {
      // 仮のAPIリクエストを送信
      const response = await mockApiRequest({ email, password });
      if (response.success) {
        setMessage("サインアップ成功");
        // フォーム送信後に状態をリセット
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError({ userName: "", email: "", password: "", confirmPassword: "" });
      } else {
        setMessage("サインアップ失敗");
      }
    } else {
      setError(errorObj);
      setMessage(""); // エラーメッセージがある場合、サインアップメッセージをクリア
    }
  };

  return (
    <div className="App">
      <h1>新規登録</h1>
      <form className="textBox" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="ユーザー名"
            value={userName}
            onChange={handleNameChange}
          />
          {error.userName && <p style={{ color: "red" }}>{error.userName}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="e-mail"
            value={email}
            onChange={handleEmailChange}
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={handlePasswordChange}
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="パスワード(確認)"
            value={confirmPassword}
            onChange={handlePasswordConfirmation}
          />
          {error.confirmPassword && <p style={{ color: "red" }}>{error.confirmPassword}</p>}
        </div>
        <div>
          <button type="submit">新規登録</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignupPage;
