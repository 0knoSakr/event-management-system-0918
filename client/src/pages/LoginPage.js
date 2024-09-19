import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h1>ログインページ</h1>
      <form>
        <label htmlFor="userName">ユーザー名</label>
        <input type="text" />
        <label htmlFor="password">パスワード</label>
        <input type="password" />
        <button type="submit">ログイン</button>
      </form>
    </div>
  )
}

export default LoginPage;
