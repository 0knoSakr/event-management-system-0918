import React, { useState } from 'react';
import '../App.css';

const SignupPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({ userName: "", email: "", password: "", confirmPassword: "" });

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handlePasswordConfirmation = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let errorObj = { userName: "", email: "", password: "", confirmPassword: "" };

    if (userName.trim() === "") {
      errorObj.userName = "名前を入力して下さい";
      valid = false;
    }

    if (/^[a-zA-Z0-9.!#$%&'*+/?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    } else {
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
      alert("フォームが送信されました");
      // フォーム送信後に状態をリセット
      setUserName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError({ userName: "", email: "", password: "", confirmPassword: "" });
    } else {
      setError(errorObj);
    }
  }

  return (
    <div className="App">
      <h1>新規登録</h1>
      <form className="textBox" onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="ユーザー名" value={userName} onChange={handleNameChange} />
          {error.userName && <p style={{ color: "red" }}>{error.userName}</p>}
        </div>
        <div>
          <input type="text" placeholder="e-mail" value={email} onChange={handleEmailChange} />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>
        <div>
          <input type="password" placeholder="パスワード" value={password} onChange={handlePasswordChange} />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        </div>
        <div>
          <input type="password" placeholder="パスワード(確認)" value={confirmPassword} onChange={handlePasswordConfirmation} />
          {error.confirmPassword && <p style={{ color: "red" }}>{error.confirmPassword}</p>}
        </div>
        <div>
          <button type="submit">新規登録</button>
        </div>
      </form>
    </div>
  )
}

export default SignupPage;
