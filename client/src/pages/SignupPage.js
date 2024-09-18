import React from 'react';
import api from '../services/api';

const SignupPage = () => {
  return (
    <div>
      <h1>新規登録</h1>
      <form>
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
      </form>
    </div>
  )
}
