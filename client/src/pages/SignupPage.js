import React from 'react';

const SignupPage = () => {
  return (
    <div>
      <h1>新規登録</h1>
      <form className="textBox">
        <div>
          <input type="text"placeholder="ユーザー名"/>
        </div>
        <div>
          <input type="text"placeholder="氏名"/>
        </div>
        <div>
          <input type="text"placeholder="e-mail"/>
        </div>
        <div>
          <input type="text"placeholder="パスワード"/>
        </div>
        <div>
          <input type="text"placeholder="パスワード(確認)"/>
        </div>
        <div>
          <button>新規登録</button>
        </div>
      </form>
    </div>
  )
}

export default SignupPage;
