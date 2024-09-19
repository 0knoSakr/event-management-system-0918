import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1>ログインページ</h1>
      <form className="textBox">
        <div>
          <label htmlFor="userName">ユーザー名</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input type="password" />
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default LoginPage;
